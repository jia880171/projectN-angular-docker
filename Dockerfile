FROM node:16.14-alpine

RUN mkdir -p /app

WORKDIR /app

RUN npm install -g @angular/cli

# Expose the port the app runs in
EXPOSE 4200

# -d is a operator to test if the given directory exists or not.
CMD [ -d "node_modules" ] && npm run start || npm install && npm run start

