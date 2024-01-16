import mongoose from "mongoose";

const connection = async() =>{
    const url =`mongodb+srv://gossainayush:ayush1234@google-docs-clone.hibc2ax.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(url)
        console.log('connected');
    }
    catch(err){
        console.log(err);
    }
}

export default connection