import mongoose, { Schema } from "mongoose";

const UploadPro=new Schema({
    // name: {
    //     type: String,
    //     required: true
    //   },
    //   price: {
    //     type: Number,
    //     required: true
    //   }

    name:{
      type:String,
      require:true
  },
  category:{
      type:String,
      require:true
  },
  image:{
      type:String,
      require:true
  },
  price:{
      type:Number,
      require:true
  },

  isAvailable:{
      type:String,
      require:true
  },
  description:{
      type:String,
      require:true
  }
})
export default mongoose.model("NewProduct",UploadPro)