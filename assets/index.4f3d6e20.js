const p=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};p();const g="modulepreload",d={},h="/mma-pwa/",u=function(e,r){return!r||r.length===0?e():Promise.all(r.map(i=>{if(i=`${h}${i}`,i in d)return;d[i]=!0;const o=i.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${n}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":g,o||(s.as="script",s.crossOrigin=""),s.href=i,document.head.appendChild(s),o)return new Promise((m,f)=>{s.addEventListener("load",m),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};var a={exports:{}};a.exports=c;a.exports.isMobile=c;a.exports.default=c;const b=/(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|samsungbrowser|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,y=/CrOS/,v=/android|ipad|playbook|silk/i;function c(t){t||(t={});let e=t.ua;if(!e&&typeof navigator!="undefined"&&(e=navigator.userAgent),e&&e.headers&&typeof e.headers["user-agent"]=="string"&&(e=e.headers["user-agent"]),typeof e!="string")return!1;let r=b.test(e)&&!y.test(e)||!!t.tablet&&v.test(e);return!r&&t.tablet&&t.featureDetect&&navigator&&navigator.maxTouchPoints>1&&e.indexOf("Macintosh")!==-1&&e.indexOf("Safari")!==-1&&(r=!0),r}var w=a.exports,x=w();const $="welliba - lounge PWA",k="auther-email@gmail.com",_={app:{crash:{title:"Oooops... Sorry, I guess, something went wrong. You can:",options:{email:`contact with author by this email - ${k}`,reset:"Press here to reset the application"}}},loader:{fail:"Hmmmmm, there is something wrong with this component loading process... Maybe trying later would be the best idea"},images:{failed:"something went wrong during image loading :("},404:"Hey bro? What are you looking for?"},L={options:{anchorOrigin:{vertical:"bottom",horizontal:"left"},autoHideDuration:6e3},maxSnack:x?3:4},M={delay:300,minimumLoading:700},P={image:"/cover.png",description:"Starter kit for modern web applications"},S="https://giphy.com/embed/xTiN0L7EW5trfOvEk0";function l(){return Math.floor(Math.random()*256)}function E(){const t=l(),e=l(),r=l();return[`rgb(${t}, ${e}, ${r})`,`rgb(${255-t}, ${255-e}, ${255-r})`]}function O(){const[t,e]=E(),r=["font-size: 40px",`color: ${t}`,`border: 1px solid ${e}`,`background-color: ${e}`,"border-radius: 5px","padding: 10px"].join(";");console.log(`%c=== ${$} ===`,r)}Promise.all([u(()=>import("./Root.b691fb9e.js"),["assets/Root.b691fb9e.js","assets/index.eddb289e.js","assets/index.module.5958740e.js","assets/ApolloContext.fc3b8d5e.js"]),u(()=>import("./App.52bf2c03.js").then(function(t){return t.E}),["assets/App.52bf2c03.js","assets/index.eddb289e.js"])]).then(([{default:t},{default:e}])=>{t(e)});O();export{u as _,P as d,k as e,S as g,M as l,_ as m,L as n,$ as t};
