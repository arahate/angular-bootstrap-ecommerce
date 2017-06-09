'use strict';
//Register Apps
var helloworldapp =angular.module('helloworldapp',[]);
var eventapp =angular.module('eventapp',[]);

//Shop Cart
var homeapp = angular.module('homeapp',['ui.tree']).config(function(treeConfig) {
  treeConfig.defaultCollapsed = true; // collapse nodes by default
  treeConfig.appendChildOnHover = true;
});


