const Users = require('../model/userSchema');
const JobDetails = require('../model/jobDetails');

const deleteJobDetails = async (req, res) => {
    try {
        const jobId = req.params.id; // Get the job details ID from the request parameters
        const userId = req.user.userId;

        // Check if the user ID is valid
        const user = await Users.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the job details exist
        const job = await JobDetails.findOne(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job details not found' });
        }

        // Check if the job details belong to the user
        if (job.userId.toString() !== userId) {
            return res.status(403).json({ message: 'Unauthorized access' });
        }

        // Delete the job details
        await JobDetails.deleteOne(jobId);
        res.status(200).json({ message: 'Job details deleted successfully.' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = deleteJobDetails;
