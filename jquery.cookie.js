!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function o(e){return u.raw?e:decodeURIComponent(e)}function t(e){return n(u.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(c," "))}catch(e){return}try{return u.json?JSON.parse(e):e}catch(e){}}function r(n,o){var t=u.raw?n:i(n);return e.isFunction(o)?o(t):t}var c=/\+/g,u=e.cookie=function(i,c,a){if(void 0!==c&&!e.isFunction(c)){if("number"==typeof(a=e.extend({},u.defaults,a)).expires){var d=a.expires,f=a.expires=new Date;f.setDate(f.getDate()+d)}return document.cookie=[n(i),"=",t(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var s=i?void 0:{},p=document.cookie?document.cookie.split("; "):[],m=0,v=p.length;m<v;m++){var x=p[m].split("="),l=o(x.shift()),g=x.join("=");if(i&&i===l){s=r(g,c);break}i||void 0===(g=r(g))||(s[l]=g)}return s};u.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)&&(e.cookie(n,"",e.extend({},o,{expires:-1})),!0)}});