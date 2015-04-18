module Microsoft.Exchange.WebServices.Data {
    export enum DelegateFolderPermissionLevel {
        None = 0,
        Editor = 1,
        Reviewer = 2,
        Author = 3,
        Custom = 4
    }
}

import _export = Microsoft.Exchange.WebServices.Data.DelegateFolderPermissionLevel;
export = _export;
