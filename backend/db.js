const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adminUser:7pH4LDTnmlLMsCSA@cluster0.ngu0t.mongodb.net/newDatabase?retryWrites=true&w=majority', err => {
    if(!err){
        console.log('DB Connection Sucessful');
    } else {
        console.log('Error in Connection' + err);
    }
})

module.exports = mongoose;