/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 111:
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(window,function(){return function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=15)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(){}return e.initializeCalled=!1,e.initializeCompleted=!1,e.additionalValidOrigins=[],e.additionalValidOriginsRegexp=null,e.initializeCallbacks=[],e.isFramelessWindow=!1,e.parentMessageQueue=[],e.childMessageQueue=[],e.nextMessageId=0,e.handlers={},e.callbacks={},e.printCapabilityEnabled=!1,e}();n.GlobalVars=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(7),r=t(5),o=t(0),i=t(3);function s(e,n){return(!o.GlobalVars.currentWindow||e!==o.GlobalVars.currentWindow)&&(!!(o.GlobalVars.currentWindow&&o.GlobalVars.currentWindow.location&&n&&n===o.GlobalVars.currentWindow.location.origin)||!!(r.validOriginRegExp.test(n.toLowerCase())||o.GlobalVars.additionalValidOriginsRegexp&&o.GlobalVars.additionalValidOriginsRegexp.test(n.toLowerCase())))}function l(e,n){o.GlobalVars.isFramelessWindow||o.GlobalVars.parentWindow&&!o.GlobalVars.parentWindow.closed&&e!==o.GlobalVars.parentWindow?o.GlobalVars.childWindow&&!o.GlobalVars.childWindow.closed&&e!==o.GlobalVars.childWindow||(o.GlobalVars.childWindow=e,o.GlobalVars.childOrigin=n):(o.GlobalVars.parentWindow=e,o.GlobalVars.parentOrigin=n),o.GlobalVars.parentWindow&&o.GlobalVars.parentWindow.closed&&(o.GlobalVars.parentWindow=null,o.GlobalVars.parentOrigin=null),o.GlobalVars.childWindow&&o.GlobalVars.childWindow.closed&&(o.GlobalVars.childWindow=null,o.GlobalVars.childOrigin=null),g(o.GlobalVars.parentWindow),g(o.GlobalVars.childWindow)}function u(e){if("id"in e.data&&"number"==typeof e.data.id){var n=e.data,t=o.GlobalVars.callbacks[n.id];t&&(t.apply(null,n.args.concat([n.isPartialResponse])),d(e)||delete o.GlobalVars.callbacks[n.id])}else if("func"in e.data&&"string"==typeof e.data.func){n=e.data;var a=o.GlobalVars.handlers[n.func];a&&a.apply(this,n.args)}}function d(e){return!0===e.data.isPartialResponse}function c(e){if("id"in e.data&&"func"in e.data){var n=e.data,t=n.func?o.GlobalVars.handlers[n.func]:null;if(t){var a=t.apply(this,n.args);void 0!==a&&b(n.id,Array.isArray(a)?a:[a])}else{var r=p(n.func,n.args);o.GlobalVars.callbacks[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(o.GlobalVars.childWindow){var a=e.pop();b(n.id,e,a)}}}}}function f(e){return e===o.GlobalVars.parentWindow?o.GlobalVars.parentMessageQueue:e===o.GlobalVars.childWindow?o.GlobalVars.childMessageQueue:[]}function m(e){return e===o.GlobalVars.parentWindow?o.GlobalVars.parentOrigin:e===o.GlobalVars.childWindow?o.GlobalVars.childOrigin:null}function g(e){for(var n=m(e),t=f(e);e&&n&&t.length>0;)e.postMessage(t.shift(),n)}function p(e,n){var t=o.GlobalVars.parentWindow,a=h(e,n);if(o.GlobalVars.isFramelessWindow)o.GlobalVars.currentWindow&&o.GlobalVars.currentWindow.nativeInterface&&o.GlobalVars.currentWindow.nativeInterface.framelessPostMessage(JSON.stringify(a));else{var r=m(t);t&&r?t.postMessage(a,r):f(t).push(a)}return a.id}function b(e,n,t){var a=o.GlobalVars.childWindow,r=v(e,n,t),i=m(a);a&&i&&a.postMessage(r,i)}function C(e,n){var t=o.GlobalVars.childWindow,a=V(e,n),r=m(t);t&&r?t.postMessage(a,r):f(t).push(a)}function h(e,n){return{id:o.GlobalVars.nextMessageId++,func:e,args:n||[]}}function v(e,n,t){return{id:e,args:n||[],isPartialResponse:t}}function V(e,n){return{func:e,args:n||[]}}o.GlobalVars.handlers.themeChange=function(e){o.GlobalVars.themeChangeHandler&&o.GlobalVars.themeChangeHandler(e);o.GlobalVars.childWindow&&C("themeChange",[e])},o.GlobalVars.handlers.fullScreenChange=function(e){o.GlobalVars.fullScreenChangeHandler&&o.GlobalVars.fullScreenChangeHandler(e)},o.GlobalVars.handlers.backButtonPress=function(){o.GlobalVars.backButtonPressHandler&&o.GlobalVars.backButtonPressHandler()||a.navigateBack()},o.GlobalVars.handlers.load=function(e){o.GlobalVars.loadHandler&&o.GlobalVars.loadHandler(e);o.GlobalVars.childWindow&&C("load",[e])},o.GlobalVars.handlers.beforeUnload=function(){var e=function(){p("readyToUnload",[])};o.GlobalVars.beforeUnloadHandler&&o.GlobalVars.beforeUnloadHandler(e)||e()},o.GlobalVars.handlers.changeSettings=function(){o.GlobalVars.changeSettingsHandler&&o.GlobalVars.changeSettingsHandler()},o.GlobalVars.handlers.startConversation=function(e,n,t,a){o.GlobalVars.onStartConversationHandler&&o.GlobalVars.onStartConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},o.GlobalVars.handlers.closeConversation=function(e,n,t,a){o.GlobalVars.onCloseConversationHandler&&o.GlobalVars.onCloseConversationHandler({subEntityId:e,conversationId:n,channelId:t,entityId:a})},o.GlobalVars.handlers.appButtonClick=function(){o.GlobalVars.appButtonClickHandler&&o.GlobalVars.appButtonClickHandler()},o.GlobalVars.handlers.appButtonHoverEnter=function(){o.GlobalVars.appButtonHoverEnterHandler&&o.GlobalVars.appButtonHoverEnterHandler()},o.GlobalVars.handlers.appButtonHoverLeave=function(){o.GlobalVars.appButtonHoverLeaveHandler&&o.GlobalVars.appButtonHoverLeaveHandler()},n.ensureInitialized=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];if(!o.GlobalVars.initializeCalled)throw new Error("The library has not yet been initialized");if(o.GlobalVars.frameContext&&e&&e.length>0){for(var t=!1,a=0;a<e.length;a++)if(e[a]===o.GlobalVars.frameContext){t=!0;break}if(!t)throw new Error("This call is not allowed in the '"+o.GlobalVars.frameContext+"' context")}},n.isAPISupportedByPlatform=function(e){void 0===e&&(e=r.defaultSDKVersionForCompatCheck);var n=i.compareSDKVersions(o.GlobalVars.clientSupportedSDKVersion,e);return!isNaN(n)&&n>=0},n.processMessage=function(e){if(e&&e.data&&"object"==typeof e.data){var n=e.source||e.originalEvent&&e.originalEvent.source,t=e.origin||e.originalEvent&&e.originalEvent.origin;s(n,t)&&(l(n,t),n===o.GlobalVars.parentWindow?u(e):n===o.GlobalVars.childWindow&&c(e))}},n.handleParentMessage=u,n.processAdditionalValidOrigins=function(e){var n=o.GlobalVars.additionalValidOrigins.concat(e.filter(function(e){return"string"==typeof e&&r.userOriginUrlValidationRegExp.test(e)})),t={};n=n.filter(function(e){return!t[e]&&(t[e]=!0,!0)}),o.GlobalVars.additionalValidOrigins=n,o.GlobalVars.additionalValidOrigins.length>0?o.GlobalVars.additionalValidOriginsRegexp=i.generateRegExpFromUrls(o.GlobalVars.additionalValidOrigins):o.GlobalVars.additionalValidOriginsRegexp=null},n.waitForMessageQueue=function(e,n){var t=o.GlobalVars.currentWindow.setInterval(function(){0===f(e).length&&(clearInterval(t),n())},100)},n.sendMessageRequestToParent=p,n.sendMessageEventToChild=C},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.desktop="desktop",e.web="web",e.android="android",e.ios="ios",e.rigel="rigel"}(n.HostClientType||(n.HostClientType={})),function(e){e.settings="settings",e.content="content",e.authentication="authentication",e.remove="remove",e.task="task",e.sidePanel="sidePanel",e.stage="stage"}(n.FrameContexts||(n.FrameContexts={})),function(e){e[e.Standard=0]="Standard",e[e.Edu=1]="Edu",e[e.Class=2]="Class",e[e.Plc=3]="Plc",e[e.Staff=4]="Staff"}(n.TeamType||(n.TeamType={})),function(e){e[e.Admin=0]="Admin",e[e.User=1]="User",e[e.Guest=2]="Guest"}(n.UserTeamRole||(n.UserTeamRole={})),function(e){e.Large="large",e.Medium="medium",e.Small="small"}(n.TaskModuleDimension||(n.TaskModuleDimension={})),function(e){e.Regular="Regular",e.Private="Private"}(n.ChannelType||(n.ChannelType={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(18);function r(e){for(var n="^",t=e.split("."),a=0;a<t.length;a++)n+=(a>0?"[.]":"")+t[a].replace("*","[^/^.]+");return n+="$"}n.generateRegExpFromUrls=function(e){for(var n="",t=0;t<e.length;t++)n+=(0===t?"":"|")+r(e[t]);return new RegExp(n)},n.getGenericOnCompleteHandler=function(e){return function(n,t){if(!n)throw new Error(e||t)}},n.compareSDKVersions=function(e,n){if("string"!=typeof e||"string"!=typeof n)return NaN;var t=e.split("."),a=n.split(".");function r(e){return/^\d+$/.test(e)}if(!t.every(r)||!a.every(r))return NaN;for(;t.length<a.length;)t.push("0");for(;a.length<t.length;)a.push("0");for(var o=0;o<t.length;++o)if(t[o]!=a[o])return t[o]>a[o]?1:-1;return 0},n.generateGUID=function(){return a.v4()},n.deepFreeze=function e(n){return Object.keys(n).forEach(function(t){"object"==typeof n[t]&&e(n[t])}),Object.freeze(n)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(3);!function(e){e.Calendar="calendar",e.Mail="mail"}(n.RuntimeCapabilities||(n.RuntimeCapabilities={}));var r=function(){function e(){}return e.prototype.applyRuntimeConfig=function(e){this.runtime=a.deepFreeze(e)},e.prototype.isSupported=function(e){return!!this.runtime.supports[e]},e}();n.runtime=new r},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(3);n.version="1.9.0",n.defaultSDKVersionForCompatCheck="1.6.0",n.validOrigins=["https://teams.microsoft.com","https://teams.microsoft.us","https://gov.teams.microsoft.us","https://dod.teams.microsoft.us","https://int.teams.microsoft.com","https://teams.live.com","https://devspaces.skype.com","https://ssauth.skype.com","https://local.teams.office.com","https://local.teams.office.com:8080","https://msft.spoppe.com","https://*.sharepoint.com","https://*.sharepoint-df.com","https://*.sharepointonline.com","https://outlook.office.com","https://outlook-sdf.office.com","https://*.teams.microsoft.com","https://www.office.com","https://word.office.com","https://excel.office.com","https://powerpoint.office.com","https://www.officeppe.com","https://*.www.office.com","http://127.0.0.1:5000"],n.validOriginRegExp=a.generateRegExpFromUrls(n.validOrigins),n.userOriginUrlValidationRegExp=/^https\:\/\//},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e[e.NOT_SUPPORTED_ON_PLATFORM=100]="NOT_SUPPORTED_ON_PLATFORM",e[e.INTERNAL_ERROR=500]="INTERNAL_ERROR",e[e.PERMISSION_DENIED=1e3]="PERMISSION_DENIED",e[e.NETWORK_ERROR=2e3]="NETWORK_ERROR",e[e.NO_HW_SUPPORT=3e3]="NO_HW_SUPPORT",e[e.INVALID_ARGUMENTS=4e3]="INVALID_ARGUMENTS",e[e.UNAUTHORIZED_USER_OPERATION=5e3]="UNAUTHORIZED_USER_OPERATION",e[e.INSUFFICIENT_RESOURCES=6e3]="INSUFFICIENT_RESOURCES",e[e.THROTTLE=7e3]="THROTTLE",e[e.USER_ABORT=8e3]="USER_ABORT",e[e.OPERATION_TIMED_OUT=8001]="OPERATION_TIMED_OUT",e[e.OLD_PLATFORM=9e3]="OLD_PLATFORM",e[e.FILE_NOT_FOUND=404]="FILE_NOT_FOUND",e[e.SIZE_EXCEEDED=1e4]="SIZE_EXCEEDED"}(n.ErrorCode||(n.ErrorCode={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(3),i=t(2);n.returnFocus=function(e){a.ensureInitialized(i.FrameContexts.content),a.sendMessageRequestToParent("returnFocus",[e])},n.navigateToTab=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("navigateToTab",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler("Invalid internalTabInstanceId and/or channelId were/was provided")},n.navigateCrossDomain=function(e,n){a.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.settings,i.FrameContexts.remove,i.FrameContexts.task,i.FrameContexts.stage);var t=a.sendMessageRequestToParent("navigateCrossDomain",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler("Cross-origin navigation is only supported for URLs matching the pattern registered in the manifest.")},n.navigateBack=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("navigateBack",[]);r.GlobalVars.callbacks[n]=e||o.getGenericOnCompleteHandler("Back navigation is not supported in the current client or context.")}},function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var a=new Uint8Array(16);e.exports=function(){return t(a),a}}else{var r=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0==(3&n)&&(e=4294967296*Math.random()),r[n]=e>>>((3&n)<<3)&255;return r}}},function(e,n){for(var t=[],a=0;a<256;++a)t[a]=(a+256).toString(16).substr(1);e.exports=function(e,n){var a=n||0,r=t;return[r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],"-",r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]],r[e[a++]]].join("")}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){r.GlobalVars.handlers["log.request"]=function(){if(r.GlobalVars.getLogHandler){var e=r.GlobalVars.getLogHandler();a.sendMessageRequestToParent("log.receive",[e])}},e.registerGetLogHandler=function(e){a.ensureInitialized(),r.GlobalVars.getLogHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["log.request"])}}(n.logs||(n.logs={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(5),i=t(12),s=t(3),l=t(10),u=t(2),d=t(30),c=t(4);!function(e){function n(e){a.ensureInitialized(),r.GlobalVars.themeChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["themeChange"])}e.initialize=function(e,t){if(!r.GlobalVars.initializeCalled){r.GlobalVars.initializeCalled=!0;var s=function(e){return a.processMessage(e)};r.GlobalVars.currentWindow=r.GlobalVars.currentWindow||window,r.GlobalVars.parentWindow=r.GlobalVars.currentWindow.parent!==r.GlobalVars.currentWindow.self?r.GlobalVars.currentWindow.parent:r.GlobalVars.currentWindow.opener,(r.GlobalVars.parentWindow||t)&&r.GlobalVars.currentWindow.addEventListener("message",s,!1),r.GlobalVars.parentWindow||(r.GlobalVars.isFramelessWindow=!0,window.onNativeMessage=a.handleParentMessage);try{r.GlobalVars.parentOrigin="*";var f=a.sendMessageRequestToParent("initialize",[o.version]);r.GlobalVars.callbacks[f]=function(e,n,t,a){void 0===a&&(a=o.defaultSDKVersionForCompatCheck),r.GlobalVars.frameContext=e,r.GlobalVars.hostClientType=n,r.GlobalVars.clientSupportedSDKVersion=a,r.GlobalVars.initializeCallbacks.forEach(function(e){return e()}),r.GlobalVars.initializeCallbacks=[],r.GlobalVars.initializeCompleted=!0,t&&c.runtime.applyRuntimeConfig(JSON.parse(t))}}finally{r.GlobalVars.parentOrigin=null}this._uninitialize=function(){r.GlobalVars.frameContext&&(n(null),d.teamsCore.registerFullScreenHandler(null),d.teamsCore.registerBackButtonHandler(null),d.teamsCore.registerBeforeUnloadHandler(null),d.teamsCore.registerOnLoadHandler(null),l.logs.registerGetLogHandler(null)),r.GlobalVars.frameContext===u.FrameContexts.settings&&i.settings.registerOnSaveHandler(null),r.GlobalVars.frameContext===u.FrameContexts.remove&&i.settings.registerOnRemoveHandler(null),r.GlobalVars.currentWindow.removeEventListener("message",s,!1),r.GlobalVars.initializeCalled=!1,r.GlobalVars.initializeCompleted=!1,r.GlobalVars.initializeCallbacks=[],r.GlobalVars.additionalValidOrigins=[],r.GlobalVars.parentWindow=null,r.GlobalVars.parentOrigin=null,r.GlobalVars.parentMessageQueue=[],r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null,r.GlobalVars.childMessageQueue=[],r.GlobalVars.nextMessageId=0,r.GlobalVars.callbacks={},r.GlobalVars.frameContext=null,r.GlobalVars.hostClientType=null,r.GlobalVars.isFramelessWindow=!1}}Array.isArray(t)&&a.processAdditionalValidOrigins(t),e&&(r.GlobalVars.initializeCompleted?e():r.GlobalVars.initializeCallbacks.push(e))},e._initialize=function(e){r.GlobalVars.currentWindow=e},e._uninitialize=function(){},e.getContext=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getContext");r.GlobalVars.callbacks[n]=function(n){n.frameContext||(n.frameContext=r.GlobalVars.frameContext),e(n)}},e.registerOnThemeChangeHandler=n,e.shareDeepLink=function(e){a.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel),a.sendMessageRequestToParent("shareDeepLink",[e.subEntityId,e.subEntityLabel,e.subEntityWebUrl])},e.executeDeepLink=function(e,n){a.ensureInitialized(u.FrameContexts.content,u.FrameContexts.sidePanel,u.FrameContexts.settings,u.FrameContexts.task,u.FrameContexts.stage);var t=a.sendMessageRequestToParent("executeDeepLink",[e]);r.GlobalVars.callbacks[t]=n||s.getGenericOnCompleteHandler()}}(n.core||(n.core={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3);!function(e){var n,t;r.GlobalVars.handlers["settings.save"]=function(e){var t=new s(e);n?n(t):t.notifySuccess()},r.GlobalVars.handlers["settings.remove"]=function(){var e=new l;t?t(e):e.notifySuccess()},e.setValidityState=function(e){a.ensureInitialized(o.FrameContexts.settings,o.FrameContexts.remove),a.sendMessageRequestToParent("settings.setValidityState",[e])},e.getSettings=function(e){a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings,o.FrameContexts.remove);var n=a.sendMessageRequestToParent("settings.getSettings");r.GlobalVars.callbacks[n]=e},e.setSettings=function(e,n){a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.settings);var t=a.sendMessageRequestToParent("settings.setSettings",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.registerOnSaveHandler=function(e){a.ensureInitialized(o.FrameContexts.settings),n=e,e&&a.sendMessageRequestToParent("registerHandler",["save"])},e.registerOnRemoveHandler=function(e){a.ensureInitialized(o.FrameContexts.remove,o.FrameContexts.settings),t=e,e&&a.sendMessageRequestToParent("registerHandler",["remove"])};var s=function(){function e(e){this.notified=!1,this.result=e||{}}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.save.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The SaveEvent may only notify success or failure once.")},e}();var l=function(){function e(){this.notified=!1}return e.prototype.notifySuccess=function(){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.success"),this.notified=!0},e.prototype.notifyFailure=function(e){this.ensureNotNotified(),a.sendMessageRequestToParent("settings.remove.failure",[e]),this.notified=!0},e.prototype.ensureNotNotified=function(){if(this.notified)throw new Error("The removeEvent may only notify success or failure once.")},e}()}(n.settings||(n.settings={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3),s=function(){function e(){}return e.prototype.postMessage=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("messageForChild",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForParent=n)},e}();n.ChildAppWindow=s;var l=function(){function e(){}return Object.defineProperty(e,"Instance",{get:function(){return this._instance||(this._instance=new this)},enumerable:!0,configurable:!0}),e.prototype.postMessage=function(e,n){a.ensureInitialized(o.FrameContexts.task);var t=a.sendMessageRequestToParent("messageForParent",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},e.prototype.addEventListener=function(e,n){"message"===e&&(r.GlobalVars.handlers.messageForChild=n)},e}();n.ParentAppWindow=l},function(e,n,t){"use strict";var a=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function a(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}}();Object.defineProperty(n,"__esModule",{value:!0});var r=t(0),o=t(6),i=t(1),s=t(2),l=t(3),u=t(32);!function(e){var n="1.7.0",t="1.8.0",d="1.9.0";!function(e){e.Base64="base64",e.ID="id"}(e.FileFormat||(e.FileFormat={}));var c=function(){return function(){}}();e.File=c,e.captureImage=function(e){if(!e)throw new Error("[captureImage] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.GlobalVars.isFramelessWindow)if(i.isAPISupportedByPlatform(n)){var t=i.sendMessageRequestToParent("captureImage");r.GlobalVars.callbacks[t]=e}else e({errorCode:o.ErrorCode.OLD_PLATFORM},void 0);else e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},void 0)};var f=function(e){function n(n){void 0===n&&(n=null);var t=e.call(this)||this;return n&&(t.content=n.content,t.format=n.format,t.mimeType=n.mimeType,t.name=n.name,t.preview=n.preview,t.size=n.size),t}return a(n,e),n.prototype.getMedia=function(e){if(!e)throw new Error("[get Media] Callback cannot be null");(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(t))?u.validateGetMediaInputs(this.mimeType,this.format,this.content)?i.isAPISupportedByPlatform("2.0.0")?this.getMediaViaCallback(e):this.getMediaViaHandler(e):e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null):e({errorCode:o.ErrorCode.OLD_PLATFORM},null)},n.prototype.getMediaViaCallback=function(e){var n={mediaMimeType:this.mimeType,assembleAttachment:[]},t=[this.content],a=i.sendMessageRequestToParent("getMedia",t);r.GlobalVars.callbacks[a]=function(t){if(e)if(t&&t.error)e(t.error,null);else if(t&&t.mediaChunk)if(t.mediaChunk.chunkSequence<=0){var a=u.createFile(n.assembleAttachment,n.mediaMimeType);e(t.error,a)}else{var r=u.decodeAttachment(t.mediaChunk,n.mediaMimeType);n.assembleAttachment.push(r)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null)}},n.prototype.getMediaViaHandler=function(e){var n=l.generateGUID(),t={mediaMimeType:this.mimeType,assembleAttachment:[]},a=[n,this.content];this.content&&e&&i.sendMessageRequestToParent("getMedia",a),r.GlobalVars.handlers["getMedia"+n]=function(a){if(e){var i=JSON.parse(a);if(i.error)e(i.error,null),delete r.GlobalVars.handlers["getMedia"+n];else if(i.mediaChunk)if(i.mediaChunk.chunkSequence<=0){var s=u.createFile(t.assembleAttachment,t.mediaMimeType);e(i.error,s),delete r.GlobalVars.handlers["getMedia"+n]}else{var l=u.decodeAttachment(i.mediaChunk,t.mediaMimeType);t.assembleAttachment.push(l)}else e({errorCode:o.ErrorCode.INTERNAL_ERROR,message:"data receieved is null"},null),delete r.GlobalVars.handlers["getMedia"+n]}}},n}(c);e.Media=f,function(e){e[e.Photo=1]="Photo",e[e.Document=2]="Document",e[e.Whiteboard=3]="Whiteboard",e[e.BusinessCard=4]="BusinessCard"}(e.CameraStartMode||(e.CameraStartMode={})),function(e){e[e.Camera=1]="Camera",e[e.Gallery=2]="Gallery"}(e.Source||(e.Source={})),function(e){e[e.Image=1]="Image",e[e.Audio=4]="Audio"}(e.MediaType||(e.MediaType={})),function(e){e[e.ID=1]="ID",e[e.URL=2]="URL"}(e.ImageUriType||(e.ImageUriType={})),e.selectMedia=function(e,n){if(!n)throw new Error("[select Media] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(t))if(u.validateSelectMediaInputs(e)){var a=[e],l=i.sendMessageRequestToParent("selectMedia",a);r.GlobalVars.callbacks[l]=function(e,t){if(t){for(var a=[],r=0,o=t;r<o.length;r++){var i=o[r];a.push(new f(i))}n(e,a)}else n(e,null)}}else{var d={errorCode:o.ErrorCode.INVALID_ARGUMENTS};n(d,null)}else{var c={errorCode:o.ErrorCode.OLD_PLATFORM};n(c,null)}},e.viewImages=function(e,n){if(!n)throw new Error("[view images] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),i.isAPISupportedByPlatform(t))if(u.validateViewImagesInput(e)){var a=[e],l=i.sendMessageRequestToParent("viewImages",a);r.GlobalVars.callbacks[l]=n}else n({errorCode:o.ErrorCode.INVALID_ARGUMENTS});else n({errorCode:o.ErrorCode.OLD_PLATFORM})},e.scanBarCode=function(e,n){if(!e)throw new Error("[media.scanBarCode] Callback cannot be null");if(i.ensureInitialized(s.FrameContexts.content,s.FrameContexts.task),r.GlobalVars.hostClientType!==s.HostClientType.desktop&&r.GlobalVars.hostClientType!==s.HostClientType.web&&r.GlobalVars.hostClientType!==s.HostClientType.rigel)if(i.isAPISupportedByPlatform(d))if(u.validateScanBarCodeInput(n)){var t=i.sendMessageRequestToParent("media.scanBarCode",[n]);r.GlobalVars.callbacks[t]=e}else e({errorCode:o.ErrorCode.INVALID_ARGUMENTS},null);else e({errorCode:o.ErrorCode.OLD_PLATFORM},null);else e({errorCode:o.ErrorCode.NOT_SUPPORTED_ON_PLATFORM},null)}}(n.media||(n.media={}))},function(e,n,t){"use strict";function a(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}Object.defineProperty(n,"__esModule",{value:!0}),a(t(16)),a(t(27))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(17);n.bot=a.bot;var r=t(21);n.menus=r.menus;var o=t(10);n.logs=o.logs;var i=t(22);n.NotificationTypes=i.NotificationTypes,n.ViewerActionTypes=i.ViewerActionTypes;var s=t(23);n.enterFullscreen=s.enterFullscreen,n.exitFullscreen=s.exitFullscreen,n.getChatMembers=s.getChatMembers,n.getConfigSetting=s.getConfigSetting,n.getUserJoinedTeams=s.getUserJoinedTeams,n.openFilePreview=s.openFilePreview,n.sendCustomMessage=s.sendCustomMessage,n.showNotification=s.showNotification,n.sendCustomEvent=s.sendCustomEvent,n.registerCustomHandler=s.registerCustomHandler,n.uploadCustomApp=s.uploadCustomApp;var l=t(24);n.conversations=l.conversations;var u=t(25);n.meetingRoom=u.meetingRoom;var d=t(26);n.remoteCamera=d.remoteCamera},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t(1);!function(e){e.sendQuery=function(e,n,t){r.ensureInitialized();var o=r.sendMessageRequestToParent("bot.executeQuery",[e]);a.GlobalVars.callbacks[o]=function(e,a){e?n(a):t(a)}},e.getSupportedCommands=function(e,n){r.ensureInitialized();var t=r.sendMessageRequestToParent("bot.getSupportedCommands");a.GlobalVars.callbacks[t]=function(t,a){t?e(a):n(a)}},e.authenticate=function(e,n,t){r.ensureInitialized();var o=r.sendMessageRequestToParent("bot.authenticate",[e]);a.GlobalVars.callbacks[o]=function(e,a){e?n(a):t(a)}},function(e){e.Results="Results",e.Auth="Auth"}(e.ResponseType||(e.ResponseType={}))}(n.bot||(n.bot={}))},function(e,n,t){var a=t(19),r=t(20),o=r;o.v1=a,o.v4=r,e.exports=o},function(e,n,t){var a,r,o=t(8),i=t(9),s=0,l=0;e.exports=function(e,n,t){var u=n&&t||0,d=n||[],c=(e=e||{}).node||a,f=void 0!==e.clockseq?e.clockseq:r;if(null==c||null==f){var m=o();null==c&&(c=a=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==f&&(f=r=16383&(m[6]<<8|m[7]))}var g=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:l+1,b=g-s+(p-l)/1e4;if(b<0&&void 0===e.clockseq&&(f=f+1&16383),(b<0||g>s)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");s=g,l=p,r=f;var C=(1e4*(268435455&(g+=122192928e5))+p)%4294967296;d[u++]=C>>>24&255,d[u++]=C>>>16&255,d[u++]=C>>>8&255,d[u++]=255&C;var h=g/4294967296*1e4&268435455;d[u++]=h>>>8&255,d[u++]=255&h,d[u++]=h>>>24&15|16,d[u++]=h>>>16&255,d[u++]=f>>>8|128,d[u++]=255&f;for(var v=0;v<6;++v)d[u+v]=c[v];return n||i(d)}},function(e,n,t){var a=t(8),r=t(9);e.exports=function(e,n,t){var o=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var s=0;s<16;++s)n[o+s]=i[s];return n||r(i)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){var n,t,o,i=function(){return function(){this.enabled=!0,this.selected=!1}}();e.MenuItem=i,function(e){e.dropDown="dropDown",e.popOver="popOver"}(e.MenuListType||(e.MenuListType={})),r.GlobalVars.handlers.navBarMenuItemPress=function(e){n&&n(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleNavBarMenuItemPress",[e]))},r.GlobalVars.handlers.actionMenuItemPress=function(e){t&&t(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("handleActionMenuItemPress",[e]))},r.GlobalVars.handlers.setModuleView=function(e){o&&o(e)||(a.ensureInitialized(),a.sendMessageRequestToParent("viewConfigItemPress",[e]))},e.setUpViews=function(e,n){a.ensureInitialized(),o=n,a.sendMessageRequestToParent("setUpViews",[e])},e.setNavBarMenu=function(e,t){a.ensureInitialized(),n=t,a.sendMessageRequestToParent("setNavBarMenu",[e])},e.showActionMenu=function(e,n){a.ensureInitialized(),t=n,a.sendMessageRequestToParent("showActionMenu",[e])}}(n.menus||(n.menus={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.fileDownloadStart="fileDownloadStart",e.fileDownloadComplete="fileDownloadComplete"}(n.NotificationTypes||(n.NotificationTypes={})),function(e){e.view="view",e.edit="edit",e.editNew="editNew"}(n.ViewerActionTypes||(n.ViewerActionTypes={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(3);n.getUserJoinedTeams=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getUserJoinedTeams",[n]);r.GlobalVars.callbacks[t]=e},n.enterFullscreen=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("enterFullscreen",[])},n.exitFullscreen=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("exitFullscreen",[])},n.openFilePreview=function(e){a.ensureInitialized(o.FrameContexts.content);var n=[e.entityId,e.title,e.description,e.type,e.objectUrl,e.downloadUrl,e.webPreviewUrl,e.webEditUrl,e.baseUrl,e.editFile,e.subEntityId,e.viewerAction];a.sendMessageRequestToParent("openFilePreview",n)},n.showNotification=function(e){a.ensureInitialized(o.FrameContexts.content);var n=[e.message,e.notificationType];a.sendMessageRequestToParent("showNotification",n)},n.uploadCustomApp=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("uploadCustomApp",[e]);r.GlobalVars.callbacks[t]=n||i.getGenericOnCompleteHandler()},n.sendCustomMessage=function(e,n,t){a.ensureInitialized();var o=a.sendMessageRequestToParent(e,n);return"function"==typeof t&&(r.GlobalVars.callbacks[o]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.apply(null,e)}),o},n.sendCustomEvent=function(e,n){if(a.ensureInitialized(),!r.GlobalVars.childWindow)throw new Error("The child window has not yet been initialized or is not present");a.sendMessageEventToChild(e,n)},n.registerCustomHandler=function(e,n){var t=this;a.ensureInitialized(),r.GlobalVars.handlers[e]=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a];return n.apply(t,e)}},n.getChatMembers=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("getChatMembers");r.GlobalVars.callbacks[n]=e},n.getConfigSetting=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getConfigSetting",[n]);r.GlobalVars.callbacks[t]=e}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2);!function(e){e.openConversation=function(e){a.ensureInitialized(o.FrameContexts.content);var n=a.sendMessageRequestToParent("conversations.openConversation",[{title:e.title,subEntityId:e.subEntityId,conversationId:e.conversationId,channelId:e.channelId,entityId:e.entityId}]);r.GlobalVars.onCloseConversationHandler=e.onCloseConversation,r.GlobalVars.onStartConversationHandler=e.onStartConversation,r.GlobalVars.callbacks[n]=function(e,n){if(!e)throw new Error(n)}},e.closeConversation=function(){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("conversations.closeConversation"),r.GlobalVars.onCloseConversationHandler=null,r.GlobalVars.onStartConversationHandler=null}}(n.conversations||(n.conversations={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){!function(e){e.toggleMute="toggleMute",e.toggleCamera="toggleCamera",e.toggleCaptions="toggleCaptions",e.volume="volume",e.showVideoGallery="showVideoGallery",e.showContent="showContent",e.showVideoGalleryAndContent="showVideoGalleryAndContent",e.showLargeGallery="showLargeGallery",e.showTogether="showTogether",e.leaveMeeting="leaveMeeting"}(e.Capability||(e.Capability={})),r.GlobalVars.handlers["meetingRoom.meetingRoomCapabilitiesUpdate"]=function(e){null!=r.GlobalVars.meetingRoomCapabilitiesUpdateHandler&&(a.ensureInitialized(),r.GlobalVars.meetingRoomCapabilitiesUpdateHandler(e))},r.GlobalVars.handlers["meetingRoom.meetingRoomStatesUpdate"]=function(e){null!=r.GlobalVars.meetingRoomStatesUpdateHandler&&(a.ensureInitialized(),r.GlobalVars.meetingRoomStatesUpdateHandler(e))},e.getPairedMeetingRoomInfo=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("meetingRoom.getPairedMeetingRoomInfo");r.GlobalVars.callbacks[n]=e},e.sendCommandToPairedMeetingRoom=function(e,n){if(!e||0==e.length)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Command name cannot be null or empty");if(!n)throw new Error("[meetingRoom.sendCommandToPairedMeetingRoom] Callback cannot be null");a.ensureInitialized();var t=a.sendMessageRequestToParent("meetingRoom.sendCommandToPairedMeetingRoom",[e]);r.GlobalVars.callbacks[t]=n},e.registerMeetingRoomCapabilitiesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomCapabilitiesUpdateHandler] Handler cannot be null");a.ensureInitialized(),r.GlobalVars.meetingRoomCapabilitiesUpdateHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["meetingRoom.meetingRoomCapabilitiesUpdate"])},e.registerMeetingRoomStatesUpdateHandler=function(e){if(!e)throw new Error("[meetingRoom.registerMeetingRoomStatesUpdateHandler] Handler cannot be null");a.ensureInitialized(),r.GlobalVars.meetingRoomStatesUpdateHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["meetingRoom.meetingRoomStatesUpdate"])}}(n.meetingRoom||(n.meetingRoom={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2);!function(e){!function(e){e.Reset="Reset",e.ZoomIn="ZoomIn",e.ZoomOut="ZoomOut",e.PanLeft="PanLeft",e.PanRight="PanRight",e.TiltUp="TiltUp",e.TiltDown="TiltDown"}(e.ControlCommand||(e.ControlCommand={})),function(e){e[e.CommandResetError=0]="CommandResetError",e[e.CommandZoomInError=1]="CommandZoomInError",e[e.CommandZoomOutError=2]="CommandZoomOutError",e[e.CommandPanLeftError=3]="CommandPanLeftError",e[e.CommandPanRightError=4]="CommandPanRightError",e[e.CommandTiltUpError=5]="CommandTiltUpError",e[e.CommandTiltDownError=6]="CommandTiltDownError",e[e.SendDataError=7]="SendDataError"}(e.ErrorReason||(e.ErrorReason={})),function(e){e[e.None=0]="None",e[e.ControlDenied=1]="ControlDenied",e[e.ControlNoResponse=2]="ControlNoResponse",e[e.ControlBusy=3]="ControlBusy",e[e.AckTimeout=4]="AckTimeout",e[e.ControlTerminated=5]="ControlTerminated",e[e.ControllerTerminated=6]="ControllerTerminated",e[e.DataChannelError=7]="DataChannelError",e[e.ControllerCancelled=8]="ControllerCancelled",e[e.ControlDisabled=9]="ControlDisabled"}(e.SessionTerminatedReason||(e.SessionTerminatedReason={})),r.GlobalVars.handlers["remoteCamera.capableParticipantsChange"]=function(e){r.GlobalVars.remoteCameraCapableParticipantsChangeHandler&&r.GlobalVars.remoteCameraCapableParticipantsChangeHandler(e)},r.GlobalVars.handlers["remoteCamera.handlerError"]=function(e){r.GlobalVars.remoteCameraErrorHandler&&r.GlobalVars.remoteCameraErrorHandler(e)},r.GlobalVars.handlers["remoteCamera.deviceStateChange"]=function(e){r.GlobalVars.remoteCameraDeviceStateChangeHandler&&r.GlobalVars.remoteCameraDeviceStateChangeHandler(e)},r.GlobalVars.handlers["remoteCamera.sessionStatusChange"]=function(e){r.GlobalVars.remoteCameraSessionStatusChangeHandler&&r.GlobalVars.remoteCameraSessionStatusChangeHandler(e)},e.getCapableParticipants=function(e){if(!e)throw new Error("[remoteCamera.getCapableParticipants] Callback cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel);var n=a.sendMessageRequestToParent("remoteCamera.getCapableParticipants");r.GlobalVars.callbacks[n]=e},e.requestControl=function(e,n){if(!e)throw new Error("[remoteCamera.requestControl] Participant cannot be null");if(!n)throw new Error("[remoteCamera.requestControl] Callback cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel);var t=a.sendMessageRequestToParent("remoteCamera.requestControl",[e]);r.GlobalVars.callbacks[t]=n},e.sendControlCommand=function(e,n){if(!e)throw new Error("[remoteCamera.sendControlCommand] ControlCommand cannot be null");if(!n)throw new Error("[remoteCamera.sendControlCommand] Callback cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel);var t=a.sendMessageRequestToParent("remoteCamera.sendControlCommand",[e]);r.GlobalVars.callbacks[t]=n},e.terminateSession=function(e){if(!e)throw new Error("[remoteCamera.terminateSession] Callback cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel);var n=a.sendMessageRequestToParent("remoteCamera.terminateSession");r.GlobalVars.callbacks[n]=e},e.registerOnCapableParticipantsChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnCapableParticipantsChangeHandler] Handler cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel),r.GlobalVars.remoteCameraCapableParticipantsChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["remoteCamera.capableParticipantsChange"])},e.registerOnErrorHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnErrorHandler] Handler cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel),r.GlobalVars.remoteCameraErrorHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["remoteCamera.handlerError"])},e.registerOnDeviceStateChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnDeviceStateChangeHandler] Handler cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel),r.GlobalVars.remoteCameraDeviceStateChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["remoteCamera.deviceStateChange"])},e.registerOnSessionStatusChangeHandler=function(e){if(!e)throw new Error("[remoteCamera.registerOnSessionStatusChangeHandler] Handler cannot be null");a.ensureInitialized(o.FrameContexts.sidePanel),r.GlobalVars.remoteCameraSessionStatusChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["remoteCamera.sessionStatusChange"])}}(n.remoteCamera||(n.remoteCamera={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(28);n.appInitialization=a.appInitialization;var r=t(29);n.authentication=r.authentication;var o=t(2);n.FrameContexts=o.FrameContexts,n.HostClientType=o.HostClientType,n.TaskModuleDimension=o.TaskModuleDimension,n.TeamType=o.TeamType,n.UserTeamRole=o.UserTeamRole,n.ChannelType=o.ChannelType;var i=t(6);n.ErrorCode=i.ErrorCode;var s=t(11);n.core=s.core;var l=t(7);n.returnFocus=l.returnFocus,n.navigateBack=l.navigateBack,n.navigateCrossDomain=l.navigateCrossDomain,n.navigateToTab=l.navigateToTab;var u=t(12);n.settings=u.settings;var d=t(31);n.tasks=d.tasks;var c=t(13);n.ChildAppWindow=c.ChildAppWindow,n.ParentAppWindow=c.ParentAppWindow;var f=t(14);n.media=f.media;var m=t(33);n.location=m.location;var g=t(34);n.meeting=g.meeting;var p=t(4);n.runtime=p.runtime;var b=t(35);n.calendar=b.calendar;var C=t(36);n.mail=C.mail},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(5);!function(e){e.notifyAppLoaded=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.appLoaded",[r.version])},e.notifySuccess=function(){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.success",[r.version])},e.notifyFailure=function(e){a.ensureInitialized(),a.sendMessageRequestToParent("appInitialization.failure",[e.reason,e.message])},function(e){e.AuthFailed="AuthFailed",e.Timeout="Timeout",e.Other="Other"}(e.FailedReason||(e.FailedReason={}))}(n.appInitialization||(n.appInitialization={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2);!function(e){var n,t;function i(){l();try{r.GlobalVars.childWindow&&r.GlobalVars.childWindow.close()}finally{r.GlobalVars.childWindow=null,r.GlobalVars.childOrigin=null}}function s(e){n=e,i();var t=n.width||600,a=n.height||400;t=Math.min(t,r.GlobalVars.currentWindow.outerWidth-400),a=Math.min(a,r.GlobalVars.currentWindow.outerHeight-200);var o=document.createElement("a");o.href=n.url;var s=void 0!==r.GlobalVars.currentWindow.screenLeft?r.GlobalVars.currentWindow.screenLeft:r.GlobalVars.currentWindow.screenX,l=void 0!==r.GlobalVars.currentWindow.screenTop?r.GlobalVars.currentWindow.screenTop:r.GlobalVars.currentWindow.screenY;s+=r.GlobalVars.currentWindow.outerWidth/2-t/2,l+=r.GlobalVars.currentWindow.outerHeight/2-a/2,r.GlobalVars.childWindow=r.GlobalVars.currentWindow.open(o.href,"_blank","toolbar=no, location=yes, status=no, menubar=no, scrollbars=yes, top="+l+", left="+s+", width="+t+", height="+a),r.GlobalVars.childWindow?u():d("FailedToOpenWindow")}function l(){t&&(clearInterval(t),t=0),delete r.GlobalVars.handlers.initialize,delete r.GlobalVars.handlers.navigateCrossDomain}function u(){l(),t=r.GlobalVars.currentWindow.setInterval(function(){if(!r.GlobalVars.childWindow||r.GlobalVars.childWindow.closed)d("CancelledByUser");else{var e=r.GlobalVars.childOrigin;try{r.GlobalVars.childOrigin="*",a.sendMessageEventToChild("ping")}finally{r.GlobalVars.childOrigin=e}}},100),r.GlobalVars.handlers.initialize=function(){return[o.FrameContexts.authentication,r.GlobalVars.hostClientType]},r.GlobalVars.handlers.navigateCrossDomain=function(){return!1}}function d(e){try{n&&n.failureCallback&&n.failureCallback(e)}finally{n=null,i()}}function c(e,n,t){if(e){var a=document.createElement("a");a.href=decodeURIComponent(e),a.host&&a.host!==window.location.host&&"outlook.office.com"===a.host&&a.search.indexOf("client_type=Win32_Outlook")>-1&&(n&&"result"===n&&(t&&(a.href=f(a.href,"result",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authSuccess",""))),n&&"reason"===n&&(t&&(a.href=f(a.href,"reason",t)),r.GlobalVars.currentWindow.location.assign(f(a.href,"authFailure",""))))}}function f(e,n,t){var a=e.indexOf("#"),r=-1===a?"#":e.substr(a);return r=r+"&"+n+(""!==t?"="+t:""),(e=-1===a?e:e.substr(0,a))+r}r.GlobalVars.handlers["authentication.authenticate.success"]=function(e){try{n&&n.successCallback&&n.successCallback(e)}finally{n=null,i()}},r.GlobalVars.handlers["authentication.authenticate.failure"]=d,e.registerAuthenticationHandlers=function(e){n=e},e.authenticate=function(e){var t=void 0!==e?e:n;if(a.ensureInitialized(o.FrameContexts.content,o.FrameContexts.sidePanel,o.FrameContexts.settings,o.FrameContexts.remove,o.FrameContexts.task,o.FrameContexts.stage),r.GlobalVars.hostClientType===o.HostClientType.desktop||r.GlobalVars.hostClientType===o.HostClientType.android||r.GlobalVars.hostClientType===o.HostClientType.ios||r.GlobalVars.hostClientType===o.HostClientType.rigel){var i=document.createElement("a");i.href=t.url;var l=a.sendMessageRequestToParent("authentication.authenticate",[i.href,t.width,t.height]);r.GlobalVars.callbacks[l]=function(e,n){e?t.successCallback(n):t.failureCallback(n)}}else s(t)},e.getAuthToken=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getAuthToken",[e.resources,e.claims,e.silent]);r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.getUser=function(e){a.ensureInitialized();var n=a.sendMessageRequestToParent("authentication.getUser");r.GlobalVars.callbacks[n]=function(n,t){n?e.successCallback(t):e.failureCallback(t)}},e.notifySuccess=function(e,n){c(n,"result",e),a.ensureInitialized(o.FrameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.success",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})},e.notifyFailure=function(e,n){c(n,"reason",e),a.ensureInitialized(o.FrameContexts.authentication),a.sendMessageRequestToParent("authentication.authenticate.failure",[e]),a.waitForMessageQueue(r.GlobalVars.parentWindow,function(){return setTimeout(function(){return r.GlobalVars.currentWindow.close()},200)})}}(n.authentication||(n.authentication={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(2),i=t(11);!function(e){function n(){window.print()}function t(e){a.ensureInitialized(o.FrameContexts.content),a.sendMessageRequestToParent("setFrameContext",[e])}e.enablePrintCapability=function(){r.GlobalVars.printCapabilityEnabled||(r.GlobalVars.printCapabilityEnabled=!0,a.ensureInitialized(),document.addEventListener("keydown",function(e){(e.ctrlKey||e.metaKey)&&80===e.keyCode&&(n(),e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())}))},e.print=n,e.registerFullScreenHandler=function(e){a.ensureInitialized(),r.GlobalVars.fullScreenChangeHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["fullScreen"])},e.registerAppButtonClickHandler=function(e){a.ensureInitialized(o.FrameContexts.content),r.GlobalVars.appButtonClickHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonClick"])},e.registerAppButtonHoverEnterHandler=function(e){a.ensureInitialized(o.FrameContexts.content),r.GlobalVars.appButtonHoverEnterHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonHoverEnter"])},e.registerAppButtonHoverLeaveHandler=function(e){a.ensureInitialized(o.FrameContexts.content),r.GlobalVars.appButtonHoverLeaveHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["appButtonHoverLeave"])},e.registerBackButtonHandler=function(e){a.ensureInitialized(),r.GlobalVars.backButtonPressHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["backButton"])},e.registerChangeSettingsHandler=function(e){a.ensureInitialized(o.FrameContexts.content),r.GlobalVars.changeSettingsHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["changeSettings"])},e.getTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getTabInstances",[n]);r.GlobalVars.callbacks[t]=e},e.getMruTabInstances=function(e,n){a.ensureInitialized();var t=a.sendMessageRequestToParent("getMruTabInstances",[n]);r.GlobalVars.callbacks[t]=e},e.setFrameContext=t,e.initializeWithFrameContext=function(e,n,a){i.core.initialize(n,a),t(e)},e.registerOnLoadHandler=function(e){a.ensureInitialized(),r.GlobalVars.loadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["load"])},e.registerBeforeUnloadHandler=function(e){a.ensureInitialized(),r.GlobalVars.beforeUnloadHandler=e,e&&a.sendMessageRequestToParent("registerHandler",["beforeUnload"])}}(n.teamsCore||(n.teamsCore={}))},function(e,n,t){"use strict";var a=this&&this.__rest||function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)n.indexOf(a[r])<0&&(t[a[r]]=e[a[r]])}return t};Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(0),i=t(2),s=t(13);!function(e){e.startTask=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel);var t=r.sendMessageRequestToParent("tasks.startTask",[e]);return o.GlobalVars.callbacks[t]=n,new s.ChildAppWindow},e.updateTask=function(e){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task),e.width,e.height;var n=a(e,["width","height"]);if(Object.keys(n).length)throw new Error("updateTask requires a taskInfo argument containing only width and height");r.sendMessageRequestToParent("tasks.updateTask",[e])},e.submitTask=function(e,n){r.ensureInitialized(i.FrameContexts.content,i.FrameContexts.sidePanel,i.FrameContexts.task),r.sendMessageRequestToParent("tasks.completeTask",[e,Array.isArray(n)?n:[n]])}}(n.tasks||(n.tasks={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(14);n.createFile=function(e,n){if(null==e||null==n||e.length<=0)return null;var t,a=1;return e.sort(function(e,n){return e.sequence>n.sequence?1:-1}),e.forEach(function(e){e.sequence==a&&(t=t?new Blob([t,e.file],{type:n}):new Blob([e.file],{type:n}),a++)}),t},n.decodeAttachment=function(e,n){if(null==e||null==n)return null;for(var t=atob(e.chunk),a=new Array(t.length),r=0;r<t.length;r++)a[r]=t.charCodeAt(r);var o=new Uint8Array(a),i=new Blob([o],{type:n});return{sequence:e.chunkSequence,file:i}},n.validateSelectMediaInputs=function(e){return!(null==e||e.maxMediaCount>10)},n.validateGetMediaInputs=function(e,n,t){return null!=e&&null!=n&&n==a.media.FileFormat.ID&&null!=t},n.validateViewImagesInput=function(e){return!(null==e||e.length<=0||e.length>10)},n.validateScanBarCodeInput=function(e){return!e||!(null===e.timeOutIntervalInSec||e.timeOutIntervalInSec<=0||e.timeOutIntervalInSec>60)}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t(6),o=t(1),i=t(2);!function(e){e.locationAPIsRequiredVersion="1.9.0",e.getLocation=function(n,t){if(!t)throw new Error("[location.getLocation] Callback cannot be null");if(o.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion))if(n){var s=o.sendMessageRequestToParent("location.getLocation",[n]);a.GlobalVars.callbacks[s]=t}else t({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0);else t({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)},e.showLocation=function(n,t){if(!t)throw new Error("[location.showLocation] Callback cannot be null");if(o.ensureInitialized(i.FrameContexts.content,i.FrameContexts.task),o.isAPISupportedByPlatform(e.locationAPIsRequiredVersion))if(n){var s=o.sendMessageRequestToParent("location.showLocation",[n]);a.GlobalVars.callbacks[s]=t}else t({errorCode:r.ErrorCode.INVALID_ARGUMENTS},void 0);else t({errorCode:r.ErrorCode.OLD_PLATFORM},void 0)}}(n.location||(n.location={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0);!function(e){!function(e){e.Unknown="Unknown",e.Adhoc="Adhoc",e.Scheduled="Scheduled",e.Recurring="Recurring",e.Broadcast="Broadcast",e.MeetNow="MeetNow"}(e.MeetingType||(e.MeetingType={})),e.getIncomingClientAudioState=function(e){if(!e)throw new Error("[get incoming client audio state] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("getIncomingClientAudioState");r.GlobalVars.callbacks[n]=e},e.toggleIncomingClientAudio=function(e){if(!e)throw new Error("[toggle incoming client audio] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("toggleIncomingClientAudio");r.GlobalVars.callbacks[n]=e},e.getMeetingDetails=function(e){if(!e)throw new Error("[get meeting details] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("meeting.getMeetingDetails");r.GlobalVars.callbacks[n]=e},e.getAuthenticationTokenForAnonymousUser=function(e){if(!e)throw new Error("[get Authentication Token For AnonymousUser] Callback cannot be null");a.ensureInitialized();var n=a.sendMessageRequestToParent("meeting.getAuthenticationTokenForAnonymousUser");r.GlobalVars.callbacks[n]=e}}(n.meeting||(n.meeting={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(3),i=t(2),s=t(4);!function(e){e.openCalendarItem=function(e,n){if(a.ensureInitialized(i.FrameContexts.content),!s.runtime.isSupported(s.RuntimeCapabilities.Calendar))throw"Not Supported";var t=a.sendMessageRequestToParent("calendar.openCalendarItem",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler()},e.composeMeeting=function(e,n){if(a.ensureInitialized(i.FrameContexts.content),!s.runtime.isSupported(s.RuntimeCapabilities.Calendar))throw"Not Supported";var t=a.sendMessageRequestToParent("calendar.composeMeeting",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler()}}(n.calendar||(n.calendar={}))},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),r=t(0),o=t(3),i=t(2),s=t(4);!function(e){e.openMailItem=function(e,n){if(a.ensureInitialized(i.FrameContexts.content),!s.runtime.isSupported(s.RuntimeCapabilities.Mail))throw"Not Supported";var t=a.sendMessageRequestToParent("mail.openMailItem",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler()},e.composeMail=function(e,n){if(a.ensureInitialized(i.FrameContexts.content),!s.runtime.isSupported(s.RuntimeCapabilities.Mail))throw"Not Supported";var t=a.sendMessageRequestToParent("mail.composeMail",[e]);r.GlobalVars.callbacks[t]=n||o.getGenericOnCompleteHandler()}}(n.mail||(n.mail={}))}])});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/utils.ts
let inputs = {};
let container = document.createElement("div");
container.classList.add("moduleContainer");
function addModule(config) {
    var element = document.createElement("div");
    var button = document.createElement("button");
    button.appendChild(document.createTextNode(config.name));
    button.setAttribute("aria-label", config.name);
    button.id = "button-" + config.name;
    element.appendChild(button);
    element.appendChild(document.createElement("br"));
    if (config.inputs) {
        element.appendChild(document.createElement("br"));
        for (var i = 0; i < config.inputs.length; i++) {
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(config.inputs[i].name + ":"));
            element.appendChild(label);
            element.appendChild(document.createElement("br"));
            let input;
            let valueGetter;
            const defaultInputValue = (config.inputs[i].defaultValue) ? config.inputs[i].defaultValue : null;
            switch (config.inputs[i].type) {
                case "string":
                    input = document.createElement("input");
                    valueGetter = function () {
                        return input.value;
                    };
                    break;
                case "boolean":
                    input = document.createElement("input");
                    input.type = "checkbox";
                    valueGetter = function () {
                        return input.checked;
                    };
                    break;
                case "object":
                    input = document.createElement("textarea");
                    valueGetter = function () {
                        input.style.backgroundColor = "";
                        try {
                            return JSON.parse(input.value);
                        }
                        catch (e) {
                            input.style.backgroundColor = "red";
                            if (defaultInputValue) {
                                input.value = defaultInputValue;
                            }
                            return null;
                        }
                    };
                    break;
            }
            config.inputs[i].valueGetter = valueGetter;
            input.setAttribute("aria-label", "input-" + config.name);
            input.id = "input-" + config.name + "-" + i;
            element.appendChild(input);
            inputs[input.id] = input;
            element.appendChild(document.createElement("br"));
        }
    }
    if (config.hasOutput) {
        var label = document.createElement("label");
        element.appendChild(document.createElement("br"));
        label.appendChild(document.createTextNode("Output:"));
        element.appendChild(label);
        element.appendChild(document.createElement("br"));
        var textarea = document.createElement("textarea");
        textarea.setAttribute("aria-label", "textarea-" + config.name);
        textarea.id = "textarea-" + config.name;
        element.appendChild(textarea);
    }
    container.appendChild(element);
    button.addEventListener("click", function () {
        var args = [];
        if (config.inputs) {
            for (var i = 0; i < config.inputs.length; i++) {
                var inputValue = config.inputs[i].valueGetter();
                if (inputValue === null) {
                    return;
                }
                args.push(inputValue);
            }
        }
        if (config.hasOutput) {
            args.push(function (result) {
                if (typeof result !== "string") {
                    result = JSON.stringify(result);
                }
                textarea.value = result;
            });
        }
        config.action.apply(null, args);
    });
}
function restoreState() {
    var stateStr = localStorage.getItem("state");
    if (!stateStr) {
        return;
    }
    var state = JSON.parse(stateStr);
    for (var id in state) {
        inputs[id].value = state[id];
    }
}
function saveState() {
    var state = {};
    for (var id in inputs) {
        state[id] = inputs[id].value;
    }
    localStorage.setItem("state", JSON.stringify(state));
}
function downloadHandler() {
    var input = document.querySelector("#image_uploads");
    var preview = document.querySelector(".fileUploadPreview");
    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);
    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }
        var curFiles = input.files;
        if (curFiles.length === 0) {
            var para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
        }
        else {
            var list = document.createElement("ol");
            preview.appendChild(list);
            for (var i = 0; i < curFiles.length; i++) {
                var listItem = document.createElement("li");
                var para = document.createElement("p");
                if (validFileType(curFiles[i])) {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ", file size " +
                            returnFileSize(curFiles[i].size) +
                            ".";
                    var image = document.createElement("img");
                    image.src = window.URL.createObjectURL(curFiles[i]);
                    listItem.appendChild(image);
                    listItem.appendChild(para);
                }
                else {
                    para.textContent =
                        "File name " +
                            curFiles[i].name +
                            ": Not a valid file type. Update your selection.";
                    listItem.appendChild(para);
                }
                list.appendChild(listItem);
            }
        }
    }
    var fileTypes = ["image/jpeg", "image/pjpeg", "image/png"];
    function validFileType(file) {
        for (var i = 0; i < fileTypes.length; i++) {
            if (file.type === fileTypes[i]) {
                return true;
            }
        }
        return false;
    }
    function returnFileSize(number) {
        if (number < 1024) {
            return number + "bytes";
        }
        else if (number >= 1024 && number < 1048576) {
            return (number / 1024).toFixed(1) + "KB";
        }
        else if (number >= 1048576) {
            return (number / 1048576).toFixed(1) + "MB";
        }
    }
}

