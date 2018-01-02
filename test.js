let express=require("express");
let validation=require("validator");//CHECKING THE USER GIVEN VALUES
let bodyParser=require("body-parser");

let app = express();

app.use(bodyParser());

//THIS IS FOR ISSUING THE BOOK
app.get('/',function(req,res){
    res.sendFile('index.html',{root: './'});
    res.end('hi');   
});

app.post('/bookissue',function(req,res){
    if(!validation.isEmail(req.body.email)) {
                //True or false return by this function.
        res.send("Email is Bad");
    } else if(!validation.isAlpha(req.body.user_name)) {
        res.send("Name is Bad");
    } 
    else{
        res.send("form submitted"); 
        res.end("Book is issued");
    }
});
//THIS IS FOR MEMBERSHIP IN THE LIBRARY
app.get('/membership',function(req,res){
    res.sendFile('contact.html',{root: './'});
    res.end('hi');   
});

console.log("This is for registration ")

app.post('/membershiplog',function(req,res){
    if(!validation.isEmail(req.body.email)) {
                //True or false return by this function.
        res.send("Email is Bad");
    } else if(!validation.isAlpha(req.body.user_name)) {
        res.send("Name is Bad");
    } else if(req.body.mobile.length<10)
    {
        res.send("enter correct mobile number");
    }
    else if(req.body.age<10)
    {
        res.send("you are too young to register");
    }
    else{
        res.send("form submitted And Now you own Menbership in the Library"); 
    }
});


app.listen(3000,function(){
    console.log("Listening at PORT 3000");
});
