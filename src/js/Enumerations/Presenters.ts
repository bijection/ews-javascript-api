//todo - move to file where class Microsoft.Exchange.WebServices.Data.OnlineMeetingSettings is located

module Microsoft.Exchange.WebServices.Data {
    export enum Presenters {
        Disabled = 0,
        Internal = 1,
        Everyone = 2
    }
}

import _export = Microsoft.Exchange.WebServices.Data.Presenters;
export = _export;
