!function r(i,s,o){function u(e,t){if(!s[e]){if(!i[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(a)return a(e,!0);throw(t=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",t}n=s[e]={exports:{}},i[e][0].call(n.exports,function(t){return u(i[e][1][t]||t)},n,n.exports,r,i,s,o)}return s[e].exports}for(var a="function"==typeof require&&require,t=0;t<o.length;t++)u(o[t]);return u}({1:[function(t,e,n){let r=t("regexgen").Trie;document.getElementById("parse").addEventListener("click",()=>{var t=new r,e=document.getElementById("input").value.split(/\n|\||\s/),e=(t.addAll(e),t.toString(),document.getElementById("output").textContent=`(?:${t})`,document.getElementById("output").textContent.split("\n").length),t=(document.getElementById("word").textContent="lines: "+e,document.getElementById("input").value.length),e=(document.getElementById("oldsize").textContent=`old size: ${t}kb`,document.getElementById("output").textContent.length),t=(document.getElementById("newsize").textContent=`new size: ${e}kb`,document.getElementById("output").textContent.split("?:").length-1);document.getElementById("group").textContent="non-capturing group: "+t})},{regexgen:5}],2:[function(t,e,n){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}e.exports=function(t){return null!=t&&(r(t)||"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))||!!t._isBuffer)}},{}],3:[function(t,n,e){!function(t){let e={},r=e.hasOwnProperty,L=(t,e)=>{for(var n in t)r.call(t,n)&&e(n,t[n])},B=e.toString,z=Array.isArray,O=t.isBuffer,q={'"':'\\"',"'":"\\'","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},F=/["'\\\b\f\n\r\t]/,I=/[0-9]/,U=/[ !#-&\(-\[\]-_a-~]/,R=(i,s)=>{var n,t=()=>{f=l,++s.indentLevel,l=s.indent.repeat(s.indentLevel)},e={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"\t",indentLevel:0,__inline1__:!1,__inline2__:!1},o=s&&s.json;o&&(e.quotes="double",e.wrap=!0),"single"!=(n=e,(e=s)&&L(e,(t,e)=>{n[t]=e}),(s=n).quotes)&&"double"!=s.quotes&&"backtick"!=s.quotes&&(s.quotes="single");let r="double"==s.quotes?'"':"backtick"==s.quotes?"`":"'",u=s.compact,a=s.lowercaseHex,l=s.indent.repeat(s.indentLevel),f="",c=s.__inline1__,h=s.__inline2__,p=u?"":"\n",g,d=!0,v,m,w,y,b,x="binary"==s.numbers,S="octal"==s.numbers,C="decimal"==s.numbers,_="hexadecimal"==s.numbers;if("string"!=typeof(b=i=o&&i&&"function"==typeof i.toJSON?i.toJSON():i)&&"[object String]"!=B.call(b)){if(y=i,"[object Map]"==B.call(y))return 0==i.size?"new Map()":(u||(s.__inline1__=!0,s.__inline2__=!1),"new Map("+R(Array.from(i),s)+")");if(w=i,"[object Set]"==B.call(w))return 0==i.size?"new Set()":"new Set("+R(Array.from(i),s)+")";if(O(i))return 0==i.length?"Buffer.from([])":"Buffer.from("+R(Array.from(i),s)+")";if(z(i)){g=[],s.wrap=!0,c&&(s.__inline1__=!1,s.__inline2__=!0),h||t();{let t=i,e,n=t.length,r=-1;for(;++r<n;)e=t[r],d=!1,h&&(s.__inline2__=!1),g.push((u||h?"":l)+R(e,s))}return d?"[]":h?"["+g.join(", ")+"]":"["+p+g.join(","+p)+p+(u?"":f)+"]"}if("number"!=typeof(m=i)&&"[object Number]"!=B.call(m))return v=i,"[object Object]"==B.call(v)?(g=[],s.wrap=!0,t(),L(i,(t,e)=>{d=!1,g.push((u?"":l)+R(t,s)+":"+(u?"":" ")+R(e,s))}),d?"{}":"{"+p+g.join(","+p)+p+(u?"":f)+"}"):o?JSON.stringify(i)||"null":String(i);if(o)return JSON.stringify(i);if(C)return String(i);if(_){let t=i.toString(16);return"0x"+(t=a?t:t.toUpperCase())}if(x)return"0b"+i.toString(2);if(S)return"0o"+i.toString(8)}let E=i,A=-1,j=E.length;for(g="";++A<j;){let t=E.charAt(A);if(s.es6){let n=E.charCodeAt(A);if(55296<=n&&n<=56319&&j>A+1){let e=E.charCodeAt(A+1);if(56320<=e&&e<=57343){let t=(1024*(n-55296)+e-56320+65536).toString(16);a||(t=t.toUpperCase()),g+="\\u{"+t+"}",++A;continue}}}if(!s.escapeEverything){if(U.test(t)){g+=t;continue}if('"'==t){g+=r==t?'\\"':t;continue}if("`"==t){g+=r==t?"\\`":t;continue}if("'"==t){g+=r==t?"\\'":t;continue}}if("\0"!=t||o||I.test(E.charAt(A+1)))if(F.test(t))g+=q[t];else{let r=t.charCodeAt(0);if(s.minimal&&8232!=r&&8233!=r)g+=t;else{let t=r.toString(16),e=2<(t=a?t:t.toUpperCase()).length||o,n="\\"+(e?"u":"x")+("0000"+t).slice(e?-4:-2);g+=n}}else g+="\\0"}return s.wrap&&(g=r+g+r),"`"==r&&(g=g.replace(/\$\{/g,"\\${")),s.isScriptContext?g.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,o?"\\u003C!--":"\\x3C!--"):g};R.version="2.5.2",n.exports=R}.call(this,{isBuffer:t("../is-buffer/index.js")})},{"../is-buffer/index.js":2}],4:[function(t,O,$){!function(t){var e=this;function m(t,e){for(var n=-1,r=t.length;++n<r;)e(t[n],n)}function n(t){return"[object Array]"==E.call(t)}function r(t){return"number"==typeof t||"[object Number]"==E.call(t)}function i(t,e){return(t=String(t)).length<e?("0000"+t).slice(-e):t}function s(t){return Number(t).toString(16).toUpperCase()}function u(t,e){for(var n,r,i=0,s=t.length;i<s;){if(n=t[i],r=t[i+1],n<=e&&e<r)return e==n?r==n+1?t.splice(i,2):t[i]=e+1:e==r-1?t[i+1]=e:t.splice(i,2,n,e,e+1,r),t;i+=2}return t}function a(t,e,n){if(n<e)throw Error(v);for(var r,i,s=0;s<t.length;){if(r=t[s],i=t[s+1]-1,n<r)return t;if(e<=r&&i<=n)t.splice(s,2);else{if(r<=e&&n<i)return e==r?(t[s]=n+1,t[s+1]=1+i):t.splice(s,2,r,e,n+1,1+i),t;if(r<=e&&e<=i)t[s+1]=e;else if(r<=n&&n<=i)return t[s]=n+1,t;s+=2}}return t}function w(t,e){for(var n,r,i=0,s=t.slice(),o=e.length;i<o;)s=(n=e[i])==(r=e[i+1]-1)?I(s,n):U(s,n,r),i+=2;return s}function g(t,e){var n=0,r=t.length,i=t[n],s=t[r-1];if(!(2<=r&&(e<i||s<e)))for(;n<r;){if(i=t[n],s=t[n+1],i<=e&&e<s)return!0;n+=2}return!1}function y(t){return!t.length}function o(t){for(var e,n,r=0,i=[],s=t.length;r<s;){for(e=t[r],n=t[r+1];e<n;)i.push(e),++e;r+=2}return i}function b(t){return t<=65535?c(t):"\\u{"+t.toString(16).toUpperCase()+"}"}function l(t){var e=t.length,n=t.charCodeAt(0);return 55296<=n&&n<=56319&&1<e?1024*(n-55296)+t.charCodeAt(1)-56320+65536:n}function x(t){var e,n,r="",i=0,s=t.length;if(R(t))return c(t[0]);for(;i<s;)r+=(e=t[i])==(n=t[i+1]-1)?c(e):e+1==n?c(e)+c(n):c(e)+"-"+c(n),i+=2;return"["+r+"]"}function f(t){return 1<arguments.length&&(t=A.call(arguments)),this instanceof f?(this.data=[],t?this.add(t):this):(new f).add(t)}function q(t){return parseInt(j((t-65536)/1024)+55296,10)}function F(t){return parseInt((t-65536)%1024+56320,10)}function I(t,e){var n,r,i=0,s=null,o=t.length;if(e<0||1114111<e)throw RangeError(S);for(;i<o;){if(n=t[i],r=t[i+1],n<=e&&e<r)return t;if(e==n-1)return t[i]=e,t;if(e<n)return t.splice(null!=s?s+2:0,0,e,e+1),t;if(e==r)return e+1==t[i+2]?t.splice(i,4,n,t[i+3]):t[i+1]=e+1,t;s=i,i+=2}return t.push(e,e+1),t}function U(t,e,n){if(n<e)throw Error(v);if(e<0||1114111<e||n<0||1114111<n)throw RangeError(S);for(var r,i,s=0,o=!1,u=t.length;s<u;){if(r=t[s],i=t[s+1],o){if(r==n+1)return t.splice(s-1,2),t;if(n<r)return t;e<=r&&r<=n&&(e<i&&i-1<=n?t.splice(s,2):t.splice(s-1,2),s-=2)}else{if(r==n+1)return t[s]=e,t;if(n<r)return t.splice(s,0,e,n+1),t;if(r<=e&&e<i&&n+1<=i)return t;r<=e&&e<i||i==e?(t[s+1]=n+1,o=!0):e<=r&&i<=n+1&&(t[s]=e,t[s+1]=n+1,o=!0)}s+=2}return o||t.push(e,n+1),t}function R(t){return 2==t.length&&t[0]+1==t[1]}function c(t){return 9==t?"\\t":10==t?"\\n":12==t?"\\f":13==t?"\\r":45==t?"\\x2D":92==t?"\\\\":36==t||40<=t&&t<=43||46==t||47==t||63==t||91<=t&&t<=94||123<=t&&t<=125?"\\"+L(t):32<=t&&t<=126?L(t):t<=255?"\\x"+i(s(t),2):"\\u"+i(s(t),4)}var h,p="object"==typeof $&&$,d="object"==typeof O&&O&&O.exports==p&&O,v=((t="object"==typeof t&&t).global!==t&&t.window!==t||(e=t),"A range’s `stop` value must be greater than or equal to the `start` value."),S="Invalid code point value. Code points range from U+000000 to U+10FFFF.",C=/\\x00([^0123456789]|$)/g,_=(t={}).hasOwnProperty,E=t.toString,A=[].slice,j=Math.floor,L=String.fromCharCode,B=(f.version="1.3.3",t=f.prototype),z={add:function(t){var e=this;return null!=t&&(t instanceof f?e.data=w(e.data,t.data):n(t=1<arguments.length?A.call(arguments):t)?m(t,function(t){e.add(t)}):e.data=I(e.data,r(t)?t:l(t))),e},remove:function(t){var e=this;return null!=t&&(t instanceof f?e.data=function(t,e){for(var n,r,i=0,s=t.slice(),o=e.length;i<o;)s=(n=e[i])==(r=e[i+1]-1)?u(s,n):a(s,n,r),i+=2;return s}(e.data,t.data):n(t=1<arguments.length?A.call(arguments):t)?m(t,function(t){e.remove(t)}):e.data=u(e.data,r(t)?t:l(t))),e},addRange:function(t,e){return this.data=U(this.data,r(t)?t:l(t),r(e)?e:l(e)),this},removeRange:function(t,e){return t=r(t)?t:l(t),e=r(e)?e:l(e),this.data=a(this.data,t,e),this},intersection:function(t){return t=t instanceof f?o(t.data):t,this.data=function(t,e){for(var n,r=0,i=e.length,s=[];r<i;)g(t,n=e[r])&&s.push(n),++r;for(var o,u=s,a=-1,l=u.length,f=l-1,c=[],h=!0,p=0;++a<l;)if(o=u[a],h)c.push(o),p=o,h=!1;else if(o==p+1){if(a!=f){p=o;continue}h=!0,c.push(o+1)}else c.push(p+1,o),p=o;return h||c.push(o+1),c}(this.data,t),this},contains:function(t){return g(this.data,r(t)?t:l(t))},clone:function(){var t=new f;return t.data=this.data.slice(0),t},toString:function(v){var t=function(t,e){var n,r,i,s,o,u,a,l;if(!v||!v.hasUnicodeFlag)return n=[],r=(a=function(t){for(var e,n,r=[],i=[],s=[],o=[],u=0,a=t.length;u<a;)e=t[u],n=t[u+1]-1,e<55296?(n<55296&&s.push(e,1+n),55296<=n&&n<=56319&&(s.push(e,55296),r.push(55296,1+n)),56320<=n&&n<=57343&&(s.push(e,55296),r.push(55296,56320),i.push(56320,1+n)),57343<n&&(s.push(e,55296),r.push(55296,56320),i.push(56320,57344),n<=65535?s.push(57344,1+n):(s.push(57344,65536),o.push(65536,1+n)))):55296<=e&&e<=56319?(55296<=n&&n<=56319&&r.push(e,1+n),56320<=n&&n<=57343&&(r.push(e,56320),i.push(56320,1+n)),57343<n&&(r.push(e,56320),i.push(56320,57344),n<=65535?s.push(57344,1+n):(s.push(57344,65536),o.push(65536,1+n)))):56320<=e&&e<=57343?(56320<=n&&n<=57343&&i.push(e,1+n),57343<n&&(i.push(e,57344),n<=65535?s.push(57344,1+n):(s.push(57344,65536),o.push(65536,1+n)))):57343<e&&e<=65535?n<=65535?s.push(e,1+n):(s.push(e,65536),o.push(65536,1+n)):o.push(e,1+n),u+=2;return{loneHighSurrogates:r,loneLowSurrogates:i,bmp:s,astral:o}}(t)).loneHighSurrogates,i=a.loneLowSurrogates,s=a.bmp,a=a.astral,o=!y(r),u=!y(i),a=function(t){if(!t.length)return[];for(var e=0,n=[],r=t.length;e<r;){var i=t[e],s=t[e+1]-1,o=q(i),i=F(i),u=q(s),a=57343==(s=F(s)),l=!1;o==u||56320==i&&a?(n.push([[o,u+1],[i,s+1]]),l=!0):n.push([[o,o+1],[i,57344]]),!l&&o+1<u&&(a?(n.push([[o+1,u+1],[56320,s+1]]),l=!0):n.push([[o+1,u],[56320,57344]])),l||n.push([[u,u+1],[56320,s+1]]),e+=2}for(var f,c,h,p,g,d,v=n,m=[],w=[],y=!1,b=-1,x=v.length;++b<x;)if(f=v[b],c=v[b+1]){for(h=f[0],p=f[1],g=c[0],d=c[1],w=p;g&&h[0]==g[0]&&h[1]==g[1];)w=R(d)?I(w,d[0]):U(w,d[0],d[1]-1),h=(f=v[++b])[0],p=f[1],g=(c=v[b+1])&&c[0],d=c&&c[1],y=!0;m.push([h,y?w:p]),y=!1}else m.push(f);var S=m;if(1!=S.length)for(var C=-1,_=-1;++C<S.length;)for(var E=S[C],A=E[1],j=A[0],L=A[1],_=C;++_<S.length;){var B=S[_],z=(O=B[1])[0],O=O[1];j==z&&L==O&&(R(B[0])?E[0]=I(E[0],B[0][0]):E[0]=U(E[0],B[0][0],B[0][1]-1),S.splice(_,1),--_)}return S}(a),e&&(s=w(s,r),o=!1,s=w(s,i),u=!1),y(s)||n.push(x(s)),a.length&&n.push((l=[],m(a,function(t){var e=t[0],t=t[1];l.push(x(e)+x(t))}),l.join("|"))),o&&n.push(x(r)+"(?![\\uDC00-\\uDFFF])"),u&&n.push("(?:[^\\uD800-\\uDBFF]|^)"+x(i)),n.join("|");var f,c,h=t,p="",g=0,d=h.length;if(R(h))return b(h[0]);for(;g<d;)p+=(f=h[g])==(c=h[g+1]-1)?b(f):f+1==c?b(f)+b(c):b(f)+"-"+b(c),g+=2;return"["+p+"]"}(this.data,!!v&&v.bmpOnly);return t?t.replace(C,"\\0$1"):"[]"},toRegExp:function(t){var e=this.toString(t&&-1!=t.indexOf("u")?{hasUnicodeFlag:!0}:null);return RegExp(e,t||"")},valueOf:function(){return o(this.data)}};for(h in z)_.call(z,h)&&(B[h]=z[h]);t.toArray=t.valueOf,"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return f}):p&&!p.nodeType?d?d.exports=f:p.regenerate=f:e.regenerate=f}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],5:[function(t,e,n){let r=t("./src/trie");function i(t,e){var n=new r;return n.addAll(t),n.toRegExp(e)}i.Trie=r,e.exports=i},{"./src/trie":12}],6:[function(t,e,n){let r=t("jsesc"),i=t("regenerate");function s(t,e,n){var r=n&&-1!==n.indexOf("u"),n=t.toString(n);return!(t.precedence<e.precedence)||t.isSingleCharacter||r&&t.isSingleCodepoint?n:"(?:"+n+")"}n.Alternation=class o{constructor(...t){this.precedence=1,this.options=this.flatten(t),this.options.sort((t,e)=>e.length-t.length)}flatten(t){return t.reduce((t,e)=>t.concat(e instanceof o?this.flatten(e.options):e),[])}get length(){return this.options[0].length}toString(e){return this.options.map(t=>s(t,this,e)).join("|")}},n.CharClass=class{constructor(t,e){this.precedence=1,this.set=i(t,e)}get length(){return 1}get isSingleCharacter(){return!this.set.toArray().some(t=>65535<t)}get isSingleCodepoint(){return!0}toString(t){return this.set.toString({hasUnicodeFlag:t&&-1!==t.indexOf("u")})}getCharClass(){return this.set}},n.Concatenation=class u{constructor(t,e){this.precedence=2,this.a=t,this.b=e}get length(){return this.a.length+this.b.length}toString(t){return s(this.a,this,t)+s(this.b,this,t)}getLiteral(t){return"start"===t&&this.a.getLiteral?this.a.getLiteral(t):"end"===t&&this.b.getLiteral?this.b.getLiteral(t):void 0}removeSubstring(t,e){let{a:n,b:r}=this;return"start"===t&&n.removeSubstring&&(n=n.removeSubstring(t,e)),"end"===t&&r.removeSubstring&&(r=r.removeSubstring(t,e)),n.isEmpty?r:r.isEmpty?n:new u(n,r)}},n.Repetition=class{constructor(t,e){this.precedence=3,this.expr=t,this.type=e}get length(){return this.expr.length}toString(t){return s(this.expr,this,t)+this.type}},n.Literal=class a{constructor(t){this.precedence=2,this.value=t}get isEmpty(){return!this.value}get isSingleCharacter(){return 1===this.length}get isSingleCodepoint(){return 1===Array.from(this.value).length}get length(){return this.value.length}toString(t){return r(this.value,{es6:t&&-1!==t.indexOf("u")}).replace(/[\t\n\f\r\$\(\)\*\+\-\.\?\[\]\^\|]/g,"\\$&").replace(/(\\u\{[a-z0-9]+\})|([\{\}])/gi,(t,e,n)=>e||"\\"+n)}getCharClass(){if(this.isSingleCodepoint)return this.value}getLiteral(){return this.value}removeSubstring(t,e){return"start"===t?new a(this.value.slice(e)):"end"===t?new a(this.value.slice(0,this.value.length-e)):void 0}}},{jsesc:3,regenerate:4}],7:[function(t,e,n){e.exports=class extends Map{constructor(t,e){"function"==typeof t&&(e=t,t=null),super(t),this.defaultGetter=e}get(t){var e;return super.has(t)?super.get(t):(e=this.defaultGetter(t),this.set(t,e),e)}}},{}],8:[function(t,e,n){let C=t("./map"),_=t("./set"),E=t("./state");e.exports=function(t){var e,n=new _(t.visit()),r=n.filter(t=>t.accepting),i=new C(t=>new C(t=>new _));for(e of n)for(var[s,o]of e.transitions)i.get(o).get(s).add(e);for(var u,a=new _([r,n.difference(r)]),l=new _(a);0<l.size;){var f,c,h=l.shift(),p=new C(t=>new _);for(f of h)for(var[g,d]of i.get(f))p.get(g).addAll(d);for(c of p.values())for(let e of a){var v,m,w=c.intersection(e);0!==w.size&&0!==(v=e.difference(c)).size&&(a.replace(e,w,v),(m=l.find(t=>t.equals(e)))?l.replace(m,w,v):w.size<=v.size?l.add(w):l.add(v))}}let y=new C(t=>new E),b=null;for(u of a){var x=u.first(),S=y.get(u);for(let[t,e]of x.transitions)S.transitions.set(t,y.get(a.find(t=>t.has(e))));S.accepting=x.accepting,u.has(t)&&(b=S)}return b}},{"./map":7,"./set":10,"./state":11}],9:[function(t,e,n){let{Alternation:u,CharClass:a,Concatenation:l,Repetition:f,Literal:c}=t("./ast");function h(t){return t?new f(t,"*"):null}function p(s,o){if(null==s||null==o||s===o)return s||o;{let t,e,n,r,i;return[s,o,t]=g(s,o,"start"),[s,o,e]=g(s,o,"end"),n=s.isEmpty||o.isEmpty?new f(s.isEmpty?o:s,"?"):s instanceof f&&"?"===s.type?new f(new u(s.expr,o),"?"):o instanceof f&&"?"===o.type?new f(new u(s,o.expr),"?"):(r=s.getCharClass&&s.getCharClass(),i=o.getCharClass&&o.getCharClass(),r&&i?new a(r,i):new u(s,o)),t&&(n=new l(new c(t),n)),n=e?new l(n,new c(e)):n}}function g(t,e,a){var l=t.getLiteral&&t.getLiteral(a),n=e.getLiteral&&e.getLiteral(a);return l&&n?(n=function(t,e){var n="start"===a?1:-1;t=Array.from(l),e=Array.from(e);let r=1==n?0:t.length-1,i=1==n?t.length:-1,s=1==n?0:e.length-1,o=1==n?e.length:-1,u="";for(;r!==i&&s!==o&&t[r]===e[s];r+=n,s+=n)1==n?u+=t[r]:u=t[r]+u;return u}(0,n))?[t=t.removeSubstring(a,n.length),e=e.removeSubstring(a,n.length),n]:[t,e,""]:[t,e,null]}function d(t,e){return null==t||null==e?null:t.isEmpty?e:e.isEmpty?t:t instanceof c&&e instanceof c?new c(t.value+e.value):t instanceof c&&e instanceof l&&e.a instanceof c?new l(new c(t.value+e.a.value),e.b):e instanceof c&&t instanceof l&&t.b instanceof c?new l(t.a,new c(t.b.value+e.value)):new l(t,e)}e.exports=function(t,e){var r=Array.from(t.visit()),i=[],s=[];for(let t=0;t<r.length;t++){var n,o,u=r[t];u.accepting&&(s[t]=new c("")),i[t]=[];for([n,o]of u.transitions){var a=r.indexOf(o);i[t][a]=i[t][a]?p(i[t][a],new c(n)):new c(n)}}for(let n=r.length-1;0<=n;n--){if(null!=i[n][n]){s[n]=d(h(i[n][n]),s[n]);for(let t=0;t<n;t++)i[n][t]=d(h(i[n][n]),i[n][t])}for(let e=0;e<n;e++)if(null!=i[e][n]){s[e]=p(s[e],d(i[e][n],s[n]));for(let t=0;t<n;t++)i[e][t]=p(i[e][t],d(i[e][n],i[n][t]))}}return s[0].toString(e)}},{"./ast":6}],10:[function(t,e,n){class r extends Set{filter(t){var e,n=new r;for(e of this)t(e)&&n.add(e);return n}difference(e){return this.filter(t=>!e.has(t))}intersection(e){return this.filter(t=>e.has(t))}equals(t){if(this.size!==t.size)return!1;for(var e of this)if(!t.has(e))return!1;return!0}find(t){for(var e of this)if(t(e))return e;return null}first(){return this.values().next().value}shift(){var t=this.first();return this.delete(t),t}replace(t,...e){this.delete(t)&&this.addAll(e)}addAll(t){for(var e of t)this.add(e)}}e.exports=r},{}],11:[function(t,e,n){let r=t("./map");e.exports=class i{constructor(){this.accepting=!1,this.transitions=new r(t=>new i)}*visit(t=new Set){if(!t.has(this)){t.add(this),yield this;for(var e of this.transitions.values())yield*e.visit(t)}}}},{"./map":7}],12:[function(t,e,n){let r=t("./state"),i=t("./minimize"),s=t("./regex");e.exports=class{constructor(){this.alphabet=new Set,this.root=new r}add(t){let e=this.root;for(var n of t)this.alphabet.add(n),e=e.transitions.get(n);e.accepting=!0}addAll(t){for(var e of t)this.add(e)}minimize(){return i(this.root)}toString(t){return s(this.minimize(),t)}toRegExp(t){return new RegExp(this.toString(t),t)}}},{"./minimize":8,"./regex":9,"./state":11}]},{},[1]);