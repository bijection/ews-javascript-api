//todo - move to file where class Microsoft.Exchange.WebServices.Data.OnlineMeetingSettings is located
module Microsoft.Exchange.WebServices.Data {
    export enum LobbyBypass {
        Disabled = 0,
        EnabledForGatewayParticipants = 1
    }
}

import _export = Microsoft.Exchange.WebServices.Data.LobbyBypass;
export = _export;
