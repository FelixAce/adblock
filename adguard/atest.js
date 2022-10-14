var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://wsx.felix188.top/adblock/css/javdb.css" type="text/css">');
$done({ body });
