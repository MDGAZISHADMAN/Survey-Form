
const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
const uri = `mongodb+srv://madhavisurigala123:madhusri%40123@cluster0.mf09yhi.mongodb.net/?retryWrites=true&w=majority`
async function getConnection() {
    await mongoose.connect(uri, (err)=>{
        if(err){
            console.log("Connection to mongoDB failed");
        }
        else{
            console.log("Connected to MongoDB successfully");
        }
    })
}
module.exports = getConnection;