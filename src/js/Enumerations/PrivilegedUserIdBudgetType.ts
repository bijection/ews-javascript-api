//todo - move to file where class Microsoft.Exchange.WebServices.Dns.PrivilegedUserId is located
module Microsoft.Exchange.WebServices.Data {
    export enum PrivilegedUserIdBudgetType {
        /** */
        Default = 0,
        RunningAsBackgroundLoad = 1,
        Unthrottled = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.PrivilegedUserIdBudgetType;
export = _export;
_export.de