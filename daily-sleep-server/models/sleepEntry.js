const mongoose = require('mongoose');
const url = process.env.MONGODB_URI;

console.log("Connecting to:", url);


const connectDB = async () => {
    try {
        const result = await mongoose.connect(url);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error.message);
    }
}

connectDB();


const sleepSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    sleepRating: Number,
    dayRating: Number,
    completed: Boolean,
})

sleepSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model('Sleep', sleepSchema);