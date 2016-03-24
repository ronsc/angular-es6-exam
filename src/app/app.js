'use strict';

import angular from 'angular';

import './components/components';
import mainModule from './main';


angular.element(document).ready(function() {
	angular.bootstrap(document, [mainModule.name], {
		strictDi: true
	});
});