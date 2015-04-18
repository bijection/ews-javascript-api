module Microsoft.Exchange.WebServices.Data {
    export enum Sensitivity {
        Normal = 0,
        Personal = 1,
        Private = 2,
        Confidential = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.Sensitivity;
export = _export;
