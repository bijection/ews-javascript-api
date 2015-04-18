module Microsoft.Exchange.WebServices.Data {
    export enum SendInvitationsOrCancellationsMode {
        SendToNone = 0,
        SendOnlyToAll = 1,
        SendOnlyToChanged = 2,
        SendToAllAndSaveCopy = 3,
        SendToChangedAndSaveCopy = 4
    }
}

import _export = Microsoft.Exchange.WebServices.Data.SendInvitationsOrCancellationsMode;
export = _export;
