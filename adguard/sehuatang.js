var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://wb.test.com/adblock/css/sehuatang.css" type="text/css">');
$done({ body });
