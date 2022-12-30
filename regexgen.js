!function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).regexgen=e()}(function(){return function r(i,s,o){function a(t,e){if(!s[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(u)return u(t,!0);throw(e=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",e}n=s[t]={exports:{}},i[t][0].call(n.exports,function(e){return a(i[t][1][e]||e)},n,n.exports,r,i,s,o)}return s[t].exports}for(var u="function"==typeof require&&require,e=0;e<o.length;e++)a(o[e]);return a}({1:[function(e,t,n){let r=e("./src/trie");function i(e,t){var n=new r;return n.addAll(e),n.toRegExp(t)}i.Trie=r,t.exports=i},{"./src/trie":10}],2:[function(e,n,t){!function(e){let t={},r=t.hasOwnProperty,j=(e,t)=>{for(var n in e)r.call(e,n)&&t(n,e[n])},E=t.toString,L=Array.isArray,O=e.isBuffer,q={'"':'\\"',"'":"\\'","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},z=/["'\\\b\f\n\r\t]/,F=/[0-9]/,U=/[ !#-&\(-\[\]-_a-~]/,R=(i,s)=>{var n,e=()=>{f=l,++s.indentLevel,l=s.indent.repeat(s.indentLevel)},t={escapeEverything:!1,minimal:!1,isScriptContext:!1,quotes:"single",wrap:!1,es6:!1,json:!1,compact:!0,lowercaseHex:!1,numbers:"decimal",indent:"\t",indentLevel:0,__inline1__:!1,__inline2__:!1},r=s&&s.json;r&&(t.quotes="double",t.wrap=!0),"single"!=(n=t,(t=s)&&j(t,(e,t)=>{n[e]=t}),(s=n).quotes)&&"double"!=s.quotes&&"backtick"!=s.quotes&&(s.quotes="single");let o="double"==s.quotes?'"':"backtick"==s.quotes?"`":"'",a=s.compact,u=s.lowercaseHex,l=s.indent.repeat(s.indentLevel),f="",c=s.__inline1__,h=s.__inline2__,p=a?"":"\n",g,d=!0;var v,t="binary"==s.numbers,w="octal"==s.numbers,m="decimal"==s.numbers,b="hexadecimal"==s.numbers;if("string"!=typeof(v=i=r&&i&&"function"==typeof i.toJSON?i.toJSON():i)&&"[object String]"!=E.call(v)){if(v=i,"[object Map]"==E.call(v))return 0==i.size?"new Map()":(a||(s.__inline1__=!0,s.__inline2__=!1),"new Map("+R(Array.from(i),s)+")");if(v=i,"[object Set]"==E.call(v))return 0==i.size?"new Set()":"new Set("+R(Array.from(i),s)+")";if(O(i))return 0==i.length?"Buffer.from([])":"Buffer.from("+R(Array.from(i),s)+")";if(L(i)){g=[],s.wrap=!0,c&&(s.__inline1__=!1,s.__inline2__=!0),h||e();{let e,t=i,n=t.length,r=-1;for(;++r<n;)e=t[r],d=!1,h&&(s.__inline2__=!1),g.push((a||h?"":l)+R(e,s))}return d?"[]":h?"["+g.join(", ")+"]":"["+p+g.join(","+p)+p+(a?"":f)+"]"}if("number"!=typeof(v=i)&&"[object Number]"!=E.call(v))return v=i,"[object Object]"==E.call(v)?(g=[],s.wrap=!0,e(),j(i,(e,t)=>{d=!1,g.push((a?"":l)+R(e,s)+":"+(a?"":" ")+R(t,s))}),d?"{}":"{"+p+g.join(","+p)+p+(a?"":f)+"}"):r?JSON.stringify(i)||"null":String(i);if(r)return JSON.stringify(i);if(m)return String(i);if(b){let e=i.toString(16);return"0x"+(e=u?e:e.toUpperCase())}if(t)return"0b"+i.toString(2);if(w)return"0o"+i.toString(8)}let y=i,S=-1,x=y.length;for(g="";++S<x;){var C=y.charAt(S);if(s.es6){var _=y.charCodeAt(S);if(55296<=_&&_<=56319&&x>S+1){var A=y.charCodeAt(S+1);if(56320<=A&&A<=57343){let e=(1024*(_-55296)+A-56320+65536).toString(16);u||(e=e.toUpperCase()),g+="\\u{"+e+"}",++S;continue}}}if(!s.escapeEverything){if(U.test(C)){g+=C;continue}if('"'==C){g+=o==C?'\\"':C;continue}if("`"==C){g+=o==C?"\\`":C;continue}if("'"==C){g+=o==C?"\\'":C;continue}}if("\0"!=C||r||F.test(y.charAt(S+1)))if(z.test(C))g+=q[C];else if(_=C.charCodeAt(0),s.minimal&&8232!=_&&8233!=_)g+=C;else{let e=_.toString(16),t=2<(e=u?e:e.toUpperCase()).length||r,n="\\"+(t?"u":"x")+("0000"+e).slice(t?-4:-2);g+=n}else g+="\\0"}return s.wrap&&(g=o+g+o),"`"==o&&(g=g.replace(/\$\{/g,"\\${")),s.isScriptContext?g.replace(/<\/(script|style)/gi,"<\\/$1").replace(/<!--/g,r?"\\u003C!--":"\\x3C!--"):g};R.version="2.5.2",n.exports=R}.call(this,{isBuffer:e("../../../../../node_modules/is-buffer/index.js")})},{"../../../../../node_modules/is-buffer/index.js":11}],3:[function(e,z,D){!function(e){var t=this;function d(e,t){for(var n=-1,r=e.length;++n<r;)t(e[n],n)}function n(e){return"[object Array]"==A.call(e)}function r(e){return"number"==typeof e||"[object Number]"==A.call(e)}function i(e,t){return(e=String(e)).length<t?("0000"+e).slice(-t):e}function s(e){return Number(e).toString(16).toUpperCase()}function a(e,t){for(var n,r,i=0,s=e.length;i<s;){if(n=e[i],r=e[i+1],n<=t&&t<r)return t==n?r==n+1?e.splice(i,2):e[i]=t+1:t==r-1?e[i+1]=t:e.splice(i,2,n,t,t+1,r),e;i+=2}return e}function u(e,t,n){if(n<t)throw Error(S);for(var r,i,s=0;s<e.length;){if(r=e[s],i=e[s+1]-1,n<r)return e;if(t<=r&&i<=n)e.splice(s,2);else{if(r<=t&&n<i)return t==r?(e[s]=n+1,e[s+1]=1+i):e.splice(s,2,r,t,n+1,1+i),e;if(r<=t&&t<=i)e[s+1]=t;else if(r<=n&&n<=i)return e[s]=n+1,e;s+=2}}return e}function v(e,t){for(var n,r,i=0,s=e.slice(),o=t.length;i<o;)s=(n=t[i])==(r=t[i+1]-1)?R(s,n):N(s,n,r),i+=2;return s}function g(e,t){var n=0,r=e.length,i=e[n],s=e[r-1];if(!(2<=r&&(t<i||s<t)))for(;n<r;){if(i=e[n],s=e[n+1],i<=t&&t<s)return!0;n+=2}return!1}function w(e){return!e.length}function o(e){for(var t,n,r=0,i=[],s=e.length;r<s;){for(t=e[r],n=e[r+1];t<n;)i.push(t),++t;r+=2}return i}function m(e){return e<=65535?c(e):"\\u{"+e.toString(16).toUpperCase()+"}"}function l(e){var t=e.length,n=e.charCodeAt(0);return 55296<=n&&n<=56319&&1<t?1024*(n-55296)+e.charCodeAt(1)-56320+65536:n}function b(e){var t,n,r="",i=0,s=e.length;if(B(e))return c(e[0]);for(;i<s;)r+=(t=e[i])==(n=e[i+1]-1)?c(t):t+1==n?c(t)+c(n):c(t)+"-"+c(n),i+=2;return"["+r+"]"}function f(e){return 1<arguments.length&&(e=j.call(arguments)),this instanceof f?(this.data=[],e?this.add(e):this):(new f).add(e)}function F(e){return parseInt(E((e-65536)/1024)+55296,10)}function U(e){return parseInt((e-65536)%1024+56320,10)}function R(e,t){var n,r,i=0,s=null,o=e.length;if(t<0||1114111<t)throw RangeError(x);for(;i<o;){if(n=e[i],r=e[i+1],n<=t&&t<r)return e;if(t==n-1)return e[i]=t,e;if(t<n)return e.splice(null!=s?s+2:0,0,t,t+1),e;if(t==r)return t+1==e[i+2]?e.splice(i,4,n,e[i+3]):e[i+1]=t+1,e;s=i,i+=2}return e.push(t,t+1),e}function N(e,t,n){if(n<t)throw Error(S);if(t<0||1114111<t||n<0||1114111<n)throw RangeError(x);for(var r,i,s=0,o=!1,a=e.length;s<a;){if(r=e[s],i=e[s+1],o){if(r==n+1)return e.splice(s-1,2),e;if(n<r)return e;t<=r&&r<=n&&(t<i&&i-1<=n?e.splice(s,2):e.splice(s-1,2),s-=2)}else{if(r==n+1)return e[s]=t,e;if(n<r)return e.splice(s,0,t,n+1),e;if(r<=t&&t<i&&n+1<=i)return e;r<=t&&t<i||i==t?(e[s+1]=n+1,o=!0):t<=r&&i<=n+1&&(e[s]=t,e[s+1]=n+1,o=!0)}s+=2}return o||e.push(t,n+1),e}function B(e){return 2==e.length&&e[0]+1==e[1]}function c(e){return 9==e?"\\t":10==e?"\\n":12==e?"\\f":13==e?"\\r":45==e?"\\x2D":92==e?"\\\\":36==e||40<=e&&e<=43||46==e||47==e||63==e||91<=e&&e<=94||123<=e&&e<=125?"\\"+L(e):32<=e&&e<=126?L(e):e<=255?"\\x"+i(s(e),2):"\\u"+i(s(e),4)}var h,p="object"==typeof D&&D,y="object"==typeof z&&z&&z.exports==p&&z,S=((e="object"==typeof e&&e).global!==e&&e.window!==e||(t=e),"A range’s `stop` value must be greater than or equal to the `start` value."),x="Invalid code point value. Code points range from U+000000 to U+10FFFF.",C=/\\x00([^0123456789]|$)/g,_=(e={}).hasOwnProperty,A=e.toString,j=[].slice,E=Math.floor,L=String.fromCharCode,O=(f.version="1.3.3",e=f.prototype),q={add:function(e){var t=this;return null!=e&&(e instanceof f?t.data=v(t.data,e.data):n(e=1<arguments.length?j.call(arguments):e)?d(e,function(e){t.add(e)}):t.data=R(t.data,r(e)?e:l(e))),t},remove:function(e){var t=this;return null!=e&&(e instanceof f?t.data=function(e,t){for(var n,r,i=0,s=e.slice(),o=t.length;i<o;)s=(n=t[i])==(r=t[i+1]-1)?a(s,n):u(s,n,r),i+=2;return s}(t.data,e.data):n(e=1<arguments.length?j.call(arguments):e)?d(e,function(e){t.remove(e)}):t.data=a(t.data,r(e)?e:l(e))),t},addRange:function(e,t){return this.data=N(this.data,r(e)?e:l(e),r(t)?t:l(t)),this},removeRange:function(e,t){return e=r(e)?e:l(e),t=r(t)?t:l(t),this.data=u(this.data,e,t),this},intersection:function(e){return e=e instanceof f?o(e.data):e,this.data=function(e,t){for(var n,r=0,i=t.length,s=[];r<i;)g(e,n=t[r])&&s.push(n),++r;for(var o,a=s,u=-1,l=a.length,f=l-1,c=[],h=!0,p=0;++u<l;)if(o=a[u],h)c.push(o),p=o,h=!1;else if(o==p+1){if(u!=f){p=o;continue}h=!0,c.push(o+1)}else c.push(p+1,o),p=o;return h||c.push(o+1),c}(this.data,e),this},contains:function(e){return g(this.data,r(e)?e:l(e))},clone:function(){var e=new f;return e.data=this.data.slice(0),e},toString:function(e){return(e=function(e,t,n){var r,i,s,o,a,u;if(n){var l,f,c=e,h="",p=0,g=c.length;if(B(c))return m(c[0]);for(;p<g;)h+=(l=c[p])==(f=c[p+1]-1)?m(l):l+1==f?m(l)+m(f):m(l)+"-"+m(f),p+=2;return"["+h+"]"}return n=[],r=(e=function(e){for(var t,n,r=[],i=[],s=[],o=[],a=0,u=e.length;a<u;)t=e[a],n=e[a+1]-1,t<55296?(n<55296&&s.push(t,1+n),55296<=n&&n<=56319&&(s.push(t,55296),r.push(55296,1+n)),56320<=n&&n<=57343&&(s.push(t,55296),r.push(55296,56320),i.push(56320,1+n)),57343<n&&(s.push(t,55296),r.push(55296,56320),i.push(56320,57344),n<=65535?s.push(57344,1+n):(s.push(57344,65536),o.push(65536,1+n)))):55296<=t&&t<=56319?(55296<=n&&n<=56319&&r.push(t,1+n),56320<=n&&n<=57343&&(r.push(t,56320),i.push(56320,1+n)),57343<n&&(r.push(t,56320),i.push(56320,57344),n<=65535?s.push(57344,1+n):(s.push(57344,65536),o.push(65536,1+n)))):56320<=t&&t<=57343?(56320<=n&&n<=57343&&i.push(t,1+n),57343<n&&(i.push(t,57344),n<=65535?s.push(57344,1+n):(s.push(57344,65536),o.push(65536,1+n)))):57343<t&&t<=65535?n<=65535?s.push(t,1+n):(s.push(t,65536),o.push(65536,1+n)):o.push(t,1+n),a+=2;return{loneHighSurrogates:r,loneLowSurrogates:i,bmp:s,astral:o}}(e)).loneHighSurrogates,i=e.loneLowSurrogates,s=e.bmp,e=e.astral,o=!w(r),a=!w(i),e=function(e){if(!e.length)return[];for(var t=0,n=[],r=e.length;t<r;){var i=e[t],s=e[t+1]-1,o=F(i),i=U(i),a=F(s),u=57343==(s=U(s)),l=!1;o==a||56320==i&&u?(n.push([[o,a+1],[i,s+1]]),l=!0):n.push([[o,o+1],[i,57344]]),!l&&o+1<a&&(u?(n.push([[o+1,a+1],[56320,s+1]]),l=!0):n.push([[o+1,a],[56320,57344]])),l||n.push([[a,a+1],[56320,s+1]]),t+=2}for(var f,c,h,p,g,d,v=n,w=[],m=[],b=!1,y=-1,S=v.length;++y<S;)if(f=v[y],c=v[y+1]){for(h=f[0],p=f[1],g=c[0],d=c[1],m=p;g&&h[0]==g[0]&&h[1]==g[1];)m=B(d)?R(m,d[0]):N(m,d[0],d[1]-1),h=(f=v[++y])[0],p=f[1],g=(c=v[y+1])&&c[0],d=c&&c[1],b=!0;w.push([h,b?m:p]),b=!1}else w.push(f);var x=w;if(1!=x.length)for(var C=-1,_=-1;++C<x.length;)for(var A=x[C],j=A[1],E=j[0],L=j[1],_=C;++_<x.length;){var O=x[_],q=(z=O[1])[0],z=z[1];E==q&&L==z&&(B(O[0])?A[0]=R(A[0],O[0][0]):A[0]=N(A[0],O[0][0],O[0][1]-1),x.splice(_,1),--_)}return x}(e),t&&(s=v(s,r),o=!1,s=v(s,i),a=!1),w(s)||n.push(b(s)),e.length&&n.push((u=[],d(e,function(e){var t=e[0],e=e[1];u.push(b(t)+b(e))}),u.join("|"))),o&&n.push(b(r)+"(?![\\uDC00-\\uDFFF])"),a&&n.push("(?:[^\\uD800-\\uDBFF]|^)"+b(i)),n.join("|")}(this.data,!!e&&e.bmpOnly,!!e&&e.hasUnicodeFlag))?e.replace(C,"\\0$1"):"[]"},toRegExp:function(e){var t=this.toString(e&&-1!=e.indexOf("u")?{hasUnicodeFlag:!0}:null);return RegExp(t,e||"")},valueOf:function(){return o(this.data)}};for(h in q)_.call(q,h)&&(O[h]=q[h]);e.toArray=e.valueOf,p&&!p.nodeType?y?y.exports=f:p.regenerate=f:t.regenerate=f}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(e,t,n){let r=e("jsesc"),i=e("regenerate");function s(e,t,n){var r=n&&-1!==n.indexOf("u"),n=e.toString(n);return!(e.precedence<t.precedence)||e.isSingleCharacter||r&&e.isSingleCodepoint?n:"(?:"+n+")"}n.Alternation=class o{constructor(...e){this.precedence=1,this.options=this.flatten(e),this.options.sort((e,t)=>t.length-e.length)}flatten(e){return e.reduce((e,t)=>e.concat(t instanceof o?this.flatten(t.options):t),[])}get length(){return this.options[0].length}toString(t){return this.options.map(e=>s(e,this,t)).join("|")}},n.CharClass=class{constructor(e,t){this.precedence=1,this.set=i(e,t)}get length(){return 1}get isSingleCharacter(){return!this.set.toArray().some(e=>65535<e)}get isSingleCodepoint(){return!0}toString(e){return this.set.toString({hasUnicodeFlag:e&&-1!==e.indexOf("u")})}getCharClass(){return this.set}},n.Concatenation=class a{constructor(e,t){this.precedence=2,this.a=e,this.b=t}get length(){return this.a.length+this.b.length}toString(e){return s(this.a,this,e)+s(this.b,this,e)}getLiteral(e){return"start"===e&&this.a.getLiteral?this.a.getLiteral(e):"end"===e&&this.b.getLiteral?this.b.getLiteral(e):void 0}removeSubstring(e,t){let{a:n,b:r}=this;return"start"===e&&n.removeSubstring&&(n=n.removeSubstring(e,t)),"end"===e&&r.removeSubstring&&(r=r.removeSubstring(e,t)),n.isEmpty?r:r.isEmpty?n:new a(n,r)}},n.Repetition=class{constructor(e,t){this.precedence=3,this.expr=e,this.type=t}get length(){return this.expr.length}toString(e){return s(this.expr,this,e)+this.type}},n.Literal=class u{constructor(e){this.precedence=2,this.value=e}get isEmpty(){return!this.value}get isSingleCharacter(){return 1===this.length}get isSingleCodepoint(){return 1===Array.from(this.value).length}get length(){return this.value.length}toString(e){return r(this.value,{es6:e&&-1!==e.indexOf("u")}).replace(/[\t\n\f\r\$\(\)\*\+\-\.\?\[\]\^\|]/g,"\\$&").replace(/(\\u\{[a-z0-9]+\})|([\{\}])/gi,(e,t,n)=>t||"\\"+n)}getCharClass(){if(this.isSingleCodepoint)return this.value}getLiteral(){return this.value}removeSubstring(e,t){return"start"===e?new u(this.value.slice(t)):"end"===e?new u(this.value.slice(0,this.value.length-t)):void 0}}},{jsesc:2,regenerate:3}],5:[function(e,t,n){t.exports=class extends Map{constructor(e,t){"function"==typeof e&&(t=e,e=null),super(e),this.defaultGetter=t}get(e){var t;return super.has(e)?super.get(e):(t=this.defaultGetter(e),this.set(e,t),t)}}},{}],6:[function(e,t,n){let C=e("./map"),_=e("./set"),A=e("./state");t.exports=function(e){var t,n=new _(e.visit()),r=n.filter(e=>e.accepting),i=new C(e=>new C(e=>new _));for(t of n)for(var[s,o]of t.transitions)i.get(o).get(s).add(t);for(var a,u=new _([r,n.difference(r)]),l=new _(u);0<l.size;){var f,c,h=l.shift(),p=new C(e=>new _);for(f of h)for(var[g,d]of i.get(f))p.get(g).addAll(d);for(c of p.values())for(let t of u){var v,w,m=c.intersection(t);0!==m.size&&0!==(v=t.difference(c)).size&&(u.replace(t,m,v),(w=l.find(e=>e.equals(t)))?l.replace(w,m,v):m.size<=v.size?l.add(m):l.add(v))}}let b=new C(e=>new A),y=null;for(a of u){var S=a.first(),x=b.get(a);for(let[e,t]of S.transitions)x.transitions.set(e,b.get(u.find(e=>e.has(t))));x.accepting=S.accepting,a.has(e)&&(y=x)}return y}},{"./map":5,"./set":8,"./state":9}],7:[function(e,t,n){let{Alternation:a,CharClass:u,Concatenation:l,Repetition:f,Literal:c}=e("./ast");function h(e){return e?new f(e,"*"):null}function p(s,o){if(null==s||null==o||s===o)return s||o;{let e,t,n,r,i;return[s,o,e]=g(s,o,"start"),[s,o,t]=g(s,o,"end"),n=s.isEmpty||o.isEmpty?new f(s.isEmpty?o:s,"?"):s instanceof f&&"?"===s.type?new f(new a(s.expr,o),"?"):o instanceof f&&"?"===o.type?new f(new a(s,o.expr),"?"):(r=s.getCharClass&&s.getCharClass(),i=o.getCharClass&&o.getCharClass(),r&&i?new u(r,i):new a(s,o)),e&&(n=new l(new c(e),n)),n=t?new l(n,new c(t)):n}}function g(e,t,u){var l=e.getLiteral&&e.getLiteral(u),n=t.getLiteral&&t.getLiteral(u);return l&&n?(n=function(e,t){var n="start"===u?1:-1;e=Array.from(l),t=Array.from(t);let r=1==n?0:e.length-1,i=1==n?e.length:-1,s=1==n?0:t.length-1,o=1==n?t.length:-1,a="";for(;r!==i&&s!==o&&e[r]===t[s];r+=n,s+=n)1==n?a+=e[r]:a=e[r]+a;return a}(0,n))?[e=e.removeSubstring(u,n.length),t=t.removeSubstring(u,n.length),n]:[e,t,""]:[e,t,null]}function d(e,t){return null==e||null==t?null:e.isEmpty?t:t.isEmpty?e:e instanceof c&&t instanceof c?new c(e.value+t.value):e instanceof c&&t instanceof l&&t.a instanceof c?new l(new c(e.value+t.a.value),t.b):t instanceof c&&e instanceof l&&e.b instanceof c?new l(e.a,new c(e.b.value+t.value)):new l(e,t)}t.exports=function(e,t){var r=Array.from(e.visit()),i=[],s=[];for(let e=0;e<r.length;e++){var n,o,a=r[e];a.accepting&&(s[e]=new c("")),i[e]=[];for([n,o]of a.transitions){var u=r.indexOf(o);i[e][u]=i[e][u]?p(i[e][u],new c(n)):new c(n)}}for(let n=r.length-1;0<=n;n--){if(null!=i[n][n]){s[n]=d(h(i[n][n]),s[n]);for(let e=0;e<n;e++)i[n][e]=d(h(i[n][n]),i[n][e])}for(let t=0;t<n;t++)if(null!=i[t][n]){s[t]=p(s[t],d(i[t][n],s[n]));for(let e=0;e<n;e++)i[t][e]=p(i[t][e],d(i[t][n],i[n][e]))}}return s[0].toString(t)}},{"./ast":4}],8:[function(e,t,n){class r extends Set{filter(e){var t,n=new r;for(t of this)e(t)&&n.add(t);return n}difference(t){return this.filter(e=>!t.has(e))}intersection(t){return this.filter(e=>t.has(e))}equals(e){if(this.size!==e.size)return!1;for(var t of this)if(!e.has(t))return!1;return!0}find(e){for(var t of this)if(e(t))return t;return null}first(){return this.values().next().value}shift(){var e=this.first();return this.delete(e),e}replace(e,...t){this.delete(e)&&this.addAll(t)}addAll(e){for(var t of e)this.add(t)}}t.exports=r},{}],9:[function(e,t,n){let r=e("./map");t.exports=class i{constructor(){this.accepting=!1,this.transitions=new r(e=>new i)}*visit(e=new Set){if(!e.has(this)){e.add(this),yield this;for(var t of this.transitions.values())yield*t.visit(e)}}}},{"./map":5}],10:[function(e,t,n){let r=e("./state"),i=e("./minimize"),s=e("./regex");t.exports=class{constructor(){this.alphabet=new Set,this.root=new r}add(e){let t=this.root;for(var n of e)this.alphabet.add(n),t=t.transitions.get(n);t.accepting=!0}addAll(e){for(var t of e)this.add(t)}minimize(){return i(this.root)}toString(e){return s(this.minimize(),e)}toRegExp(e){return new RegExp(this.toString(e),e)}}},{"./minimize":6,"./regex":7,"./state":9}],11:[function(e,t,n){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}t.exports=function(e){return null!=e&&(r(e)||"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))||!!e._isBuffer)}},{}]},{},[1])(1)});