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

git push -f https://github.com/startmc/startmc.github.io master:gh-pages

cd -