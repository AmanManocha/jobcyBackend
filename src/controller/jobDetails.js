const Users = require('../model/userSchema');
const JobDetails = require('../model/jobDetails')

const jobDetails = async (req, res) => {
    try {
        console.log("aaaaaaaaaaaaa", req)
        const userId = req.user.userId;
        console.log("aaaaaaaaaaaaa", userId
        )
        const {
        jobTitle, 
        jobDescription,
        email,
        phoneNumber,
        categories,
        jobType,
        designation,
        salary,
        qualification,
        jobSkills,
        applicationDeadlineDate,
        country,
        city,
        zipCode} = req.body;

    // Check if the user ID is valid
    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const jobDetails = new JobDetails({
        userId,
        jobTitle,
        jobDescription,
        email,
        phoneNumber,
        categories,
        jobType,
        designation,
        salary,
        qualification,
        jobSkills,
        applicationDeadlineDate,
        country,
        city,
        zipCode,
      });

    await jobDetails.save();
    res.status(200).json({ message: 'job details saved Successfully .' });

    }catch (error){
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }

};
module.exports = jobDetails;