module Microsoft.Exchange.WebServices.Data {
    export enum IdFormat {
        EwsLegacyId = 0,
        EwsId = 1,
        EntryId = 2,
        HexEntryId = 3,
        StoreId = 4,
        OwaId = 5
    }
}

import _export = Microsoft.Exchange.WebServices.Data.IdFormat;
export = _export;
