// Importing models
const selectEmployeeRatingModel = require('../../models/employees/selectEmployeeRatingsModel');

const getRatingEmployeeController = async (req, res, next) => {
    try {
        // Obtaining the employee id from the path params
        const { userId } = req.params;

        // Obtaining the company's rating data
        const employeesRatings = await selectEmployeeRatingModel(userId);

        for (let i = 0; i < employeesRatings.length; i++) {
            delete employeesRatings[i].id;
        }

        res.send({
            status: 'ok',
            data: {
                employeesRatings,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = getRatingEmployeeController;
