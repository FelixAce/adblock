var Oldone = '<head>'
var Newone = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/FelixAce/adblock/main/css/javdb.css?token=GHSAT0AAAAAABXWLBLGRIH7MJHMXIKIHQ6OY2H63JQ" type="text/css"><script type="text/javascript"  src="//limbopro.com/Adguard/javbus.js"></script>';
let body = $response.body
.replace(Oldone, Newone);
$done({body});
