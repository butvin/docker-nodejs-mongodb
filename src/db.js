// include mongoose package
const mongoose = require('mongoose');

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;


mongoose.connect(url, options).then(function () {
    console.log(`mongodb is connected now`);
}).catch(function (error) {
    console.log(error);
    console.error(error);
}).finally(() => {
    console.info('__THIS_CLOSURE__', this);
});