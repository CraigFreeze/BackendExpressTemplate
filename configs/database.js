//  USE THE FOLLOWING CODE TO IMPORT MODULE: const { database } = require("./configs/database")
const { dbVars } = require('./env')
const { MongoClient } = require('mongodb');

// DATABASE CONNECTION //
const uri = `mongodb+srv://${dbVars.DB_Username}:${dbVars.DB_Password}@cluster0.tr6nq.mongodb.net/`
const client = new MongoClient(uri);

const database = {}

// Initialize database
database.init = async function () {
    try {
        await client.connect();
        console.log("connection started - database init");

        await listDatabases(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
        console.log("connection ended - database init");
    }
}

database.connect = async function () {
    await client.connect();
    console.log("connection started!");
}


database.close = async function () {
    await client.close();
    console.log("connection ended!");
}

// *** General Database Functions:
async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    })
}


module.exports = {
    database
}