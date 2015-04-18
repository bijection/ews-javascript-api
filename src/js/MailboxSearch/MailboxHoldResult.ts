// ---------------------------------------------------------------------------
// <copyright file="MailboxHoldResult.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------

//-----------------------------------------------------------------------
// <summary>Defines the MailboxHoldResult class.</summary>
//-----------------------------------------------------------------------

namespace Microsoft.Exchange.WebServices.Data
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Represents mailbox hold status
    /// </summary>
    public sealed class MailboxHoldStatus
    {
        /// <summary>
        /// Constructor
        /// </summary>
        public MailboxHoldStatus()
        {
        }

        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="mailbox">Mailbox</param>
        /// <param name="status">Hold status</param>
        /// <param name="additionalInfo">Additional info</param>
        public MailboxHoldStatus(string mailbox, HoldStatus status, string additionalInfo)
        {
            Mailbox = mailbox;
            Status = status;
            AdditionalInfo = additionalInfo;
        }

        /// <summary>
        /// Mailbox
        /// </summary>
        public string Mailbox { get; set; }

        /// <summary>
        /// Hold status
        /// </summary>
        public HoldStatus Status { get; set; }

        /// <summary>
        /// Additional info
        /// </summary>
        public string AdditionalInfo { get; set; }
    }

    /// <summary>
    /// Represents mailbox hold result
    /// </summary>
    public sealed class MailboxHoldResult
    {
        /// <summary>
        /// Load from xml
        /// </summary>
        /// <param name="reader">The reader</param>
        /// <returns>Mailbox hold object</returns>
        internal static MailboxHoldResult LoadFromXml(EwsServiceXmlReader reader)
        {
            List<MailboxHoldStatus> statuses = new List<MailboxHoldStatus>();

            reader.ReadStartElement(XmlNamespace.Messages, XmlElementNames.MailboxHoldResult);

            MailboxHoldResult holdResult = new MailboxHoldResult();
            holdResult.HoldId = reader.ReadElementValue(XmlNamespace.Types, XmlElementNames.HoldId);

            // the query could be empty means there won't be Query element, hence needs to read and check
            // if the next element is not Query, then it means already read MailboxHoldStatuses element
            reader.Read();
            holdResult.Query = string.Empty;
            if (reader.IsStartElement(XmlNamespace.Types, XmlElementNames.Query))
            {
                holdResult.Query = reader.ReadElementValue(XmlNamespace.Types, XmlElementNames.Query);
                reader.ReadStartElement(XmlNamespace.Types, XmlElementNames.MailboxHoldStatuses);
            }

            do
            {
                reader.Read();
                if (reader.IsStartElement(XmlNamespace.Types, XmlElementNames.MailboxHoldStatus))
                {
                    string mailbox = reader.ReadElementValue(XmlNamespace.Types, XmlElementNames.Mailbox);
                    HoldStatus status = (HoldStatus)Enum.Parse(typeof(HoldStatus), reader.ReadElementValue(XmlNamespace.Types, XmlElementNames.Status));
                    string additionalInfo = reader.ReadElementValue(XmlNamespace.Types, XmlElementNames.AdditionalInfo);
                    statuses.Add(new MailboxHoldStatus(mailbox, status, additionalInfo));
                }
            }
            while (!reader.IsEndElement(XmlNamespace.Messages, XmlElementNames.MailboxHoldResult));

            holdResult.Statuses = statuses.Count == 0 ? null : statuses.ToArray();

            return holdResult;
        }

        /// <summary>
        /// Load from json
        /// </summary>
        /// <param name="jsonObject">The json object</param>
        /// <returns>Mailbox hold object</returns>
        internal static MailboxHoldResult LoadFromJson(JsonObject jsonObject)
        {
            List<MailboxHoldStatus> statuses = new List<MailboxHoldStatus>();
            MailboxHoldResult holdResult = new MailboxHoldResult();

            if (jsonObject.ContainsKey(XmlElementNames.HoldId))
            {
                holdResult.HoldId = jsonObject.ReadAsString(XmlElementNames.HoldId);
            }

            if (jsonObject.ContainsKey(XmlElementNames.Query))
            {
                holdResult.Query = jsonObject.ReadAsString(XmlElementNames.Query);
            }

            if (jsonObject.ContainsKey(XmlElementNames.Statuses))
            {
                foreach (object statusObject in jsonObject.ReadAsArray(XmlElementNames.Statuses))
                {
                    MailboxHoldStatus status = new MailboxHoldStatus();
                    JsonObject jsonStatus = statusObject as JsonObject;

                    if (jsonStatus.ContainsKey(XmlElementNames.Mailbox))
                    {
                        status.Mailbox = jsonStatus.ReadAsString(XmlElementNames.Mailbox);
                    }

                    if (jsonStatus.ContainsKey(XmlElementNames.Status))
                    {
                        status.Status = (HoldStatus)Enum.Parse(typeof(HoldStatus), jsonStatus.ReadAsString(XmlElementNames.Status));
                    }

                    if (jsonStatus.ContainsKey(XmlElementNames.AdditionalInfo))
                    {
                        status.AdditionalInfo = jsonStatus.ReadAsString(XmlElementNames.AdditionalInfo);
                    }

                    statuses.Add(status);
                }
            }

            holdResult.Statuses = statuses.Count == 0 ? null : statuses.ToArray();

            return holdResult;
        }

        /// <summary>
        /// Hold id
        /// </summary>
        public string HoldId { get; set; }

        /// <summary>
        /// Query
        /// </summary>
        public string Query { get; set; }

        /// <summary>
        /// Collection of mailbox status
        /// </summary>
        public MailboxHoldStatus[] Statuses { get; set; }
    }
}
