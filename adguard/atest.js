var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://raw.githubusercontent.com/FelixAce/adblock/main/css/javdb.css" type="text/css">');
$done({ body });
