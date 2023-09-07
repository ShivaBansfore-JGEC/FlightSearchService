const {Flights} = require('../models/index');

class FlightRepository {

    async createFlight(data){
        try{
            const flight = await Flights.create(data)
        }catch(error){
            console.log('something went wrong from the repository layer');
            throw {error}
        }
    }
}

module.exports = FlightRepository;