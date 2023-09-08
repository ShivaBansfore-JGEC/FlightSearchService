const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        // if(data.minPrice){
        //     Object.assign(filter, {price: {[Op.gte]: data.minPrice}})
        // }

        if(data.minPrice && data.maxPrice){
            Object.assign(filter, {
                [Op.and]: [
                    {price: {[Op.lte]: data.maxPrice}},
                    {price: {[Op.gte]: data.minPrice}},
                ]
            })
        }

        let price_filters = [];
        if(data.minPrice){
            price_filters.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            price_filters.push({price: {[Op.lte]: data.maxPrice}});
        }

        Object.assign(filter, {[Op.and]: price_filters});


        return filter;
    }

    async createFlight(data){
        try{
            const flight = await Flights.create(data);
            return flight;
        }catch(error){
            console.log('something went wrong from the repository layer');
            throw {error}
        }
    }

    async getFlight(flightId) {
        try{
            const flight = await Flights.findByPk(flightId);
            return flight;
        }catch(error){
            console.log('something went wrong in the repository layer');
            throw {error};
        }
    }

    async getAllFlight(filter){
        try{
            const filters = this.#createFilter(filter);
            console.log('filters:', filters);
            const flight = await Flights.findAll({
                where: filters
            });
            return flight;
        }catch(error){
            console.log('something went wront in repository layer!');
            throw {error};
        }
    }
}

module.exports = FlightRepository;