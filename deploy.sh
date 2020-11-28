#!/usr/bin/env sh

set -e #abort on error

npm run build #build

cd dist #enter build dir

git init #initialize new repo

git add -A

git commit -m "deploy"

git push -f https://github.com/startmc/startmc.github.io master:gh-pages

cd -