module Microsoft.Exchange.WebServices.Data {
    export enum LegacyFreeBusyStatus {
        Free = 0,
        Tentative = 1,
        Busy = 2,
        OOF = 3,
        WorkingElsewhere = 4,
        NoData = 5
    }
}

import _export = Microsoft.Exchange.WebServices.Data.LegacyFreeBusyStatus;
export = _export;
