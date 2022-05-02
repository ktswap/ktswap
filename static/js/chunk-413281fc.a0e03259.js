(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-413281fc"],{"124c":function(e,t,n){},"99d9":function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"kttAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BuyRecordLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"kttAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SellLog","type":"event"},{"inputs":[],"name":"KTT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_kttAmount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addBuyRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"denominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_page","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getUserRecords","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"kttAmount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"haveSellAmount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"internalType":"struct Market.Record[]","name":"recordArr","type":"tuple[]"},{"internalType":"uint256","name":"curPage","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"orderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"records","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"kttAmount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"haveSellAmount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_kttAmount","type":"uint256"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ktt","type":"address"}],"name":"setKttAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiveAddress","type":"address"}],"name":"setReceiveAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},af22:function(e,t,n){"use strict";n("124c")},c1ec:function(e,t,n){"use strict";n.r(t);n("a9e3");var a=n("7a23"),r=function(e){return Object(a["H"])("data-v-45c0fc9d"),e=e(),Object(a["F"])(),e},i={class:"swap"},u={class:"swap-item"},s=r((function(){return Object(a["k"])("div",{class:"title"},"挂卖单",-1)})),c=r((function(){return Object(a["k"])("span",{class:"sympol"},"KTT",-1)})),o=r((function(){return Object(a["k"])("span",{class:"sympol"},"USDT / KTT",-1)})),l={class:"flex-between"},d={class:"price-desc"},p=Object(a["m"])("余额： "),m=Object(a["m"])(" KTT"),b={class:"button-box"},y=Object(a["m"])("挂单"),f=Object(a["m"])("授权KTT"),w=r((function(){return Object(a["k"])("div",{class:"title-sub"},"所有挂单",-1)})),O={class:"list-box"},j={class:"top flex-middle"},k={class:"top-item flex-item"},v={class:"num"},h=r((function(){return Object(a["k"])("div",{class:"desc"},"卖出KTT数量",-1)})),g=r((function(){return Object(a["k"])("div",{class:"line"},null,-1)})),T={class:"top-item flex-item"},x={class:"num yellow"},A=r((function(){return Object(a["k"])("div",{class:"desc"},"价格/KTT",-1)})),C={class:"bottom"},K={class:"row flex-middle"},M=r((function(){return Object(a["k"])("div",{class:"name"},"已卖出数量",-1)})),R={class:"value"},B={class:"row flex-middle"},_=r((function(){return Object(a["k"])("div",{class:"name"},"剩余数量",-1)})),V={class:"value"},U={class:"btn-box flex-between"},S=r((function(){return Object(a["k"])("span",null,null,-1)})),F=Object(a["m"])("买入KTT"),L={class:"close-box flex-between"},N=r((function(){return Object(a["k"])("span",null,null,-1)})),D=r((function(){return Object(a["k"])("span",{class:"sympol"},"KTT",-1)})),E={class:"flex-between"},I={class:"price-desc"},P=Object(a["m"])("可买入: "),z=Object(a["m"])(" KTT"),H={class:"price-desc"},J=Object(a["m"])("余额: "),Q=Object(a["m"])(" KTT"),q={class:"button-box"},G=Object(a["m"])("卖出"),W=Object(a["m"])("授权KTT");function X(e,t,n,r,X,Y){var Z=Object(a["L"])("HeadTop"),$=Object(a["L"])("van-field"),ee=Object(a["L"])("van-button"),te=Object(a["L"])("van-icon"),ne=Object(a["L"])("van-dialog"),ae=Object(a["L"])("van-list");return Object(a["E"])(),Object(a["h"])(ae,{loading:e.loading,"onUpdate:loading":t[5]||(t[5]=function(t){return e.loading=t}),"immediate-check":!1,error:e.error,"onUpdate:error":t[6]||(t[6]=function(t){return e.error=t}),"error-text":"请求失败，点击重新加载",finished:e.finished,"finished-text":"没有更多了",onLoad:e.onLoad},{default:Object(a["V"])((function(){return[Object(a["k"])("div",i,[Object(a["n"])(Z,{title:"卖单市场",isShowTop:!0,isSubHeader:!1}),Object(a["k"])("div",u,[s,Object(a["n"])($,{style:{"margin-bottom":"12px"},modelValue:e.swapKttAmount,"onUpdate:modelValue":[t[0]||(t[0]=function(t){return e.swapKttAmount=t}),e.getOutAmount],center:"",clearable:"",label:"",placeholder:"请输入卖出数量"},{extra:Object(a["V"])((function(){return[c]})),_:1},8,["modelValue","onUpdate:modelValue"]),Object(a["n"])($,{modelValue:e.price,"onUpdate:modelValue":[t[1]||(t[1]=function(t){return e.price=t}),e.getOutAmount],center:"",clearable:"",label:"",placeholder:"请输入单价"},{extra:Object(a["V"])((function(){return[o]})),_:1},8,["modelValue","onUpdate:modelValue"]),Object(a["k"])("div",l,[Object(a["k"])("div",d,[p,Object(a["k"])("span",null,Object(a["P"])(e.kttBalance),1),m])]),Object(a["k"])("div",b,[Number(e.kttAllowance>0)?(Object(a["E"])(),Object(a["h"])(ee,{key:0,type:"primary",loading:e.btn.loading,size:"large","loading-text":"兑换中...",block:"",onClick:e.addBuyRecord},{default:Object(a["V"])((function(){return[y]})),_:1},8,["loading","onClick"])):(Object(a["E"])(),Object(a["h"])(ee,{key:1,type:"primary",loading:e.btn.loading,size:"large","loading-text":"正在授权...",onClick:e.approveKtt},{default:Object(a["V"])((function(){return[f]})),_:1},8,["loading","onClick"]))])]),w,Object(a["k"])("div",O,[(Object(a["E"])(!0),Object(a["j"])(a["a"],null,Object(a["K"])(e.list,(function(t,n){return Object(a["E"])(),Object(a["j"])("div",{class:"item",key:n},[Object(a["k"])("div",j,[Object(a["k"])("div",k,[Object(a["k"])("div",v,Object(a["P"])(t.kttAmount),1),h]),g,Object(a["k"])("div",T,[Object(a["k"])("div",x,Object(a["P"])(t.price)+"USDT",1),A])]),Object(a["k"])("div",C,[Object(a["k"])("div",K,[M,Object(a["k"])("div",R,Object(a["P"])(t.haveSellAmount)+"KTT",1)]),Object(a["k"])("div",B,[_,Object(a["k"])("div",V,Object(a["P"])(t.remainAmount)+"KTT",1)])]),Object(a["k"])("div",U,[S,Object(a["n"])(ee,{type:"primary",class:"btn-green",style:{width:"120px"},block:"",onClick:function(n){return e.toSell(t)}},{default:Object(a["V"])((function(){return[F]})),_:2},1032,["onClick"])])])})),128))]),Object(a["n"])(ne,{show:e.show,"onUpdate:show":t[4]||(t[4]=function(t){return e.show=t}),class:"swap-item",showConfirmButton:!1,style:{padding:"0"},title:""},{default:Object(a["V"])((function(){return[Object(a["k"])("div",L,[N,Object(a["n"])(te,{onClick:t[2]||(t[2]=function(t){return e.show=!1}),name:"cross",color:"#fff",size:"20px"})]),Object(a["n"])($,{modelValue:e.swapAmount,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.swapAmount=t}),center:"",clearable:"",label:"",placeholder:"请输入买入数量"},{extra:Object(a["V"])((function(){return[D]})),_:1},8,["modelValue"]),Object(a["k"])("div",E,[Object(a["k"])("div",I,[P,Object(a["k"])("span",null,Object(a["P"])(e.orderInfo.remainAmount),1),z]),Object(a["k"])("div",H,[J,Object(a["k"])("span",null,Object(a["P"])(e.usdtBalance)+"}",1),Q])]),Object(a["k"])("div",q,[Number(e.usdtAllowance)>0?(Object(a["E"])(),Object(a["h"])(ee,{key:0,color:"linear-gradient(90deg, #5161F5 0%, #64C5FA 100%)",type:"primary",loading:e.btn.swaploading,size:"large","loading-text":"兑换中...",block:"",onClick:e.sellKtt},{default:Object(a["V"])((function(){return[G]})),_:1},8,["loading","onClick"])):(Object(a["E"])(),Object(a["h"])(ee,{key:1,color:"linear-gradient(90deg, #5161F5 0%, #64C5FA 100%)",type:"primary",loading:e.btn.swaploading,size:"large","loading-text":"正在授权...",onClick:e.approveUsdt},{default:Object(a["V"])((function(){return[W]})),_:1},8,["loading","onClick"]))])]})),_:1},8,["show"])])]})),_:1},8,["loading","error","finished","onLoad"])}var Y=n("5530"),Z=n("1da1"),$=(n("96cf"),n("b680"),n("d3b7"),n("159b"),n("1a2e")),ee=n("5502"),te=n("9d56"),ne=n("901e"),ae=n.n(ne),re=n("2ef0"),ie=n.n(re),ue=n("99d9"),se=n("722f"),ce=n("01ea"),oe=n("626a"),le=(n("b9b9"),{components:{HeadTop:$["a"]},setup:function(){var e=Object(ee["b"])(),t=Object(a["I"])({address:Object(a["f"])((function(){return e.state.accounts[0]})),web3:Object(a["f"])((function(){return e.state.provider})),marketContract:null,usdtContract:null,KttContract:null,usdtAllowance:"",usdtBalance:"0.00",usdtAmount:"0.00",kttAmount:"0.00",ktmAmount:"0.00",kttBalance:"0.00",kttAllowance:"",price:"",btn:{loading:!1,swaploading:!1},swapKttAmount:"",swapAmount:"",list:[],show:!1,orderInfo:null,page:1,limit:5,loading:!1,error:!1,finished:!1,initContract:function(){t.marketContract=new t.web3.eth.Contract(ue,ce["a"].sellMarketAddress),t.usdtContract=new t.web3.eth.Contract(se,ce["a"].usdtAddress),t.kttContract=new t.web3.eth.Contract(se,ce["a"].kttAddress),t.initData()},initData:function(){t.getBalance(),t.getUsdtAllowance(),t.getKttAllowance(),t.list=[],t.page=1,t.getList()},onLoad:function(){t.page++,t.getList()},getBalance:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.kttContract.methods.decimals().call();case 2:return n=e.sent,e.next=5,t.usdtContract.methods.decimals().call();case 5:return a=e.sent,e.next=8,t.kttContract.methods.balanceOf(t.address).call();case 8:return r=e.sent,e.next=11,t.usdtContract.methods.balanceOf(t.address).call();case 11:i=e.sent,t.kttBalance=new ae.a(r).dividedBy(Math.pow(10,n)).toFixed(2),t.usdtBalance=new ae.a(i).dividedBy(Math.pow(10,a)).toFixed(2);case 14:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getUsdtAllowance:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.usdtContract.methods.allowance(t.address,ce["a"].sellMarketAddress).call();case 2:n=e.sent,t.usdtAllowance=n;case 4:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getKttAllowance:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.kttContract.methods.allowance(t.address,ce["a"].sellMarketAddress).call();case 2:n=e.sent,t.kttAllowance=n;case 5:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),approveUsdt:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btn.loading=!0,e.prev=1,e.next=4,t.usdtContract.methods.approve(ce["a"].sellMarketAddress,te["b"]).send({from:t.address});case 4:Object(oe["a"])("授权成功"),t.getUsdtAllowance(),t.btn.loading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),Object(oe["a"])("授权失败"),t.btn.loading=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function n(){return e.apply(this,arguments)}return n}(),approveKtt:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btn.swaploading=!0,e.prev=1,e.next=4,t.kttContract.methods.approve(ce["a"].sellMarketAddress,te["b"]).send({from:t.address});case 4:Object(oe["a"])("授权成功"),t.getKttAllowance(),t.btn.swaploading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),Object(oe["a"])("授权失败"),t.btn.swaploading=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function n(){return e.apply(this,arguments)}return n}(),addBuyRecord:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.swapKttAmount){e.next=3;break}return Object(oe["a"])("请先输入数量"),e.abrupt("return");case 3:if(t.price){e.next=6;break}return Object(oe["a"])("请先输入价格"),e.abrupt("return");case 6:if(!(Number(t.swapKttAmount)>Number(t.kttBalance))){e.next=9;break}return Object(oe["a"])("KTT余额不足"),e.abrupt("return");case 9:return t.btn.loading=!0,e.prev=10,e.next=13,t.kttContract.methods.decimals().call();case 13:return n=e.sent,e.next=16,t.usdtContract.methods.decimals().call();case 16:return a=e.sent,r=new ae.a(t.swapKttAmount).multipliedBy(Math.pow(10,n)).toFixed(),i=new ae.a(t.price).multipliedBy(Math.pow(10,a)).toFixed(),e.next=21,t.marketContract.methods.addBuyRecord(r,i).send({from:t.address});case 21:Object(oe["a"])("挂单成功"),t.initData(),t.btn.loading=!1,e.next=30;break;case 26:e.prev=26,e.t0=e["catch"](10),Object(oe["a"])("挂单失败"),t.btn.loading=!1;case 30:case"end":return e.stop()}}),e,null,[[10,26]])})));function n(){return e.apply(this,arguments)}return n}(),getList:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,t.marketContract.methods.getUserRecords(t.page,t.limit).call({from:t.address});case 3:n=e.sent,a=n.recordArr,r=[],a.forEach((function(e){Number(e.id)>0&&r.push({kttAmount:new ae.a(e.kttAmount).dividedBy(Math.pow(10,18)).toFixed(2),haveSellAmount:new ae.a(e.haveSellAmount).dividedBy(Math.pow(10,18)).toFixed(2),price:new ae.a(e.price).dividedBy(Math.pow(10,18)).toFixed(2),id:e.id,remainAmount:new ae.a(e.kttAmount).minus(e.haveSellAmount).dividedBy(Math.pow(10,18)).toFixed(2)})})),1===t.page?t.list=r:(i=t.list).push.apply(i,r),t.loading=!1,t.finished=!(Math.ceil(n.total/t.limit)>t.page);case 11:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),toSell:function(e){t.show=!0,t.orderInfo=e},sellKtt:function(){var e=Object(Z["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.swapAmount){e.next=3;break}return Object(oe["a"])("请先输入数量"),e.abrupt("return");case 3:if(!(Number(t.swapAmount*t.orderInfo.price)>Number(t.usdtBalance))){e.next=6;break}return Object(oe["a"])("USDT余额不足"),e.abrupt("return");case 6:return t.btn.swaploading=!0,e.next=9,t.kttContract.methods.decimals().call();case 9:return n=e.sent,a=new ae.a(t.swapAmount).multipliedBy(Math.pow(10,n)).toFixed(),e.prev=11,e.next=14,t.marketContract.methods.sell(t.orderInfo.id,a).send({from:t.address});case 14:Object(oe["a"])("买入成功"),t.initData(),t.show=!1,t.btn.swaploading=!1,e.next=25;break;case 20:e.prev=20,e.t0=e["catch"](11),Object(oe["a"])("买入失败"),t.show=!1,t.btn.swaploading=!1;case 25:case"end":return e.stop()}}),e,null,[[11,20]])})));function n(){return e.apply(this,arguments)}return n}(),getOutAmount:ie.a.throttle(Object(Z["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.swapKttAmount&&0!=Number(t.swapKttAmount)&&t.price&&0!=Number(t.price)){e.next=2;break}return e.abrupt("return","0.00");case 2:n=new ae.a(t.swapKttAmount).multipliedBy(t.price).toFixed(2),t.usdtAmount=n;case 4:case"end":return e.stop()}}),e)}))),1e3)});t.address&&t.initContract(),Object(a["T"])((function(){return t.address}),(function(e){e&&t.initContract()}));var n=Object(a["Q"])(t);return Object(Y["a"])({},n)}}),de=(n("af22"),n("6b0d")),pe=n.n(de);const me=pe()(le,[["render",X],["__scopeId","data-v-45c0fc9d"]]);t["default"]=me}}]);
//# sourceMappingURL=chunk-413281fc.a0e03259.js.map