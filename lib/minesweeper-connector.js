'use strict';
const axios = require('axios');

class Minesweeper {
    // -  initialize (api url)
    constructor (base_url) {
        this.base_url = base_url
    }
    //public methods
    async createUser(user){
        try{
            this.validateInput(user, ["username", "password"]);
            let params = {
                uri: '/users/register',
                method: 'post', 
                data: user
            }
            let response = await this.request(params);

            return response.data.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }

    async login(user){
        try{
            this.validateInput(user, ["username", "password"]);
            let params = {
                uri: '/users/login',
                method: 'post', 
                data: user
            }
            let response = await this.request(params);
            return response.data.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }
    async createGame(game, JWT){
        try{
            this.validateInput(game, ["rows", "columns", "mines"]);
            let params = {
                uri: '/games/',
                method: 'post', 
                data: game,
                JWT: JWT
            }
            let response = await this.request(params);

            return response.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }
    async flagCell(game, JWT){
        try{
            this.validateInput(game, ["_id", "x", "y"]);
            let params = {
                uri: '/games/' + game._id + '/flag',
                method: 'post', 
                data: game,
                JWT: JWT
            }
            let response = await this.request(params);

            return response.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }
    async questionCell(game, JWT){
        try{
            this.validateInput(game, ["_id", "x", "y"]);
            let params = {
                uri: '/games/' + game._id + '/question',
                method: 'post', 
                data: game,
                JWT: JWT
            }
            let response = await this.request(params);

            return response.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }
    async revealCell(game, JWT){
        try{
            this.validateInput(game, ["_id", "x", "y"]);
            let params = {
                uri: '/games/' + game._id + '/reveal',
                method: 'post', 
                data: game,
                JWT: JWT
            }
            let response = await this.request(params);

            return response.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }
    async getUserGames(JWT){
        try{
            let params = {
                uri: '/games/',
                method: 'get',
                JWT: JWT
            }
            let response = await this.request(params);

            return response.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }
    async getGameByID(id, JWT){
        try{
            let params = {
                uri: '/games/' + id,
                method: 'get',
                JWT: JWT
            }
            let response = await this.request(params);

            return response.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }
    async deleteGame(id, JWT){
        try{
            let params = {
                uri: '/games/' + id,
                method: 'delete',
                JWT: JWT
            }
            let response = await this.request(params);

            return response.data;
        }
        catch(error){
            throw error.response.data.description
        }
    }

    //private methods
    validateInput(input, params){
        for(var i = 0; i < params.length; i++){
            if(input[params[i]] == undefined){
                throw "Missing parameters. Mandatory: " + JSON.stringify(params);
            }
        }
    }

    async request(params){
        let options = {};
        options.url = params.uri;
        options.method = params.method;
        options.baseURL = this.base_url;

        if(params.data != undefined) options.data = params.data;
        if(params.JWT != undefined) options.headers = {'Authorization': 'Bearer ' + params.JWT};
        return await axios.request(options);
    }
}

module.exports = Minesweeper;