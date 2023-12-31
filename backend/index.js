const express = require('express')
const app = express()
const port = 8080
const mongoDB= require('./db');
mongoDB();
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","https://stellar-shortbread-5121bf.netlify.app/");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-type, Accept"
//   );
//   next();
// })

app.use(cors({origin:"https://stellar-shortbread-5121bf.netlify.app/",Credential:true}))

app.use(express.json())
app.use('/api',require("./routes/CreateUser"));
app.use('/api',require("./routes/DisplayData"));
app.use('/api',require("./routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})