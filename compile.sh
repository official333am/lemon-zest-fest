#!/bin/bash

rm -rf docs/
ng build
cp CNAME "docs"
cp .htaccess "docs"
git add .
git commit -m "update - %date% %time%"
git fetch
git push