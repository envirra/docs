"use strict";(self.webpackChunkgutenmate_docs=self.webpackChunkgutenmate_docs||[]).push([[3594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=p(n),d=o,c=g["".concat(s,".").concat(d)]||g[d]||m[d]||i;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r="Plugin Options",l={unversionedId:"guzine/gutenmate/plugin-options",id:"guzine/gutenmate/plugin-options",title:"Plugin Options",description:"The Gutenmate plugin has a dedicated setting page to allow user choose the way of gutenmate plugin works.",source:"@site/docs/guzine/gutenmate/plugin-options.md",sourceDirName:"guzine/gutenmate",slug:"/guzine/gutenmate/plugin-options",permalink:"/docs/themes/guzine/gutenmate/plugin-options",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"guzineSidebar",previous:{title:"Advanced Blocks",permalink:"/docs/themes/guzine/gutenmate/advanced-blocks"},next:{title:"Regular Blocks",permalink:"/docs/themes/guzine/gutenmate/regular-blocks"}},s={},p=[{value:"Setting page",id:"setting-page",level:2},{value:"Additional options",id:"additional-options",level:2},{value:"Author profile options",id:"author-profile-options",level:3},{value:"Post options",id:"post-options",level:3}],u={toc:p},g="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(g,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"plugin-options"},"Plugin Options"),(0,o.kt)("p",null,"The Gutenmate plugin has a dedicated setting page to allow user choose the way of gutenmate plugin works."),(0,o.kt)("h2",{id:"setting-page"},"Setting page"),(0,o.kt)("p",null,"The setting page can be accessed from admin menu ",(0,o.kt)("inlineCode",{parentName:"p"},"Admin > Gutenmate"),". You will see the page as the following."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8976).Z,width:"1454",height:"1144"})),(0,o.kt)("p",null,"Gutenmate allow you configure these options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Typography")," Configure a default font stacks while webfont is loading. If the theme is supports Gutenmate, You can override the typography settings (family and weight) from this section."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Image Sizes")," Configure an image sizes for using in your website. After made a change, Please regenerate by using ",(0,o.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/regenerate-thumbnails/"},"this plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Post Sharing")," Configure a site-wide options for Post Share block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Post Views")," Configure a site-wide options for Post Views block. The post view feature requires ",(0,o.kt)("a",{parentName:"li",href:"https://wordpress.org/plugins/wordpress-popular-posts/"},"this plugin")," to be working."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Post Format Icons")," Configure a site-wide options for Post format icons."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Advertisement")," Add an advertisement code for the pre-defined ad locations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"SEO Optimization")," Configure an essential SEO optimization. If you're using an advanced SEO plugin, Please disable all options in this sections."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Icon Sets")," Configure an icon set to be used. Turn on an icon pack to get more icons!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AMP")," Configure options for AMP pages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom Scripts")," Add any JS code into all pages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom Styles")," Add any CSS code into all pages."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Custom Codes")," Add any HTML code into the head tag of all pages.")),(0,o.kt)("p",null,"Click the button ",(0,o.kt)("strong",{parentName:"p"},"Save Changes")," after made a change."),(0,o.kt)("h2",{id:"additional-options"},"Additional options"),(0,o.kt)("p",null,"Gutenmate provides an additional option for creating great informative content."),(0,o.kt)("h3",{id:"author-profile-options"},"Author profile options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Users > All users")," and click the user you want to edit."),(0,o.kt)("li",{parentName:"ol"},"Or navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Users > Profile")," for editing the current user."),(0,o.kt)("li",{parentName:"ol"},"At user edit page, scroll down to the ",(0,o.kt)("strong",{parentName:"li"},"Additional options")," section."),(0,o.kt)("li",{parentName:"ol"},"An additional option for the current user is here.")),(0,o.kt)("h3",{id:"post-options"},"Post options"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Posts > All posts")," and click the post you want to edit."),(0,o.kt)("li",{parentName:"ol"},"At post edit page, Go to sidebar and click the ",(0,o.kt)("strong",{parentName:"li"},"Post")," tab."),(0,o.kt)("li",{parentName:"ol"},"Additional option are as follows:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Recipe summary")," This is a field set for creating a post about a food recipe. Enter information related to the field. To display these information in the content, Please use the ",(0,o.kt)("strong",{parentName:"li"},"Custom field")," block in the correspondent variation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Place summary")," This is a field set for creating a post about a hotel, restaurant, etc. Enter information related to the field. To display these information in the content, Please use the ",(0,o.kt)("strong",{parentName:"li"},"Custom field")," block in the correspondent variation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Event summary")," This is a field set for creating a post about a event, seminar, exhibition etc. Enter information related to the field. To display these information in the content, Please use the ",(0,o.kt)("strong",{parentName:"li"},"Custom field")," block in the correspondent variation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Alternative featured image")," The image selected in this option will be used in the ",(0,o.kt)("strong",{parentName:"li"},"Post featured image")," gutenmate block when the option ",(0,o.kt)("strong",{parentName:"li"},"Use alternative featured image if available")," of the block is enabled.")))))}m.isMDXComponent=!0},8976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/setting-page-250f42597938f10e1cab42a799522810.png"}}]);