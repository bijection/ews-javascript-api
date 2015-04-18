module Microsoft.Exchange.WebServices.Data {
    export enum ConnectionFailureCause {
        None = 0,
        UserBusy = 1,
        NoAnswer = 2,
        Unavailable = 3,
        Other = 4
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ConnectionFailureCause;
export = _export;
