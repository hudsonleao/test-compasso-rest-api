const mongoose = require('mongoose');
module.exports = () => {

    const { env: { DATABASE_URL, DATABASE_USER, DATABASE_PASSWORD } } = process;
    
    console.log('Connecting to the database...\n')
    
    mongoose.connect(`mongodb://${DATABASE_URL}${DATABASE_USER && DATABASE_PASSWORD ? '@' + DATABASE_USER + ':' + DATABASE_PASSWORD : ''}/compasso-rest-api`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
        .then(() => console.log('Connection to the database established.'))
        .catch((error) => console.log(`Error connecting to the database: ${error}`));
};