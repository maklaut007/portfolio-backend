const express = require('express');
const morgan = require('morgan')
const emailRoutes = require('./routes/email');

const app = express();

app.use(morgan('dev'));
app.use(express.json());


app.use((req, res, next) => { 
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers", 
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method==='OPTIONS'){
      req.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT');
      return res.status(200).json({});
    }
    next();
})

app.use('/email', emailRoutes);
app.get('/', function (req, res) {
    return res.send("Wellcome to Maksym Zinchenko personal website");
  })
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;