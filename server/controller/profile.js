import User from "../model/userschema.js";


export const profile = async(req,res) => {
    const {id} = req.params;

    try {
        const prof = await User.findOne({_id: id});
        const profile = {
            firstName: prof.firstName,
            lastName: prof.lastName,
            username:prof.username,
            email: prof.email,
            status: prof.status
        }
        return res.status(200).json(profile);
    } catch (error) {
        return res.status(400).json(error);
    }
}

export const statusChange = async(req,res) => {
    const {id} = req.params;
    const newStatus = req.body.status;

    try {
        const newProfile = await User.findByIdAndUpdate({_id: id}, { status: newStatus}, { new: true });
        return res.status(200).json(newProfile);

    } catch (error) {
        return res.status(400).json(error);
    }


}