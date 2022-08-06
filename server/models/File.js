
import { MongoClient, ServerApiVersion } from 'mongodb';

function file () {

// database and collection code goes here
const db = client.db("sample_guides");
const coll = db.collection("comets");

const uri = "mongodb+srv://nataliemae:dominick1@cluster0.bnyagzx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi:           ServerApiVersion.v1 });

    client.connect(err => {
    const collection = client.db("test").collection("devices");
  // perform actions on the collection object
    client.close();
});
}

export default file;