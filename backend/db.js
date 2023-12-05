const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);
const mongoURI = 'mongodb+srv://FoodBook:shiva123@cluster0.tejahbb.mongodb.net/FoodBookingMern?retryWrites=true&w=majority';
const mongoDB =async ()=>{

    await mongoose.connect(mongoURI,{useNewUrlParser:true},async(err,result)=>{
     if(err){
         console.log('...',err);
     }else{
         console.log("Mongodb database connected")
      const fetch_data=  await mongoose.connection.db.collection("food_items")
      fetch_data.find({}).toArray(async function(err,data){
        const foodCategory=  await mongoose.connection.db.collection("food_items1")
        foodCategory.find({}).toArray(async function(err,catData){
        
              if(err){
             console.log(err);
          }else{
            global.food_items= data;
            global.foodCategory=catData;
            //  console.log(global.food_items);
          }
        })
            //   if(err){
        //      console.log(err);
        //   }else{
        //     global.food_items= data;
        //      console.log(global.food_items);
        //   }
      })
     }
     })
 }
// const mongoDB = async () => {
//     try {
//     await mongoose.connect(mongoURI);
//     console.log('Connected!');
//     let fetched_data = mongoose.connection.db.collection("food_items");
//     let data=await fetched_data.find({}).toArray() 
//     console.log();
//   } catch (error) {
//     console.log('err: ', error);
//   }
// };
module.exports= mongoDB;
