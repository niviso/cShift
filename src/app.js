import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuthService, FetchConfig, AuthorizeStep } from 'aurelia-auth';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService,HttpClient,FetchConfig)
export class App {
  constructor(authService,httpClient, fetchConfig) {
    this.auth = authService;
    this.httpClient=httpClient;
    this.fetchConfig=fetchConfig;
  }


  configureRouter(config, router) {
    config.title = '';
    config.map([
      {route: [''], name: 'index', moduleId: 'views/home/home', nav: true, title: 'cShift'},
      {route: '/game',  name: 'Game', moduleId: 'views/game/game', nav: true, title: 'game',href: '/game'},
      {route: '/gameover',  name: 'gameover', moduleId: 'views/gameover/gameover', nav: true, title: 'gameover',href: '/gameover'},

    ]);
    this.router = router;
  }



}
