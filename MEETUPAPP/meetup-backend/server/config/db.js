import mongoose, { models, mongo } from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/meetupME');
    mongoose.connection
        .once('open', () => console.log('Mongodb running'))
        .on('error',err => console.error(err))
};

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/meetupME');
// mongoose.connection(function(err){
//     if(err){
//         console.error(err);
//     }
//     else{
//         console.log('Mongodb running')
//     } 
// })

// module.exports = mongoose;