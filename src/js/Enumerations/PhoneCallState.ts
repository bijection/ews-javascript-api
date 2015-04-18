module Microsoft.Exchange.WebServices.Data {
    export enum PhoneCallState {
        Idle = 0,
        Connecting = 1,
        Alerted = 2,
        Connected = 3,
        Disconnected = 4,
        Incoming = 5,
        Transferring = 6,
        Forwarding = 7
    }
}

import _export = Microsoft.Exchange.WebServices.Data.PhoneCallState;
export = _export;
