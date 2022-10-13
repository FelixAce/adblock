var Oldone = '<head>'
var Newone = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/FelixAce/adblock/main/css/javdb.css" type="text/css"><script type="text/javascript"  src="//raw.githubusercontent.com/FelixAce/adblock/main/adguard/surge_javdb.js"></script>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});
