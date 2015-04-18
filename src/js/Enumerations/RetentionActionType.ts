module Microsoft.Exchange.WebServices.Data {
    export enum RetentionActionType {
        None = 0,
        MoveToDeletedItems = 1,
        MoveToFolder = 2,
        DeleteAndAllowRecovery = 3,
        PermanentlyDelete = 4,
        MarkAsPastRetentionLimit = 5,
        MoveToArchive = 6
    }
}

import _export = Microsoft.Exchange.WebServices.Data.RetentionActionType;
export = _export;
