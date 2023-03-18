import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Userschema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },

    username: {
        type: String,
        required: true,
        trim: true,
        //  unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        // unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: ""
    },
    friendsList:{
        type: Array,
        default: []
    },
    profilePicture: { type: String },

    posts: [
        {
            postPic: { type: String },
            comment: { type: String },
            likes: { type: Number, default: 0 },
        }
    ]

}, { timestamps: true },);


// Userschema.virtual('password')
// .set(function(password){
//     const salt = bcrypt.genSaltSync(10);
//     this.hash_password = bcrypt.hashSync(password,salt);
// });

Userschema.methods = {
    authenticate: function (pass) {
        if (pass == this.password)
            return true;
        //return bcrypt.compareSync(password,this.hash_password);
    }
}

const Schema = mongoose.model('User', Userschema);

export default Schema;