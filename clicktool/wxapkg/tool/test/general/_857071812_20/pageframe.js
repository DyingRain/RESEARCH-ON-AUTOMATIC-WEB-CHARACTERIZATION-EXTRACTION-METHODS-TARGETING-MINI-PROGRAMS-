     var __pluginFrameStartTime_wx104a1a20c3f81ec2__ = Date.now();      var __mainPageFrameReady__ = window.__mainPageFrameReady__ || function(){};      var __webviewId__ = __webviewId__;      var __wxAppCode__= __wxAppCode__ || {};      var __WXML_GLOBAL__= __WXML_GLOBAL__ || {entrys:{},defines:{},modules:{},ops:[],wxs_nf_init:undefined,total_ops:0};      (function(){var __vd_version_info__=__vd_version_info__||{};
      /*v0.5vv_20200413_syb_scopedata*/window.__wcc_version__='v0.5vv_20200413_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wx104a1a20c3f81ec2=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wx104a1a20c3f81ec2:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_wx104a1a20c3f81ec2 || [];
function gz$gwx_wx104a1a20c3f81ec2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_1)return __WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_1
__WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isReady']])
Z([3,'wrapper'])
Z([[7],[3,'isNeedAuth']])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'plugType']],[1,'SINGLE']])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'styleType']],[1,'ROW']])
Z([3,'row'])
Z([a,[3,'padding:'],[[6],[[7],[3,'render']],[3,'paddingStyle']],[3,';']])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'avatorStyle']],[1,'RECT']])
Z([3,'avator'])
Z([[6],[[7],[3,'render']],[3,'avatorUrl']])
Z([3,'avator circle'])
Z(z[9])
Z([[6],[[7],[3,'render']],[3,'isMask']])
Z([3,'nickname'])
Z([a,[[6],[[7],[3,'render']],[3,'contactText']]])
Z(z[13])
Z([a,[[6],[[7],[3,'render']],[3,'nickName']]])
Z([[7],[3,'args']])
Z([3,'loginFail'])
Z([3,'loginSuccess'])
Z([3,'statFunctionalPage'])
Z([3,'button-fix-height'])
Z([3,'fn-hover-class'])
Z([3,'loginAndGetUserInfo'])
Z([3,'release'])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'buttonStyle']],[1,'LIGHT']])
Z([3,'button button_light'])
Z([3,'btn-hover'])
Z([a,[[6],[[7],[3,'render']],[3,'buttonText']]])
Z([3,'button button_primary'])
Z(z[27])
Z([a,z[28][1]])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'styleType']],[1,'BLOCK']])
Z([[2,'&&'],[[2,'=='],[[6],[[7],[3,'render']],[3,'blockStyle']],[1,'BUBBLE']],[[2,'=='],[[6],[[7],[3,'render']],[3,'type']],[1,3]]])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[22])
Z(z[23])
Z(z[24])
Z([3,'chatGroup_bubble'])
Z(z[27])
Z([3,'chatGroup_without_border'])
Z([3,'../../assets/chat_group_circle_2x.png'])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'blockStyle']],[1,'BUBBLE']])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[22])
Z(z[23])
Z(z[24])
Z([3,'bubble'])
Z(z[27])
Z([a,[3,'background-color:'],[[6],[[7],[3,'render']],[3,'bubbleColor']],z[6][3]])
Z([3,'light_without_border'])
Z([3,'../../assets/light_without_border.png'])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[29])
Z(z[27])
Z([a,z[28][1]])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[22])
Z(z[23])
Z(z[24])
Z([3,'messagecard'])
Z([3,'row-hover-class'])
Z(z[8])
Z(z[9])
Z([3,'content'])
Z([3,'icon_message primary_without_border_small'])
Z([3,'../../assets/primary_without_border_small.png'])
Z(z[13])
Z([a,z[14][1]])
Z([3,'servicetext'])
Z([a,[[6],[[7],[3,'render']],[3,'serviceText']]])
Z(z[4])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z([3,'brace-width'])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[5])
Z(z[77])
Z([a,z[6][1],z[6][2]])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'iconStyle']],[1,'AVATOR']])
Z([3,'icon_row service_with_avator'])
Z([3,'../../assets/service_with_avator.png'])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'iconStyle']],[1,'LIGHT']])
Z([3,'icon_row light_with_border'])
Z([3,'../../assets/light_with_border.png'])
Z([[2,'=='],[[6],[[7],[3,'render']],[3,'iconStyle']],[1,'ADD_CHAT']])
Z([3,'icon_row group_chat_icon'])
Z([3,'../../assets/chat_group_rect_2x.png'])
Z([3,'icon_row primary_without_border'])
Z([3,'../../assets/primary_without_border.png'])
Z(z[13])
Z([a,z[14][1]])
Z([3,'arrow'])
Z([3,'../../assets/arrow.png'])
Z(z[17])
Z(z[18])
Z(z[19])
Z(z[20])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[44])
Z(z[51])
Z(z[27])
Z([a,z[53][1],z[53][2],z[6][3]])
Z(z[54])
Z(z[55])
Z(z[25])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[29])
Z(z[27])
Z([a,z[28][1]])
Z(z[3])
Z(z[4])
Z(z[5])
Z([a,z[6][1],z[6][2],z[6][3]])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[9])
Z(z[12])
Z(z[13])
Z([a,z[14][1]])
Z(z[13])
Z([a,z[16][1]])
Z(z[25])
Z([3,'makeAuthReq'])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[149])
Z(z[29])
Z(z[27])
Z([a,z[28][1]])
Z(z[32])
Z(z[33])
Z(z[149])
Z(z[40])
Z(z[27])
Z(z[42])
Z(z[43])
Z(z[44])
Z(z[149])
Z(z[51])
Z(z[27])
Z([a,z[53][1],z[53][2],z[6][3]])
Z(z[54])
Z(z[27])
Z(z[55])
Z(z[25])
Z(z[149])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[149])
Z(z[29])
Z(z[27])
Z([a,z[28][1]])
Z(z[149])
Z(z[76])
Z(z[77])
Z(z[8])
Z(z[9])
Z(z[80])
Z(z[81])
Z(z[82])
Z(z[13])
Z([a,z[14][1]])
Z(z[85])
Z([a,z[86][1]])
Z(z[4])
Z(z[149])
Z(z[5])
Z(z[77])
Z([a,z[6][1],z[6][2]])
Z(z[99])
Z(z[100])
Z(z[101])
Z(z[102])
Z(z[103])
Z(z[104])
Z(z[105])
Z(z[106])
Z(z[107])
Z(z[108])
Z(z[109])
Z(z[13])
Z([a,z[14][1]])
Z(z[112])
Z(z[113])
Z(z[44])
Z(z[149])
Z(z[51])
Z(z[27])
Z([a,z[53][1],z[53][2],z[6][3]])
Z(z[54])
Z(z[55])
Z(z[25])
Z(z[149])
Z(z[26])
Z(z[27])
Z([a,z[28][1]])
Z(z[149])
Z(z[29])
Z(z[27])
Z([a,z[28][1]])
Z([[2,'!'],[[7],[3,'isPC']]])
Z([3,'widget'])
Z([[7],[3,'postHeight']])
Z([[7],[3,'postWidth']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_1);return __WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_1
}
function gz$gwx_wx104a1a20c3f81ec2_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_2)return __WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_2
__WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'use2dCanvas']])
Z([3,'weui-canvas'])
Z([a,[3,'width: '],[[7],[3,'width']],[3,'px; height: '],[[7],[3,'height']],[3,'px;']])
Z([3,'2d'])
Z(z[1])
Z([a,z[2][1],z[2][2],z[2][3],z[2][4],z[2][5]])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_2);return __WXML_GLOBAL__.ops_cached.$gwx_wx104a1a20c3f81ec2_2
}
__WXML_GLOBAL__.ops_set.$gwx_wx104a1a20c3f81ec2=z;
__WXML_GLOBAL__.ops_init.$gwx_wx104a1a20c3f81ec2=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/cell/cell.wxml','./components/wxml-to-canvas/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wx104a1a20c3f81ec2_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
var oD=_n('view')
_rz(z,oD,'class',1,e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,2,e,s,gg)){fE.wxVkey=1
var cF=_v()
_(fE,cF)
if(_oz(z,3,e,s,gg)){cF.wxVkey=1
var hG=_v()
_(cF,hG)
if(_oz(z,4,e,s,gg)){hG.wxVkey=1
var oH=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var cI=_v()
_(oH,cI)
if(_oz(z,7,e,s,gg)){cI.wxVkey=1
var lK=_mz(z,'image',['class',8,'src',1],[],e,s,gg)
_(cI,lK)
}
else{cI.wxVkey=2
var aL=_mz(z,'image',['class',10,'src',1],[],e,s,gg)
_(cI,aL)
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,12,e,s,gg)){oJ.wxVkey=1
var tM=_n('text')
_rz(z,tM,'class',13,e,s,gg)
var eN=_oz(z,14,e,s,gg)
_(tM,eN)
_(oJ,tM)
}
else{oJ.wxVkey=2
var bO=_n('text')
_rz(z,bO,'class',15,e,s,gg)
var oP=_oz(z,16,e,s,gg)
_(bO,oP)
_(oJ,bO)
}
var xQ=_mz(z,'functional-page-navigator',['args',17,'bind:fail',1,'bind:success',2,'bindtap',3,'class',4,'hoverClass',5,'name',6,'version',7],[],e,s,gg)
var oR=_v()
_(xQ,oR)
if(_oz(z,25,e,s,gg)){oR.wxVkey=1
var fS=_mz(z,'button',['class',26,'hoverClass',1],[],e,s,gg)
var cT=_oz(z,28,e,s,gg)
_(fS,cT)
_(oR,fS)
}
else{oR.wxVkey=2
var hU=_mz(z,'button',['class',29,'hoverClass',1],[],e,s,gg)
var oV=_oz(z,31,e,s,gg)
_(hU,oV)
_(oR,hU)
}
oR.wxXCkey=1
_(oH,xQ)
cI.wxXCkey=1
oJ.wxXCkey=1
_(hG,oH)
}
else if(_oz(z,32,e,s,gg)){hG.wxVkey=2
var cW=_v()
_(hG,cW)
if(_oz(z,33,e,s,gg)){cW.wxVkey=1
var oX=_mz(z,'functional-page-navigator',['args',34,'bind:fail',1,'bind:success',2,'hoverClass',3,'name',4,'version',5],[],e,s,gg)
var lY=_mz(z,'view',['class',40,'hoverClass',1],[],e,s,gg)
var aZ=_mz(z,'image',['class',42,'src',1],[],e,s,gg)
_(lY,aZ)
_(oX,lY)
_(cW,oX)
}
else if(_oz(z,44,e,s,gg)){cW.wxVkey=2
var t1=_mz(z,'functional-page-navigator',['args',45,'bind:fail',1,'bind:success',2,'hoverClass',3,'name',4,'version',5],[],e,s,gg)
var e2=_mz(z,'view',['class',51,'hoverClass',1,'style',2],[],e,s,gg)
var b3=_mz(z,'image',['class',54,'src',1],[],e,s,gg)
_(e2,b3)
_(t1,e2)
_(cW,t1)
}
else{cW.wxVkey=3
var o4=_mz(z,'functional-page-navigator',['args',56,'bind:fail',1,'bind:success',2,'hoverClass',3,'name',4,'version',5],[],e,s,gg)
var x5=_v()
_(o4,x5)
if(_oz(z,62,e,s,gg)){x5.wxVkey=1
var o6=_mz(z,'button',['class',63,'hoverClass',1],[],e,s,gg)
var f7=_oz(z,65,e,s,gg)
_(o6,f7)
_(x5,o6)
}
else{x5.wxVkey=2
var c8=_mz(z,'button',['class',66,'hoverClass',1],[],e,s,gg)
var h9=_oz(z,68,e,s,gg)
_(c8,h9)
_(x5,c8)
}
x5.wxXCkey=1
_(cW,o4)
}
cW.wxXCkey=1
}
else{hG.wxVkey=3
var o0=_mz(z,'functional-page-navigator',['args',69,'bind:fail',1,'bind:success',2,'bindtap',3,'hoverClass',4,'name',5,'version',6],[],e,s,gg)
var cAB=_mz(z,'view',['class',76,'hoverClass',1],[],e,s,gg)
var oBB=_mz(z,'image',['class',78,'src',1],[],e,s,gg)
_(cAB,oBB)
var lCB=_n('view')
_rz(z,lCB,'class',80,e,s,gg)
var aDB=_mz(z,'image',['class',81,'src',1],[],e,s,gg)
_(lCB,aDB)
var tEB=_n('text')
_rz(z,tEB,'class',83,e,s,gg)
var eFB=_oz(z,84,e,s,gg)
_(tEB,eFB)
_(lCB,tEB)
var bGB=_n('text')
_rz(z,bGB,'class',85,e,s,gg)
var oHB=_oz(z,86,e,s,gg)
_(bGB,oHB)
_(lCB,bGB)
_(cAB,lCB)
_(o0,cAB)
_(hG,o0)
}
hG.wxXCkey=1
}
else{cF.wxVkey=2
var xIB=_v()
_(cF,xIB)
if(_oz(z,87,e,s,gg)){xIB.wxVkey=1
var oJB=_mz(z,'functional-page-navigator',['args',88,'bind:fail',1,'bind:success',2,'bindtap',3,'class',4,'hoverClass',5,'name',6,'version',7],[],e,s,gg)
var fKB=_mz(z,'view',['class',96,'hoverClass',1,'style',2],[],e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,99,e,s,gg)){cLB.wxVkey=1
var hMB=_mz(z,'image',['class',100,'src',1],[],e,s,gg)
_(cLB,hMB)
}
else if(_oz(z,102,e,s,gg)){cLB.wxVkey=2
var oNB=_mz(z,'image',['class',103,'src',1],[],e,s,gg)
_(cLB,oNB)
}
else if(_oz(z,105,e,s,gg)){cLB.wxVkey=3
var cOB=_mz(z,'image',['class',106,'src',1],[],e,s,gg)
_(cLB,cOB)
}
else{cLB.wxVkey=4
var oPB=_mz(z,'image',['class',108,'src',1],[],e,s,gg)
_(cLB,oPB)
}
var lQB=_n('text')
_rz(z,lQB,'class',110,e,s,gg)
var aRB=_oz(z,111,e,s,gg)
_(lQB,aRB)
_(fKB,lQB)
var tSB=_mz(z,'image',['class',112,'src',1],[],e,s,gg)
_(fKB,tSB)
cLB.wxXCkey=1
_(oJB,fKB)
_(xIB,oJB)
}
else{xIB.wxVkey=2
var eTB=_mz(z,'functional-page-navigator',['args',114,'bind:fail',1,'bind:success',2,'bindtap',3,'hoverClass',4,'name',5,'version',6],[],e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,121,e,s,gg)){bUB.wxVkey=1
var oVB=_mz(z,'view',['class',122,'hoverClass',1,'style',2],[],e,s,gg)
var xWB=_mz(z,'image',['class',125,'src',1],[],e,s,gg)
_(oVB,xWB)
_(bUB,oVB)
}
else{bUB.wxVkey=2
var oXB=_v()
_(bUB,oXB)
if(_oz(z,127,e,s,gg)){oXB.wxVkey=1
var fYB=_mz(z,'button',['class',128,'hoverClass',1],[],e,s,gg)
var cZB=_oz(z,130,e,s,gg)
_(fYB,cZB)
_(oXB,fYB)
}
else{oXB.wxVkey=2
var h1B=_mz(z,'button',['class',131,'hoverClass',1],[],e,s,gg)
var o2B=_oz(z,133,e,s,gg)
_(h1B,o2B)
_(oXB,h1B)
}
oXB.wxXCkey=1
}
bUB.wxXCkey=1
_(xIB,eTB)
}
xIB.wxXCkey=1
}
cF.wxXCkey=1
}
else{fE.wxVkey=2
var c3B=_v()
_(fE,c3B)
if(_oz(z,134,e,s,gg)){c3B.wxVkey=1
var o4B=_v()
_(c3B,o4B)
if(_oz(z,135,e,s,gg)){o4B.wxVkey=1
var l5B=_mz(z,'view',['class',136,'style',1],[],e,s,gg)
var a6B=_v()
_(l5B,a6B)
if(_oz(z,138,e,s,gg)){a6B.wxVkey=1
var b9B=_mz(z,'image',['class',139,'src',1],[],e,s,gg)
_(a6B,b9B)
}
else{a6B.wxVkey=2
var o0B=_mz(z,'image',['class',141,'src',1],[],e,s,gg)
_(a6B,o0B)
}
var t7B=_v()
_(l5B,t7B)
if(_oz(z,143,e,s,gg)){t7B.wxVkey=1
var xAC=_n('text')
_rz(z,xAC,'class',144,e,s,gg)
var oBC=_oz(z,145,e,s,gg)
_(xAC,oBC)
_(t7B,xAC)
}
else{t7B.wxVkey=2
var fCC=_n('text')
_rz(z,fCC,'class',146,e,s,gg)
var cDC=_oz(z,147,e,s,gg)
_(fCC,cDC)
_(t7B,fCC)
}
var e8B=_v()
_(l5B,e8B)
if(_oz(z,148,e,s,gg)){e8B.wxVkey=1
var hEC=_mz(z,'button',['bindtap',149,'class',1,'hoverClass',2],[],e,s,gg)
var oFC=_oz(z,152,e,s,gg)
_(hEC,oFC)
_(e8B,hEC)
}
else{e8B.wxVkey=2
var cGC=_mz(z,'button',['bindtap',153,'class',1,'hoverClass',2],[],e,s,gg)
var oHC=_oz(z,156,e,s,gg)
_(cGC,oHC)
_(e8B,cGC)
}
a6B.wxXCkey=1
t7B.wxXCkey=1
e8B.wxXCkey=1
_(o4B,l5B)
}
else if(_oz(z,157,e,s,gg)){o4B.wxVkey=2
var lIC=_v()
_(o4B,lIC)
if(_oz(z,158,e,s,gg)){lIC.wxVkey=1
var aJC=_mz(z,'view',['bindtap',159,'class',1,'hoverClass',2],[],e,s,gg)
var tKC=_mz(z,'image',['class',162,'src',1],[],e,s,gg)
_(aJC,tKC)
_(lIC,aJC)
}
else if(_oz(z,164,e,s,gg)){lIC.wxVkey=2
var eLC=_mz(z,'view',['bindtap',165,'class',1,'hoverClass',2,'style',3],[],e,s,gg)
var bMC=_mz(z,'image',['class',169,'hoverClass',1,'src',2],[],e,s,gg)
_(eLC,bMC)
_(lIC,eLC)
}
else{lIC.wxVkey=3
var oNC=_v()
_(lIC,oNC)
if(_oz(z,172,e,s,gg)){oNC.wxVkey=1
var xOC=_mz(z,'button',['bindtap',173,'class',1,'hoverClass',2],[],e,s,gg)
var oPC=_oz(z,176,e,s,gg)
_(xOC,oPC)
_(oNC,xOC)
}
else{oNC.wxVkey=2
var fQC=_mz(z,'button',['bindtap',177,'class',1,'hoverClass',2],[],e,s,gg)
var cRC=_oz(z,180,e,s,gg)
_(fQC,cRC)
_(oNC,fQC)
}
oNC.wxXCkey=1
}
lIC.wxXCkey=1
}
else{o4B.wxVkey=3
var hSC=_mz(z,'view',['bindtap',181,'class',1,'hoverClass',2],[],e,s,gg)
var oTC=_mz(z,'image',['class',184,'src',1],[],e,s,gg)
_(hSC,oTC)
var cUC=_n('view')
_rz(z,cUC,'class',186,e,s,gg)
var oVC=_mz(z,'image',['class',187,'src',1],[],e,s,gg)
_(cUC,oVC)
var lWC=_n('text')
_rz(z,lWC,'class',189,e,s,gg)
var aXC=_oz(z,190,e,s,gg)
_(lWC,aXC)
_(cUC,lWC)
var tYC=_n('text')
_rz(z,tYC,'class',191,e,s,gg)
var eZC=_oz(z,192,e,s,gg)
_(tYC,eZC)
_(cUC,tYC)
_(hSC,cUC)
_(o4B,hSC)
}
o4B.wxXCkey=1
}
else{c3B.wxVkey=2
var b1C=_v()
_(c3B,b1C)
if(_oz(z,193,e,s,gg)){b1C.wxVkey=1
var o2C=_mz(z,'view',['bindtap',194,'class',1,'hoverClass',2,'style',3],[],e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,198,e,s,gg)){x3C.wxVkey=1
var o4C=_mz(z,'image',['class',199,'src',1],[],e,s,gg)
_(x3C,o4C)
}
else if(_oz(z,201,e,s,gg)){x3C.wxVkey=2
var f5C=_mz(z,'image',['class',202,'src',1],[],e,s,gg)
_(x3C,f5C)
}
else if(_oz(z,204,e,s,gg)){x3C.wxVkey=3
var c6C=_mz(z,'image',['class',205,'src',1],[],e,s,gg)
_(x3C,c6C)
}
else{x3C.wxVkey=4
var h7C=_mz(z,'image',['class',207,'src',1],[],e,s,gg)
_(x3C,h7C)
}
var o8C=_n('text')
_rz(z,o8C,'class',209,e,s,gg)
var c9C=_oz(z,210,e,s,gg)
_(o8C,c9C)
_(o2C,o8C)
var o0C=_mz(z,'image',['class',211,'src',1],[],e,s,gg)
_(o2C,o0C)
x3C.wxXCkey=1
_(b1C,o2C)
}
else{b1C.wxVkey=2
var lAD=_v()
_(b1C,lAD)
if(_oz(z,213,e,s,gg)){lAD.wxVkey=1
var aBD=_mz(z,'view',['bindtap',214,'class',1,'hoverClass',2,'style',3],[],e,s,gg)
var tCD=_mz(z,'image',['class',218,'src',1],[],e,s,gg)
_(aBD,tCD)
_(lAD,aBD)
}
else{lAD.wxVkey=2
var eDD=_v()
_(lAD,eDD)
if(_oz(z,220,e,s,gg)){eDD.wxVkey=1
var bED=_mz(z,'button',['bindtap',221,'class',1,'hoverClass',2],[],e,s,gg)
var oFD=_oz(z,224,e,s,gg)
_(bED,oFD)
_(eDD,bED)
}
else{eDD.wxVkey=2
var xGD=_mz(z,'button',['bindtap',225,'class',1,'hoverClass',2],[],e,s,gg)
var oHD=_oz(z,228,e,s,gg)
_(xGD,oHD)
_(eDD,xGD)
}
eDD.wxXCkey=1
}
lAD.wxXCkey=1
}
b1C.wxXCkey=1
}
c3B.wxXCkey=1
}
fE.wxXCkey=1
_(oB,oD)
}
var xC=_v()
_(r,xC)
if(_oz(z,229,e,s,gg)){xC.wxVkey=1
var fID=_mz(z,'wxml-to-canvas',['class',230,'height',1,'width',2],[],e,s,gg)
_(xC,fID)
}
oB.wxXCkey=1
xC.wxXCkey=1
xC.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wx104a1a20c3f81ec2_2()
var hKD=_v()
_(r,hKD)
if(_oz(z,0,e,s,gg)){hKD.wxVkey=1
var oLD=_mz(z,'canvas',['id',1,'style',1,'type',2],[],e,s,gg)
_(hKD,oLD)
}
else{hKD.wxVkey=2
var cMD=_mz(z,'canvas',['canvasId',4,'style',1],[],e,s,gg)
_(hKD,cMD)
}
hKD.wxXCkey=1
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}

      var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__||{}

