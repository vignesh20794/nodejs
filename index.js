// var oauth2orize = require('oauth2orize');
// var mongoose = require(mongoose);
// var schema = require(mongoos.schema);
// var server = oauth2orize.createServer();
// console.log("server",server); 

var express = require('express');
// Set up the express app
const app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name:{type:String},
    userid:{type:Number},
    emailId:{type:String},
    address:{type:String}
})

var User = mongoose.model('User',userSchema);

app.get('/users',function(req,res) {
    User.find({},(err,users)=>{
        console.log("users fetched",users);
        return users;
    },error=>{
        return error;
    })
});

app.post('/',function(req,res){
    console.log("req.body",req.body);
    User.save(req.body,(err,user)=>{
        return user
    },error=>{
        return error;
    })
})

app.listen(5000,()=>{
    console.log("running on port 5000")
});
