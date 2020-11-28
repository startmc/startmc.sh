#!/usr/bin/env sh

set -e #abort on error

npm run build #build

cd dist #enter build dir

echo "startmc.sh" > CNAME #echo domain to CNAME

git init #initialize new repo

git add -A

git commit -m "deploy"

git push -f github.com/startmc/startmc.github.io master:gh-pages

cd -