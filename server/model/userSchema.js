import mongoose from "mongoose";

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
    profilePicture: { type: Buffer },

    posts: [
        {
            postPic: { type: Buffer },
            comment: { type: String },
            likes: { type: Number, default: 0 },
        }
    ]

}, { timestamps: true },);


Userschema.methods = {
    authenticate: function (pass) {
        if (pass == this.password)
            return true;
    }
}

const Schema = mongoose.model('User', Userschema);

export default Schema;