var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C = __COMMON_STYLESHEETS__
function makeup(file, opt) {
var _n = typeof(file) === "string";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 )
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var styleSheetManager = window.__styleSheetManager2__
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid );
}
}
Ca={};
css = makeup(file, opt);
if (styleSheetManager) {
var key = (info.path || Math.random()) + ':' + suffix
if (!style) {
styleSheetManager.addItem(key, info.path);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, true);
});
}
styleSheetManager.setCss(key, css);
return;
}
if ( !style )
{
var head = document.head || document.getElementsByTagName('head')[0];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();
      		__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/cell/cell.wxss'] = setCssToHead([".",[1],"wrapper wx-image{will-change:transform}\nwx-functional-page-navigator{display:inline-block}\n.",[1],"fn-hover-class{background:transparent}\n.",[1],"button{height:28px;line-height:24px;display:inline-block;padding:2px 14px;font-size:13px;overflow:hidden;border-radius:4px}\n.",[1],"button-fix-height{height:30px}\n.",[1],"button::after{display:none}\n.",[1],"button_primary{background:#3a8ae5;color:#fff}\n.",[1],"button_light{color:#4189e7;background:transparent;border:1px solid #4189e7;line-height:22px}\n.",[1],"light_with_border{width:40px;height:40px}\n.",[1],"light_without_border{width:22px;height:20px}\n.",[1],"chatGroup_bubble{width:36px;height:36px}\n.",[1],"chatGroup_without_border{width:32px;height:32px;position:relative;top:2px;left:2px}\n.",[1],"arrow{width:8px;height:13px}\n.",[1],"primary_without_border{width:40px;height:40px}\n.",[1],"primary_without_border_small{width:20px;height:17px}\n.",[1],"service_with_avator{width:40px;height:40px}\n.",[1],"bubble{width:48px;height:48px;border-radius:24px;text-align:center;line-height:56px;display:inline-block}\n.",[1],"nickname{color:#000;font-weight:700;margin-left:12px;font-size:16px;line-height:40px;vertical-align:middle;-webkit-flex:1;flex:1}\n.",[1],"row{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}\n.",[1],"avator{width:32px;height:32px}\n.",[1],"circle{border-radius:16px}\n.",[1],"row .",[1],"button{position:relative}\n.",[1],"brace-width{width:100%}\n.",[1],"btn-hover{opacity:.7}\n.",[1],"btn-hover::after{border:none}\n.",[1],"row-hover-class{background-color:#f7f8fa}\n.",[1],"messagecard{border:1px solid #dce1e7;border-radius:4px;overflow:hidden;height:72px;box-sizing:border-box;display:inline-block}\n.",[1],"messagecard .",[1],"avator{width:70px;height:70px;vertical-align:top;border-top-left-radius:4px;border-bottom-left-radius:4px}\n.",[1],"messagecard .",[1],"content{padding:14px 16px;display:inline-block}\n.",[1],"messagecard .",[1],"servicetext{display:block;color:#787878;font-size:14px;clear:both;padding-top:8px}\n.",[1],"messagecard .",[1],"icon_message{float:left}\n.",[1],"messagecard .",[1],"nickname{line-height:16px;float:left;margin-left:4px}\n.",[1],"group_chat_icon{width:36px;height:36px}\n.",[1],"widget,.",[1],"widget_helper{visibility:hidden;opacity:0;position:absolute;left:-999px}\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./components/cell/cell.wxss:1:38)",{path:"./components/cell/cell.wxss"});
		__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/cell/cell.wxml'] = $gwx_wx104a1a20c3f81ec2( './components/cell/cell.wxml' );
				__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/wxml-to-canvas/index.wxss'] = setCssToHead([],undefined,{path:"./components/wxml-to-canvas/index.wxss"});
		__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/wxml-to-canvas/index.wxml'] = $gwx_wx104a1a20c3f81ec2( './components/wxml-to-canvas/index.wxml' );
		
      })();     var __pluginFrameEndTime_wx104a1a20c3f81ec2__ = Date.now();      