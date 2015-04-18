module Microsoft.Exchange.WebServices.Data {
    export enum TeamMailboxLifecycleState {
        Active = 0,
        Closed = 1,
        Unlinked = 2,
        PendingDelete = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.TeamMailboxLifecycleState;
export = _export;
