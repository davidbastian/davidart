

//load styles
import './app.scss'
import './home/home.scss'
import './header/header.scss'
import './footer/footer.scss'

//load npm-modernizr
import modernizr from 'imports?this=>window!../node_modules/npm-modernizr/modernizr.js'
import detectizr from 'imports?this=>window!../node_modules/detectizr/dist/detectizr.js'

//load angular
import angular from 'angular'
import ngroute from 'angular-route'
import nganimate from 'angular-animate'
import sanitize from 'angular-sanitize'

//load gsap & pageAnimation
import zepto from 'npm-zepto'
import gsap from 'gsap'
import 'imports?this=>window!./pageDrag.js'
import Draggable from 'imports?this=>window!../node_modules/gsap/src/uncompressed/utils/Draggable.js'

import scrolltoplugin from '../node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin.js'
import {pageAnimation} from  './pageAnimation'

//load routing
import {pageRouting} from  './pageRouting'

//pageLocation
import {pageLocation} from  './pageLocation'

//load filters
import {toSlug} from  './toSlug'

//load controllers
import {AppController} from  './app.controller'
import {HomeController} from  './home/home.controller'

//load directives Preload
import {homePreload} from  './home/homePreload'

//load directives Trigger Link
import {pageLink} from  './pageLink.js'

//load header & footer
import {headerApp} from  './header/header.directive'
import {footerApp} from  './footer/footer.directive'

//start app
angular
	.module("db", [ngroute, nganimate, sanitize])

	.animation('.main-container',pageAnimation)

	.config(['$routeProvider', '$locationProvider', pageRouting])

	.filter('toslug',toSlug)

	.controller('AppController', ['$scope',AppController])
	.controller('Home', ['$scope',HomeController])
	
	//loaders
	.directive('homeLoader', ['$timeout',homePreload])




	//links trigger
	.directive('pageLink', pageLink)

	//header & footer
	.directive('headerApp', headerApp)
	.directive('footerApp', footerApp)


	.run(['$rootScope', '$location', pageLocation])




