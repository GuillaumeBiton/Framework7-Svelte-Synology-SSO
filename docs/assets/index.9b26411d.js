import{S as W,i as X,s as J,B as V,e as P,a as k,c,b as Pe,d as me,f as B,g as i,m as _,l as Re,t as p,h as m,j as a,k as g,n as j,T as de,o as O,P as Q,N as Z,p as Me,q as Ie,r as oe,L as $e,u as z,v as y,R as ee,w as ae,x as Ae,y as x,z as ce,A as be,C as Ee,D as je,E as Ye,F as De,G as He,H as Te,I as Ue,J as Ve,K as Ge,M as we,O as ze,Q as ke,V as ue,U as Ke,W as Qe,X as We,Y as Xe,Z as Je,_ as ve,$ as Se,a0 as qe,a1 as Ze,a2 as xe,a3 as he}from"./vendor.411fc46b.js";const ye=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const $ of document.querySelectorAll('link[rel="modulepreload"]'))t($);new MutationObserver($=>{for(const s of $)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n($){const s={};return $.integrity&&(s.integrity=$.integrity),$.referrerpolicy&&(s.referrerPolicy=$.referrerpolicy),$.crossorigin==="use-credentials"?s.credentials="include":$.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t($){if($.ep)return;$.ep=!0;const s=n($);fetch($.href,s)}};ye();function et(o){let e;return{c(){e=O("Synology SSO Sign In")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function tt(o){let e,n;return e=new j({props:{fill:!0,onClick:o[2],$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&64&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function st(o){let e,n,t,$;return t=new de({props:{checked:o[0],color:"blue"}}),{c(){e=P("span"),e.textContent="logged in",n=k(),c(t.$$.fragment)},m(s,l){i(s,e,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.checked=s[0]),t.$set(r)},i(s){$||(p(t.$$.fragment,s),$=!0)},o(s){m(t.$$.fragment,s),$=!1},d(s){s&&a(e),s&&a(n),g(t,s)}}}function nt(o){let e,n,t,$,s,l,r,u,f;return $=new V({props:{strong:!0,$$slots:{default:[tt]},$$scope:{ctx:o}}}),l=new V({props:{$$slots:{default:[st]},$$scope:{ctx:o}}}),{c(){e=P("script"),t=k(),c($.$$.fragment),s=k(),c(l.$$.fragment),Pe(e.src,n="https://brt2600-2.synology.me:64515/webman/sso/synoSSO-1.0.0.js")||me(e,"src",n),e.async=!0,e.defer=!0},m(b,d){B(document.head,e),i(b,t,d),_($,b,d),i(b,s,d),_(l,b,d),r=!0,u||(f=Re(e,"load",o[1]),u=!0)},p(b,[d]){const q={};d&64&&(q.$$scope={dirty:d,ctx:b}),$.$set(q);const F={};d&65&&(F.$$scope={dirty:d,ctx:b}),l.$set(F)},i(b){r||(p($.$$.fragment,b),p(l.$$.fragment,b),r=!0)},o(b){m($.$$.fragment,b),m(l.$$.fragment,b),r=!1},d(b){a(e),b&&a(t),g($,b),b&&a(s),g(l,b),u=!1,f()}}}function $t(o,e,n){let t,$;const s=()=>{SYNOSSO.init({oauthserver_url:"https://brt2600-2.synology.me:64515",app_id:"ba118b9cd43471c98cfaa0c2fca9a11e",redirect_uri:"https://3000-harlequin-yak-w6u5p860.ws-eu25.gitpod.io/index.html",callback:r})},l=()=>{SYNOSSO.login()},r=u=>{t=u.access_token,t&&n(0,$="checked")};return[$,s,l]}class rt extends W{constructor(e){super();X(this,e,$t,nt,J,{})}}function lt(o){let e;return{c(){e=O("Sign Out")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function ot(o){let e,n;return e=new j({props:{fill:!0,onClick:o[0],$$slots:{default:[lt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&2&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function ut(o){let e,n;return e=new V({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,[$]){const s={};$&2&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function ft(o){return[()=>{SYNOSSO.logout()}]}class at extends W{constructor(e){super();X(this,e,ft,ut,J,{})}}function it(o){let e;return{c(){e=O("F7S-Synology-SSO")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function pt(o){let e;return{c(){e=O("F7S-Synology-SSO")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function mt(o){let e,n,t,$;return e=new Me({props:{sliding:!0,$$slots:{default:[it]},$$scope:{ctx:o}}}),t=new Ie({props:{$$slots:{default:[pt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function ct(o){let e,n,t,$,s,l;return e=new Z({props:{large:!0,sliding:!1,$$slots:{default:[mt]},$$scope:{ctx:o}}}),t=new rt({}),s=new at({}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment)},m(r,u){_(e,r,u),i(r,n,u),_(t,r,u),i(r,$,u),_(s,r,u),l=!0},p(r,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:r}),e.$set(f)},i(r){l||(p(e.$$.fragment,r),p(t.$$.fragment,r),p(s.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),m(t.$$.fragment,r),m(s.$$.fragment,r),l=!1},d(r){g(e,r),r&&a(n),g(t,r),r&&a($),g(s,r)}}}function _t(o){let e,n;return e=new Q({props:{name:"home",$$slots:{default:[ct]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,[$]){const s={};$&1&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}class gt extends W{constructor(e){super();X(this,e,null,_t,J,{})}}function dt(o){let e;return{c(){e=O("About My App")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function bt(o){let e,n,t;return{c(){e=P("p"),e.textContent="Fugiat perspiciatis excepturi, soluta quod non ullam deleniti. Nobis sint nemo consequuntur, fugiat. Eius perferendis animi autem incidunt vel quod tenetur nostrum, voluptate omnis quasi quidem illum consequuntur, a, quisquam.",n=k(),t=P("p"),t.textContent="Laudantium neque magnam vitae nemo quam commodi, in cum dolore obcaecati laborum, excepturi harum, optio qui, consequuntur? Obcaecati dolor sequi nesciunt culpa quia perspiciatis, reiciendis ex debitis, ut tenetur alias."},m($,s){i($,e,s),i($,n,s),i($,t,s)},d($){$&&a(e),$&&a(n),$&&a(t)}}}function wt(o){let e,n,t,$,s;return{c(){e=P("p"),e.textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni molestiae laudantium dignissimos est nobis delectus nemo ea alias voluptatum architecto, amet similique, saepe iste consectetur in repellat ut minus quibusdam!",n=k(),t=P("p"),t.textContent="Molestias et distinctio porro nesciunt ratione similique, magni doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a recusandae, fugiat in ea voluptates fuga eius, velit corrupti reprehenderit dignissimos consequatur!",$=k(),s=P("p"),s.textContent="Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos doloremque ipsa ullam eligendi commodi deserunt doloribus inventore magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea molestiae ullam delectus!"},m(l,r){i(l,e,r),i(l,n,r),i(l,t,r),i(l,$,r),i(l,s,r)},d(l){l&&a(e),l&&a(n),l&&a(t),l&&a($),l&&a(s)}}}function kt(o){let e,n,t,$,s,l,r,u;return e=new Z({props:{title:"About",backLink:"Back"}}),t=new oe({props:{$$slots:{default:[dt]},$$scope:{ctx:o}}}),s=new V({props:{strong:!0,$$slots:{default:[bt]},$$scope:{ctx:o}}}),r=new V({props:{strong:!0,$$slots:{default:[wt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment),l=k(),c(r.$$.fragment)},m(f,b){_(e,f,b),i(f,n,b),_(t,f,b),i(f,$,b),_(s,f,b),i(f,l,b),_(r,f,b),u=!0},p(f,b){const d={};b&1&&(d.$$scope={dirty:b,ctx:f}),t.$set(d);const q={};b&1&&(q.$$scope={dirty:b,ctx:f}),s.$set(q);const F={};b&1&&(F.$$scope={dirty:b,ctx:f}),r.$set(F)},i(f){u||(p(e.$$.fragment,f),p(t.$$.fragment,f),p(s.$$.fragment,f),p(r.$$.fragment,f),u=!0)},o(f){m(e.$$.fragment,f),m(t.$$.fragment,f),m(s.$$.fragment,f),m(r.$$.fragment,f),u=!1},d(f){g(e,f),f&&a(n),g(t,f),f&&a($),g(s,f),f&&a(l),g(r,f)}}}function vt(o){let e,n;return e=new Q({props:{$$slots:{default:[kt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,[$]){const s={};$&1&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}class St extends W{constructor(e){super();X(this,e,null,vt,J,{})}}function qt(o){let e;return{c(){e=O("Form Example")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Lt(o){let e,n,t;return{c(){e=P("option"),e.textContent="Male",n=k(),t=P("option"),t.textContent="Female",e.__value="Male",e.value=e.__value,t.__value="Female",t.value=t.__value},m($,s){i($,e,s),i($,n,s),i($,t,s)},d($){$&&a(e),$&&a(n),$&&a(t)}}}function Ct(o){let e,n,t;return n=new de({}),{c(){e=P("span"),c(n.$$.fragment),me(e,"slot","after")},m($,s){i($,e,s),_(n,e,null),t=!0},i($){t||(p(n.$$.fragment,$),t=!0)},o($){m(n.$$.fragment,$),t=!1},d($){$&&a(e),g(n)}}}function Ot(o){let e,n,t;return n=new Ae({props:{value:50,min:0,max:100,step:1}}),{c(){e=P("span"),c(n.$$.fragment),me(e,"slot","input")},m($,s){i($,e,s),_(n,e,null),t=!0},p:ae,i($){t||(p(n.$$.fragment,$),t=!0)},o($){m(n.$$.fragment,$),t=!1},d($){$&&a(e),g(n)}}}function Ft(o){let e,n,t,$,s,l,r,u,f,b,d,q,F,A,I,E,v,C,S,L,Y,U;return e=new z({props:{label:"Name",type:"text",placeholder:"Your name"}}),t=new z({props:{label:"E-mail",type:"email",placeholder:"E-mail"}}),s=new z({props:{label:"URL",type:"url",placeholder:"URL"}}),r=new z({props:{label:"Password",type:"password",placeholder:"Password"}}),f=new z({props:{label:"Phone",type:"tel",placeholder:"Phone"}}),d=new z({props:{label:"Gender",type:"select",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),F=new z({props:{label:"Birth date",type:"date",placeholder:"Birth day",value:"2014-04-30"}}),I=new y({props:{title:"Toggle",$$slots:{after:[Ct]},$$scope:{ctx:o}}}),v=new z({props:{label:"Range",input:!1,$$slots:{input:[Ot]},$$scope:{ctx:o}}}),S=new z({props:{type:"textarea",label:"Textarea",placeholder:"Bio"}}),Y=new z({props:{type:"textarea",label:"Resizable",placeholder:"Bio",resizable:!0}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment),l=k(),c(r.$$.fragment),u=k(),c(f.$$.fragment),b=k(),c(d.$$.fragment),q=k(),c(F.$$.fragment),A=k(),c(I.$$.fragment),E=k(),c(v.$$.fragment),C=k(),c(S.$$.fragment),L=k(),c(Y.$$.fragment)},m(w,N){_(e,w,N),i(w,n,N),_(t,w,N),i(w,$,N),_(s,w,N),i(w,l,N),_(r,w,N),i(w,u,N),_(f,w,N),i(w,b,N),_(d,w,N),i(w,q,N),_(F,w,N),i(w,A,N),_(I,w,N),i(w,E,N),_(v,w,N),i(w,C,N),_(S,w,N),i(w,L,N),_(Y,w,N),U=!0},p(w,N){const D={};N&1&&(D.$$scope={dirty:N,ctx:w}),d.$set(D);const G={};N&1&&(G.$$scope={dirty:N,ctx:w}),I.$set(G);const h={};N&1&&(h.$$scope={dirty:N,ctx:w}),v.$set(h)},i(w){U||(p(e.$$.fragment,w),p(t.$$.fragment,w),p(s.$$.fragment,w),p(r.$$.fragment,w),p(f.$$.fragment,w),p(d.$$.fragment,w),p(F.$$.fragment,w),p(I.$$.fragment,w),p(v.$$.fragment,w),p(S.$$.fragment,w),p(Y.$$.fragment,w),U=!0)},o(w){m(e.$$.fragment,w),m(t.$$.fragment,w),m(s.$$.fragment,w),m(r.$$.fragment,w),m(f.$$.fragment,w),m(d.$$.fragment,w),m(F.$$.fragment,w),m(I.$$.fragment,w),m(v.$$.fragment,w),m(S.$$.fragment,w),m(Y.$$.fragment,w),U=!1},d(w){g(e,w),w&&a(n),g(t,w),w&&a($),g(s,w),w&&a(l),g(r,w),w&&a(u),g(f,w),w&&a(b),g(d,w),w&&a(q),g(F,w),w&&a(A),g(I,w),w&&a(E),g(v,w),w&&a(C),g(S,w),w&&a(L),g(Y,w)}}}function Bt(o){let e;return{c(){e=O("Buttons")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Nt(o){let e;return{c(){e=O("Button")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Pt(o){let e;return{c(){e=O("Fill")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Rt(o){let e,n,t,$;return e=new j({props:{class:"col",$$slots:{default:[Nt]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",fill:!0,$$slots:{default:[Pt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Mt(o){let e;return{c(){e=O("Raised")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function It(o){let e;return{c(){e=O("Raised Fill")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function At(o){let e,n,t,$;return e=new j({props:{class:"col",raised:!0,$$slots:{default:[Mt]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",raised:!0,fill:!0,$$slots:{default:[It]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Et(o){let e;return{c(){e=O("Round")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function jt(o){let e;return{c(){e=O("Round Fill")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Yt(o){let e,n,t,$;return e=new j({props:{class:"col",round:!0,$$slots:{default:[Et]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",round:!0,fill:!0,$$slots:{default:[jt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Dt(o){let e;return{c(){e=O("Outline")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Ht(o){let e;return{c(){e=O("Outline Round")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Tt(o){let e,n,t,$;return e=new j({props:{class:"col",outline:!0,$$slots:{default:[Dt]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",round:!0,outline:!0,$$slots:{default:[Ht]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Ut(o){let e;return{c(){e=O("Small")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Vt(o){let e;return{c(){e=O("Small Round")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Gt(o){let e,n,t,$;return e=new j({props:{class:"col",small:!0,outline:!0,$$slots:{default:[Ut]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",small:!0,round:!0,outline:!0,$$slots:{default:[Vt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function zt(o){let e;return{c(){e=O("Small")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Kt(o){let e;return{c(){e=O("Small Round")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Qt(o){let e,n,t,$;return e=new j({props:{class:"col",small:!0,fill:!0,$$slots:{default:[zt]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",small:!0,round:!0,fill:!0,$$slots:{default:[Kt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Wt(o){let e;return{c(){e=O("Large")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Xt(o){let e;return{c(){e=O("Large Fill")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Jt(o){let e,n,t,$;return e=new j({props:{class:"col",large:!0,raised:!0,$$slots:{default:[Wt]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",large:!0,fill:!0,raised:!0,$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Zt(o){let e;return{c(){e=O("Large Red")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function xt(o){let e;return{c(){e=O("Large Green")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function ht(o){let e,n,t,$;return e=new j({props:{class:"col",large:!0,fill:!0,raised:!0,color:"red",$$slots:{default:[Zt]},$$scope:{ctx:o}}}),t=new j({props:{class:"col",large:!0,fill:!0,raised:!0,color:"green",$$slots:{default:[xt]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&1&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function yt(o){let e,n,t,$,s,l,r,u,f,b,d,q,F,A,I,E;return e=new ee({props:{tag:"p",$$slots:{default:[Rt]},$$scope:{ctx:o}}}),t=new ee({props:{tag:"p",$$slots:{default:[At]},$$scope:{ctx:o}}}),s=new ee({props:{tag:"p",$$slots:{default:[Yt]},$$scope:{ctx:o}}}),r=new ee({props:{tag:"p",$$slots:{default:[Tt]},$$scope:{ctx:o}}}),f=new ee({props:{tag:"p",$$slots:{default:[Gt]},$$scope:{ctx:o}}}),d=new ee({props:{tag:"p",$$slots:{default:[Qt]},$$scope:{ctx:o}}}),F=new ee({props:{tag:"p",$$slots:{default:[Jt]},$$scope:{ctx:o}}}),I=new ee({props:{tag:"p",$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment),l=k(),c(r.$$.fragment),u=k(),c(f.$$.fragment),b=k(),c(d.$$.fragment),q=k(),c(F.$$.fragment),A=k(),c(I.$$.fragment)},m(v,C){_(e,v,C),i(v,n,C),_(t,v,C),i(v,$,C),_(s,v,C),i(v,l,C),_(r,v,C),i(v,u,C),_(f,v,C),i(v,b,C),_(d,v,C),i(v,q,C),_(F,v,C),i(v,A,C),_(I,v,C),E=!0},p(v,C){const S={};C&1&&(S.$$scope={dirty:C,ctx:v}),e.$set(S);const L={};C&1&&(L.$$scope={dirty:C,ctx:v}),t.$set(L);const Y={};C&1&&(Y.$$scope={dirty:C,ctx:v}),s.$set(Y);const U={};C&1&&(U.$$scope={dirty:C,ctx:v}),r.$set(U);const w={};C&1&&(w.$$scope={dirty:C,ctx:v}),f.$set(w);const N={};C&1&&(N.$$scope={dirty:C,ctx:v}),d.$set(N);const D={};C&1&&(D.$$scope={dirty:C,ctx:v}),F.$set(D);const G={};C&1&&(G.$$scope={dirty:C,ctx:v}),I.$set(G)},i(v){E||(p(e.$$.fragment,v),p(t.$$.fragment,v),p(s.$$.fragment,v),p(r.$$.fragment,v),p(f.$$.fragment,v),p(d.$$.fragment,v),p(F.$$.fragment,v),p(I.$$.fragment,v),E=!0)},o(v){m(e.$$.fragment,v),m(t.$$.fragment,v),m(s.$$.fragment,v),m(r.$$.fragment,v),m(f.$$.fragment,v),m(d.$$.fragment,v),m(F.$$.fragment,v),m(I.$$.fragment,v),E=!1},d(v){g(e,v),v&&a(n),g(t,v),v&&a($),g(s,v),v&&a(l),g(r,v),v&&a(u),g(f,v),v&&a(b),g(d,v),v&&a(q),g(F,v),v&&a(A),g(I,v)}}}function es(o){let e;return{c(){e=O("Checkbox group")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function ts(o){let e,n,t,$,s,l;return e=new y({props:{checkbox:!0,name:"my-checkbox",value:"Books",title:"Books"}}),t=new y({props:{checkbox:!0,name:"my-checkbox",value:"Movies",title:"Movies"}}),s=new y({props:{checkbox:!0,name:"my-checkbox",value:"Food",title:"Food"}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment)},m(r,u){_(e,r,u),i(r,n,u),_(t,r,u),i(r,$,u),_(s,r,u),l=!0},p:ae,i(r){l||(p(e.$$.fragment,r),p(t.$$.fragment,r),p(s.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),m(t.$$.fragment,r),m(s.$$.fragment,r),l=!1},d(r){g(e,r),r&&a(n),g(t,r),r&&a($),g(s,r)}}}function ss(o){let e;return{c(){e=O("Radio buttons group")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function ns(o){let e,n,t,$,s,l;return e=new y({props:{radio:!0,name:"radio",value:"Books",title:"Books"}}),t=new y({props:{radio:!0,name:"radio",value:"Movies",title:"Movies"}}),s=new y({props:{radio:!0,name:"radio",value:"Food",title:"Food"}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment)},m(r,u){_(e,r,u),i(r,n,u),_(t,r,u),i(r,$,u),_(s,r,u),l=!0},p:ae,i(r){l||(p(e.$$.fragment,r),p(t.$$.fragment,r),p(s.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),m(t.$$.fragment,r),m(s.$$.fragment,r),l=!1},d(r){g(e,r),r&&a(n),g(t,r),r&&a($),g(s,r)}}}function $s(o){let e,n,t,$,s,l,r,u,f,b,d,q,F,A,I,E,v,C;return e=new Z({props:{title:"Form",backLink:"Back"}}),t=new oe({props:{$$slots:{default:[qt]},$$scope:{ctx:o}}}),s=new $e({props:{noHairlinesMd:!0,$$slots:{default:[Ft]},$$scope:{ctx:o}}}),r=new oe({props:{$$slots:{default:[Bt]},$$scope:{ctx:o}}}),f=new V({props:{strong:!0,$$slots:{default:[yt]},$$scope:{ctx:o}}}),d=new oe({props:{$$slots:{default:[es]},$$scope:{ctx:o}}}),F=new $e({props:{$$slots:{default:[ts]},$$scope:{ctx:o}}}),I=new oe({props:{$$slots:{default:[ss]},$$scope:{ctx:o}}}),v=new $e({props:{$$slots:{default:[ns]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment),l=k(),c(r.$$.fragment),u=k(),c(f.$$.fragment),b=k(),c(d.$$.fragment),q=k(),c(F.$$.fragment),A=k(),c(I.$$.fragment),E=k(),c(v.$$.fragment)},m(S,L){_(e,S,L),i(S,n,L),_(t,S,L),i(S,$,L),_(s,S,L),i(S,l,L),_(r,S,L),i(S,u,L),_(f,S,L),i(S,b,L),_(d,S,L),i(S,q,L),_(F,S,L),i(S,A,L),_(I,S,L),i(S,E,L),_(v,S,L),C=!0},p(S,L){const Y={};L&1&&(Y.$$scope={dirty:L,ctx:S}),t.$set(Y);const U={};L&1&&(U.$$scope={dirty:L,ctx:S}),s.$set(U);const w={};L&1&&(w.$$scope={dirty:L,ctx:S}),r.$set(w);const N={};L&1&&(N.$$scope={dirty:L,ctx:S}),f.$set(N);const D={};L&1&&(D.$$scope={dirty:L,ctx:S}),d.$set(D);const G={};L&1&&(G.$$scope={dirty:L,ctx:S}),F.$set(G);const h={};L&1&&(h.$$scope={dirty:L,ctx:S}),I.$set(h);const te={};L&1&&(te.$$scope={dirty:L,ctx:S}),v.$set(te)},i(S){C||(p(e.$$.fragment,S),p(t.$$.fragment,S),p(s.$$.fragment,S),p(r.$$.fragment,S),p(f.$$.fragment,S),p(d.$$.fragment,S),p(F.$$.fragment,S),p(I.$$.fragment,S),p(v.$$.fragment,S),C=!0)},o(S){m(e.$$.fragment,S),m(t.$$.fragment,S),m(s.$$.fragment,S),m(r.$$.fragment,S),m(f.$$.fragment,S),m(d.$$.fragment,S),m(F.$$.fragment,S),m(I.$$.fragment,S),m(v.$$.fragment,S),C=!1},d(S){g(e,S),S&&a(n),g(t,S),S&&a($),g(s,S),S&&a(l),g(r,S),S&&a(u),g(f,S),S&&a(b),g(d,S),S&&a(q),g(F,S),S&&a(A),g(I,S),S&&a(E),g(v,S)}}}function rs(o){let e,n;return e=new Q({props:{name:"form",$$slots:{default:[$s]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,[$]){const s={};$&1&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}class ls extends W{constructor(e){super();X(this,e,null,rs,J,{})}}function Le(o,e,n){const t=o.slice();return t[3]=e[n],t}function Ce(o,e,n){const t=o.slice();return t[3]=e[n],t}function Oe(o){let e,n,t=o[3]+"",$,s,l,r=o[0].params[o[3]]+"",u;return{c(){e=P("li"),n=P("b"),$=O(t),s=O(":"),l=k(),u=O(r)},m(f,b){i(f,e,b),B(e,n),B(n,$),B(n,s),B(e,l),B(e,u)},p(f,b){b&1&&t!==(t=f[3]+"")&&x($,t),b&1&&r!==(r=f[0].params[f[3]]+"")&&x(u,r)},d(f){f&&a(e)}}}function Fe(o){let e,n,t=o[3]+"",$,s,l,r=o[0].query[o[3]]+"",u;return{c(){e=P("li"),n=P("b"),$=O(t),s=O(":"),l=k(),u=O(r)},m(f,b){i(f,e,b),B(e,n),B(n,$),B(n,s),B(e,l),B(e,u)},p(f,b){b&1&&t!==(t=f[3]+"")&&x($,t),b&1&&r!==(r=f[0].query[f[3]]+"")&&x(u,r)},d(f){f&&a(e)}}}function os(o){let e,n,t,$,s=o[0].url+"",l,r,u,f,b,d=o[0].path+"",q,F,A,I,E,v=o[0].hash+"",C,S,L,Y,U,w,N,D,G,h,te,_e,re,ie,ge,fe=o[0].route.path+"",pe,se=Object.keys(o[0].params),H=[];for(let M=0;M<se.length;M+=1)H[M]=Oe(Ce(o,se,M));let ne=Object.keys(o[0].query),T=[];for(let M=0;M<ne.length;M+=1)T[M]=Fe(Le(o,ne,M));return{c(){e=P("ul"),n=P("li"),t=P("b"),t.textContent="Url:",$=k(),l=O(s),r=k(),u=P("li"),f=P("b"),f.textContent="Path:",b=k(),q=O(d),F=k(),A=P("li"),I=P("b"),I.textContent="Hash:",E=k(),C=O(v),S=k(),L=P("li"),Y=P("b"),Y.textContent="Params:",U=k(),w=P("ul");for(let M=0;M<H.length;M+=1)H[M].c();N=k(),D=P("li"),G=P("b"),G.textContent="Query:",h=k(),te=P("ul");for(let M=0;M<T.length;M+=1)T[M].c();_e=k(),re=P("li"),ie=P("b"),ie.textContent="Route:",ge=k(),pe=O(fe)},m(M,K){i(M,e,K),B(e,n),B(n,t),B(n,$),B(n,l),B(e,r),B(e,u),B(u,f),B(u,b),B(u,q),B(e,F),B(e,A),B(A,I),B(A,E),B(A,C),B(e,S),B(e,L),B(L,Y),B(L,U),B(L,w);for(let R=0;R<H.length;R+=1)H[R].m(w,null);B(e,N),B(e,D),B(D,G),B(D,h),B(D,te);for(let R=0;R<T.length;R+=1)T[R].m(te,null);B(e,_e),B(e,re),B(re,ie),B(re,ge),B(re,pe)},p(M,K){if(K&1&&s!==(s=M[0].url+"")&&x(l,s),K&1&&d!==(d=M[0].path+"")&&x(q,d),K&1&&v!==(v=M[0].hash+"")&&x(C,v),K&1){se=Object.keys(M[0].params);let R;for(R=0;R<se.length;R+=1){const le=Ce(M,se,R);H[R]?H[R].p(le,K):(H[R]=Oe(le),H[R].c(),H[R].m(w,null))}for(;R<H.length;R+=1)H[R].d(1);H.length=se.length}if(K&1){ne=Object.keys(M[0].query);let R;for(R=0;R<ne.length;R+=1){const le=Le(M,ne,R);T[R]?T[R].p(le,K):(T[R]=Fe(le),T[R].c(),T[R].m(te,null))}for(;R<T.length;R+=1)T[R].d(1);T.length=ne.length}K&1&&fe!==(fe=M[0].route.path+"")&&x(pe,fe)},d(M){M&&a(e),ce(H,M),ce(T,M)}}}function us(o){let e;return{c(){e=O("Go back via Router API")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function fs(o){let e,n;return e=new be({props:{onClick:o[2],$$slots:{default:[us]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&2&&(s.onClick=t[2]),$&256&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function as(o){let e,n,t,$,s,l;return e=new Z({props:{title:"Dynamic Route",backLink:"Back"}}),t=new V({props:{strong:!0,$$slots:{default:[os]},$$scope:{ctx:o}}}),s=new V({props:{strong:!0,$$slots:{default:[fs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment)},m(r,u){_(e,r,u),i(r,n,u),_(t,r,u),i(r,$,u),_(s,r,u),l=!0},p(r,u){const f={};u&257&&(f.$$scope={dirty:u,ctx:r}),t.$set(f);const b={};u&258&&(b.$$scope={dirty:u,ctx:r}),s.$set(b)},i(r){l||(p(e.$$.fragment,r),p(t.$$.fragment,r),p(s.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),m(t.$$.fragment,r),m(s.$$.fragment,r),l=!1},d(r){g(e,r),r&&a(n),g(t,r),r&&a($),g(s,r)}}}function is(o){let e,n;return e=new Q({props:{$$slots:{default:[as]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,[$]){const s={};$&259&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function ps(o,e,n){let{f7route:t}=e,{f7router:$}=e;const s=()=>$.back();return o.$$set=l=>{"f7route"in l&&n(0,t=l.f7route),"f7router"in l&&n(1,$=l.f7router)},[t,$,s]}class ms extends W{constructor(e){super();X(this,e,ps,is,J,{f7route:0,f7router:1})}}function Be(o,e,n){const t=o.slice();return t[1]=e[n],t}function cs(o){let e=o[0].about+"",n;return{c(){n=O(e)},m(t,$){i(t,n,$)},p(t,$){$&1&&e!==(e=t[0].about+"")&&x(n,e)},d(t){t&&a(n)}}}function Ne(o){let e,n;return e=new y({props:{link:o[1].url,title:o[1].title,external:!0,target:"_blank"}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&1&&(s.link=t[1].url),$&1&&(s.title=t[1].title),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function _s(o){let e,n,t=o[0].links,$=[];for(let l=0;l<t.length;l+=1)$[l]=Ne(Be(o,t,l));const s=l=>m($[l],1,1,()=>{$[l]=null});return{c(){for(let l=0;l<$.length;l+=1)$[l].c();e=Ee()},m(l,r){for(let u=0;u<$.length;u+=1)$[u].m(l,r);i(l,e,r),n=!0},p(l,r){if(r&1){t=l[0].links;let u;for(u=0;u<t.length;u+=1){const f=Be(l,t,u);$[u]?($[u].p(f,r),p($[u],1)):($[u]=Ne(f),$[u].c(),p($[u],1),$[u].m(e.parentNode,e))}for(je(),u=t.length;u<$.length;u+=1)s(u);Ye()}},i(l){if(!n){for(let r=0;r<t.length;r+=1)p($[r]);n=!0}},o(l){$=$.filter(Boolean);for(let r=0;r<$.length;r+=1)m($[r]);n=!1},d(l){ce($,l),l&&a(e)}}}function gs(o){let e,n,t,$,s,l;return e=new Z({props:{title:`${o[0].firstName} ${o[0].lastName}`,backLink:"Back"}}),t=new V({props:{strong:!0,$$slots:{default:[cs]},$$scope:{ctx:o}}}),s=new $e({props:{$$slots:{default:[_s]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment)},m(r,u){_(e,r,u),i(r,n,u),_(t,r,u),i(r,$,u),_(s,r,u),l=!0},p(r,u){const f={};u&1&&(f.title=`${r[0].firstName} ${r[0].lastName}`),e.$set(f);const b={};u&17&&(b.$$scope={dirty:u,ctx:r}),t.$set(b);const d={};u&17&&(d.$$scope={dirty:u,ctx:r}),s.$set(d)},i(r){l||(p(e.$$.fragment,r),p(t.$$.fragment,r),p(s.$$.fragment,r),l=!0)},o(r){m(e.$$.fragment,r),m(t.$$.fragment,r),m(s.$$.fragment,r),l=!1},d(r){g(e,r),r&&a(n),g(t,r),r&&a($),g(s,r)}}}function ds(o){let e,n;return e=new Q({props:{$$slots:{default:[gs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,[$]){const s={};$&17&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function bs(o,e,n){let{user:t}=e;return o.$$set=$=>{"user"in $&&n(0,t=$.user)},[t]}class ws extends W{constructor(e){super();X(this,e,bs,ds,J,{user:0})}}function ks(o){let e,n,t;return{c(){e=P("p"),e.textContent="Sorry",n=k(),t=P("p"),t.textContent="Requested content not found."},m($,s){i($,e,s),i($,n,s),i($,t,s)},d($){$&&a(e),$&&a(n),$&&a(t)}}}function vs(o){let e,n,t,$;return e=new Z({props:{title:"Not found",backLink:"Back"}}),t=new V({props:{strong:!0,$$slots:{default:[ks]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&1&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Ss(o){let e,n;return e=new Q({props:{$$slots:{default:[vs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,[$]){const s={};$&1&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}class qs extends W{constructor(e){super();X(this,e,null,Ss,J,{})}}var Ls=[{path:"/",component:gt},{path:"/about/",component:St},{path:"/form/",component:ls},{path:"/dynamic-route/blog/:blogId/post/:postId/",component:ms},{path:"/request-and-load/user/:userId/",async:function({router:o,to:e,resolve:n}){var t=o.app;t.preloader.show(),e.params.userId,setTimeout(function(){var $={firstName:"Vladimir",lastName:"Kharlampidi",about:"Hello, i am creator of Framework7! Hope you like it!",links:[{title:"Framework7 Website",url:"http://framework7.io"},{title:"Framework7 Forum",url:"http://forum.framework7.io"}]};t.preloader.hide(),n({component:ws},{props:{user:$}})},1e3)}},{path:"(.*)",component:qs}];const Cs=De({state:{products:[{id:"1",title:"Apple iPhone 8",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis."},{id:"2",title:"Apple iPhone 8 Plus",description:"Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!"},{id:"3",title:"Apple iPhone X",description:"Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum."}]},getters:{products({state:o}){return o.products}},actions:{addProduct({state:o},e){o.products=[...o.products,e]}}});function Os(o){let e;return{c(){e=O("Left panel content goes here")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Fs(o){let e,n,t,$;return e=new Z({props:{title:"Left Panel"}}),t=new V({props:{$$slots:{default:[Os]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Bs(o){let e,n;return e=new Q({props:{$$slots:{default:[Fs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ns(o){let e,n;return e=new ue({props:{$$slots:{default:[Bs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ps(o){let e;return{c(){e=O("Right panel content goes here")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Rs(o){let e,n,t,$;return e=new Z({props:{title:"Right Panel"}}),t=new V({props:{$$slots:{default:[Ps]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:s}),t.$set(r)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Ms(o){let e,n;return e=new Q({props:{$$slots:{default:[Rs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Is(o){let e,n;return e=new ue({props:{$$slots:{default:[Ms]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function As(o){let e;return{c(){e=O("Close")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Es(o){let e,n;return e=new be({props:{popupClose:!0,$$slots:{default:[As]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function js(o){let e,n;return e=new Je({props:{$$slots:{default:[Es]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ys(o){let e;return{c(){e=P("p"),e.textContent="Popup content goes here."},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Ds(o){let e,n,t,$;return e=new Z({props:{title:"Popup",$$slots:{default:[js]},$$scope:{ctx:o}}}),t=new V({props:{$$slots:{default:[Ys]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment)},m(s,l){_(e,s,l),i(s,n,l),_(t,s,l),$=!0},p(s,l){const r={};l&128&&(r.$$scope={dirty:l,ctx:s}),e.$set(r);const u={};l&128&&(u.$$scope={dirty:l,ctx:s}),t.$set(u)},i(s){$||(p(e.$$.fragment,s),p(t.$$.fragment,s),$=!0)},o(s){m(e.$$.fragment,s),m(t.$$.fragment,s),$=!1},d(s){g(e,s),s&&a(n),g(t,s)}}}function Hs(o){let e,n;return e=new Q({props:{$$slots:{default:[Ds]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ts(o){let e,n;return e=new ue({props:{$$slots:{default:[Hs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&128&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Us(o){let e;return{c(){e=O("Login")},m(n,t){i(n,e,t)},d(n){n&&a(e)}}}function Vs(o){let e,n,t,$,s,l;function r(d){o[4](d)}let u={type:"text",name:"username",placeholder:"Your username"};o[0]!==void 0&&(u.value=o[0]),e=new z({props:u}),ve.push(()=>Se(e,"value",r));function f(d){o[5](d)}let b={type:"password",name:"password",placeholder:"Your password"};return o[1]!==void 0&&(b.value=o[1]),$=new z({props:b}),ve.push(()=>Se($,"value",f)),{c(){c(e.$$.fragment),t=k(),c($.$$.fragment)},m(d,q){_(e,d,q),i(d,t,q),_($,d,q),l=!0},p(d,q){const F={};!n&&q&1&&(n=!0,F.value=d[0],qe(()=>n=!1)),e.$set(F);const A={};!s&&q&2&&(s=!0,A.value=d[1],qe(()=>s=!1)),$.$set(A)},i(d){l||(p(e.$$.fragment,d),p($.$$.fragment,d),l=!0)},o(d){m(e.$$.fragment,d),m($.$$.fragment,d),l=!1},d(d){g(e,d),d&&a(t),g($,d)}}}function Gs(o){let e,n;return e=new Ze({props:{title:"Sign In",onClick:o[6]}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p:ae,i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function zs(o){let e,n,t;return{c(){e=O("Some text about login information."),n=P("br"),t=O('Click "Sign In" to close Login Screen')},m($,s){i($,e,s),i($,n,s),i($,t,s)},d($){$&&a(e),$&&a(n),$&&a(t)}}}function Ks(o){let e,n,t,$,s,l,r,u;return e=new We({props:{$$slots:{default:[Us]},$$scope:{ctx:o}}}),t=new $e({props:{form:!0,$$slots:{default:[Vs]},$$scope:{ctx:o}}}),s=new $e({props:{$$slots:{default:[Gs]},$$scope:{ctx:o}}}),r=new Xe({props:{$$slots:{default:[zs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment),l=k(),c(r.$$.fragment)},m(f,b){_(e,f,b),i(f,n,b),_(t,f,b),i(f,$,b),_(s,f,b),i(f,l,b),_(r,f,b),u=!0},p(f,b){const d={};b&128&&(d.$$scope={dirty:b,ctx:f}),e.$set(d);const q={};b&131&&(q.$$scope={dirty:b,ctx:f}),t.$set(q);const F={};b&128&&(F.$$scope={dirty:b,ctx:f}),s.$set(F);const A={};b&128&&(A.$$scope={dirty:b,ctx:f}),r.$set(A)},i(f){u||(p(e.$$.fragment,f),p(t.$$.fragment,f),p(s.$$.fragment,f),p(r.$$.fragment,f),u=!0)},o(f){m(e.$$.fragment,f),m(t.$$.fragment,f),m(s.$$.fragment,f),m(r.$$.fragment,f),u=!1},d(f){g(e,f),f&&a(n),g(t,f),f&&a($),g(s,f),f&&a(l),g(r,f)}}}function Qs(o){let e,n;return e=new Q({props:{loginScreen:!0,$$slots:{default:[Ks]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&131&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Ws(o){let e,n;return e=new ue({props:{$$slots:{default:[Qs]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment)},m(t,$){_(e,t,$),n=!0},p(t,$){const s={};$&131&&(s.$$scope={dirty:$,ctx:t}),e.$set(s)},i(t){n||(p(e.$$.fragment,t),n=!0)},o(t){m(e.$$.fragment,t),n=!1},d(t){g(e,t)}}}function Xs(o){let e,n,t,$,s,l,r,u,f,b;return e=new ke({props:{left:!0,cover:!0,themeDark:!0,$$slots:{default:[Ns]},$$scope:{ctx:o}}}),t=new ke({props:{right:!0,reveal:!0,themeDark:!0,$$slots:{default:[Is]},$$scope:{ctx:o}}}),s=new ue({props:{main:!0,class:"safe-areas",url:"/"}}),r=new Ke({props:{id:"my-popup",$$slots:{default:[Ts]},$$scope:{ctx:o}}}),f=new Qe({props:{id:"my-login-screen",$$slots:{default:[Ws]},$$scope:{ctx:o}}}),{c(){c(e.$$.fragment),n=k(),c(t.$$.fragment),$=k(),c(s.$$.fragment),l=k(),c(r.$$.fragment),u=k(),c(f.$$.fragment)},m(d,q){_(e,d,q),i(d,n,q),_(t,d,q),i(d,$,q),_(s,d,q),i(d,l,q),_(r,d,q),i(d,u,q),_(f,d,q),b=!0},p(d,q){const F={};q&128&&(F.$$scope={dirty:q,ctx:d}),e.$set(F);const A={};q&128&&(A.$$scope={dirty:q,ctx:d}),t.$set(A);const I={};q&128&&(I.$$scope={dirty:q,ctx:d}),r.$set(I);const E={};q&131&&(E.$$scope={dirty:q,ctx:d}),f.$set(E)},i(d){b||(p(e.$$.fragment,d),p(t.$$.fragment,d),p(s.$$.fragment,d),p(r.$$.fragment,d),p(f.$$.fragment,d),b=!0)},o(d){m(e.$$.fragment,d),m(t.$$.fragment,d),m(s.$$.fragment,d),m(r.$$.fragment,d),m(f.$$.fragment,d),b=!1},d(d){g(e,d),d&&a(n),g(t,d),d&&a($),g(s,d),d&&a(l),g(r,d),d&&a(u),g(f,d)}}}function Js(o){let e,n;const t=[o[2]];let $={$$slots:{default:[Xs]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)$=He($,t[s]);return e=new Te({props:$}),{c(){c(e.$$.fragment)},m(s,l){_(e,s,l),n=!0},p(s,[l]){const r=l&4?Ue(t,[Ve(s[2])]):{};l&131&&(r.$$scope={dirty:l,ctx:s}),e.$set(r)},i(s){n||(p(e.$$.fragment,s),n=!0)},o(s){m(e.$$.fragment,s),n=!1},d(s){g(e,s)}}}function Zs(o,e,n){let t={name:"F7S-Synology-SSO",theme:"auto",store:Cs,routes:Ls},$="",s="";function l(){we.dialog.alert("Username: "+$+"<br>Password: "+s,()=>{we.loginScreen.close()})}Ge(()=>{ze(()=>{})});function r(b){$=b,n(0,$)}function u(b){s=b,n(1,s)}return[$,s,t,l,r,u,()=>l()]}class xs extends W{constructor(e){super();X(this,e,Zs,Js,J,{})}}xe.use(he);new xs({target:document.getElementById("app")});
