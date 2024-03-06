const Users = require('../model/userSchema');
const JobDetails = require('../model/jobDetails');

const updateJobDetails = async (req, res) => {
    try {
        
        const jobId = req.params.id; // Get the job details ID from the request parameters
        const userId = req.user.userId;

        // Check if the user ID is valid
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

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
            zipcode
        } = req.body;

        // Construct the updated job details object
        const updatedJobDetails = {
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
            zipcode
        };

        const updatedJob = await JobDetails.updateOne(jobId, updatedJobDetails);
        res.status(200).json({ message: 'Job details updated successfully.' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = updateJobDetails;
