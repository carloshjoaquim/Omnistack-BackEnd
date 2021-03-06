const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://oministack:oministack@oministack-o0q9k.mongodb.net/OminiStack?retryWrites=true&w=majority',{
     useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(process.env.PORT || 5000)