(function(e){function t(t){for(var a,r,i=t[0],u=t[1],l=t[2],s=0,d=[];s<i.length;s++)r=i[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function i(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-4bb6f9a8":"671a9018","chunk-17668d69":"a2171f81","chunk-1b41feba":"48338343","chunk-1efa0f50":"a9a175ae","chunk-bf187dd6":"4665b1ec","chunk-30cf8a5a":"ff4646bd"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4bb6f9a8":1,"chunk-1b41feba":1,"chunk-1efa0f50":1,"chunk-bf187dd6":1,"chunk-30cf8a5a":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="static/css/"+({}[e]||e)+"."+{"chunk-4bb6f9a8":"cc168a0d","chunk-17668d69":"31d6cfe0","chunk-1b41feba":"3dcd4cd0","chunk-1efa0f50":"31ecebd6","chunk-bf187dd6":"ba54dbee","chunk-30cf8a5a":"d7a84a4b"}[e]+".css",o=u.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===a||s===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],s=l.getAttribute("data-href");if(s===a||s===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],f.parentNode.removeChild(f),n(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var a=n("2909"),r=(n("99af"),n("5502")),o=n("98b3");t["a"]=Object(r["a"])({state:{accounts:[],netId:o["c"].get()||"0",provider:null,currentBalance:"",locale:"",initem:"",price:"",chartData:[]},mutations:{updateAccount:function(e,t){e.accounts=t},updateProvider:function(e,t){e.provider=t},updateCurrentBalance:function(e,t){e.currentBalance=t},updateLocale:function(e,t){e.locale=t},updateNetId:function(e,t){e.netId=t,o["c"].set(t)},updatePrice:function(e,t){e.price=t},initChartData:function(e,t){e.chartData=[].concat(Object(a["a"])(t),Object(a["a"])(e.chartData))},updateChartData:function(e,t){e.chartData.push(t)},updateInitem:function(e,t){e.initem=t}},actions:{},modules:{}})},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ac1f"),n("1276"),n("d3b7"),n("159b"),n("5319"),n("caad"),n("2532"),n("fb6a");var a=n("7a23"),r={class:"app-content"};function o(e,t,n,o,c,i){var u=Object(a["L"])("router-view");return Object(a["E"])(),Object(a["j"])("div",r,[Object(a["n"])(u,null,{default:Object(a["V"])((function(t){var n=t.Component;return[(Object(a["E"])(),Object(a["h"])(a["b"],null,[e.$route.meta.keepAlive?(Object(a["E"])(),Object(a["h"])(Object(a["N"])(n),{key:0})):Object(a["i"])("",!0)],1024)),e.$route.meta.keepAlive?Object(a["i"])("",!0):(Object(a["E"])(),Object(a["h"])(Object(a["N"])(n),{key:0}))]})),_:1})])}var c=n("1da1"),i=(n("96cf"),n("ee10")),u={name:"App",setup:function(){Object(a["B"])(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].initWeb3();case 2:case"end":return e.stop()}}),e)})))),document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}),!1);var e=0;document.addEventListener("touchend",(function(t){var n=Date.now();n-e<=300&&t.preventDefault(),e=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}},l=(n("9cc6"),n("6b0d")),s=n.n(l);const d=s()(u,[["render",o]]);var f=d,p=(n("3ca3"),n("ddb0"),n("6c02")),b=[{path:"/",name:"Index",component:function(){return Promise.all([n.e("chunk-4bb6f9a8"),n.e("chunk-30cf8a5a")]).then(n.bind(null,"37f9"))},meta:{title:""}},{path:"/swap",name:"Swap",component:function(){return Promise.all([n.e("chunk-4bb6f9a8"),n.e("chunk-17668d69"),n.e("chunk-1efa0f50")]).then(n.bind(null,"6c6a"))},meta:{title:"兑换"}},{path:"/merge",name:"Merge",component:function(){return Promise.all([n.e("chunk-4bb6f9a8"),n.e("chunk-17668d69"),n.e("chunk-bf187dd6")]).then(n.bind(null,"76a7"))},meta:{title:"合成"}},{path:"/user",name:"User",component:function(){return Promise.all([n.e("chunk-4bb6f9a8"),n.e("chunk-17668d69"),n.e("chunk-1b41feba")]).then(n.bind(null,"e382"))},meta:{title:"我的资产"}}],h=Object(p["a"])({history:Object(p["b"])(),routes:b}),m=h,k=n("4360"),g=n("b970"),y=(n("157a"),n("98b3")),v=n("79fa"),w=n("b9b9"),P=n.n(w),j=y["b"].get()||"zh-Cn";Object(v["c"])(j);var O=function(){history.length>0?m.go(-1):m.push({name:"Welcome"})},S=function(e){if(!e||"0"===e)return{};var t=decodeURIComponent(e).split("&"),n={};return t.forEach((function(e){var t=e.split("=");1===t.length?n.id=t[0]:n[t[0]]=t[1]})),n},C=window.location.href.replace(/#/g,"").replace(/\?utm_source=tokenpocket/g,"");if(C.includes("?")){var A=C.slice(C.indexOf("?")+1,C.length),T=S(A);T.intro&&y["a"].set(T.intro)}var M=Object(a["g"])(f);M.config.globalProperties.$goBack=O,M.config.globalProperties.$dateformat=P.a,M.config.globalProperties.$tokenLogo=function(e){var t="https://uvswap.github.io/tokenLogo/".concat(e,"/logo.png");return t},M.use(m).use(k["a"]).use(v["b"]).use(g["a"]).mount("#app")},6:function(e,t){},7:function(e,t){},"79fa":function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return k})),n.d(t,"a",(function(){return g}));var a=n("5530"),r=n("47e2"),o=n("98b3"),c=n("4360"),i=n("cb6e"),u=n("edd4"),l=n("3c69"),s=n("c6e7"),d=n.n(s),f=n("91f4"),p=n.n(f);function b(e){switch(e){case"tw":l["a"].use("zh-TW",d.a);break;case"en":l["a"].use("en-US",p.a);break}}function h(e){b(e)}var m=Object(r["a"])({locale:"tw",messages:{tw:Object(a["a"])({},i),en:Object(a["a"])({},u)}}),k=function(e){m.global.locale=e,c["a"].commit("updateLocale",e),o["b"].set(e),h(e)},g=function(){return m&&m.global.locale}},8:function(e,t){},9:function(e,t){},"98b3":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o}));var a=i("intro",localStorage),r=i("locale",localStorage),o=(i("initemStorage",sessionStorage),i("netId",sessionStorage));function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:localStorage;try{n.setItem(e,t)}catch(a){}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage;return"locale"===e&&(e="i18nextLng"),{get:function(){return t.getItem(e)},set:function(n){c(e,n,t)},remove:function(){t.removeItem(e)}}}},"9cc6":function(e,t,n){"use strict";n("a2a4")},a2a4:function(e,t,n){},cb6e:function(e){e.exports=JSON.parse('{"index":{"兌換":"兌換","算力挖礦":"算力挖礦","解壓成功":"解壓成功","請先添加交易對":"請先添加交易對","請先激活礦工":"請先激活礦工","礦池":"礦池","申請上幣":"申請上幣","Swap":"Swap","加入我們":"加入我們","圖片大小不能超過":"圖片大小不能超過{key}","已啟動":"已啟動","未啟動":"未啟動","可領取":"可領取","挖礦":"挖礦","挖礦key":"{key}挖礦","領取":"領取","質押":"質押","已質押":"已質押{key}","累計挖礦":"累計挖礦","質押挖礦":"質押挖礦","激活礦工":"激活礦工","我的算力":"我的算力","请輸入要搜索的幣種":"请輸入要搜索的幣種","已銷毀":"已銷毀","總算力":"總算力","已抵押":"已抵押","項目介紹：":"項目介紹：","暫無更多數據":"暫無更多數據","餘額：":"餘額：{key}","餘額":"餘額","請輸入質押餘額":"請輸入質押餘額","預計需扣除":"預計需扣除","實際扣除數量以扣除時間的價格為準，請保證餘額充足":"實際扣除數量以扣除時間的價格為準，請保證餘額充足","授權":"授權","授權key":"授權{key}","提交":"提交","數量必須大於等於":"數量必須大於等於{key}","數量必須大於":"數量必須大於{key}","餘額不足":"餘額不足","凍結成功":"凍結成功","質押成功":"質押成功","啟動礦工":"啟動礦工","會員激活需要立刻支付key，支付成功後，可立即獲得power算力開啟質押挖礦":"會員激活需要立刻支付{key}，支付成功後，可立即獲得{power}算力開啟質押挖礦","一鍵激活":"一鍵激活","激活成功":"激活成功","挖礦記錄":"挖礦記錄","挖礦所得":"挖礦所得","領取時間":"領取時間","算力記錄":"算力記錄","質押數量":"質押數量","質押時間":"質押時間","沒有更多了":"沒有更多了","解押數量":"解押數量","解押時間":"解押時間","獲得算力":"獲得算力","上幣記錄":"上幣記錄","代幣：":"代幣：","上幣成功":"上幣成功","合約地址":"合約地址","項目詳情":"項目詳情","記錄":"記錄","上幣須知：":"上幣須知：","當前僅支持BSC鏈代幣，上幣前請先前往SWAP創建該代幣與USDT的流動性，創建成功後，支付key即上幣成功，並開放該代幣的的質押挖礦":"當前僅支持BSC鏈代幣，上幣前請先前往SWAP創建該代幣與USDT的流動性，創建成功後，支付{key}即上幣成功，並開放該代幣的的質押挖礦","代幣名字":"代幣名字","代幣圖標":"代幣圖標","我再想想":"我再想想","立即前往":"立即前往","請輸入不少於key字":"請輸入不少於{key}字","請輸入不多於key字":"請輸入不多於{key}字","請輸入項目名稱":"請輸入項目名稱","請輸入合約地址":"請輸入合約地址","請上傳圖標":"請上傳圖標","請輸入項目描述":"請輸入項目描述","申請成功":"申請成功","代幣錯誤":"代幣錯誤","可用":"可用","請輸入项目名称":"請輸入项目名称","請輸入代币合約地址":"請輸入代币合約地址","確定":"確定","請輸入要搜索的幣種":"請輸入要搜索的幣種","解押":"解押","最大":"最大","key_a總質押量key_b":"{key_a}總質押量：{key_b}","全網算力key":"全網算力：{key}","請輸入解押餘額":"請輸入解押餘額","錢包":"錢包","代幣合約":"代幣合約","開源情況":"開源情況","已開源":"已開源","總發行量":"總發行量","持幣地址":"持幣地址","流動資金池":"流動資金池","今日礦產":"今日礦產","礦池合約":"礦池合約","流通量":"流通量","黑洞地址":"黑洞地址","24小時成交數":"24小時成交數","24小時成交額":"24小時成交額","最新交易":"最新交易","刷新":"刷新","賣出":"賣出","買入":"買入","UV礦池信息":"礦池信息","礦池信息":"礦池信息"},"share":{"複製成功":"複製成功","複製失敗，請手動長按複製":"複製失敗，請手動長按複製"},"web3":{"連接錢包":"連接錢包","暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開":"暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken, TokenPocket裏打開"}}')},edd4:function(e){e.exports=JSON.parse('{"index":{"兌換":"Swap","算力挖礦":"Power Mining","解壓成功":"Successfully decompressed","請先添加交易對":"Please add trading pair first","請先激活礦工":"Please activate the miner first","礦池":"Pool","申請上幣":"Apply to upload token","Swap":"Swap","加入我們":"Join us","圖片大小不能超過":"The picture size cannot exceed {key}","已啟動":"Activated","未啟動":"Inactivated","可領取":"Available","挖礦":"Mining","挖礦key":"{key} mining","領取":"Receive","質押":"Pledge","已質押":"Pledged {key}","累計挖礦":"Cumulative mining","質押挖礦":"Pledge mining","激活礦工":"Activate miner","我的算力":"My computing power","请輸入要搜索的幣種":"Please enter the token to search","已銷毀":"Destroyed","總算力":"Total computing power","已抵押":"Pledged","項目介紹：":"Project introduction:","暫無更多數據":"No more data","餘額：":"Balance:{key}","餘額":"Balance","請輸入質押餘額":"Please enter the pledge balance","預計需扣除":"Expected to be deducted","實際扣除數量以扣除時間的價格為準，請保證餘額充足":"The actual deduction amount is subject to the price of the deduction time, please ensure that the balance is sufficient","授權":"Authorize","授權key":"Authorize {key}","提交":"Submit","數量必須大於等於":"Quantity must be greater than or equal to {key}","數量必須大於":"Quantity must be greater than {key}","餘額不足":"Insufficient balance","凍結成功":"Freeze succeeded","質押成功":"Pledge success","啟動礦工":"Start miner","會員激活需要立刻支付key，支付成功後，可立即獲得power算力開啟質押挖礦":"Members need to pay {key} immediately for activation. After successful payment, they can immediately get {power} computing power to start pledge mining","一鍵激活":"One click activation","激活成功":"Activation succeeded","挖礦記錄":"Mining records","挖礦所得":"Mining income","領取時間":"Collection time","算力記錄":"computing power records","質押數量":"Pledge amount","質押時間":"Pledge time","沒有更多了":"No more","解押數量":"Number of released charges","解押時間":"Release time","獲得算力":"Gain computing power","上幣記錄":"Token upload record","代幣：":"Token:","上幣成功":"Upload token succeeded","合約地址":"Contract address","項目詳情":"Project details","記錄":"Record","上幣須知：":"Instructions for uploading token:","當前僅支持BSC鏈代幣，上幣前請先前往SWAP創建該代幣與USDT的流動性，創建成功後，支付key即上幣成功，並開放該代幣的的質押挖礦":"Currently, only BSC chain tokens are supported. Please go to SWAP to create liquidity between the token. After the creation is successful, the upload successfully after paying {key}, and the pledge mining of the token will be opened.","代幣名字":"Token name","代幣圖標":"Token Icon","我再想想":"let me think again","立即前往":"Go now","請輸入不少於key字":"Please enter not less than {key} words","請輸入不多於key字":"Please enter not more than {key} words","請輸入項目名稱":"Please enter the project name","請輸入合約地址":"Please enter the contract address","請上傳圖標":"Please upload icon","請輸入項目描述":"Please enter a project description","申請成功":"Successful application","代幣錯誤":"Token error","可用":"Available ","請輸入项目名称":"Please enter the project name","請輸入代币合約地址":"Please enter the token contract address","確定":"Confirm","請輸入要搜索的幣種":"Please enter the currency you want to search","解押":"Release","最大":"Max","key_a總質押量key_b":"Total {key_a} pledge amount: {key_b}","全網算力key":"Network computing power: {key}","請輸入解押餘額":"Please enter the release balance","錢包":"Wallet","代幣合約":"Token Contract","開源情況":"Open Source Situation","已開源":"Open Source","總發行量":"Total Circulation","持幣地址":"Coin holding address","流動資金池":"Liquidity Pool","今日礦產":"Today\'s Minerals","礦池合約":"Mining Pool Contract","流通量":"Circulation","黑洞地址":"Black Hole Address","24小時成交數":"24 hours of transactions","24小時成交額":"24-hour turnover","最新交易":"Latest Transaction","刷新":"Refresh","賣出":"Sell","買入":"Buy","UV礦池信息":"Mining pool information","礦池信息":"Pool information"},"share":{"複製成功":"Copy succeeded","複製失敗，請手動長按複製":"Copy failed, long press copy manually"},"web3":{"連接錢包":"Connect wallet","暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開":"The wallet plug-in is not detected yet, please install MetaMask wallet or open it in imtoken or TokenPocket"}}')},ee10:function(e,t,n){"use strict";var a=n("1da1"),r=(n("96cf"),n("99e5")),o=n.n(r),c=n("4360"),i=n("626a"),u=n("47e2"),l={web3:{},t:null,factoryContract:{},web3Provider:{},getBlance:function(e){l.web3.eth.getBalance(e).then((function(e){c["a"].commit("updateCurrentBalance",l.web3.utils.fromWei(e,"ether"))}))},getNetId:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.web3.eth.net.getId();case 2:t=e.sent,c["a"].commit("updateNetId",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),initWeb3:function(){window.ethereum?(l.web3Provider=window.ethereum,l.web3=new o.a(l.web3Provider),window.ethereum.enable().then((function(e){c["a"].commit("updateAccount",e)}))):window.web3?(l.web3Provider=window.web3.currentProvider,l.web3=new o.a(l.web3Provider)):(l.web3.t||(l.web3.t=Object(u["b"])().t),Object(i["a"])(l.web3.t("web3.暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開"))),c["a"].commit("updateProvider",l.web3),l.web3.eth.getAccounts().then(function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c["a"].commit("updateAccount",t),e.abrupt("return",l.getBlance(t[0]));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}};t["a"]=l}});
//# sourceMappingURL=app.4ea286fa.js.map