import axios from 'axios';
import authHeader from './auth.header.js';
import authService from './auth.service.js';
import { Service } from "axios-middleware";
import Router from "../router";
import Notify from "quasar/src/plugins/Notify";


const API_URL = ' https://bdc847728842.ngrok.io/api/';

class UserService {
  constructor() {
    const service = new Service(axios);

    service.register({
      onRequest(config) {
        return config;
      },
      onSync(promise) {
        console.log('onSync');
        return promise;
      },
      onResponseError(response) {

      }
    });
  }

  getUser() {
    return axios.get(API_URL + 'survey', { headers: authHeader() });
  }

  makeSurvey(item , point) {

    return axios.post(API_URL +"item/" +item.id+'/survey', { point: point }, { headers: authHeader() });


  }


  removeSurvey(item ) {

    return axios.delete(API_URL +"item/" +item.id+'/survey', { headers: authHeader() });


  }

  logout(){
    return authService.logout()
  }

}

export default new UserService();
