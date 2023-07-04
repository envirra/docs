"use strict";(self.webpackChunkgutenmate_docs=self.webpackChunkgutenmate_docs||[]).push([[93],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:90},r="\ud83e\udd9c Translation",l={unversionedId:"guzine/translation/translation",id:"guzine/translation/translation",title:"\ud83e\udd9c Translation",description:"Theme includes bunch of PO translation files for each languages so you can use standard translation tools to help translate theme output strings to your desired language.",source:"@site/docs/guzine/translation/translation.md",sourceDirName:"guzine/translation",slug:"/guzine/translation/",permalink:"/docs/guzine/translation/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/guzine/translation/translation.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90},sidebar:"guzineSidebar",previous:{title:"\ud83c\udf71 Customization",permalink:"/docs/guzine/customization/"},next:{title:"\ud83d\ude4b FAQ",permalink:"/docs/guzine/faq/"}},s={},p=[{value:"WordPress language setting",id:"wordpress-language-setting",level:2},{value:"Storing translation files",id:"storing-translation-files",level:2},{value:"Plugin translation files",id:"plugin-translation-files",level:3},{value:"Using Poedit application",id:"using-poedit-application",level:2},{value:"Rename/Change words",id:"renamechange-words",level:2},{value:"Using WPML with the theme",id:"using-wpml-with-the-theme",level:2},{value:"Important WPML components",id:"important-wpml-components",level:3},{value:"Need help for WPML",id:"need-help-for-wpml",level:3},{value:"RTL support",id:"rtl-support",level:2}],u={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-translation"},"\ud83e\udd9c Translation"),(0,i.kt)("p",null,"Theme includes bunch of PO translation files for each languages so you can use standard translation tools to help translate theme output strings to your desired language."),(0,i.kt)("h2",{id:"wordpress-language-setting"},"WordPress language setting"),(0,i.kt)("p",null,"For WordPress 5 or higher, please follow below steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to your WordPress Dashboard and navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Settings > General Settings")),(0,i.kt)("li",{parentName:"ol"},"Make sure ",(0,i.kt)("strong",{parentName:"li"},"Site Language")," option is set to your desired language.")),(0,i.kt)("h2",{id:"storing-translation-files"},"Storing translation files"),(0,i.kt)("p",null,"Theme use PO translation file which is industry standard translation method. In theme folder you will find a folder called languages. You will find each languages files store in the folder. By default storing inside theme folder. The theme language folder is ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-content/themes/{theme_name}/languages"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"*.POT")," \u2013 A template file for translation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"*.PO")," \u2013 A lists of all text strings in theme. The text strings are in English and you can add translation to each of text string."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"*.MO")," \u2013 This is the compiled .po file and is used by WordPress to translate the theme"),(0,i.kt)("p",null,"If your language isn\u2019t included in the theme language files. You have to create a new .PO file from original ",(0,i.kt)("inlineCode",{parentName:"p"},"{theme_name}.po")," located in theme\u2019s languages folder then save the new .PO file with your language code for example ",(0,i.kt)("inlineCode",{parentName:"p"},"de_DE.po")),(0,i.kt)("p",null,"This method has one downside. Because whenevery you update the theme. The whole language folder will be replaced with original version which overwrite your translation files. So the solution is to backup your translation file before updating theme."),(0,i.kt)("h3",{id:"plugin-translation-files"},"Plugin translation files"),(0,i.kt)("p",null,"Some words are stored in the Gutenmate plugin, not in the theme. The plugin can be translated in the same way that themes are. The plugin language folder is ",(0,i.kt)("inlineCode",{parentName:"p"},"wp-content/plugins/gutenmate/languages"),"."),(0,i.kt)("h2",{id:"using-poedit-application"},"Using Poedit application"),(0,i.kt)("p",null,"Poedit application is the popular application uses to edit .PO file translation and it\u2019s free. ",(0,i.kt)("a",{parentName:"p",href:"https://poedit.net"},"Click here to download Poedit application"),"."),(0,i.kt)("p",null,"Now download and install Poedit application. Open language file you want to translate for example ",(0,i.kt)("inlineCode",{parentName:"p"},"en_US.po")," You will find all English string in Source Text box. Select text string you want to translate, add your translation text to ",(0,i.kt)("strong",{parentName:"p"},"Translation")," field. Once you finish translating. Save the file and it will automatically compiled to ",(0,i.kt)("inlineCode",{parentName:"p"},".mo")," file."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open file ",(0,i.kt)("inlineCode",{parentName:"li"},"wp-content/themes/{theme_name}/languages/{theme_name}.pot")," using ",(0,i.kt)("a",{parentName:"li",href:"http://www.poedit.net/"},"POEdit")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create new translation")," button and choose the language."),(0,i.kt)("li",{parentName:"ol"},"Translate the text."),(0,i.kt)("li",{parentName:"ol"},"Hit save, a new .PO and .MO file will be created."),(0,i.kt)("li",{parentName:"ol"},"Dont't forget to backup the created .PO and .MO files.")),(0,i.kt)("h2",{id:"renamechange-words"},"Rename/Change words"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open file ",(0,i.kt)("inlineCode",{parentName:"li"},"wp-content/themes/{theme_name}/languages/{theme_name}.pot")," using ",(0,i.kt)("a",{parentName:"li",href:"http://www.poedit.net/"},"POEdit")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create new translation")," button and choose the ",(0,i.kt)("strong",{parentName:"li"},"English")," language."),(0,i.kt)("li",{parentName:"ol"},"Change the words you want."),(0,i.kt)("li",{parentName:"ol"},"Hit save, a new .PO and .MO file will be created."),(0,i.kt)("li",{parentName:"ol"},"Dont't forget to backup the created .PO and .MO files.")),(0,i.kt)("h2",{id:"using-wpml-with-the-theme"},"Using WPML with the theme"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://wpml.org/"},"WPML")," makes it easy to run a multilingual website with a single WordPress installation. It comes with over 40 languages. You can also add your own language variants (like Canadian French or Mexican Spanish) using WPML\u2019s languages editor. You can arrange different language contents in the same domain (in language directories), in sub-domains or in completely different domains."),(0,i.kt)("p",null,"You can find more information in ",(0,i.kt)("a",{parentName:"p",href:"http://wpml.org/documentation/getting-started-guide/"},"getting started guide on WPML website.")),(0,i.kt)("h3",{id:"important-wpml-components"},"Important WPML components"),(0,i.kt)("p",null,"You can enhance your site translation process using these add-on plugins (please note: all of following add-ons are part of WPML Multilingual CMS package):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Translation Management")," With this component you can bring more organization into translation process of your site. You can view all types of content with translation status info in one place. Also you can manage people in your team or use translation service right from the translation dashboard. More information here: ",(0,i.kt)("a",{parentName:"p",href:"https://wpml.org/documentation/translating-your-contents/using-the-translation-editor/"},"usage guide")," and ",(0,i.kt)("a",{parentName:"p",href:"https://wpml.org/documentation/translating-your-contents/using-the-translation-editor/translation-management-features/"},"feature overview"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"String Translation")," This component helps you to translate anything that doesn\u2019t fall inside posts, pages or taxonomy. This includes the site\u2019s tagline, general texts in Admin screens, widget titles and many other texts. More information here: ",(0,i.kt)("a",{parentName:"p",href:"https://wpml.org/documentation/getting-started-guide/string-translation/"},"module activation & first steps")," and ",(0,i.kt)("a",{parentName:"p",href:"https://wpml.org/documentation/getting-started-guide/translating-page-slugs/"},"slugs translation"),"."))),(0,i.kt)("h3",{id:"need-help-for-wpml"},"Need help for WPML"),(0,i.kt)("p",null,"If you need help with using WPML with TinySalt theme, please head over to ",(0,i.kt)("a",{parentName:"p",href:"https://wpml.org/forums/forum/english-support/"},"WPML technical forum"),". Before posting about issues, we recommend that you review this quick checklist:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you have the latest versions of the theme and of the WPML plugins, and that they are all activated. These include WPML Multilingual CMS, WPML String Translation and WPML Translation Management."),(0,i.kt)("li",{parentName:"ul"},"Check that the problem does not appear if the WPML plugins are deactivated, and it does appear when only the core WPML plugins are activated.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Please always remember to search and read ",(0,i.kt)("a",{parentName:"p",href:"https://wpml.org/documentation/"},"WPML official documentation")," for more details about how to use WPML.")),(0,i.kt)("h2",{id:"rtl-support"},"RTL support"),(0,i.kt)("p",null,"For languages that read from right-to-left unlike English which is left-to-right, The theme will automatically switch to an RTL style, as long as you it's in your language and uses the correct locale (as explained above)."))}g.isMDXComponent=!0}}]);