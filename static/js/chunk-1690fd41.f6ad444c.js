(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1690fd41"],{"99d9":function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"kttAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"BuyRecordLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"backAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"CancleLog","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"kttAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"}],"name":"SellLog","type":"event"},{"inputs":[],"name":"KTT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USDT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_kttAmount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addBuyRecord","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"cancle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"denominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"getToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_page","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"}],"name":"getUserRecords","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"kttAmount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"haveSellAmount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"bool","name":"isCancle","type":"bool"}],"internalType":"struct Market.Record[]","name":"recordArr","type":"tuple[]"},{"internalType":"uint256","name":"curPage","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"orderId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"records","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"usdtAmount","type":"uint256"},{"internalType":"uint256","name":"kttAmount","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"haveSellAmount","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"bool","name":"isCancle","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_kttAmount","type":"uint256"}],"name":"sell","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_ktt","type":"address"}],"name":"setKttAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_receiveAddress","type":"address"}],"name":"setReceiveAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},c1ec:function(e,t,n){"use strict";n.r(t);n("a9e3");var a=n("7a23"),r=function(e){return Object(a["H"])("data-v-32b42f14"),e=e(),Object(a["F"])(),e},i={class:"swap"},u={class:"swap-item"},s=r((function(){return Object(a["k"])("div",{class:"title"},"挂卖单",-1)})),c=r((function(){return Object(a["k"])("span",{class:"sympol"},"KTT",-1)})),o=r((function(){return Object(a["k"])("span",{class:"sympol"},"USDT / KTT",-1)})),l={class:"flex-between"},d={class:"price-desc"},p=Object(a["m"])("余额： "),b=Object(a["m"])(" KTT"),m=r((function(){return Object(a["k"])("div",{style:{"margin-top":"-20px"}},[Object(a["k"])("div",{class:"price-desc"},"100KTT起步、100的整数倍挂卖")],-1)})),y={class:"button-box"},f=Object(a["m"])("挂单"),O=Object(a["m"])("授权KTT"),j=r((function(){return Object(a["k"])("div",{class:"title-sub"},"所有挂单",-1)})),w={class:"list-box"},k={class:"top flex-middle"},v={class:"top-item flex-item"},h={class:"num"},g=r((function(){return Object(a["k"])("div",{class:"desc"},"卖出KTT数量",-1)})),x=r((function(){return Object(a["k"])("div",{class:"line"},null,-1)})),T={class:"top-item flex-item"},A={class:"num yellow"},C=r((function(){return Object(a["k"])("div",{class:"desc"},"价格/KTT",-1)})),K={class:"bottom"},M={class:"row flex-middle"},R=r((function(){return Object(a["k"])("div",{class:"name"},"挂单地址",-1)})),B={class:"value"},_={class:"row flex-middle"},V=r((function(){return Object(a["k"])("div",{class:"name"},"已卖出数量",-1)})),S={class:"value"},U={class:"row flex-middle"},L=r((function(){return Object(a["k"])("div",{class:"name"},"剩余数量",-1)})),N={class:"value"},F={key:0,class:"btn-box flex-between"},E=r((function(){return Object(a["k"])("span",null,null,-1)})),D=Object(a["m"])("取消"),P=Object(a["m"])("买入KTT"),I=Object(a["m"])("已取消"),z={class:"close-box flex-between"},H=r((function(){return Object(a["k"])("span",null,null,-1)})),J=r((function(){return Object(a["k"])("span",{class:"sympol"},"KTT",-1)})),Q={class:"flex-between"},W={class:"price-desc"},q=Object(a["m"])("可买入: "),G=Object(a["m"])(" KTT"),X={class:"price-desc"},Y=Object(a["m"])("余额: "),Z=Object(a["m"])(" KTT"),$={class:"button-box"},ee=Object(a["m"])("卖出"),te=Object(a["m"])("授权KTT");function ne(e,t,n,r,ne,ae){var re=Object(a["L"])("HeadTop"),ie=Object(a["L"])("van-field"),ue=Object(a["L"])("van-button"),se=Object(a["L"])("van-icon"),ce=Object(a["L"])("van-dialog"),oe=Object(a["L"])("van-list");return Object(a["E"])(),Object(a["h"])(oe,{loading:e.loading,"onUpdate:loading":t[5]||(t[5]=function(t){return e.loading=t}),"immediate-check":!1,error:e.error,"onUpdate:error":t[6]||(t[6]=function(t){return e.error=t}),"error-text":"请求失败，点击重新加载",finished:e.finished,"finished-text":"没有更多了",onLoad:e.onLoad},{default:Object(a["V"])((function(){return[Object(a["k"])("div",i,[Object(a["n"])(re,{title:"卖单市场",isShowTop:!0,isSubHeader:!1}),Object(a["k"])("div",u,[s,Object(a["n"])(ie,{style:{"margin-bottom":"12px"},modelValue:e.swapKttAmount,"onUpdate:modelValue":[t[0]||(t[0]=function(t){return e.swapKttAmount=t}),e.getOutAmount],center:"",clearable:"",label:"",placeholder:"请输入卖出数量"},{extra:Object(a["V"])((function(){return[c]})),_:1},8,["modelValue","onUpdate:modelValue"]),Object(a["n"])(ie,{modelValue:e.price,"onUpdate:modelValue":[t[1]||(t[1]=function(t){return e.price=t}),e.getOutAmount],center:"",clearable:"",label:"",placeholder:"请输入单价"},{extra:Object(a["V"])((function(){return[o]})),_:1},8,["modelValue","onUpdate:modelValue"]),Object(a["k"])("div",l,[Object(a["k"])("div",d,[p,Object(a["k"])("span",null,Object(a["P"])(e.kttBalance),1),b])]),m,Object(a["k"])("div",y,[Number(e.kttAllowance>0)?(Object(a["E"])(),Object(a["h"])(ue,{key:0,type:"primary",loading:e.btn.loading,size:"large","loading-text":"兑换中...",block:"",onClick:e.addBuyRecord},{default:Object(a["V"])((function(){return[f]})),_:1},8,["loading","onClick"])):(Object(a["E"])(),Object(a["h"])(ue,{key:1,type:"primary",loading:e.btn.loading,size:"large","loading-text":"正在授权...",onClick:e.approveKtt},{default:Object(a["V"])((function(){return[O]})),_:1},8,["loading","onClick"]))])]),j,Object(a["k"])("div",w,[(Object(a["E"])(!0),Object(a["j"])(a["a"],null,Object(a["K"])(e.list,(function(t,n){return Object(a["W"])((Object(a["E"])(),Object(a["j"])("div",{class:"item",key:n},[Object(a["k"])("div",k,[Object(a["k"])("div",v,[Object(a["k"])("div",h,Object(a["P"])(t.kttAmount),1),g]),x,Object(a["k"])("div",T,[Object(a["k"])("div",A,Object(a["P"])(t.price)+"USDT",1),C])]),Object(a["k"])("div",K,[Object(a["k"])("div",M,[R,Object(a["k"])("div",B,Object(a["P"])(t.buyer.substring(0,6)+"......"+t.buyer.substring(t.buyer.length-6,t.buyer.length)),1)]),Object(a["k"])("div",_,[V,Object(a["k"])("div",S,Object(a["P"])(t.haveSellAmount)+"KTT",1)]),Object(a["k"])("div",U,[L,Object(a["k"])("div",N,Object(a["P"])(t.remainAmount)+"KTT",1)])]),Number(t.kttAmount)>Number(t.haveSellAmount)?(Object(a["E"])(),Object(a["j"])("div",F,[E,t.isCancle||t.buyer!=e.address&&e.address!=e.config.ownerAddress?Object(a["i"])("",!0):(Object(a["E"])(),Object(a["h"])(ue,{key:0,type:"primary",class:"btn-green",style:{width:"120px"},block:"",onClick:function(n){return e.cancle(t.id)}},{default:Object(a["V"])((function(){return[D]})),_:2},1032,["onClick"])),t.isCancle?Object(a["i"])("",!0):(Object(a["E"])(),Object(a["h"])(ue,{key:1,type:"primary",class:"btn-green",style:{width:"120px"},block:"",onClick:function(n){return e.toSell(t)}},{default:Object(a["V"])((function(){return[P]})),_:2},1032,["onClick"])),t.isCancle?(Object(a["E"])(),Object(a["h"])(ue,{key:2,type:"primary",class:"btn-green",style:{width:"120px"},block:""},{default:Object(a["V"])((function(){return[I]})),_:1})):Object(a["i"])("",!0)])):Object(a["i"])("",!0)])),[[a["S"],Number(t.kttAmount)>Number(t.haveSellAmount)]])})),128))]),Object(a["n"])(ce,{show:e.show,"onUpdate:show":t[4]||(t[4]=function(t){return e.show=t}),class:"swap-item",showConfirmButton:!1,style:{padding:"0"},title:""},{default:Object(a["V"])((function(){return[Object(a["k"])("div",z,[H,Object(a["n"])(se,{onClick:t[2]||(t[2]=function(t){return e.show=!1}),name:"cross",color:"#fff",size:"20px"})]),Object(a["n"])(ie,{modelValue:e.swapAmount,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.swapAmount=t}),center:"",clearable:"",label:"",placeholder:"请输入买入数量"},{extra:Object(a["V"])((function(){return[J]})),_:1},8,["modelValue"]),Object(a["k"])("div",Q,[Object(a["k"])("div",W,[q,Object(a["k"])("span",null,Object(a["P"])(e.orderInfo.remainAmount),1),G]),Object(a["k"])("div",X,[Y,Object(a["k"])("span",null,Object(a["P"])(e.usdtBalance)+"}",1),Z])]),Object(a["k"])("div",$,[Number(e.usdtAllowance)>0?(Object(a["E"])(),Object(a["h"])(ue,{key:0,color:"linear-gradient(90deg, #5161F5 0%, #64C5FA 100%)",type:"primary",loading:e.btn.swaploading,size:"large","loading-text":"兑换中...",block:"",onClick:e.sellKtt},{default:Object(a["V"])((function(){return[ee]})),_:1},8,["loading","onClick"])):(Object(a["E"])(),Object(a["h"])(ue,{key:1,color:"linear-gradient(90deg, #5161F5 0%, #64C5FA 100%)",type:"primary",loading:e.btn.swaploading,size:"large","loading-text":"正在授权...",onClick:e.approveUsdt},{default:Object(a["V"])((function(){return[te]})),_:1},8,["loading","onClick"]))])]})),_:1},8,["show"])])]})),_:1},8,["loading","error","finished","onLoad"])}var ae=n("5530"),re=n("1da1"),ie=(n("96cf"),n("b680"),n("d3b7"),n("159b"),n("1a2e")),ue=n("5502"),se=n("9d56"),ce=n("901e"),oe=n.n(ce),le=n("2ef0"),de=n.n(le),pe=n("99d9"),be=n("722f"),me=n("01ea"),ye=n("626a"),fe=(n("b9b9"),{components:{HeadTop:ie["a"]},setup:function(){var e=Object(ue["b"])(),t=Object(a["I"])({address:Object(a["f"])((function(){return e.state.accounts[0]})),web3:Object(a["f"])((function(){return e.state.provider})),marketContract:null,usdtContract:null,KttContract:null,usdtAllowance:"",usdtBalance:"0.00",usdtAmount:"0.00",kttAmount:"0.00",ktmAmount:"0.00",kttBalance:"0.00",kttAllowance:"",config:me["a"],price:"",btn:{loading:!1,swaploading:!1},swapKttAmount:"",swapAmount:"",list:[],show:!1,orderInfo:null,page:1,limit:15,loading:!1,error:!1,finished:!1,initContract:function(){t.marketContract=new t.web3.eth.Contract(pe,me["a"].sellMarketAddress),t.usdtContract=new t.web3.eth.Contract(be,me["a"].usdtAddress),t.kttContract=new t.web3.eth.Contract(be,me["a"].kttAddress),t.initData()},initData:function(){t.getBalance(),t.getUsdtAllowance(),t.getKttAllowance(),t.list=[],t.page=1,t.getList()},onLoad:function(){t.page++,t.getList()},getBalance:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.kttContract.methods.decimals().call();case 2:return n=e.sent,e.next=5,t.usdtContract.methods.decimals().call();case 5:return a=e.sent,e.next=8,t.kttContract.methods.balanceOf(t.address).call();case 8:return r=e.sent,e.next=11,t.usdtContract.methods.balanceOf(t.address).call();case 11:i=e.sent,t.kttBalance=new oe.a(r).dividedBy(Math.pow(10,n)).toFixed(2),t.usdtBalance=new oe.a(i).dividedBy(Math.pow(10,a)).toFixed(2);case 14:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getUsdtAllowance:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.usdtContract.methods.allowance(t.address,me["a"].sellMarketAddress).call();case 2:n=e.sent,t.usdtAllowance=n;case 4:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),getKttAllowance:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.kttContract.methods.allowance(t.address,me["a"].sellMarketAddress).call();case 2:n=e.sent,t.kttAllowance=n;case 5:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),approveUsdt:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btn.loading=!0,e.prev=1,e.next=4,t.usdtContract.methods.approve(me["a"].sellMarketAddress,se["b"]).send({from:t.address});case 4:Object(ye["a"])("授权成功"),t.getUsdtAllowance(),t.btn.loading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),Object(ye["a"])("授权失败"),t.btn.loading=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function n(){return e.apply(this,arguments)}return n}(),approveKtt:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.btn.swaploading=!0,e.prev=1,e.next=4,t.kttContract.methods.approve(me["a"].sellMarketAddress,se["b"]).send({from:t.address});case 4:Object(ye["a"])("授权成功"),t.getKttAllowance(),t.btn.swaploading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](1),Object(ye["a"])("授权失败"),t.btn.swaploading=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));function n(){return e.apply(this,arguments)}return n}(),addBuyRecord:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.swapKttAmount){e.next=3;break}return Object(ye["a"])("请先输入数量"),e.abrupt("return");case 3:if(!(Number(t.swapKttAmount)<100)){e.next=6;break}return Object(ye["a"])("数量最小100"),e.abrupt("return");case 6:if(!(Number(t.swapKttAmount)%100>0)){e.next=9;break}return Object(ye["a"])("必须是100的整数倍"),e.abrupt("return");case 9:if(t.price){e.next=12;break}return Object(ye["a"])("请先输入价格"),e.abrupt("return");case 12:if(!(Number(t.swapKttAmount)>Number(t.kttBalance))){e.next=15;break}return Object(ye["a"])("KTT余额不足"),e.abrupt("return");case 15:return t.btn.loading=!0,e.prev=16,e.next=19,t.kttContract.methods.decimals().call();case 19:return n=e.sent,e.next=22,t.usdtContract.methods.decimals().call();case 22:return a=e.sent,r=new oe.a(t.swapKttAmount).multipliedBy(Math.pow(10,n)).toFixed(),i=new oe.a(t.price).multipliedBy(Math.pow(10,a)).toFixed(),e.next=27,t.marketContract.methods.addBuyRecord(r,i).send({from:t.address});case 27:Object(ye["a"])("挂单成功"),t.initData(),t.btn.loading=!1,e.next=36;break;case 32:e.prev=32,e.t0=e["catch"](16),Object(ye["a"])("挂单失败"),t.btn.loading=!1;case 36:case"end":return e.stop()}}),e,null,[[16,32]])})));function n(){return e.apply(this,arguments)}return n}(),getList:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){var n,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,t.marketContract.methods.getUserRecords(t.page,t.limit).call({from:t.address});case 3:n=e.sent,a=n.recordArr,r=[],a.forEach((function(e){Number(e.id)>0&&!e.isCancle&&r.push({kttAmount:new oe.a(e.kttAmount).dividedBy(Math.pow(10,18)).toFixed(2),haveSellAmount:new oe.a(e.haveSellAmount).dividedBy(Math.pow(10,18)).toFixed(2),price:new oe.a(e.price).dividedBy(Math.pow(10,18)).toFixed(2),id:e.id,remainAmount:new oe.a(e.kttAmount).minus(e.haveSellAmount).dividedBy(Math.pow(10,18)).toFixed(2),isCancle:e.isCancle,buyer:e.buyer})})),1===t.page?t.list=r:(i=t.list).push.apply(i,r),t.loading=!1,t.finished=!(Math.ceil(n.total/t.limit)>t.page),t.finished||t.onLoad();case 12:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),toSell:function(e){t.show=!0,t.orderInfo=e},sellKtt:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.swapAmount){e.next=3;break}return Object(ye["a"])("请先输入数量"),e.abrupt("return");case 3:if(!(Number(t.swapAmount*t.orderInfo.price)>Number(t.usdtBalance))){e.next=6;break}return Object(ye["a"])("USDT余额不足"),e.abrupt("return");case 6:return t.btn.swaploading=!0,e.next=9,t.kttContract.methods.decimals().call();case 9:return n=e.sent,a=new oe.a(t.swapAmount).multipliedBy(Math.pow(10,n)).toFixed(),e.prev=11,e.next=14,t.marketContract.methods.sell(t.orderInfo.id,a).send({from:t.address});case 14:Object(ye["a"])("买入成功"),t.initData(),t.show=!1,t.btn.swaploading=!1,e.next=25;break;case 20:e.prev=20,e.t0=e["catch"](11),Object(ye["a"])("买入失败"),t.show=!1,t.btn.swaploading=!1;case 25:case"end":return e.stop()}}),e,null,[[11,20]])})));function n(){return e.apply(this,arguments)}return n}(),cancle:function(){var e=Object(re["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.marketContract.methods.cancle(n).send({from:t.address});case 3:Object(ye["a"])("取消成功"),t.initData(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),Object(ye["a"])("取消失败");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));function n(t){return e.apply(this,arguments)}return n}(),getOutAmount:de.a.throttle(Object(re["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.swapKttAmount&&0!=Number(t.swapKttAmount)&&t.price&&0!=Number(t.price)){e.next=2;break}return e.abrupt("return","0.00");case 2:n=new oe.a(t.swapKttAmount).multipliedBy(t.price).toFixed(2),t.usdtAmount=n;case 4:case"end":return e.stop()}}),e)}))),1e3)});t.address&&t.initContract(),Object(a["T"])((function(){return t.address}),(function(e){e&&t.initContract()}));var n=Object(a["Q"])(t);return Object(ae["a"])({},n)}}),Oe=(n("e1f2"),n("6b0d")),je=n.n(Oe);const we=je()(fe,[["render",ne],["__scopeId","data-v-32b42f14"]]);t["default"]=we},e1f2:function(e,t,n){"use strict";n("e7e7")},e7e7:function(e,t,n){}}]);
//# sourceMappingURL=chunk-1690fd41.f6ad444c.js.map