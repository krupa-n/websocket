# websocket
This repo contains sample websocket client and server program in Node.
This program depicts the functionality of streaming logs(tailing) from a kubernetes sample pod.

The nodeserver connects to kubernetes pod using the kubernetes API and tails the logs.

The logs are streamed back to the websocket client.

Usage
Step 1: Install npm 
Step 2: Install nodejs
