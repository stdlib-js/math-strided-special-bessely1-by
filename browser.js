// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,f=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,i=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,i){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof i||null===i||"[object Array]"===e.call(i))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+i+"`.");if((l="value"in i)&&(u.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=i.value,r.__proto__=c):r[n]=i.value),y="get"in i,v="set"in i,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,i.get),v&&f&&f.call(r,n,i.set),r};function c(r,n,t){i(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r,n,t,e,o,f,u,a){var i,c,l,y;if(r<=0)return e;for(i=t<0?(1-r)*t:0,c=o<0?(1-r)*o:0,y=0;y<r;y++)void 0!==(l=u.call(a,n[i],y,i,c,n,e))&&(e[c]=f(l)),i+=t,c+=o;return e}function y(r,n,t,e,o,f,u,a,i,c){var l,y,v,d;if(r<=0)return o;for(l=e,y=u,d=0;d<r;d++)void 0!==(v=i.call(c,n[l],d,l,y,n,o))&&(o[y]=a(v)),l+=t,y+=f;return o}c(l,"ndarray",y);var v,d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",w=d&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,f;if(null==r)return p.call(r);t=r[s],f=s,n=null!=(o=r)&&b.call(o,f);try{r[s]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[s]=t:delete r[s],e}:function(r){return p.call(r)},A="function"==typeof Uint32Array,_="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(A&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var h,N=v,U="function"==typeof Float64Array,x="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=h,O="function"==typeof Uint8Array,S="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,256,257]),t=n,r=(O&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint16Array,G="function"==typeof Uint16Array?Uint16Array:null,P="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,65536,65537]),t=n,r=(H&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M={uint16:F,uint8:T};(L=new M.uint16(1))[0]=4660;var V=52===new M.uint8(L.buffer)[0],W=!0===V?1:0,k=new I(1),Y=new N(k.buffer);function q(r){return k[0]=r,Y[W]}var B=!0===V?1:0,C=new I(1),z=new N(C.buffer);function D(r){return r!=r}var J=1023,K=Number.NEGATIVE_INFINITY,Q=.6931471803691238,R=1.9082149292705877e-10,X=1048575;function Z(r){var n,t,e,o,f,u,a,i,c,l,y,v;return 0===r?K:D(r)||r<0?NaN:(f=0,(t=q(r))<1048576&&(f-=54,t=q(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-J|0,f+=(i=614244+(t&=X)&1048576|0)>>20|0,a=(r=function(r,n){return C[0]=r,z[B]=n>>>0,C[0]}(r,t|1072693248^i))-1,(X&2+t)<3?0===a?0===f?0:f*Q+f*R:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*Q-(u-f*R-a)):(i=t-398458|0,c=440401-t|0,o=(y=(v=(l=a/(2+a))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),u=e+o,(i|=c)>0?(n=.5*a*a,0===f?a-(n-l*(n+u)):f*Q-(n-(l*(n+u)+f*R)-a)):0===f?a-l*(a-u):f*Q-(l*(a-u)-f*R-a))))}var $,rr,nr=Math.sqrt,tr=1.772453850905516,er=Number.POSITIVE_INFINITY,or=!0===V?0:1,fr=new I(1),ur=new N(fr.buffer);!0===V?($=1,rr=0):($=0,rr=1);var ar={HIGH:$,LOW:rr},ir=new I(1),cr=new N(ir.buffer),lr=ar.HIGH,yr=ar.LOW;function vr(r,n){return cr[lr]=r,cr[yr]=n,ir[0]}var dr,pr,br=Math.floor;function sr(r){return r===er||r===K}!0===V?(dr=1,pr=0):(dr=0,pr=1);var wr={HIGH:dr,LOW:pr},Ar=new I(1),_r=new N(Ar.buffer),mr=wr.HIGH,hr=wr.LOW;function Nr(r,n){return Ar[0]=n,r[0]=_r[mr],r[1]=_r[hr],r}function Ur(r,n){return 1===arguments.length?Nr([0,0],r):Nr(r,n)}var xr=[0,0];function gr(r){return Math.abs(r)}function jr(r,n,t,e){return D(r)||sr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&gr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return jr(r,[0,0],1,0)}),"assign",jr);var Ir=[0,0],Or=[0,0];function Sr(r,n){var t,e,o,f,u;return 0===n||0===r||D(r)||sr(r)?r:(jr(r,Ir,1,0),n+=Ir[1],n+=function(r){var n=q(r);return(n=(2146435072&n)>>>20)-J|0}(r=Ir[0]),n<-1074?(o=r,Ur(xr,0),f=xr[0],f&=2147483647,u=q(o),vr(f|=u&=2147483648,xr[1])):n>1023?r<0?K:er:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ur(Or,r),t=Or[0],t&=2148532223,e*vr(t|=n+J<<20,Or[1])))}function Er(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Fr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Tr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Hr=16777216,Gr=5.960464477539063e-8,Pr=Er(20),Lr=Er(20),Mr=Er(20),Vr=Er(20);function Wr(r,n,t,e,o,f,u,a,i){var c,l,y,v,d,p,b,s,w;for(v=f,w=e[t],s=t,d=0;s>0;d++)l=Gr*w|0,Vr[d]=w-Hr*l|0,w=e[s-1]+l,s-=1;if(w=Sr(w,o),w-=8*br(.125*w),w-=b=0|w,y=0,o>0?(b+=d=Vr[t-1]>>24-o,Vr[t-1]-=d<<24-o,y=Vr[t-1]>>23-o):0===o?y=Vr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,d=0;d<t;d++)s=Vr[d],0===c?0!==s&&(c=1,Vr[d]=16777216-s):Vr[d]=16777215-s;if(o>0)switch(o){case 1:Vr[t-1]&=8388607;break;case 2:Vr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Sr(1,o)))}if(0===w){for(s=0,d=t-1;d>=f;d--)s|=Vr[d];if(0===s){for(p=1;0===Vr[f-p];p++);for(d=t+1;d<=t+p;d++){for(i[a+d]=Fr[u+d],l=0,s=0;s<=a;s++)l+=r[s]*i[a+(d-s)];e[d]=l}return Wr(r,n,t+=p,e,o,f,u,a,i)}}if(0===w)for(t-=1,o-=24;0===Vr[t];)t-=1,o-=24;else(w=Sr(w,-o))>=Hr?(l=Gr*w|0,Vr[t]=w-Hr*l|0,o+=24,Vr[t+=1]=l):Vr[t]=0|w;for(l=Sr(1,o),d=t;d>=0;d--)e[d]=l*Vr[d],l*=Gr;for(d=t;d>=0;d--){for(l=0,p=0;p<=v&&p<=t-d;p++)l+=Tr[p]*e[d+p];Mr[t-d]=l}for(l=0,d=t;d>=0;d--)l+=Mr[d];for(n[0]=0===y?l:-l,l=Mr[0]-l,d=1;d<=t;d++)l+=Mr[d];return n[1]=0===y?l:-l,7&b}function kr(r,n,t,e){var o,f,u,a,i,c,l;for((f=(t-3)/24|0)<0&&(f=0),a=t-24*(f+1),c=f-(u=e-1),l=u+4,i=0;i<=l;i++)Pr[i]=c<0?0:Fr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=u;c++)o+=r[c]*Pr[u+(i-c)];Lr[i]=o}return Wr(r,n,4,Lr,a,4,f,u,Pr)}var Yr=Math.round;function qr(r,n,t){var e,o,f,u,a;return f=r-1.5707963267341256*(e=Yr(.6366197723675814*r)),u=6077100506506192e-26*e,a=n>>20|0,t[0]=f-u,a-(q(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=f)-(f=o-(u=6077100506303966e-26*e))-u),t[0]=f-u,a-(q(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=f)-(f=o-(u=20222662487111665e-37*e))-u),t[0]=f-u)),t[1]=f-t[0]-u,e}var Br=1.5707963267341256,Cr=6077100506506192e-26,zr=2*Cr,Dr=3*Cr,Jr=4*Cr,Kr=[0,0,0],Qr=[0,0];function Rr(r,n){var t,e,o,f,u,a,i;if((o=2147483647&q(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?qr(r,o,n):o<=1073928572?r>0?(i=r-Br,n[0]=i-Cr,n[1]=i-n[0]-Cr,1):(i=r+Br,n[0]=i+Cr,n[1]=i-n[0]+Cr,-1):r>0?(i=r-2*Br,n[0]=i-zr,n[1]=i-n[0]-zr,2):(i=r+2*Br,n[0]=i+zr,n[1]=i-n[0]+zr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?qr(r,o,n):r>0?(i=r-3*Br,n[0]=i-Dr,n[1]=i-n[0]-Dr,3):(i=r+3*Br,n[0]=i+Dr,n[1]=i-n[0]+Dr,-3):1075388923===o?qr(r,o,n):r>0?(i=r-4*Br,n[0]=i-Jr,n[1]=i-n[0]-Jr,4):(i=r+4*Br,n[0]=i+Jr,n[1]=i-n[0]+Jr,-4);if(o<1094263291)return qr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return fr[0]=r,ur[or]}(r),i=vr(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Kr[u]=0|i,i=16777216*(i-Kr[u]);for(Kr[2]=i,f=3;0===Kr[f-1];)f-=1;return a=kr(Kr,Qr,e,f),r<0?(n[0]=-Qr[0],n[1]=-Qr[1],-a):(n[0]=Qr[0],n[1]=Qr[1],a)}var Xr=-.16666666666666632;function Zr(r,n,t,e,o){var f,u,a,i,c;return u=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(i=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),a=c*r,t[o]=0===n?r+a*(Xr+c*u):r-(c*(.5*n-a*u)-n-a*Xr),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=i*i*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),i=1-(f=.5*c),t[o+e]=i+(1-i-f+(c*u-r*n)),t}var $r=[0,0];function rn(r,n,t,e){var o,f;if(o=q(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),Zr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(f=Rr(r,$r),Zr($r[0],$r[1],n,t,e),3&f){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}function nn(r){return rn(r,[0,0],1,0)}c(nn,"assign",rn);var tn=[0,0];function en(r){var n,t,e,o,f,u,a,i;return i=gr(r),0===r||i===er?0:(i<=4?(f=function(r){var n,t;return 0===r?-.03405537391318949:((r<0?-r:r)<=1?(n=r*(6678104126.14924+r*(r*(980629.0409895825+r*(r*(10.650724020080236+-.010767857011487301*r)-4461.579298277507))-115486967.64841276))-142585098013.66644,t=4186860446082.0176+r*(42091902282.58013+r*(202283751.40097034+r*(591176.1449417479+r*(1074.227223951738+r*(1+0*r)))))):(n=(r=1/r)*(10.650724020080236+r*(r*(980629.0409895825+r*(r*(6678104126.14924+-142585098013.66644*r)-115486967.64841276))-4461.579298277507))-.010767857011487301,t=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(202283751.40097034+r*(42091902282.58013+4186860446082.0176*r)))))),n/t)}(u=r*r),n=(a=i*(i+3.8317059702075125)*(i-981/256- -.0003252797924876844))*f):i<=8?(f=function(r){var n,t;return 0===r?-.010158790774176108:((r<0?-r:r)<=1?(n=r*(1660853173129901.8+r*(r*(355806656709.1062+r*(r*(5079326.614801118+r*(4.6179191852758255*r-7502.334222078161))-1811393126.9860668))-36658018905416.664))-0x3e45840c066730,t=0x17f1d1995ae4fb00+r*(0x3cda8dbce6f4c4+r*(84899346165481.42+r*(276227772862.44086+r*(648725028.9959639+r*(1126712.5065029138+r*(1388.6978985861358+1*r))))))):(n=4.6179191852758255+(r=1/r)*(r*(5079326.614801118+r*(r*(355806656709.1062+r*(r*(1660853173129901.8+-0x3e45840c066730*r)-36658018905416.664))-1811393126.9860668))-7502.334222078161),t=1+r*(1388.6978985861358+r*(1126712.5065029138+r*(648725028.9959639+r*(276227772862.44086+r*(84899346165481.42+r*(0x3cda8dbce6f4c4+0x17f1d1995ae4fb00*r))))))),n/t)}(u=r*r),n=(a=i*(i+7.015586669815619)*(i-7.015625- -38330184381246464e-21))*f):(t=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(n=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),n/t)}(o=(u=8/i)*u),e=function(r){var n,t;return 0===r?.046875:((r<0?-r:r)<=1?(n=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(n=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),n/t)}(o),a=1/(nr(i)*tr),nn(tn),n=a*(t*(tn[0]-tn[1])+u*e*(tn[0]+tn[1]))),r<0&&(n*=-1),n)}var on=.6366197723675814,fn=2.197141326031017,un=5.429681040794135,an=[0,0];function cn(r){var n,t,e,o,f,u,a;return r<0?NaN:0===r?K:r===er?0:r<=4?(f=r*r,u=Z(r/fn)*en(r)*on,o=function(r){var n,t;return 0===r?.13187550549740895:((r<0?-r:r)<=1?(n=40535726612579.55+r*(5470861171652.543+r*(r*(7214454821.450256+r*(r*(221579.5322228026+-317.1442466004613*r)-59157479.9974084))-375959744978.196)),t=307378739210792.9+r*(4127228620040.646+r*(27800352738.690586+r*(122504351.22182964+r*(381364.70753052575+r*(820.7990816839387+1*r)))))):(n=(r=1/r)*(221579.5322228026+r*(r*(7214454821.450256+r*(r*(5470861171652.543+40535726612579.55*r)-375959744978.196))-59157479.9974084))-317.1442466004613,t=1+r*(820.7990816839387+r*(381364.70753052575+r*(122504351.22182964+r*(27800352738.690586+r*(4127228620040.646+307378739210792.9*r)))))),n/t)}(f),u+(a=(r+fn)*(r-562/256-.001828826031017035)/r)*o):r<=8?(f=r*r,u=Z(r/un)*en(r)*on,o=function(r){var n,t;return 0===r?.021593919914419626:((r<0?-r:r)<=1?(n=0x9fcaed579ed86000+r*(r*(r*(4068627528980474.5+r*(r*(374536739624.3849+r*(r*(1915380.6858264203+-1233.7180442012952*r)-1195796191.2070618))-59530713129741.984))-0x53fb01dd8596c0)-0x4ed64a1a7552bc00),t=5332184431331618e5+r*(0x4f0f2b7ff905d800+r*(0x6d8e405cd717f0+r*(111870100658569.7+r*(302217668529.60406+r*(635503180.8708892+r*(1045374.8201934079+r*(1285.516484932161+1*r)))))))):(n=(r=1/r)*(1915380.6858264203+r*(r*(374536739624.3849+r*(r*(4068627528980474.5+r*(r*(0x9fcaed579ed86000*r-0x4ed64a1a7552bc00)-0x53fb01dd8596c0))-59530713129741.984))-1195796191.2070618))-1233.7180442012952,t=1+r*(1285.516484932161+r*(1045374.8201934079+r*(635503180.8708892+r*(302217668529.60406+r*(111870100658569.7+r*(0x6d8e405cd717f0+r*(0x4f0f2b7ff905d800+5332184431331618e5*r)))))))),n/t)}(f),u+(a=(r+un)*(r-1390/256- -6459205864867228e-21)/r)*o):(n=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=r*(r*(r*(r*(r*(0*r-1611.6166443246102)-109824.05543459347)-1523529.3511811374)-6603373.248364939)-9942246.505077641)-4435757.816794128,t=r*(r*(r*(r*(r*(1*r-1455.0094401904962)-107263.8599110382)-1511809.5066341609)-6585339.4797230875)-9934124.389934586)-4435757.816794128):(n=0+(r=1/r)*(r*(r*(r*(r*(-4435757.816794128*r-9942246.505077641)-6603373.248364939)-1523529.3511811374)-109824.05543459347)-1611.6166443246102),t=1+r*(r*(r*(r*(r*(-4435757.816794128*r-9934124.389934586)-6585339.4797230875)-1511809.5066341609)-107263.8599110382)-1455.0094401904962)),n/t)}(e=(f=8/r)*f),t=function(r){var n,t;return 0===r?.046875:((r<0?-r:r)<=1?(n=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+0*r))))),t=708712.8194102874+r*(1819458.0422439973+r*(1419460.669603721+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+1*r)))))):(n=0+(r=1/r)*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+33220.913409857225*r))))),t=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460.669603721+r*(1819458.0422439973+708712.8194102874*r)))))),n/t)}(e),a=.5641895835477563/nr(r),nn(an),a*(f*t*(an[0]-an[1])-n*(an[0]+an[1])))}function ln(r,n,t,e,o,f,u){return l(r,n,t,e,o,cn,f,u)}return c(ln,"ndarray",(function(r,n,t,e,o,f,u,a,i){return y(r,n,t,e,o,f,u,cn,a,i)})),ln},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).bessely1By=n();
//# sourceMappingURL=browser.js.map
