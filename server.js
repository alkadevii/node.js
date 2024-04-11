const express= require('express');
require('dotenv').config({ path: './config/config.env' });
const errorHandler= require('./middleware/errorHandler.js');
// var cors=require('cors');

const app=express();

// app.use(cors());

const PORT = process.env.PORT || 9000;
console.log(process.env.PORT);

app.use(express.json());

const courseRoutes = require('./routes/courseRoute.js');
app.use('/api/courses',courseRoutes);



app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

