const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');

const flightService = new FlightService();

const create = async (req, res) => {
    try{
        let flightReqData = {
            flightNumber: req.body.flightNumber,
            airplainId: req.body.airplainId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: !req.body.departureTime,
            price: req.body.price
        }
        const flight = await flightService.createFlight(flightReqData);
        return res.status(SuccessCodes.CREATED).json({
            data: flight,
            status: true,
            error:{},
            message: 'successfully created a flight'
        })
    }catch(error){
        console.log('error:', error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        })
    }
}

const getAllFlights = async (req, res) => {
    try{
        const flight = await flightService.getAllFlightData(req.query);
        return res.status(SuccessCodes.OK).json({
            data: flight,
            status: true,
            message:'Successfully fetched the flights!',
            err: {}
        })
    }catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        })
    }
}

module.exports = {
    create,
    getAllFlights
}