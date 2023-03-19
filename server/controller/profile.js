import User from "../model/userschema.js";
import fs from "fs";

export const profile = async (req, res) => {
    const { id } = req.params;

    try {
        const prof = await User.findOne({ _id: id });
        const profile = {
            profilePic: prof.profilePicture,
            posts: prof.posts,
            firstName: prof.firstName,
            lastName: prof.lastName,
            username: prof.username,
            email: prof.email,
            status: prof.status,
            friends: prof.friendsList
        }
        return res.status(200).json(profile);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const updateProfilePic = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndUpdate({ _id: id }, { profilePicture: fs.readFileSync("uploads/" + req.file.filename) }, { new: true });
        return res.status(200).json("Profile Picture Updated");

    } catch (error) {
        return res.status(400).json(error);
    }

}

export const statusChange = async (req, res) => {
    const { id } = req.params;
    const newStatus = req.body.status;

    try {
        const newProfile = await User.findByIdAndUpdate({ _id: id }, { status: newStatus }, { new: true });
        return res.status(200).json(newProfile);

    } catch (error) {
        return res.status(400).json(error);
    }
}

export const getSearchResults = async (req, res) => {
    const  searchQuery  = req.query.searchquery;
    try {

       // return res.status(200).json(searchQuery);
        const search = new RegExp(searchQuery, 'i');

     //   const searchUser = await User.find({ $or: [{ firstName: search }, { lastName: search }, { username: search }] });
     const searchUser = await User.find({ username: search });
        const users = [];

        searchUser.map((user) => {
            const profile = {
                firstName: user.firstName,
                username: user.username,
            }
            users.push(profile);
        });

        return res.status(200).json(users.splice(0, 5));
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const putPost = async (req, res) => {
    const { id } = req.params; 

    // const data = fs.readFileSync("uploads/" + req.file.filename)
    // try {
    // //   upload.single(("testImage"), (req, res) => {
        
    //     return res.status(200).json(req.body.comment);


    //     // });  
    // } catch (error) {
    //     return res.status(400).json(error);
    // }

    try {
        const myProfile =  await User.findByIdAndUpdate({ _id: id }, { 
            $push:{
                // "posts.$.postPic": req.file.filename,
                // "posts.$.comment": req.body.comment

                posts: {
                    postPic:  fs.readFileSync("uploads/" + req.file.filename),
                    comment: req.body.comment
                }
            }
       });

       return res.status(200).json(myProfile);
    } catch(error) {
        return res.status(400).json(error);
    }
 }
