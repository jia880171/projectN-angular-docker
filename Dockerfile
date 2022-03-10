FROM node:16.14-alpine

# Create a directory where our app will be placed
# -p will create all the directories necessaries to fulfill your request, not returning any error in case that directory exists.
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

RUN npm install -g @angular/cli

# Copy dependency definitions
COPY package*.json .

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/


# Expose the port the app runs in
EXPOSE 4200

# # Serve the app
CMD ["npm", "start"]
