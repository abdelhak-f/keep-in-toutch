const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    firstname : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^([\w\-\.]+)@((\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([\w\-]+\.)+)([a-zA-Z]{2,4}))$/,
    "please provide a valid email"
]
    },
    phone : {
        type: Number,
        required: true,
        unique: true
    },
    message : {
        type: String,
        required: true,
    },
    // 
});
 

module.exports  = mongoose.model("client", clientSchema);

// module.exports = Client  ;