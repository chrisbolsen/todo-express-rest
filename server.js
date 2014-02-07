var express = require('express'), 
    contact = require('./routes/contact');
 
var app = express();
app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.json({strict:true}));
});

 
app.get('/contact', contact.findAll); 
app.get('/contact/:id', contact.findById);
app.post('/contact', contact.addContact);
//app.put('/contact/:id', contact.updateClass);
//app.delete('/contact/:id', contact.deleteClass);
 
app.listen(7000);
console.log('Listening on port 7000...');