const mongoose = require('mongoose')
//console.log(process.env.DB_URL)

mongoose.connect(process.env.DB_URL,{ 
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("ecom-api database connected successfully")
}).catch((err)=>{
    console.log(err)
    console.log("ecom-api database connection failed")
})



