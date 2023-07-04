"use strict";(self.webpackChunkgutenmate_docs=self.webpackChunkgutenmate_docs||[]).push([[844],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>b});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var d=n.createContext({}),l=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),g=r,b=p["".concat(d,".").concat(g)]||p[g]||u[g]||a;return o?n.createElement(b,i(i({ref:t},c),{},{components:o})):n.createElement(b,i({ref:t},c))}));function b(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},1898:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:10},i="\ud83e\uddf1 WordPress Block Editor",s={unversionedId:"guzine/wordpress-editor/wordpress-editor",id:"guzine/wordpress-editor/wordpress-editor",title:"\ud83e\uddf1 WordPress Block Editor",description:"The Gutenberg editor is the next-generation WordPress post and page editor, replacing the Classic editor. Taking inspiration from popular web building services like Squarespace and Wix, the Gutenberg editor introduces a block-based interface that opens up new possibilities for page layout and organization. Blocks are intended to natively solve some of the problems that have made shortcodes, Advance Custom Fields templates, and page-building plugins necessary in WordPress.",source:"@site/docs/guzine/wordpress-editor/wordpress-editor.md",sourceDirName:"guzine/wordpress-editor",slug:"/guzine/wordpress-editor/",permalink:"/docs/docs/guzine/wordpress-editor/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guzine/wordpress-editor/wordpress-editor.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"guzineSidebar",previous:{title:"\ud83c\udf31 Getting Started",permalink:"/docs/docs/guzine/getting-started/"},next:{title:"\ud83d\udc0b Gutenmate Plugin",permalink:"/docs/docs/guzine/gutenmate/"}},d={},l=[{value:"Editing experience",id:"editing-experience",level:2},{value:"Blocks",id:"blocks",level:2},{value:"Creating posts and pages",id:"creating-posts-and-pages",level:2},{value:"Adding a block",id:"adding-a-block",level:2},{value:"Manipulating blocks",id:"manipulating-blocks",level:2},{value:"Further Reading",id:"further-reading",level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-wordpress-block-editor"},"\ud83e\uddf1 WordPress Block Editor"),(0,r.kt)("p",null,"The Gutenberg editor is the next-generation WordPress post and page editor, replacing the Classic editor. Taking inspiration from popular web building services like Squarespace and Wix, the Gutenberg editor introduces a block-based interface that opens up new possibilities for page layout and organization. Blocks are intended to natively solve some of the problems that have made shortcodes, Advance Custom Fields templates, and page-building plugins necessary in WordPress."),(0,r.kt)("h2",{id:"editing-experience"},"Editing experience"),(0,r.kt)("p",null,"With Gutenberg, the editing experience has been redesigned. As mentioned above, Gutenberg uses blocks. Blocks are different from standard HTML editors, and provide flexibility for both novices and experts. These new blocks allow for media rich pages without needing any previous coding knowledge."),(0,r.kt)("h2",{id:"blocks"},"Blocks"),(0,r.kt)("p",null,"Blocks allow for the creation of engaging content that can be inserted, rearranged, and styled with very little technical expertise. This means the use of custom codes can be avoided, and content creators can instead add blocks and focus on building out site content. There are dozens of blocks available for building out thoughtfully designed posts and pages. Several of the most commonly used blocks can be previewed in this schematic."),(0,r.kt)("h2",{id:"creating-posts-and-pages"},"Creating posts and pages"),(0,r.kt)("p",null,"Before using the Gutenberg editor it\u2019s necessary to create a post or a page. Posts and pages are where content lives on a WordPress site, and where blocks are used to create that content. To get started with creating a post or page, see the instructions below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Dashboard of your WordPress site, click either \u201cPosts\u201d or \u201cPages\u201d from the left-side menu."),(0,r.kt)("li",{parentName:"ol"},"On the next page, click \u201cAdd New\u201d near the top of the page.")),(0,r.kt)("p",null,"The post or page has now been created, but it is not yet published (made public). Before the post or page is published, content will need to be built out on the site. If the post or page will be worked on over an extended period of time, it can be saved as a draft before it is published."),(0,r.kt)("h2",{id:"adding-a-block"},"Adding a block"),(0,r.kt)("p",null,"After creating a post or a page, content can now be built out using blocks. First, the header will need to be populated, but then blocks can be added immediately to the main page area. See below for instructions on how to add a Paragraph block."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click the \u201cAdd a block button\u201d(+) found above or below the Header Area."),(0,r.kt)("li",{parentName:"ol"},"Click \u201cParagraph\u201d from the dropdown menu."),(0,r.kt)("li",{parentName:"ol"},"Populate the Paragraph block by typing your desired content in the block."),(0,r.kt)("li",{parentName:"ol"},"Hit Enter/Return on your keyboard, or click outside the block to create the Paragraph."),(0,r.kt)("li",{parentName:"ol"},"Click \u201cSave Draft\u201d to save your work.")),(0,r.kt)("p",null,"The post or page now contains content and can be published; however, if there is additional content that needs to be added to the post or page before publishing, continue to click \u201cSave Draft\u201d as the post or page is developed. Once the post or page has been completely built out, click \u201cPublish\u201d to make it public."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Blocks can also be added to a post or page by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," command. While working down the center of a page, instead of clicking the \u201cAdd a block button\u201d, simply type ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," to bring up a list of most frequently used blocks.")),(0,r.kt)("h2",{id:"manipulating-blocks"},"Manipulating blocks"),(0,r.kt)("p",null,"After blocks have been added to a post or page, they can be further manipulated as needed. Changes to a block are made by first clicking on the block itself. Then the block can be changed by editing the content itself, using the toolbar directly above the block, or by adjusting the settings found in the Block right-side panel. If there is a specific change that needs to be made, looking in these three areas will often provide what is needed."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wordpress.org/support/article/wordpress-editor/"},"Click here")," for more information about using Gutenberg Editor."))}u.isMDXComponent=!0}}]);