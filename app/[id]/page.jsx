"use server"
const dns = require("dns");
const dnsPromises = dns.promises;

async function doLookupAll(domain){
  return dnsPromises.resolveAny(domain)

}
async function doLookupA(domain){
  return dnsPromises.resolve4(domain,{ttl:true}).then((item) =>{
    return item
  }).catch((error) => {
    console.log('gm')
    return []})
}


async function doLookupAAAA(domain){
  
  return dnsPromises.resolve6(domain,{ttl:true}).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no IpV6 Records')
    return []})
}

async function doLookupCname(domain){
  return dnsPromises.resolveCname(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no Cname Records')
    return []})
}

async function doLookupMx(domain){
  return dnsPromises.resolveMx(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no Mx Records')
    return []})
}

async function doLookupTxt(domain){
  return dnsPromises.resolveTxt(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no Txt Records')
    return []})
}

async function doLookupNs(domain){
  return dnsPromises.resolveNs(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no Ns Records')
    return []})
  
}
async function doLookupSrv(domain){
  return dnsPromises.resolveSrv(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no SRV Records')
    return []})
}
async function doLookupCaa(domain){
  return dnsPromises.resolveCaa(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no Caa Records')
    return []})
}

async function doLookupSoa(domain){
  return dnsPromises.resolveSoa(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no Soa Records')
    return []})
}

async function doLookupPtr(domain){
  return dnsPromises.resolvePtr(domain).then((item) =>{
    return item
  }).catch((error) => {
    console.log('no Ptr Records')
    return []})
}
async function doLookupNaptr(domain){
  dns.resolveNaptr(domain,(err,result) =>{
    if(err){
      //console.log(err)
    }else{
      console.log(result)
      return result
    }
  })
}
export default async function Page({ params }) {
  
  const arr4 = await doLookupA(params.id)

  const arr6 = await doLookupAAAA(params.id)
  const arrCNAME = await doLookupCname(params.id)

  const arrMx = await doLookupMx(params.id)

  const arrTxt =  await doLookupTxt(params.id)

  const arrNs =  await doLookupNs(params.id)

  const arrSrv =  await doLookupSrv(params.id)
  const arrCaa =await doLookupCaa(params.id)
  const arrSoa =  await doLookupSoa(params.id)
  const arrPtr = await doLookupPtr(params.id)
  

  return (
    <div className="bg-[#070E27] text-white flex flex-col items-start px-24 gap-12">
      <p className="text-2xl">{params.id}</p>
      <div>
        <h1 className="text-2xl">IPv4 addresses</h1>
          
            {arr4.map((item)=>(
              <div>
              <p >{item.address}</p>
              <p >ttl:{item.ttl}</p>
              </div>
            ))

            }
          
          

      </div>
      <div>
        <h1 className="text-2xl">IPv6 addresses</h1>

        {arr6 === undefined ? null : arr6.map((item)=>(
              <div>
              <p >{item.address}</p>
              <p >ttl:{item.ttl}</p>
              </div>
            ))

            }

      </div>
      <div>
        <h1 className="text-2xl">CNAME addresses</h1>
        {arrCNAME === undefined ? null :
        arrCNAME.map((address) => (
          <div>
          <p >value: {address.value}</p>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-2xl">TXT records</h1>

          <div>
          {arrTxt.map((item)=>(
            <p>{item}</p>
          ))}
          </div>

      </div>
      <div>
        <h1 className="text-2xl">NS records</h1>

          <div>
          <p>{arrNs}</p>
          </div>

      </div>
      <div>
      <h1 className="text-2xl">CAA records</h1>

          <div>
          {
            arrCaa.map((item) => (
              <p >{`critical: ${item.critical},  issue: ${item.issue}`}</p>
            ))
          }
          
          </div>

      </div>
      <div>
      <h1 className="text-2xl">MX records</h1>

          <div>
            {
              arrMx.map((item) =>(
                <p >{`exchange: ${item.exchange},  priority: ${item.priority}`}</p>
              ))
            }
          
          </div>

      </div>
      <div>
      <h1 className="text-2xl">SOA records</h1>
          <div className="flex flex-col">
            <div>
            
              <p>{`nsname: ${arrSoa.nsname},  hostmaster: ${arrSoa.hostmaster}`}</p>
              <p>{`serial: ${arrSoa.serial},  refresh: ${arrSoa.refresh}`}</p>
              <p>{`retry: ${arrSoa.retry},  expire: ${arrSoa.expire}`}</p>
              <p>{`minttl:${arrSoa.minttl}`}</p>
              </div>
            
          

          
              

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
      <div>
      <h1>PTR records</h1>
      {
        arrPtr.map((item) =>(
          <div>
            <p>{item}</p>
          </div>
        ))
      }
      </div>
    </div>
  );
}

