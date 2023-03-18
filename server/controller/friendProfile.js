import User from "../model/userschema.js";


export const friendProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const prof = await User.findOne({ username: username });
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

export const addFriend = async (req, res) => {
    const { id } = req.params;
    try {

        const myProfile = await User.findByIdAndUpdate({ _id: id }, {
            $push: { friendsList: req.query.username }
        });
        const hisProfile = await User.findOneAndUpdate({ username: req.query.username }, {
            $push: { friendsList: myProfile.username }
        });

        if (myProfile && hisProfile)
            return res.status(200).json("Friend Added");

    } catch (error) {
        return res.status(400).json(error);
    }
}

export const removeFriend = async (req, res) => {
    const { id } = req.params;
    try {

        const myProfile = await User.findByIdAndUpdate({ _id: id }, {
            $pull: { friendsList: req.query.username }
        });
        const hisProfile = await User.findOneAndUpdate({ username: req.query.username }, {
            $pull: { friendsList: myProfile.username }
        });

        if (myProfile && hisProfile)
            return res.status(200).json("Friend Removed");

    } catch (error) {
        return res.status(400).json(error);
    }
}

export const updateLikes = async (req, res) => {

    const { id } = req.params;
    // const { postId } = req.query.postid;
    // const { likeCount } = req.query.likecount;

    try {

       const updated = await User.updateOne({ _id: id,"posts._id": req.query.postid}, {
            $set: { "posts.$.likes":  req.query.likecount}
        });
          return res.status(200).json(updated);
    } catch (error) {

    }


}