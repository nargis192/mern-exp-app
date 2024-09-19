const mongoose = require('mongoose');

// Define the schema for the "exp" model
const expschema = new mongoose.Schema({
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true // Add this line
      },

    topic:{
        type:String,
        required: true 
    },
    description: {
        type: String,
        required: true // Corrected 'require' to 'required'
    },
    amount: {
        type: Number,
        required: true // Corrected 'require' to 'required'
    }
  
});

// Export the model based on the schema
module.exports = mongoose.model('Exp', expschema);


