// ---------------------------------------------------------------------------
// <copyright file="SetHoldOnMailboxesRequest.cs" company="Microsoft">
//     Copyright (c) Microsoft Corporation.  All rights reserved.
// </copyright>
// ---------------------------------------------------------------------------

//-----------------------------------------------------------------------
// <summary>Defines the SetHoldOnMailboxesRequest class.</summary>
//-----------------------------------------------------------------------

namespace Microsoft.Exchange.WebServices.Data
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    /// <summary>
    /// Represents a SetHoldOnMailboxesRequest request.
    /// </summary>
    internal sealed class SetHoldOnMailboxesRequest : SimpleServiceRequestBase, IJsonSerializable
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SetHoldOnMailboxesRequest"/> class.
        /// </summary>
        /// <param name="service">The service.</param>
        internal SetHoldOnMailboxesRequest(ExchangeService service)
            : base(service)
        {
        }

        /// <summary>
        /// Gets the name of the response XML element.
        /// </summary>
        /// <returns>XML element name.</returns>
        internal override string GetResponseXmlElementName()
        {
            return XmlElementNames.SetHoldOnMailboxesResponse;
        }

        /// <summary>
        /// Gets the name of the XML element.
        /// </summary>
        /// <returns>XML element name.</returns>
        internal override string GetXmlElementName()
        {
            return XmlElementNames.SetHoldOnMailboxes;
        }

        /// <summary>
        /// Validate request.
        /// </summary>
        internal override void Validate()
        {
            base.Validate();

            if (string.IsNullOrEmpty(this.HoldId))
            {
                throw new ServiceValidationException(Strings.HoldIdParameterIsNotSpecified);
            }

            if (string.IsNullOrEmpty(this.InPlaceHoldIdentity) && (this.Mailboxes == null || this.Mailboxes.Length == 0))
            {
                throw new ServiceValidationException(Strings.HoldMailboxesParameterIsNotSpecified);
            }
        }

        /// <summary>
        /// Parses the response.
        /// </summary>
        /// <param name="reader">The reader.</param>
        /// <returns>Response object.</returns>
        internal override object ParseResponse(EwsServiceXmlReader reader)
        {
            SetHoldOnMailboxesResponse response = new SetHoldOnMailboxesResponse();
            response.LoadFromXml(reader, GetResponseXmlElementName());
            return response;
        }

        /// <summary>
        /// Writes XML elements.
        /// </summary>
        /// <param name="writer">The writer.</param>
        internal override void WriteElementsToXml(EwsServiceXmlWriter writer)
        {
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ActionType, this.ActionType.ToString());
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.HoldId, this.HoldId);
            writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.Query, this.Query ?? string.Empty);
            if (this.Mailboxes != null && this.Mailboxes.Length > 0)
            {
                writer.WriteStartElement(XmlNamespace.Messages, XmlElementNames.Mailboxes);
                foreach (string mailbox in this.Mailboxes)
                {
                    writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.String, mailbox);
                }

                writer.WriteEndElement();   // Mailboxes
            }

            // Language
            if (!string.IsNullOrEmpty(this.Language))
            {
                writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.Language, this.Language);
            }

            if (!string.IsNullOrEmpty(this.InPlaceHoldIdentity))
            {
                writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.InPlaceHoldIdentity, this.InPlaceHoldIdentity);
            }

            if (!string.IsNullOrEmpty(this.ItemHoldPeriod))
            {
                writer.WriteElementValue(XmlNamespace.Messages, XmlElementNames.ItemHoldPeriod, this.ItemHoldPeriod);
            }
        }

        /// <summary>
        /// Executes this request.
        /// </summary>
        /// <returns>Service response.</returns>
        internal SetHoldOnMailboxesResponse Execute()
        {
            SetHoldOnMailboxesResponse serviceResponse = (SetHoldOnMailboxesResponse)this.InternalExecute();
            return serviceResponse;
        }

        /// <summary>
        /// Gets the request version.
        /// </summary>
        /// <returns>Earliest Exchange version in which this request is supported.</returns>
        internal override ExchangeVersion GetMinimumRequiredServerVersion()
        {
            return ExchangeVersion.Exchange2013;
        }

        /// <summary>
        /// Creates a JSON representation of this object.
        /// </summary>
        /// <param name="service">The service.</param>
        /// <returns>
        /// A Json value (either a JsonObject, an array of Json values, or a Json primitive)
        /// </returns>
        object IJsonSerializable.ToJson(ExchangeService service)
        {
            JsonObject jsonObject = new JsonObject();

            return jsonObject;
        }

        /// <summary>
        /// Action type
        /// </summary>
        public HoldAction ActionType { get; set; }

        /// <summary>
        /// Hold id
        /// </summary>
        public string HoldId { get; set; }

        /// <summary>
        /// Query
        /// </summary>
        public string Query { get; set; }

        /// <summary>
        /// Collection of mailboxes to be held/unheld
        /// </summary>
        public string[] Mailboxes { get; set; }

        /// <summary>
        /// Query language
        /// </summary>
        public string Language { get; set; }

        /// <summary>
        /// InPlaceHold Identity
        /// </summary>
        public string InPlaceHoldIdentity { get; set; }

        /// <summary>
        /// Item hold period
        /// </summary>
        public string ItemHoldPeriod { get; set; }
    }
}