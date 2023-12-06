import { User } from '../models/User.js';

export const register = async(req, res) => {
    const {firstName, lastName, email, password, selectedSecurityQuestion, termsAccepted, securityAnswers} = req.body;
    try {
        //Alternativa buscando por email
        let user = '';
        
        user = await User.findOne({email});
        if(user) throw ({code: 11000});
        user = new User({firstName, lastName, email, password, selectedSecurityQuestion, termsAccepted, securityAnswers});
        
        await user.save();
        return res.status(201).json({msg: "User Created"});
        
    } catch (error) {
        //Alternativa por defecto mongoose
        if(error.code === 11000){
            return res.status(400).json({error: "User is already registered!"});
        }
        return res.status(500).json({error: "Server error!"});
    }
};

export const login = async(req, res) => {
    try {
        const {email, password} = req.body;

        let user = '';

        user = await User.findOne({email});

        if(!user){
            return res.status(403).json({error: "Please, verify your credentials."});
        };

        const respuestaPassword = await user.comparePassword(password);
        if(!respuestaPassword){
            return res.status(403).json({error: "Please, verify credentials."});
        };

        return res.status(200).json({msg: "OK"});
    } catch (error) {
        return res.status(500).json({error: "Server error!"});
    }
};

export const deleteUser = async(req, res) => {
    const {email} = req.body;
    try {
        let user = '';
       
        user = await User.findOne({email});
        if (user){
            await User.deleteOne(user);
            return res.status(200).json({message: "User succesfully deleted!"})
        } else {
            return res.status(404).json({error: "User not found!"});
        }
    } catch (error) {
        return res.status(500).json({error: "Server Error!"})
    }  
};