// EXTERNAL MODULE: ./node_modules/@microsoft/teams-app-sdk/dist/teams.min.js
var teams_min = __webpack_require__(111);
;// CONCATENATED MODULE: ./src/app.ts


const initializeAppModules = () => {
    try {
        var childWindow;
        let totalStates = 0;
        teams_min.core.initialize();
        teams_min.appInitialization.notifyAppLoaded();
        addModule({
            name: "getContext",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.core.getContext(output);
            }
        });
        addModule({
            name: "getTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.teamsCore.getTabInstances(output);
            }
        });
        addModule({
            name: "getMRUTabInstances",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.teamsCore.getMruTabInstances(output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                (0,teams_min.navigateCrossDomain)(url);
            }
        });
        addModule({
            name: "returnFocus",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "navigateForward"
                }],
            action: function (navigateForward) {
                (0,teams_min.returnFocus)(navigateForward);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.core.registerOnThemeChangeHandler(output);
            }
        });
        addModule({
            name: "navigateCrossDomain",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            action: function (url) {
                (0,teams_min.navigateCrossDomain)(url);
            }
        });
        addModule({
            name: "registerOnThemeChangeHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.core.registerOnThemeChangeHandler(output);
            }
        });
        addModule({
            name: "registerChangeSettingsHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.teamsCore.registerChangeSettingsHandler(function () {
                    output("Change Settings Event recieved");
                });
            }
        });
        addModule({
            name: "registerAppButtonClickHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.teamsCore.registerAppButtonClickHandler(function () {
                    output("Click event received");
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverEnterHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.teamsCore.registerAppButtonHoverEnterHandler(function () {
                    output(`Hover enter event received`);
                });
            }
        });
        addModule({
            name: "registerAppButtonHoverLeaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.teamsCore.registerAppButtonHoverLeaveHandler(function () {
                    output(`Hover leave event received`);
                });
            }
        });
        addModule({
            name: "shareDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "deepLinkParameters"
                }],
            action: function (deepLinkParameters) {
                teams_min.core.shareDeepLink(deepLinkParameters);
            }
        });
        addModule({
            name: "executeDeepLink",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "deepLink"
                }],
            action: function (deepLink) {
                teams_min.core.executeDeepLink(deepLink);
            }
        });
        addModule({
            name: "authentication.authenticate",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "url"
                }],
            hasOutput: true,
            action: function (url, output) {
                teams_min.authentication.authenticate({
                    url: url,
                    successCallback: function (result) {
                        output("Success:" + result);
                    },
                    failureCallback: function (reason) {
                        output("Failure:" + reason);
                        MessageEvent;
                    }
                });
            }
        });
        addModule({
            name: "tasks.startTask and listen for task module messages",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo, output) {
                childWindow = teams_min.tasks.startTask(taskInfo);
                childWindow.addEventListener("message", function (message) {
                    output("Message from task module: " + message);
                    childWindow.postMessage("tab received - " + message);
                });
            }
        });
        addModule({
            name: "send message to Child Window(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                if (childWindow) {
                    childWindow.postMessage(message);
                }
                else {
                    output("child window not available");
                }
            }
        });
        addModule({
            name: "send message to parent Window(task module to tab)",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "string",
                    name: "message"
                }],
            action: function (message, output) {
                var parentWindow = teams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.postMessage(message);
                    output("message sent to parent(tab)");
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "register listener for parent message(tab to task module)",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                var parentWindow = teams_min.ParentAppWindow.Instance;
                if (parentWindow) {
                    parentWindow.addEventListener("message", function (message) {
                        output("message from tab: " + message);
                    });
                }
                else {
                    output("parent window not available");
                }
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                (0,teams_min.showNotification)(showNotificationParameters);
            }
        });
        addModule({
            name: "getAuthToken",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "getAuthTokenParameters"
                }],
            action: function (getAuthTokenParameters, output) {
                getAuthTokenParameters.successCallback = (token) => {
                    output("Success: " + token);
                };
                getAuthTokenParameters.failureCallback = (reason) => {
                    output("Failure: " + reason);
                };
                teams_min.authentication.getAuthToken(getAuthTokenParameters);
            }
        });
        addModule({
            name: "authentication.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                teams_min.authentication.notifyFailure(reason);
            }
        });
        addModule({
            name: "authentication.notifySuccess",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                }],
            action: function (result) {
                teams_min.authentication.notifySuccess(result);
            }
        });
        addModule({
            name: "settings.getSettings",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.settings.getSettings(output);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.settings.registerOnSaveHandler(function (saveEvent) {
                    window.saveEvent = saveEvent;
                    const configUrl = window.location.href;
                    teams_min.settings.setSettings({
                        websiteUrl: configUrl,
                        contentUrl: configUrl,
                        entityId: "tabconfig",
                        suggestedDisplayName: "Test Tab RegisterOnSave"
                    });
                    output("SaveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.saveEvent && window.saveEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnSaveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.saveEvent && window.saveEvent.notifySuccess();
            }
        });
        addModule({
            name: "settings.setSettings",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "settings"
                }],
            hasOutput: true,
            action: function (settings, output) {
                settings.setSettings(settings);
            }
        });
        addModule({
            name: "settings.setValidityState",
            initializedRequired: true,
            inputs: [{
                    type: "boolean",
                    name: "validityState"
                }],
            action: function (validityState) {
                teams_min.settings.setValidityState(validityState);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                teams_min.settings.registerOnRemoveHandler(function (removeEvent) {
                    window.removeEvent = removeEvent;
                    output("RemoveEvent recieved");
                });
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifyFailure",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "reason"
                }],
            action: function (reason) {
                window.removeEvent && window.removeEvent.notifyFailure(reason);
            }
        });
        addModule({
            name: "settings.registerOnRemoveHandler.notifySuccess",
            initializedRequired: true,
            action: function () {
                window.removeEvent && window.removeEvent.notifySuccess();
            }
        });
        addModule({
            name: "openFilePreview",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "filePreviewParameters"
                }],
            action: function (filePreviewParameters) {
                (0,teams_min.openFilePreview)(filePreviewParameters);
            }
        });
        addModule({
            name: "task.submitTask",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "result"
                },
                {
                    type: "string",
                    name: "appId"
                }],
            action: function (result, appId) {
                teams_min.tasks.submitTask(result, appId);
            }
        });
        addModule({
            name: "tasks.startTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            hasOutput: true,
            action: function (taskInfo, output) {
                teams_min.tasks.startTask(taskInfo, (error, result) => {
                    if (error) {
                        output("Error: " + error);
                    }
                    else {
                        output("Result: " + result);
                    }
                });
            }
        });
        addModule({
            name: "tasks.updateTask",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "taskInfo"
                }],
            action: function (taskInfo) {
                teams_min.tasks.updateTask(taskInfo);
            }
        });
        addModule({
            name: "downloadFile ShowNotificationOnly",
            initializedRequired: true,
            inputs: [{
                    type: "object",
                    name: "showNotificationParameters"
                }],
            action: function (showNotificationParameters) {
                (0,teams_min.showNotification)(showNotificationParameters);
            }
        });
        addModule({
            name: "getChatMembers",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                (0,teams_min.getChatMembers)(output);
            }
        });
        addModule({
            name: "getUserJoinedTeams",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                (0,teams_min.getUserJoinedTeams)(output);
            }
        });
        addModule({
            name: "registerBeforeUnload",
            initializedRequired: true,
            inputs: [{
                    type: "string",
                    name: "readyToUnloadDelay"
                }],
            action: function (readyToUnloadDelay) {
                const delay = Number(readyToUnloadDelay);
                teams_min.teamsCore.registerBeforeUnloadHandler(function (readyToUnload) {
                    window.readyToUnload = readyToUnload;
                    setTimeout(() => {
                        readyToUnload();
                    }, delay);
                    alert(`beforeUnload recieved; calling readyToUnload in ${delay / 1000} seconds`);
                    return true;
                });
            }
        });
        addModule({
            name: "readyToUnload",
            initializedRequired: true,
            action: function () {
                window.readyToUnload && window.readyToUnload();
            }
        });
        addModule({
            name: "add states",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                totalStates++;
                window.history.pushState({ some: 'state', id: totalStates }, "tab state" + totalStates, '/testTab');
                output("total States: " + totalStates);
                window.addEventListener('popstate', function (event) {
                    if (event.state && event.state.id) {
                        output("onpopstate: back button clicked. total remaining state: " + event.state.id);
                    }
                }, false);
            }
        });
        addModule({
            name: "registerBackButtonHandler",
            initializedRequired: true,
            hasOutput: true,
            action: function (output) {
                output("total States: " + totalStates);
                teams_min.teamsCore.registerBackButtonHandler(function () {
                    if (totalStates > 0) {
                        totalStates--;
                        output("back button clicked. total remaining state: " + totalStates);
                        return true;
                    }
                    return false;
                });
            }
        });
        addModule({
            name: "conversations.openConversation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "openConversationRequest"
                }],
            action: function (openConversationRequest, output) {
                openConversationRequest.onStartConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                openConversationRequest.onCloseConversation = (conversationResponse) => {
                    output("Start Conversation Subentity Id " + conversationResponse.subEntityId + " Conversation Id: " + conversationResponse.conversationId + " Entity Id: " + conversationResponse.entityId + " Channel Id: " + conversationResponse.channelId);
                };
                try {
                    teams_min.conversations.openConversation(openConversationRequest);
                }
                catch (e) {
                    output("Error" + e);
                }
            }
        });
        addModule({
            name: "conversations.closeConversation",
            initializedRequired: true,
            action: function () {
                teams_min.conversations.closeConversation();
            }
        });
        addModule({
            name: "captureImage",
            initializedRequired: true,
            hasOutput: true,
            action: (output) => {
                teams_min.media.captureImage((err, files) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const file = files[0];
                    let content = "";
                    let len = 20;
                    if (file.content) {
                        len = Math.min(len, file.content.length);
                        content = file.content.substr(0, len);
                    }
                    output("format: " + file.format + ", size: " + file.size + ", mimeType: " + file.mimeType + ", content: " + content);
                });
            }
        });
        addModule({
            name: "selectMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "mediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (mediaInputs, output) => {
                teams_min.media.selectMedia(mediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    let message = "";
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        let preview = "";
                        let len = 20;
                        if (media.preview) {
                            len = Math.min(len, media.preview.length);
                            preview = media.preview.substr(0, len);
                        }
                        message += "[format: " + media.format + ", size: " + media.size
                            + ", mimeType: " + media.mimeType + ", content: " + media.content
                            + ", preview: " + preview + "],";
                    }
                    output(message);
                });
            }
        });
        addModule({
            name: "getMedia",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "inputParams",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":1,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (inputParams, output) => {
                teams_min.media.selectMedia(inputParams, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const media = medias[0];
                    media.getMedia((gmErr, blob) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        var reader = new FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = () => {
                            if (reader.result) {
                                output("Received Blob");
                            }
                        };
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithId",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "selectMediaInputs",
                    defaultValue: "{\"mediaType\":1,\"maxMediaCount\":5,\"imageProps\":{\"sources\":[1,2],\"startMode\":1,\"ink\":true,\"cameraSwitcher\":true,\"textSticker\":true,\"enableFilter\":false}}"
                }],
            action: (selectMediaInputs, output) => {
                teams_min.media.selectMedia(selectMediaInputs, (err, medias) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    const urlList = [];
                    for (let i = 0; i < medias.length; i++) {
                        const media = medias[i];
                        urlList.push({
                            value: media.content,
                            type: 1 //ImageUriType.ID
                        });
                    }
                    teams_min.media.viewImages(urlList, (gmErr) => {
                        if (gmErr) {
                            output(gmErr);
                            return;
                        }
                        output("Success");
                    });
                });
            }
        });
        addModule({
            name: "viewImagesWithUrls",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "imageUrls",
                    defaultValue: "[\"https://www.w3schools.com/images/picture.jpg\",\"https://www.w3schools.com/images/picture.jpg\"]"
                }],
            action: (imageUrls, output) => {
                const urlList = [];
                for (let i = 0; i < imageUrls.length; i++) {
                    const imageUrl = imageUrls[i];
                    urlList.push({
                        value: imageUrl,
                        type: 2 //ImageUriType.URL
                    });
                }
                teams_min.media.viewImages(urlList, (err) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output("Success");
                });
            }
        });
        addModule({
            name: "getLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "locationProps",
                    defaultValue: "{\"allowChooseLocation\":true,\"showMap\":true}"
                }],
            action: (locationProps, output) => {
                teams_min.location.getLocation(locationProps, (err, location) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(JSON.stringify(location));
                });
            }
        });
        addModule({
            name: "showLocation",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "location",
                    defaultValue: "{\"latitude\":17,\"longitude\":17}"
                }],
            action: (location, output) => {
                teams_min.location.showLocation(location, (err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                });
            }
        });
        addModule({
            name: "media.scanBarCode",
            initializedRequired: true,
            hasOutput: true,
            inputs: [{
                    type: "object",
                    name: "scanBarCodeConfig",
                    defaultValue: "{\"timeOutIntervalInSec\":30}"
                }],
            action: (scanBarCodeConfig, output) => {
                teams_min.media.scanBarCode((err, result) => {
                    if (err) {
                        output(err);
                        return;
                    }
                    output(result);
                }, scanBarCodeConfig);
            }
        });
        // Get the modal
        var modal = document.getElementById("myModal");
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
        teams_min.appInitialization.notifySuccess();
    }
    catch (err) {
        teams_min.appInitialization.notifyFailure({ reason: teams_min.appInitialization.FailedReason.Other, message: err.message });
    }
};

;// CONCATENATED MODULE: ./src/index.ts


(function () {
    initializeAppModules();
    document.body.appendChild(container);
    // Give the DOM a chance to update from the appendChild above
    setTimeout(restoreState, 0);
    window.addEventListener("beforeunload", saveState);
    window.addEventListener("load", downloadHandler);
})();

})();

/******/ })()
;
//# sourceMappingURL=app.js.map