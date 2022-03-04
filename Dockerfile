FROM node:16.14-alpine

# Create a directory where our app will be placed
# -p will create all the directories necessaries to fulfill your request, not returning any error in case that directory exists.
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Get all the code needed to run the app
COPY . /app/

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

RUN npm install -g @angular/cli

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]
