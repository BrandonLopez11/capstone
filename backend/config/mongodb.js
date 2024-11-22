const mongoose = require('mongoose');

class Database {

    constructor() {
        this.connectDB();
    }
    connectDB () {
        mongoose
            .connect("mongodb+srv://lopez97bl:<password>@blopez.8aogk.mongodb.net/?retryWrites=true&w=majority&appName=BLopez")
            .then(() => {
                console.log("database is working")
            }).catch((err) =>{
                console.log("connection error ", err)
            })
    }
        
   
}

module.exports = new Database()