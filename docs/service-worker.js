if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,d,f)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const b={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return a;case"module":return b;default:return e(c)}})).then(e=>{const c=f(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-24aa846e"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute(["https://cdn.bootcss.com/vConsole/3.3.4/vconsole.min.js","https://cdn.bootcss.com/hammer.js/2.0.8/hammer.min.js","https://cdn.bootcss.com/react/16.13.1/umd/react.production.min.js","https://cdn.bootcss.com/react-dom/16.13.1/umd/react-dom.production.min.js",{url:"./0-9a545c7617e94b7920b8.js",revision:"399b8ee73fbf659c6b11fd4c5fb34d0a"},{url:"./0-c8a22d90f0a9f284e34c.css",revision:"56cf2f88a4d591cc5b372f3813263af0"},{url:"./1-54222a8f4f9b9a509e1e.css",revision:"69354ca5e89a3a39e85fe6b6ed08d922"},{url:"./1-567cd6c1096d999d780b.js",revision:"afad965ec2821ed1377cd190f23bd083"},{url:"./1-567cd6c1096d999d780b.js.LICENSE.txt",revision:"da6e1857291de4855bb602d67c39a264"},{url:"./10-750fed08ed98f7f4911b.css",revision:"c7657bf32241f1f22c12e18fc4bf4ae4"},{url:"./10-d0812cecab9c517f66bf.js",revision:"9290dd6930e9203f5529dc881b9f2dce"},{url:"./11-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./11-d8c05bd35acf97adb93d.js",revision:"1f2397367be783da3f9215c9e68cda70"},{url:"./2-ee1487eaaf0572e14229.js",revision:"5c3cdabc1a2c843fd61eee16a3dcc31b"},{url:"./3-967b56ab9a5706b08938.js",revision:"11e4e69f3893f394779b0d808a237d96"},{url:"./3-f742a71d4786fbe6e2fe.css",revision:"24ca9cd1ec487ab23a705d6d1cf81797"},{url:"./4-1e5f3842effadda58731.js",revision:"2884f5c8332098ef456d27d7e6d48fb5"},{url:"./4-cc1e540af13116a31bc6.css",revision:"f35541e340e98048a01ff4b2ad257b5b"},{url:"./5-35fe90a32593ed13563d.js",revision:"2114ae02c097ca692ebad0022adfc613"},{url:"./5-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./6-1a66ada2717c6ac894c6.css",revision:"0fad24c661a4054b21405191f8b8f804"},{url:"./6-d6379a3100a74c323b1a.js",revision:"cfec429dfeb987ad1970493f6c7cdec3"},{url:"./7-3ca88041710d06b71c04.js",revision:"c6d324b5c8c665bad7bd87c849497ff7"},{url:"./9-8e4603fd7bca4afd37c2.css",revision:"fc70c468785a0954464f09639bde482a"},{url:"./9-c4349a860ac565752e57.js",revision:"5989ccafd9f19aa9837efe52b550e254"},{url:"./favicon.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_128x128.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_192x192.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_256x256.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_384x384.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_512x512.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./icon_96x96.c5bef8e83342a07a4b3bae9df2a54dc4.ico",revision:"c5bef8e83342a07a4b3bae9df2a54dc4"},{url:"./index.html",revision:"bded4d8af4c38286dddf02120b402fc7"},{url:"./main-8d67d05b99f2c9e056a4.css",revision:"7c6ecd360cfc723176e89ad4521c43fb"},{url:"./main-94b2f87bdb8a1bafb41a.js",revision:"e5d51dba8c074a600e08e8bb7b7257cf"},{url:"./main-94b2f87bdb8a1bafb41a.js.LICENSE.txt",revision:"fe2dc22fd6ca21a32b3c0cf47f6d1455"},{url:"./manifest.f95dda5faea47c3776d1e1b87f30191c.json",revision:"f95dda5faea47c3776d1e1b87f30191c"}],{})}));
