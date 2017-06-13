#!/bin/sh
. ~/.nvm/nvm.sh # This loads nvm

echo 'NVM switch to version used within repository'
nvm use 6.10.3

echo 'node --version'
node --version

echo 'npm --version'
npm --version
