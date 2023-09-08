const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    console.log(airportService);
    try{
        const response = await airportService.create(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'successfully created',
            error: {}
        })
    }catch(error){
        console.log('error:', error)
        return res.status(500).json({
            data: {},
            success: false,
            error: error,
            message: 'something went wrong'
        })
    }
}

module.exports = {
    create
}