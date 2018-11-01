let mongoose = require('mongoose');
let app = require('./app');
let port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/MiBd')
.then(() => {
app.listen(port, () => console.log('Corriendo en el puerto 3000'))
}).catch(err => console.log(err));