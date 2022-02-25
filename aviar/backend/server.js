const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://aviarUser:caviarPassword@caviar.tbnqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open', function(){
  console.log('Conection has been made!');
}).on('error', function(error){
    console.log('Error is: ', error);
});




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});