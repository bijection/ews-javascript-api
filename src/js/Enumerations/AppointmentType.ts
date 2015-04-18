module Microsoft.Exchange.WebServices.Data {
    export enum AppointmentType {
        Single = 0,
        Occurrence = 1,
        Exception = 2,
        RecurringMaster = 3
    }
}

import _export = Microsoft.Exchange.WebServices.Data.AppointmentType;
export = _export;
