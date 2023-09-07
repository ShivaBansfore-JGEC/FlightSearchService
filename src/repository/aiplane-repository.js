const { Airplane } = require('../models/index');

class AirplaneRepository {
    async getAirplain(id){
        try{
            const airplain = await Airplane.findByPk(id);
            return airplain;
        }catch(error){
            console.log('something went wrong in airplain repository!');
            throw {error};
        }
    }
}


module.exports = AirplaneRepository;