#!/bin/sh
echo 'Installing dependencies...'
npm install

echo 'Running e2e tests'
npm run bs

echo 'Done.'
