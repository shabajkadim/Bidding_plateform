import productSchema from "../models/product.Schema.js";

export const AddProduct = async (req, res) => {
    try {
        // const { name, category, image, price, description } = req.body; 
        const { name, category, image, price, description } = req.body.uploadedData

        if (!name || !category || !image || !price || !description) {
            return res.status(400).send("All fields are required"); 
        }
    
        const product = new productSchema({
            name: name,
            category: category,
            image: image,
            price: price,
            description: description
        });
        await product.save();
        return res.status(200).json({ success: true, message: "uploaded successfully" }); 
    } catch (error) {
        return res.status(500).json({ error:error, success:false });
    }
};


export const getProduct=async(req,res)=>{
    // res.send("get product")
    try{
        const getAllData=await productSchema.find({})
        res.status(200).json({getAllData:getAllData , success:true})

    }catch(error){
        res.status(500).json({success:false,error:error})
    }
}