# Docker + Puppeteer for Macbook M1 Silicon Arm64

Run Puppeteer in a Docker container.

Action | Command
:--- | :---
Docker Image | `docker build -t puppeteer-image .`
Docker Container | `docker run -d -it -v $(pwd):/src --name puppeteer-container puppeteer-image`
SSH into Docker Container | `docker exec -it puppeteer-container bash`
Install | `npm install`
Run | `npm run start`
