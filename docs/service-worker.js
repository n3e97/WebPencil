if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,d,s)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return a;case"module":return i;default:return e(c)}})).then(e=>{const c=s(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute(["https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js","https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js","https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js","https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js","https://cdn.bootcss.com/antd/4.1.3/antd-with-locales.min.js",{url:"./0-fc0a6713d69b423d9597.js",revision:"2f6a5d38bd9c88c916104e61e14f3df4"},{url:"./0-fc0a6713d69b423d9597.js.LICENSE.txt",revision:"81896c98bac7b5b16ab1d3790da5b937"},{url:"./1-4759b7e72802fe1bee56.js",revision:"5c0857846231a0eceaff490364d1d65b"},{url:"./10-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./10-7eb1f5e5d65925ccb581.js",revision:"9034bdce5074ba37e77d634057723a5b"},{url:"./2-c3dd244546b87ac36e00.js",revision:"7646afb3d3dab6b41552a3ea3ca96c15"},{url:"./2-f742a71d4786fbe6e2fe.css",revision:"24ca9cd1ec487ab23a705d6d1cf81797"},{url:"./3-c6408162704a82fe924b.js",revision:"05de64982525a2d4686d38a3e7f71c9d"},{url:"./3-cc1e540af13116a31bc6.css",revision:"f35541e340e98048a01ff4b2ad257b5b"},{url:"./4-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./4-9c7a059ef78770c54523.js",revision:"d70805a7d41dad972131ae2d6ec3f974"},{url:"./5-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./5-505c783df9d8780dfe44.js",revision:"d3553a2221d7dc6046d5d9a138523363"},{url:"./6-dd9cad190cc50b0eb114.js",revision:"5fd9f65a7c2c3aba3111058394ee3c76"},{url:"./8-623eb7ce53f0091492f5.js",revision:"08229cee22226e8eb6bf44171ee2e31d"},{url:"./8-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./9-30bba7cd5ea4cb3ed540.js",revision:"9c226f7a44535832e9326cc8a43481c9"},{url:"./9-750fed08ed98f7f4911b.css",revision:"c7657bf32241f1f22c12e18fc4bf4ae4"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"c3dc8c1cd5a41ab49ccbb55380a74246"},{url:"./main-831f2e24ee3d7228d975.css",revision:"c445334b2cb5a871eb3cb8c814096592"},{url:"./main-a6ba571d3805e7149acb.js",revision:"ad4648fad23c899cd6abcabff3d9f7ec"},{url:"./main-a6ba571d3805e7149acb.js.LICENSE.txt",revision:"153c199157247fdeb311b54e338493ac"},{url:"./manifest.f95dda5faea47c3776d1e1b87f30191c.json",revision:"f95dda5faea47c3776d1e1b87f30191c"}],{})}));
