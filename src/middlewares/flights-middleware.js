
const {ClientErrorsCodes} = require('../utils/error-codes');
const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplainId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data: {},
            message: 'Invalid body properties!',
            status: false,
            error: {
                message: 'Mandatory fields are missing!'
            },
           
        })
    }
    next();
}

module.exports = {
    validateCreateFlight
}