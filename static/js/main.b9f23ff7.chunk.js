(this["webpackJsonpnwitter-clone"]=this["webpackJsonpnwitter-clone"]||[]).push([[0],{62:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(12),c=n.n(a),r=n(51),s=n.n(r),i=(n(62),n(14)),o=n(39),u=n(17),l=n(0),j=n.n(l),d=n(1),b=n(35),p=n(25),f=n(37);n(68),n(75),n(74);f.a.initializeApp({apiKey:"AIzaSyCzFdhX7fteYeMelBbdXwO2uhLXQhpFQgU",authDomain:"nwitter-clone-86c9f.firebaseapp.com",projectId:"nwitter-clone-86c9f",storageBucket:"nwitter-clone-86c9f.appspot.com",messagingSenderId:"68375128676",appId:"1:68375128676:web:beadefe3a0f77ec98f8d71"});var h=f.a,O=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),v=n(7),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),o=s[0],u=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),p=b[0],f=b[1],h=Object(a.useState)(""),m=Object(i.a)(h,2),x=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&u(a)},y=function(){var e=Object(d.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!0!==p){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,o);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,o);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),g(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:y,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w,className:"authInput"}),Object(v.jsx)("input",{type:"submit",value:p?"Create Account":"Log in",className:"authInput authSubmit"}),x&&Object(v.jsx)("span",{className:"authError",children:x})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign in":"Create Account"})]})},w=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(p.a,{icon:b.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue With Google",Object(v.jsx)(p.a,{icon:b.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue With Github",Object(v.jsx)(p.a,{icon:b.a})]})]})]})},y=n(52),N=n(36),k=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],o=r[1],u=Object(a.useState)(t.text),l=Object(i.a)(u,2),b=l[0],f=l[1],h=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return o((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("nweets/".concat(t.id)).update({text:b});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{value:b,onChange:function(e){var t=e.target.value;f(t)},required:!0,placeholder:"Edit your nweet",autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsx)("button",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(p.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:O,children:Object(v.jsx)(p.a,{icon:N.a})})]})]})})},S=n(76),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),u=Object(i.a)(o,2),l=u[0],b=u[1],f=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(""===l){e.next=13;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=7,c.putString(l,"data_url");case 7:return i=e.sent,e.next=10,i.ref.getDownloadURL();case 10:a=e.sent,e.next=14;break;case 13:""===l&&(a="");case 14:return e.next=16,m.collection("nweets").add({text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a});case 16:s(""),b("");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{value:r,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},type:"text",placeholder:"What 's on your mind?",maxLength:120,className:"factoryInput__input"}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(p.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;b(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return b("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(p.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return console.log(r),Object(a.useEffect)((function(){m.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));console.log(t),s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(k,{nweetObj:e,isOwner:t.uid===e.creatorId},e.id)}))})]})},A=function(e){var t=e.userObj,n=e.refreshUser,c=Object(a.useState)([]),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(u.f)(),b=Object(a.useState)(t.displayName),p=Object(i.a)(b,2),f=p[0],h=p[1],x=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===f){e.next=5;break}return e.next=4,t.updateProfile({displayName:f});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt","asc").get();case 2:n=e.sent,o(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:x,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;h(t)},type:"text",placeholder:"Display name",value:f,autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),l.push("/")},children:"Log Out"}),Object(v.jsx)("div",{children:s.map((function(e){return Object(v.jsx)(k,{nweetObj:e,isOwner:t.uid===e.creatorId},e.createdAt)}))})]})},F=n(55),B=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(o.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(p.a,{icon:b.c,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(p.a,{icon:F.a,color:"#04aaff",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 \ud504\ub85c\ud544"):"Profile"})]})})]})})},U=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(v.jsxs)(o.a,{children:[t&&Object(v.jsx)(B,{userObj:n}),Object(v.jsx)(u.c,{children:t?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(u.a,{exact:!0,path:"/",children:Object(v.jsx)(C,{userObj:n})}),Object(v.jsx)(u.a,{exact:!0,path:"/profile",children:Object(v.jsx)(A,{userObj:n,refreshUser:a})})]}):Object(v.jsx)(u.a,{exact:!0,path:"/",children:Object(v.jsx)(w,{})})})]})};var _=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){u(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(U,{isLoggedIn:Boolean(o),userObj:o,refreshUser:function(){var e=O.currentUser;u({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})}}):"Initializing..."})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.b9f23ff7.chunk.js.map