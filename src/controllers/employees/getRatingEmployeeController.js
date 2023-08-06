// Importing models
const selectEmployeeRatingModel = require('../../models/employees/selectEmployeeRatingsModel');

const getRatingEmployeeController = async (req, res, next) => {
    try {
        // Obtaining the company id from the path params
        const { employeeId } = req.params;

        // Obtaining the company's data
        const employeesRatings = await selectEmployeeRatingModel(employeeId);

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
