( function () {
  var d = this,
    q = d._,
    n = {},
    k = Array.prototype,
    g = Object.prototype,
    b = k.push,
    c = k.slice,
    h = k.concat,
    p = g.toString,
    a = g.hasOwnProperty,
    m = k.forEach,
    z = k.map,
    t = k.reduce,
    v = k.reduceRight,
    D = k.filter,
    f = k.every,
    r = k.some,
    u = k.indexOf,
    B = k.lastIndexOf,
    g = Array.isArray,
    x = Object.keys,
    A = Function.prototype.bind,
    e = function ( j ) {
      if ( j instanceof e ) return j;
      if ( !( this instanceof e ) ) return new e( j );
      this._wrapped = j
    };
  "undefined" !== typeof exports ? ( "undefined" !== typeof module && module.exports && ( exports = module.exports = e ), exports._ =
    e ) : d._ = e;
  e.VERSION = "1.5.1";
  var y = e.each = e.forEach = function ( j, a, c ) {
    if ( null != j )
      if ( m && j.forEach === m ) j.forEach( a, c );
      else if ( j.length === +j.length )
      for ( var b = 0, l = j.length; b < l && a.call( c, j[ b ], b, j ) !== n; b++ );
    else
      for ( b in j )
        if ( e.has( j, b ) && a.call( c, j[ b ], b, j ) === n ) break
  };
  e.map = e.collect = function ( j, a, c ) {
    var b = [];
    if ( null == j ) return b;
    if ( z && j.map === z ) return j.map( a, c );
    y( j, function ( j, l, e ) {
      b.push( a.call( c, j, l, e ) )
    } );
    return b
  };
  e.reduce = e.foldl = e.inject = function ( j, a, c, b ) {
    var l = 2 < arguments.length;
    null == j && ( j = [] );
    if ( t && j.reduce ===
      t ) return b && ( a = e.bind( a, b ) ), l ? j.reduce( a, c ) : j.reduce( a );
    y( j, function ( j, e, s ) {
      l ? c = a.call( b, c, j, e, s ) : ( c = j, l = !0 )
    } );
    if ( !l ) throw new TypeError( "Reduce of empty array with no initial value" );
    return c
  };
  e.reduceRight = e.foldr = function ( j, a, c, b ) {
    var l = 2 < arguments.length;
    null == j && ( j = [] );
    if ( v && j.reduceRight === v ) return b && ( a = e.bind( a, b ) ), l ? j.reduceRight( a, c ) : j.reduceRight( a );
    var s = j.length;
    if ( s !== +s ) var f = e.keys( j ),
      s = f.length;
    y( j, function ( e, w, m ) {
      w = f ? f[ --s ] : --s;
      l ? c = a.call( b, c, j[ w ], w, m ) : ( c = j[ w ], l = !0 )
    } );
    if ( !l ) throw new TypeError( "Reduce of empty array with no initial value" );
    return c
  };
  e.find = e.detect = function ( j, a, c ) {
    var b;
    E( j, function ( j, l, e ) {
      if ( a.call( c, j, l, e ) ) return b = j, !0
    } );
    return b
  };
  e.filter = e.select = function ( j, a, c ) {
    var b = [];
    if ( null == j ) return b;
    if ( D && j.filter === D ) return j.filter( a, c );
    y( j, function ( j, l, e ) {
      a.call( c, j, l, e ) && b.push( j )
    } );
    return b
  };
  e.reject = function ( j, a, c ) {
    return e.filter( j, function ( j, b, l ) {
      return !a.call( c, j, b, l )
    }, c )
  };
  e.every = e.all = function ( j, a, c ) {
    a || ( a = e.identity );
    var b = !0;
    if ( null == j ) return b;
    if ( f && j.every === f ) return j.every( a, c );
    y( j, function ( j, l, e ) {
      if ( !( b =
          b && a.call( c, j, l, e ) ) ) return n
    } );
    return !!b
  };
  var E = e.some = e.any = function ( j, a, c ) {
    a || ( a = e.identity );
    var b = !1;
    if ( null == j ) return b;
    if ( r && j.some === r ) return j.some( a, c );
    y( j, function ( j, l, e ) {
      if ( b || ( b = a.call( c, j, l, e ) ) ) return n
    } );
    return !!b
  };
  e.contains = e.include = function ( j, a ) {
    return null == j ? !1 : u && j.indexOf === u ? -1 != j.indexOf( a ) : E( j, function ( j ) {
      return j === a
    } )
  };
  e.invoke = function ( j, a ) {
    var b = c.call( arguments, 2 ),
      l = e.isFunction( a );
    return e.map( j, function ( j ) {
      return ( l ? a : j[ a ] ).apply( j, b )
    } )
  };
  e.pluck = function ( j, a ) {
    return e.map( j,
      function ( j ) {
        return j[ a ]
      } )
  };
  e.where = function ( j, a, b ) {
    return e.isEmpty( a ) ? b ? void 0 : [] : e[ b ? "find" : "filter" ]( j, function ( j ) {
      for ( var b in a )
        if ( a[ b ] !== j[ b ] ) return !1;
      return !0
    } )
  };
  e.findWhere = function ( j, a ) {
    return e.where( j, a, !0 )
  };
  e.max = function ( j, a, b ) {
    if ( !a && e.isArray( j ) && j[ 0 ] === +j[ 0 ] && 65535 > j.length ) return Math.max.apply( Math, j );
    if ( !a && e.isEmpty( j ) ) return -Infinity;
    var c = {
      computed: -Infinity,
      value: -Infinity
    };
    y( j, function ( j, l, e ) {
      l = a ? a.call( b, j, l, e ) : j;
      l > c.computed && ( c = {
        value: j,
        computed: l
      } )
    } );
    return c.value
  };
  e.min =
    function ( j, a, b ) {
      if ( !a && e.isArray( j ) && j[ 0 ] === +j[ 0 ] && 65535 > j.length ) return Math.min.apply( Math, j );
      if ( !a && e.isEmpty( j ) ) return Infinity;
      var c = {
        computed: Infinity,
        value: Infinity
      };
      y( j, function ( j, l, e ) {
        l = a ? a.call( b, j, l, e ) : j;
        l < c.computed && ( c = {
          value: j,
          computed: l
        } )
      } );
      return c.value
    };
  e.shuffle = function ( j ) {
    var a, b = 0,
      c = [];
    y( j, function ( j ) {
      a = e.random( b++ );
      c[ b - 1 ] = c[ a ];
      c[ a ] = j
    } );
    return c
  };
  var C = function ( j ) {
    return e.isFunction( j ) ? j : function ( a ) {
      return a[ j ]
    }
  };
  e.sortBy = function ( j, a, b ) {
    var c = C( a );
    return e.pluck( e.map( j, function ( j,
      a, l ) {
      return {
        value: j,
        index: a,
        criteria: c.call( b, j, a, l )
      }
    } ).sort( function ( j, a ) {
      var b = j.criteria,
        c = a.criteria;
      if ( b !== c ) {
        if ( b > c || void 0 === b ) return 1;
        if ( b < c || void 0 === c ) return -1
      }
      return j.index < a.index ? -1 : 1
    } ), "value" )
  };
  var l = function ( j, a, b, c ) {
    var l = {},
      s = C( null == a ? e.identity : a );
    y( j, function ( a, e ) {
      var K = s.call( b, a, e, j );
      c( l, K, a )
    } );
    return l
  };
  e.groupBy = function ( j, a, b ) {
    return l( j, a, b, function ( j, a, b ) {
      ( e.has( j, a ) ? j[ a ] : j[ a ] = [] ).push( b )
    } )
  };
  e.countBy = function ( j, a, b ) {
    return l( j, a, b, function ( j, a ) {
      e.has( j, a ) || ( j[ a ] = 0 );
      j[ a ]++
    } )
  };
  e.sortedIndex = function ( j, a, b, c ) {
    b = null == b ? e.identity : C( b );
    a = b.call( c, a );
    for ( var l = 0, s = j.length; l < s; ) {
      var f = l + s >>> 1;
      b.call( c, j[ f ] ) < a ? l = f + 1 : s = f
    }
    return l
  };
  e.toArray = function ( j ) {
    return !j ? [] : e.isArray( j ) ? c.call( j ) : j.length === +j.length ? e.map( j, e.identity ) : e.values( j )
  };
  e.size = function ( j ) {
    return null == j ? 0 : j.length === +j.length ? j.length : e.keys( j ).length
  };
  e.first = e.head = e.take = function ( j, a, b ) {
    return null == j ? void 0 : null != a && !b ? c.call( j, 0, a ) : j[ 0 ]
  };
  e.initial = function ( j, a, b ) {
    return c.call( j, 0, j.length -
      ( null == a || b ? 1 : a ) )
  };
  e.last = function ( j, a, b ) {
    return null == j ? void 0 : null != a && !b ? c.call( j, Math.max( j.length - a, 0 ) ) : j[ j.length - 1 ]
  };
  e.rest = e.tail = e.drop = function ( j, a, b ) {
    return c.call( j, null == a || b ? 1 : a )
  };
  e.compact = function ( j ) {
    return e.filter( j, e.identity )
  };
  var s = function ( j, a, c ) {
    if ( a && e.every( j, e.isArray ) ) return h.apply( c, j );
    y( j, function ( j ) {
      e.isArray( j ) || e.isArguments( j ) ? a ? b.apply( c, j ) : s( j, a, c ) : c.push( j )
    } );
    return c
  };
  e.flatten = function ( j, a ) {
    return s( j, a, [] )
  };
  e.without = function ( j ) {
    return e.difference( j, c.call( arguments,
      1 ) )
  };
  e.uniq = e.unique = function ( j, a, b, c ) {
    e.isFunction( a ) && ( c = b, b = a, a = !1 );
    b = b ? e.map( j, b, c ) : j;
    var l = [],
      s = [];
    y( b, function ( b, c ) {
      if ( a ? !c || s[ s.length - 1 ] !== b : !e.contains( s, b ) ) s.push( b ), l.push( j[ c ] )
    } );
    return l
  };
  e.union = function () {
    return e.uniq( e.flatten( arguments, !0 ) )
  };
  e.intersection = function ( j ) {
    var a = c.call( arguments, 1 );
    return e.filter( e.uniq( j ), function ( j ) {
      return e.every( a, function ( a ) {
        return 0 <= e.indexOf( a, j )
      } )
    } )
  };
  e.difference = function ( j ) {
    var a = h.apply( k, c.call( arguments, 1 ) );
    return e.filter( j, function ( j ) {
      return !e.contains( a,
        j )
    } )
  };
  e.zip = function () {
    for ( var j = e.max( e.pluck( arguments, "length" ).concat( 0 ) ), a = Array( j ), b = 0; b < j; b++ ) a[ b ] = e.pluck( arguments, "" + b );
    return a
  };
  e.object = function ( a, b ) {
    if ( null == a ) return {};
    for ( var c = {}, l = 0, e = a.length; l < e; l++ ) b ? c[ a[ l ] ] = b[ l ] : c[ a[ l ][ 0 ] ] = a[ l ][ 1 ];
    return c
  };
  e.indexOf = function ( a, b, c ) {
    if ( null == a ) return -1;
    var l = 0,
      s = a.length;
    if ( c )
      if ( "number" == typeof c ) l = 0 > c ? Math.max( 0, s + c ) : c;
      else return l = e.sortedIndex( a, b ), a[ l ] === b ? l : -1;
    if ( u && a.indexOf === u ) return a.indexOf( b, c );
    for ( ; l < s; l++ )
      if ( a[ l ] === b ) return l;
    return -1
  };
  e.lastIndexOf = function ( a, b, c ) {
    if ( null == a ) return -1;
    var l = null != c;
    if ( B && a.lastIndexOf === B ) return l ? a.lastIndexOf( b, c ) : a.lastIndexOf( b );
    for ( c = l ? c : a.length; c--; )
      if ( a[ c ] === b ) return c;
    return -1
  };
  e.range = function ( a, b, c ) {
    1 >= arguments.length && ( b = a || 0, a = 0 );
    c = arguments[ 2 ] || 1;
    for ( var l = Math.max( Math.ceil( ( b - a ) / c ), 0 ), e = 0, s = Array( l ); e < l; ) s[ e++ ] = a, a += c;
    return s
  };
  var w = function () {};
  e.bind = function ( a, b ) {
    var l, s;
    if ( A && a.bind === A ) return A.apply( a, c.call( arguments, 1 ) );
    if ( !e.isFunction( a ) ) throw new TypeError;
    l = c.call( arguments, 2 );
    return s = function () {
      if ( !( this instanceof s ) ) return a.apply( b, l.concat( c.call( arguments ) ) );
      w.prototype = a.prototype;
      var e = new w;
      w.prototype = null;
      var f = a.apply( e, l.concat( c.call( arguments ) ) );
      return Object( f ) === f ? f : e
    }
  };
  e.partial = function ( a ) {
    var b = c.call( arguments, 1 );
    return function () {
      return a.apply( this, b.concat( c.call( arguments ) ) )
    }
  };
  e.bindAll = function ( a ) {
    var b = c.call( arguments, 1 );
    if ( 0 === b.length ) throw Error( "bindAll must be passed function names" );
    y( b, function ( b ) {
      a[ b ] = e.bind( a[ b ],
        a )
    } );
    return a
  };
  e.memoize = function ( a, b ) {
    var c = {};
    b || ( b = e.identity );
    return function () {
      var l = b.apply( this, arguments );
      return e.has( c, l ) ? c[ l ] : c[ l ] = a.apply( this, arguments )
    }
  };
  e.delay = function ( a, b ) {
    var l = c.call( arguments, 2 );
    return setTimeout( function () {
      return a.apply( null, l )
    }, b )
  };
  e.defer = function ( a ) {
    return e.delay.apply( e, [ a, 1 ].concat( c.call( arguments, 1 ) ) )
  };
  e.throttle = function ( a, b, c ) {
    var l, e, s, f = null,
      w = 0;
    c || ( c = {} );
    var m = function () {
      w = !1 === c.leading ? 0 : new Date;
      f = null;
      s = a.apply( l, e )
    };
    return function () {
      var h =
        new Date;
      !w && !1 === c.leading && ( w = h );
      var p = b - ( h - w );
      l = this;
      e = arguments;
      0 >= p ? ( clearTimeout( f ), f = null, w = h, s = a.apply( l, e ) ) : !f && !1 !== c.trailing && ( f = setTimeout( m, p ) );
      return s
    }
  };
  e.debounce = function ( a, b, c ) {
    var l, e = null;
    return function () {
      var s = this,
        f = arguments,
        w = c && !e;
      clearTimeout( e );
      e = setTimeout( function () {
        e = null;
        c || ( l = a.apply( s, f ) )
      }, b );
      w && ( l = a.apply( s, f ) );
      return l
    }
  };
  e.once = function ( a ) {
    var b = !1,
      c;
    return function () {
      if ( b ) return c;
      b = !0;
      c = a.apply( this, arguments );
      a = null;
      return c
    }
  };
  e.wrap = function ( a, c ) {
    return function () {
      var l = [ a ];
      b.apply( l, arguments );
      return c.apply( this, l )
    }
  };
  e.compose = function () {
    var a = arguments;
    return function () {
      for ( var b = arguments, c = a.length - 1; 0 <= c; c-- ) b = [ a[ c ].apply( this, b ) ];
      return b[ 0 ]
    }
  };
  e.after = function ( a, b ) {
    return function () {
      if ( 1 > --a ) return b.apply( this, arguments )
    }
  };
  e.keys = x || function ( a ) {
    if ( a !== Object( a ) ) throw new TypeError( "Invalid object" );
    var b = [],
      c;
    for ( c in a ) e.has( a, c ) && b.push( c );
    return b
  };
  e.values = function ( a ) {
    var b = [],
      c;
    for ( c in a ) e.has( a, c ) && b.push( a[ c ] );
    return b
  };
  e.pairs = function ( a ) {
    var b = [],
      c;
    for ( c in a ) e.has( a, c ) && b.push( [ c, a[ c ] ] );
    return b
  };
  e.invert = function ( a ) {
    var b = {},
      c;
    for ( c in a ) e.has( a, c ) && ( b[ a[ c ] ] = c );
    return b
  };
  e.functions = e.methods = function ( a ) {
    var b = [],
      c;
    for ( c in a ) e.isFunction( a[ c ] ) && b.push( c );
    return b.sort()
  };
  e.extend = function ( a ) {
    y( c.call( arguments, 1 ), function ( b ) {
      if ( b )
        for ( var c in b ) a[ c ] = b[ c ]
    } );
    return a
  };
  e.pick = function ( a ) {
    var b = {},
      l = h.apply( k, c.call( arguments, 1 ) );
    y( l, function ( c ) {
      c in a && ( b[ c ] = a[ c ] )
    } );
    return b
  };
  e.omit = function ( a ) {
    var b = {},
      l = h.apply( k, c.call( arguments, 1 ) ),
      s;
    for ( s in a ) e.contains( l, s ) || ( b[ s ] = a[ s ] );
    return b
  };
  e.defaults = function ( a ) {
    y( c.call( arguments, 1 ), function ( b ) {
      if ( b )
        for ( var c in b ) void 0 === a[ c ] && ( a[ c ] = b[ c ] )
    } );
    return a
  };
  e.clone = function ( a ) {
    return !e.isObject( a ) ? a : e.isArray( a ) ? a.slice() : e.extend( {}, a )
  };
  e.tap = function ( a, b ) {
    b( a );
    return a
  };
  var G = function ( a, b, c, l ) {
    if ( a === b ) return 0 !== a || 1 / a == 1 / b;
    if ( null == a || null == b ) return a === b;
    a instanceof e && ( a = a._wrapped );
    b instanceof e && ( b = b._wrapped );
    var s = p.call( a );
    if ( s != p.call( b ) ) return !1;
    switch ( s ) {
      case "[object String]":
        return a ==
          String( b );
      case "[object Number]":
        return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a == +b;
      case "[object RegExp]":
        return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
    }
    if ( "object" != typeof a || "object" != typeof b ) return !1;
    for ( var f = c.length; f--; )
      if ( c[ f ] == a ) return l[ f ] == b;
    var f = a.constructor,
      w = b.constructor;
    if ( f !== w && ( !e.isFunction( f ) || !( f instanceof f && e.isFunction( w ) && w instanceof w ) ) ) return !1;
    c.push( a );
    l.push( b );
    f =
      0;
    w = !0;
    if ( "[object Array]" == s ) {
      if ( f = a.length, w = f == b.length )
        for ( ; f-- && ( w = G( a[ f ], b[ f ], c, l ) ); );
    } else {
      for ( var m in a )
        if ( e.has( a, m ) && ( f++, !( w = e.has( b, m ) && G( a[ m ], b[ m ], c, l ) ) ) ) break;
      if ( w ) {
        for ( m in b )
          if ( e.has( b, m ) && !f-- ) break;
        w = !f
      }
    }
    c.pop();
    l.pop();
    return w
  };
  e.isEqual = function ( a, b ) {
    return G( a, b, [], [] )
  };
  e.isEmpty = function ( a ) {
    if ( null == a ) return !0;
    if ( e.isArray( a ) || e.isString( a ) ) return 0 === a.length;
    for ( var b in a )
      if ( e.has( a, b ) ) return !1;
    return !0
  };
  e.isElement = function ( a ) {
    return !!( a && 1 === a.nodeType )
  };
  e.isArray = g ||
    function ( a ) {
      return "[object Array]" == p.call( a )
    };
  e.isObject = function ( a ) {
    return a === Object( a )
  };
  y( "Arguments Function String Number Date RegExp".split( " " ), function ( a ) {
    e[ "is" + a ] = function ( b ) {
      return p.call( b ) == "[object " + a + "]"
    }
  } );
  e.isArguments( arguments ) || ( e.isArguments = function ( a ) {
    return !( !a || !e.has( a, "callee" ) )
  } );
  "function" !== typeof /./ && ( e.isFunction = function ( a ) {
    return "function" === typeof a
  } );
  e.isFinite = function ( a ) {
    return isFinite( a ) && !isNaN( parseFloat( a ) )
  };
  e.isNaN = function ( a ) {
    return e.isNumber( a ) && a !=
      +a
  };
  e.isBoolean = function ( a ) {
    return !0 === a || !1 === a || "[object Boolean]" == p.call( a )
  };
  e.isNull = function ( a ) {
    return null === a
  };
  e.isUndefined = function ( a ) {
    return void 0 === a
  };
  e.has = function ( b, c ) {
    return a.call( b, c )
  };
  e.noConflict = function () {
    d._ = q;
    return this
  };
  e.identity = function ( a ) {
    return a
  };
  e.times = function ( a, b, c ) {
    for ( var l = Array( Math.max( 0, a ) ), e = 0; e < a; e++ ) l[ e ] = b.call( c, e );
    return l
  };
  e.random = function ( a, b ) {
    null == b && ( b = a, a = 0 );
    return a + Math.floor( Math.random() * ( b - a + 1 ) )
  };
  var F = {
    escape: {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "/": "&#x2F;"
    }
  };
  F.unescape = e.invert( F.escape );
  var H = {
    escape: RegExp( "[" + e.keys( F.escape ).join( "" ) + "]", "g" ),
    unescape: RegExp( "(" + e.keys( F.unescape ).join( "|" ) + ")", "g" )
  };
  e.each( [ "escape", "unescape" ], function ( a ) {
    e[ a ] = function ( b ) {
      return null == b ? "" : ( "" + b ).replace( H[ a ], function ( b ) {
        return F[ a ][ b ]
      } )
    }
  } );
  e.result = function ( a, b ) {
    if ( null != a ) {
      var c = a[ b ];
      return e.isFunction( c ) ? c.call( a ) : c
    }
  };
  e.mixin = function ( a ) {
    y( e.functions( a ), function ( c ) {
      var l = e[ c ] = a[ c ];
      e.prototype[ c ] = function () {
        var a = [ this._wrapped ];
        b.apply( a, arguments );
        a = l.apply( e, a );
        return this._chain ? e( a ).chain() : a
      }
    } )
  };
  var I = 0;
  e.uniqueId = function ( a ) {
    var b = ++I + "";
    return a ? a + b : b
  };
  e.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var J = /(.)^/,
    L = {
      "'": "'",
      "\\": "\\",
      "\r": "r",
      "\n": "n",
      "\t": "t",
      "\u2028": "u2028",
      "\u2029": "u2029"
    },
    M = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  e.template = function ( a, b, c ) {
    var l;
    c = e.defaults( {}, c, e.templateSettings );
    var s = RegExp( [ ( c.escape || J ).source, ( c.interpolate || J ).source, ( c.evaluate ||
        J ).source ].join( "|" ) + "|$", "g" ),
      f = 0,
      w = "__p+='";
    a.replace( s, function ( b, c, l, e, s ) {
      w += a.slice( f, s ).replace( M, function ( a ) {
        return "\\" + L[ a ]
      } );
      c && ( w += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" );
      l && ( w += "'+\n((__t=(" + l + "))==null?'':__t)+\n'" );
      e && ( w += "';\n" + e + "\n__p+='" );
      f = s + b.length;
      return b
    } );
    w += "';\n";
    c.variable || ( w = "with(obj||{}){\n" + w + "}\n" );
    w = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + w + "return __p;\n";
    try {
      l = new Function( c.variable || "obj", "_", w )
    } catch ( m ) {
      throw m.source =
        w, m;
    }
    if ( b ) return l( b, e );
    b = function ( a ) {
      return l.call( this, a, e )
    };
    b.source = "function(" + ( c.variable || "obj" ) + "){\n" + w + "}";
    return b
  };
  e.chain = function ( a ) {
    return e( a ).chain()
  };
  e.mixin( e );
  y( "pop push reverse shift sort splice unshift".split( " " ), function ( a ) {
    var b = k[ a ];
    e.prototype[ a ] = function () {
      var c = this._wrapped;
      b.apply( c, arguments );
      ( "shift" == a || "splice" == a ) && 0 === c.length && delete c[ 0 ];
      return this._chain ? e( c ).chain() : c
    }
  } );
  y( [ "concat", "join", "slice" ], function ( a ) {
    var b = k[ a ];
    e.prototype[ a ] = function () {
      var a = b.apply( this._wrapped,
        arguments );
      return this._chain ? e( a ).chain() : a
    }
  } );
  e.extend( e.prototype, {
    chain: function () {
      this._chain = !0;
      return this
    },
    value: function () {
      return this._wrapped
    }
  } )
} ).call( this );
var Backbone = Backbone || {};
( function () {
  var d = [].slice,
    q = function ( d, g, b ) {
      var c;
      d = -1;
      var h = g.length;
      switch ( b.length ) {
        case 0:
          for ( ; ++d < h; )( c = g[ d ] ).callback.call( c.ctx );
          break;
        case 1:
          for ( ; ++d < h; )( c = g[ d ] ).callback.call( c.ctx, b[ 0 ] );
          break;
        case 2:
          for ( ; ++d < h; )( c = g[ d ] ).callback.call( c.ctx, b[ 0 ], b[ 1 ] );
          break;
        case 3:
          for ( ; ++d < h; )( c = g[ d ] ).callback.call( c.ctx, b[ 0 ], b[ 1 ], b[ 2 ] );
          break;
        default:
          for ( ; ++d < h; )( c = g[ d ] ).callback.apply( c.ctx, b )
      }
    },
    n = Backbone.Events = {
      on: function ( d, g, b ) {
        this._events || ( this._events = {} );
        ( this._events[ d ] || ( this._events[ d ] = [] ) ).push( {
          callback: g,
          context: b,
          ctx: b || this
        } );
        return this
      },
      once: function ( d, g, b ) {
        var c = this,
          h = _.once( function () {
            c.off( d, h );
            g.apply( this, arguments )
          } );
        h._callback = g;
        this.on( d, h, b );
        return this
      },
      off: function ( d, g, b ) {
        var c, h, p, a, m, z, t, v;
        if ( !this._events ) return this;
        if ( !d && !g && !b ) return this._events = {}, this;
        a = d ? [ d ] : _.keys( this._events );
        m = 0;
        for ( z = a.length; m < z; m++ )
          if ( d = a[ m ], c = this._events[ d ] ) {
            p = [];
            if ( g || b ) {
              t = 0;
              for ( v = c.length; t < v; t++ ) h = c[ t ], ( g && g !== ( h.callback._callback || h.callback ) || b && b !== h.context ) && p.push( h )
            }
            this._events[ d ] =
              p
          }
        return this
      },
      trigger: function ( n ) {
        if ( !this._events ) return this;
        var g = d.call( arguments, 1 ),
          b = this._events[ n ],
          c = this._events.all;
        b && q( this, b, g );
        c && q( this, c, arguments );
        return this
      },
      listenTo: function ( d, g, b ) {
        var c = this._listeners || ( this._listeners = {} ),
          h = d._listenerId || ( d._listenerId = _.uniqueId( "l" ) );
        c[ h ] = d;
        d.on( g, b || this, this );
        return this
      },
      stopListening: function ( d, g, b ) {
        var c = this._listeners;
        if ( c ) {
          if ( d ) d.off( g, b, this ), !g && !b && delete c[ d._listenerId ];
          else {
            for ( var h in c ) c[ h ].off( null, null, this );
            this._listeners = {}
          }
          return this
        }
      }
    };
  n.bind = n.on;
  n.unbind = n.off;
  "undefined" !== typeof exports && ( "undefined" !== typeof module && module.exports && ( exports = module.exports = n ), exports.Backbone = exports.Backbone || Backbone )
} )();
( function () {
  function d( b ) {
    var c = ( new Date ).getTime(),
      d = Math.max( 0, 16 - ( c - n ) ),
      p = q.setTimeout( function () {
        b( c + d )
      }, d );
    n = c + d;
    return p
  }
  var q = this,
    n = 0,
    k = [ "ms", "moz", "webkit", "o" ];
  if ( "undefined" !== typeof exports ) "undefined" !== typeof module && module.exports && ( exports = module.exports = d ), exports.requestAnimationFrame = d;
  else {
    for ( var g = 0; g < k.length && !q.requestAnimationFrame; ++g ) q.requestAnimationFrame = q[ k[ g ] + "RequestAnimationFrame" ], q.cancelAnimationFrame = q[ k[ g ] + "CancelAnimationFrame" ] || q[ k[ g ] + "CancelRequestAnimationFrame" ];
    q.requestAnimationFrame || ( q.requestAnimationFrame = d );
    q.cancelAnimationFrame || ( q.cancelAnimationFrame = function ( b ) {
      clearTimeout( b )
    } )
  }
} )();
( function () {
  function d() {
    var a = document.body.getBoundingClientRect(),
      b = this.width = a.width,
      a = this.height = a.height;
    this.renderer.setSize( b, a, this.ratio );
    this.trigger( f.Events.resize, b, a )
  }
  var q = this,
    n = q.Two || {},
    k = Math.sin,
    g = Math.cos,
    b = Math.atan2,
    c = Math.sqrt,
    h = Math.PI,
    p = 2 * h,
    a = h / 2,
    m = Math.pow,
    z = Math.min,
    t = Math.max,
    v = 0,
    D = {
      hasEventListeners: _.isFunction( q.addEventListener ),
      bind: function ( a, b, c, e ) {
        this.hasEventListeners ? a.addEventListener( b, c, !!e ) : a.attachEvent( "on" + b, c );
        return this
      },
      unbind: function ( a, b, c,
        e ) {
        this.hasEventListeners ? a.removeEventListeners( b, c, !!e ) : a.detachEvent( "on" + b, c );
        return this
      }
    },
    f = q.Two = function ( a ) {
      a = _.defaults( a || {}, {
        fullscreen: !1,
        width: 640,
        height: 480,
        type: f.Types.svg,
        autostart: !1
      } );
      _.each( a, function ( a, b ) {
        "fullscreen" === b || ( "width" === b || "height" === b || "autostart" === b ) || ( this[ b ] = a )
      }, this );
      _.isElement( a.domElement ) && ( this.type = f.Types[ a.domElement.tagName.toLowerCase() ] );
      this.renderer = new f[ this.type ]( this );
      f.Utils.setPlaying.call( this, a.autostart );
      this.frameCount = 0;
      a.fullscreen ?
        ( a = _.bind( d, this ), _.extend( document.body.style, {
          overflow: "hidden",
          margin: 0,
          padding: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "fixed"
        } ), _.extend( this.renderer.domElement.style, {
          display: "block",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "fixed"
        } ), D.bind( q, "resize", a ), a() ) : _.isElement( a.domElement ) || ( this.renderer.setSize( a.width, a.height, this.ratio ), this.width = a.width, this.height = a.height );
      this.scene = this.renderer.scene;
      f.Instances.push( this )
    };
  _.extend( f, {
    Array: q.Float32Array || Array,
    Types: {
      webgl: "WebGLRenderer",
      svg: "SVGRenderer",
      canvas: "CanvasRenderer"
    },
    Version: "v0.4.0",
    Identifier: "two_",
    Properties: {
      hierarchy: "hierarchy",
      demotion: "demotion"
    },
    Events: {
      play: "play",
      pause: "pause",
      update: "update",
      render: "render",
      resize: "resize",
      change: "change",
      remove: "remove",
      insert: "insert"
    },
    Commands: {
      move: "M",
      line: "L",
      curve: "C",
      close: "Z"
    },
    Resolution: 8,
    Instances: [],
    noConflict: function () {
      q.Two = n;
      return this
    },
    uniqueId: function () {
      var a = v;
      v++;
      return a
    },
    Utils: {
      release: function ( a ) {
        _.isObject( a ) && ( _.isFunction( a.unbind ) && a.unbind(),
          a.vertices && ( _.isFunction( a.vertices.unbind ) && a.vertices.unbind(), _.each( a.vertices, function ( a ) {
            _.isFunction( a.unbind ) && a.unbind()
          } ) ), a.children && _.each( a.children, function ( a ) {
            f.Utils.release( a )
          } ) )
      },
      Curve: {
        CollinearityEpsilon: m( 10, -30 ),
        RecursionLimit: 16,
        CuspLimit: 0,
        Tolerance: {
          distance: 0.25,
          angle: 0,
          epsilon: 0.01
        },
        abscissas: [
          [ 0.5773502691896257 ],
          [ 0, 0.7745966692414834 ],
          [ 0.33998104358485626, 0.8611363115940526 ],
          [ 0, 0.5384693101056831, 0.906179845938664 ],
          [ 0.2386191860831969, 0.6612093864662645, 0.932469514203152 ],
          [ 0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585 ],
          [ 0.1834346424956498, 0.525532409916329, 0.7966664774136267, 0.9602898564975363 ],
          [ 0, 0.3242534234038089, 0.6133714327005904, 0.8360311073266358, 0.9681602395076261 ],
          [ 0.14887433898163122, 0.4333953941292472, 0.6794095682990244, 0.8650633666889845, 0.9739065285171717 ],
          [ 0, 0.26954315595234496, 0.5190961292068118, 0.7301520055740494, 0.8870625997680953, 0.978228658146057 ],
          [ 0.1252334085114689, 0.3678314989981802, 0.5873179542866175, 0.7699026741943047, 0.9041172563704749,
            0.9815606342467192
          ],
          [ 0, 0.2304583159551348, 0.44849275103644687, 0.6423493394403402, 0.8015780907333099, 0.9175983992229779, 0.9841830547185881 ],
          [ 0.10805494870734367, 0.31911236892788974, 0.5152486363581541, 0.6872929048116855, 0.827201315069765, 0.9284348836635735, 0.9862838086968123 ],
          [ 0, 0.20119409399743451, 0.3941513470775634, 0.5709721726085388, 0.7244177313601701, 0.8482065834104272, 0.937273392400706, 0.9879925180204854 ],
          [ 0.09501250983763744, 0.2816035507792589, 0.45801677765722737, 0.6178762444026438, 0.755404408355003,
            0.8656312023878318, 0.9445750230732326, 0.9894009349916499
          ]
        ],
        weights: [
          [ 1 ],
          [ 0.8888888888888888, 0.5555555555555556 ],
          [ 0.6521451548625461, 0.34785484513745385 ],
          [ 0.5688888888888889, 0.47862867049936647, 0.23692688505618908 ],
          [ 0.46791393457269104, 0.3607615730481386, 0.17132449237917036 ],
          [ 0.4179591836734694, 0.3818300505051189, 0.27970539148927664, 0.1294849661688697 ],
          [ 0.362683783378362, 0.31370664587788727, 0.22238103445337448, 0.10122853629037626 ],
          [ 0.3302393550012598, 0.31234707704000286, 0.26061069640293544, 0.1806481606948574,
            0.08127438836157441
          ],
          [ 0.29552422471475287, 0.26926671930999635, 0.21908636251598204, 0.1494513491505806, 0.06667134430868814 ],
          [ 0.2729250867779006, 0.26280454451024665, 0.23319376459199048, 0.18629021092773426, 0.1255803694649046, 0.05566856711617366 ],
          [ 0.24914704581340277, 0.2334925365383548, 0.20316742672306592, 0.16007832854334622, 0.10693932599531843, 0.04717533638651183 ],
          [ 0.2325515532308739, 0.22628318026289723, 0.2078160475368885, 0.17814598076194574, 0.13887351021978725, 0.09212149983772845, 0.04048400476531588 ],
          [ 0.2152638534631578, 0.2051984637212956, 0.18553839747793782, 0.15720316715819355, 0.12151857068790319, 0.08015808715976021, 0.03511946033175186 ],
          [ 0.2025782419255613, 0.19843148532711158, 0.1861610000155622, 0.16626920581699392, 0.13957067792615432, 0.10715922046717194, 0.07036604748810812, 0.03075324199611727 ],
          [ 0.1894506104550685, 0.18260341504492358, 0.16915651939500254, 0.14959598881657674, 0.12462897125553388, 0.09515851168249279, 0.062253523938647894, 0.027152459411754096 ]
        ]
      },
      devicePixelRatio: q.devicePixelRatio ||
        1,
      getBackingStoreRatio: function ( a ) {
        return a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1
      },
      getRatio: function ( a ) {
        return f.Utils.devicePixelRatio / e( a )
      },
      setPlaying: function ( a ) {
        this.playing = !!a;
        return this
      },
      getComputedMatrix: function ( a, b ) {
        b = b && b.identity() || new f.Matrix;
        for ( var c = a, e = []; c && c._matrix; ) e.push( c._matrix ), c = c.parent;
        e.reverse();
        _.each( e, function ( a ) {
          a = a.elements;
          b.multiply( a[ 0 ], a[ 1 ], a[ 2 ], a[ 3 ], a[ 4 ],
            a[ 5 ], a[ 6 ], a[ 7 ], a[ 8 ], a[ 9 ] )
        } );
        return b
      },
      deltaTransformPoint: function ( a, b, c ) {
        return new f.Vector( b * a.a + c * a.c + 0, b * a.b + c * a.d + 0 )
      },
      decomposeMatrix: function ( a ) {
        var b = f.Utils.deltaTransformPoint( a, 0, 1 ),
          c = f.Utils.deltaTransformPoint( a, 1, 0 ),
          b = 180 / Math.PI * Math.atan2( b.y, b.x ) - 90,
          c = 180 / Math.PI * Math.atan2( c.y, c.x );
        return {
          translateX: a.e,
          translateY: a.f,
          scaleX: Math.sqrt( a.a * a.a + a.b * a.b ),
          scaleY: Math.sqrt( a.c * a.c + a.d * a.d ),
          skewX: b,
          skewY: c,
          rotation: b
        }
      },
      applySvgAttributes: function ( a, b ) {
        var c = {},
          e = {},
          d, m, h;
        if ( getComputedStyle ) {
          var p =
            getComputedStyle( a );
          for ( d = p.length; d--; ) m = p[ d ], h = p[ m ], void 0 !== h && ( e[ m ] = h )
        }
        for ( d = a.attributes.length; d--; ) h = a.attributes[ d ], c[ h.nodeName ] = h.value;
        _.isUndefined( e.opacity ) || ( e[ "stroke-opacity" ] = e.opacity, e[ "fill-opacity" ] = e.opacity );
        _.extend( e, c );
        e.visible = !( _.isUndefined( e.display ) && "none" === e.display ) || _.isUndefined( e.visibility ) && "hidden" === e.visibility;
        for ( m in e ) switch ( h = e[ m ], m ) {
          case "transform":
            if ( "none" === h ) break;
            if ( null === a.getCTM() ) break;
            c = f.Utils.decomposeMatrix( a.getCTM() );
            b.translation.set( c.translateX,
              c.translateY );
            b.rotation = c.rotation;
            b.scale = c.scaleX;
            e.x && ( b.translation.x = e.x );
            e.y && ( b.translation.y = e.y );
            break;
          case "visible":
            b.visible = h;
            break;
          case "stroke-linecap":
            b.cap = h;
            break;
          case "stroke-linejoin":
            b.join = h;
            break;
          case "stroke-miterlimit":
            b.miter = h;
            break;
          case "stroke-width":
            b.linewidth = parseFloat( h );
            break;
          case "stroke-opacity":
          case "fill-opacity":
          case "opacity":
            b.opacity = parseFloat( h );
            break;
          case "fill":
          case "stroke":
            b[ m ] = "none" === h ? "transparent" : h;
            break;
          case "id":
            b.id = h;
            break;
          case "class":
            b.classList =
              h.split( " " )
        }
        return b
      },
      read: {
        svg: function () {
          return f.Utils.read.g.apply( this, arguments )
        },
        g: function ( a ) {
          var b = new f.Group;
          f.Utils.applySvgAttributes( a, b );
          for ( var c = 0, e = a.childNodes.length; c < e; c++ ) {
            var d = a.childNodes[ c ],
              m = d.nodeName;
            if ( !m ) return;
            m = m.replace( /svg\:/ig, "" ).toLowerCase();
            m in f.Utils.read && ( d = f.Utils.read[ m ].call( this, d ), b.add( d ) )
          }
          return b
        },
        polygon: function ( a, b ) {
          var c = [];
          a.getAttribute( "points" ).replace( /(-?[\d\.?]+),(-?[\d\.?]+)/g, function ( a, b, e ) {
            c.push( new f.Anchor( parseFloat( b ), parseFloat( e ) ) )
          } );
          var e = ( new f.Polygon( c, !b ) ).noStroke();
          e.fill = "black";
          return f.Utils.applySvgAttributes( a, e )
        },
        polyline: function ( a ) {
          return f.Utils.read.polygon( a, !0 )
        },
        path: function ( a ) {
          var b = a.getAttribute( "d" ),
            c = new f.Anchor,
            e, d, h = !1,
            p = !1,
            g = b.match( /[a-df-z][^a-df-z]*/ig ),
            z = g.length - 1;
          _.each( g.slice( 0 ), function ( a, b ) {
            var c = a[ 0 ],
              e = c.toLowerCase(),
              l = a.slice( 1 ).trim().split( /[\s,]+|(?=\s?[+\-])/ ),
              f = [],
              d;
            0 >= b && ( g = [] );
            switch ( e ) {
              case "h":
              case "v":
                1 < l.length && ( d = 1 );
                break;
              case "m":
              case "l":
              case "t":
                2 < l.length && ( d = 2 );
                break;
              case "s":
              case "q":
                4 < l.length && ( d = 4 );
                break;
              case "c":
                6 < l.length && ( d = 6 )
            }
            if ( d ) {
              for ( var e = 0, m = l.length, h = 0; e < m; e += d ) {
                var s = c;
                if ( 0 < h ) switch ( c ) {
                  case "m":
                    s = "l";
                    break;
                  case "M":
                    s = "L"
                }
                f.push( [ s ].concat( l.slice( e, e + d ) ).join( " " ) );
                h++
              }
              g = Array.prototype.concat.apply( g, f )
            } else g.push( a )
          } );
          b = _.flatten( _.map( g, function ( a, b ) {
            var l, s, g = a[ 0 ],
              t = g.toLowerCase();
            d = a.slice( 1 ).trim();
            d = d.replace( /(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g, function ( a, b, c ) {
              return parseFloat( b ) * m( 10, c )
            } );
            d = d.split( /[\s,]+|(?=\s?[+\-])/ );
            p = g === t;
            var v,
              n, r, D;
            switch ( t ) {
              case "z":
                b >= z ? h = !0 : ( s = c.x, l = c.y, l = new f.Anchor( s, l, void 0, void 0, void 0, void 0, f.Commands.close ) );
                break;
              case "m":
              case "l":
                s = parseFloat( d[ 0 ] );
                l = parseFloat( d[ 1 ] );
                l = new f.Anchor( s, l, void 0, void 0, void 0, void 0, "m" === t ? f.Commands.move : f.Commands.line );
                p && l.addSelf( c );
                c = l;
                break;
              case "h":
              case "v":
                s = "h" === t ? "x" : "y";
                g = "x" === s ? "y" : "x";
                l = new f.Anchor( void 0, void 0, void 0, void 0, void 0, void 0, f.Commands.line );
                l[ s ] = parseFloat( d[ 0 ] );
                l[ g ] = c[ g ];
                p && ( l[ s ] += c[ s ] );
                c = l;
                break;
              case "c":
              case "s":
                l = c.x;
                g =
                  c.y;
                e || ( e = new f.Vector );
                "c" === t ? ( v = parseFloat( d[ 0 ] ), s = parseFloat( d[ 1 ] ), t = parseFloat( d[ 2 ] ), n = parseFloat( d[ 3 ] ), r = parseFloat( d[ 4 ] ), D = parseFloat( d[ 5 ] ) ) : ( n = C( c, e, p ), v = n.x, s = n.y, t = parseFloat( d[ 0 ] ), n = parseFloat( d[ 1 ] ), r = parseFloat( d[ 2 ] ), D = parseFloat( d[ 3 ] ) );
                p && ( v += l, s += g, t += l, n += g, r += l, D += g );
                _.isObject( c.controls ) || f.Anchor.AppendCurveProperties( c );
                c.controls.right.set( v - c.x, s - c.y );
                c = l = new f.Anchor( r, D, t - r, n - D, void 0, void 0, f.Commands.curve );
                e = l.controls.left;
                break;
              case "t":
              case "q":
                l = c.x;
                g = c.y;
                e || ( e = new f.Vector );
                e.isZero() ? ( v = l, s = g ) : ( v = e.x, g = e.y );
                "q" === t ? ( t = parseFloat( d[ 0 ] ), n = parseFloat( d[ 1 ] ), r = parseFloat( d[ 1 ] ), D = parseFloat( d[ 2 ] ) ) : ( n = C( c, e, p ), t = n.x, n = n.y, r = parseFloat( d[ 0 ] ), D = parseFloat( d[ 1 ] ) );
                p && ( v += l, s += g, t += l, n += g, r += l, D += g );
                _.isObject( c.controls ) || f.Anchor.AppendCurveProperties( c );
                c.controls.right.set( v - c.x, s - c.y );
                c = l = new f.Anchor( r, D, t - r, n - D, void 0, void 0, f.Commands.curve );
                e = l.controls.left;
                break;
              case "a":
                throw new f.Utils.Error( "not yet able to interpret Elliptical Arcs." );
            }
            return l
          } ) );
          if ( !( 1 >= b.length ) ) return b =
            _.compact( b ), b = ( new f.Polygon( b, h, void 0, !0 ) ).noStroke(), b.fill = "black", f.Utils.applySvgAttributes( a, b )
        },
        circle: function ( a ) {
          var b = parseFloat( a.getAttribute( "cx" ) ),
            c = parseFloat( a.getAttribute( "cy" ) ),
            e = parseFloat( a.getAttribute( "r" ) ),
            d = f.Resolution,
            m = _.map( _.range( d ), function ( a ) {
              var b = a / d * p;
              a = e * g( b );
              b = e * k( b );
              return new f.Anchor( a, b )
            }, this ),
            m = ( new f.Polygon( m, !0, !0 ) ).noStroke();
          m.translation.set( b, c );
          m.fill = "black";
          return f.Utils.applySvgAttributes( a, m )
        },
        ellipse: function ( a ) {
          var b = parseFloat( a.getAttribute( "cx" ) ),
            c = parseFloat( a.getAttribute( "cy" ) ),
            e = parseFloat( a.getAttribute( "rx" ) ),
            d = parseFloat( a.getAttribute( "ry" ) ),
            m = f.Resolution,
            h = _.map( _.range( m ), function ( a ) {
              var b = a / m * p;
              a = e * g( b );
              b = d * k( b );
              return new f.Anchor( a, b )
            }, this ),
            h = ( new f.Polygon( h, !0, !0 ) ).noStroke();
          h.translation.set( b, c );
          h.fill = "black";
          return f.Utils.applySvgAttributes( a, h )
        },
        rect: function ( a ) {
          var b = parseFloat( a.getAttribute( "x" ) ),
            c = parseFloat( a.getAttribute( "y" ) ),
            e = parseFloat( a.getAttribute( "width" ) ),
            d = parseFloat( a.getAttribute( "height" ) ),
            e = e / 2,
            d = d / 2,
            m = [ new f.Anchor( e, d ), new f.Anchor( -e, d ), new f.Anchor( -e, -d ), new f.Anchor( e, -d ) ],
            m = ( new f.Polygon( m, !0 ) ).noStroke();
          m.translation.set( b + e, c + d );
          m.fill = "black";
          return f.Utils.applySvgAttributes( a, m )
        },
        line: function ( a ) {
          var b = parseFloat( a.getAttribute( "x1" ) ),
            c = parseFloat( a.getAttribute( "y1" ) ),
            e = parseFloat( a.getAttribute( "x2" ) ),
            d = parseFloat( a.getAttribute( "y2" ) ),
            e = ( e - b ) / 2,
            d = ( d - c ) / 2,
            m = [ new f.Anchor( -e, -d ), new f.Anchor( e, d ) ],
            m = ( new f.Polygon( m ) ).noFill();
          m.translation.set( b + e, c + d );
          return f.Utils.applySvgAttributes( a,
            m )
        }
      },
      subdivide: function ( a, b, c, e, d, m, h, p, g ) {
        g = g || f.Utils.Curve.RecursionLimit;
        var t = g + 1;
        return a === h && b === p ? [ new f.Anchor( h, p ) ] : _.map( _.range( 0, t ), function ( j ) {
          var g = j / t;
          j = y( g, a, c, d, h );
          g = y( g, b, e, m, p );
          return new f.Anchor( j, g )
        } )
      },
      getPointOnCubicBezier: function ( a, b, c, e, d ) {
        var f = 1 - a;
        return f * f * f * b + 3 * f * f * a * c + 3 * f * a * a * e + a * a * a * d
      },
      getCurveLength: function ( a, b, e, d, m, h, p, g, t ) {
        if ( a === e && b === d && m === p && h === g ) return a = p - a, b = g - b, c( a * a + b * b );
        var z = 9 * ( e - m ) + 3 * ( p - a ),
          j = 6 * ( a + m ) - 12 * e,
          v = 3 * ( e - a ),
          n = 9 * ( d - h ) + 3 * ( g - b ),
          r = 6 * ( b + h ) - 12 *
          d,
          D = 3 * ( d - b );
        return E( function ( a ) {
          var b = ( z * a + j ) * a + v;
          a = ( n * a + r ) * a + D;
          return c( b * b + a * a )
        }, 0, 1, t || f.Utils.Curve.RecursionLimit )
      },
      integrate: function ( a, b, c, e ) {
        var d = f.Utils.Curve.abscissas[ e - 2 ],
          m = f.Utils.Curve.weights[ e - 2 ];
        c = 0.5 * ( c - b );
        b = c + b;
        var h = 0,
          p = e + 1 >> 1;
        for ( e = e & 1 ? m[ h++ ] * a( b ) : 0; h < p; ) {
          var g = c * d[ h ];
          e += m[ h++ ] * ( a( b + g ) + a( b - g ) )
        }
        return c * e
      },
      getCurveFromPoints: function ( a, b ) {
        for ( var c = a.length, e = c - 1, d = 0; d < c; d++ ) {
          var m = a[ d ];
          _.isObject( m.controls ) || f.Anchor.AppendCurveProperties( m );
          var h = b ? A( d - 1, c ) : t( d - 1, 0 ),
            g = b ? A( d +
              1, c ) : z( d + 1, e );
          x( a[ h ], m, a[ g ] );
          m._command = 0 === d ? f.Commands.move : f.Commands.curve;
          m.controls.left.x = _.isNumber( m.controls.left.x ) ? m.controls.left.x : m.x;
          m.controls.left.y = _.isNumber( m.controls.left.y ) ? m.controls.left.y : m.y;
          m.controls.right.x = _.isNumber( m.controls.right.x ) ? m.controls.right.x : m.x;
          m.controls.right.y = _.isNumber( m.controls.right.y ) ? m.controls.right.y : m.y
        }
      },
      getControlPoints: function ( b, c, e ) {
        var d = B( b, c ),
          m = B( e, c );
        b = r( b, c );
        e = r( e, c );
        var p = ( d + m ) / 2;
        c.u = _.isObject( c.controls.left ) ? c.controls.left :
          new f.Vector( 0, 0 );
        c.v = _.isObject( c.controls.right ) ? c.controls.right : new f.Vector( 0, 0 );
        if ( 1E-4 > b || 1E-4 > e ) return c._relative || ( c.controls.left.copy( c ), c.controls.right.copy( c ) ), c;
        b *= 0.33;
        e *= 0.33;
        p = m < d ? p + a : p - a;
        c.controls.left.x = g( p ) * b;
        c.controls.left.y = k( p ) * b;
        p -= h;
        c.controls.right.x = g( p ) * e;
        c.controls.right.y = k( p ) * e;
        c._relative || ( c.controls.left.x += c.x, c.controls.left.y += c.y, c.controls.right.x += c.x, c.controls.right.y += c.y );
        return c
      },
      getReflection: function ( a, b, c ) {
        return new f.Vector( 2 * a.x - ( b.x + a.x ) - ( c ?
          a.x : 0 ), 2 * a.y - ( b.y + a.y ) - ( c ? a.y : 0 ) )
      },
      angleBetween: function ( a, c ) {
        var e, d;
        if ( 4 <= arguments.length ) return e = arguments[ 0 ] - arguments[ 2 ], d = arguments[ 1 ] - arguments[ 3 ], b( d, e );
        e = a.x - c.x;
        d = a.y - c.y;
        return b( d, e )
      },
      distanceBetweenSquared: function ( a, b ) {
        var c = a.x - b.x,
          e = a.y - b.y;
        return c * c + e * e
      },
      distanceBetween: function ( a, b ) {
        return c( u( a, b ) )
      },
      toFixed: function ( a ) {
        return Math.floor( 1E3 * a ) / 1E3
      },
      mod: function ( a, b ) {
        for ( ; 0 > a; ) a += b;
        return a % b
      },
      Collection: function () {
        Array.call( this );
        1 < arguments.length ? Array.prototype.push.apply( this,
          arguments ) : arguments[ 0 ] && Array.isArray( arguments[ 0 ] ) && Array.prototype.push.apply( this, arguments[ 0 ] )
      },
      Error: function ( a ) {
        this.name = "two.js";
        this.message = a
      }
    }
  } );
  f.Utils.Error.prototype = Error();
  f.Utils.Error.prototype.constructor = f.Utils.Error;
  f.Utils.Collection.prototype = [];
  f.Utils.Collection.constructor = f.Utils.Collection;
  _.extend( f.Utils.Collection.prototype, Backbone.Events, {
    pop: function () {
      var a = Array.prototype.pop.apply( this, arguments );
      this.trigger( f.Events.remove, [ a ] );
      return a
    },
    shift: function () {
      var a =
        Array.prototype.shift.apply( this, arguments );
      this.trigger( f.Events.remove, [ a ] );
      return a
    },
    push: function () {
      var a = Array.prototype.push.apply( this, arguments );
      this.trigger( f.Events.insert, arguments );
      return a
    },
    unshift: function () {
      var a = Array.prototype.unshift.apply( this, arguments );
      this.trigger( f.Events.insert, arguments );
      return a
    },
    splice: function () {
      var a = Array.prototype.splice.apply( this, arguments ),
        b;
      this.trigger( f.Events.remove, a );
      2 < arguments.length && ( b = this.slice( arguments[ 0 ], arguments.length - 2 ), this.trigger( f.Events.insert,
        b ) );
      return a
    }
  } );
  var r = f.Utils.distanceBetween,
    u = f.Utils.distanceBetweenSquared,
    B = f.Utils.angleBetween,
    x = f.Utils.getControlPoints,
    A = f.Utils.mod,
    e = f.Utils.getBackingStoreRatio,
    y = f.Utils.getPointOnCubicBezier,
    E = f.Utils.integrate,
    C = f.Utils.getReflection;
  _.extend( f.prototype, Backbone.Events, {
    appendTo: function ( a ) {
      a.appendChild( this.renderer.domElement );
      return this
    },
    play: function () {
      f.Utils.setPlaying.call( this, !0 );
      return this.trigger( f.Events.play )
    },
    pause: function () {
      this.playing = !1;
      return this.trigger( f.Events.pause )
    },
    update: function () {
      var a = !!this._lastFrame,
        b = ( q.performance && q.performance.now ? q.performance : Date ).now();
      this.frameCount++;
      a && ( this.timeDelta = parseFloat( ( b - this._lastFrame ).toFixed( 3 ) ) );
      this._lastFrame = b;
      var a = this.width,
        b = this.height,
        c = this.renderer;
      ( a !== c.width || b !== c.height ) && c.setSize( a, b, this.ratio );
      this.trigger( f.Events.update, this.frameCount, this.timeDelta );
      return this.render()
    },
    render: function () {
      this.renderer.render();
      return this.trigger( f.Events.render, this.frameCount )
    },
    add: function ( a ) {
      var b =
        a;
      _.isArray( a ) || ( b = _.toArray( arguments ) );
      this.scene.add( b );
      return this
    },
    remove: function ( a ) {
      var b = a;
      _.isArray( a ) || ( b = _.toArray( arguments ) );
      this.scene.remove( b );
      return this
    },
    clear: function () {
      this.scene.remove( _.toArray( this.scene.children ) );
      return this
    },
    makeLine: function ( a, b, c, e ) {
      c = ( c - a ) / 2;
      e = ( e - b ) / 2;
      var d = [ new f.Anchor( -c, -e ), new f.Anchor( c, e ) ],
        d = ( new f.Polygon( d ) ).noFill();
      d.translation.set( a + c, b + e );
      this.scene.add( d );
      return d
    },
    makeRectangle: function ( a, b, c, e ) {
      c /= 2;
      e /= 2;
      e = [ new f.Anchor( -c, -e ), new f.Anchor( c, -e ), new f.Anchor( c, e ), new f.Anchor( -c, e ) ];
      e = new f.Polygon( e, !0 );
      e.translation.set( a, b );
      this.scene.add( e );
      return e
    },
    makeCircle: function ( a, b, c ) {
      return this.makeEllipse( a, b, c, c )
    },
    makeEllipse: function ( a, b, c, e ) {
      var d = f.Resolution,
        m = _.map( _.range( d ), function ( a ) {
          var b = a / d * p;
          a = c * g( b );
          b = e * k( b );
          return new f.Anchor( a, b )
        }, this ),
        m = new f.Polygon( m, !0, !0 );
      m.translation.set( a, b );
      this.scene.add( m );
      return m
    },
    makeCurve: function ( a ) {
      var b = arguments.length,
        c = a;
      if ( !_.isArray( a ) )
        for ( var c = [], e = 0; e < b; e += 2 ) {
          var d = arguments[ e ];
          if ( !_.isNumber( d ) ) break;
          c.push( new f.Anchor( d, arguments[ e + 1 ] ) )
        }
      var b = arguments[ b - 1 ],
        c = new f.Polygon( c, !( _.isBoolean( b ) && b ), !0 ),
        b = c.getBoundingClientRect(),
        m = b.left + b.width / 2,
        h = b.top + b.height / 2;
      _.each( c.vertices, function ( a ) {
        a.x -= m;
        a.y -= h
      } );
      c.translation.set( m, h );
      this.scene.add( c );
      return c
    },
    makePolygon: function ( a ) {
      var b = arguments.length,
        c = a;
      if ( !_.isArray( a ) )
        for ( var c = [], e = 0; e < b; e += 2 ) {
          var d = arguments[ e ];
          if ( !_.isNumber( d ) ) break;
          c.push( new f.Anchor( d, arguments[ e + 1 ] ) )
        }
      b = arguments[ b - 1 ];
      c = new f.Polygon( c, !( _.isBoolean( b ) && b ) );
      b = c.getBoundingClientRect();
      c.center().translation.set( b.left + b.width / 2, b.top + b.height / 2 );
      this.scene.add( c );
      return c
    },
    makeGroup: function ( a ) {
      var b = a;
      _.isArray( a ) || ( b = _.toArray( arguments ) );
      var c = new f.Group;
      this.scene.add( c );
      c.add( b );
      return c
    },
    interpret: function ( a, b ) {
      var c = a.tagName.toLowerCase();
      if ( !( c in f.Utils.read ) ) return null;
      c = f.Utils.read[ c ].call( this, a );
      b && c instanceof f.Group ? this.add( _.values( c.children ) ) : this.add( c );
      return c
    }
  } );
  ( function () {
    requestAnimationFrame( arguments.callee );
    f.Instances.forEach( function ( a ) {
      a.playing && a.update()
    } )
  } )();
  "function" === typeof define && define.amd ? define( function () {
    return f
  } ) : "undefined" != typeof module && module.exports && ( module.exports = f )
} )();
( function ( d ) {
  var q = d.Vector = function ( b, c ) {
    this.x = b || 0;
    this.y = c || 0
  };
  _.extend( q, {
    zero: new d.Vector
  } );
  _.extend( q.prototype, Backbone.Events, {
    set: function ( b, c ) {
      this.x = b;
      this.y = c;
      return this
    },
    copy: function ( b ) {
      this.x = b.x;
      this.y = b.y;
      return this
    },
    clear: function () {
      this.y = this.x = 0;
      return this
    },
    clone: function () {
      return new q( this.x, this.y )
    },
    add: function ( b, c ) {
      this.x = b.x + c.x;
      this.y = b.y + c.y;
      return this
    },
    addSelf: function ( b ) {
      this.x += b.x;
      this.y += b.y;
      return this
    },
    sub: function ( b, c ) {
      this.x = b.x - c.x;
      this.y = b.y - c.y;
      return this
    },
    subSelf: function ( b ) {
      this.x -= b.x;
      this.y -= b.y;
      return this
    },
    multiplySelf: function ( b ) {
      this.x *= b.x;
      this.y *= b.y;
      return this
    },
    multiplyScalar: function ( b ) {
      this.x *= b;
      this.y *= b;
      return this
    },
    divideScalar: function ( b ) {
      b ? ( this.x /= b, this.y /= b ) : this.set( 0, 0 );
      return this
    },
    negate: function () {
      return this.multiplyScalar( -1 )
    },
    dot: function ( b ) {
      return this.x * b.x + this.y * b.y
    },
    lengthSquared: function () {
      return this.x * this.x + this.y * this.y
    },
    length: function () {
      return Math.sqrt( this.lengthSquared() )
    },
    normalize: function () {
      return this.divideScalar( this.length() )
    },
    distanceTo: function ( b ) {
      return Math.sqrt( this.distanceToSquared( b ) )
    },
    distanceToSquared: function ( b ) {
      var c = this.x - b.x;
      b = this.y - b.y;
      return c * c + b * b
    },
    setLength: function ( b ) {
      return this.normalize().multiplyScalar( b )
    },
    equals: function ( b ) {
      return 1E-4 > this.distanceTo( b )
    },
    lerp: function ( b, c ) {
      return this.set( ( b.x - this.x ) * c + this.x, ( b.y - this.y ) * c + this.y )
    },
    isZero: function () {
      return 1E-4 > this.length()
    },
    toString: function () {
      return this.x + "," + this.y
    },
    toObject: function () {
      return {
        x: this.x,
        y: this.y
      }
    }
  } );
  var n = {
      set: function ( b,
        c ) {
        this._x = b;
        this._y = c;
        return this.trigger( d.Events.change )
      },
      copy: function ( b ) {
        this._x = b.x;
        this._y = b.y;
        return this.trigger( d.Events.change )
      },
      clear: function () {
        this._y = this._x = 0;
        return this.trigger( d.Events.change )
      },
      clone: function () {
        return new q( this._x, this._y )
      },
      add: function ( b, c ) {
        this._x = b.x + c.x;
        this._y = b.y + c.y;
        return this.trigger( d.Events.change )
      },
      addSelf: function ( b ) {
        this._x += b.x;
        this._y += b.y;
        return this.trigger( d.Events.change )
      },
      sub: function ( b, c ) {
        this._x = b.x - c.x;
        this._y = b.y - c.y;
        return this.trigger( d.Events.change )
      },
      subSelf: function ( b ) {
        this._x -= b.x;
        this._y -= b.y;
        return this.trigger( d.Events.change )
      },
      multiplySelf: function ( b ) {
        this._x *= b.x;
        this._y *= b.y;
        return this.trigger( d.Events.change )
      },
      multiplyScalar: function ( b ) {
        this._x *= b;
        this._y *= b;
        return this.trigger( d.Events.change )
      },
      divideScalar: function ( b ) {
        return b ? ( this._x /= b, this._y /= b, this.trigger( d.Events.change ) ) : this.clear()
      },
      negate: function () {
        return this.multiplyScalar( -1 )
      },
      dot: function ( b ) {
        return this._x * b.x + this._y * b.y
      },
      lengthSquared: function () {
        return this._x * this._x +
          this._y * this._y
      },
      length: function () {
        return Math.sqrt( this.lengthSquared() )
      },
      normalize: function () {
        return this.divideScalar( this.length() )
      },
      distanceTo: function ( b ) {
        return Math.sqrt( this.distanceToSquared( b ) )
      },
      distanceToSquared: function ( b ) {
        var c = this._x - b.x;
        b = this._y - b.y;
        return c * c + b * b
      },
      setLength: function ( b ) {
        return this.normalize().multiplyScalar( b )
      },
      equals: function ( b ) {
        return 1E-4 > this.distanceTo( b )
      },
      lerp: function ( b, c ) {
        return this.set( ( b.x - this._x ) * c + this._x, ( b.y - this._y ) * c + this._y )
      },
      isZero: function () {
        return 1E-4 >
          this.length()
      },
      toString: function () {
        return this._x + "," + this._y
      },
      toObject: function () {
        return {
          x: this._x,
          y: this._y
        }
      }
    },
    k = {
      get: function () {
        return this._x
      },
      set: function ( b ) {
        this._x = b;
        this.trigger( d.Events.change, "x" )
      }
    },
    g = {
      get: function () {
        return this._y
      },
      set: function ( b ) {
        this._y = b;
        this.trigger( d.Events.change, "y" )
      }
    };
  d.Vector.prototype.bind = d.Vector.prototype.on = function () {
    this._bound || ( this._x = this.x, this._y = this.y, Object.defineProperty( this, "x", k ), Object.defineProperty( this, "y", g ), _.extend( this, n ), this._bound = !0 );
    Backbone.Events.bind.apply( this, arguments );
    return this
  }
} )( Two );
( function ( d ) {
  var q = d.Commands,
    n = d.Anchor = function ( g, b, c, h, p, a, m ) {
      d.Vector.call( this, g, b );
      this._broadcast = _.bind( function () {
        this.trigger( d.Events.change )
      }, this );
      this._command = m || q.move;
      this._relative = !0;
      if ( !m ) return this;
      n.AppendCurveProperties( this );
      _.isNumber( c ) && ( this.controls.left.x = c );
      _.isNumber( h ) && ( this.controls.left.y = h );
      _.isNumber( p ) && ( this.controls.right.x = p );
      _.isNumber( a ) && ( this.controls.right.y = a )
    };
  _.extend( n, {
    AppendCurveProperties: function ( g ) {
      g.controls = {
        left: new d.Vector( 0, 0 ),
        right: new d.Vector( 0,
          0 )
      }
    }
  } );
  var k = {
    listen: function () {
      _.isObject( this.controls ) || n.AppendCurveProperties( this );
      this.controls.left.bind( d.Events.change, this._broadcast );
      this.controls.right.bind( d.Events.change, this._broadcast );
      return this
    },
    ignore: function () {
      this.controls.left.unbind( d.Events.change, this._broadcast );
      this.controls.right.unbind( d.Events.change, this._broadcast );
      return this
    },
    clone: function () {
      var g = this.controls,
        g = new d.Anchor( this.x, this.y, g && g.left.x, g && g.left.y, g && g.right.x, g && g.right.y, this.command );
      g.relative =
        this._relative;
      return g
    },
    toObject: function () {
      var d = {
        x: this.x,
        y: this.y
      };
      this._command && ( d.command = this._command );
      this._relative && ( d.relative = this._relative );
      this.controls && ( d.controls = {
        left: this.controls.left.toObject(),
        right: this.controls.right.toObject()
      } );
      return d
    }
  };
  Object.defineProperty( n.prototype, "command", {
    get: function () {
      return this._command
    },
    set: function ( g ) {
      this._command = g;
      this._command === q.curve && !_.isObject( this.controls ) && n.AppendCurveProperties( this );
      return this.trigger( d.Events.change )
    }
  } );
  Object.defineProperty( n.prototype, "relative", {
    get: function () {
      return this._relative
    },
    set: function ( g ) {
      if ( this._relative == g ) return this;
      this._relative = !!g;
      return this.trigger( d.Events.change )
    }
  } );
  _.extend( n.prototype, d.Vector.prototype, k );
  d.Anchor.prototype.bind = d.Anchor.prototype.on = function () {
    d.Vector.prototype.bind.apply( this, arguments );
    _.extend( this, k )
  };
  d.Anchor.prototype.unbind = d.Anchor.prototype.off = function () {
    d.Vector.prototype.unbind.apply( this, arguments );
    _.extend( this, k )
  }
} )( Two );
( function ( d ) {
  var q = Math.cos,
    n = Math.sin,
    k = Math.tan,
    g = d.Matrix = function ( b, c, h, p, a, m ) {
      this.elements = new d.Array( 9 );
      var g = b;
      _.isArray( g ) || ( g = _.toArray( arguments ) );
      this.identity().set( g )
    };
  _.extend( g, {
    Identity: [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
    Multiply: function ( b, c, h ) {
      if ( 3 >= c.length ) {
        h = c[ 0 ] || 0;
        var p = c[ 1 ] || 0;
        c = c[ 2 ] || 0;
        return {
          x: b[ 0 ] * h + b[ 1 ] * p + b[ 2 ] * c,
          y: b[ 3 ] * h + b[ 4 ] * p + b[ 5 ] * c,
          z: b[ 6 ] * h + b[ 7 ] * p + b[ 8 ] * c
        }
      }
      var p = b[ 0 ],
        a = b[ 1 ],
        m = b[ 2 ],
        g = b[ 3 ],
        t = b[ 4 ],
        v = b[ 5 ],
        n = b[ 6 ],
        f = b[ 7 ];
      b = b[ 8 ];
      var r = c[ 0 ],
        u = c[ 1 ],
        k = c[ 2 ],
        q = c[ 3 ],
        A = c[ 4 ],
        e = c[ 5 ],
        y = c[ 6 ],
        E = c[ 7 ];
      c = c[ 8 ];
      h = h || new d.Array( 9 );
      h[ 0 ] = p * r + a * q + m * y;
      h[ 1 ] = p * u + a * A + m * E;
      h[ 2 ] = p * k + a * e + m * c;
      h[ 3 ] = g * r + t * q + v * y;
      h[ 4 ] = g * u + t * A + v * E;
      h[ 5 ] = g * k + t * e + v * c;
      h[ 6 ] = n * r + f * q + b * y;
      h[ 7 ] = n * u + f * A + b * E;
      h[ 8 ] = n * k + f * e + b * c;
      return h
    }
  } );
  _.extend( g.prototype, Backbone.Events, {
    set: function ( b ) {
      var c = b;
      _.isArray( c ) || ( c = _.toArray( arguments ) );
      _.extend( this.elements, c );
      return this.trigger( d.Events.change )
    },
    identity: function () {
      this.set( g.Identity );
      return this
    },
    multiply: function ( b, c, h, p, a, m, g, t, v ) {
      var n = arguments,
        f = n.length;
      if ( 1 >= f ) return _.each( this.elements,
        function ( a, c ) {
          this.elements[ c ] = a * b
        }, this ), this.trigger( d.Events.change );
      if ( 3 >= f ) return b = b || 0, c = c || 0, h = h || 0, a = this.elements, {
        x: a[ 0 ] * b + a[ 1 ] * c + a[ 2 ] * h,
        y: a[ 3 ] * b + a[ 4 ] * c + a[ 5 ] * h,
        z: a[ 6 ] * b + a[ 7 ] * c + a[ 8 ] * h
      };
      var r = this.elements,
        u = n,
        n = r[ 0 ],
        f = r[ 1 ],
        k = r[ 2 ],
        q = r[ 3 ],
        A = r[ 4 ],
        e = r[ 5 ],
        y = r[ 6 ],
        E = r[ 7 ],
        r = r[ 8 ],
        C = u[ 0 ],
        l = u[ 1 ],
        s = u[ 2 ],
        w = u[ 3 ],
        G = u[ 4 ],
        F = u[ 5 ],
        H = u[ 6 ],
        I = u[ 7 ],
        u = u[ 8 ];
      this.elements[ 0 ] = n * C + f * w + k * H;
      this.elements[ 1 ] = n * l + f * G + k * I;
      this.elements[ 2 ] = n * s + f * F + k * u;
      this.elements[ 3 ] = q * C + A * w + e * H;
      this.elements[ 4 ] = q * l + A * G + e * I;
      this.elements[ 5 ] =
        q * s + A * F + e * u;
      this.elements[ 6 ] = y * C + E * w + r * H;
      this.elements[ 7 ] = y * l + E * G + r * I;
      this.elements[ 8 ] = y * s + E * F + r * u;
      return this.trigger( d.Events.change )
    },
    inverse: function ( b ) {
      var c = this.elements;
      b = b || new d.Matrix;
      var h = c[ 0 ],
        p = c[ 1 ],
        a = c[ 2 ],
        m = c[ 3 ],
        g = c[ 4 ],
        t = c[ 5 ],
        v = c[ 6 ],
        n = c[ 7 ],
        c = c[ 8 ],
        f = c * g - t * n,
        r = -c * m + t * v,
        k = n * m - g * v,
        q = h * f + p * r + a * k;
      if ( !q ) return null;
      q = 1 / q;
      b.elements[ 0 ] = f * q;
      b.elements[ 1 ] = ( -c * p + a * n ) * q;
      b.elements[ 2 ] = ( t * p - a * g ) * q;
      b.elements[ 3 ] = r * q;
      b.elements[ 4 ] = ( c * h - a * v ) * q;
      b.elements[ 5 ] = ( -t * h + a * m ) * q;
      b.elements[ 6 ] = k * q;
      b.elements[ 7 ] =
        ( -n * h + p * v ) * q;
      b.elements[ 8 ] = ( g * h - p * m ) * q;
      return b
    },
    scale: function ( b, c ) {
      1 >= arguments.length && ( c = b );
      return this.multiply( b, 0, 0, 0, c, 0, 0, 0, 1 )
    },
    rotate: function ( b ) {
      var c = q( b );
      b = n( b );
      return this.multiply( c, -b, 0, b, c, 0, 0, 0, 1 )
    },
    translate: function ( b, c ) {
      return this.multiply( 1, 0, b, 0, 1, c, 0, 0, 1 )
    },
    skewX: function ( b ) {
      b = k( b );
      return this.multiply( 1, b, 0, 0, 1, 0, 0, 0, 1 )
    },
    skewY: function ( b ) {
      b = k( b );
      return this.multiply( 1, 0, 0, b, 1, 0, 0, 0, 1 )
    },
    toString: function ( b ) {
      var c = [];
      this.toArray( b, c );
      return c.join( " " )
    },
    toArray: function ( b, c ) {
      var d =
        this.elements,
        g = !!c,
        a = parseFloat( d[ 0 ].toFixed( 3 ) ),
        m = parseFloat( d[ 1 ].toFixed( 3 ) ),
        n = parseFloat( d[ 2 ].toFixed( 3 ) ),
        t = parseFloat( d[ 3 ].toFixed( 3 ) ),
        v = parseFloat( d[ 4 ].toFixed( 3 ) ),
        k = parseFloat( d[ 5 ].toFixed( 3 ) );
      if ( b ) {
        var f = parseFloat( d[ 6 ].toFixed( 3 ) ),
          r = parseFloat( d[ 7 ].toFixed( 3 ) ),
          d = parseFloat( d[ 8 ].toFixed( 3 ) );
        if ( g ) {
          c[ 0 ] = a;
          c[ 1 ] = t;
          c[ 2 ] = f;
          c[ 3 ] = m;
          c[ 4 ] = v;
          c[ 5 ] = r;
          c[ 6 ] = n;
          c[ 7 ] = k;
          c[ 8 ] = d;
          return
        }
        return [ a, t, f, m, v, r, n, k, d ]
      }
      if ( g ) c[ 0 ] = a, c[ 1 ] = t, c[ 2 ] = m, c[ 3 ] = v, c[ 4 ] = n, c[ 5 ] = k;
      else return [ a, t, m, v, n, k ]
    },
    clone: function () {
      return new d.Matrix( this.elements[ 0 ],
        this.elements[ 1 ], this.elements[ 2 ], this.elements[ 3 ], this.elements[ 4 ], this.elements[ 5 ], this.elements[ 6 ], this.elements[ 7 ], this.elements[ 8 ] )
    }
  } )
} )( Two );
( function ( d ) {
  var q = d.Utils.mod,
    n = d.Utils.toFixed,
    k = {
      version: 1.1,
      ns: "http://www.w3.org/2000/svg",
      xlink: "http://www.w3.org/1999/xlink",
      createElement: function ( b, c ) {
        var d = document.createElementNS( this.ns, b );
        "svg" === b && ( c = _.defaults( c || {}, {
          version: this.version
        } ) );
        _.isObject( c ) && k.setAttributes( d, c );
        return d
      },
      setAttributes: function ( b, c ) {
        for ( var d in c ) b.setAttribute( d, c[ d ] );
        return this
      },
      removeAttributes: function ( b, c ) {
        for ( var d in c ) b.removeAttribute( d );
        return this
      },
      toString: function ( b, c ) {
        for ( var g = b.length,
            p = g - 1, a, m = "", z = 0; z < g; z++ ) {
          var t = b[ z ],
            v, k = c ? q( z - 1, g ) : Math.max( z - 1, 0 ),
            f = c ? q( z + 1, g ) : Math.min( z + 1, p );
          v = b[ k ];
          var r = b[ f ],
            u, B, x, k = n( t._x ),
            r = n( t._y );
          switch ( t._command ) {
            case d.Commands.close:
              v = d.Commands.close;
              break;
            case d.Commands.curve:
              u = v.controls && v.controls.right || v;
              x = t.controls && t.controls.left || t;
              v._relative ? ( f = n( u.x + v.x ), u = n( u.y + v.y ) ) : ( f = n( u.x ), u = n( u.y ) );
              t._relative ? ( B = n( x.x + t.x ), x = n( x.y + t.y ) ) : ( B = n( x.x ), x = n( x.y ) );
              v = ( 0 === z ? d.Commands.move : d.Commands.curve ) + " " + f + " " + u + " " + B + " " + x + " " + k + " " + r;
              break;
            case d.Commands.move:
              a = t;
              v = d.Commands.move + " " + k + " " + r;
              break;
            default:
              v = t._command + " " + k + " " + r
          }
          z >= p && c && ( t._command === d.Commands.curve && ( r = a, u = t.controls && t.controls.right || t, k = r.controls && r.controls.left || r, t._relative ? ( f = n( u.x + t.x ), u = n( u.y + t.y ) ) : ( f = n( u.x ), u = n( u.y ) ), r._relative ? ( B = n( k.x + r.x ), x = n( k.y + r.y ) ) : ( B = n( k.x ), x = n( k.y ) ), k = n( r.x ), r = n( r.y ), v += " C " + f + " " + u + " " + B + " " + x + " " + k + " " + r ), v += " Z" );
          m += v + " "
        }
        return m
      },
      getClip: function ( b ) {
        clip = b._renderer.clip;
        if ( !clip ) {
          for ( root = b; root.parent; ) root = root.parent;
          clip = b._renderer.clip = k.createElement( "clipPath" );
          root.defs.appendChild( clip )
        }
        return clip
      },
      group: {
        appendChild: function ( b ) {
          if ( b = this.domElement.querySelector( "#" + b ) ) {
            var c = b.nodeName;
            c && ( c = c.replace( /svg\:/ig, "" ).toLowerCase(), /clippath/.test( c ) || this.elem.appendChild( b ) )
          }
        },
        removeChild: function ( b ) {
          if ( b = this.domElement.querySelector( "#" + b ) ) {
            var c = b.nodeName;
            c && ( c = c.replace( /svg\:/ig, "" ).toLowerCase(), /clippath/.test( c ) || this.elem.removeChild( b ) )
          }
        },
        renderChild: function ( b ) {
          k[ b._renderer.type ].render.call( b,
            this )
        },
        render: function ( b ) {
          this._update();
          if ( 0 === this._opacity && !this._flagOpacity ) return this;
          this._renderer.elem || ( this._renderer.elem = k.createElement( "g", {
            id: this.id
          } ), b.appendChild( this._renderer.elem ) );
          var c = {
            domElement: b,
            elem: this._renderer.elem
          };
          ( this._matrix.manual || this._flagMatrix ) && this._renderer.elem.setAttribute( "transform", "matrix(" + this._matrix.toString() + ")" );
          for ( var d in this.children ) {
            var g = this.children[ d ];
            k[ g._renderer.type ].render.call( g, b )
          }
          this._flagOpacity && this._renderer.elem.setAttribute( "opacity",
            this._opacity );
          this._flagAdditions && _.each( this.additions, k.group.appendChild, c );
          this._flagSubtractions && _.each( this.subtractions, k.group.removeChild, c );
          this._flagMask && ( this._mask ? this._renderer.elem.setAttribute( "clip-path", "url(#" + this._mask.id + ")" ) : this._renderer.elem.removeAttribute( "clip-path" ) );
          return this.flagReset()
        }
      },
      polygon: {
        render: function ( b ) {
          this._update();
          if ( 0 === this._opacity && !this._flagOpacity ) return this;
          var c = {};
          if ( this._matrix.manual || this._flagMatrix ) c.transform = "matrix(" + this._matrix.toString() +
            ")";
          if ( this._flagVertices ) {
            var d = k.toString( this._vertices, this._closed );
            c.d = d
          }
          this._flagFill && ( c.fill = this._fill );
          this._flagStroke && ( c.stroke = this._stroke );
          this._flagLinewidth && ( c[ "stroke-width" ] = this._linewidth );
          this._flagOpacity && ( c[ "stroke-opacity" ] = this._opacity, c[ "fill-opacity" ] = this._opacity );
          this._flagVisible && ( c.visibility = this._visible ? "visible" : "hidden" );
          this._flagCap && ( c[ "stroke-linecap" ] = this._cap );
          this._flagJoin && ( c[ "stroke-linejoin" ] = this._join );
          this._flagMiter && ( c[ "stroke-miterlimit" ] =
            this.miter );
          this._renderer.elem ? k.setAttributes( this._renderer.elem, c ) : ( c.id = this.id, this._renderer.elem = k.createElement( "path", c ), b.appendChild( this._renderer.elem ) );
          this._flagClip && ( clip = k.getClip( this ), elem = this._renderer.elem, this._clip ? ( elem.removeAttribute( "id" ), clip.setAttribute( "id", this.id ), clip.appendChild( elem ) ) : ( clip.removeAttribute( "id" ), elem.setAttribute( "id", this.id ), this.parent._renderer.elem.appendChild( elem ) ) );
          return this.flagReset()
        }
      }
    },
    g = d[ d.Types.svg ] = function ( b ) {
      this.domElement =
        b.domElement || k.createElement( "svg" );
      this.scene = new d.Group;
      this.scene.parent = this;
      this.defs = k.createElement( "defs" );
      this.domElement.appendChild( this.defs )
    };
  _.extend( g, {
    Utils: k
  } );
  _.extend( g.prototype, Backbone.Events, {
    setSize: function ( b, c ) {
      this.width = b;
      this.height = c;
      k.setAttributes( this.domElement, {
        width: b,
        height: c
      } );
      return this
    },
    render: function () {
      k.group.render.call( this.scene, this.domElement );
      return this
    }
  } )
} )( Two );
( function ( d ) {
  var q = d.Utils.mod,
    n = d.Utils.toFixed,
    k = d.Utils.getRatio,
    g = {
      group: {
        renderChild: function ( b ) {
          g[ b._renderer.type ].render.call( b, this.ctx, !0, this.clip )
        },
        render: function ( b ) {
          this._update();
          var d = this._matrix.elements,
            p = this.parent;
          this._renderer.opacity = this._opacity * ( p && p._renderer ? p._renderer.opacity : 1 );
          p = this._mask;
          this._renderer.context || ( this._renderer.context = {} );
          this._renderer.context.ctx = b;
          b.save();
          b.transform( d[ 0 ], d[ 3 ], d[ 1 ], d[ 4 ], d[ 2 ], d[ 5 ] );
          p && g[ p._renderer.type ].render.call( p, b, !0 );
          _.each( this.children, g.group.renderChild, this._renderer.context );
          b.restore();
          return this.flagReset()
        }
      },
      polygon: {
        render: function ( b, g, p ) {
          var a, m, z, t, v, k, f, r, u, B, x, A, e, y, E, C, l, s, w, G, F, H, I, J, L, M, j, K, N;
          this._update();
          a = this._matrix.elements;
          m = this._stroke;
          z = this._linewidth;
          t = this._fill;
          v = this._opacity * this.parent._renderer.opacity;
          k = this._visible;
          f = this._cap;
          r = this._join;
          u = this._miter;
          B = this._closed;
          x = this._vertices;
          A = x.length;
          e = A - 1;
          N = this._clip;
          if ( !g && ( !k || N ) ) return this;
          b.save();
          a && b.transform( a[ 0 ],
            a[ 3 ], a[ 1 ], a[ 4 ], a[ 2 ], a[ 5 ] );
          t && ( b.fillStyle = t );
          m && ( b.strokeStyle = m );
          z && ( b.lineWidth = z );
          u && ( b.miterLimit = u );
          r && ( b.lineJoin = r );
          f && ( b.lineCap = f );
          _.isNumber( v ) && ( b.globalAlpha = v );
          b.beginPath();
          x.forEach( function ( a, m ) {
            j = n( a.x );
            K = n( a.y );
            switch ( a._command ) {
              case d.Commands.close:
                b.closePath();
                break;
              case d.Commands.curve:
                E = B ? q( m - 1, A ) : Math.max( m - 1, 0 );
                y = B ? q( m + 1, A ) : Math.min( m + 1, e );
                C = x[ E ];
                l = x[ y ];
                I = C.controls && C.controls.right || C;
                J = a.controls && a.controls.left || a;
                C._relative ? ( F = I.x + n( C.x ), H = I.y + n( C.y ) ) : ( F = n( I.x ),
                  H = n( I.y ) );
                a._relative ? ( w = J.x + n( a.x ), G = J.y + n( a.y ) ) : ( w = n( J.x ), G = n( J.y ) );
                b.bezierCurveTo( F, H, w, G, j, K );
                m >= e && B && ( l = s, L = a.controls && a.controls.right || a, M = l.controls && l.controls.left || l, a._relative ? ( F = L.x + n( a.x ), H = L.y + n( a.y ) ) : ( F = n( L.x ), H = n( L.y ) ), l._relative ? ( w = M.x + n( l.x ), G = M.y + n( l.y ) ) : ( w = n( M.x ), G = n( M.y ) ), j = n( l.x ), K = n( l.y ), b.bezierCurveTo( F, H, w, G, j, K ) );
                break;
              case d.Commands.line:
                b.lineTo( j, K );
                break;
              case d.Commands.move:
                s = a, b.moveTo( j, K )
            }
          } );
          B && b.closePath();
          !N && !p && ( b.fill(), b.stroke() );
          b.restore();
          N && !p &&
            b.clip();
          return this.flagReset()
        }
      }
    },
    b = d[ d.Types.canvas ] = function ( b ) {
      this.domElement = b.domElement || document.createElement( "canvas" );
      this.ctx = this.domElement.getContext( "2d" );
      this.overdraw = b.overdraw || !1;
      this.scene = new d.Group;
      this.scene.parent = this
    };
  _.extend( b, {
    Utils: g
  } );
  _.extend( b.prototype, Backbone.Events, {
    setSize: function ( b, d, g ) {
      this.width = b;
      this.height = d;
      this.ratio = _.isUndefined( g ) ? k( this.ctx ) : g;
      this.domElement.width = b * this.ratio;
      this.domElement.height = d * this.ratio;
      _.extend( this.domElement.style, {
        width: b + "px",
        height: d + "px"
      } );
      return this
    },
    render: function () {
      var b = 1 === this.ratio;
      b || ( this.ctx.save(), this.ctx.scale( this.ratio, this.ratio ) );
      this.overdraw || this.ctx.clearRect( 0, 0, this.width, this.height );
      g.group.render.call( this.scene, this.ctx );
      b || this.ctx.restore();
      return this
    }
  } )
} )( Two );
( function ( d ) {
  var q = d.Matrix.Multiply,
    n = d.Utils.mod,
    k = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ],
    g = new d.Array( 9 ),
    b = d.Utils.getRatio,
    c = d.Utils.toFixed,
    h = {
      canvas: document.createElement( "canvas" ),
      uv: new d.Array( [ 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1 ] ),
      group: {
        renderChild: function ( a ) {
          h[ a._renderer.type ].render.call( a, this.gl, this.program )
        },
        render: function ( a, b ) {
          this._update();
          var c = this.parent,
            p = c._matrix && c._matrix.manual || c._flagMatrix,
            v = this._matrix.manual || this._flagMatrix;
          if ( p || v ) this._renderer.matrix || ( this._renderer.matrix = new d.Array( 9 ) ),
            this._matrix.toArray( !0, g ), q( g, c._renderer.matrix, this._renderer.matrix ), this._renderer.scale = this._scale * c._renderer.scale, p && ( this._flagMatrix = !0 );
          this._mask && ( a.enable( a.STENCIL_TEST ), a.stencilFunc( a.ALWAYS, 1, 1 ), a.colorMask( !1, !1, !1, !0 ), a.stencilOp( a.KEEP, a.KEEP, a.INCR ), h[ this._mask._renderer.type ].render.call( this._mask, a, b, this ), a.colorMask( !0, !0, !0, !0 ), a.stencilFunc( a.NOTEQUAL, 0, 1 ), a.stencilOp( a.KEEP, a.KEEP, a.KEEP ) );
          this._flagOpacity = c._flagOpacity || this._flagOpacity;
          this._renderer.opacity =
            this._opacity * ( c && c._renderer ? c._renderer.opacity : 1 );
          _.each( this.children, h.group.renderChild, {
            gl: a,
            program: b
          } );
          this._mask && ( a.colorMask( !1, !1, !1, !1 ), a.stencilOp( a.KEEP, a.KEEP, a.DECR ), h[ this._mask._renderer.type ].render.call( this._mask, a, b, this ), a.colorMask( !0, !0, !0, !0 ), a.stencilFunc( a.NOTEQUAL, 0, 1 ), a.stencilOp( a.KEEP, a.KEEP, a.KEEP ), a.disable( a.STENCIL_TEST ) );
          return this.flagReset()
        }
      },
      polygon: {
        render: function ( a, b, c ) {
          if ( !this._visible || !this._opacity ) return this;
          var p = this.parent,
            v = p._matrix.manual ||
            p._flagMatrix,
            n = this._matrix.manual || this._flagMatrix,
            f = this._flagVertices || this._flagFill || this._flagStroke || this._flagLinewidth || this._flagOpacity || p._flagOpacity || this._flagVisible || this._flagCap || this._flagJoin || this._flagMiter || this._flagScale;
          this._update();
          if ( v || n ) this._renderer.matrix || ( this._renderer.matrix = new d.Array( 9 ) ), this._matrix.toArray( !0, g ), q( g, p._renderer.matrix, this._renderer.matrix ), this._renderer.scale = this._scale * p._renderer.scale;
          f && ( this._renderer.rect || ( this._renderer.rect = {} ), this._renderer.triangles || ( this._renderer.triangles = new d.Array( 12 ) ), this._renderer.opacity = this._opacity * p._renderer.opacity, h.getBoundingClientRect( this._vertices, this._linewidth, this._renderer.rect ), h.getTriangles( this._renderer.rect, this._renderer.triangles ), h.updateBuffer( a, this, b ), h.updateTexture( a, this ) );
          if ( !this._clip || c ) return a.bindBuffer( a.ARRAY_BUFFER, this._renderer.textureCoordsBuffer ), a.vertexAttribPointer( b.textureCoords, 2, a.FLOAT, !1, 0, 0 ), a.bindTexture( a.TEXTURE_2D, this._renderer.texture ),
            a.uniformMatrix3fv( b.matrix, !1, this._renderer.matrix ), a.bindBuffer( a.ARRAY_BUFFER, this._renderer.buffer ), a.vertexAttribPointer( b.position, 2, a.FLOAT, !1, 0, 0 ), a.drawArrays( a.TRIANGLES, 0, 6 ), this.flagReset()
        }
      },
      getBoundingClientRect: function ( a, b, c ) {
        var d = Infinity,
          g = -Infinity,
          p = Infinity,
          f = -Infinity;
        a.forEach( function ( a ) {
          var b = a.x,
            c = a.y,
            m = a.controls,
            h, e;
          p = Math.min( c, p );
          d = Math.min( b, d );
          g = Math.max( b, g );
          f = Math.max( c, f );
          a.controls && ( h = m.left, e = m.right, h && e && ( m = a._relative ? h.x + b : h.x, h = a._relative ? h.y + c : h.y, b =
            a._relative ? e.x + b : e.x, a = a._relative ? e.y + c : e.y, m && ( h && b && a ) && ( p = Math.min( h, a, p ), d = Math.min( m, b, d ), g = Math.max( m, b, g ), f = Math.max( h, a, f ) ) ) )
        } );
        _.isNumber( b ) && ( p -= b, d -= b, g += b, f += b );
        c.top = p;
        c.left = d;
        c.right = g;
        c.bottom = f;
        c.width = g - d;
        c.height = f - p;
        c.centroid || ( c.centroid = {} );
        c.centroid.x = -d;
        c.centroid.y = -p
      },
      getTriangles: function ( a, b ) {
        var c = a.top,
          d = a.left,
          g = a.right,
          p = a.bottom;
        b[ 0 ] = d;
        b[ 1 ] = c;
        b[ 2 ] = g;
        b[ 3 ] = c;
        b[ 4 ] = d;
        b[ 5 ] = p;
        b[ 6 ] = d;
        b[ 7 ] = p;
        b[ 8 ] = g;
        b[ 9 ] = c;
        b[ 10 ] = g;
        b[ 11 ] = p
      },
      updateCanvas: function ( a ) {
        var b = a._vertices,
          g = this.canvas,
          p = this.ctx,
          h = a._renderer.scale,
          k = a._stroke,
          f = a._linewidth * h,
          r = a._fill,
          q = a._renderer.opacity || a._opacity,
          B = a._cap,
          x = a._join,
          A = a._miter,
          e = a._closed,
          y = b.length,
          E = y - 1;
        g.width = Math.max( Math.ceil( a._renderer.rect.width * h ), 1 );
        g.height = Math.max( Math.ceil( a._renderer.rect.height * h ), 1 );
        a = a._renderer.rect.centroid;
        var C = a.x * h,
          l = a.y * h;
        p.clearRect( 0, 0, g.width, g.height );
        r && ( p.fillStyle = r );
        k && ( p.strokeStyle = k );
        f && ( p.lineWidth = f );
        A && ( p.miterLimit = A );
        x && ( p.lineJoin = x );
        B && ( p.lineCap = B );
        _.isNumber( q ) && ( p.globalAlpha =
          q );
        var s;
        p.beginPath();
        b.forEach( function ( a, f ) {
          var g, k, r, z, q, u;
          u = c( a.x * h + C );
          r = c( a.y * h + l );
          switch ( a._command ) {
            case d.Commands.close:
              p.closePath();
              break;
            case d.Commands.curve:
              g = e ? n( f - 1, y ) : Math.max( f - 1, 0 );
              e ? n( f + 1, y ) : Math.min( f + 1, E );
              k = b[ g ];
              q = k.controls && k.controls.right || k;
              z = a.controls && a.controls.left || a;
              k._relative ? ( g = c( ( q.x + k.x ) * h + C ), q = c( ( q.y + k.y ) * h + l ) ) : ( g = c( q.x * h + C ), q = c( q.y * h + l ) );
              a._relative ? ( k = c( ( z.x + a.x ) * h + C ), z = c( ( z.y + a.y ) * h + l ) ) : ( k = c( z.x * h + C ), z = c( z.y * h + l ) );
              p.bezierCurveTo( g, q, k, z, u, r );
              f >= E && e && ( r =
                s, k = a.controls && a.controls.right || a, u = r.controls && r.controls.left || r, a._relative ? ( g = c( ( k.x + a.x ) * h + C ), q = c( ( k.y + a.y ) * h + l ) ) : ( g = c( k.x * h + C ), q = c( k.y * h + l ) ), r._relative ? ( k = c( ( u.x + r.x ) * h + C ), z = c( ( u.y + r.y ) * h + l ) ) : ( k = c( u.x * h + C ), z = c( u.y * h + l ) ), u = c( r.x * h + C ), r = c( r.y * h + l ), p.bezierCurveTo( g, q, k, z, u, r ) );
              break;
            case d.Commands.line:
              p.lineTo( u, r );
              break;
            case d.Commands.move:
              s = a, p.moveTo( u, r )
          }
        } );
        e && p.closePath();
        p.fill();
        p.stroke()
      },
      updateTexture: function ( a, b ) {
        this.updateCanvas( b );
        b._renderer.texture && a.deleteTexture( b._renderer.texture );
        a.bindBuffer( a.ARRAY_BUFFER, b._renderer.textureCoordsBuffer );
        b._renderer.texture = a.createTexture();
        a.bindTexture( a.TEXTURE_2D, b._renderer.texture );
        a.texParameteri( a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE );
        a.texParameteri( a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE );
        a.texParameteri( a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR );
        0 >= this.canvas.width || 0 >= this.canvas.height || a.texImage2D( a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, this.canvas )
      },
      updateBuffer: function ( a, b, c ) {
        _.isObject( b._renderer.buffer ) &&
          a.deleteBuffer( b._renderer.buffer );
        b._renderer.buffer = a.createBuffer();
        a.bindBuffer( a.ARRAY_BUFFER, b._renderer.buffer );
        a.enableVertexAttribArray( c.position );
        a.bufferData( a.ARRAY_BUFFER, b._renderer.triangles, a.STATIC_DRAW );
        _.isObject( b._renderer.textureCoordsBuffer ) && a.deleteBuffer( b._renderer.textureCoordsBuffer );
        b._renderer.textureCoordsBuffer = a.createBuffer();
        a.bindBuffer( a.ARRAY_BUFFER, b._renderer.textureCoordsBuffer );
        a.enableVertexAttribArray( c.textureCoords );
        a.bufferData( a.ARRAY_BUFFER, this.uv,
          a.STATIC_DRAW )
      },
      program: {
        create: function ( a, b ) {
          var c, g;
          c = a.createProgram();
          _.each( b, function ( b ) {
            a.attachShader( c, b )
          } );
          a.linkProgram( c );
          if ( !a.getProgramParameter( c, a.LINK_STATUS ) ) throw g = a.getProgramInfoLog( c ), a.deleteProgram( c ), new d.Utils.Error( "unable to link program: " + g );
          return c
        }
      },
      shaders: {
        create: function ( a, b, c ) {
          c = a.createShader( a[ c ] );
          a.shaderSource( c, b );
          a.compileShader( c );
          if ( !a.getShaderParameter( c, a.COMPILE_STATUS ) ) throw b = a.getShaderInfoLog( c ), a.deleteShader( c ), new d.Utils.Error( "unable to compile shader " +
            c + ": " + b );
          return c
        },
        types: {
          vertex: "VERTEX_SHADER",
          fragment: "FRAGMENT_SHADER"
        },
        vertex: "attribute vec2 a_position;\nattribute vec2 a_textureCoords;\n\nuniform mat3 u_matrix;\nuniform vec2 u_resolution;\n\nvarying vec2 v_textureCoords;\n\nvoid main() {\n   vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;\n   vec2 normal = projected / u_resolution;\n   vec2 clipspace = (normal * 2.0) - 1.0;\n\n   gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);\n   v_textureCoords = a_textureCoords;\n}",
        fragment: "precision mediump float;\n\nuniform sampler2D u_image;\nvarying vec2 v_textureCoords;\n\nvoid main() {\n  gl_FragColor = texture2D(u_image, v_textureCoords);\n}"
      }
    };
  h.ctx = h.canvas.getContext( "2d" );
  var p = d[ d.Types.webgl ] = function ( a ) {
    var b, c;
    this.domElement = a.domElement || document.createElement( "canvas" );
    this.scene = new d.Group;
    this.scene.parent = this;
    this._renderer = {
      matrix: new d.Array( k ),
      scale: 1,
      opacity: 1
    };
    this._flagMatrix = !0;
    a = _.defaults( a || {}, {
      antialias: !1,
      alpha: !0,
      premultipliedAlpha: !0,
      stencil: !0,
      preserveDrawingBuffer: !0,
      overdraw: !1
    } );
    this.overdraw = a.overdraw;
    a = this.ctx = this.domElement.getContext( "webgl", a ) || this.domElement.getContext( "experimental-webgl", a );
    if ( !this.ctx ) throw new d.Utils.Error( "unable to create a webgl context. Try using another renderer." );
    b = h.shaders.create( a, h.shaders.vertex, h.shaders.types.vertex );
    c = h.shaders.create( a, h.shaders.fragment, h.shaders.types.fragment );
    this.program = h.program.create( a, [ b, c ] );
    a.useProgram( this.program );
    this.program.position = a.getAttribLocation( this.program,
      "a_position" );
    this.program.matrix = a.getUniformLocation( this.program, "u_matrix" );
    this.program.textureCoords = a.getAttribLocation( this.program, "a_textureCoords" );
    a.disable( a.DEPTH_TEST );
    a.enable( a.BLEND );
    a.blendEquationSeparate( a.FUNC_ADD, a.FUNC_ADD );
    a.blendFuncSeparate( a.SRC_ALPHA, a.ONE_MINUS_SRC_ALPHA, a.ONE, a.ONE_MINUS_SRC_ALPHA )
  };
  _.extend( p.prototype, Backbone.Events, {
    setSize: function ( a, c, d ) {
      this.width = a;
      this.height = c;
      this.ratio = _.isUndefined( d ) ? b( this.ctx ) : d;
      this.domElement.width = a * this.ratio;
      this.domElement.height =
        c * this.ratio;
      _.extend( this.domElement.style, {
        width: a + "px",
        height: c + "px"
      } );
      a *= this.ratio;
      c *= this.ratio;
      this._renderer.matrix[ 0 ] = this._renderer.matrix[ 4 ] = this._renderer.scale = this.ratio;
      this._flagMatrix = !0;
      this.ctx.viewport( 0, 0, a, c );
      d = this.ctx.getUniformLocation( this.program, "u_resolution" );
      this.ctx.uniform2f( d, a, c );
      return this
    },
    render: function () {
      var a = this.ctx;
      this.overdraw || a.clear( a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT );
      h.group.render.call( this.scene, a, this.program );
      this._flagMatrix = !1;
      return this
    }
  } )
} )( Two );
( function ( d ) {
  var q = d.Shape = function () {
    this._renderer = {};
    this.id = d.Identifier + d.uniqueId();
    this.classList = [];
    this._matrix = new d.Matrix;
    this.translation = new d.Vector;
    this.translation.bind( d.Events.change, _.bind( q.FlagMatrix, this ) );
    this.rotation = 0;
    this.scale = 1
  };
  _.extend( q, Backbone.Events, {
    FlagMatrix: function () {
      this._flagMatrix = !0
    },
    MakeObservable: function ( d ) {
      Object.defineProperty( d, "rotation", {
        get: function () {
          return this._rotation
        },
        set: function ( d ) {
          this._rotation = d;
          this._flagMatrix = !0
        }
      } );
      Object.defineProperty( d,
        "scale", {
          get: function () {
            return this._scale
          },
          set: function ( d ) {
            this._scale = d;
            this._flagScale = this._flagMatrix = !0
          }
        } )
    }
  } );
  _.extend( q.prototype, {
    _flagMatrix: !0,
    _rotation: 0,
    _scale: 1,
    addTo: function ( d ) {
      d.add( this );
      return this
    },
    clone: function () {
      var d = new q;
      d.translation.copy( this.translation );
      d.rotation = this.rotation;
      d.scale = this.scale;
      _.each( q.Properties, function ( k ) {
        d[ k ] = this[ k ]
      }, this );
      return d._update()
    },
    replaceParent: function ( d ) {
      var k = this.id,
        g;
      this.parent && ( delete this.parent.children[ k ], g = _.indexOf( parent.additions,
        k ), 0 <= g && this.parent.additions.splice( g, 1 ), this.parent.subtractions.push( k ), this._flagSubtractions = !0 );
      d ? ( d.children[ k ] = this, this.parent = d, d.additions.push( k ), d._flagAdditions = !0 ) : delete this.parent;
      return this
    },
    _update: function ( d ) {
      !this._matrix.manual && this._flagMatrix && this._matrix.identity().translate( this.translation.x, this.translation.y ).scale( this.scale ).rotate( this.rotation );
      d && this.parent && this.parent._update && this.parent._update();
      return this
    },
    flagReset: function () {
      this._flagMatrix = this._flagScale = !1;
      return this
    }
  } );
  q.MakeObservable( q.prototype )
} )( Two );
( function ( d ) {
  function q( b, a, c ) {
    var g, h, k, n, f, r, q, B, x = a.controls && a.controls.right,
      A = b.controls && b.controls.left;
    g = a.x;
    f = a.y;
    h = ( x || a ).x;
    r = ( x || a ).y;
    k = ( A || b ).x;
    q = ( A || b ).y;
    n = b.x;
    B = b.y;
    x && a._relative && ( h += a.x, r += a.y );
    A && b._relative && ( k += b.x, q += b.y );
    return d.Utils.getCurveLength( g, f, h, r, k, q, n, B, c )
  }

  function n( b, a, c ) {
    var g, h, k, n, f, r, q, B, x = a.controls && a.controls.right,
      A = b.controls && b.controls.left;
    g = a.x;
    f = a.y;
    h = ( x || a ).x;
    r = ( x || a ).y;
    k = ( A || b ).x;
    q = ( A || b ).y;
    n = b.x;
    B = b.y;
    x && a._relative && ( h += a.x, r += a.y );
    A && b._relative &&
      ( k += b.x, q += b.y );
    return d.Utils.subdivide( g, f, h, r, k, q, n, B, c )
  }
  var k = Math.min,
    g = Math.max,
    b = Math.round,
    c = d.Utils.getComputedMatrix;
  _.each( d.Commands, function () {} );
  var h = d.Polygon = function ( b, a, c, g ) {
    d.Shape.call( this );
    this._renderer.type = "polygon";
    this._closed = !!a;
    this._curved = !!c;
    this.beginning = 0;
    this.ending = 1;
    this.fill = "#fff";
    this.stroke = "#000";
    this.opacity = this.linewidth = 1;
    this.visible = !0;
    this.cap = "butt";
    this.join = "miter";
    this.miter = 4;
    this._vertices = [];
    this.vertices = b;
    this.automatic = !g
  };
  _.extend( h, {
    Properties: "fill stroke linewidth opacity visible cap join miter closed curved automatic beginning ending".split( " " ),
    FlagVertices: function () {
      this._flagLength = this._flagVertices = !0
    },
    MakeObservable: function ( b ) {
      d.Shape.MakeObservable( b );
      _.each( h.Properties.slice( 0, 8 ), function ( a ) {
        var c = "_" + a,
          d = "_flag" + a.charAt( 0 ).toUpperCase() + a.slice( 1 );
        Object.defineProperty( b, a, {
          get: function () {
            return this[ c ]
          },
          set: function ( a ) {
            this[ c ] = a;
            this[ d ] = !0
          }
        } )
      } );
      Object.defineProperty( b, "length", {
        get: function () {
          this._flagLength && this._updateLength();
          return this._length
        }
      } );
      Object.defineProperty( b, "closed", {
        get: function () {
          return this._closed
        },
        set: function ( a ) {
          this._closed = !!a;
          this._flagVertices = !0
        }
      } );
      Object.defineProperty( b, "curved", {
        get: function () {
          return this._curved
        },
        set: function ( a ) {
          this._curved = !!a;
          this._flagVertices = !0
        }
      } );
      Object.defineProperty( b, "automatic", {
        get: function () {
          return this._automatic
        },
        set: function ( a ) {
          if ( a !== this._automatic ) {
            var b = ( this._automatic = !!a ) ? "ignore" : "listen";
            _.each( this.vertices, function ( a ) {
              a[ b ]()
            } )
          }
        }
      } );
      Object.defineProperty( b, "beginning", {
        get: function () {
          return this._beginning
        },
        set: function ( a ) {
          this._beginning = k( g( a, 0 ), this._ending );
          this._flagVertices = !0
        }
      } );
      Object.defineProperty( b, "ending", {
        get: function () {
          return this._ending
        },
        set: function ( a ) {
          this._ending = k( g( a, this._beginning ), 1 );
          this._flagVertices = !0
        }
      } );
      Object.defineProperty( b, "vertices", {
        get: function () {
          return this._collection
        },
        set: function ( a ) {
          var b = _.bind( h.FlagVertices, this ),
            c = _.bind( function ( a ) {
              for ( var c = a.length; c--; ) a[ c ].bind( d.Events.change, b );
              b()
            }, this ),
            g = _.bind( function ( a ) {
              _.each( a, function ( a ) {
                a.unbind( d.Events.change, b )
              }, this );
              b()
            }, this );
          this._collection && this._collection.unbind();
          this._collection =
            new d.Utils.Collection( a.slice( 0 ) );
          this._collection.bind( d.Events.insert, c );
          this._collection.bind( d.Events.remove, g );
          c( this._collection )
        }
      } );
      Object.defineProperty( b, "clip", {
        get: function () {
          return this._clip
        },
        set: function ( a ) {
          this._clip = a;
          this._flagClip = !0
        }
      } )
    }
  } );
  _.extend( h.prototype, d.Shape.prototype, {
    _flagVertices: !0,
    _flagLength: !0,
    _flagFill: !0,
    _flagStroke: !0,
    _flagLinewidth: !0,
    _flagOpacity: !0,
    _flagVisible: !0,
    _flagCap: !0,
    _flagJoin: !0,
    _flagMiter: !0,
    _flagClip: !1,
    _length: 0,
    _fill: "#fff",
    _stroke: "#000",
    _linewidth: 1,
    _opacity: 1,
    _visible: !0,
    _cap: "round",
    _join: "round",
    _miter: 4,
    _closed: !0,
    _curved: !1,
    _automatic: !0,
    _beginning: 0,
    _ending: 1,
    _clip: !1,
    clone: function ( b ) {
      b = b || this.parent;
      var a = _.map( this.vertices, function ( a ) {
          return a.clone()
        } ),
        c = new h( a, this.closed, this.curved, !this.automatic );
      _.each( d.Shape.Properties, function ( a ) {
        c[ a ] = this[ a ]
      }, this );
      c.translation.copy( this.translation );
      c.rotation = this.rotation;
      c.scale = this.scale;
      b.add( c );
      return c
    },
    toObject: function () {
      var b = {
        vertices: _.map( this.vertices, function ( a ) {
          return a.toObject()
        } )
      };
      _.each( d.Shape.Properties, function ( a ) {
        b[ a ] = this[ a ]
      }, this );
      b.translation = this.translation.toObject;
      b.rotation = this.rotation;
      b.scale = this.scale;
      return b
    },
    noFill: function () {
      this.fill = "transparent";
      return this
    },
    noStroke: function () {
      this.stroke = "transparent";
      return this
    },
    corner: function () {
      var b = this.getBoundingClientRect( !0 );
      b.centroid = {
        x: b.left + b.width / 2,
        y: b.top + b.height / 2
      };
      _.each( this.vertices, function ( a ) {
        a.addSelf( b.centroid )
      } );
      return this
    },
    center: function () {
      var b = this.getBoundingClientRect( !0 );
      b.centroid = {
        x: b.left + b.width / 2,
        y: b.top + b.height / 2
      };
      _.each( this.vertices, function ( a ) {
        a.subSelf( b.centroid )
      } );
      return this
    },
    remove: function () {
      if ( !this.parent ) return this;
      this.parent.remove( this );
      return this
    },
    getBoundingClientRect: function ( b ) {
      this._update( !0 );
      var a = b ? this._matrix : c( this ),
        d = this.linewidth / 2,
        h, n, q = Infinity,
        D = -Infinity,
        f = Infinity,
        r = -Infinity;
      _.each( this._vertices, function ( b ) {
        h = b.x;
        n = b.y;
        b = a.multiply( h, n, 1 );
        f = k( b.y - d, f );
        q = k( b.x - d, q );
        D = g( b.x + d, D );
        r = g( b.y + d, r )
      } );
      return {
        top: f,
        left: q,
        right: D,
        bottom: r,
        width: D -
          q,
        height: r - f
      }
    },
    getPointAt: function ( b, a ) {
      var c, g, h, k, n, f, q, u, B, x, A, e;
      q = this.length * Math.min( Math.max( b, 0 ), 1 );
      u = this.vertices.length;
      B = u - 1;
      f = c = null;
      x = 0;
      g = this._lengths.length;
      for ( h = 0; x < g; x++ ) {
        if ( h + this._lengths[ x ] > q ) {
          c = this.vertices[ this.closed ? d.Utils.mod( x, u ) : x ];
          f = this.vertices[ Math.min( Math.max( x - 1, 0 ), B ) ];
          q -= h;
          b = q / this._lengths[ x ];
          break
        }
        h += this._lengths[ x ]
      }
      if ( _.isNull( c ) || _.isNull( f ) ) return null;
      e = f.controls && f.controls.right;
      A = c.controls && c.controls.left;
      g = f.x;
      q = f.y;
      h = ( e || f ).x;
      u = ( e || f ).y;
      k = ( A ||
        c ).x;
      B = ( A || c ).y;
      n = c.x;
      x = c.y;
      e && f._relative && ( h += f.x, u += f.y );
      A && c._relative && ( k += c.x, B += c.y );
      c = d.Utils.getPointOnCubicBezier( b, g, h, k, n );
      f = d.Utils.getPointOnCubicBezier( b, q, u, B, x );
      return _.isObject( a ) ? ( a.x = c, a.y = f, a ) : new d.Vector( c, f )
    },
    plot: function () {
      if ( this.curved ) return d.Utils.getCurveFromPoints( this._vertices, this.closed ), this;
      for ( var b = 0; b < this._vertices.length; b++ ) this._vertices[ b ]._command = 0 === b ? d.Commands.move : d.Commands.line;
      return this
    },
    subdivide: function ( b ) {
      this._update();
      var a = this.vertices.length -
        1,
        c = this.vertices[ a ],
        g = this._closed || this.vertices[ a ]._command === d.Commands.close,
        h = [];
      _.each( this.vertices, function ( k, q ) {
        if ( !( 0 >= q ) || g )
          if ( k.command === d.Commands.move ) h.push( new d.Anchor( c.x, c.y ) ), 0 < q && ( h[ h.length - 1 ].command = d.Commands.line );
          else {
            var f = n( k, c, b );
            h = h.concat( f );
            _.each( f, function ( a, b ) {
              a.command = 0 >= b && c.command === d.Commands.move ? d.Commands.move : d.Commands.line
            } );
            q >= a && ( this._closed && this._automatic ? ( c = k, f = n( k, c, b ), h = h.concat( f ), _.each( f, function ( a, b ) {
              a.command = 0 >= b && c.command === d.Commands.move ?
                d.Commands.move : d.Commands.line
            } ) ) : g && h.push( new d.Anchor( k.x, k.y ) ), h[ h.length - 1 ].command = g ? d.Commands.close : d.Commands.line )
          }
        c = k
      }, this );
      this._curved = this._automatic = !1;
      this.vertices = h;
      return this
    },
    _updateLength: function ( b ) {
      this._update();
      var a = this.vertices.length - 1,
        c = this.vertices[ a ],
        g = this._closed || this.vertices[ a ]._command === d.Commands.close,
        h = 0;
      _.isUndefined( this._lengths ) && ( this._lengths = [] );
      _.each( this.vertices, function ( k, n ) {
        0 >= n && !g || k.command === d.Commands.move ? ( c = k, this._lengths[ n ] = 0 ) : ( this._lengths[ n ] =
          q( k, c, b ), h += this._lengths[ n ], n >= a && g && ( c = k, this._lengths[ n + 1 ] = q( k, c, b ), h += this._lengths[ n + 1 ] ), c = k )
      }, this );
      this._length = h;
      return this
    },
    _update: function () {
      if ( this._flagVertices ) {
        var c = this.vertices.length - 1,
          a;
        a = b( this._beginning * c );
        c = b( this._ending * c );
        this._vertices.length = 0;
        for ( var g = a; g < c + 1; g++ ) a = this.vertices[ g ], this._vertices.push( a );
        this._automatic && this.plot()
      }
      d.Shape.prototype._update.call( this );
      return this
    },
    flagReset: function () {
      this._flagVertices = this._flagFill = this._flagStroke = this._flagLinewidth =
        this._flagOpacity = this._flagVisible = this._flagCap = this._flagJoin = this._flagMiter = this._flagClip = !1;
      d.Shape.prototype.flagReset.call( this );
      return this
    }
  } );
  h.MakeObservable( h.prototype )
} )( Two );
( function ( d ) {
  var q = Math.min,
    n = Math.max,
    k = d.Group = function () {
      d.Shape.call( this, !0 );
      this._renderer.type = "group";
      this.additions = [];
      this.subtractions = [];
      this.children = {}
    };
  _.extend( k, {
    MakeObservable: function ( g ) {
      var b = d.Polygon.Properties.slice( 0 ),
        c = _.indexOf( b, "opacity" );
      0 <= c && ( b.splice( c, 1 ), Object.defineProperty( g, "opacity", {
        get: function () {
          return this._opacity
        },
        set: function ( b ) {
          this._opacity = b;
          this._flagOpacity = !0
        }
      } ) );
      d.Shape.MakeObservable( g );
      k.MakeGetterSetters( g, b );
      Object.defineProperty( g, "mask", {
        get: function () {
          return this._mask
        },
        set: function ( b ) {
          this._mask = b;
          this._flagMask = !0;
          b.clip || ( b.clip = !0 )
        }
      } )
    },
    MakeGetterSetters: function ( d, b ) {
      _.isArray( b ) || ( b = [ b ] );
      _.each( b, function ( b ) {
        k.MakeGetterSetter( d, b )
      } )
    },
    MakeGetterSetter: function ( d, b ) {
      var c = "_" + b;
      Object.defineProperty( d, b, {
        get: function () {
          return this[ c ]
        },
        set: function ( d ) {
          this[ c ] = d;
          _.each( this.children, function ( c ) {
            c[ b ] = d
          } )
        }
      } )
    }
  } );
  _.extend( k.prototype, d.Shape.prototype, {
    _flagAdditions: !1,
    _flagSubtractions: !1,
    _flagOpacity: !0,
    _flagMask: !1,
    _fill: "#fff",
    _stroke: "#000",
    _linewidth: 1,
    _opacity: 1,
    _visible: !0,
    _cap: "round",
    _join: "round",
    _miter: 4,
    _closed: !0,
    _curved: !1,
    _automatic: !0,
    _beginning: 0,
    _ending: 1,
    _mask: null,
    clone: function ( d ) {
      d = d || this.parent;
      var b = new k;
      d.add( b );
      _.map( this.children, function ( c ) {
        return c.clone( b )
      } );
      b.translation.copy( this.translation );
      b.rotation = this.rotation;
      b.scale = this.scale;
      return b
    },
    toObject: function () {
      var d = {
        children: {},
        translation: this.translation.toObject(),
        rotation: this.rotation,
        scale: this.scale
      };
      _.each( this.children, function ( b, c ) {
        d.children[ c ] = b.toObject()
      }, this );
      return d
    },
    corner: function () {
      var d = this.getBoundingClientRect( !0 ),
        b = {
          x: d.left,
          y: d.top
        };
      _.each( this.children, function ( c ) {
        c.translation.subSelf( b )
      } );
      return this
    },
    center: function () {
      var d = this.getBoundingClientRect( !0 );
      d.centroid = {
        x: d.left + d.width / 2,
        y: d.top + d.height / 2
      };
      _.each( this.children, function ( b ) {
        b.translation.subSelf( d.centroid )
      } );
      return this
    },
    getById: function ( d ) {
      var b = function ( c, d ) {
        if ( c.id === d ) return c;
        for ( var g in c.children ) {
          var a = b( c.children[ g ], d );
          if ( a ) return a
        }
      };
      return b( this, d ) || null
    },
    getByClassName: function ( d ) {
      var b = [],
        c = function ( d, g ) {
          -1 != d.classList.indexOf( g ) && b.push( d );
          for ( var a in d.children ) c( d.children[ a ], g );
          return b
        };
      return c( this, d )
    },
    getByType: function ( g ) {
      var b = [],
        c = function ( g, k ) {
          for ( var a in g.children ) g.children[ a ] instanceof k ? b.push( g.children[ a ] ) : g.children[ a ] instanceof d.Group && c( g.children[ a ], k );
          return b
        };
      return c( this, g )
    },
    add: function ( d ) {
      var b = this.children,
        c = this.additions,
        h, k, a;
      _.isArray( d ) || ( d = _.toArray( arguments ) );
      _.each( d, function ( d ) {
        d && ( h = d.id, k = d.parent, _.isUndefined( b[ h ] ) && ( k && ( delete k.children[ h ],
          a = _.indexOf( k.additions, h ), 0 <= a && k.additions.splice( a, 1 ) ), b[ h ] = d, d.parent = this, c.push( h ), this._flagAdditions = !0 ) )
      }, this );
      return this
    },
    remove: function ( d ) {
      var b = this.children,
        c = this.parent,
        h = this.subtractions,
        k, a, m;
      if ( 0 >= arguments.length && c ) return c.remove( this ), this;
      _.isArray( d ) || ( d = _.toArray( arguments ) );
      _.each( d, function ( c ) {
        k = c.id;
        a = c.parent;
        k in b && ( delete b[ k ], delete c.parent, m = _.indexOf( a.additions, k ), 0 <= m && a.additions.splice( m, 1 ), h.push( k ), this._flagSubtractions = !0 )
      }, this );
      return this
    },
    getBoundingClientRect: function () {
      var d;
      this._update( !0 );
      var b = Infinity,
        c = -Infinity,
        h = Infinity,
        k = -Infinity;
      _.each( this.children, function ( a ) {
        d = a.getBoundingClientRect();
        _.isNumber( d.top ) && ( _.isNumber( d.left ) && _.isNumber( d.right ) && _.isNumber( d.bottom ) ) && ( h = q( d.top, h ), b = q( d.left, b ), c = n( d.right, c ), k = n( d.bottom, k ) )
      }, this );
      return {
        top: h,
        left: b,
        right: c,
        bottom: k,
        width: c - b,
        height: k - h
      }
    },
    noFill: function () {
      _.each( this.children, function ( d ) {
        d.noFill()
      } );
      return this
    },
    noStroke: function () {
      _.each( this.children, function ( d ) {
        d.noStroke()
      } );
      return this
    },
    subdivide: function () {
      var d =
        arguments;
      _.each( this.children, function ( b ) {
        b.subdivide.apply( b, d )
      } );
      return this
    },
    flagReset: function () {
      this._flagAdditions && ( this.additions.length = 0, this._flagAdditions = !1 );
      this._flagSubtractions && ( this.subtractions.length = 0, this._flagSubtractions = !1 );
      this._flagMask = this._flagOpacity = !1;
      d.Shape.prototype.flagReset.call( this );
      return this
    }
  } );
  k.MakeObservable( k.prototype )
} )( Two );