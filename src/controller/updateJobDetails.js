const Users = require('../model/userSchema');
const JobDetails = require('../model/jobDetails');

const updateJobDetails = async (req, res) => {
    try {
        
        const jobId = req.query.jobId; // Get the job details ID from the request parameters
        console.log(jobId, 'jobID')
        const userId = req.user.userId;
        let query = { userId: userId };

        if (req.query.jobId) {
            query._id = req.query.jobId;
        }

        // Check if the user ID is valid
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const job = await JobDetails.findOne( {_id: jobId} );
        console.log('job', job)
        if (!job) {
            return res.status(404).json({ message: 'Job details not found' });
        }
         // Check if the job details belong to the user
         if (job.userId.toString() !== userId) {
            return res.status(403).json({ message: 'Unauthorized access' });
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
            zipCode
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
            zipCode
        };

        const updatedJob = await JobDetails.updateOne({_id: jobId}, updatedJobDetails);
        res.status(200).json({ message: 'Job details updated successfully.' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = updateJobDetails;
