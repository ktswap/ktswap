(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-372b1556"],{"09ef":function(t,e,n){},2995:function(t,e,n){"use strict";n("a39b")},"76a7":function(t,e,n){"use strict";n.r(e);n("a9e3");var a=n("7a23"),r=n("8d5e"),c=n.n(r),o=n("c2a5"),s=n.n(o),i=n("ab9f"),u=n.n(i),b=function(t){return Object(a["H"])("data-v-deba3f88"),t=t(),Object(a["F"])(),t},l={class:"swap-box invest-box"},d={class:"img-box"},p={key:0,src:c.a,alt:""},f={key:1,src:s.a,alt:""},m={class:"input-box"},j=b((function(){return Object(a["k"])("span",{class:"sympol"},"KTT",-1)})),w={class:"btn-box"},g=Object(a["m"])("合成"),O=Object(a["m"])("授权"),k=b((function(){return Object(a["k"])("img",{class:"show-img",src:u.a},null,-1)}));function h(t,e,n,r,c,o){var s=Object(a["K"])("HeadTop"),i=Object(a["K"])("van-field"),u=Object(a["K"])("van-button"),b=Object(a["K"])("van-dialog");return Object(a["E"])(),Object(a["j"])(a["a"],null,[Object(a["k"])("div",l,[Object(a["n"])(s,{title:"合成",isShowTop:!0,isSubHeader:!1}),Object(a["k"])("div",d,[!t.btn.loading||Number(t.kttAllowance)<=0?(Object(a["E"])(),Object(a["j"])("img",p)):Number(t.kttAllowance)>0&&t.btn.loading?(Object(a["E"])(),Object(a["j"])("img",f)):Object(a["i"])("",!0)]),Object(a["k"])("div",m,[Object(a["n"])(i,{class:"cell-input",modelValue:t.amount,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.amount=e}),type:"number",center:"",label:"",placeholder:"请输入投资数量"},{extra:Object(a["U"])((function(){return[j]})),_:1},8,["modelValue"])]),Object(a["k"])("div",w,[Number(t.kttAllowance)>0?(Object(a["E"])(),Object(a["h"])(u,{key:0,color:"linear-gradient(270deg, #00DFB2 0%, #00C4DE 100%)",type:"primary",size:"large",loading:t.btn.loading,"loading-text":"正在合成...",block:"",onClick:t.mergeNft},{default:Object(a["U"])((function(){return[g]})),_:1},8,["loading","onClick"])):(Object(a["E"])(),Object(a["h"])(u,{key:1,color:"linear-gradient(270deg, #00DFB2 0%, #00C4DE 100%)",type:"primary",size:"large",loading:t.btn.loading,"loading-text":"正在授权...",block:"",onClick:t.approveKtt},{default:Object(a["U"])((function(){return[O]})),_:1},8,["loading","onClick"]))])]),Object(a["n"])(b,{show:t.show,"onUpdate:show":e[1]||(e[1]=function(e){return t.show=e}),title:""},{default:Object(a["U"])((function(){return[k]})),_:1},8,["show"])],64)}var v=n("5530"),x=n("1da1"),C=(n("b680"),n("96cf"),n("1a2e")),A=n("5502"),y=n("a1be"),K=n("722f"),T=n("626a"),N=n("01ea"),U=n("9d56"),_=n("c00b"),E=n("901e"),D=n.n(E),R=n("98b3"),I={components:{HeadTop:C["a"]},setup:function(){var t=Object(A["b"])(),e=Object(a["I"])({address:Object(a["f"])((function(){return t.state.accounts[0]})),web3:Object(a["f"])((function(){return t.state.provider})),swapContract:null,voiceNftContract:null,intro:R["a"].get()||N["a"].rootAddress,show:!1,amount:"",kttAllowance:"",btn:{loading:!1},initContract:function(){e.swapContract=new e.web3.eth.Contract(y,N["a"].swapAddress),e.kttContract=new e.web3.eth.Contract(K,N["a"].kttAddress),e.initData()},initData:function(){e.getKttAllowance()},getKttAllowance:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.kttContract.methods.allowance(e.address,N["a"].swapAddress).call();case 2:n=t.sent,e.kttAllowance=n;case 4:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}(),approveKtt:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.btn.swaploading=!0,t.prev=1,t.next=4,e.kttContract.methods.approve(N["a"].swapAddress,U["b"]).send({from:e.address});case 4:Object(T["a"])("授权成功"),e.getKttAllowance(),e.btn.swaploading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](1),Object(T["a"])("授权失败"),e.btn.swaploading=!1;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));function n(){return t.apply(this,arguments)}return n}(),mergeNft:function(){var t=Object(x["a"])(regeneratorRuntime.mark((function t(){var n,a,r,c,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.kttContract.methods.balanceOf(e.address).call();case 2:return n=t.sent,t.next=5,e.swapContract.methods.minInvestAmount().call();case 5:return a=t.sent,t.next=9,e.kttContract.methods.decimals().call();case 9:if(r=t.sent,c=new D.a(e.amount).multipliedBy(Math.pow(10,r)).toFixed(),e.amount){t.next=14;break}return Object(T["a"])("请输入投资数量"),t.abrupt("return");case 14:if(!(Number(c)<Number(a))){t.next=17;break}return Object(T["a"])("KTT投资数量最小500KTT"),t.abrupt("return");case 17:if(!(Number(n)<Number(c))){t.next=20;break}return Object(T["a"])("KTT余额不足"),t.abrupt("return");case 20:return t.next=22,e.swapContract.methods.getUserInfo(e.intro).call();case 22:return o=t.sent,t.next=25,e.swapContract.methods.getUserInfo(e.address).call();case 25:if(s=t.sent,o.intro!=_["a"]||e.intro==N["a"].rootAddress||s.intro!=_["a"]){t.next=29;break}return Object(T["a"])("推荐人无效"),t.abrupt("return");case 29:return e.btn.loading=!0,t.prev=30,t.next=33,e.swapContract.methods.invest(c,e.intro).send({from:e.address});case 33:Object(T["a"])("合成成功"),e.show=!0,e.btn.loading=!1,t.next=43;break;case 38:t.prev=38,t.t0=t["catch"](30),Object(T["a"])("合成失败"),e.btn.loading=!1;case 43:case"end":return t.stop()}}),t,null,[[30,38]])})));function n(){return t.apply(this,arguments)}return n}()});e.address&&e.initContract(),Object(a["S"])((function(){return e.address}),(function(t){t&&e.initContract()}));var n=Object(a["P"])(e);return Object(v["a"])({},n)}},F=(n("2995"),n("dc53"),n("6b0d")),H=n.n(F);const B=H()(I,[["render",h],["__scopeId","data-v-deba3f88"]]);e["default"]=B},"8d5e":function(t,e,n){t.exports=n.p+"static/img/merge.47933a4b.png"},a39b:function(t,e,n){},ab9f:function(t,e,n){t.exports=n.p+"static/img/index_img.8839ad11.png"},c2a5:function(t,e,n){t.exports=n.p+"static/img/_4.e8519102.gif"},dc53:function(t,e,n){"use strict";n("09ef")}}]);
//# sourceMappingURL=chunk-372b1556.86355475.js.map