(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"9UDz":function(e,t,a){},Jz1z:function(e,t,a){"use strict";a("pJf4");var n=a("q1tI"),r=a.n(n),c=function(e){var t=e.name,a=e.count;return r.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," | ",a)};c.defaultProps={count:""},t.a=c},ZO1O:function(e,t,a){"use strict";a("pJf4"),a("HQhv");var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),l=a("Jz1z"),i=(a("9UDz"),function(e){var t,a,n=e.url,l=e.image,i=e.backgroundColor;return r.a.createElement(c.Link,{to:n,href:n},r.a.createElement("div",{className:"wrapper",style:(t=l,a=i,{backgroundColor:"#"+a,backgroundImage:" url("+t.publicURL+")"})}))}),o=function(e){var t=e.title,a=e.date,n=e.url,o=e.headerImage,m=e.headerBackgroundColor,s=e.description,p=e.categories,u=void 0===p?[]:p;return r.a.createElement("div",{className:"col-sm-12 pb-4"},r.a.createElement("div",{className:"custom-card"},o&&r.a.createElement(i,{url:n,image:o,backgroundColor:m}),r.a.createElement("div",{className:"data"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"stats"},r.a.createElement("span",{className:"date"},a.split("T")[0]),u.map((function(e){return r.a.createElement(l.a,{name:e.name,key:e.name})}))),r.a.createElement(c.Link,{to:n,href:n},r.a.createElement("h4",{className:"title"},t)),r.a.createElement("p",null,s),r.a.createElement(c.Link,{to:n,href:n},"More...")))))};o.defaultProps={headerImage:{},categories:[],date:"",headerBackgroundColor:""},i.defaultProps={backgroundColor:"",image:""},t.a=o},ccoC:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return o}));a("E5k/");var n=a("q1tI"),r=a.n(n),c=a("ZO1O"),l=a("wtQ5"),i=a("/d1K");t.default=function(e){var t=e.data,a=e.pageContext,n=t.allStrapiArticle.edges,o=a.tag;return console.log(n),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row",style:{margin:15}},r.a.createElement(i.a,null),r.a.createElement("div",{className:"col-xl-10 col-lg-7 col-md-12 col-xs-12 order-2"},r.a.createElement("div",{className:"col-12",style:{fontSize:20,margin:15}},n.length," Articles in ",o),n.map((function(e){var t=e.node;return r.a.createElement(c.a,Object.assign({},t,{key:t.id}))}))),r.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),r.a.createElement(l.a,{title:o,url:"/tag/"+o,siteTitleAlt:"HellCatVN's Blog",isPost:!1,description:o,image:"https://i.imgur.com/M795H8A.jpg"}))};var o="968444683"},wtQ5:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("TJpk"),l=a.n(c),i=a("KSab"),o=a.n(i),m=function(e){var t=e.url,a=e.title,n=e.description,c=e.image,i=(e.siteTitleAlt,e.isPost);return r.a.createElement(l.a,null,r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"image",content:c}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,n=e.siteTitleAlt,r=e.isPost,c=e.image,l=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:n||""},r?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:c}}]}:"",r?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:n||"",headline:a,image:{"@type":"ImageObject",url:c},description:l}:""]}(t))),r.a.createElement("meta",{property:"og:url",content:t}),i?r.a.createElement("meta",{property:"og:type",content:"article"}):r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:c}),r.a.createElement("meta",{property:"fb:app_id",content:o.a.siteFBAppID?o.a.siteFBAppID:""}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:o.a.twitter_username?o.a.twitter_username:""}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:c}))};m.defaultProps={title:o.a.title},t.a=m}}]);
//# sourceMappingURL=component---src-templates-tag-js-246d63f507fbb4187cce.js.map