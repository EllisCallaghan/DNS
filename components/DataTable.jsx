import { Table,TableContainer,TableHead,TableRow,TableCell,Paper, TableBody } from "@mui/material"

function createData(type,description,Function){
  return{type,description,Function};
}

const rows = [
  createData('A','IPv4 Address record','	Maps hostnames to a 32-bit IP address (IPv4) of the host'),
  createData('AAAA','IPv6 Address record','	Maps hostnames to a 128-bit IP address (IPv6) of the host'),
  createData('CNAME','Canonical name record','Alias of one name to another: the DNS lookup will continue by retrying the lookup with the new name.'),
  createData('MX','Mail exchange record','	Maps a domain name to a list of message transfer agents for that domain'),
  createData('TXT','Text record','Originally for arbitrary human-readable text in a DNS record. However, this record now more often contains machine-readable data.'),
  createData('NS','Name server record','Delegates a DNS zone to use the given authoritative name servers  '),
  createData('SRV','Service locator','Generalized service location record, used for newer protocols instead of creating protocol-specific records such as MX.'),
  createData('HINFO','Host Information','Providing Minimal-Sized Responses to DNS Queries That Have QTYPE=ANY'),
  createData('SOA','Start of authority record','Specifies authoritative information about a DNS zone, including the primary name server, the email of the domain administrator, the domain serial number, and several timers relating to refreshing the zone'),
  createData('NAPTR','Naming Authority Pointer','Allows regular-expression-based rewriting of domain names which can then be used as URIs, further domain names to lookups, etc.')
]

const DataTable = () => {
  return (
    <TableContainer component={Paper}>
        <Table sx={{backgroundColor:'#070E27', border:'none'}}>
            <TableHead>
                <TableRow >
                    <TableCell sx={{color:'white',borderBottom:'none'}} align="center">Type</TableCell>
                    <TableCell sx={{color:'white',borderBottom:'none'}} align="left">Description</TableCell>
                    <TableCell sx={{color:'white',borderBottom:'none'}} align="left">Function</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell sx={{color:'white',borderBottom:'none'}} align="center">{row.type}</TableCell>
                  <TableCell sx={{color:'white',borderBottom:'none'}} align="left">{row.description}</TableCell>
                  <TableCell sx={{color:'white',borderBottom:'none'}} align="left">{row.Function}</TableCell>
                </TableRow>
              ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default DataTable