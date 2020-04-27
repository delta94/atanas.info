(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{345:function(t,a,s){"use strict";s.r(a);var e=s(33),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://github.com/scriptex/localga/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/release/scriptex/localga.svg",alt:"GitHub release"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/scriptex/localga/issues",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/issues/scriptex/localga.svg",alt:"GitHub issues"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/scriptex/localga/commits/master",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/last-commit/scriptex/localga.svg",alt:"GitHub last commit"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://travis-ci.org/scriptex/localga",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://travis-ci.org/scriptex/localga.svg?branch=master",alt:"Build Status"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/localga",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/dt/localga.svg",alt:"npm"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/localga",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/localga.svg",alt:"npm"}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/scriptex/localga/",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/localga/README.md",alt:"Analytics"}}),s("OutboundLink")],1)]),t._v(" "),s("h1",{attrs:{id:"local-ga"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#local-ga"}},[t._v("#")]),t._v(" Local GA")]),t._v(" "),s("p",[t._v("Save a local version of your Google Analytics script")]),t._v(" "),s("h2",{attrs:{id:"about"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#about"}},[t._v("#")]),t._v(" About")]),t._v(" "),s("p",[t._v("Google Page Speed Insights complains about the expiry date set for the Google Analytics (or Google Tag Manager) script.")]),t._v(" "),s("p",[t._v("One way to work around this issue is to self host this script.")]),t._v(" "),s("p",[t._v("This however is not so good idea because this way the script will no longer be updated/bug-fixed.")]),t._v(" "),s("p",[t._v("This is where "),s("code",[t._v("localga")]),t._v(" steps in.")]),t._v(" "),s("p",[s("code",[t._v("localga")]),t._v(" automates the task of updating the Google Analytics (or Google Tag Manager) script.")]),t._v(" "),s("p",[t._v("You can also use this package if you need (or want to) self host the analytics files because you offer offline experience for your users.\nThe actual analytics tracking should be done by you and is not part of this package.")]),t._v(" "),s("h2",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i localga --save-dev\n")])])]),s("p",[t._v("or")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" localga --dev\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("ol",[s("li",[t._v("As a package.json script:")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ga"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localga --id UA-XXXXXXXX-Y --folder ./your/js/folder"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("From command line (Install the module globally first):")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("localga --id UA-XXXXXXXX-Y --folder ./your/js/folder\n")])])]),s("p",[t._v("The "),s("code",[t._v("localga")]),t._v(" module will generate two new script files called "),s("code",[t._v("google-analytics-local.js")]),t._v(" and "),s("code",[t._v("analytics.js")]),t._v(" placed in the folder you provided.")]),t._v(" "),s("p",[t._v("If no "),s("code",[t._v("--folder")]),t._v(" is specified, the files will be placed in the root of your project.")]),t._v(" "),s("p",[t._v("After the files are generated, you should "),s("code",[t._v("require")]),t._v(" the "),s("code",[t._v("google-analytics-local.js")]),t._v(" file in your bundle (or include it in your HTML file(s)).")]),t._v(" "),s("p",[t._v("Then you should enable the analytics script. Something like the following:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataLayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataLayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gtag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tdataLayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gtag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gtag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'config'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UA-XXXXXXXX-Y'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("UA-XXXXXXXX-Y is your Google Analytics ID")])]),t._v(" "),s("h2",{attrs:{id:"license"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[t._v("#")]),t._v(" LICENSE")]),t._v(" "),s("p",[t._v("MIT")])])}),[],!1,null,null,null);a.default=r.exports}}]);