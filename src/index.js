    const express = require('express');
    const mongoose = require('mongoose');
    const redis = require('redis');
    //const {Clinet, Client} = require('pg')

    // init app
    const PORT = process.env.PORT || 80;
    const app = express();
    //connect to redis 
    const REDIS_PORT = 6379;
    const REDIS_HOST ='redis';
    const redisClient = redis.createClient({
        url: `redis://${REDIS_HOST}:${REDIS_PORT}`
    });
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
    redisClient.on('connect', () => console.log('connected to redis...'));
    redisClient.connect();
    //connect db
    //const DB_USER = 'root';
    //const PASSWORD_DB = 'example';
    //const PORT_DB = 5432;
    //const DB_HOST = "postgres"
    //const URI = `postgresql://${DB_USER}:${PASSWORD_DB}@${DB_HOST}:${PORT_DB}`;
    //const client = new Client({
    //    connectionString: URI,
    //});
    //client
    //    .connect()
    //    .then(() => console.log('connected to postgres db...'))
    //    .catch((err) => console.log('failed to connect to postgres db:', err));




    const USER_DB = 'root';
    const PASSWORD_DB = 'example';
    const PORT_DB = 27017;
    const DB_HOST = "mongo"
    const URI = `mongodb://${USER_DB}:${PASSWORD_DB}@${DB_HOST}:${PORT_DB}`;
    mongoose
        .connect(URI)
        .then(() => console.log('connected to DB'))
        .catch((err) => console.log('failed to connect to DB:', err));


    app.get('/',(req , res) =>{
    redisClient.set('prodects', 'products...')       
    res.send('<h1> Hello world:testing the letest </h1>')
    });

    app.get('/data',     async (req , res) =>{
        const products =await redisClient.get('prodects');

        res.send(`<h1> Hello world:testing the letest </h1> <h2>${products}</h2>`)
        });

    app.listen(PORT, () => console.log(`app is up and running on port: ${PORT}`));