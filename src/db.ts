import mongoose from 'npm:mongoose'

try{
    const db = await mongoose.connect('mongodb://localhost/mymongo');
    console.log('Database is connected', db.connection.name);
} catch (error) {
    console.error(error);
}