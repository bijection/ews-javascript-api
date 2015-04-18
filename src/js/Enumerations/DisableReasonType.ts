//todo - move to file where class Microsoft.Exchange.WebServices.Data.DisableAppRequest is located
module Microsoft.Exchange.WebServices.Data {
    export enum DisableReasonType {
        NoReason = 0,
        OutlookClientPerformance = 1,
        OWAClientPerformance = 2,
        MobileClientPerformance = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.DisableReasonType;
export = _export;
