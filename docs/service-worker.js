if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,f,b)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const d={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return a;case"module":return d;default:return e(c)}})).then(e=>{const c=b(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute(["https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js","https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js","https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js","https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js",{url:"./0-c8a22d90f0a9f284e34c.css",revision:"56cf2f88a4d591cc5b372f3813263af0"},{url:"./0-f5439b6bda7ac7d6cf80.js",revision:"24f24125c6e232897df4485defd0c4ea"},{url:"./1-54222a8f4f9b9a509e1e.css",revision:"69354ca5e89a3a39e85fe6b6ed08d922"},{url:"./1-b62afaec8ad282d40b89.js",revision:"d98ddca23474b5e5b09c4afbb80a4c90"},{url:"./10-1126f09daebd9d893311.js",revision:"4f7a9bcd4eedc8d3d0e7de0c564fb800"},{url:"./10-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./11-6c5c9f506f614568e9b7.js",revision:"366325e09d0bee313e9489c1146cb352"},{url:"./11-750fed08ed98f7f4911b.css",revision:"c7657bf32241f1f22c12e18fc4bf4ae4"},{url:"./12-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./12-c8551f2e185455a43e8a.js",revision:"40bbe9812fb118a3901bff3b99c33cd2"},{url:"./2-90921097dabb46c236a9.js",revision:"422f6d020ca127bca2c66b49fa0248f1"},{url:"./2-90921097dabb46c236a9.js.LICENSE.txt",revision:"11ba6bbe7acfcc6f0660e132a4496982"},{url:"./3-9bbedc393b61e3b61896.js",revision:"3b9d5b7caee9cce6731813059db0488b"},{url:"./4-f079229b0632f101aefd.js",revision:"135abe368e9ab85d03e64f94334b82ce"},{url:"./4-f742a71d4786fbe6e2fe.css",revision:"24ca9cd1ec487ab23a705d6d1cf81797"},{url:"./5-65e3be9d64040ed67906.js",revision:"3e60e762b1cf11f89dd2e6d021c0c0cf"},{url:"./5-cc1e540af13116a31bc6.css",revision:"f35541e340e98048a01ff4b2ad257b5b"},{url:"./6-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./6-dc850130d3ef28b3b08d.js",revision:"c223b20a7b0168b30c8a880940b8af82"},{url:"./7-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./7-56f4a81fcc9a4d07fe01.js",revision:"476159802e56a51a95a51427cb12c2b9"},{url:"./8-ef72426cdc16745b12d8.js",revision:"6c977d24e3d51cca1eeeccebdf219fbe"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"14c77602f513dfc03e63bb0eb17036aa"},{url:"./main-58ae0aa533284755fd92.js",revision:"81e872f23c62d34df9ce68fdf9d4bf40"},{url:"./main-58ae0aa533284755fd92.js.LICENSE.txt",revision:"eff3b4d7e4bb0087ce53139cd90bc880"},{url:"./main-8d67d05b99f2c9e056a4.css",revision:"7c6ecd360cfc723176e89ad4521c43fb"},{url:"./manifest.f95dda5faea47c3776d1e1b87f30191c.json",revision:"f95dda5faea47c3776d1e1b87f30191c"}],{})}));
