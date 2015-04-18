module Microsoft.Exchange.WebServices.Data {
    /** Defines the type of aggregation to perform.*/
    export enum AggregateType {
        /** The minimum value is calculated. */
        Minimum = 0,
        /** The maximum value is calculated. */
        Maximum = 1
    }
}

import _export = Microsoft.Exchange.WebServices.Data.AggregateType;
export = _export;
