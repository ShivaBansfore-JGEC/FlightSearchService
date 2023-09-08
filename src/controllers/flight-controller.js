const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
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
        return res.status(200).json({
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