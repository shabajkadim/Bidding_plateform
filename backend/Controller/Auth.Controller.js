// import userSchema from "../models/user.Schema.js"
// import bcrypt from 'bcrypt'
// // import validator from "validator"
// import jwt from 'jsonwebtoken'
// export const Register=async(req,res)=>{
//     // res.send("register page")
//    try{
//     const {firstname,lastname,email,password,confirmPassword}=req.body
    

//     if(!firstname,!lastname,!email,!password,!confirmPassword){
//         return res.status(400).json({success:false, message:"all feild are require"})
//     }

//     // const emailvalidator=await validator.isEmail('@gmail.com')
    
//     // if(!emailvalidator){
//     //     return res.status(400).json({success:false,message:"please fill correct email"})
//     // }

//     const emailisExist=await userSchema.find({email:email})

//     if(emailisExist.length >0 ){
//         return res.status(400).json({success:false, message:"Emaiol is already exist"})
//     }

//     if(password !== confirmPassword){
//         return res.status(400).json({message:"password and confirm not same"})
//     }

//     const hashPassword=await bcrypt.hashSync(password,10)

//     const user=await userSchema({
//         firstname:firstname,
//         lastname:lastname,
//         email:email,
//         password:hashPassword
//     })
//     await user.save()
//     return res.status(200).json({success:true,message:"register successfull"})
//    } catch(error){
//     return res.status(500).json({error:error})
//    }


// }



// export const Login=async(req,res)=>{
//     // res.send("Login page")

//     try{
//         const {email,password}=req.body

//         if(!email,!password){
//             return res.status(400).json({success:false,message:"all feild are requiured"})
//         }

//         const user=await userSchema.findOne({email:email})

//         const iscorrectPassword=await bcrypt.compare(password,user.password)

//         if(!iscorrectPassword){
//             return res.status(400).json({success:false,message:"password are not match"})
//         }

//         const token=await jwt.sign({userId:user._id},process.env.JWT_SECRET)
//         console.log(token,"token");

//         res.status(200).json({success:true,message:"Login "})
//     }catch(error){
//         res.status(500).json({success:false,error:error})
//     }
// }

import userSchema from "../models/user.Schema.js";
import bcrypt from 'bcrypt';
import validator from "validator";
import jwt from 'jsonwebtoken';

export const Register = async (req, res) => {
    try {
        const { firstname, lastname, email, password, confirmPassword } = req.body;

        if (!firstname || !lastname || !email || !password || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        const emailIsExist = await userSchema.findOne({ email: email });

        if (emailIsExist) {
            return res.status(400).json({ success: false, message: "Email already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Password and confirm password do not match" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new userSchema({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: hashPassword
        });

        await user.save();
        return res.status(201).json({ success: true, message: "Registration successful" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const user = await userSchema.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);

        if (!isCorrectPassword) {
            return res.status(400).json({ success: false, message: "Incorrect password" });
        }

        const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        console.log(token, "token");

        return res.status(200).json({ success: true, message: "Login successful", token: token });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};
