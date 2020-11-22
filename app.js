const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const errorController = require('./controllers/error');


const app = express();

app.set('view engine' , 'ejs');
app.set('views' , 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req,res,next) => {
//     console.log('This always runs');
//     next();
// });


// using '/admin' to filter path
app.use('/admin',adminRoutes);
app.use(shopRoutes);

//Setting error code
app.use(errorController.get404);

const server = http.createServer(app);

server.listen(3000);
 
// 7801505400