class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data) {
        try {
            const results = await this.repository.create(data);
            return results;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error }
        }
    }

    async delete(id) {
        try {
            const results = await this.repository.delete(id);
            return results;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error }
        }
    }

    async update(id, data) {
        try {
            const results = await this.repository.update(id, data);
            return results;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error }
        }
    }

    async get(id) {
        try {
            const results = await this.repository.get(id);
            return results;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error }
        }
    }

    async getAll() {
        try {
            const cities = await this.repository.getAll();
            return cities;
        } catch (error) {
            console.log('something went wrong in service layer');
            throw { error }
        }
    }
}

module.exports = CrudService;