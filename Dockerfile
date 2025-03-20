FROM node:14

WORKDIR /app 

COPY package.json .

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development"]; \
    then npm install;\
    else npm install --only-production; \
    fi
    
# if my app become big with many files i can make the copy like this => COPY . .
COPY . .

ENV PORT 3000

# i say here that my app is running om port 4000
EXPOSE $PORT
    
# we will began to run the app by this 
CMD ["npm", "run", "start-dev" ]
    