const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const seedDb = require('./seed');
const blogroutes = require('./routes/pages');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.connect('mongodb://localhost:27017/blogApp', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false,
        useCreateIndex:true
    })
    .then(()=>{
        console.log('Database Connected');
    })
    .catch(error=>{
        console.log('Error while connecting to Databse');
        throw error;
});

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded(({extended:true})));
app.use(methodOverride('_method'));

const sessionConfig = {
    secret: 'neednosecret',
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
 // seedDb();
app.get('/', (req,res)=>{
    res.render('blog/home');
})
app.use(blogroutes);

app.listen(3000, ()=>{
    console.log('Server running at port 3000');
})