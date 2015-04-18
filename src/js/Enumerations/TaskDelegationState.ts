module Microsoft.Exchange.WebServices.Data {
    export enum TaskDelegationState {
        NoDelegation = 0,
        Unknown = 1,
        Accepted = 2,
        Declined = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.TaskDelegationState;
export = _export;
