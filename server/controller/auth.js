import mongoose from 'mongoose';
import User from "../model/userSchema.js";

export const signIn = async (req, res) => {
    var user = await User.findOne({ username: req.body.username })
    if (user) {
        if (user.authenticate(req.body.password)) {
            const { _id, firstName, lastName, email, username } = user;

            res.status(200).json({
                user: {
                    _id, firstName, lastName, email, username
                }
            })
        }
        else
            return res.status(400).json({ message: "Invalid Credentials" });
    }
    else {
        return res.status(400).json({ message: "Cannot Login" });
    }
}



export const signUp = async (req, res) => {

    var emailFound = await User.findOne({ email: req.body.email });
    if (emailFound) {
        return res.status(400).json("Already Registered");
    }

    var usernameFound = await User.findOne({ username: req.body.username });
    if (usernameFound) {
        return res.status(400).json({ message: "Try Different Username" });
    }


    const {
        firstName,
        lastName,
        username,
        email,
        password,
    } = req.body;

    const _user = new User({
        firstName,
        lastName,
        username,
        email,
        password
    });


    _user.save().then((data) => {
        try {
            return res.status(201).json({ message: "Created User successfully" });
        } catch (error) {
            return res.status(400).json(error);
        }
    });

}

