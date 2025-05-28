	var __wxAppConsole__ = console;definePlugin("plugin://wx104a1a20c3f81ec2", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram) {            var __vd_version_info__=__vd_version_info__||{};            if (typeof console === 'undefined') {console=__wxAppConsole__; };			
			/*v0.5vv_20200413_syb_scopedata*/global.__wcc_version__='v0.5vv_20200413_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
}
var xC=_v()
_(r,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'wxml-to-canvas',['class',2,'height',1,'width',2],[],e,s,gg)
_(xC,oD)
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
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/cell/cell.json'] = {"component":true,"usingComponents":{"wxml-to-canvas":"../wxml-to-canvas/index"}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/cell/cell.wxml'] = [$gwx_wx104a1a20c3f81ec2, './components/cell/cell.wxml' ];else global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/cell/cell.wxml'] = $gwx_wx104a1a20c3f81ec2( './components/cell/cell.wxml' );
		global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/wxml-to-canvas/index.json'] = {"component":true,"usingComponents":{}};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/wxml-to-canvas/index.wxml'] = [$gwx_wx104a1a20c3f81ec2, './components/wxml-to-canvas/index.wxml' ];else global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/components/wxml-to-canvas/index.wxml'] = $gwx_wx104a1a20c3f81ec2( './components/wxml-to-canvas/index.wxml' );
		global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/package.json'] = {"name":"contact-plugin-miniprogram","version":"1.0.0","description":"","private":true,"scripts":{"test":"echo \"Error: no test specified\" \x26\x26 exit 1"},"author":"","license":"ISC","dependencies":{"widget-ui":"^1.0.2"},"__warning__":"无效的 page.json [\"name\"]、page.json [\"version\"]、page.json [\"description\"]、page.json [\"private\"]、page.json [\"scripts\"]、page.json [\"author\"]、page.json [\"license\"]、page.json [\"dependencies\"]"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/package.wxml'] = [$gwx_wx104a1a20c3f81ec2, './package.wxml' ];else global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/package.wxml'] = $gwx_wx104a1a20c3f81ec2( './package.wxml' );
		global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/plugin.json'] = {"publicComponents":{"cell":"components/cell/cell"},"main":"index.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/plugin.wxml'] = [$gwx_wx104a1a20c3f81ec2, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wx104a1a20c3f81ec2/plugin.wxml'] = $gwx_wx104a1a20c3f81ec2( './plugin.wxml' );
	
				define("@babel/runtime/helpers/Objectvalues.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
Object.values||(Object.values=function(e){if(e!==Object(e))throw new TypeError("Object.values called on a non-object");var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(e[t]);return r}); 
 			}); 
		define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray; 
 			}); 
		define("@babel/runtime/helpers/assertThisInitialized.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=_assertThisInitialized; 
 			}); 
		define("@babel/runtime/helpers/asyncToGenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator; 
 			}); 
		define("@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck; 
 			}); 
		define("@babel/runtime/helpers/createClass.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}module.exports=_createClass; 
 			}); 
		define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=r[Symbol.iterator]()},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper; 
 			}); 
		define("@babel/runtime/helpers/createSuper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var getPrototypeOf=require("./getPrototypeOf"),isNativeReflectConstruct=require("./isNativeReflectConstruct"),possibleConstructorReturn=require("./possibleConstructorReturn");function _createSuper(t){var e=isNativeReflectConstruct();return function(){var r,o=getPrototypeOf(t);if(e){var s=getPrototypeOf(this).constructor;r=Reflect.construct(o,arguments,s)}else r=o.apply(this,arguments);return possibleConstructorReturn(this,r)}}module.exports=_createSuper; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}module.exports=_defineProperty; 
 			}); 
		define("@babel/runtime/helpers/getPrototypeOf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _getPrototypeOf(t){return module.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}module.exports=_getPrototypeOf; 
 			}); 
		define("@babel/runtime/helpers/inherits.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var setPrototypeOf=require("./setPrototypeOf");function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&setPrototypeOf(e,t)}module.exports=_inherits; 
 			}); 
		define("@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}module.exports=_interopRequireDefault; 
 			}); 
		define("@babel/runtime/helpers/isNativeReflectConstruct.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}module.exports=_isNativeReflectConstruct; 
 			}); 
		define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2; 
 			}); 
		define("@babel/runtime/helpers/possibleConstructorReturn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var _typeof=require("./typeof"),assertThisInitialized=require("./assertThisInitialized");function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!=typeof t?assertThisInitialized(e):t}module.exports=_possibleConstructorReturn; 
 			}); 
		define("@babel/runtime/helpers/setPrototypeOf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _setPrototypeOf(t,o){return module.exports=_setPrototypeOf=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},_setPrototypeOf(t,o)}module.exports=_setPrototypeOf; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _typeof(o){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=_typeof=function(o){return typeof o}:module.exports=_typeof=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray; 
 			}); 
		define("@babel/runtime/regenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
!function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",u="object"==typeof module,h=t.regeneratorRuntime;if(h)u&&(module.exports=h);else{(h=t.regeneratorRuntime=u?module.exports:{}).wrap=w;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={},v={};v[i]=function(){return this};var d=Object.getPrototypeOf,g=d&&d(d(P([])));g&&g!==e&&n.call(g,i)&&(v=g);var m=b.prototype=x.prototype=Object.create(v);E.prototype=m.constructor=b,b.constructor=E,b[c]=E.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===E||"GeneratorFunction"===(r.displayName||r.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},h.awrap=function(t){return{__await:t}},_(j.prototype),j.prototype[a]=function(){return this},h.AsyncIterator=j,h.async=function(t,r,e,n){var o=new j(w(t,r,e,n));return h.isGeneratorFunction(r)?o:o.next().then(function(t){return t.done?t.value:o.next()})},_(m),m[c]="Generator",m[i]=function(){return this},m.toString=function(){return"[object Generator]"},h.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},h.values=P,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}}}function w(t,r,e,n){var o=r&&r.prototype instanceof x?r:x,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=O(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=L(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function L(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function x(){}function E(){}function b(){}function _(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function j(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=L(t[e],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(h).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function O(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=L(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}}(function(){return this||"object"==typeof self&&self}()||Function("return this")()); 
 			}); 
		define("api/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="init data";module.exports={getData:function(){return t},setData:function(a){t=a}}; 
 			}); 
		define("components/cell/wxmlTocanvasData.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/objectSpread2");module.exports={getPostStyle:function(t){var i=wx.getSystemInfoSync().screenWidth,n=i-24-24,o=t.cardHeight,r=t.postHeight;return e(e({container:{backgroundColor:"#F5F6F7",width:i,height:r,paddingTop:34,paddingLeft:24,paddingRight:24,flexDirection:"column",alignItems:"center"},card:{flexDirection:"column",alignItems:"center",backgroundColor:"#FFFFFF",paddingTop:40,paddingBottom:48,paddingLeft:24,paddingRight:24,marginBottom:32,borderRadius:10,width:n,height:o},avatar:{width:48,height:48,borderRadius:4,marginBottom:10},username:{fontSize:15,lineHeight:22,color:"#000000",textAlign:"center",height:22,width:n-20},corpname:{fontSize:12,lineHeight:22,color:"#FF8214",textAlign:"center",height:22,width:n-20},descContainer:{flexDirection:"row",flexWrap:"wrap",width:n-24-24,marginTop:12,marginBottom:32},quot:{fontWeight:600,fontSize:20,lineHeight:22,height:22,width:20,color:"rgba(141,146,153, 0.4)"},descText:{fontSize:15,height:22,lineHeight:22,color:"#000000"}},t.descWidths),{},{qrcodeContainer:{backgroundColor:"#FAFBFC",flexDirection:"column",alignItems:"center",borderRadius:4,height:292,width:n-32-32,paddingTop:36,paddingBottom:48},qrcodeText1:{fontWeight:600,fontSize:14,lineHeight:14,height:14,width:150,textAlign:"center",color:"#757A80",marginBottom:5},qrcodeText2:{fontSize:13,lineHeight:13,height:13,width:150,textAlign:"center",color:"#757A80",marginBottom:24},qrcode:{width:152,height:152},logo:{width:96,height:22}})},getPostWxml:function(e){return'<view class="container">\n                <view class="card">\n                    <image class="avatar" src="'.concat(e.headurl,'"></image>\n                    <text class="username">').concat(e.name,'</text>\n                    <text class="corpname">@').concat(e.corpname,'</text>\n                    \n                    <view class="desc-container">\n                        <text class="quot quot-left">\u201c</text>').concat(e.descDom,'<text class="quot quot-right">\u201d</text>\n                    </view>\n\n\n                    <view class="qrcode-container">\n                        <text class="qrcode-text1">\u957f\u6309\u8bc6\u522b\u4e8c\u7ef4\u7801</text>\n                        <text class="qrcode-text2">\u6dfb\u52a0\u6211\u7684\u4f01\u4e1a\u5fae\u4fe1</text>\n                        <image class="qrcode" src="').concat(e.qrcodeurl,'"></image>\n                    </view>\n                </view>\n\n                <image class="logo" src="https://wwcdn.weixin.qq.com/node/wework/images/Logo.c64e560614.png"></image>\n\n            </view>\n            ')}}; 
 			}); 
		define("components/wxml-to-canvas/draw.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");require("../../@babel/runtime/helpers/Objectvalues");var t=require("../../@babel/runtime/helpers/createForOfIteratorHelper"),r=e(require("../../@babel/runtime/regenerator")),a=require("../../@babel/runtime/helpers/asyncToGenerator"),i=require("../../@babel/runtime/helpers/classCallCheck"),n=require("../../@babel/runtime/helpers/createClass"),o=function(){function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];i(this,e),this.ctx=t,this.canvas=r||null,this.use2dCanvas=a}var o,l;return n(e,[{key:"roundRect",value:function(e,t,r,a,i){var n=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],o=arguments.length>6&&void 0!==arguments[6]&&arguments[6];if(!(i<0)){var l=this.ctx;l.beginPath(),l.arc(e+i,t+i,i,Math.PI,3*Math.PI/2),l.arc(e+r-i,t+i,i,3*Math.PI/2,0),l.arc(e+r-i,t+a-i,i,0,Math.PI/2),l.arc(e+i,t+a-i,i,Math.PI/2,Math.PI),l.lineTo(e,t+i),o&&l.stroke(),n&&l.fill()}}},{key:"drawView",value:function(e,t){var r=this.ctx,a=e.left,i=e.top,n=e.width,o=e.height,l=t.borderRadius,s=void 0===l?0:l,c=t.borderWidth,u=void 0===c?0:c,d=t.borderColor,h=t.color,f=void 0===h?"#000":h,v=t.backgroundColor,b=void 0===v?"transparent":v;r.save(),u>0&&(r.fillStyle=d||f,this.roundRect(a,i,n,o,s)),r.fillStyle=b;var p=n-2*u,w=o-2*u,x=s-u>=0?s-u:0;this.roundRect(a+u,i+u,p,w,x),r.restore()}},{key:"drawImage",value:(l=a(r.default.mark((function e(t,a,i){var n=this;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,r){var o=n.ctx,l=n.canvas,s=i.borderRadius,c=void 0===s?0:s,u=a.left,d=a.top,h=a.width,f=a.height;o.save(),n.roundRect(u,d,h,f,c,!1,!1),o.clip();var v=function(t){if(n.use2dCanvas){var a=l.createImage();a.onload=function(){o.drawImage(a,u,d,h,f),o.restore(),e()},a.onerror=function(){r(new Error("createImage fail: ".concat(t)))},a.src=t}else o.drawImage(t,u,d,h,f),o.restore(),e()},b=/^wxfile:\/\//.test(t),p=/^https?:\/\//.test(t);b?v(t):p?wx.downloadFile({url:t,success:function(e){200===e.statusCode?v(e.tempFilePath):r(new Error("downloadFile:fail ".concat(t)))},fail:function(){r(new Error("downloadFile:fail ".concat(t)))}}):r(new Error("image format error: ".concat(t)))}));case 2:case"end":return e.stop()}}),e)}))),function(e,t,r){return l.apply(this,arguments)})},{key:"drawText",value:function(e,r,a){var i=this.ctx,n=r.left,o=r.top,l=r.width,s=r.height,c=a.color,u=void 0===c?"#000":c,d=a.lineHeight,h=void 0===d?"1.4em":d,f=a.fontSize,v=void 0===f?14:f,b=a.fontWeight,p=void 0===b?"normal":b,w=a.textAlign,x=void 0===w?"left":w,m=a.verticalAlign,g=void 0===m?"top":m,k=a.backgroundColor,y=void 0===k?"transparent":k;if("string"==typeof h&&(h=Math.ceil(parseFloat(h.replace("em"))*v)),e&&!(h>s)){switch(i.save(),i.textBaseline="top",i.font="".concat(p," ").concat(v,"px sans-serif"),i.textAlign=x,i.fillStyle=y,this.roundRect(n,o,l,s,0),i.fillStyle=u,x){case"left":break;case"center":n+=.5*l;break;case"right":n+=l}var I=i.measureText(e).width,M=Math.ceil(I/l)*h,C=Math.ceil((s-M)/2);switch(C<0&&(C=0),g){case"top":break;case"middle":o+=C;break;case"bottom":o+=2*C}var P=Math.ceil((h-v)/2);if(I<=l)i.fillText(e,n,o+P);else{var T,q=e.split(""),R=o,F="",S=t(q);try{for(S.s();!(T=S.n()).done;){var E=T.value,A=F+E;if(i.measureText(A).width>l){if(i.fillText(F,n,o+P),F=E,(o+=h)+h>R+s)break}else F=A}}catch(e){S.e(e)}finally{S.f()}o+h<=R+s&&i.fillText(F,n,o+P),i.restore()}}}},{key:"drawNode",value:(o=a(r.default.mark((function e(t){var a,i,n,o,l,s,c,u,d,h;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.layoutBox,i=t.computedStyle,n=t.name,o=t.attributes,l=o.src,s=o.text,"view"!==n){e.next=6;break}this.drawView(a,i),e.next=12;break;case 6:if("image"!==n){e.next=11;break}return e.next=9,this.drawImage(l,a,i);case 9:e.next=12;break;case 11:"text"===n&&this.drawText(s,a,i);case 12:c=Object.values(t.children),u=0,d=c;case 14:if(!(u<d.length)){e.next=21;break}return h=d[u],e.next=18,this.drawNode(h);case 18:u++,e.next=14;break;case 21:case"end":return e.stop()}}),e,this)}))),function(e){return o.apply(this,arguments)})}]),e}();module.exports={Draw:o}; 
 			}); 
		define("components/wxml-to-canvas/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={hex:function(t){var r=null;return!/^#/.test(t)||7!==t.length&&9!==t.length?null!==(r=/^(rgb|rgba)\((.+)\)/.exec(t))?"#"+r[2].split(",").map((function(t,r){return t=t.trim(),1===(t=(t=3===r?Math.floor(255*parseFloat(t)):parseInt(t,10)).toString(16)).length&&(t="0"+t),t})).join(""):"#00000000":t},splitLineToCamelCase:function(t){return t.split("-").map((function(t,r){return 0===r?t:t[0].toUpperCase()+t.slice(1)})).join("")},compareVersion:function(t,r){t=t.split("."),r=r.split(".");for(var n=Math.max(t.length,r.length);t.length<n;)t.push("0");for(;r.length<n;)r.push("0");for(var e=0;e<n;e++){var l=parseInt(t[e],10),i=parseInt(r[e],10);if(l>i)return 1;if(l<i)return-1}return 0}}; 
 			}); 
		define("components/wxml-to-canvas/widget.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";require("../../@babel/runtime/helpers/Objectvalues");var e=require("../../@babel/runtime/helpers/createClass"),t=require("../../@babel/runtime/helpers/classCallCheck"),r=require("../../@babel/runtime/helpers/inherits"),i=require("../../@babel/runtime/helpers/createSuper"),n=require("widget-ui"),a=require("./utils").splitLineToCamelCase,s=function(e){r(s,n);var a=i(s);function s(e){var r;return t(this,s),(r=a.call(this,e.style)).name=e.name,r.attributes=e.attributes,r}return s}(),u=function(){function r(e,i){t(this,r),this.xom=e,this.style=i,this.inheritProps=["fontSize","lineHeight","textAlign","verticalAlign","color"]}return e(r,[{key:"init",value:function(){return this.container=this.create(this.xom),this.container.layout(),this.inheritStyle(this.container),this.container}},{key:"inheritStyle",value:function(e){var t=this,r=e.parent||null,i=e.children||{},n=e.computedStyle;r&&this.inheritProps.forEach((function(e){n[e]=n[e]||r.computedStyle[e]})),Object.values(i).forEach((function(e){t.inheritStyle(e)}))}},{key:"create",value:function(e){var t=this,r=(e.attributes.class||"").split(" ");r=r.map((function(e){return a(e.trim())}));var i={};r.forEach((function(e){Object.assign(i,t.style[e]||{})}));for(var n={name:e.name,style:i},u={},l=0,c=Object.keys(e.attributes);l<c.length;l++){var h=c[l],o=e.attributes[h],b=a(h);u[b]=""===o||"true"===o||"false"!==o&&o}u.text=e.content,n.attributes=u;var f=new s(n);return e.children.forEach((function(e){var r=t.create(e);f.add(r)})),f}}]),r}();module.exports={Widget:u}; 
 			}); 
		define("components/wxml-to-canvas/xml-parser.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports=function(r){return r=(r=r.trim()).replace(/<!--[\s\S]*?-->/g,""),{declaration:t(),root:n()};function t(){if(u(/^<\?xml\s*/)){for(var r={attributes:{}};!i()&&!a("?>");){var t=e();if(!t)return r;r.attributes[t.name]=t.value}return u(/\?>\s*/),r}}function n(){var r=u(/^<([\w-:.]+)\s*/);if(r){for(var t,s={name:r[1],attributes:{},children:[]};!(i()||a(">")||a("?>")||a("/>"));){var f=e();if(!f)return s;s.attributes[f.name]=f.value}if(u(/^\s*\/>\s*/))return s;for(u(/\??>\s*/),s.content=function(){var r=u(/^([^<]*)/);return r?r[1]:""}();t=n();)s.children.push(t);return u(/^<\/[\w-:.]+>\s*/),s}}function e(){var r,t=u(/([\w:-]+)\s*=\s*("[^"]*"|'[^']*'|\w+)\s*/);if(t)return{name:t[1],value:(r=t[2],r.replace(/^['"]|['"]$/g,""))}}function u(t){var n=r.match(t);if(n)return r=r.slice(n[0].length),n}function i(){return 0==r.length}function a(t){return 0==r.indexOf(t)}}; 
 			}); 
		define("config/app.config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={request:{api_prefix:"https://work.weixin.qq.com/cgi-bin/mng/",max_try:3,app_type:4},setAppType:function(e){this.request.app_type=e},debug:!1}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var a=require("./api/data.js");module.exports={getData:a.getData,setData:a.setData}; 
 			}); 
		define("lib/conn/conn.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.conn=void 0;var e={};exports.conn=e;var r=!0,n=function(){return"["+o(new Date,"%Y-%M-%d %h:%m:%s",!0)+"]"},o=function(e,r,n){var o=e.getFullYear(),t=e.getMonth()+1,a=e.getDate(),c=e.getHours(),l=e.getMinutes(),s=e.getSeconds();return n&&(t=t<10?"0"+t:t,a=a<10?"0"+a:a,c=c<10?"0"+c:c,l=l<10?"0"+l:l,s=s<10?"0"+s:s),r=(r=r||"%Y-%M-%d %h:%m:%s").replace(/%Y/g,o).replace(/%M/g,t).replace(/%d/g,a).replace(/%h/g,c).replace(/%m/g,l).replace(/%s/g,s)};["log","info","warn","error","assert","dir","clear","profile","profileEnd"].forEach((function(o){e[o]=function(){var e="";r&&((e=arguments).length>0&&(e[0]=n()+JSON.stringify(e[0])),console[o].apply(console,e))}}),Function.prototype.bind),e.enableConsole=function(e){r=!!e};var t={conn:e};exports.default=t; 
 			}); 
		define("lib/request/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkLogin=exports.doLogin=exports.request=void 0;var e=require("../../config/app.config"),t=require("../storage/storage"),o=!1,n=[],r=e.request.max_try||3,s=e.request.app_type,i=function(e){var t=u();return Object.assign(e||{},{vid:t.vid,skey:t.skey,type:t.type})},a=function(e,t){var o;return 200===e.statusCode||(o=/^5\d+/g.test(e.statusCode)?"\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5":"\u8bf7\u786e\u4fdd\u7f51\u7edc\u901a\u7545\uff0c\u5e76\u91cd\u8bd5",t&&t.silent||wx.showModal({showCancel:!1,title:"\u7f51\u7edc\u5f02\u5e38",content:o,confirmText:"\u786e\u5b9a"}),!1)},c=function(e){return new Promise((function(t,o){u().skey||!0===e.ignore?t():o(new Error("empty session"))}))};exports.checkLogin=c;var u=function(){return t.getStorage("session",!1)||{}},d=function(o){var n=t.getStorage("freego",!1)||{};return new Promise((function(o,r){new Promise((function(e,t){wx.login({success:e,fail:t})})).then((function(i){console.info("codeInfo %o",i),wx.request({url:e.request.api_prefix+"xcx/login",method:"POST",dataType:"json",data:{type:s,code:i.code},header:{cookie:n.cookie||"","Content-Type":"application/x-www-form-urlencoded"},success:function(e){var n,i=e.data.data;console.log("login response: %o",i),a(e)&&i&&"skey"in i?(n={gid:i.gid,skey:i.skey,vid:i.vid,type:s,corpname:i.corp_name},t.setStorage("session",n,!1),o(e)):r(e)},fail:r})})).catch((function(e){wx.showModal({content:"\u767b\u5f55\u5931\u8d25",showCancel:!1})}))}))};exports.doLogin=d;exports.request=function(s){var u=t.getStorage("freego",!1)||{},l=function(t,c){s.success=function(e){console.log("request sucess callback:%o",e),a(e,s)?e.data&&e.data.result&&-3===e.data.result.errCode?(s.tryTimes=s.tryTimes||0,s.tryTimes++,s.tryTimes<r?o?n.push(s):(o=!0,n=[],d().then((function(){o=!1,s.data=i(s.data),wx.request(s),n.forEach((function(e,t){e.data=i(e.data),wx.request(e)}))})).catch((function(){o=!1}))):t({data:{retcode:-102,retmsg:"login abort"}})):t(e):c(e)},s.fail=function(e){c(e)},s.url=/^http/g.test(s.url)?s.url:e.request.api_prefix+s.url,s.data=i(s.data),s.method=s.method||"GET",s.header=Object.assign(s.header||{},{cookie:u.cookie||"","Content-Type":"application/json"}),console.log("request options:%o",s),wx.request(s)};return new Promise((function(e,t){c(s).then((function(){l(e,t)})).catch((function(){d().then((function(){l(e,t)})).catch((function(e){console.log("login error %o",e),wx.showModal({content:"\u767b\u5f55\u5931\u8d25",showCancel:!1})}))}))}))}; 
 			}); 
		define("lib/storage/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.flushCacheData=exports.clearStorage=exports.removeStorage=exports.getStorage=exports.setStorage=exports.initNsStorageByKey=exports.initNameSpace=void 0;var t=e(require("../conn/conn")),r="WEWORK_STORAGE_CACHE",a="",o={},n={};function l(){try{o=wx.getStorageSync(r)||{}}catch(e){o={}}}var i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default_ns",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;l();var r=a,i=o[r]||{};a="default_ns",o[e]?n=o[e]:(n=o[e]={},u());try{wx.setStorageSync("WEWORK_NS_KEY",a)}catch(e){}t&&t(r,i)};exports.initNameSpace=i;var s=function(e){var t,r=e.split(".");if(!n&&r.length>0)return"";t=n;for(var a=0;a<r.length-1;a++)void 0===t[r[a]]&&(t[r[a]]={}),t=t[r[a]];return t};exports.initNsStorageByKey=s;var g=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];if(r){var l=s(e),i=e.split(".");l[i[i.length-1]]=t,n&&u(a)}else o[e]=t,u(!0)};exports.setStorage=g;var c=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var r=s(e),a=e.split(".");return r[a[a.length-1]]}return o[e]};exports.getStorage=c;var v=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(t){var r=s(e),a=e.split(".");delete r[a[a.length-1]],u()}else delete n[e],u()};exports.removeStorage=v;var S=function(e){var r;try{e?(delete s(e)[(r=e.split("."))[r.length-1]],u()):(wx.clearStorageSync(),i(a))}catch(e){t.default.log(e)}};exports.clearStorage=S;var u=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];try{e?wx.setStorageSync(r,o):(wx.setStorage({key:r,data:o}),console.log("storage %o",o))}catch(e){S()}};exports.flushCacheData=u;try{a=wx.getStorageSync("WEWORK_NS_KEY")||""}catch(e){a=""}i(a||"default_ns");var p={initNameSpace:i,setStorage:g,getStorage:c,clearStorage:S,removeStorage:v,flushCacheData:u};exports.default=p; 
 			}); 
		define("lib/util/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.compareVersion=function(e,r){e=e.split("."),r=r.split(".");var t=Math.max(e.length,r.length);for(;e.length<t;)e.push("0");for(;r.length<t;)r.push("0");for(var n=0;n<t;n++){var s=parseInt(e[n]),o=parseInt(r[n]);if(s>o)return 1;if(s<o)return-1}return 0}; 
 			}); 
		define("miniprogram_npm/eventemitter3/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t,n=require("../../@babel/runtime/helpers/typeof");module.exports=(e={},t=function(t,r){if(!e[t])return require(r);if(!e[t].status){var o=e[t].m;o._exports=o._tempexports;var s=Object.getOwnPropertyDescriptor(o,"exports");s&&s.configurable&&Object.defineProperty(o,"exports",{set:function(e){"object"===n(e)&&e!==o._exports&&(o._exports.__proto__=e.__proto__,Object.keys(e).forEach((function(t){o._exports[t]=e[t]}))),o._tempexports=e},get:function(){return o._tempexports}}),e[t].status=1,e[t].func(e[t].req,o,o.exports)}return e[t].m.exports},function(t,n,r){e[t]={status:0,func:n,req:r,m:{exports:{},_tempexports:{}}}}(1623394663280,(function(e,t,n){var r=Object.prototype.hasOwnProperty,o="~";function s(){}function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function c(e,t,n,r,s){if("function"!=typeof n)throw new TypeError("The listener must be a function");var c=new i(n,r||e,s),f=o?o+t:t;return e._events[f]?e._events[f].fn?e._events[f]=[e._events[f],c]:e._events[f].push(c):(e._events[f]=c,e._eventsCount++),e}function f(e,t){0==--e._eventsCount?e._events=new s:delete e._events[t]}function u(){this._events=new s,this._eventsCount=0}Object.create&&(s.prototype=Object.create(null),(new s).__proto__||(o=!1)),u.prototype.eventNames=function(){var e,t,n=[];if(0===this._eventsCount)return n;for(t in e=this._events)r.call(e,t)&&n.push(o?t.slice(1):t);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(e)):n},u.prototype.listeners=function(e){var t=o?o+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var r=0,s=n.length,i=new Array(s);r<s;r++)i[r]=n[r].fn;return i},u.prototype.listenerCount=function(e){var t=o?o+e:e,n=this._events[t];return n?n.fn?1:n.length:0},u.prototype.emit=function(e,t,n,r,s,i){var c=o?o+e:e;if(!this._events[c])return!1;var f,u,p=this._events[c],a=arguments.length;if(p.fn){switch(p.once&&this.removeListener(e,p.fn,void 0,!0),a){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,t),!0;case 3:return p.fn.call(p.context,t,n),!0;case 4:return p.fn.call(p.context,t,n,r),!0;case 5:return p.fn.call(p.context,t,n,r,s),!0;case 6:return p.fn.call(p.context,t,n,r,s,i),!0}for(u=1,f=new Array(a-1);u<a;u++)f[u-1]=arguments[u];p.fn.apply(p.context,f)}else{var v,l=p.length;for(u=0;u<l;u++)switch(p[u].once&&this.removeListener(e,p[u].fn,void 0,!0),a){case 1:p[u].fn.call(p[u].context);break;case 2:p[u].fn.call(p[u].context,t);break;case 3:p[u].fn.call(p[u].context,t,n);break;case 4:p[u].fn.call(p[u].context,t,n,r);break;default:if(!f)for(v=1,f=new Array(a-1);v<a;v++)f[v-1]=arguments[v];p[u].fn.apply(p[u].context,f)}}return!0},u.prototype.on=function(e,t,n){return c(this,e,t,n,!1)},u.prototype.once=function(e,t,n){return c(this,e,t,n,!0)},u.prototype.removeListener=function(e,t,n,r){var s=o?o+e:e;if(!this._events[s])return this;if(!t)return f(this,s),this;var i=this._events[s];if(i.fn)i.fn!==t||r&&!i.once||n&&i.context!==n||f(this,s);else{for(var c=0,u=[],p=i.length;c<p;c++)(i[c].fn!==t||r&&!i[c].once||n&&i[c].context!==n)&&u.push(i[c]);u.length?this._events[s]=1===u.length?u[0]:u:f(this,s)}return this},u.prototype.removeAllListeners=function(e){var t;return e?(t=o?o+e:e,this._events[t]&&f(this,t)):(this._events=new s,this._eventsCount=0),this},u.prototype.off=u.prototype.removeListener,u.prototype.addListener=u.prototype.on,u.prefixed=o,u.EventEmitter=u,void 0!==t&&(t.exports=u)}),(function(e){return t({}[e],e)})),t(1623394663280)); 
 			}); 
		define("miniprogram_npm/widget-ui/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t,e,o=require("../../@babel/runtime/helpers/typeof");module.exports=(t={},e=function(e,r){if(!t[e])return require(r);if(!t[e].status){var i=t[e].m;i._exports=i._tempexports;var l=Object.getOwnPropertyDescriptor(i,"exports");l&&l.configurable&&Object.defineProperty(i,"exports",{set:function(t){"object"===o(t)&&t!==i._exports&&(i._exports.__proto__=t.__proto__,Object.keys(t).forEach((function(e){i._exports[e]=t[e]}))),i._tempexports=t},get:function(){return i._tempexports}}),t[e].status=1,t[e].func(t[e].req,i,i.exports)}return t[e].m.exports},function(e,o,r){t[e]={status:0,func:o,req:r,m:{exports:{},_tempexports:{}}}}(1623394663281,(function(t,e,r){!function(t,i){if("object"==o(r)&&"object"==o(e))e.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var l=i();for(var n in l)("object"==o(r)?r:t)[n]=l[n]}}(this,(function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==o(t)&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)r.d(i,l,function(e){return t[e]}.bind(null,l));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,o){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(o(1)),l=o(2),n=0,a=function(){function t(e){var o=this;void 0===e&&(e={}),this.parent=null,this.id=t.uuid(),this.style={},this.computedStyle={},this.lastComputedStyle={},this.children={},this.layoutBox={left:0,top:0,width:0,height:0},e=Object.assign(l.getDefaultStyle(),e),this.computedStyle=Object.assign(l.getDefaultStyle(),e),this.lastComputedStyle=Object.assign(l.getDefaultStyle(),e),Object.keys(e).forEach((function(t){Object.defineProperty(o.style,t,{configurable:!0,enumerable:!0,get:function(){return e[t]},set:function(r){r!==e[t]&&void 0!==r&&(o.lastComputedStyle=o.computedStyle[t],e[t]=r,o.computedStyle[t]=r,l.scalableStyles.includes(t)&&o.style.scale&&(o.computedStyle[t]=r*o.style.scale),"scale"===t&&l.scalableStyles.forEach((function(t){e[t]&&(o.computedStyle[t]=e[t]*r)})),"hidden"===t&&(r?l.layoutAffectedStyles.forEach((function(t){o.computedStyle[t]=0})):l.layoutAffectedStyles.forEach((function(t){o.computedStyle[t]=o.lastComputedStyle[t]}))))}})})),this.style.scale&&l.scalableStyles.forEach((function(t){if(o.style[t]){var e=o.style[t]*o.style.scale;o.computedStyle[t]=e}})),e.hidden&&l.layoutAffectedStyles.forEach((function(t){o.computedStyle[t]=0}))}return t.uuid=function(){return n++},t.prototype.getAbsolutePosition=function(t){if(!t)return this.getAbsolutePosition(this);if(!t.parent)return{left:0,top:0};var e=this.getAbsolutePosition(t.parent),o=e.left,r=e.top;return{left:o+t.layoutBox.left,top:r+t.layoutBox.top}},t.prototype.add=function(t){t.parent=this,this.children[t.id]=t},t.prototype.remove=function(t){var e=this;t?this.children[t.id]&&(t.remove(),delete this.children[t.id]):Object.keys(this.children).forEach((function(t){e.children[t].remove(),delete e.children[t]}))},t.prototype.getNodeTree=function(){var t=this;return{id:this.id,style:this.computedStyle,children:Object.keys(this.children).map((function(e){return t.children[e].getNodeTree()}))}},t.prototype.applyLayout=function(t){var e=this;["left","top","width","height"].forEach((function(o){t.layout&&"number"==typeof t.layout[o]&&(e.layoutBox[o]=t.layout[o],!e.parent||"left"!==o&&"top"!==o||(e.layoutBox[o]+=e.parent.layoutBox[o]))})),t.children.forEach((function(t){e.children[t.id].applyLayout(t)}))},t.prototype.layout=function(){var t=this.getNodeTree();i.default(t),this.applyLayout(t)},t}();e.default=a},function(t,e,o){o.r(e);var r=function(){var t,e="inherit",o="row",r="row-reverse",i="column",l="column-reverse",n="flex-start",a="center",u="flex-start",d="center",s="flex-end",y="stretch",c="relative",f="absolute",h={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},p={row:"right","row-reverse":"left",column:"bottom","column-reverse":"top"},g={row:"left","row-reverse":"right",column:"top","column-reverse":"bottom"},v={row:"width","row-reverse":"width",column:"height","column-reverse":"height"};function m(t){return void 0===t}function b(t){return t===o||t===r}function x(t,e){if(void 0!==t.style.marginStart&&b(e))return t.style.marginStart;var o=null;switch(e){case"row":o=t.style.marginLeft;break;case"row-reverse":o=t.style.marginRight;break;case"column":o=t.style.marginTop;break;case"column-reverse":o=t.style.marginBottom}return void 0!==o?o:void 0!==t.style.margin?t.style.margin:0}function w(t,e){if(void 0!==t.style.marginEnd&&b(e))return t.style.marginEnd;var o=null;switch(e){case"row":o=t.style.marginRight;break;case"row-reverse":o=t.style.marginLeft;break;case"column":o=t.style.marginBottom;break;case"column-reverse":o=t.style.marginTop}return null!=o?o:void 0!==t.style.margin?t.style.margin:0}function S(t,e){if(void 0!==t.style.borderStartWidth&&t.style.borderStartWidth>=0&&b(e))return t.style.borderStartWidth;var o=null;switch(e){case"row":o=t.style.borderLeftWidth;break;case"row-reverse":o=t.style.borderRightWidth;break;case"column":o=t.style.borderTopWidth;break;case"column-reverse":o=t.style.borderBottomWidth}return null!=o&&o>=0?o:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function W(t,e){if(void 0!==t.style.borderEndWidth&&t.style.borderEndWidth>=0&&b(e))return t.style.borderEndWidth;var o=null;switch(e){case"row":o=t.style.borderRightWidth;break;case"row-reverse":o=t.style.borderLeftWidth;break;case"column":o=t.style.borderBottomWidth;break;case"column-reverse":o=t.style.borderTopWidth}return null!=o&&o>=0?o:void 0!==t.style.borderWidth&&t.style.borderWidth>=0?t.style.borderWidth:0}function L(t,e){return function(t,e){if(void 0!==t.style.paddingStart&&t.style.paddingStart>=0&&b(e))return t.style.paddingStart;var o=null;switch(e){case"row":o=t.style.paddingLeft;break;case"row-reverse":o=t.style.paddingRight;break;case"column":o=t.style.paddingTop;break;case"column-reverse":o=t.style.paddingBottom}return null!=o&&o>=0?o:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}(t,e)+S(t,e)}function _(t,e){return function(t,e){if(void 0!==t.style.paddingEnd&&t.style.paddingEnd>=0&&b(e))return t.style.paddingEnd;var o=null;switch(e){case"row":o=t.style.paddingRight;break;case"row-reverse":o=t.style.paddingLeft;break;case"column":o=t.style.paddingBottom;break;case"column-reverse":o=t.style.paddingTop}return null!=o&&o>=0?o:void 0!==t.style.padding&&t.style.padding>=0?t.style.padding:0}(t,e)+W(t,e)}function j(t,e){return S(t,e)+W(t,e)}function k(t,e){return x(t,e)+w(t,e)}function B(t,e){return L(t,e)+_(t,e)}function E(t,e){return e.style.alignSelf?e.style.alignSelf:t.style.alignItems?t.style.alignItems:"stretch"}function O(t,e){if("rtl"===e){if(t===o)return r;if(t===r)return o}return t}function C(t){return t.style.position?t.style.position:"relative"}function T(t){return C(t)===c&&t.style.flex>0}function P(t,e){return t.layout[v[e]]+k(t,e)}function R(t,e){return void 0!==t.style[v[e]]&&t.style[v[e]]>=0}function A(t,e){return void 0!==t.style[e]}function D(t,e){return void 0!==t.style[e]?t.style[e]:0}function H(t,e,o){var r={row:t.style.minWidth,"row-reverse":t.style.minWidth,column:t.style.minHeight,"column-reverse":t.style.minHeight}[e],i={row:t.style.maxWidth,"row-reverse":t.style.maxWidth,column:t.style.maxHeight,"column-reverse":t.style.maxHeight}[e],l=o;return void 0!==i&&i>=0&&l>i&&(l=i),void 0!==r&&r>=0&&l<r&&(l=r),l}function M(t,e){return t>e?t:e}function q(t,e){void 0===t.layout[v[e]]&&R(t,e)&&(t.layout[v[e]]=M(H(t,e,t.style[v[e]]),B(t,e)))}function I(t,e,o){e.layout[p[o]]=t.layout[v[o]]-e.layout[v[o]]-e.layout[g[o]]}function N(t,e){return void 0!==t.style[h[e]]?D(t,h[e]):-D(t,p[e])}function F(W,F,U){var G=function(t,o){var r;return(r=t.style.direction?t.style.direction:e)===e&&(r=void 0===o?"ltr":o),r}(W,U),J=O(function(t){return t.style.flexDirection?t.style.flexDirection:i}(W),G),K=function(t,e){return function(t){return t===i||t===l}(t)?O(o,e):i}(J,G),Q=O(o,G);q(W,J),q(W,K),W.layout.direction=G,W.layout[h[J]]+=x(W,J)+N(W,J),W.layout[p[J]]+=w(W,J)+N(W,J),W.layout[h[K]]+=x(W,K)+N(W,K),W.layout[p[K]]+=w(W,K)+N(W,K);var V=W.children.length,X=B(W,Q);if(function(t){return void 0!==t.style.measure}(W)){var Y=!m(W.layout[v[Q]]),Z=t;Z=R(W,Q)?W.style.width:Y?W.layout[v[Q]]:F-k(W,Q),Z-=X;var $=!R(W,Q)&&!Y,tt=!R(W,i)&&m(W.layout[v[i]]);if($||tt){var et=W.style.measure(Z);$&&(W.layout.width=et.width+X),tt&&(W.layout.height=et.height+B(W,i))}if(0===V)return}var ot,rt,it,lt,nt=function(t){return"wrap"===t.style.flexWrap}(W),at=function(t){return t.style.justifyContent?t.style.justifyContent:"flex-start"}(W),ut=L(W,J),dt=L(W,K),st=B(W,J),yt=B(W,K),ct=!m(W.layout[v[J]]),ft=!m(W.layout[v[K]]),ht=b(J),pt=null,gt=null,vt=t;ct&&(vt=W.layout[v[J]]-st);for(var mt=0,bt=0,xt=0,wt=0,St=0,Wt=0;bt<V;){var Lt,_t=0,jt=0,kt=0,Bt=0,Et=ct&&at===n||!ct&&at!==a,Ot=Et?V:mt,Ct=!0,Tt=V,Pt=null,Rt=null,At=ut,Dt=0;for(ot=mt;ot<V;++ot){if((it=W.children[ot]).lineIndex=Wt,it.nextAbsoluteChild=null,it.nextFlexChild=null,(Gt=E(W,it))===y&&C(it)===c&&ft&&!R(it,K))it.layout[v[K]]=M(H(it,K,W.layout[v[K]]-yt-k(it,K)),B(it,K));else if(C(it)===f)for(null===pt&&(pt=it),null!==gt&&(gt.nextAbsoluteChild=it),gt=it,rt=0;rt<2;rt++)lt=0!==rt?o:i,!m(W.layout[v[lt]])&&!R(it,lt)&&A(it,h[lt])&&A(it,p[lt])&&(it.layout[v[lt]]=M(H(it,lt,W.layout[v[lt]]-B(W,lt)-k(it,lt)-D(it,h[lt])-D(it,p[lt])),B(it,lt)));var Ht=0;if(ct&&T(it)?(jt++,kt+=it.style.flex,null===Pt&&(Pt=it),null!==Rt&&(Rt.nextFlexChild=it),Rt=it,Ht=B(it,J)+k(it,J)):(Lt=t,ht||(Lt=R(W,Q)?W.layout[v[Q]]-X:F-k(W,Q)-X),0===xt&&z(it,Lt,G),C(it)===c&&(Bt++,Ht=P(it,J))),nt&&ct&&_t+Ht>vt&&ot!==mt){Bt--,xt=1;break}Et&&(C(it)!==c||T(it))&&(Et=!1,Ot=ot),Ct&&(C(it)!==c||Gt!==y&&Gt!==u||m(it.layout[v[K]]))&&(Ct=!1,Tt=ot),Et&&(it.layout[g[J]]+=At,ct&&I(W,it,J),At+=P(it,J),Dt=M(Dt,H(it,K,P(it,K)))),Ct&&(it.layout[g[K]]+=wt+dt,ft&&I(W,it,K)),xt=0,_t+=Ht,bt=ot+1}var Mt=0,qt=0,It=0;if(It=ct?vt-_t:M(_t,0)-_t,0!==jt){var Nt,Ft,zt=It/kt;for(Rt=Pt;null!==Rt;)(Nt=zt*Rt.style.flex+B(Rt,J))!==(Ft=H(Rt,J,Nt))&&(It-=Ft,kt-=Rt.style.flex),Rt=Rt.nextFlexChild;for((zt=It/kt)<0&&(zt=0),Rt=Pt;null!==Rt;)Rt.layout[v[J]]=H(Rt,J,zt*Rt.style.flex+B(Rt,J)),Lt=t,R(W,Q)?Lt=W.layout[v[Q]]-X:ht||(Lt=F-k(W,Q)-X),z(Rt,Lt,G),it=Rt,Rt=Rt.nextFlexChild,it.nextFlexChild=null}else at!==n&&(at===a?Mt=It/2:"flex-end"===at?Mt=It:"space-between"===at?(It=M(It,0),qt=jt+Bt-1!=0?It/(jt+Bt-1):0):"space-around"===at&&(Mt=(qt=It/(jt+Bt))/2));for(At+=Mt,ot=Ot;ot<bt;++ot)C(it=W.children[ot])===f&&A(it,h[J])?it.layout[g[J]]=D(it,h[J])+S(W,J)+x(it,J):(it.layout[g[J]]+=At,ct&&I(W,it,J),C(it)===c&&(At+=qt+P(it,J),Dt=M(Dt,H(it,K,P(it,K)))));var Ut=W.layout[v[K]];for(ft||(Ut=M(H(W,K,Dt+yt),yt)),ot=Tt;ot<bt;++ot)if(C(it=W.children[ot])===f&&A(it,h[K]))it.layout[g[K]]=D(it,h[K])+S(W,K)+x(it,K);else{var Gt,Jt=dt;if(C(it)===c)if((Gt=E(W,it))===y)m(it.layout[v[K]])&&(it.layout[v[K]]=M(H(it,K,Ut-yt-k(it,K)),B(it,K)));else if(Gt!==u){var Kt=Ut-yt-P(it,K);Jt+=Gt===d?Kt/2:Kt}it.layout[g[K]]+=wt+Jt,ft&&I(W,it,K)}wt+=Dt,St=M(St,At),Wt+=1,mt=bt}if(Wt>1&&ft){var Qt=W.layout[v[K]]-yt,Vt=Qt-wt,Xt=0,Yt=dt,Zt=function(t){return t.style.alignContent?t.style.alignContent:"flex-start"}(W);Zt===s?Yt+=Vt:Zt===d?Yt+=Vt/2:Zt===y&&Qt>wt&&(Xt=Vt/Wt);var $t=0;for(ot=0;ot<Wt;++ot){var te=$t,ee=0;for(rt=te;rt<V;++rt)if(C(it=W.children[rt])===c){if(it.lineIndex!==ot)break;m(it.layout[v[K]])||(ee=M(ee,it.layout[v[K]]+k(it,K)))}for($t=rt,ee+=Xt,rt=te;rt<$t;++rt)if(C(it=W.children[rt])===c){var oe=E(W,it);if(oe===u)it.layout[g[K]]=Yt+x(it,K);else if(oe===s)it.layout[g[K]]=Yt+ee-w(it,K)-it.layout[v[K]];else if(oe===d){var re=it.layout[v[K]];it.layout[g[K]]=Yt+(ee-re)/2}else oe===y&&(it.layout[g[K]]=Yt+x(it,K))}Yt+=ee}}var ie=!1,le=!1;if(ct||(W.layout[v[J]]=M(H(W,J,St+_(W,J)),st),J!==r&&J!==l||(ie=!0)),ft||(W.layout[v[K]]=M(H(W,K,wt+yt),yt),K!==r&&K!==l||(le=!0)),ie||le)for(ot=0;ot<V;++ot)it=W.children[ot],ie&&I(W,it,J),le&&I(W,it,K);for(gt=pt;null!==gt;){for(rt=0;rt<2;rt++)lt=0!==rt?o:i,!m(W.layout[v[lt]])&&!R(gt,lt)&&A(gt,h[lt])&&A(gt,p[lt])&&(gt.layout[v[lt]]=M(H(gt,lt,W.layout[v[lt]]-j(W,lt)-k(gt,lt)-D(gt,h[lt])-D(gt,p[lt])),B(gt,lt))),A(gt,p[lt])&&!A(gt,h[lt])&&(gt.layout[h[lt]]=W.layout[v[lt]]-gt.layout[v[lt]]-D(gt,p[lt]));it=gt,gt=gt.nextAbsoluteChild,it.nextAbsoluteChild=null}}function z(t,e,o){t.shouldUpdate=!0;var r=t.style.direction||"ltr";!t.isDirty&&t.lastLayout&&t.lastLayout.requestedHeight===t.layout.height&&t.lastLayout.requestedWidth===t.layout.width&&t.lastLayout.parentMaxWidth===e&&t.lastLayout.direction===r?(t.layout.width=t.lastLayout.width,t.layout.height=t.lastLayout.height,t.layout.top=t.lastLayout.top,t.layout.left=t.lastLayout.left):(t.lastLayout||(t.lastLayout={}),t.lastLayout.requestedWidth=t.layout.width,t.lastLayout.requestedHeight=t.layout.height,t.lastLayout.parentMaxWidth=e,t.lastLayout.direction=r,t.children.forEach((function(t){t.layout.width=void 0,t.layout.height=void 0,t.layout.top=0,t.layout.left=0})),F(t,e,o),t.lastLayout.width=t.layout.width,t.lastLayout.height=t.layout.height,t.lastLayout.top=t.layout.top,t.lastLayout.left=t.layout.left)}return{layoutNodeImpl:F,computeLayout:z,fillNodes:function t(e){return e.layout&&!e.isDirty||(e.layout={width:void 0,height:void 0,top:0,left:0,right:0,bottom:0}),e.style||(e.style={}),e.children||(e.children=[]),e.children.forEach(t),e}}}();e.default=function(t){r.fillNodes(t),r.computeLayout(t)}},function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0}),e.textStyles=["color","fontSize","textAlign","fontWeight","lineHeight","lineBreak"],e.scalableStyles=["left","top","right","bottom","width","height","margin","marginLeft","marginRight","marginTop","marginBottom","padding","paddingLeft","paddingRight","paddingTop","paddingBottom","borderWidth","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],e.layoutAffectedStyles=["margin","marginTop","marginBottom","marginLeft","marginRight","padding","paddingTop","paddingBottom","paddingLeft","paddingRight","width","height"],e.getDefaultStyle=function(){return{left:void 0,top:void 0,right:void 0,bottom:void 0,width:void 0,height:void 0,maxWidth:void 0,maxHeight:void 0,minWidth:void 0,minHeight:void 0,margin:void 0,marginLeft:void 0,marginRight:void 0,marginTop:void 0,marginBottom:void 0,padding:void 0,paddingLeft:void 0,paddingRight:void 0,paddingTop:void 0,paddingBottom:void 0,borderWidth:void 0,flexDirection:void 0,justifyContent:void 0,alignItems:void 0,alignSelf:void 0,flex:void 0,flexWrap:void 0,position:void 0,hidden:!1,scale:1}}}]).default}))}),(function(t){return e({}[t],t)})),e(1623394663281)); 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wx104a1a20c3f81ec2/components/cell/cell.js';global.__wxRouteBegin = true; 	define("components/cell/cell.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("../../@babel/runtime/helpers/objectSpread2"),e=require("./wxmlTocanvasData.js"),o=require("../../lib/util/index"),n=require("../../lib/request/request"),a=require("../../lib/storage/storage"),i=["\u8054\u7cfb\u6211","\u7acb\u5373\u8054\u7cfb","\u54a8\u8be2\u670d\u52a1","\u5728\u7ebf\u54a8\u8be2","\u8054\u7cfb\u5ba2\u670d"],r=["\u54a8\u8be2\u670d\u52a1","\u5728\u7ebf\u54a8\u8be2","\u8054\u7cfb\u5ba2\u670d"],s=["\u6709\u4ec0\u4e48\u95ee\u9898\u53ef\u4ee5\u8054\u7cfb\u6211\u54a8\u8be2","\u8054\u7cfb\u670d\u52a1\u4eba\u5458\u54a8\u8be2","\u83b7\u53d6\u670d\u52a1\u4eba\u5458\u8054\u7cfb\u65b9\u5f0f","\u8054\u7cfb\u5ba2\u670d\u54a8\u8be2\u66f4\u591a\u95ee\u9898"],c={avatorStyle:function(t){return(-1==["rect","circle"].indexOf(t)?"circle":t).toUpperCase()},isMask:function(t){return-1==[0,1].indexOf(t)?0:t},contactText:function(t){return r[t>=0&&t<r.length?t:0]},buttonText:function(t){return i[t>=0&&t<i.length?t:0]},serviceText:function(t){return s[t>=0&&t<s.length?t:0]},buttonStyle:function(t){return(-1==["light","primary"].indexOf(t)?"primary":t).toUpperCase()},buttonSize:function(t){return(-1==["small"].indexOf(t)?"small":t).toUpperCase()},paddingStyle:function(t){return t=isNaN(t)?0:parseInt(t),0==(t=Math.max(0,t))?0:t+"px"},bubbleColor:function(t){return/^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(t)?"#"+t:"#4790EE"},iconStyle:function(t){return(-1==["light","primary","avator"].indexOf(t)?"avator":t).toUpperCase()},blockStyle:function(t){return(-1==["bubble","button"].indexOf(t)?"bubble":t).toUpperCase()},styleType:function(t){return 1==t||2==t||3==t?t:1},pluginType:function(t){return 0==t||2==t?0:1==t?1:0}},d={ROW:{avatorStyle:c.avatorStyle,isMask:c.isMask,contactText:c.contactText,buttonText:c.buttonText,buttonStyle:c.buttonStyle,buttonSize:c.buttonSize,paddingStyle:c.paddingStyle},BLOCK:{BUBBLE:{bubbleColor:c.bubbleColor},BUTTON:{buttonStyle:c.buttonStyle,buttonText:c.buttonText,buttonSize:c.buttonSize}},MESSAGE:{iconStyle:c.iconStyle,contactText:c.contactText,serviceText:c.serviceText}},u={ROW:{iconStyle:c.iconStyle,contactText:c.contactText,paddingStyle:c.paddingStyle},BLOCK:{BUBBLE:{bubbleColor:c.bubbleColor},BUTTON:{buttonStyle:c.buttonStyle,buttonText:c.buttonText,buttonSize:c.buttonSize}}},p={},l=wx.getSystemInfoSync().platform;Component({data:{isReady:!1,isNeedAuth:!1,args:{withCredentials:!0,lang:"zh_CN"},render:{},hackClass:"",postInit:!1,postWidth:300,postHeight:500,cardHeight:0,postImg:"",postGenerating:!1,descDom:"",descWidths:{},isPC:"windows"===l||"mac"===l},properties:{reqType:{type:Number,value:0,observer:function(t,e,o){this.queryPluginConfig()}},vcode:{type:String,value:"",observer:function(t,e,o){this.queryPluginConfig()}},plugid:{type:String,value:"",observer:function(t,e,o){this.queryPluginConfig()}},avatorStyle:{type:String},isMask:{type:Number},contactText:{type:Number},buttonText:{type:Number},buttonStyle:{type:String},buttonSize:{type:Number},paddingStyle:{type:Number},styleType:{type:Number},serviceText:{type:Number},plugType:{type:Number},blockStyle:{type:String},bubbleColor:{type:String},iconStyle:{type:String}},attached:function(){var t=this;a.initNameSpace(),a.setStorage("freego",{cookie:""},!1),wx.login?wx.login({success:function(e){console.log("success %o",e),t.setData({isNeedAuth:!1})},fail:function(e){t.setData({isNeedAuth:!0})}}):(t.notifyToHostApp({errcode:-3010}),t.setData({isNeedAuth:!0})),this.queryPluginConfig()},methods:{loginSuccess:function(t){this.checkWxVersion()?this.getPreviewQRCode(t.detail,"qrcode_xcxplug"):this.sendMsgToWx(t.detail,"contactplugin/sendmsgtowx"),this.report("sample_authorize_yes")},loginFail:function(t){this.notifyToHostApp({errcode:-3004}),this.report("sample_authorize_no")},onBindTap:function(){this.notifyToHostApp({state:1})},statFunctionalPage:function(){this.report(0==p.type?"plug_single_miniapp_use":"plug_multi_miniapp_use",79505335)},makeAuthReq:function(t){var e=t.forceMsg,o=this;wx.login({success:function(t){wx.getUserInfo({withCredentials:!0,success:function(n){var a={code:t.code,encryptedData:n.encryptedData,iv:n.iv};!e&&o.checkWxVersion()?o.getPreviewQRCode(a,"qrcode_xcxplug"):o.sendMsgToWx(a,"contactplugin/sendmsgtowx")},fail:function(){o.notifyToHostApp({errcode:-3004})}})},fail:function(){o.notifyToHostApp({errcode:-3004})}}),this.report(0==p.type?"plug_single_miniapp_use":"plug_multi_miniapp_use",79505335)},getRenderConfigByType:function(t,e){var o=0==t?d:u,n="",a=o.ROW;2==e?a=o.BLOCK:3==e&&0==t&&(a=o.MESSAGE),2==e&&(a=a[n=c.blockStyle(this.data.blockStyle)]);var i={};for(var r in a)a.hasOwnProperty(r)&&(i[r]=a[r](this.data[r]));return i.plugType=0==t?"SINGLE":"MULTI",i.styleType=1==e?"ROW":2==e?"BLOCK":"MESSAGE",i.blockStyle=n,i},queryPluginConfig:function(){var t=this;""==t.data.vcode&&""==t.data.plugid||n.request({ignore:!0,method:"POST",url:"contactplugin/queryconfig",data:{req_type:t.data.reqType,vcode:t.data.vcode,plugid:t.data.plugid}}).then((function(e){e.data&&e.data.data?(p=e.data.data,t.computeRenderData()):t.notifyToHostApp({errcode:-3002})}))},computeRenderData:function(){var t=this.data.plugType?this.data.plugType:c.pluginType(p.type),e=this.data.styleType?this.data.styleType:c.styleType(p.style),o=this.getRenderConfigByType(t,e);o.avatorUrl=p.headurl||"../../assets/people_icon_big.png",o.nickName=p.name||"",console.log("%o",o),this.setData({render:o,isReady:!0})},checkWxVersion:function(){var t=wx.getSystemInfoSync(),e=t.version,n=t.platform;return"wxwork"!==t.environment&&("ios"==n&&(0,o.compareVersion)(e,"8.0.6")>=0||"android"==n&&(0,o.compareVersion)(e,"8.0.3")>=0)},getPreviewQRCode:function(t,e){var o=this;this.data.postImg?wx.previewImage({urls:[this.data.postImg]}):this.data.postGenerating?wx.showToast({title:"\u4e8c\u7ef4\u7801\u751f\u6210\u4e2d\uff0c\u8bf7\u7a0d\u7b49",icon:"none"}):(this.setData({postGenerating:!0}),wx.showLoading({title:"\u52a0\u8f7d\u4e2d"}),this.sendReqToSvr(t,e,1,(function(t){console.log(t),t.headurl||(t.headurl="https://wwcdn.weixin.qq.com/node/wework/images/people-default-avatar.7a88fbdae5.png"),o.getPost(t)})))},sendMsgToWx:function(t,e){this.sendReqToSvr(t,e,0)},sendReqToSvr:function(t,e,o,a){var i=this;this.triggerEvent("startmessage",{}),n.request({ignore:!0,method:"POST",url:e,data:{req_type:i.data.reqType,vcode:i.data.vcode,plugid:i.data.plugid,code:t.code,iv:t.iv,encryptedData:t.encryptedData}}).then((function(t){t.data&&t.data.data&&"{}"!=JSON.stringify(t.data.data)?1==t.data.data.type?0==o?i.notifyToHostApp({errcode:-3006,name:t.data.data.name,headurl:t.data.data.headurl,notifytype:o}):a&&a(t.data.data):2==t.data.data.type?i.notifyToHostApp({errcode:-3007}):0==o?i.notifyToHostApp({errcode:0,name:t.data.data.name,headurl:t.data.data.headurl,notifytype:o}):a&&a(t.data.data):t.data&&t.data.result&&"-20116"==t.data.result.errCode?i.notifyToHostApp({errcode:-3008}):i.notifyToHostApp({errcode:-3005})})).catch((function(t){i.setData({postGenerating:!1}),wx.hideLoading()}))},notifyToHostApp:function(t){this.triggerEvent("completemessage",t)},report:function(t,e){var o="https://work.weixin.qq.com/wework_admin/report?r="+Math.random()+"&q=";o+=encodeURIComponent('st:sgkvuin_report={"kv":'+(e||79505334)+',"key":"'+t+'","id":'+ +new Date+"}"),wx.request({url:o})},logkvReport:function(t,e){var o="https://work.weixin.qq.com/wework_admin/report?r="+Math.random()+"&q=";o+=encodeURIComponent('st:logkv_report={"kv": "'.concat(t,'", "value": "').concat(e||1,'"}'))+"&_t=".concat(+new Date),console.log(o),wx.request({url:o})},logkvAutoReport:function(t,e){var o="https://work.weixin.qq.com/wework_admin/report?r="+Math.random()+"&q=";o+=encodeURIComponent('st:logkvauto_report={"kv": "'.concat(t,'", "key": "').concat(e,'"}'))+"&_t=".concat(+new Date),console.log(o),wx.request({url:o})},initPostData:function(t){var e=wx.getSystemInfoSync(),o=e.screenWidth,n=(e.screenHeight,this.selectComponent(".widget").ctx),a="\u4f60\u597d\uff0c\u6211\u662f\u6765\u81ea".concat(t.corpname,"\u7684").concat(t.name,"\uff0c\u6dfb\u52a0\u6211\u7684\u4f01\u4e1a\u5fae\u4fe1\u4e0e\u6211\u8054\u7cfb\u5427\u3002"),i=o-96-24,r=this.drawContent(n,a,i),s="",c={};console.log(r),r.forEach((function(t,e){var o='<text class="desc-text desc-text'.concat(e,'">').concat(t.text,"</text>").concat(e===r.length?"":"\n");c["descText".concat(e)]={width:t.width,marginLeft:0!==e?20:0},s+=o}));var d=548+22*(r.length-1),u=d+22+24+68;this.setData({descDom:s,descWidths:c,postWidth:o,postHeight:u,cardHeight:d,postInit:!0}),console.log("init post done")},drawContent:function(t,e,o){t.font="15px sans-serif";var n=e.split("\n"),a=[];return n.forEach((function(e){var n=0,i=0;""==e?a.push(""):e.split("").forEach((function(r,s){(n+=t.measureText(r).width)>o&&(a.push({text:e.slice(i,s),width:n-t.measureText(r).width}),n=t.measureText(r).width,i=s),s==e.length-1&&a.push({text:e.slice(i),width:n})}))})),a},getPost:function(t){var e=wx.getSystemInfoSync().pixelRatio;this.data.postInit||this.initPostData(t),this.widget=this.selectComponent(".widget"),this.widget.ctx&&this.widget.canvas?(this.widget.ctx.scale(1,1),this.widget.canvas.height=this.data.postHeight*e,this.widget.canvas.width=this.data.postWidth*e,console.log(this.widget.canvas.height,this.widget.canvas.width),this.widget.ctx.scale(e,e),this.widget.dpr=e,this.getPostCanvas(t)):this.postErrHandle(!0)},getPostCanvas:function(o){var n=this;this.widget=this.selectComponent(".widget");var a=(0,e.getPostWxml)(t(t({},this.data),o)),i=(0,e.getPostStyle)(this.data);this.widget.renderToCanvas({wxml:a,style:i}).then((function(t){n.container=t,n.extraImage(o)})).catch((function(t){console.log(t),n.postErrHandle()}))},extraImage:function(t){var e=this;this.widget.canvasToTempFilePath().then((function(o){wx.hideLoading(),wx.previewImage({urls:[o.tempFilePath]}),e.setData({postImg:o.tempFilePath,postGenerating:!1}),e.notifyToHostApp({errcode:1==t.type?-3006:0,name:t.name,headurl:t.headurl,notifytype:1})})).catch((function(t){console.log(t),e.postErrHandle()}))},postErrHandle:function(t){this.makeAuthReq({forceMsg:!0}),wx.hideLoading(),this.setData({postGenerating:!1}),t?this.logkvAutoReport(49591,"contact|postfail|versionlow"):this.logkvAutoReport(49591,"contact|postfail")}}}); 
 			}); 	require("components/cell/cell.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wx104a1a20c3f81ec2/components/wxml-to-canvas/index.js';global.__wxRouteBegin = true; 	define("components/wxml-to-canvas/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../@babel/runtime/regenerator")),t=require("../../@babel/runtime/helpers/asyncToGenerator"),a=require("./xml-parser"),r=require("./widget").Widget,n=require("./draw").Draw,i=require("./utils").compareVersion;Component({properties:{width:{type:Number,value:400},height:{type:Number,value:300},forceUseOldCanvas:{type:Boolean,value:!1}},data:{use2dCanvas:!1},lifetimes:{attached:function(){this.init()}},methods:{init:function(){var e=this,t=wx.getSystemInfoSync(),a=t.SDKVersion,r=t.pixelRatio,n=i(a,"2.9.2")>=0&&!this.data.forceUseOldCanvas;this.dpr=r,this.setData({use2dCanvas:n},(function(){n?e.createSelectorQuery().select("#".concat("weui-canvas")).fields({node:!0,size:!0}).exec((function(t){var a=t[0].node,n=a.getContext("2d");a.width=t[0].width*r,a.height=t[0].height*r,n.scale(r,r),e.ctx=n,e.canvas=a})):e.ctx=wx.createCanvasContext("weui-canvas",e)}))},renderToCanvas:function(i){var s=this;return t(e.default.mark((function t(){var o,u,c,d,h,l,v,f,p,w;return e.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.wxml,u=i.style,c=s.ctx,d=s.canvas,!(h=s.data.use2dCanvas)||d){e.next=6;break}return e.abrupt("return",Promise.reject(new Error("renderToCanvas: fail canvas has not been created")));case 6:return c.clearRect(0,0,s.data.width,s.data.height),l=a(o),v=l.root,f=new r(v,u),p=f.init(),s.boundary={top:p.layoutBox.top,left:p.layoutBox.left,width:p.computedStyle.width,height:p.computedStyle.height},w=new n(c,d,h),e.next=14,w.drawNode(p);case 14:if(h){e.next=17;break}return e.next=17,s.canvasDraw(c);case 17:return e.abrupt("return",Promise.resolve(p));case 18:case"end":return e.stop()}}),t)})))()},canvasDraw:function(e,t){return new Promise((function(a){e.draw(t,(function(){a()}))}))},canvasToTempFilePath:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.data.use2dCanvas;return new Promise((function(r,n){var i=e.boundary,s=i.top,o=i.left,u=i.width,c=i.height,d={x:o,y:s,width:u,height:c,destWidth:u*e.dpr,destHeight:c*e.dpr,canvasId:"weui-canvas",fileType:t.fileType||"png",quality:t.quality||1,success:r,fail:n};a&&(delete d.canvasId,d.canvas=e.canvas),wx.canvasToTempFilePath(d,e)}))}}}); 
 			}); 	require("components/wxml-to-canvas/index.js");
 	
				global.publishDomainComponents({
			"plugin://wx104a1a20c3f81ec2/cell":"plugin-private://wx104a1a20c3f81ec2/components/cell/cell"
	})
				module.exports = function() {
		return require('index.js')
	}
			});
	requirePlugin("plugin://wx104a1a20c3f81ec2");
