import mongoose from 'mongoose';
import User from "../model/userschema.js";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
    // User.findOne({ email: req.body.username }).exec((error, user) => {
    //     if (error)
    //         return res.status(400).json({ error });

    var user = await User.findOne({ username: req.body.username })
        if (user) {
            if (user.authenticate(req.body.password)) {
              //  const token = jwt.sign({ _id: user._id },"123", { expiresIn: '1h' });
                const { _id, firstName, lastName, email, fullName } = user;

                res.status(200).json({  
                 //   token,
                    user: {
                        _id, firstName, lastName, email, fullName
                    }
                })
            }
            else
                return res.status(400).json({message: "Invalid Credentials"});
        }
        else {
            return res.status(400).json({message: "Cannot Login" });
        }
    }



export const signUp = async (req, res) => {

    var emailFound = await User.findOne({ email: req.body.email });
    if(emailFound)
    {
        return res.status(400).json( "Already Registered");
    }

    var usernameFound = await User.findOne({ username: req.body.username });
    if(usernameFound)
    {
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


    // const [err, data] = await _user.save().then(
    //     data => ([null, data]),
    //     err => ([err, null])
    //   );

    _user.save().then((data) => {
        // if (error)
        //     return res.status(400).json({ error});
        try {
            return res.status(201).json({ message: "Created User successfully" });
        } catch (error) {
            return res.status(400).json(error);
        }
    });

}

