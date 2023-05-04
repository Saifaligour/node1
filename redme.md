<!--  we are manging dokcer with env -->
docker run -d -p 4000:3004 -v $(pwd):/app -v /app/node_modules --env-file .env --name node node