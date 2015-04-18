module Microsoft.Exchange.WebServices.Data {
    export enum ComparisonMode {
        Exact = 0,
        IgnoreCase = 1,
        IgnoreNonSpacingCharacters = 2,
        IgnoreCaseAndNonSpacingCharacters = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.ComparisonMode;
export = _export;
