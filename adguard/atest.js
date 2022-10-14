var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://wb.fireflyos.xyz/adblock/css/javdb.css" type="text/css">');
$done({ body });
