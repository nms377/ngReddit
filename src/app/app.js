import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl} from './default';

import '../style/app.css';



let app = () => {
  return {
    template: require('./app.html'),
  }
};

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) => {
  	$stateProvider
  		.state(DefaultState.name, DefaultState)
  		;
  })
  .run(($state) => {
  	$state.go('default');
  })
  .directive('app', app)
  .controller(DefaultState.controller, DefaultCtrl);

export default MODULE_NAME;