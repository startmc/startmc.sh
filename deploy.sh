#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cd dist

# echo 'www.example.com' > CNAME

git init

git add -A

git commit -m 'deploy'

git push -f git@github.com:stijnb1234/startmc.sh.git master:gh-pages

cd -