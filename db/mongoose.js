
const mongoose = require('mongoose');

const databaseUrl = 'workout';

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/quiet-headland-99957', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});