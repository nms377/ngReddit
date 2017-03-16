import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl } from './default';

import '../style/app.css';



let app = () => {
  return {
    template: require('./app.html'),
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .directive('app', app)
  .config(($stateProvider) => {
  	$stateProvider
  		.state(DefaultState.name, DefaultState)
  		;
  })
  .run(($state) => {
  	$state.go('default');
  });

export default MODULE_NAME;