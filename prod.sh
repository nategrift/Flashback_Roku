#!/bin/bash

#install 
npm install --only=prod
 
# Go to client folder
cd client

# Create dist folder
npm install
npm run build

#return to original  folder
cd ..

