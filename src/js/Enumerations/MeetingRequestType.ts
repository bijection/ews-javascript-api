module Microsoft.Exchange.WebServices.Data {
    export enum MeetingRequestType {
        None = 0,
        FullUpdate = 1,
        InformationalUpdate = 2,
        NewMeetingRequest = 3,
        Outdated = 4,
        SilentUpdate = 5,
        PrincipalWantsCopy = 6
    }
}

import _export = Microsoft.Exchange.WebServices.Data.MeetingRequestType;
export = _export;
