
class CrudRepository {
    constructor(model){
        this.model = model;
    } 
    
    async create(data){
        try{
            const result = await this.model.create(data);
            return result;
        }catch(error){
            console.log('something went wrong int the crud repository!')
            throw {error};
        }
    }

    async destroy(modelId){
        try{
            const result = await this.model.destroy({
                where: modelId
            });
            return result;
        }catch(error){
            console.log('something went wrong int the crud repository!')
            throw {error};
        }
    }

    async get(modelId){
        try{
            const result = await this.model.findByPk(modelId);
            return result;
        }catch(error){
            console.log('something went wrong int the crud repository!')
            throw {error};
        }
    }

    async getAll(){
        try{
            const result = await this.model.findAll();
            return result;
        }catch(error){
            console.log('something went wrong int the crud repository!');
            throw {error};
        }
    }

    async update(modelId, data){
        try{
            const result = await this.model.update(date, {
                id: modelId
            });
            return result;
        }catch(error){
            console.log('something went wrong int the crud repository!');
            throw {error};
        }
    }
}

module.exports = CrudRepository;