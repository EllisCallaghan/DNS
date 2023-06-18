
const dns = require("dns");
const dnsPromises = dns.promises;

async function doLookup4(domain) {
  return dnsPromises.resolve4(domain,{ttl:true})
  }

async function doLookupNs(domain) {
  return dnsPromises.resolveNs(domain,{ttl:true});
}

async function doLookupCaa(domain) {
  return dnsPromises.resolveCaa(domain,{ttl:true})}
  
async function doLookupMx(domain) {
  return dnsPromises.resolveMx(domain);
}

async function doLookupSoa(domain) {
  return dnsPromises.resolveSoa(domain);
}



export default async function Page({ params }) {
  const arr4 = await doLookup4(params.id);
  const arrNs = await doLookupNs(params.id);
  const arrCaa = await doLookupCaa(params.id)
  const arrMx = await doLookupMx(params.id)
  const arrSoa = await doLookupSoa(params.id)
  console.log(arrCaa)

  return (
    <div className="bg-[#070E27] text-white flex flex-col items-start px-24 gap-12">
      <p className="text-2xl">{params.id}</p>
      <div>
        <h1 className="text-2xl">IPv4 addresses</h1>
        {
        arr4.map((address) => (
          <div>
          <p >{address.address}</p>
          <p >{address.ttl}</p>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-2xl">NS records</h1>
        {arrNs.map((address) => (
          <div>
          <p >{address}</p>
          </div>
        ))}
      </div>
      <div>
      <h1 className="text-2xl">CAA records</h1>
        { 
        arrCaa.map((address) => (
          <div>
          <p >{`critical: ${address.critical},  issue: ${address.issue}`}</p>
          </div>
        ))}
      </div>
      <div>
      <h1 className="text-2xl">MX records</h1>
        {arrMx.map((address) => (
          <div>
          <p >{`exchange: ${address.exchange},  priority: ${address.priority}`}</p>
          </div>
        ))}
      </div>
      <div>
      <h1 className="text-2xl">SOA records</h1>
          <div className="flex flex-col">
          <p>{`nsname: ${arrSoa.nsname},  hostmaster: ${arrSoa.hostmaster}`}</p>
          <p>{`serial: ${arrSoa.serial},  refresh: ${arrSoa.refresh}`}</p>
          <p>{`retry: ${arrSoa.retry},  expire: ${arrSoa.expire}`}</p>
          <p>{`minttl:${arrSoa.minttl}`}</p>
          </div>
      </div>
    </div>
  );
}

