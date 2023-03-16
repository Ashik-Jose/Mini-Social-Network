import User from "../model/userschema.js";


export const profile = async (req, res) => {
    const { id } = req.params;

    try {
        const prof = await User.findOne({ _id: id });
        const profile = {
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

