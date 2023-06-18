FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json .
#  we don't have any dependency
RUN npm install    
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . ./
ENV PORT 3004
EXPOSE $PORT
CMD ["npm", "run", "dev"]





