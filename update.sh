#!/bin/bash

#install 
npm install --only=prod
 
# Go to client folder
cd client

cp ../../config.example.js src/config.js

# Create dist folder
npm install
npm run build

cp -r ../../media dist/media

#return to original  folder
cd ..

pm2 restart flashback

