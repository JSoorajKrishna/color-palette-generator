const express = require("express");
const mongoose = require("mongoose");
const {Rgb,credential} = require("./models/pallete");

const app = express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


const urldb = "mongodb+srv://JSoorajKrishna:12345@pollbooth.cgszb.mongodb.net/rgb?retryWrites=true&w=majority";
mongoose.connect(urldb,{useNewUrlParser: true,useUnifiedTopology: true})
        .then((result) =>app.listen(3000))
        .catch((err) =>console.log(err));

let login = false;


app.get("/",(req,res) =>{
    res.render("index");
});

app.get("/register",(req,res) =>{
    res.render("register");
});

app.get("/login",(req,res) =>{
    res.render("login");
});

app.post("/register",(req,res) =>{
    let k=0;
    const details = new credential(req.body);
    credential.find()
            .then((result) =>{
                for(let i=0;i<result.length;i++)
                    if(req.body.email == result[i].email)
                    {
                        k++;
                        res.redirect("/register");
                        break;
                    }
                    if(k==0)
                    {
                    details.save();
                    res.redirect("/login");
                    }
            })
            .catch((err) =>{console.log(err);});
});

app.post("/login",(req,res) =>{
    let k=0;
    credential.find()
            .then((result) =>{
                for(let i=0;i<result.length;i++)
                {
                    if(req.body.email == result[i].email)
                        {
                            if(req.body.password == result[i].password)
                        {
                            k++;
                            login = true;
                            res.redirect("/dashboard");
                        }
                        break;
                        }
                }
                if(k==0)
                res.redirect("/login");
            })
            .catch((err) =>{console.log(err)});
});

app.get("/dashboard",(req,res) =>{
    if(login)
    res.render("pallete");
    else{
        res.redirect("/login");
    }
});

app.get("/dashboard/:rgb",(req,res) =>{
    if(login)
    {
        let rgb = req.params.rgb;
        rgb = new Rgb({rgb});
        rgb.save()
        .then()
        .catch((err) =>console.log(err));
        
        res.redirect("/dashboard");
    }
    else{
        res.redirect("/login");
    }
});