const mongoose = require('mongoose');

const url = "mongodb+srv://vivekkumar7458020087:vivek84.8@cluster0.uswygmm.mongodb.net/mydbAUG930?retryWrites=true&w=majority";



mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;