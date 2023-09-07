const {FlightRepository, AirplainRepository} = require('../repository/index');
const {compareDateTime} = require('../utils/helper');

class FlightService {

    constructor(){
        this.airplainRepository = new AirplainRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        console.log('data:', data);
        try{
            if(!compareDateTime(data.arrivalTime, data.departureTime)){
                throw {erro: 'Arrival time can not be less than departure time!'}
            }
            const airplain = await this.airplainRepository.getAirplain(data.airplainId);
            const flights = await this.flightRepository.createFlight({
                ...data, totalSeats: airplain.capacity
            })
            return flights;
        }catch(error){
            console.log('something went wrong in the service layer');
            throw {error}
        }
    }
}

module.exports = FlightService;

/**
 * {
 * flightNumber,
 * airplainId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * boardingGate,
 * totalSeats -> we will canlculate using airplaneId
 * }
 * 
 * 
 */