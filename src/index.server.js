const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const path = require('path')


//routes
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')
const cors = require('cors')



//environment variable or constants
env.config();

//mongodb connection
mongodb://jibola:<password>@cluster0-shard-00-00.r364o.mongodb.net:27017,cluster0-shard-00-01.r364o.mongodb.net:27017,cluster0-shard-00-02.r364o.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-10wpxw-shard-0&authSource=admin&retryWrites=true&w=majority
//jibola:<password>@cluster0.r364o.mongodb.net/<dbname>?retryWrites=true&w=majority

mongoose.connect(
    
    `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.r364o.mongodb.net:27017,cluster0-shard-00-01.r364o.mongodb.net:27017,cluster0-shard-00-02.r364o.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-10wpxw-shard-0&authSource=admin&retryWrites=true&w=majority`, 
   
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex:true
    }
    ).then(() => {
        console.log('Database connected');
    });


app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname,'uploads' )))
app.use('/api', authRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})