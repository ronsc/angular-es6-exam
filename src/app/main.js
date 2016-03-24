'use strict';

import angular from 'angular';

import Hello from './components/hello/hello';

const mainApp = angular.module('mainApp', []);
mainApp.controller('MainController', Hello);

export default mainApp;