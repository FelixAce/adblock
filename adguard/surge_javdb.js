var Oldone = '<head>'
var Newone = '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/FelixAce/adblock/main/css/javdb.css" type="text/css">;
let body = $response.body
.replace(Oldone, Newone);
$done({body});
