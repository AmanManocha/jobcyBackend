const Users = require('../model/userSchema');
const JobDetails = require('../model/jobDetails');

const getJobDetails = async (req, res) => {
    try {
        const userId = req.user.userId;
        const page = req.query.page || 1;
        const limit = 10;
        const startIndex = (page - 1) * limit;
        let query = { userId: userId };

        // Check if job ID is provided in query parameters
        if (req.query.jobId) {
            query._id = req.query.jobId;
        }

        const jobDetailsCount = await JobDetails.countDocuments(query);
        const totalPages = Math.ceil(jobDetailsCount / limit);

        const jobDetails = await JobDetails.find(query)
            .skip(startIndex)
            .limit(limit);

        res.json({
            currentPage: page,
            totalPages: totalPages,
            totalRecords: jobDetailsCount,
            jobDetails: jobDetails
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = getJobDetails;
