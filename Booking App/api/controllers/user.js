import User from "../models/User.js";

//update User
export const updateUser = async (req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
            {new:true})
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
}


//delete User
export const deleteUser = async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(
            req.params.id
            );
        res.status(200).json("User Has been deleted.");
    } catch (error) {
        next(error);
    }
}


//get User
export const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(
            req.params.id
            );
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}


//get all User
export const getUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}    