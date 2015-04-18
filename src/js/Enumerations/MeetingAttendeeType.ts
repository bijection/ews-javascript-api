module Microsoft.Exchange.WebServices.Data {
    export enum MeetingAttendeeType {
        Organizer = 0,
        Required = 1,
        Optional = 2,
        Room = 3,
        Resource = 4
    }
}

import _export = Microsoft.Exchange.WebServices.Data.MeetingAttendeeType;
export = _export;
