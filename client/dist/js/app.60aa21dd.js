(function(e){function t(t){for(var c,s,n=t[0],l=t[1],r=t[2],d=0,b=[];d<n.length;d++)s=n[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,r||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],c=!0,n=1;n<i.length;n++){var l=i[n];0!==o[l]&&(c=!1)}c&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var c={},o={app:0},a=[];function s(t){if(c[t])return c[t].exports;var i=c[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=c,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(i,c,function(t){return e[t]}.bind(null,c));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var r=0;r<n.length;r++)t(n[r]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"067f":function(e,t,i){},"215d":function(e,t,i){},"2c8c":function(e,t,i){},"2fc5":function(e,t,i){},"3bd9":function(e,t,i){"use strict";i("2c8c")},"400c":function(e,t,i){},"43f9":function(e,t,i){},"453e":function(e,t,i){},"4ea1":function(e,t,i){"use strict";i("c142")},"56b6":function(e,t,i){"use strict";i("453e")},"56d7":function(e,t,i){"use strict";i.r(t);var c=i("7a23");const o={class:"layout"};function a(e,t,i,a,s,n){const l=Object(c["C"])("base-notification"),r=Object(c["C"])("the-header"),u=Object(c["C"])("router-view");return Object(c["u"])(),Object(c["f"])("div",o,[n.error?(Object(c["u"])(),Object(c["d"])(l,{key:0,onClick:n.clearError},{default:Object(c["K"])(()=>[Object(c["i"])(Object(c["G"])(n.error),1)]),_:1},8,["onClick"])):Object(c["e"])("",!0),Object(c["j"])(r),Object(c["j"])(u)])}const s=e=>(Object(c["x"])("data-v-532912a8"),e=e(),Object(c["v"])(),e),n=["src"],l={key:0},r={key:0,class:"kidsTitle"},u=s(()=>Object(c["g"])("li",null,[Object(c["g"])("p",null,"Flashback Kids")],-1)),d=[u],b={key:1};function m(e,t,i,o,a,s){const u=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["f"])("header",{class:Object(c["q"])(["header",{kidsTheme:s.isKid}])},[Object(c["j"])(u,{to:"/"},{default:Object(c["K"])(()=>[Object(c["g"])("img",{src:a.publicPath+"logo.svg",alt:"Logo"},null,8,n)]),_:1}),s.hasProfileSelected?(Object(c["u"])(),Object(c["f"])("ul",l,[Object(c["g"])("div",null,[Object(c["g"])("li",null,[Object(c["j"])(u,{to:"/media"},{default:Object(c["K"])(()=>[Object(c["i"])("Media")]),_:1})]),Object(c["g"])("li",null,[Object(c["j"])(u,{to:"/profiles"},{default:Object(c["K"])(()=>[Object(c["i"])("Profiles")]),_:1})]),Object(c["g"])("li",null,[Object(c["g"])("a",{onClick:t[0]||(t[0]=(...e)=>s.logout&&s.logout(...e))},"Logout")])]),s.isKid?(Object(c["u"])(),Object(c["f"])("div",r,d)):Object(c["e"])("",!0)])):s.isLoggedIn?(Object(c["u"])(),Object(c["f"])("ul",b,[Object(c["g"])("div",null,[Object(c["g"])("li",null,[Object(c["j"])(u,{to:"profiles"},{default:Object(c["K"])(()=>[Object(c["i"])("Profiles")]),_:1})]),Object(c["g"])("li",null,[Object(c["g"])("a",{onClick:t[1]||(t[1]=(...e)=>s.logout&&s.logout(...e))},"Logout")])])])):Object(c["e"])("",!0)],2)}var p={methods:{logout(){this.$store.dispatch("logout"),this.$router.replace("/")}},data(){return{publicPath:"/"}},computed:{isLoggedIn(){return this.$store.getters.isAuthenticated},hasProfileSelected(){return this.$store.getters.hasProfileSelected},isKid(){return this.$store.getters.isKid}}},j=(i("f294"),i("6b0d")),g=i.n(j);const O=g()(p,[["render",m],["__scopeId","data-v-532912a8"]]);var h=O;const f={class:"notification"};function v(e,t){return Object(c["u"])(),Object(c["f"])("div",f,[Object(c["g"])("p",null,[Object(c["B"])(e.$slots,"default",{},void 0,!0)])])}i("56b6");const k={},y=g()(k,[["render",v],["__scopeId","data-v-78e0b8dc"]]);var w=y,P={name:"App",components:{TheHeader:h,BaseNotification:w},computed:{error(){return this.$store.getters.error},isAutoLogout(){return this.$store.getters.isAutoLogout}},created(){this.$store.dispatch("tryLogin")},watch:{isAutoLogout(e,t){e&&e!==t&&this.$router.replace("/")}},methods:{clearError(){this.$store.dispatch("clearError")}}};i("5b85");const S=g()(P,[["render",a]]);var _=S,C=i("6605");const $={class:"home"},I=Object(c["g"])("p",null,"Have an account already?",-1);function L(e,t,i,o,a,s){const n=Object(c["C"])("logo-full"),l=Object(c["C"])("base-button"),r=Object(c["C"])("base-sub-button"),u=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["f"])("div",$,[Object(c["j"])(n),Object(c["j"])(l,{routerLink:"/signup"},{default:Object(c["K"])(()=>[Object(c["i"])("SignUp")]),_:1}),Object(c["g"])("div",null,[I,Object(c["j"])(u,{to:"/login"},{default:Object(c["K"])(()=>[Object(c["j"])(r,null,{default:Object(c["K"])(()=>[Object(c["i"])("Login")]),_:1})]),_:1})])])}const T=["type"];function B(e,t,i,o,a,s){const n=Object(c["C"])("router-link");return i.routerLink?(Object(c["u"])(),Object(c["d"])(n,{key:1,to:i.routerLink},{default:Object(c["K"])(()=>[Object(c["B"])(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])):(Object(c["u"])(),Object(c["f"])("button",{key:0,onClick:t[0]||(t[0]=(...e)=>s.handleClick&&s.handleClick(...e)),type:i.type},[Object(c["B"])(e.$slots,"default",{},void 0,!0)],8,T))}var A={props:{type:{type:String,default:"button"},routerLink:{type:String}},methods:{handleClick(){this.$emit("clickAction")}}};i("3bd9");const V=g()(A,[["render",B],["__scopeId","data-v-2e42b7e3"]]);var x=V;function E(e,t,i,o,a,s){return Object(c["u"])(),Object(c["f"])("button",{onClick:t[0]||(t[0]=(...e)=>i.click&&i.click(...e))},[Object(c["B"])(e.$slots,"default",{},void 0,!0)])}var K={props:{click:{type:Function},type:{type:String}}};i("9c29");const q=g()(K,[["render",E],["__scopeId","data-v-e6885b6c"]]);var M=q;const F=["src"];function G(e,t,i,o,a,s){return Object(c["u"])(),Object(c["f"])("div",null,[Object(c["g"])("img",{src:a.publicPath+"logo_full.png",alt:"Logo Full"},null,8,F)])}var U={data(){return{publicPath:"/"}}};i("591c");const N=g()(U,[["render",G],["__scopeId","data-v-6568036b"]]);var R=N,D={components:{BaseButton:x,LogoFull:R,BaseSubButton:M}};i("fc42");const H=g()(D,[["render",L]]);var z=H;const J=e=>(Object(c["x"])("data-v-ff8463ec"),e=e(),Object(c["v"])(),e),W={class:"signup"},X=J(()=>Object(c["g"])("h1",null,"Sign Up",-1)),Q={class:"mb-small"},Y=J(()=>Object(c["g"])("p",null,"Have an account already?",-1));function Z(e,t,i,o,a,s){const n=Object(c["C"])("logo-full"),l=Object(c["C"])("base-input"),r=Object(c["C"])("base-button"),u=Object(c["C"])("base-sub-button"),d=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["f"])("div",W,[Object(c["j"])(n),X,Object(c["g"])("form",{onSubmit:t[4]||(t[4]=Object(c["M"])((...e)=>s.submitLoginForm&&s.submitLoginForm(...e),["prevent"]))},[Object(c["j"])(l,{label:"Username",type:"text",modelValue:a.username,"onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),Object(c["j"])(l,{label:"Email",type:"email",modelValue:a.email,"onUpdate:modelValue":t[1]||(t[1]=e=>a.email=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),Object(c["j"])(l,{label:"Password",type:"password",modelValue:a.password,"onUpdate:modelValue":t[2]||(t[2]=e=>a.password=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),Object(c["j"])(l,{label:"Pin (4 Numbers)",type:"number",modelValue:a.pin,"onUpdate:modelValue":t[3]||(t[3]=e=>a.pin=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),Object(c["j"])(r,{type:"submit"},{default:Object(c["K"])(()=>[Object(c["i"])("SignUp")]),_:1}),Object(c["g"])("div",Q,[Y,Object(c["j"])(d,{to:"/login"},{default:Object(c["K"])(()=>[Object(c["j"])(u,null,{default:Object(c["K"])(()=>[Object(c["i"])("Login")]),_:1})]),_:1})])],32)])}const ee={class:"inputField"},te={key:0},ie=["type","value"];function ce(e,t,i,o,a,s){return Object(c["u"])(),Object(c["f"])("div",ee,[i.label?(Object(c["u"])(),Object(c["f"])("label",te,Object(c["G"])(i.label),1)):Object(c["e"])("",!0),Object(c["g"])("input",{type:i.type,value:i.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,ie)])}var oe={props:{type:{type:String,default:"text"},modelValue:{type:String,required:!0},label:{type:String,required:!0}}};i("8133");const ae=g()(oe,[["render",ce],["__scopeId","data-v-9acf178c"]]);var se=ae,ne={components:{BaseInput:se,BaseButton:x,LogoFull:R,BaseSubButton:M},data(){return{username:"",email:"",password:"",pin:""}},methods:{async submitLoginForm(){try{await this.$store.dispatch("signup",{username:this.username,email:this.email,password:this.password,pin:this.pin}),this.$router.replace("/profiles")}catch(e){await this.$store.dispatch("setError",{error:e})}}}};i("ef17");const le=g()(ne,[["render",Z],["__scopeId","data-v-ff8463ec"]]);var re=le;const ue=e=>(Object(c["x"])("data-v-bb91d962"),e=e(),Object(c["v"])(),e),de={class:"login"},be=ue(()=>Object(c["g"])("h1",null,"Login",-1)),me=ue(()=>Object(c["g"])("p",null,"Don't have an account yet?",-1));function pe(e,t,i,o,a,s){const n=Object(c["C"])("logo-full"),l=Object(c["C"])("base-input"),r=Object(c["C"])("base-button"),u=Object(c["C"])("base-sub-button"),d=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["f"])("div",de,[Object(c["j"])(n),be,Object(c["g"])("form",{onSubmit:t[2]||(t[2]=Object(c["M"])((...e)=>s.submitLoginForm&&s.submitLoginForm(...e),["prevent"]))},[Object(c["j"])(l,{label:"Username",type:"username",modelValue:a.username,"onUpdate:modelValue":t[0]||(t[0]=e=>a.username=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),Object(c["j"])(l,{label:"Password",type:"password",modelValue:a.password,"onUpdate:modelValue":t[1]||(t[1]=e=>a.password=e),modelModifiers:{trim:!0}},null,8,["modelValue"]),Object(c["j"])(r,{type:"submit"},{default:Object(c["K"])(()=>[Object(c["i"])("Login")]),_:1}),Object(c["g"])("div",null,[me,Object(c["j"])(d,{to:"/signup"},{default:Object(c["K"])(()=>[Object(c["j"])(u,null,{default:Object(c["K"])(()=>[Object(c["i"])("SignUp")]),_:1})]),_:1})])],32)])}var je={components:{BaseInput:se,BaseButton:x,LogoFull:R,BaseSubButton:M},data(){return{username:"",password:""}},methods:{async submitLoginForm(){try{await this.$store.dispatch("login",{username:this.username,password:this.password}),this.$router.replace("/profiles")}catch(e){await this.$store.dispatch("setError",{error:e})}}}};i("d0f7");const ge=g()(je,[["render",pe],["__scopeId","data-v-bb91d962"]]);var Oe=ge;const he={class:"Profiles"},fe=["onClick"],ve=["src","alt"];function ke(e,t,i,o,a,s){const n=Object(c["C"])("logo-full"),l=Object(c["C"])("base-pinpad");return Object(c["u"])(),Object(c["f"])("div",he,[Object(c["j"])(n),Object(c["L"])(Object(c["j"])(l,{modelValue:a.pin,"onUpdate:modelValue":t[0]||(t[0]=e=>a.pin=e),onClosePinpad:s.closePinpad},null,8,["modelValue","onClosePinpad"]),[[c["I"],a.showPinpad]]),Object(c["g"])("div",null,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(a.profiles,e=>(Object(c["u"])(),Object(c["f"])("button",{key:e.id,onClick:t=>s.selectProfiles(e.id,e.levels)},[Object(c["g"])("img",{src:a.publicPath+e.icon,alt:e.name},null,8,ve),Object(c["g"])("p",null,Object(c["G"])(e.name),1)],8,fe))),128))])])}i("14d9"),i("d9e2");var ye={apiDomain:"https://flashback.nategrift.com",host:"https://flashback.nategrift.com"},we=async(e,t,i,c)=>{const o=await fetch(ye.apiDomain+e,{method:t,headers:{"Content-Type":"application/json",authorization:"Bearer "+i},body:JSON.stringify(c)}),a=await o.json();if(!o.ok||!a.ok){const e=new Error(a.message||"Something went wrong!");throw e}return a};const Pe=e=>(Object(c["x"])("data-v-b17d94bc"),e=e(),Object(c["v"])(),e),Se={class:"container"},_e={class:"pinpad-container"},Ce={class:"display"},$e={class:"pinpad"},Ie={class:"column"},Le={class:"column"},Te={class:"column"},Be={class:"column"},Ae=Pe(()=>Object(c["g"])("div",{class:"background"},null,-1));function Ve(e,t,i,o,a,s){return Object(c["u"])(),Object(c["f"])("div",Se,[Object(c["g"])("div",_e,[Object(c["g"])("div",Ce,[Object(c["g"])("p",null,Object(c["G"])(i.modelValue.length>=1?"*":null),1),Object(c["g"])("p",null,Object(c["G"])(i.modelValue.length>=2?"*":null),1),Object(c["g"])("p",null,Object(c["G"])(i.modelValue.length>=3?"*":null),1),Object(c["g"])("p",null,Object(c["G"])(i.modelValue.length>=4?"*":null),1)]),Object(c["g"])("div",$e,[Object(c["g"])("div",Ie,[Object(c["g"])("button",{onClick:t[0]||(t[0]=e=>s.clickButton("1"))},"1"),Object(c["g"])("button",{onClick:t[1]||(t[1]=e=>s.clickButton("2"))},"2"),Object(c["g"])("button",{onClick:t[2]||(t[2]=e=>s.clickButton("3"))},"3")]),Object(c["g"])("div",Le,[Object(c["g"])("button",{onClick:t[3]||(t[3]=e=>s.clickButton("4"))},"4"),Object(c["g"])("button",{onClick:t[4]||(t[4]=e=>s.clickButton("5"))},"5"),Object(c["g"])("button",{onClick:t[5]||(t[5]=e=>s.clickButton("6"))},"6")]),Object(c["g"])("div",Te,[Object(c["g"])("button",{onClick:t[6]||(t[6]=e=>s.clickButton("7"))},"7"),Object(c["g"])("button",{onClick:t[7]||(t[7]=e=>s.clickButton("8"))},"8"),Object(c["g"])("button",{onClick:t[8]||(t[8]=e=>s.clickButton("9"))},"9")]),Object(c["g"])("div",Be,[Object(c["g"])("button",{onClick:t[9]||(t[9]=e=>s.clickButton("-"))},"-"),Object(c["g"])("button",{onClick:t[10]||(t[10]=e=>s.clickButton("0"))},"0"),Object(c["g"])("button",{onClick:t[11]||(t[11]=e=>s.clickButton("X"))},"X")])])]),Ae])}var xe={props:{modelValue:{required:!0,type:String}},methods:{clickButton(e){"-"==e?this.$emit("update:modelValue",this.modelValue.slice(0,-1)):"X"==e?this.$emit("closePinpad",!0):this.modelValue.length<=4&&this.$emit("update:modelValue",this.modelValue+e)}}};i("9eba");const Ee=g()(xe,[["render",Ve],["__scopeId","data-v-b17d94bc"]]);var Ke=Ee,qe={data(){return{profiles:null,publicPath:"/",pin:"",showPinpad:!1,accountAttempt:null}},components:{BasePinpad:Ke,LogoFull:R},mounted(){this.getProfiles()},methods:{closePinpad(){this.showPinpad=!1,this.pin=""},async getProfiles(){try{const e=await we("/api/user/profiles","GET",this.$store.getters.token);this.profiles=e.profiles}catch(e){await this.$store.dispatch("setError",{error:e})}},async selectProfiles(e,t){if(t>0&&!this.pin&&4!==this.pin.length)return this.showPinpad=!0,void(this.accountAttempt=e);let i;4==this.pin.length&&(i={pin:this.pin},this.pin="");try{await this.$store.dispatch("selectProfile",{profile_id:e,pin:i,token:this.$store.getters.token}),this.$store.dispatch("clearError"),this.$router.push("/media"),this.showPinpad=!1}catch(c){await this.$store.dispatch("setError",{error:c})}}},watch:{pin(e){e.length>=4&&this.selectProfiles(this.accountAttempt,1)}}};i("6e9c");const Me=g()(qe,[["render",ke],["__scopeId","data-v-613dd226"]]);var Fe=Me;const Ge=["src","alt"],Ue={class:"range-label",for:"range"},Ne=Object(c["h"])('<option type="checkbox" name="range" value="all" selected data-v-25623c05>All</option><option type="checkbox" name="range" value="1950" data-v-25623c05>1950s</option><option type="checkbox" name="range" value="1960" data-v-25623c05>1960s</option><option type="checkbox" name="range" value="1970" data-v-25623c05>1970s</option><option type="checkbox" name="range" value="1980" data-v-25623c05>1980s</option><option type="checkbox" name="range" value="1990" data-v-25623c05>1990s</option>',6),Re=[Ne],De={class:"mediaList"},He=["src","alt"],ze={class:"overlay"};function Je(e,t,i,o,a,s){const n=Object(c["C"])("base-sub-button"),l=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["f"])("div",{class:Object(c["q"])(["media",{kidsTheme:a.isKid}])},[Object(c["g"])("img",{src:a.publicPath+"titles/"+i.types+".png",alt:i.types,class:"image-title"},null,8,Ge),Object(c["L"])(Object(c["g"])("label",Ue,"Time Frame",512),[[c["I"],!a.isKid]]),Object(c["L"])(Object(c["g"])("select",{ref:"range",onChange:t[0]||(t[0]=e=>s.changeRange()),id:"range"},Re,544),[[c["I"],!a.isKid]]),Object(c["g"])("ul",De,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(a.allMedia,e=>(Object(c["u"])(),Object(c["f"])("li",{key:e.media_id},[Object(c["g"])("img",{src:`${a.publicPath}media/posters/${e.media_cover}`,alt:e.media_title},null,8,He),Object(c["g"])("div",ze,[Object(c["g"])("p",null,Object(c["G"])(e.media_title),1),Object(c["L"])(Object(c["g"])("p",null,Object(c["G"])(e.media_release),513),[[c["I"],!a.isKid]]),Object(c["L"])(Object(c["g"])("p",null,Object(c["G"])(e.media_runtime),513),[[c["I"],!a.isKid]]),Object(c["j"])(l,{to:{name:"watch",params:{mediaId:e.media_id}}},{default:Object(c["K"])(()=>[Object(c["j"])(n,null,{default:Object(c["K"])(()=>[Object(c["i"])("Play")]),_:1})]),_:2},1032,["to"]),Object(c["j"])(l,{to:{name:"MediaDetails",params:{mediaId:e.media_id}}},{default:Object(c["K"])(()=>[Object(c["j"])(n,null,{default:Object(c["K"])(()=>[Object(c["i"])("Details")]),_:1})]),_:2},1032,["to"])])]))),128))])],2)}var We={components:{baseSubButton:M},props:{types:{required:!0,type:String}},data(){return{publicPath:"/",allMedia:null,isKid:this.$store.getters.isKid}},mounted(){this.getMedia()},methods:{async getMedia(e,t){let i="/api/media?type="+this.types;e&t&&(i=`/api/media?type=${this.types}&rangemin=${e}&rangemax=${t}`);try{const e=await we(i,"GET",this.$store.getters.token);this.allMedia=e.media}catch(c){await this.$store.dispatch("setError",{error:c})}},changeRange(){const e=this.$refs.range,t=Array.from(e).find(e=>e.selected);"all"==t.value&&this.getMedia();const i=+t.value,c=i+10;this.getMedia(i,c)}}};i("7f40");const Xe=g()(We,[["render",Je],["__scopeId","data-v-25623c05"]]);var Qe=Xe;const Ye={key:0,class:"types"},Ze=["src","alt"];function et(e,t,i,o,a,s){const n=Object(c["C"])("logo-full"),l=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["f"])("div",{class:Object(c["q"])({kidsTheme:a.isKid})},[Object(c["j"])(n),a.types?(Object(c["u"])(),Object(c["f"])("div",Ye,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(a.types,e=>(Object(c["u"])(),Object(c["d"])(l,{key:e.id,to:"/media/"+e.value},{default:Object(c["K"])(()=>[Object(c["g"])("button",null,[Object(c["g"])("img",{src:a.publicPath+e.icon,alt:e.title},null,8,Ze),Object(c["g"])("p",null,Object(c["G"])(e.title),1)])]),_:2},1032,["to"]))),128))])):Object(c["e"])("",!0)],2)}var tt={components:{LogoFull:R},data(){return{publicPath:"/",types:null,isKid:this.$store.getters.isKid}},mounted(){this.getTypes()},methods:{async getTypes(){try{const e=await we("/api/media/types","GET",this.$store.getters.token);this.types=e.types}catch(e){await this.$store.dispatch("setError",{error:e})}}}};i("d02e");const it=g()(tt,[["render",et],["__scopeId","data-v-2f0001d0"]]);var ct=it;const ot={class:"transcript"},at=["src"],st={class:"tooltip",ref:"tooltip"},nt=["src"],lt=["controls","src"],rt=["src"],ut=["controls","src"],dt=["src","alt"],bt={class:"controls"},mt={class:"controls-top__left"},pt=["src"],jt={class:"controls-bottom"},gt={class:"controls-bottom__left"},Ot=["src"],ht=["src"],ft={class:"volumeControl"},vt={class:"controls-bottom__right"},kt={class:"speed-options"},yt=["onClick"],wt=["src"],Pt=["src"],St=["src"],_t=["src"];function Ct(e,t,i,o,a,s){const n=Object(c["D"])("playback-rate");return Object(c["u"])(),Object(c["f"])("div",{class:"video-player",ref:"fullPlayer",onMousemove:t[19]||(t[19]=(...e)=>s.setTimer&&s.setTimer(...e))},[Object(c["L"])(Object(c["g"])("div",ot,[Object(c["g"])("img",{onClick:t[0]||(t[0]=(...e)=>s.toggleTranscript&&s.toggleTranscript(...e)),src:e.publicPath+"times-circle-duotone.svg",alt:"Back"},null,8,at),Object(c["g"])("h2",null,Object(c["G"])(e.mediaName)+" Transcript:",1),Object(c["g"])("pre",null,Object(c["G"])(e.transcript),1)],512),[[c["I"],e.transcriptShow]]),Object(c["L"])(Object(c["g"])("div",st,[Object(c["g"])("p",null,Object(c["G"])(e.tooltip),1)],512),[[c["I"],e.tooltip]]),Object(c["L"])(Object(c["g"])("div",{class:Object(c["q"])(["playButton",{showPlayButton:!e.mediaPlaying}]),onClick:t[1]||(t[1]=(...e)=>s.togglePlaying&&s.togglePlaying(...e))},[Object(c["g"])("img",{src:e.publicPath+"play-circle-duotone.svg",alt:"Play"},null,8,nt)],2),[[c["I"],!e.smallScreen]]),e.mediaIsAudio?Object(c["L"])((Object(c["u"])(),Object(c["f"])("audio",{key:1,controls:e.smallScreen,onClick:t[4]||(t[4]=Object(c["M"])((...e)=>s.togglePlaying&&s.togglePlaying(...e),["self"])),src:e.url,ref:"videoPlayer",onTimeupdate:t[5]||(t[5]=(...e)=>s.setSlider&&s.setSlider(...e)),class:"audioControls"},null,40,ut)),[[n,e.speed]]):Object(c["L"])((Object(c["u"])(),Object(c["f"])("video",{key:0,controls:e.smallScreen,onClick:t[2]||(t[2]=Object(c["M"])((...e)=>s.togglePlaying&&s.togglePlaying(...e),["self"])),src:e.url,type:"video/mp4",ref:"videoPlayer",onTimeupdate:t[3]||(t[3]=(...e)=>s.setSlider&&s.setSlider(...e))},[e.captionsSrc?(Object(c["u"])(),Object(c["f"])("track",{key:0,src:`${e.publicPath}captions/${e.captionsSrc}`,label:"English",kind:"captions",srclang:"en-us",default:""},null,8,rt)):Object(c["e"])("",!0)],40,lt)),[[n,e.speed]]),e.mediaIsAudio?(Object(c["u"])(),Object(c["f"])("div",{key:2,class:Object(c["q"])(["audio-display",{audioPlaying:e.mediaPlaying}]),onClick:t[6]||(t[6]=(...e)=>s.togglePlaying&&s.togglePlaying(...e))},[Object(c["g"])("img",{src:e.posterURL,alt:e.mediaName},null,8,dt)],2)):Object(c["e"])("",!0),Object(c["g"])("div",bt,[Object(c["g"])("div",mt,[Object(c["g"])("button",{onClick:t[7]||(t[7]=(...e)=>s.backPage&&s.backPage(...e))},[Object(c["g"])("img",{src:e.publicPath+"arrow-left-solid.svg",alt:"Back"},null,8,pt)])]),Object(c["L"])(Object(c["g"])("input",{type:"range",min:"0",max:"1000",value:"0",class:"slider main-slider",ref:"timeSlider",onInput:t[8]||(t[8]=e=>s.changeTime(null))},null,544),[[c["I"],e.controlsShown&&!e.smallScreen]]),Object(c["L"])(Object(c["g"])("div",jt,[Object(c["g"])("div",gt,[Object(c["g"])("button",{onClick:t[9]||(t[9]=(...e)=>s.togglePlaying&&s.togglePlaying(...e)),title:"Toggle Playing Video (Space)"},[Object(c["g"])("img",{class:"img-button",ref:"playPause",src:e.publicPath+"play-solid.svg",alt:"Play/Pause"},null,8,Ot)]),Object(c["g"])("button",{onClick:t[10]||(t[10]=e=>s.changeTime(-10)),title:"Go backwards 10 seconds (Left Arrow)"}," -10s "),Object(c["g"])("button",{onClick:t[11]||(t[11]=e=>s.changeTime(10)),title:"Fast farward 10 seconds (Right Arrow)"}," +10s "),Object(c["g"])("button",{onClick:t[12]||(t[12]=(...e)=>s.toggleVolume&&s.toggleVolume(...e))},[Object(c["g"])("img",{class:"img-button",src:e.publicPath+"volume-solid.svg",alt:"Volume"},null,8,ht)]),Object(c["L"])(Object(c["g"])("div",ft,[Object(c["g"])("input",{type:"range",min:"0",max:"100",value:"50",class:"slider",ref:"volumeSlider",onInput:t[13]||(t[13]=(...e)=>s.setVolume&&s.setVolume(...e)),onChange:t[14]||(t[14]=(...e)=>s.setVolume&&s.setVolume(...e))},null,544)],512),[[c["I"],e.volumeShown]]),Object(c["g"])("p",null,Object(c["G"])(e.mediaName),1)]),Object(c["g"])("div",vt,[Object(c["L"])(Object(c["g"])("div",kt,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(e.availableSpeeds,e=>(Object(c["u"])(),Object(c["f"])("button",{key:e,onClick:t=>s.setSpeed(e),class:Object(c["q"])({active:s.isCurrentSpeed(e)})},Object(c["G"])(e)+"x",11,yt))),128))],512),[[c["I"],e.speedShown]]),Object(c["g"])("button",{onClick:t[15]||(t[15]=(...e)=>s.toggleSpeed&&s.toggleSpeed(...e))},[Object(c["g"])("img",{class:"img-button",src:e.publicPath+"speed-solid.svg",alt:"Speed"},null,8,wt)]),e.captionsSrc?(Object(c["u"])(),Object(c["f"])("button",{key:0,onClick:t[16]||(t[16]=(...e)=>s.toggleCaptions&&s.toggleCaptions(...e))},[Object(c["g"])("img",{ref:"captions",class:"img-button",src:e.publicPath+"closed-captioning-solid.svg",alt:"Captions"},null,8,Pt)])):Object(c["e"])("",!0),e.transcript?(Object(c["u"])(),Object(c["f"])("button",{key:1,onClick:t[17]||(t[17]=(...e)=>s.toggleTranscript&&s.toggleTranscript(...e))},[Object(c["g"])("img",{class:"img-button",src:e.publicPath+"file-alt-solid.svg",alt:"Transcript"},null,8,St)])):Object(c["e"])("",!0),Object(c["g"])("button",{onClick:t[18]||(t[18]=(...e)=>s.fullScreen&&s.fullScreen(...e))},[Object(c["g"])("img",{class:"img-button",src:e.publicPath+"fullscreen-solid.svg",alt:"Fullscreen"},null,8,_t)])])],512),[[c["I"],e.controlsShown&&!e.smallScreen]])])],544)}var $t={name:"mediaPlayer",data:function(){return{controlsShown:!0,volumeShown:!1,speedShown:!1,speed:1,availableSpeeds:[.5,1,1.5,2],url:"",posterURL:"",mediaName:"",mediaIsAudio:!1,publicPath:"/",timer:null,mediaPlaying:!1,windowWidth:window.innerWidth,smallScreen:!1,captionsSrc:!1,transcript:!1,transcriptShow:!1,tooltip:null}},watch:{windowWidth(e,t){this.smallScreen=t<=800}},props:{mediaId:{required:!0,type:String}},mounted(){this.fetchMovie(),window.addEventListener("resize",this.onResize),window.addEventListener("keyup",this.keypress),this.smallScreen=window.innerWidth<=800},beforeUnmount(){window.removeEventListener("resize",this.onResize),window.removeEventListener("keyup",this.keypress),clearTimeout(this.timer)},directives:{playbackRate(e,t){e.playbackRate=t.value}},methods:{onResize(){this.windowWidth=window.innerWidth},backPage(){this.$router.back()},setTimer(){this.controlsShown=!0,clearTimeout(this.timer),this.timer=setTimeout(()=>{this.controlsShown=!1},3e3)},async fetchMovie(){try{const e=await we("/api/media/"+this.mediaId,"GET",this.$store.getters.token);this.url=`${this.publicPath}media/content/${e.media.type}/${e.media.media_src}`,this.mediaName=e.media.media_title,this.mediaIsAudio="audio"==e.media.type,this.posterURL=`${this.publicPath}media/posters/${e.media.media_cover}`,e.media.media_transcript&&(this.transcript=e.media.media_transcript),e.media.media_captions&&(this.captionsSrc=e.media.media_captions),this.$refs.videoPlayer.load()}catch(e){await this.$store.dispatch("setError",{error:e}),this.$router.push("/media")}},togglePlaying(){const e=this.$refs.videoPlayer,t=this.$refs.playPause,i=this.$refs.volumeSlider;e.paused||e.ended?(e.volume=.5,e.play(),e.volume=i.value/100,t.src=this.publicPath+"pause-solid.svg",this.mediaPlaying=!0):(e.pause(),t.src=this.publicPath+"play-solid.svg",this.mediaPlaying=!1)},changeTime(e){const t=this.$refs.videoPlayer,i=this.$refs.timeSlider;e?t.currentTime+=e:t.currentTime=i.value/1e3*t.duration},setSlider(){const e=this.$refs.videoPlayer,t=this.$refs.timeSlider;t.value=e.currentTime/e.duration*1e3},fullScreen(){const e=this.$refs.fullPlayer;window.fullScreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen():e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},toggleVolume(){this.volumeShown=!this.volumeShown},setVolume(){const e=this.$refs.videoPlayer,t=this.$refs.volumeSlider;e.volume=t.value/100},toggleSpeed(){this.speedShown=!this.speedShown},isCurrentSpeed(e){return this.speed==e},setSpeed(e){const t=this.$refs.videoPlayer;t&&(this.speed=e)},keypress(e){switch(e.keyCode){case 32:this.togglePlaying();break;case 37:this.changeTime(-10);break;case 39:this.changeTime(10);break;case 38:this.$refs.volumeSlider.value=parseInt(this.$refs.volumeSlider.value)+10;break;case 40:this.$refs.volumeSlider.value=parseInt(this.$refs.volumeSlider.value)-10;break;default:break}},toggleCaptions(){const e=this.$refs.videoPlayer,t=this.$refs.captions;"hidden"==e.textTracks[0].mode?(e.textTracks[0].mode="showing",t.src=this.publicPath+"closed-captioning-solid.svg"):(e.textTracks[0].mode="hidden",t.src=this.publicPath+"closed-captioning-light.svg")},toggleTranscript(){this.transcriptShow=!this.transcriptShow}}};i("623c");const It=g()($t,[["render",Ct],["__scopeId","data-v-69364c2e"]]);var Lt=It;const Tt=e=>(Object(c["x"])("data-v-5692d823"),e=e(),Object(c["v"])(),e),Bt=Tt(()=>Object(c["g"])("h1",null,"Details",-1)),At={key:0,class:"details-page"},Vt=["src","alt"],xt={class:"details"},Et={class:"desc"},Kt={class:"info"},qt={class:"info"},Mt={class:"info"},Ft={class:"info"},Gt={class:"info"},Ut={class:"actions"},Nt={class:"social-list"},Rt=["href"],Dt=["src"],Ht=["href"],zt=["src"],Jt=["href"],Wt=["src"],Xt={class:"comments"},Qt={class:"comment-header"},Yt=Tt(()=>Object(c["g"])("h2",null,"Comments:",-1)),Zt={key:0,class:"comment-add"},ei={key:1},ti={key:2},ii=Tt(()=>Object(c["g"])("div",null,[Object(c["g"])("h2",null,"No comments for this media yet")],-1)),ci=[ii];function oi(e,t,i,o,a,s){const n=Object(c["C"])("base-sub-button"),l=Object(c["C"])("router-link"),r=Object(c["C"])("base-textarea");return Object(c["u"])(),Object(c["f"])("div",{class:Object(c["q"])({kidsTheme:a.isKid})},[Bt,Object(c["j"])(n,{class:"top-right",click:s.routerBack},{default:Object(c["K"])(()=>[Object(c["i"])("Back")]),_:1},8,["click"]),a.media?(Object(c["u"])(),Object(c["f"])("div",At,[Object(c["g"])("img",{src:`${a.publicPath}media/posters/${a.media.media_cover}`,alt:a.media.media_title},null,8,Vt),Object(c["g"])("div",xt,[Object(c["g"])("h2",null,Object(c["G"])(a.media.media_title),1),Object(c["g"])("p",Et,Object(c["G"])(a.media.media_desc),1),Object(c["g"])("p",Kt,[Object(c["i"])("Runtime: "),Object(c["g"])("strong",null,Object(c["G"])(a.media.media_runtime),1)]),Object(c["g"])("p",qt,[Object(c["i"])("Released: "),Object(c["g"])("strong",null,Object(c["G"])(a.media.media_release),1)]),Object(c["L"])(Object(c["g"])("p",Mt,[Object(c["i"])("Mature Content: "),Object(c["g"])("strong",null,Object(c["G"])(a.media.media_mature),1)],512),[[c["I"],!a.isKid]]),Object(c["g"])("p",Ft,[Object(c["i"])("Likes: "),Object(c["g"])("strong",null,Object(c["G"])(a.media.likes),1)]),Object(c["g"])("p",Gt,[Object(c["i"])("Media Type: "),Object(c["g"])("strong",null,Object(c["G"])(a.media.type),1)]),Object(c["g"])("div",Ut,[a.hasLiked?(Object(c["u"])(),Object(c["d"])(n,{key:0,onClick:t[0]||(t[0]=e=>s.likeMovie("DELETE"))},{default:Object(c["K"])(()=>[Object(c["i"])("Unlike")]),_:1})):(Object(c["u"])(),Object(c["d"])(n,{key:1,onClick:t[1]||(t[1]=e=>s.likeMovie("POST"))},{default:Object(c["K"])(()=>[Object(c["i"])("Like")]),_:1})),Object(c["j"])(l,{to:{name:"watch",params:{mediaId:a.media.media_id}}},{default:Object(c["K"])(()=>[Object(c["j"])(n,null,{default:Object(c["K"])(()=>[Object(c["i"])("Play")]),_:1})]),_:1},8,["to"])])]),Object(c["L"])(Object(c["g"])("div",Nt,[Object(c["g"])("a",{class:"share-button facebook-share",target:"_blank",href:`https://www.facebook.com/sharer/sharer.php?u=${a.hostName}${a.publicPath}media/details/${a.media.media_id}`},[Object(c["g"])("img",{src:a.publicPath+"facebook-logo.svg",alt:"Share via Facebook"},null,8,Dt),Object(c["i"])(" Share")],8,Rt),Object(c["g"])("a",{class:"share-button twitter-share",target:"_blank",href:`https://twitter.com/intent/tweet?url=${a.hostName}${a.publicPath}media/details/${a.media.media_id}`},[Object(c["g"])("img",{src:a.publicPath+"twitter-logo.svg",alt:"Share via Twitter"},null,8,zt),Object(c["i"])(" Tweet")],8,Ht),Object(c["g"])("a",{class:"share-button linkedin-share",target:"_blank",href:`https://www.linkedin.com/sharing/share-offsite/?url=${a.hostName}${a.publicPath}media/details/${a.media.media_id}`},[Object(c["g"])("img",{src:a.publicPath+"linkedin-logo.svg",alt:"Share via LinkedIn"},null,8,Wt),Object(c["i"])(" Share ")],8,Jt)],512),[[c["I"],!a.isKid]]),Object(c["L"])(Object(c["g"])("div",Xt,[Object(c["g"])("div",Qt,[Yt,Object(c["j"])(n,{click:s.addCommentHandler},{default:Object(c["K"])(()=>[Object(c["i"])(Object(c["G"])(s.commentButtonText),1)]),_:1},8,["click"])]),a.commentAddBoxShown?(Object(c["u"])(),Object(c["f"])("div",Zt,[Object(c["j"])(r,{label:"Add Comment",modelValue:a.commentCopy,"onUpdate:modelValue":t[2]||(t[2]=e=>a.commentCopy=e)},null,8,["modelValue"]),Object(c["j"])(n,{click:s.addComment},{default:Object(c["K"])(()=>[Object(c["i"])("Post")]),_:1},8,["click"])])):Object(c["e"])("",!0),s.noComments?(Object(c["u"])(),Object(c["f"])("div",ei,[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["A"])(a.media.comments,e=>(Object(c["u"])(),Object(c["f"])("div",{class:"comment",key:e.comment_id},[Object(c["g"])("p",null,Object(c["G"])(e.comment_username),1),Object(c["g"])("p",null,Object(c["G"])(e.comment_copy),1)]))),128))])):(Object(c["u"])(),Object(c["f"])("div",ti,ci))],512),[[c["I"],!a.isKid]])])):Object(c["e"])("",!0)],2)}const ai={class:"inputField"},si={key:0},ni=["value"],li=["src"];function ri(e,t,i,o,a,s){return Object(c["u"])(),Object(c["f"])("div",ai,[i.label?(Object(c["u"])(),Object(c["f"])("label",si,Object(c["G"])(i.label),1)):Object(c["e"])("",!0),Object(c["g"])("textarea",{value:i.modelValue,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,ni),Object(c["g"])("img",{class:Object(c["q"])(["clear-button",{showX:s.valueEmpty}]),onClick:t[1]||(t[1]=(...e)=>s.clearText&&s.clearText(...e)),src:a.publicPath+"times-circle-solid.svg",alt:"X"},null,10,li)])}var ui={props:{modelValue:{type:String,required:!0},label:{type:String}},data(){return{publicPath:"/"}},methods:{clearText(){this.$emit("update:modelValue","")}},computed:{valueEmpty(){return this.modelValue.length>0}}};i("4ea1");const di=g()(ui,[["render",ri],["__scopeId","data-v-453e7bd7"]]);var bi=di,mi={name:"MediaDetails",components:{BaseSubButton:M,BaseTextarea:bi},data(){return{media:null,publicPath:"/",hasLiked:!1,hostName:ye.host,commentAddBoxShown:!1,commentCopy:"",isKid:this.$store.getters.isKid}},props:{mediaId:{required:!0,type:String}},computed:{commentButtonText(){return this.commentAddBoxShown?"Hide":"Add Comment"},noComments(){return this.media.comments.length>0}},mounted(){this.getMovie()},methods:{routerBack(){this.$router.back()},async getMovie(){try{const e=await we("/api/media/"+this.mediaId,"GET",this.$store.getters.token);this.media=e.media,this.hasLiked=e.hasLiked}catch(e){await this.$store.dispatch("setError",{error:e}),this.$router.push("/media")}},async likeMovie(e){try{const t=await we(`/api/media/${this.mediaId}/like-media`,e,this.$store.getters.token);"POST"==e?this.media.likes++:this.media.likes--,this.hasLiked=t.hasLiked}catch(t){await this.$store.dispatch("setError",{error:t}),this.$router.push("/media")}},addCommentHandler(){this.commentAddBoxShown=!this.commentAddBoxShown},async addComment(){try{const e=await we(`/api/media/${this.mediaId}/comment`,"POST",this.$store.getters.token,{copy:this.commentCopy});this.media.comments=e.comments,this.commentAddBoxShown=!1,this.commentCopy=""}catch(e){await this.$store.dispatch("setError",{error:e}),this.commentAddBoxShown=!1}}}};i("8ab9");const pi=g()(mi,[["render",oi],["__scopeId","data-v-5692d823"]]);var ji=pi;const gi=Object(c["g"])("h2",null,"404 Page",-1),Oi=Object(c["g"])("p",null,"Page not found.",-1);function hi(e,t){const i=Object(c["C"])("router-link");return Object(c["u"])(),Object(c["f"])("div",null,[gi,Oi,Object(c["j"])(i,{to:"/"},{default:Object(c["K"])(()=>[Object(c["i"])("Home")]),_:1})])}const fi={},vi=g()(fi,[["render",hi]]);var ki=vi,yi=i("5502"),wi={setUser(e,t){e.token=t.token,e.userId=t.userId,e.profile=t.profile||null},setError(e,t){e.error=t.error},resetError(e){e.error=""},setAutoLogout(e){e.didAutoLogout=!0}},Pi={error(e){return e.error},token(e){return e.token},isAuthenticated(e){return!!e.token},hasProfileSelected(e){return!!e.profile},isAutoLogout(e){return e.didAutoLogout},profile(e){return e.profile},isKid(e){return!!e.profile&&e.profile.access<1}};let Si,_i;var Ci={async login(e,t){t.url="/api/auth/login",await e.dispatch("auth",t)},async signup(e,t){t.url="/api/auth/create-account",await e.dispatch("auth",t)},async selectProfile(e,t){const i=await we("/api/user/profiles/"+t.profile_id,"POST",t.token,t.pin),c={token:i.token,userId:i.userId,profile:i.profile};localStorage.setItem("token",c.token),localStorage.setItem("userId",c.userId),localStorage.setItem("profile",JSON.stringify(c.profile)),await e.commit("setUser",c)},async auth(e,t){let i=t.url;delete t.url;const c=await fetch(ye.apiDomain+i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),o=await c.json();if(!c.ok||!o.ok){const e=new Error(o.message||"Failed to authenticate");throw e}const a=1e3*+o.tokenExpiration,s=(new Date).getTime()+a;localStorage.setItem("token",o.token),localStorage.setItem("userId",o.userId),localStorage.setItem("tokenExpiration",s),Si=setTimeout((function(){e.dispatch("autoLogout")}),a),e.commit("setUser",{token:o.token,userId:o.userId}),e.commit("resetError")},setError(e,t){e.commit("setError",{error:t.error.message||t.error||"An error occured"}),_i=setTimeout(()=>{e.dispatch("clearError")},4e3)},clearError(e){clearTimeout(_i),e.commit("setError",{error:null})},logout(e){localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("profile"),localStorage.removeItem("tokenExpiration"),clearTimeout(Si),e.commit("setUser",{token:"",userId:"",profile:""}),e.commit("resetError")},async tryLogin(e){const t=localStorage.getItem("token"),i=localStorage.getItem("userId"),c=localStorage.getItem("tokenExpiration"),o=+c-(new Date).getTime();if(o<1e4)return;Si=setTimeout((function(){e.dispatch("autoLogout")}),o);const a=JSON.parse(localStorage.getItem("profile"));t&&i&&e.commit("setUser",{token:t,userId:i,profile:a})},autoLogout(e){e.dispatch("logout"),e.commit("setAutoLogout")}};const $i=Object(yi["a"])({state(){return{token:"",userId:"",profile:null,error:"",didAutoLogout:!1}},mutations:wi,getters:Pi,actions:Ci});var Ii=$i;const Li=[{path:"/",name:"Home",component:z,meta:{requiresNoAuth:!0}},{path:"/signup",name:"Sign Up",component:re,meta:{requiresNoAuth:!0}},{path:"/login",name:"Login",component:Oe,meta:{requiresNoAuth:!0}},{path:"/profiles",name:"Profiles",component:Fe,meta:{requiresAuth:!0}},{path:"/media",name:"Media",component:ct,meta:{requiresAuth:!0,requiresProfile:!0}},{path:"/media/watch/:mediaId",name:"watch",component:Lt,props:!0,meta:{requiresAuth:!0,requiresProfile:!0}},{path:"/media/details/:mediaId",name:"MediaDetails",component:ji,props:!0,meta:{requiresAuth:!0,requiresProfile:!0}},{path:"/media/:types",name:"browse",component:Qe,props:!0,meta:{requiresAuth:!0,requiresProfile:!0}},{path:"/:notFound(.*)",name:"404",component:ki}],Ti=Object(C["a"])({history:Object(C["b"])("/"),routes:Li});Ti.beforeEach((function(e,t,i){e.meta.requiresProfile&&!Ii.getters.hasProfileSelected?Ii.getters.isAuthenticated?i("/profiles"):i("/login"):e.meta.requiresAuth&&!Ii.getters.isAuthenticated?i("/login"):e.meta.requiresNoAuth&&Ii.getters.isAuthenticated?i("/profiles"):i()}));var Bi=Ti;const Ai=Object(c["c"])(_);Ai.use(Ii),Ai.use(Bi),Ai.mount("#app")},5866:function(e,t,i){},"591c":function(e,t,i){"use strict";i("067f")},"5b85":function(e,t,i){"use strict";i("2fc5")},"623c":function(e,t,i){"use strict";i("e76a")},"6e9c":function(e,t,i){"use strict";i("215d")},7345:function(e,t,i){},"77ba":function(e,t,i){},"7f40":function(e,t,i){"use strict";i("aa6b")},8133:function(e,t,i){"use strict";i("f9fe")},"8ab9":function(e,t,i){"use strict";i("d6af")},"9c29":function(e,t,i){"use strict";i("43f9")},"9eba":function(e,t,i){"use strict";i("9f02")},"9f02":function(e,t,i){},aa6b:function(e,t,i){},c142:function(e,t,i){},d02e:function(e,t,i){"use strict";i("7345")},d0f7:function(e,t,i){"use strict";i("fb16")},d6af:function(e,t,i){},e76a:function(e,t,i){},ef17:function(e,t,i){"use strict";i("77ba")},f294:function(e,t,i){"use strict";i("5866")},f9fe:function(e,t,i){},fb16:function(e,t,i){},fc42:function(e,t,i){"use strict";i("400c")}});
//# sourceMappingURL=app.60aa21dd.js.map