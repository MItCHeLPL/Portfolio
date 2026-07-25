@echo off
echo Generating sitemap.xml...

powershell -NoProfile -ExecutionPolicy Bypass -Command "$baseUrl = 'https://mitchelpl.github.io/Portfolio/'; $files = Get-ChildItem 'pages\*.html' -Name; $date = Get-Date -Format 'yyyy-MM-dd'; $xml = '<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"><url><loc>' + $baseUrl + '</loc><lastmod>' + $date + '</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>'; foreach ($file in $files) { if ($file -ne 'example-project.html' -and $file -ne 'placeholder.html') { $xml += '<url><loc>' + $baseUrl + '?pages/' + $file + '</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>' } }; $xml += '</urlset>'; [xml]$formattedXml = $xml; $formattedXml.Save('sitemap.xml');"

echo Generated.
pause
