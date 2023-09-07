const {City} = require('../models/index');
const { Op } = require("sequelize");

class CityRepository {

    async createCity({Name}){
        try{
            const city = await City.create({Name});
            return city;
        }catch(error){
            console.log('something is wrong in repository layer!')
            throw(error);
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            })
            return true;
        }catch(error){
            console.log('something is wrong in repository layer!')
            throw(error)
        }
    }

    async updateCity(cityId, data){
        try{
            //first apporach
            const city = await City.update(data, {
                where:{
                    id: cityId
                }
            })
            //second approach
            // const city = City.findByPk(cityId);
            // city.Name = data.name;
            // await city.save();
            return city;
        }catch(error){
            console.log('something is wrong in repository layer!')
            throw(error);
        }
    }

    async getCity(cityId){
        console.log('repo layer cityId:', cityId);
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log('something is wrong in repository layer!')
            throw(error)
        }
    }

    async getAllCities(filter){
        console.log('filters from repo:', filter)
        try{
            if(filter.search){
                console.log('search', filter)
                const cities = await City.findAll({
                    where:{
                        Name: {
                            [Op.startsWith]: filter.search
                        }
                    }
                });
                return cities;
            }else{
                const cities = await City.findAll();
                return cities;
            }
        }catch(error){
            console.log('repo error:', error);
            console.log('something is wrong in repository layer!')
            throw(error)
        }
    }

}

module.exports = CityRepository;