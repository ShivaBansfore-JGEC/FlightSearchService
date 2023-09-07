const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req, res) => {
    console.log('-->', req.body)
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

module.exports = {
    create
}