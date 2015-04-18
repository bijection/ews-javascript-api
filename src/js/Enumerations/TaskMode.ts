module Microsoft.Exchange.WebServices.Data {
    export enum TaskMode {
        Normal = 0,
        Request = 1,
        RequestAccepted = 2,
        RequestDeclined = 3,
        Update = 4,
        SelfDelegated = 5
    }
}

import _export = Microsoft.Exchange.WebServices.Data.TaskMode;
export = _export;
