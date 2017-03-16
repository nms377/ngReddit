import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl} from './aww';

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
  		.state(AwwState.name, AwwState)
  		;
  })
  .run(($state) => {
  	$state.go('default');
  	$state.go('aww');
  })
  .directive('app', app)
  .controller(DefaultState.controller, DefaultCtrl)
  .controller(AwwState.controller, AwwCtrl);

export default MODULE_NAME;