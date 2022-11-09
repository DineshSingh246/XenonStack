const mongoose = require('mongoose');
mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error Connecting Database'));
db.once('open',function(){
    console.log("Database Connected");
});