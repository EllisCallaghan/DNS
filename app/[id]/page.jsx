
const dns = require("dns");
const dnsPromises = dns.promises;

async function doLookupAll(domain){
  return dnsPromises.resolveAny(domain)

}
async function doLookupA(domain){
  try {
    return dnsPromises.resolve4(domain)
  } catch (error) {
    return error
  }
  
}

async function doLookupAAAA(domain){
  try {
    return dnsPromises.resolve6(domain)
  } catch (error) {
    return error
  }}

async function doLookupCname(domain){
  return dnsPromises.resolveCname(domain)
}

async function doLookupMx(domain){
  return dnsPromises.resolveMx(domain)
}

async function doLookupTxt(domain){
  return dnsPromises.resolveTxt(domain)
}

async function doLookupNs(domain){
  return dnsPromises.resolveNs(domain)
}
async function doLookupSrv(domain){
  return dnsPromises.resolveSrv(domain)
}
async function doLookupCaa(domain){
  return dnsPromises.resolveCaa(domain)
}

async function doLookupSoa(domain){
  return dnsPromises.resolveSoa(domain)
}

async function doLookupPtr(domain){
  return dnsPromises.resolvePtr(domain)
}
async function doLookupNaptr(domain){
  return dnsPromises.resolveNaptr(domain)
}
export default async function Page({ params }) {
  

  const arr4 = await doLookupA(params.id)
  if(arr4.length === 0){
    arr4.push({address: "No Record",ttl: "No Record"})
  };
  
  const arr6 = await doLookupAAAA(params.id)
  if(arr6.length === 0){
    arr6.push({address: "No Record",ttl: "No Record"})
  };

  const arrCNAME = await doLookupCname(params.id)
  if(arrCNAME.length === 0){
    arrCNAME.push({value:'no record'})
  };

  const arrMx = await await doLookupMx(params.id)
  if(arrMx.length === 0){
    arrCNAME.push({exchange:'No Record',priority:'No Record'})
  };

  const arrTxt = await await doLookupTxt(params.id)

  const arrNs = await await doLookupNs(params.id)
  
  const arrSrv = await await doLookupSrv(params.id)
  if(arrSrv.length === 0){
    arrSrv.push({priority:NaN,weight:NaN,port:NaN,name:"No Record"})
  }

  const arrCaa = await await doLookupCaa(params.id)
  if(arrCaa.length === 0){
    arrCaa.push({critical:NaN,issue:'No Record',iodef:'No Record'})
  }

  const arrSoa = await await doLookupSoa(params.id)

  

  return (
    <div className="bg-[#070E27] text-white flex flex-col items-start px-24 gap-12">
      <p className="text-2xl">{params.id}</p>
      <div>
        <h1 className="text-2xl">IPv4 addresses</h1>
        {
        arr4.map((address) => (
          <div>
          <p >{address.address}</p>
          <p >ttl:{address.ttl}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-2xl">IPv6 addresses</h1>
        {
        arr6.map((address) => (
          <div>
          <p >{address.address}</p>
          <p >ttl:{address.ttl}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-2xl">CNAME addresses</h1>
        {
        arrCNAME.map((address) => (
          <div>
          <p >value: {address.value}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-2xl">TXT records</h1>
        {arrTxt.map((address) => (
          <div>
          <p>{address.entries}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-2xl">NS records</h1>
        {arrNs.map((address) => (
          <div>
          <p>{address.value}</p>
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
            {arrSoa.map((address => (
              <div>
              <p>{`nsname: ${address.nsname},  hostmaster: ${address.hostmaster}`}</p>
              <p>{`serial: ${address.serial},  refresh: ${address.refresh}`}</p>
              <p>{`retry: ${address.retry},  expire: ${address.expire}`}</p>
              <p>{`minttl:${address.minttl}`}</p>
              </div>
            )))
          }
          </div>
      </div>
      <div>
      <h1>SRV records</h1>
      {
        arrSrv.map((address) =>(
          <div>
            <p>{`priority:${address.priority}, weight:${address.weight}`}</p>
            <p>{`port:${address.port}, name:${address.name}`}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

