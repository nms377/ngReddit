import angular from 'angular';
import * as uiRouter from 'angular-ui-router';
import {DefaultState, DefaultCtrl} from './default';
import {AwwState, AwwCtrl, AwwServiceName, AwwService} from './aww';
import {ThumbName, Thumb} from './thumb';

import '../style/app.css';

console.log('AwwService', AwwService);

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
  })
  .directive('app', app)
  .directive(ThumbName, Thumb)
  .controller(DefaultState.controller, DefaultCtrl)
  .controller(AwwState.controller, AwwCtrl)
  .service('AwwService', AwwService);

export default MODULE_NAME;