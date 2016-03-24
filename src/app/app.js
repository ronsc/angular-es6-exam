'use strict';

import angular from 'angular';

import './components/components';
import mainModule from './main';


angular.element(document).ready(function() {
	let body = document.getElementsByTagName("body")[0];
	angular.bootstrap(body, [mainModule.name]);
});