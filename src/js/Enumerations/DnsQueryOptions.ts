//todo - move to file where class Microsoft.Exchange.WebServices.Dns.DnsNativeMethods is located
module Microsoft.Exchange.WebServices.Dns.DnsNativeMethods {
    export enum DnsQueryOptions {
        DNS_QUERY_STANDARD = 0
    }
}

import _export = Microsoft.Exchange.WebServices.Dns.DnsNativeMethods.DnsQueryOptions;
export = _export;
