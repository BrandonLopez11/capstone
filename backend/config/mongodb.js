const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI

class Database {

    constructor() {
        this.connectDB();
    }
    connectDB () {
        mongoose
            .connect(mongoURI)
            .then(() => {
                console.log("database is working")
            }).catch((err) =>{
                console.log("connection error ", err)
            })
    }
        
   
}

module.exports = new Database()