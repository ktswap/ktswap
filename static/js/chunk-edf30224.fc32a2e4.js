(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edf30224"],{"2a11":function(e,t,a){},6095:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),c=function(e){return Object(n["H"])("data-v-8d772a88"),e=e(),Object(n["F"])(),e},i={class:"swap-box invest-box"},r={class:"list-box"},d={class:"top flex-middle"},s={class:"top-item flex-item"},o={class:"num"},l=c((function(){return Object(n["k"])("div",{class:"desc"},"质押KTT",-1)})),u=c((function(){return Object(n["k"])("div",{class:"line"},null,-1)})),b={class:"top-item flex-item"},m={class:"num yellow"},j=c((function(){return Object(n["k"])("div",{class:"desc"},"KTM总收益",-1)})),v={class:"bottom"},O={class:"row flex-middle"},f=c((function(){return Object(n["k"])("div",{class:"name"},"时长",-1)})),k={class:"value"},p={class:"row flex-middle"},w=c((function(){return Object(n["k"])("div",{class:"name"},"倍数",-1)})),h={class:"value"},x={class:"row flex-middle"},y=c((function(){return Object(n["k"])("div",{class:"name"},"已领取",-1)})),g={class:"value"},T={class:"row flex-middle"},B=c((function(){return Object(n["k"])("div",{class:"name"},"待领取",-1)})),M={class:"value"},K={class:"row flex-middle"},R=c((function(){return Object(n["k"])("div",{class:"name"},"质押时间",-1)})),C={class:"value"},L={class:"row flex-middle"},F=c((function(){return Object(n["k"])("div",{class:"name"},"质押到期时间",-1)})),H={class:"value"},P={class:"btn-box flex-between"},A=c((function(){return Object(n["k"])("span",null,null,-1)})),N=Object(n["m"])("领取");function S(e,t,a,c,S,E){var _=Object(n["L"])("HeadTop"),U=Object(n["L"])("van-button"),D=Object(n["L"])("van-list");return Object(n["E"])(),Object(n["j"])("div",i,[Object(n["n"])(_,{title:"质押记录",isShowTop:!0,isSubHeader:!1}),Object(n["n"])(D,{loading:e.loading,"onUpdate:loading":t[0]||(t[0]=function(t){return e.loading=t}),"immediate-check":!1,error:e.error,"onUpdate:error":t[1]||(t[1]=function(t){return e.error=t}),"error-text":"请求失败，点击重新加载",finished:e.finished,"finished-text":"没有更多了",onLoad:e.onLoad},{default:Object(n["V"])((function(){return[Object(n["k"])("div",r,[(Object(n["E"])(!0),Object(n["j"])(n["a"],null,Object(n["K"])(e.list,(function(t,a){return Object(n["E"])(),Object(n["j"])("div",{class:"item",key:a},[Object(n["k"])("div",d,[Object(n["k"])("div",s,[Object(n["k"])("div",o,Object(n["P"])(t.stakeKttAmount),1),l]),u,Object(n["k"])("div",b,[Object(n["k"])("div",m,Object(n["P"])(t.totalRewardKtm),1),j])]),Object(n["k"])("div",v,[Object(n["k"])("div",O,[f,Object(n["k"])("div",k,Object(n["P"])(t.lockTime)+"天",1)]),Object(n["k"])("div",p,[w,Object(n["k"])("div",h,Object(n["P"])(t.rate),1)]),Object(n["k"])("div",x,[y,Object(n["k"])("div",g,Object(n["P"])(t.haveBack)+"KTM",1)]),Object(n["k"])("div",T,[B,Object(n["k"])("div",M,Object(n["P"])(t.canGetAmount)+"KTM",1)]),Object(n["k"])("div",K,[R,Object(n["k"])("div",C,Object(n["P"])(t.stakeTime),1)]),Object(n["k"])("div",L,[F,Object(n["k"])("div",H,Object(n["P"])(t.endTime),1)])]),Object(n["k"])("div",P,[A,Object(n["n"])(U,{type:"primary",class:"btn-green",style:{width:"120px"},block:"",onClick:function(a){return e.withdrawRewardStakeRecord(t.id)}},{default:Object(n["V"])((function(){return[N]})),_:2},1032,["onClick"])])])})),128))])]})),_:1},8,["loading","error","finished","onLoad"])])}var E=a("5530"),_=a("1da1"),U=(a("96cf"),a("d3b7"),a("159b"),a("a9e3"),a("b680"),a("1a2e")),D=a("5502"),G=a("a1be"),I=a("626a"),J=a("01ea"),V=a("901e"),Q=a.n(V),q=a("b9b9"),z=a.n(q),W={components:{HeadTop:U["a"]},setup:function(){var e=Object(D["b"])(),t=Object(n["I"])({address:Object(n["f"])((function(){return e.state.accounts[0]})),web3:Object(n["f"])((function(){return e.state.provider})),swapContract:null,page:1,limit:5,loading:!1,error:!1,finished:!1,list:[],initContract:function(){t.swapContract=new t.web3.eth.Contract(G,J["a"].swapAddress),t.initData()},initData:function(){t.list=[],t.page=1,t.getList()},onLoad:function(){t.page++,t.getList()},getList:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(){var a,n,c,i,r,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.swapContract.methods.getUserRecords(t.address,1,5).call({from:t.address});case 2:return a=e.sent,e.next=5,t.swapContract.methods.periodTime().call();case 5:return n=e.sent,e.next=8,t.swapContract.methods.getBlockTimestamp().call();case 8:c=e.sent,i=a.records,r=[],i.forEach((function(e){Number(e.id)>0&&r.push({stakeKttAmount:new Q.a(e.stakeKttAmount).dividedBy(Math.pow(10,18)).toFixed(2),totalRewardKtm:new Q.a(e.totalRewardKtm).dividedBy(Math.pow(10,18)).toFixed(2),dayBackKtm:new Q.a(e.dayBackKtm).dividedBy(Math.pow(10,18)).toFixed(2),id:e.id,rate:e.rate/1e4,lockTime:new Q.a(e.period).dividedBy(n).toFixed(1),stakeTime:z()(1e3*e.stakeTime,"yyyy-mm-dd HH:MM:ss"),endTime:z()(1e3*(Number(e.stakeTime)+Number(e.period)),"yyyy-mm-dd HH:MM:ss"),haveBack:new Q.a(e.haveBack).dividedBy(Math.pow(10,18)).toFixed(2),canGetAmount:c>=Number(e.stakeTime)+Number(e.period)?new Q.a(Math.floor(e.period/n)).multipliedBy(e.dayBackKtm).minus(e.haveBack).dividedBy(Math.pow(10,18)).toFixed(2):new Q.a(Math.floor((c-e.stakeTime)/n)).multipliedBy(e.dayBackKtm).minus(e.haveBack).dividedBy(Math.pow(10,18)).toFixed(2)})})),1===t.page?t.list=r:(d=t.list).push.apply(d,r),t.loading=!1,t.finished=!(Math.ceil(a.total/t.limit)>t.page);case 16:case"end":return e.stop()}}),e)})));function a(){return e.apply(this,arguments)}return a}(),withdrawRewardStakeRecord:function(){var e=Object(_["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.swapContract.methods.withdrawStakeRecord(a).send({from:t.address});case 3:Object(I["a"])("领取成功"),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),Object(I["a"])("领取失败");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));function a(t){return e.apply(this,arguments)}return a}()});t.address&&t.initContract(),Object(n["T"])((function(){return t.address}),(function(e){e&&t.initContract()}));var a=Object(n["Q"])(t);return Object(E["a"])({},a)}},X=(a("c436"),a("6b0d")),Y=a.n(X);const Z=Y()(W,[["render",S],["__scopeId","data-v-8d772a88"]]);t["default"]=Z},c436:function(e,t,a){"use strict";a("2a11")}}]);
//# sourceMappingURL=chunk-edf30224.fc32a2e4.js.map