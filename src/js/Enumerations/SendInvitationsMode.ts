module Microsoft.Exchange.WebServices.Data {
    export enum SendInvitationsMode {
        SendToNone = 0,
        SendOnlyToAll = 1,
        SendToAllAndSaveCopy = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.SendInvitationsMode;
export = _export;
