var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://wb.fireflyos.xyz/adblock/css/javlibrary.css" type="text/css">');
$done({ body });
