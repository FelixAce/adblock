var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://wb.test.com/adblock/css/91porn.css" type="text/css">');
$done({ body });
