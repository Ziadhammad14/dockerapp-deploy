FROM node:18 as base 

FROM base as development 

WORKDIR /app 
COPY package.json .
RUN npm install
COPY . .
EXPOSE 80
CMD ["npm", "run", "start-dev" ]

FROM base as production 

WORKDIR /app 
COPY package.json .
RUN npm install --only=production
COPY . .
EXPOSE 4000
CMD ["npm", "start" ]
    