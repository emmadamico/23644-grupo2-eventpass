import mongoose from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
        index: {unique: true}
    },
    password: {
        type: String,
        required: true
    },
    selectedSecurityQuestion: {
        type: String,
        required: true
    },
    termsAccepted: {
        type: Boolean,
        required: true,
        default: false
    },
    securityAnswers: {
        type: String,
        required: true,
        default: ""
    }
});

userSchema.pre("save", async function(next){
    const user = this;

    if(!user.isModified('password')) return next()
    try {
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error('Password Hash Process Failed');
    }
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcryptjs.compare(candidatePassword, this.password);
}

export const User = mongoose.model('User', userSchema);