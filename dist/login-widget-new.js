(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
  typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LoginWidget = factory(global.React, global.ReactDOM));
})(this, (function (React, ReactDOM) { 'use strict';

  function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n.default = e;
    return Object.freeze(n);
  }

  var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
  var ReactDOM__namespace = /*#__PURE__*/_interopNamespaceDefault(ReactDOM);

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
      var i = n[a](c),
        u = i.value;
    } catch (n) {
      return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
  }
  function _asyncToGenerator(n) {
    return function () {
      var t = this,
        e = arguments;
      return new Promise(function (r, o) {
        var a = n.apply(t, e);
        function _next(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
        }
        function _throw(n) {
          asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
        }
        _next(void 0);
      });
    };
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
      return e;
    };
    var t,
      e = {},
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = Object.defineProperty || function (t, e, r) {
        t[e] = r.value;
      },
      i = "function" == typeof Symbol ? Symbol : {},
      a = i.iterator || "@@iterator",
      c = i.asyncIterator || "@@asyncIterator",
      u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
      return Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), t[e];
    }
    try {
      define({}, "");
    } catch (t) {
      define = function (t, e, r) {
        return t[e] = r;
      };
    }
    function wrap(t, e, r, n) {
      var i = e && e.prototype instanceof Generator ? e : Generator,
        a = Object.create(i.prototype),
        c = new Context(n || []);
      return o(a, "_invoke", {
        value: makeInvokeMethod(t, r, c)
      }), a;
    }
    function tryCatch(t, e, r) {
      try {
        return {
          type: "normal",
          arg: t.call(e, r)
        };
      } catch (t) {
        return {
          type: "throw",
          arg: t
        };
      }
    }
    e.wrap = wrap;
    var h = "suspendedStart",
      l = "suspendedYield",
      f = "executing",
      s = "completed",
      y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function () {
      return this;
    });
    var d = Object.getPrototypeOf,
      v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
      ["next", "throw", "return"].forEach(function (e) {
        define(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function AsyncIterator(t, e) {
      function invoke(r, o, i, a) {
        var c = tryCatch(t[r], t, o);
        if ("throw" !== c.type) {
          var u = c.arg,
            h = u.value;
          return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
            invoke("next", t, i, a);
          }, function (t) {
            invoke("throw", t, i, a);
          }) : e.resolve(h).then(function (t) {
            u.value = t, i(u);
          }, function (t) {
            return invoke("throw", t, i, a);
          });
        }
        a(c.arg);
      }
      var r;
      o(this, "_invoke", {
        value: function (t, n) {
          function callInvokeWithMethodAndArg() {
            return new e(function (e, r) {
              invoke(t, n, e, r);
            });
          }
          return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(e, r, n) {
      var o = h;
      return function (i, a) {
        if (o === f) throw Error("Generator is already running");
        if (o === s) {
          if ("throw" === i) throw a;
          return {
            value: t,
            done: !0
          };
        }
        for (n.method = i, n.arg = a;;) {
          var c = n.delegate;
          if (c) {
            var u = maybeInvokeDelegate(c, n);
            if (u) {
              if (u === y) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
            if (o === h) throw o = s, n.arg;
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = f;
          var p = tryCatch(e, r, n);
          if ("normal" === p.type) {
            if (o = n.done ? s : l, p.arg === y) continue;
            return {
              value: p.arg,
              done: n.done
            };
          }
          "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
        }
      };
    }
    function maybeInvokeDelegate(e, r) {
      var n = r.method,
        o = e.iterator[n];
      if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
      var i = tryCatch(o, e.iterator, r.arg);
      if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
      var a = i.arg;
      return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
      var e = {
        tryLoc: t[0]
      };
      1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
      var e = t.completion || {};
      e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
      this.tryEntries = [{
        tryLoc: "root"
      }], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
      if (e || "" === e) {
        var r = e[a];
        if (r) return r.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var o = -1,
            i = function next() {
              for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
              return next.value = t, next.done = !0, next;
            };
          return i.next = i;
        }
      }
      throw new TypeError(typeof e + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
      var e = "function" == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function (t) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function (t) {
      return {
        __await: t
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
      return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
        return t.done ? t.value : a.next();
      });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
      return this;
    }), define(g, "toString", function () {
      return "[object Generator]";
    }), e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return r.reverse(), function next() {
        for (; r.length;) {
          var t = r.pop();
          if (t in e) return next.value = t, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, e.values = values, Context.prototype = {
      constructor: Context,
      reset: function (e) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ("root" === i.tryLoc) return handle("end");
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, "catchLoc"),
              u = n.call(i, "finallyLoc");
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw Error("try statement without catch or finally");
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
        var a = i ? i.completion : {};
        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
      },
      complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ("throw" === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (e, r, n) {
        return this.delegate = {
          iterator: values(e),
          resultName: r,
          nextLoc: n
        }, "next" === this.method && (this.arg = t), y;
      }
    }, e;
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  const common = {
    black: '#000',
    white: '#fff'
  };

  const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000'
  };

  const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff'
  };

  const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff'
  };

  const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea'
  };

  const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853'
  };

  const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00'
  };

  const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161'
  };

  /**
   * WARNING: Don't import this directly. It's imported by the code generated by
   * `@mui/interal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
   * constructors to ensure the plugin works as expected. Supported patterns include:
   *   throw new Error('My message');
   *   throw new Error(`My message: ${foo}`);
   *   throw new Error(`My message: ${foo}` + 'another string');
   *   ...
   * @param {number} code
   */
  function formatMuiErrorMessage(code, ...args) {
    const url = new URL(`https://mui.com/production-error/?code=${code}`);
    args.forEach(arg => url.searchParams.append('args[]', arg));
    return `Minified MUI error #${code}; visit ${url} for the full message.`;
  }

  var THEME_ID = '$$material';

  function _extends() {
    return _extends = Object.assign ? Object.assign.bind() : function (n) {
      for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }
      return n;
    }, _extends.apply(null, arguments);
  }

  function memoize$1(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  // eslint-disable-next-line no-undef
  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var isPropValid = /* #__PURE__ */memoize$1(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */ && prop.charCodeAt(1) === 110
    /* n */ && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */);

  var isDevelopment$2 = false;

  /*

  Based off glamor's StyleSheet, thanks Sunil ❤️

  high performance StyleSheet for css-in-js systems

  - uses multiple style tags behind the scenes for millions of rules
  - uses `insertRule` for appending in production for *much* faster performance

  // usage

  import { StyleSheet } from '@emotion/sheet'

  let styleSheet = new StyleSheet({ key: '', container: document.head })

  styleSheet.insert('#box { border: 1px solid red; }')
  - appends a css rule into the stylesheet

  styleSheet.flush()
  - empties the stylesheet of all its contents

  */

  function sheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox

    /* istanbul ignore next */

    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    } // this function should always return with a value
    // TS can't understand it though so we make it stop complaining here

    return undefined;
  }
  function createStyleElement(options) {
    var tag = document.createElement('style');
    tag.setAttribute('data-emotion', options.key);
    if (options.nonce !== undefined) {
      tag.setAttribute('nonce', options.nonce);
    }
    tag.appendChild(document.createTextNode(''));
    tag.setAttribute('data-s', '');
    return tag;
  }
  var StyleSheet = /*#__PURE__*/function () {
    // Using Node instead of HTMLElement since container may be a ShadowRoot
    function StyleSheet(options) {
      var _this = this;
      this._insertTag = function (tag) {
        var before;
        if (_this.tags.length === 0) {
          if (_this.insertionPoint) {
            before = _this.insertionPoint.nextSibling;
          } else if (_this.prepend) {
            before = _this.container.firstChild;
          } else {
            before = _this.before;
          }
        } else {
          before = _this.tags[_this.tags.length - 1].nextSibling;
        }
        _this.container.insertBefore(tag, before);
        _this.tags.push(tag);
      };
      this.isSpeedy = options.speedy === undefined ? !isDevelopment$2 : options.speedy;
      this.tags = [];
      this.ctr = 0;
      this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

      this.key = options.key;
      this.container = options.container;
      this.prepend = options.prepend;
      this.insertionPoint = options.insertionPoint;
      this.before = null;
    }
    var _proto = StyleSheet.prototype;
    _proto.hydrate = function hydrate(nodes) {
      nodes.forEach(this._insertTag);
    };
    _proto.insert = function insert(rule) {
      // the max length is how many rules we have per style tag, it's 65000 in speedy mode
      // it's 1 in dev because we insert source maps that map a single rule to a location
      // and you can only have one source map per style tag
      if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
        this._insertTag(createStyleElement(this));
      }
      var tag = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var sheet = sheetForTag(tag);
        try {
          // this is the ultrafast version, works across browsers
          // the big drawback is that the css won't be editable in devtools
          sheet.insertRule(rule, sheet.cssRules.length);
        } catch (e) {}
      } else {
        tag.appendChild(document.createTextNode(rule));
      }
      this.ctr++;
    };
    _proto.flush = function flush() {
      this.tags.forEach(function (tag) {
        var _tag$parentNode;
        return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
      });
      this.tags = [];
      this.ctr = 0;
    };
    return StyleSheet;
  }();

  var MS = '-ms-';
  var MOZ = '-moz-';
  var WEBKIT = '-webkit-';
  var COMMENT = 'comm';
  var RULESET = 'rule';
  var DECLARATION = 'decl';
  var IMPORT = '@import';
  var KEYFRAMES = '@keyframes';
  var LAYER = '@layer';

  /**
   * @param {number}
   * @return {number}
   */
  var abs = Math.abs;

  /**
   * @param {number}
   * @return {string}
   */
  var from = String.fromCharCode;

  /**
   * @param {object}
   * @return {object}
   */
  var assign = Object.assign;

  /**
   * @param {string} value
   * @param {number} length
   * @return {number}
   */
  function hash(value, length) {
    return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
  }

  /**
   * @param {string} value
   * @return {string}
   */
  function trim(value) {
    return value.trim();
  }

  /**
   * @param {string} value
   * @param {RegExp} pattern
   * @return {string?}
   */
  function match(value, pattern) {
    return (value = pattern.exec(value)) ? value[0] : value;
  }

  /**
   * @param {string} value
   * @param {(string|RegExp)} pattern
   * @param {string} replacement
   * @return {string}
   */
  function replace(value, pattern, replacement) {
    return value.replace(pattern, replacement);
  }

  /**
   * @param {string} value
   * @param {string} search
   * @return {number}
   */
  function indexof(value, search) {
    return value.indexOf(search);
  }

  /**
   * @param {string} value
   * @param {number} index
   * @return {number}
   */
  function charat(value, index) {
    return value.charCodeAt(index) | 0;
  }

  /**
   * @param {string} value
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function substr(value, begin, end) {
    return value.slice(begin, end);
  }

  /**
   * @param {string} value
   * @return {number}
   */
  function strlen(value) {
    return value.length;
  }

  /**
   * @param {any[]} value
   * @return {number}
   */
  function sizeof(value) {
    return value.length;
  }

  /**
   * @param {any} value
   * @param {any[]} array
   * @return {any}
   */
  function append(value, array) {
    return array.push(value), value;
  }

  /**
   * @param {string[]} array
   * @param {function} callback
   * @return {string}
   */
  function combine(array, callback) {
    return array.map(callback).join('');
  }

  var line = 1;
  var column = 1;
  var length = 0;
  var position = 0;
  var character = 0;
  var characters = '';

  /**
   * @param {string} value
   * @param {object | null} root
   * @param {object | null} parent
   * @param {string} type
   * @param {string[] | string} props
   * @param {object[] | string} children
   * @param {number} length
   */
  function node(value, root, parent, type, props, children, length) {
    return {
      value: value,
      root: root,
      parent: parent,
      type: type,
      props: props,
      children: children,
      line: line,
      column: column,
      length: length,
      return: ''
    };
  }

  /**
   * @param {object} root
   * @param {object} props
   * @return {object}
   */
  function copy(root, props) {
    return assign(node('', null, null, '', null, null, 0), root, {
      length: -root.length
    }, props);
  }

  /**
   * @return {number}
   */
  function char() {
    return character;
  }

  /**
   * @return {number}
   */
  function prev() {
    character = position > 0 ? charat(characters, --position) : 0;
    if (column--, character === 10) column = 1, line--;
    return character;
  }

  /**
   * @return {number}
   */
  function next() {
    character = position < length ? charat(characters, position++) : 0;
    if (column++, character === 10) column = 1, line++;
    return character;
  }

  /**
   * @return {number}
   */
  function peek() {
    return charat(characters, position);
  }

  /**
   * @return {number}
   */
  function caret() {
    return position;
  }

  /**
   * @param {number} begin
   * @param {number} end
   * @return {string}
   */
  function slice(begin, end) {
    return substr(characters, begin, end);
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function token(type) {
    switch (type) {
      // \0 \t \n \r \s whitespace token
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      // ! + , / > @ ~ isolate token
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      // ; { } breakpoint token
      case 59:
      case 123:
      case 125:
        return 4;
      // : accompanied token
      case 58:
        return 3;
      // " ' ( [ opening delimit token
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      // ) ] closing delimit token
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }

  /**
   * @param {string} value
   * @return {any[]}
   */
  function alloc(value) {
    return line = column = 1, length = strlen(characters = value), position = 0, [];
  }

  /**
   * @param {any} value
   * @return {any}
   */
  function dealloc(value) {
    return characters = '', value;
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function delimit(type) {
    return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
  }

  /**
   * @param {number} type
   * @return {string}
   */
  function whitespace(type) {
    while (character = peek()) if (character < 33) next();else break;
    return token(type) > 2 || token(character) > 3 ? '' : ' ';
  }

  /**
   * @param {number} index
   * @param {number} count
   * @return {string}
   */
  function escaping(index, count) {
    while (--count && next())
    // not 0-9 A-F a-f
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
    return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
  }

  /**
   * @param {number} type
   * @return {number}
   */
  function delimiter(type) {
    while (next()) switch (character) {
      // ] ) " '
      case type:
        return position;
      // " '
      case 34:
      case 39:
        if (type !== 34 && type !== 39) delimiter(character);
        break;
      // (
      case 40:
        if (type === 41) delimiter(type);
        break;
      // \
      case 92:
        next();
        break;
    }
    return position;
  }

  /**
   * @param {number} type
   * @param {number} index
   * @return {number}
   */
  function commenter(type, index) {
    while (next())
    // //
    if (type + character === 47 + 10) break;
    // /*
    else if (type + character === 42 + 42 && peek() === 47) break;
    return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
  }

  /**
   * @param {number} index
   * @return {string}
   */
  function identifier(index) {
    while (!token(peek())) next();
    return slice(index, position);
  }

  /**
   * @param {string} value
   * @return {object[]}
   */
  function compile(value) {
    return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {string[]} rule
   * @param {string[]} rules
   * @param {string[]} rulesets
   * @param {number[]} pseudo
   * @param {number[]} points
   * @param {string[]} declarations
   * @return {object}
   */
  function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
    var index = 0;
    var offset = 0;
    var length = pseudo;
    var atrule = 0;
    var property = 0;
    var previous = 0;
    var variable = 1;
    var scanning = 1;
    var ampersand = 1;
    var character = 0;
    var type = '';
    var props = rules;
    var children = rulesets;
    var reference = rule;
    var characters = type;
    while (scanning) switch (previous = character, character = next()) {
      // (
      case 40:
        if (previous != 108 && charat(characters, length - 1) == 58) {
          if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        characters += delimit(character);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        characters += whitespace(previous);
        break;
      // \
      case 92:
        characters += escaping(caret() - 1, 7);
        continue;
      // /
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters += '/';
        }
        break;
      // {
      case 123 * variable:
        points[index++] = strlen(characters) * ampersand;
      // } ; \0
      case 125 * variable:
      case 59:
      case 0:
        switch (character) {
          // \0 }
          case 0:
          case 125:
            scanning = 0;
          // ;
          case 59 + offset:
            if (ampersand == -1) characters = replace(characters, /\f/g, '');
            if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
            break;
          // @ ;
          case 59:
            characters += ';';
          // { rule/at-rule
          default:
            append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
            if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
              // d l m s
              case 100:
              case 108:
              case 109:
              case 115:
                parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                break;
              default:
                parse(characters, reference, reference, reference, [''], children, 0, points, children);
            }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
        break;
      // :
      case 58:
        length = 1 + strlen(characters), property = previous;
      default:
        if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
        switch (characters += from(character), character * variable) {
          // &
          case 38:
            ampersand = offset > 0 ? 1 : (characters += '\f', -1);
            break;
          // ,
          case 44:
            points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
            break;
          // @
          case 64:
            // -
            if (peek() === 45) characters += delimit(next());
            atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
            break;
          // -
          case 45:
            if (previous === 45 && strlen(characters) == 2) variable = 0;
        }
    }
    return rulesets;
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} index
   * @param {number} offset
   * @param {string[]} rules
   * @param {number[]} points
   * @param {string} type
   * @param {string[]} props
   * @param {string[]} children
   * @param {number} length
   * @return {object}
   */
  function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
    var post = offset - 1;
    var rule = offset === 0 ? rules : [''];
    var size = sizeof(rule);
    for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
    return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
  }

  /**
   * @param {number} value
   * @param {object} root
   * @param {object?} parent
   * @return {object}
   */
  function comment(value, root, parent) {
    return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
  }

  /**
   * @param {string} value
   * @param {object} root
   * @param {object?} parent
   * @param {number} length
   * @return {object}
   */
  function declaration(value, root, parent, length) {
    return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
  }

  /**
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function serialize(children, callback) {
    var output = '';
    var length = sizeof(children);
    for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';
    return output;
  }

  /**
   * @param {object} element
   * @param {number} index
   * @param {object[]} children
   * @param {function} callback
   * @return {string}
   */
  function stringify(element, index, children, callback) {
    switch (element.type) {
      case LAYER:
        if (element.children.length) break;
      case IMPORT:
      case DECLARATION:
        return element.return = element.return || element.value;
      case COMMENT:
        return '';
      case KEYFRAMES:
        return element.return = element.value + '{' + serialize(element.children, callback) + '}';
      case RULESET:
        element.value = element.props.join(',');
    }
    return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
  }

  /**
   * @param {function[]} collection
   * @return {function}
   */
  function middleware(collection) {
    var length = sizeof(collection);
    return function (element, index, children, callback) {
      var output = '';
      for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';
      return output;
    };
  }

  /**
   * @param {function} callback
   * @return {function}
   */
  function rulesheet(callback) {
    return function (element) {
      if (!element.root) if (element = element.return) callback(element);
    };
  }

  var weakMemoize = function weakMemoize(func) {
    var cache = new WeakMap();
    return function (arg) {
      if (cache.has(arg)) {
        // Use non-null assertion because we just checked that the cache `has` it
        // This allows us to remove `undefined` from the return value
        return cache.get(arg);
      }
      var ret = func(arg);
      cache.set(arg, ret);
      return ret;
    };
  };

  var isBrowser$4 = typeof document !== 'undefined';
  var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
    var previous = 0;
    var character = 0;
    while (true) {
      previous = character;
      character = peek(); // &\f

      if (previous === 38 && character === 12) {
        points[index] = 1;
      }
      if (token(character)) {
        break;
      }
      next();
    }
    return slice(begin, position);
  };
  var toRules = function toRules(parsed, points) {
    // pretend we've started with a comma
    var index = -1;
    var character = 44;
    do {
      switch (token(character)) {
        case 0:
          // &\f
          if (character === 38 && peek() === 12) {
            // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
            // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
            // and when it should just concatenate the outer and inner selectors
            // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
            points[index] = 1;
          }
          parsed[index] += identifierWithPointTracking(position - 1, points, index);
          break;
        case 2:
          parsed[index] += delimit(character);
          break;
        case 4:
          // comma
          if (character === 44) {
            // colon
            parsed[++index] = peek() === 58 ? '&\f' : '';
            points[index] = parsed[index].length;
            break;
          }

        // fallthrough

        default:
          parsed[index] += from(character);
      }
    } while (character = next());
    return parsed;
  };
  var getRules = function getRules(value, points) {
    return dealloc(toRules(alloc(value), points));
  }; // WeakSet would be more appropriate, but only WeakMap is supported in IE11

  var fixedElements = /* #__PURE__ */new WeakMap();
  var compat = function compat(element) {
    if (element.type !== 'rule' || !element.parent ||
    // positive .length indicates that this rule contains pseudo
    // negative .length indicates that this rule has been already prefixed
    element.length < 1) {
      return;
    }
    var value = element.value,
      parent = element.parent;
    var isImplicitRule = element.column === parent.column && element.line === parent.line;
    while (parent.type !== 'rule') {
      parent = parent.parent;
      if (!parent) return;
    } // short-circuit for the simplest case

    if (element.props.length === 1 && value.charCodeAt(0) !== 58
    /* colon */ && !fixedElements.get(parent)) {
      return;
    } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
    // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"

    if (isImplicitRule) {
      return;
    }
    fixedElements.set(element, true);
    var points = [];
    var rules = getRules(value, points);
    var parentRules = parent.props;
    for (var i = 0, k = 0; i < rules.length; i++) {
      for (var j = 0; j < parentRules.length; j++, k++) {
        element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
      }
    }
  };
  var removeLabel = function removeLabel(element) {
    if (element.type === 'decl') {
      var value = element.value;
      if (
      // charcode for l
      value.charCodeAt(0) === 108 &&
      // charcode for b
      value.charCodeAt(2) === 98) {
        // this ignores label
        element["return"] = '';
        element.value = '';
      }
    }
  };

  /* eslint-disable no-fallthrough */

  function prefix(value, length) {
    switch (hash(value, length)) {
      // color-adjust
      case 5103:
        return WEBKIT + 'print-' + value + value;
      // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return WEBKIT + value + value;
      // appearance, user-select, transform, hyphens, text-size-adjust

      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return WEBKIT + value + MOZ + value + MS + value + value;
      // flex, flex-direction

      case 6828:
      case 4268:
        return WEBKIT + value + MS + value + value;
      // order

      case 6165:
        return WEBKIT + value + MS + 'flex-' + value + value;
      // align-items

      case 5187:
        return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
      // align-self

      case 5443:
        return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
      // align-content

      case 4675:
        return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
      // flex-shrink

      case 5548:
        return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
      // flex-basis

      case 5292:
        return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
      // flex-grow

      case 6060:
        return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
      // transition

      case 4554:
        return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
      // cursor

      case 6187:
        return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
      // background, background-image

      case 5495:
      case 3959:
        return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
      // justify-content

      case 4968:
        return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
      // (margin|padding)-inline-(start|end)

      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
      // (min|max)?(width|height|inline-size|block-size)

      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        // stretch, max-content, min-content, fill-available
        if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            // -
            if (charat(value, length + 4) !== 45) break;
          // (f)ill-available, (f)it-content

          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
          // (s)tretch

          case 115:
            return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
        }
        break;
      // position: sticky

      case 4949:
        // (s)ticky?
        if (charat(value, length + 1) !== 115) break;
      // display: (flex|inline-flex)

      case 6444:
        switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
          // stic(k)y
          case 107:
            return replace(value, ':', ':' + WEBKIT) + value;
          // (inline-)?fl(e)x

          case 101:
            return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
        }
        break;
      // writing-mode

      case 5936:
        switch (charat(value, length + 11)) {
          // vertical-l(r)
          case 114:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
          // vertical-r(l)

          case 108:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
          // horizontal(-)tb

          case 45:
            return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
        }
        return WEBKIT + value + MS + value + value;
    }
    return value;
  }
  var prefixer = function prefixer(element, index, children, callback) {
    if (element.length > -1) if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, '@', '@' + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function (value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            // :read-(only|write)
            case ':read-only':
            case ':read-write':
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
              })], callback);
            // :placeholder

            case '::placeholder':
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
              })], callback);
          }
          return '';
        });
    }
  };

  /* import type { StylisPlugin } from './types' */

  /*
  export type Options = {
    nonce?: string,
    stylisPlugins?: StylisPlugin[],
    key: string,
    container?: HTMLElement,
    speedy?: boolean,
    prepend?: boolean,
    insertionPoint?: HTMLElement
  }
  */

  var getServerStylisCache = isBrowser$4 ? undefined : weakMemoize(function () {
    return memoize$1(function () {
      var cache = {};
      return function (name) {
        return cache[name];
      };
    });
  });
  var defaultStylisPlugins = [prefixer];
  var createCache = function /*: EmotionCache */
  createCache(options
  /*: Options */) {
    var key = options.key;
    if (isBrowser$4 && key === 'css') {
      var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
      // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
      // note this very very intentionally targets all style elements regardless of the key to ensure
      // that creating a cache works inside of render of a React component

      Array.prototype.forEach.call(ssrStyles, function (node
      /*: HTMLStyleElement */) {
        // we want to only move elements which have a space in the data-emotion attribute value
        // because that indicates that it is an Emotion 11 server-side rendered style elements
        // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
        // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
        // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
        // will not result in the Emotion 10 styles being destroyed
        var dataEmotionAttribute = node.getAttribute('data-emotion');
        if (dataEmotionAttribute.indexOf(' ') === -1) {
          return;
        }
        document.head.appendChild(node);
        node.setAttribute('data-s', '');
      });
    }
    var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
    var inserted = {};
    var container;
    /* : Node */

    var nodesToHydrate = [];
    if (isBrowser$4) {
      container = options.container || document.head;
      Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node
      /*: HTMLStyleElement */) {
        var attrib = node.getAttribute("data-emotion").split(' ');
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node);
      });
    }
    var _insert;
    /*: (
    selector: string,
    serialized: SerializedStyles,
    sheet: StyleSheet,
    shouldCache: boolean
    ) => string | void */

    var omnipresentPlugins = [compat, removeLabel];
    if (isBrowser$4) {
      var currentSheet;
      var finalizingPlugins = [stringify, rulesheet(function (rule) {
        currentSheet.insert(rule);
      })];
      var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
      var stylis = function stylis(styles) {
        return serialize(compile(styles), serializer);
      };
      _insert = function /*: void */
      insert(selector
      /*: string */, serialized
      /*: SerializedStyles */, sheet
      /*: StyleSheet */, shouldCache
      /*: boolean */) {
        currentSheet = sheet;
        stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        if (shouldCache) {
          cache.inserted[serialized.name] = true;
        }
      };
    } else {
      var _finalizingPlugins = [stringify];
      var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));
      var _stylis = function _stylis(styles) {
        return serialize(compile(styles), _serializer);
      };
      var serverStylisCache = getServerStylisCache(stylisPlugins)(key);
      var getRules = function /*: string */
      getRules(selector
      /*: string */, serialized
      /*: SerializedStyles */) {
        var name = serialized.name;
        if (serverStylisCache[name] === undefined) {
          serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
        }
        return serverStylisCache[name];
      };
      _insert = function /*: string | void */
      _insert(selector
      /*: string */, serialized
      /*: SerializedStyles */, sheet
      /*: StyleSheet */, shouldCache
      /*: boolean */) {
        var name = serialized.name;
        var rules = getRules(selector, serialized);
        if (cache.compat === undefined) {
          // in regular mode, we don't set the styles on the inserted cache
          // since we don't need to and that would be wasting memory
          // we return them so that they are rendered in a style tag
          if (shouldCache) {
            cache.inserted[name] = true;
          }
          return rules;
        } else {
          // in compat mode, we put the styles on the inserted cache so
          // that emotion-server can pull out the styles
          // except when we don't want to cache it which was in Global but now
          // is nowhere but we don't want to do a major right now
          // and just in case we're going to leave the case here
          // it's also not affecting client side bundle size
          // so it's really not a big deal
          if (shouldCache) {
            cache.inserted[name] = rules;
          } else {
            return rules;
          }
        }
      };
    }
    var cache
    /*: EmotionCache */ = {
      key: key,
      sheet: new StyleSheet({
        key: key,
        container: container,
        nonce: options.nonce,
        speedy: options.speedy,
        prepend: options.prepend,
        insertionPoint: options.insertionPoint
      }),
      nonce: options.nonce,
      inserted: inserted,
      registered: {},
      insert: _insert
    };
    cache.sheet.hydrate(nodesToHydrate);
    return cache;
  };

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var reactIs$2 = {exports: {}};

  var reactIs_production_min$2 = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production_min$2;
  function requireReactIs_production_min$2() {
    if (hasRequiredReactIs_production_min$2) return reactIs_production_min$2;
    hasRequiredReactIs_production_min$2 = 1;
    var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.block") : 60121,
      w = b ? Symbol.for("react.fundamental") : 60117,
      x = b ? Symbol.for("react.responder") : 60118,
      y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    reactIs_production_min$2.AsyncMode = l;
    reactIs_production_min$2.ConcurrentMode = m;
    reactIs_production_min$2.ContextConsumer = k;
    reactIs_production_min$2.ContextProvider = h;
    reactIs_production_min$2.Element = c;
    reactIs_production_min$2.ForwardRef = n;
    reactIs_production_min$2.Fragment = e;
    reactIs_production_min$2.Lazy = t;
    reactIs_production_min$2.Memo = r;
    reactIs_production_min$2.Portal = d;
    reactIs_production_min$2.Profiler = g;
    reactIs_production_min$2.StrictMode = f;
    reactIs_production_min$2.Suspense = p;
    reactIs_production_min$2.isAsyncMode = function (a) {
      return A(a) || z(a) === l;
    };
    reactIs_production_min$2.isConcurrentMode = A;
    reactIs_production_min$2.isContextConsumer = function (a) {
      return z(a) === k;
    };
    reactIs_production_min$2.isContextProvider = function (a) {
      return z(a) === h;
    };
    reactIs_production_min$2.isElement = function (a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    reactIs_production_min$2.isForwardRef = function (a) {
      return z(a) === n;
    };
    reactIs_production_min$2.isFragment = function (a) {
      return z(a) === e;
    };
    reactIs_production_min$2.isLazy = function (a) {
      return z(a) === t;
    };
    reactIs_production_min$2.isMemo = function (a) {
      return z(a) === r;
    };
    reactIs_production_min$2.isPortal = function (a) {
      return z(a) === d;
    };
    reactIs_production_min$2.isProfiler = function (a) {
      return z(a) === g;
    };
    reactIs_production_min$2.isStrictMode = function (a) {
      return z(a) === f;
    };
    reactIs_production_min$2.isSuspense = function (a) {
      return z(a) === p;
    };
    reactIs_production_min$2.isValidElementType = function (a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    reactIs_production_min$2.typeOf = z;
    return reactIs_production_min$2;
  }

  var reactIs_development$2 = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_development$2;
  function requireReactIs_development$2() {
    if (hasRequiredReactIs_development$2) return reactIs_development$2;
    hasRequiredReactIs_development$2 = 1;
    if (process.env.NODE_ENV !== "production") {
      (function () {

        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' ||
          // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        reactIs_development$2.AsyncMode = AsyncMode;
        reactIs_development$2.ConcurrentMode = ConcurrentMode;
        reactIs_development$2.ContextConsumer = ContextConsumer;
        reactIs_development$2.ContextProvider = ContextProvider;
        reactIs_development$2.Element = Element;
        reactIs_development$2.ForwardRef = ForwardRef;
        reactIs_development$2.Fragment = Fragment;
        reactIs_development$2.Lazy = Lazy;
        reactIs_development$2.Memo = Memo;
        reactIs_development$2.Portal = Portal;
        reactIs_development$2.Profiler = Profiler;
        reactIs_development$2.StrictMode = StrictMode;
        reactIs_development$2.Suspense = Suspense;
        reactIs_development$2.isAsyncMode = isAsyncMode;
        reactIs_development$2.isConcurrentMode = isConcurrentMode;
        reactIs_development$2.isContextConsumer = isContextConsumer;
        reactIs_development$2.isContextProvider = isContextProvider;
        reactIs_development$2.isElement = isElement;
        reactIs_development$2.isForwardRef = isForwardRef;
        reactIs_development$2.isFragment = isFragment;
        reactIs_development$2.isLazy = isLazy;
        reactIs_development$2.isMemo = isMemo;
        reactIs_development$2.isPortal = isPortal;
        reactIs_development$2.isProfiler = isProfiler;
        reactIs_development$2.isStrictMode = isStrictMode;
        reactIs_development$2.isSuspense = isSuspense;
        reactIs_development$2.isValidElementType = isValidElementType;
        reactIs_development$2.typeOf = typeOf;
      })();
    }
    return reactIs_development$2;
  }

  var hasRequiredReactIs$2;
  function requireReactIs$2() {
    if (hasRequiredReactIs$2) return reactIs$2.exports;
    hasRequiredReactIs$2 = 1;
    if (process.env.NODE_ENV === 'production') {
      reactIs$2.exports = requireReactIs_production_min$2();
    } else {
      reactIs$2.exports = requireReactIs_development$2();
    }
    return reactIs$2.exports;
  }

  var hoistNonReactStatics_cjs;
  var hasRequiredHoistNonReactStatics_cjs;
  function requireHoistNonReactStatics_cjs() {
    if (hasRequiredHoistNonReactStatics_cjs) return hoistNonReactStatics_cjs;
    hasRequiredHoistNonReactStatics_cjs = 1;
    var reactIs = requireReactIs$2();

    /**
     * Copyright 2015, Yahoo! Inc.
     * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
     */
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      '$$typeof': true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      '$$typeof': true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      // React v16.11 and below
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      } // React v16.12 and above

      return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              // Avoid failures from read-only properties
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {}
          }
        }
      }
      return targetComponent;
    }
    hoistNonReactStatics_cjs = hoistNonReactStatics;
    return hoistNonReactStatics_cjs;
  }

  requireHoistNonReactStatics_cjs();

  var isBrowser$3 = typeof document !== 'undefined';
  function getRegisteredStyles(registered, registeredStyles, classNames) {
    var rawClassName = '';
    classNames.split(' ').forEach(function (className) {
      if (registered[className] !== undefined) {
        registeredStyles.push(registered[className] + ";");
      } else if (className) {
        rawClassName += className + " ";
      }
    });
    return rawClassName;
  }
  var registerStyles = function registerStyles(cache, serialized, isStringTag) {
    var className = cache.key + "-" + serialized.name;
    if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false ||
    // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$3 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
      cache.registered[className] = serialized.styles;
    }
  };
  var insertStyles = function insertStyles(cache, serialized, isStringTag) {
    registerStyles(cache, serialized, isStringTag);
    var className = cache.key + "-" + serialized.name;
    if (cache.inserted[serialized.name] === undefined) {
      var stylesForSSR = '';
      var current = serialized;
      do {
        var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);
        if (!isBrowser$3 && maybeStyles !== undefined) {
          stylesForSSR += maybeStyles;
        }
        current = current.next;
      } while (current !== undefined);
      if (!isBrowser$3 && stylesForSSR.length !== 0) {
        return stylesForSSR;
      }
    }
  };

  /* eslint-disable */
  // Inspired by https://github.com/garycourt/murmurhash-js
  // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
  function murmur2(str) {
    // 'm' and 'r' are mixing constants generated offline.
    // They're not really 'magic', they just happen to work well.
    // const m = 0x5bd1e995;
    // const r = 24;
    // Initialize the hash
    var h = 0; // Mix 4 bytes at a time into the hash

    var k,
      i = 0,
      len = str.length;
    for (; len >= 4; ++i, len -= 4) {
      k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
      k = /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
      k ^= /* k >>> r: */
      k >>> 24;
      h = /* Math.imul(k, m): */
      (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Handle the last few bytes of the input array

    switch (len) {
      case 3:
        h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
      case 2:
        h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
      case 1:
        h ^= str.charCodeAt(i) & 0xff;
        h = /* Math.imul(h, m): */
        (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    } // Do a few final mixes of the hash to ensure the last few
    // bytes are well-incorporated.

    h ^= h >>> 13;
    h = /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
    return ((h ^ h >>> 15) >>> 0).toString(36);
  }

  var unitlessKeys = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var isDevelopment$1 = false;
  var hyphenateRegex = /[A-Z]|^ms/g;
  var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
  var isCustomProperty = function isCustomProperty(property) {
    return property.charCodeAt(1) === 45;
  };
  var isProcessableValue = function isProcessableValue(value) {
    return value != null && typeof value !== 'boolean';
  };
  var processStyleName = /* #__PURE__ */memoize$1(function (styleName) {
    return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
  });
  var processStyleValue = function processStyleValue(key, value) {
    switch (key) {
      case 'animation':
      case 'animationName':
        {
          if (typeof value === 'string') {
            return value.replace(animationRegex, function (match, p1, p2) {
              cursor = {
                name: p1,
                styles: p2,
                next: cursor
              };
              return p1;
            });
          }
        }
    }
    if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
      return value + 'px';
    }
    return value;
  };
  var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';
  function handleInterpolation(mergedProps, registered, interpolation) {
    if (interpolation == null) {
      return '';
    }
    var componentSelector = interpolation;
    if (componentSelector.__emotion_styles !== undefined) {
      return componentSelector;
    }
    switch (typeof interpolation) {
      case 'boolean':
        {
          return '';
        }
      case 'object':
        {
          var keyframes = interpolation;
          if (keyframes.anim === 1) {
            cursor = {
              name: keyframes.name,
              styles: keyframes.styles,
              next: cursor
            };
            return keyframes.name;
          }
          var serializedStyles = interpolation;
          if (serializedStyles.styles !== undefined) {
            var next = serializedStyles.next;
            if (next !== undefined) {
              // not the most efficient thing ever but this is a pretty rare case
              // and there will be very few iterations of this generally
              while (next !== undefined) {
                cursor = {
                  name: next.name,
                  styles: next.styles,
                  next: cursor
                };
                next = next.next;
              }
            }
            var styles = serializedStyles.styles + ";";
            return styles;
          }
          return createStringFromObject(mergedProps, registered, interpolation);
        }
      case 'function':
        {
          if (mergedProps !== undefined) {
            var previousCursor = cursor;
            var result = interpolation(mergedProps);
            cursor = previousCursor;
            return handleInterpolation(mergedProps, registered, result);
          }
          break;
        }
    } // finalize string values (regular strings and functions interpolated into css calls)

    var asString = interpolation;
    if (registered == null) {
      return asString;
    }
    var cached = registered[asString];
    return cached !== undefined ? cached : asString;
  }
  function createStringFromObject(mergedProps, registered, obj) {
    var string = '';
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
      }
    } else {
      for (var key in obj) {
        var value = obj[key];
        if (typeof value !== 'object') {
          var asString = value;
          if (registered != null && registered[asString] !== undefined) {
            string += key + "{" + registered[asString] + "}";
          } else if (isProcessableValue(asString)) {
            string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
          }
        } else {
          if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment$1) {
            throw new Error(noComponentSelectorMessage);
          }
          if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
            for (var _i = 0; _i < value.length; _i++) {
              if (isProcessableValue(value[_i])) {
                string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
              }
            }
          } else {
            var interpolated = handleInterpolation(mergedProps, registered, value);
            switch (key) {
              case 'animation':
              case 'animationName':
                {
                  string += processStyleName(key) + ":" + interpolated + ";";
                  break;
                }
              default:
                {
                  string += key + "{" + interpolated + "}";
                }
            }
          }
        }
      }
    }
    return string;
  }
  var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
  // keyframes are stored on the SerializedStyles object as a linked list

  var cursor;
  function serializeStyles(args, registered, mergedProps) {
    if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
      return args[0];
    }
    var stringMode = true;
    var styles = '';
    cursor = undefined;
    var strings = args[0];
    if (strings == null || strings.raw === undefined) {
      stringMode = false;
      styles += handleInterpolation(mergedProps, registered, strings);
    } else {
      var asTemplateStringsArr = strings;
      styles += asTemplateStringsArr[0];
    } // we start at 1 since we've already handled the first arg

    for (var i = 1; i < args.length; i++) {
      styles += handleInterpolation(mergedProps, registered, args[i]);
      if (stringMode) {
        var templateStringsArr = strings;
        styles += templateStringsArr[i];
      }
    } // using a global regex with .exec is stateful so lastIndex has to be reset each time

    labelPattern.lastIndex = 0;
    var identifierName = '';
    var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

    while ((match = labelPattern.exec(styles)) !== null) {
      identifierName += '-' + match[1];
    }
    var name = murmur2(styles) + identifierName;
    return {
      name: name,
      styles: styles,
      next: cursor
    };
  }

  var isBrowser$2 = typeof document !== 'undefined';
  var syncFallback = function syncFallback(create) {
    return create();
  };
  var useInsertionEffect = React__namespace['useInsertion' + 'Effect'] ? React__namespace['useInsertion' + 'Effect'] : false;
  var useInsertionEffectAlwaysWithSyncFallback = !isBrowser$2 ? syncFallback : useInsertionEffect || syncFallback;

  var isBrowser$1 = typeof document !== 'undefined';

  /* import { type EmotionCache } from '@emotion/utils' */
  var EmotionCacheContext
  /*: React.Context<EmotionCache | null> */ = /* #__PURE__ */React__namespace.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
    key: 'css'
  }) : null);
  EmotionCacheContext.Provider;
  var withEmotionCache = function withEmotionCache
  /* <Props, Ref: React.Ref<*>> */(func
  /*: (props: Props, cache: EmotionCache, ref: Ref) => React.Node */) /*: React.AbstractComponent<Props> */
  {
    return /*#__PURE__*/React.forwardRef(function (props
    /*: Props */, ref
    /*: Ref */) {
      // the cache will never be null in the browser
      var cache = React.useContext(EmotionCacheContext);
      return func(props, cache, ref);
    });
  };
  if (!isBrowser$1) {
    withEmotionCache = function withEmotionCache
    /* <Props> */(func
    /*: (props: Props, cache: EmotionCache) => React.Node */) /*: React.StatelessFunctionalComponent<Props> */
    {
      return function (props
      /*: Props */) {
        var cache = React.useContext(EmotionCacheContext);
        if (cache === null) {
          // yes, we're potentially creating this on every render
          // it doesn't actually matter though since it's only on the server
          // so there will only every be a single render
          // that could change in the future because of suspense and etc. but for now,
          // this works and i don't want to optimise for a future thing that we aren't sure about
          cache = createCache({
            key: 'css'
          });
          return /*#__PURE__*/React__namespace.createElement(EmotionCacheContext.Provider, {
            value: cache
          }, func(props, cache));
        } else {
          return func(props, cache);
        }
      };
    };
  }
  var ThemeContext = /* #__PURE__ */React__namespace.createContext({});

  /* import type { Interpolation, SerializedStyles } from '@emotion/utils' */

  function css() /*: SerializedStyles */
  {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return serializeStyles(args);
  }

  /*
  type Keyframes = {|
    name: string,
    styles: string,
    anim: 1,
    toString: () => string
  |} & string
  */

  var keyframes = function /*: Keyframes */
  keyframes() {
    var insertable = css.apply(void 0, arguments);
    var name = "animation-" + insertable.name;
    return {
      name: name,
      styles: "@keyframes " + name + "{" + insertable.styles + "}",
      anim: 1,
      toString: function toString() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      }
    };
  };

  /* import type {
    ElementType,
    StatelessFunctionalComponent,
    AbstractComponent
  } from 'react' */
  /*
  export type Interpolations = Array<any>

  export type StyledElementType<Props> =
    | string
    | AbstractComponent<{ ...Props, className: string }, mixed>

  export type StyledOptions = {
    label?: string,
    shouldForwardProp?: string => boolean,
    target?: string
  }

  export type StyledComponent<Props> = StatelessFunctionalComponent<Props> & {
    defaultProps: any,
    toString: () => string,
    withComponent: (
      nextTag: StyledElementType<Props>,
      nextOptions?: StyledOptions
    ) => StyledComponent<Props>
  }

  export type PrivateStyledComponent<Props> = StyledComponent<Props> & {
    __emotion_real: StyledComponent<Props>,
    __emotion_base: any,
    __emotion_styles: any,
    __emotion_forwardProp: any
  }
  */

  var testOmitPropsOnStringTag = isPropValid;
  var testOmitPropsOnComponent = function testOmitPropsOnComponent(key
  /*: string */) {
    return key !== 'theme';
  };
  var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag
  /*: ElementType */) {
    return typeof tag === 'string' &&
    // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
  };
  var composeShouldForwardProps = function composeShouldForwardProps(tag
  /*: PrivateStyledComponent<any> */, options
  /*: StyledOptions | void */, isReal
  /*: boolean */) {
    var shouldForwardProp;
    if (options) {
      var optionsShouldForwardProp = options.shouldForwardProp;
      shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function (propName
      /*: string */) {
        return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
      } : optionsShouldForwardProp;
    }
    if (typeof shouldForwardProp !== 'function' && isReal) {
      shouldForwardProp = tag.__emotion_forwardProp;
    }
    return shouldForwardProp;
  };
  /*
  export type CreateStyledComponent = <Props>(
    ...args: Interpolations
  ) => StyledComponent<Props>

  export type CreateStyled = {
    <Props>(
      tag: StyledElementType<Props>,
      options?: StyledOptions
    ): (...args: Interpolations) => StyledComponent<Props>,
    [key: string]: CreateStyledComponent,
    bind: () => CreateStyled
  }
  */

  var isDevelopment = false;
  var isBrowser = typeof document !== 'undefined';
  var Insertion = function Insertion(_ref) {
    var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
    registerStyles(cache, serialized, isStringTag);
    var rules = useInsertionEffectAlwaysWithSyncFallback(function () {
      return insertStyles(cache, serialized, isStringTag);
    });
    if (!isBrowser && rules !== undefined) {
      var _ref2;
      var serializedNames = serialized.name;
      var next = serialized.next;
      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        next = next.next;
      }
      return /*#__PURE__*/React__namespace.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref2.nonce = cache.sheet.nonce, _ref2));
    }
    return null;
  };
  var createStyled$1
  /*: CreateStyled */ = function createStyled
  /*: CreateStyled */(tag
  /*: any */, options
  /* ?: StyledOptions */) {
    var isReal = tag.__emotion_real === tag;
    var baseTag = isReal && tag.__emotion_base || tag;
    var identifierName;
    var targetClassName;
    if (options !== undefined) {
      identifierName = options.label;
      targetClassName = options.target;
    }
    var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
    var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
    var shouldUseAs = !defaultShouldForwardProp('as');
    /* return function<Props>(): PrivateStyledComponent<Props> { */

    return function () {
      var args = arguments;
      var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];
      if (identifierName !== undefined) {
        styles.push("label:" + identifierName + ";");
      }
      if (args[0] == null || args[0].raw === undefined) {
        styles.push.apply(styles, args);
      } else {
        styles.push(args[0][0]);
        var len = args.length;
        var i = 1;
        for (; i < len; i++) {
          styles.push(args[i], args[0][i]);
        }
      }
      var Styled
      /*: PrivateStyledComponent<Props> */ = withEmotionCache(function (props, cache, ref) {
        var FinalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = React__namespace.useContext(ThemeContext);
        }
        if (typeof props.className === 'string') {
          className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
        className += cache.key + "-" + serialized.name;
        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }
        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;
          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        if (ref) {
          newProps.ref = ref;
        }
        return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement(Insertion, {
          cache: cache,
          serialized: serialized,
          isStringTag: typeof FinalTag === 'string'
        }), /*#__PURE__*/React__namespace.createElement(FinalTag, newProps));
      });
      Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
      Styled.defaultProps = tag.defaultProps;
      Styled.__emotion_real = Styled;
      Styled.__emotion_base = baseTag;
      Styled.__emotion_styles = styles;
      Styled.__emotion_forwardProp = shouldForwardProp;
      Object.defineProperty(Styled, 'toString', {
        value: function value() {
          if (targetClassName === undefined && isDevelopment) {
            return 'NO_COMPONENT_SELECTOR';
          }
          return "." + targetClassName;
        }
      });
      Styled.withComponent = function (nextTag
      /*: StyledElementType<Props> */, nextOptions
      /* ?: StyledOptions */) {
        return createStyled(nextTag, _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
        })).apply(void 0, styles);
      };
      return Styled;
    };
  };

  var tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
  // SVG
  'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
  var newStyled = createStyled$1.bind();
  tags.forEach(function (tagName) {
    newStyled[tagName] = newStyled(tagName);
  });

  var propTypes = {exports: {}};

  var reactIs$1 = {exports: {}};

  var reactIs_production_min$1 = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production_min$1;
  function requireReactIs_production_min$1() {
    if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
    hasRequiredReactIs_production_min$1 = 1;
    var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.suspense_list") : 60120,
      r = b ? Symbol.for("react.memo") : 60115,
      t = b ? Symbol.for("react.lazy") : 60116,
      v = b ? Symbol.for("react.block") : 60121,
      w = b ? Symbol.for("react.fundamental") : 60117,
      x = b ? Symbol.for("react.responder") : 60118,
      y = b ? Symbol.for("react.scope") : 60119;
    function z(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;
        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case t:
                  case r:
                  case h:
                    return a;
                  default:
                    return u;
                }
            }
          case d:
            return u;
        }
      }
    }
    function A(a) {
      return z(a) === m;
    }
    reactIs_production_min$1.AsyncMode = l;
    reactIs_production_min$1.ConcurrentMode = m;
    reactIs_production_min$1.ContextConsumer = k;
    reactIs_production_min$1.ContextProvider = h;
    reactIs_production_min$1.Element = c;
    reactIs_production_min$1.ForwardRef = n;
    reactIs_production_min$1.Fragment = e;
    reactIs_production_min$1.Lazy = t;
    reactIs_production_min$1.Memo = r;
    reactIs_production_min$1.Portal = d;
    reactIs_production_min$1.Profiler = g;
    reactIs_production_min$1.StrictMode = f;
    reactIs_production_min$1.Suspense = p;
    reactIs_production_min$1.isAsyncMode = function (a) {
      return A(a) || z(a) === l;
    };
    reactIs_production_min$1.isConcurrentMode = A;
    reactIs_production_min$1.isContextConsumer = function (a) {
      return z(a) === k;
    };
    reactIs_production_min$1.isContextProvider = function (a) {
      return z(a) === h;
    };
    reactIs_production_min$1.isElement = function (a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };
    reactIs_production_min$1.isForwardRef = function (a) {
      return z(a) === n;
    };
    reactIs_production_min$1.isFragment = function (a) {
      return z(a) === e;
    };
    reactIs_production_min$1.isLazy = function (a) {
      return z(a) === t;
    };
    reactIs_production_min$1.isMemo = function (a) {
      return z(a) === r;
    };
    reactIs_production_min$1.isPortal = function (a) {
      return z(a) === d;
    };
    reactIs_production_min$1.isProfiler = function (a) {
      return z(a) === g;
    };
    reactIs_production_min$1.isStrictMode = function (a) {
      return z(a) === f;
    };
    reactIs_production_min$1.isSuspense = function (a) {
      return z(a) === p;
    };
    reactIs_production_min$1.isValidElementType = function (a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
    };
    reactIs_production_min$1.typeOf = z;
    return reactIs_production_min$1;
  }

  var reactIs_development$1 = {};

  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_development$1;
  function requireReactIs_development$1() {
    if (hasRequiredReactIs_development$1) return reactIs_development$1;
    hasRequiredReactIs_development$1 = 1;
    if (process.env.NODE_ENV !== "production") {
      (function () {

        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' ||
          // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        reactIs_development$1.AsyncMode = AsyncMode;
        reactIs_development$1.ConcurrentMode = ConcurrentMode;
        reactIs_development$1.ContextConsumer = ContextConsumer;
        reactIs_development$1.ContextProvider = ContextProvider;
        reactIs_development$1.Element = Element;
        reactIs_development$1.ForwardRef = ForwardRef;
        reactIs_development$1.Fragment = Fragment;
        reactIs_development$1.Lazy = Lazy;
        reactIs_development$1.Memo = Memo;
        reactIs_development$1.Portal = Portal;
        reactIs_development$1.Profiler = Profiler;
        reactIs_development$1.StrictMode = StrictMode;
        reactIs_development$1.Suspense = Suspense;
        reactIs_development$1.isAsyncMode = isAsyncMode;
        reactIs_development$1.isConcurrentMode = isConcurrentMode;
        reactIs_development$1.isContextConsumer = isContextConsumer;
        reactIs_development$1.isContextProvider = isContextProvider;
        reactIs_development$1.isElement = isElement;
        reactIs_development$1.isForwardRef = isForwardRef;
        reactIs_development$1.isFragment = isFragment;
        reactIs_development$1.isLazy = isLazy;
        reactIs_development$1.isMemo = isMemo;
        reactIs_development$1.isPortal = isPortal;
        reactIs_development$1.isProfiler = isProfiler;
        reactIs_development$1.isStrictMode = isStrictMode;
        reactIs_development$1.isSuspense = isSuspense;
        reactIs_development$1.isValidElementType = isValidElementType;
        reactIs_development$1.typeOf = typeOf;
      })();
    }
    return reactIs_development$1;
  }

  var hasRequiredReactIs$1;
  function requireReactIs$1() {
    if (hasRequiredReactIs$1) return reactIs$1.exports;
    hasRequiredReactIs$1 = 1;
    if (process.env.NODE_ENV === 'production') {
      reactIs$1.exports = requireReactIs_production_min$1();
    } else {
      reactIs$1.exports = requireReactIs_development$1();
    }
    return reactIs$1.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  var objectAssign;
  var hasRequiredObjectAssign;
  function requireObjectAssign() {
    if (hasRequiredObjectAssign) return objectAssign;
    hasRequiredObjectAssign = 1;
    /* eslint-disable no-unused-vars */
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }

        // Detect buggy property enumeration order in older V8 versions.

        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
          return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
          return test2[n];
        });
        if (order2.join('') !== '0123456789') {
          return false;
        }

        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
          return false;
        }
        return true;
      } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
      }
    }
    objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
    return objectAssign;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var ReactPropTypesSecret_1;
  var hasRequiredReactPropTypesSecret;
  function requireReactPropTypesSecret() {
    if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
    hasRequiredReactPropTypesSecret = 1;
    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    ReactPropTypesSecret_1 = ReactPropTypesSecret;
    return ReactPropTypesSecret_1;
  }

  var has;
  var hasRequiredHas;
  function requireHas() {
    if (hasRequiredHas) return has;
    hasRequiredHas = 1;
    has = Function.call.bind(Object.prototype.hasOwnProperty);
    return has;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var checkPropTypes_1;
  var hasRequiredCheckPropTypes;
  function requireCheckPropTypes() {
    if (hasRequiredCheckPropTypes) return checkPropTypes_1;
    hasRequiredCheckPropTypes = 1;
    var printWarning = function () {};
    if (process.env.NODE_ENV !== 'production') {
      var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
      var loggedTypeFailures = {};
      var has = /*@__PURE__*/requireHas();
      printWarning = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {/**/}
      };
    }

    /**
     * Assert that the values match with the type specs.
     * Error messages are memorized and will only be shown once.
     *
     * @param {object} typeSpecs Map of name to a ReactPropType
     * @param {object} values Runtime values that need to be type-checked
     * @param {string} location e.g. "prop", "context", "child context"
     * @param {string} componentName Name of the component for error messages.
     * @param {?Function} getStack Returns the component stack.
     * @private
     */
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
              // This is intentionally an invariant that gets caught. It's the same
              // behavior as without this statement except with a better message.
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              // Only monitor this failure once because there tends to be a lot of the
              // same error.
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
            }
          }
        }
      }
    }

    /**
     * Resets warning cache when testing.
     *
     * @private
     */
    checkPropTypes.resetWarningCache = function () {
      if (process.env.NODE_ENV !== 'production') {
        loggedTypeFailures = {};
      }
    };
    checkPropTypes_1 = checkPropTypes;
    return checkPropTypes_1;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var factoryWithTypeCheckers;
  var hasRequiredFactoryWithTypeCheckers;
  function requireFactoryWithTypeCheckers() {
    if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
    hasRequiredFactoryWithTypeCheckers = 1;
    var ReactIs = requireReactIs$1();
    var assign = requireObjectAssign();
    var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
    var has = /*@__PURE__*/requireHas();
    var checkPropTypes = /*@__PURE__*/requireCheckPropTypes();
    var printWarning = function () {};
    if (process.env.NODE_ENV !== 'production') {
      printWarning = function (text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
      /* global Symbol */
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

      /**
       * Returns the iterator method function contained on the iterable object.
       *
       * Be sure to invoke the function with the iterable as context:
       *
       *     var iteratorFn = getIteratorFn(myIterable);
       *     if (iteratorFn) {
       *       var iterator = iteratorFn.call(myIterable);
       *       ...
       *     }
       *
       * @param {?object} maybeIterable
       * @return {?function}
       */
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }

      /**
       * Collection of methods that allow declaration and validation of props that are
       * supplied to React components. Example usage:
       *
       *   var Props = require('ReactPropTypes');
       *   var MyArticle = React.createClass({
       *     propTypes: {
       *       // An optional string prop named "description".
       *       description: Props.string,
       *
       *       // A required enum prop named "category".
       *       category: Props.oneOf(['News','Photos']).isRequired,
       *
       *       // A prop named "dialog" that requires an instance of Dialog.
       *       dialog: Props.instanceOf(Dialog).isRequired
       *     },
       *     render: function() { ... }
       *   });
       *
       * A more formal specification of how these methods are used:
       *
       *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
       *   decl := ReactPropTypes.{type}(.isRequired)?
       *
       * Each and every declaration produces a function with the same signature. This
       * allows the creation of custom validation functions. For example:
       *
       *  var MyLink = React.createClass({
       *    propTypes: {
       *      // An optional string or URI prop named "href".
       *      href: function(props, propName, componentName) {
       *        var propValue = props[propName];
       *        if (propValue != null && typeof propValue !== 'string' &&
       *            !(propValue instanceof URI)) {
       *          return new Error(
       *            'Expected a string or an URI for ' + propName + ' in ' +
       *            componentName
       *          );
       *        }
       *      }
       *    },
       *    render: function() {...}
       *  });
       *
       * @internal
       */

      var ANONYMOUS = '<<anonymous>>';

      // Important!
      // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bigint: createPrimitiveTypeChecker('bigint'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };

      /**
       * inlined Object.is polyfill to avoid requiring consumers ship their own
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
       */
      /*eslint-disable no-self-compare*/
      function is(x, y) {
        // SameValue algorithm
        if (x === y) {
          // Steps 1-5, 7-10
          // Steps 6.b-6.e: +0 != -0
          return x !== 0 || 1 / x === 1 / y;
        } else {
          // Step 6.a: NaN == NaN
          return x !== x && y !== y;
        }
      }
      /*eslint-enable no-self-compare*/

      /**
       * We use an Error-like object for backward compatibility as people may call
       * PropTypes directly and inspect their output. However, we don't use real
       * Errors anymore. We don't inspect their stack anyway, and creating them
       * is prohibitively expensive if they are created too often, such as what
       * happens in oneOfType() for any type before the one that matched.
       */
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === 'object' ? data : {};
        this.stack = '';
      }
      // Make `instanceof Error` still work for returned errors.
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              // New behavior only for users of `prop-types` package
              var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
              err.name = 'Invariant Violation';
              throw err;
            } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
              // Old behavior for people using React.PropTypes
              var cacheKey = componentName + ':' + propName;
              if (!manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            // `propValue` being instance of, say, date/regexp, pass the 'object'
            // check, but we can offer a more precise error message here rather than
            // 'of type `object`'.
            var preciseType = getPreciseType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
              expectedType: expectedType
            });
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (process.env.NODE_ENV !== 'production') {
            if (arguments.length > 1) {
              printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
            } else {
              printWarning('Invalid argument supplied to oneOf, expected an array.');
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === 'symbol') {
              return String(value);
            }
            return value;
          });
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== 'function') {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          // We need to check all keys in case some are required but missing from props.
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== 'function') {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                // Iterator will provide entry [k,v] tuples rather than values.
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        // Native Symbol.
        if (propType === 'symbol') {
          return true;
        }

        // falsy value can't be a Symbol
        if (!propValue) {
          return false;
        }

        // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }

        // Fallback for non-spec compliant Symbols which are polyfilled.
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }

      // Equivalent of `typeof` but with special handling for array and regexp.
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          // Old webkits (at least until Android 4.0) return 'function' rather than
          // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
          // passes PropTypes.object.
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }

      // This handles more types than `getPropType`. Only used for error messages.
      // See `createPrimitiveTypeChecker`.
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }

      // Returns a string that is postfixed to a warning about an invalid type.
      // For example, "undefined" or "of type array"
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }

      // Returns class name of the object, if any.
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithTypeCheckers;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var factoryWithThrowingShims;
  var hasRequiredFactoryWithThrowingShims;
  function requireFactoryWithThrowingShims() {
    if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
    hasRequiredFactoryWithThrowingShims = 1;
    var ReactPropTypesSecret = /*@__PURE__*/requireReactPropTypesSecret();
    function emptyFunction() {}
    function emptyFunctionWithReset() {}
    emptyFunctionWithReset.resetWarningCache = emptyFunction;
    factoryWithThrowingShims = function () {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret) {
          // It is still safe when called from React.
          return;
        }
        var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        err.name = 'Invariant Violation';
        throw err;
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      // Important!
      // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
      var ReactPropTypes = {
        array: shim,
        bigint: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        elementType: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim,
        checkPropTypes: emptyFunctionWithReset,
        resetWarningCache: emptyFunction
      };
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    return factoryWithThrowingShims;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredPropTypes;
  function requirePropTypes() {
    if (hasRequiredPropTypes) return propTypes.exports;
    hasRequiredPropTypes = 1;
    if (process.env.NODE_ENV !== 'production') {
      var ReactIs = requireReactIs$1();

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      propTypes.exports = /*@__PURE__*/requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      propTypes.exports = /*@__PURE__*/requireFactoryWithThrowingShims()();
    }
    return propTypes.exports;
  }

  var propTypesExports = /*@__PURE__*/ requirePropTypes();
  var PropTypes = /*@__PURE__*/getDefaultExportFromCjs(propTypesExports);

  var jsxRuntime = {exports: {}};

  var reactJsxRuntime_production_min = {};

  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_production_min;
  function requireReactJsxRuntime_production_min() {
    if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    hasRequiredReactJsxRuntime_production_min = 1;
    var f = React,
      k = Symbol.for("react.element"),
      l = Symbol.for("react.fragment"),
      m = Object.prototype.hasOwnProperty,
      n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      p = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
    function q(c, a, g) {
      var b,
        d = {},
        e = null,
        h = null;
      void 0 !== g && (e = "" + g);
      void 0 !== a.key && (e = "" + a.key);
      void 0 !== a.ref && (h = a.ref);
      for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
      if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
      return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
      };
    }
    reactJsxRuntime_production_min.Fragment = l;
    reactJsxRuntime_production_min.jsx = q;
    reactJsxRuntime_production_min.jsxs = q;
    return reactJsxRuntime_production_min;
  }

  var reactJsxRuntime_development = {};

  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactJsxRuntime_development;
  function requireReactJsxRuntime_development() {
    if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
    hasRequiredReactJsxRuntime_development = 1;
    if (process.env.NODE_ENV !== "production") {
      (function () {

        var React$1 = React;

        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== 'object') {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === 'function') {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning('error', format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          // When changing this logic, you might want to also
          // update consoleWithStackDev.www.js as well.
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== '') {
              format += '%s';
              args = args.concat([stack]);
            } // eslint-disable-next-line react-internal/safe-string-coercion

            var argsWithFormat = args.map(function (item) {
              return String(item);
            }); // Careful: RN currently depends on this prefix

            argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
            // breaks IE9: https://github.com/facebook/react/issues/13610
            // eslint-disable-next-line react-internal/no-production-logging

            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }

        // -----------------------------------------------------------------------------

        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing

        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.

        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || '';
          return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        } // Keep in sync with react-reconciler/getComponentNameFromFiber

        function getContextName(type) {
          return type.displayName || 'Context';
        } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

        function getComponentNameFromType(type) {
          if (type == null) {
            // Host root, text node or just invalid type.
            return null;
          }
          {
            if (typeof type.tag === 'number') {
              error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
            }
          }
          if (typeof type === 'function') {
            return type.displayName || type.name || null;
          }
          if (typeof type === 'string') {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return 'Fragment';
            case REACT_PORTAL_TYPE:
              return 'Portal';
            case REACT_PROFILER_TYPE:
              return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
              return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
              return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
              return 'SuspenseList';
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || 'Memo';
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }

              // eslint-disable-next-line no-fallthrough
            }
          }
          return null;
        }
        var assign = Object.assign;

        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              /* eslint-disable react-internal/no-production-logging */
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              }; // $FlowFixMe Flow thinks console is immutable.

              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
              /* eslint-enable react-internal/no-production-logging */
            }
            if (disabledDepth < 0) {
              error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === undefined) {
              // Extract the VM specific prefix used by each line.
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || '';
              }
            } // We use the prefix to ensure our stacks line up with native stack frames.

            return '\n' + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          // If something asked for a stack inside a fake render, it should get ignored.
          if (!fn || reentry) {
            return '';
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== undefined) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

          Error.prepareStackTrace = undefined;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
            // for warnings.

            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            // This should throw.
            if (construct) {
              // Something should be setting the props in the constructor.
              var Fake = function () {
                throw Error();
              }; // $FlowFixMe

              Object.defineProperty(Fake.prototype, 'props', {
                set: function () {
                  // We use a throwing setter instead of frozen or non-writable props
                  // because that won't throw in a non-strict mode function.
                  throw Error();
                }
              });
              if (typeof Reflect === 'object' && Reflect.construct) {
                // We construct a different control for this case to include any extra
                // frames added by the construct call.
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
              // This extracts the first frame from the sample that isn't also in the control.
              // Skipping one frame that we assume is the frame that calls the two.
              var sampleLines = sample.stack.split('\n');
              var controlLines = control.stack.split('\n');
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                // We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                // Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                  // In V8, the first line is describing the message but other VMs don't.
                  // If we're about to return the first line, and the control is also on the same
                  // line, that's a pretty good indicator that our sample threw at same line as
                  // the control. I.e. before we entered the sample frame. So we ignore this result.
                  // This can happen if you passed a class to function component, or non-function.
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--; // We may still have similar intermediate frames from the construct call.
                      // The next one that isn't the same should be our match though.

                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                        // but we have a user-provided "displayName"
                        // splice it in to make the stack more readable.

                        if (fn.displayName && _frame.includes('<anonymous>')) {
                          _frame = _frame.replace('<anonymous>', fn.displayName);
                        }
                        {
                          if (typeof fn === 'function') {
                            componentFrameCache.set(fn, _frame);
                          }
                        } // Return the line we found.

                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          } // Fallback to just using the name if we couldn't make it throw.

          var name = fn ? fn.displayName || fn.name : '';
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
          {
            if (typeof fn === 'function') {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return '';
          }
          if (typeof type === 'function') {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === 'string') {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame('SuspenseList');
          }
          if (typeof type === 'object') {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE:
                {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                  } catch (x) {}
                }
            }
          }
          return '';
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            // $FlowFixMe This is okay but Flow doesn't know it.
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
                // fail the render phase where it didn't fail before. So we log it.
                // After these have been cleaned up, we'll let them throw.

                try {
                  // This is intentionally an invariant that gets caught. It's the same
                  // behavior as without this statement except with a better message.
                  if (typeof typeSpecs[typeSpecName] !== 'function') {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  // Only monitor this failure once because there tends to be a lot of the
                  // same error.
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error('Failed %s type: %s', location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

        function isArray(a) {
          return isArrayImpl(a);
        }

        /*
         * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
         * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
         *
         * The functions in this module will throw an easier-to-understand,
         * easier-to-debug exception with a clear errors message message explaining the
         * problem. (Instead of a confusing exception thrown inside the implementation
         * of the `value` object).
         */
        // $FlowFixMe only called in DEV, so void return is not possible.
        function typeName(value) {
          {
            // toStringTag is needed for namespaced types like Temporal.Instant
            var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
            return type;
          }
        } // $FlowFixMe only called in DEV, so void return is not possible.

        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          // If you ended up here by following an exception call stack, here's what's
          // happened: you supplied an object or symbol value to React (as a prop, key,
          // DOM attribute, CSS property, string ref, etc.) and when React tried to
          // coerce it to a string using `'' + value`, an exception was thrown.
          //
          // The most common types that will cause this exception are `Symbol` instances
          // and Temporal objects like `Temporal.Instant`. But any object that has a
          // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
          // exception. (Library authors do this to prevent users from using built-in
          // numeric operators like `+` or comparison operators like `>=` because custom
          // methods are needed to perform accurate arithmetic or comparison.)
          //
          // To fix the problem, coerce this object or symbol value to a string before
          // passing it to React. The most reliable way is usually `String(value)`.
          //
          // To find which value is throwing, check the browser or debugger console.
          // Before this exception was thrown, there should be `console.error` output
          // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
          // problem and how that type was used: key, atrribute, input value prop, etc.
          // In most cases, this console output also shows the component and its
          // ancestor components where the exception happened.
          //
          // eslint-disable-next-line react-internal/safe-string-coercion
          return '' + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
              return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, 'ref')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== undefined;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, 'key')) {
              var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function () {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function () {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        /**
         * Factory method to create a new React element. This no longer adheres to
         * the class pattern, so do not use new to call it. Also, instanceof check
         * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
         * if something is a React Element.
         *
         * @param {*} type
         * @param {*} props
         * @param {*} key
         * @param {string|object} ref
         * @param {*} owner
         * @param {*} self A *temporary* helper to detect places where `this` is
         * different from the `owner` when React.createElement is called, so that we
         * can warn. We want to get rid of owner and replace string `ref`s with arrow
         * functions, and as long as `this` and owner are the same, there will be no
         * change in behavior.
         * @param {*} source An annotation object (added by a transpiler or otherwise)
         * indicating filename, line number, and/or other information.
         * @internal
         */

        var ReactElement = function (type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            // The validation flag is currently mutative. We put it on
            // an external backing store so that we can freeze the whole object.
            // This can be replaced with a WeakMap once they are implemented in
            // commonly used development environments.
            element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
            // the validation flag non-enumerable (where possible, which should
            // include every environment we run tests in), so the test framework
            // ignores it.

            Object.defineProperty(element._store, 'validated', {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            }); // self and source are DEV only properties.

            Object.defineProperty(element, '_self', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            }); // Two elements created in two different places should be considered
            // equal for testing purposes and therefore we hide it from enumeration.

            Object.defineProperty(element, '_source', {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        /**
         * https://github.com/reactjs/rfcs/pull/107
         * @param {*} type
         * @param {object} props
         * @param {string} key
         */

        function jsxDEV(type, config, maybeKey, source, self) {
          {
            var propName; // Reserved names are extracted

            var props = {};
            var key = null;
            var ref = null; // Currently, key can be spread in as a prop. This causes a potential
            // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
            // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
            // but as an intermediary step, we will use jsxDEV for everything except
            // <div {...props} key="Hi" />, because we aren't currently able to tell if
            // key is explicitly declared to be undefined or not.

            if (maybeKey !== undefined) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = '' + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = '' + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            } // Remaining properties are added to a new props object

            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            } // Resolve default props

            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === undefined) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        /**
         * Verifies the object is a ReactElement.
         * See https://reactjs.org/docs/react-api.html#isvalidelement
         * @param {?object} object
         * @return {boolean} True if `object` is a ReactElement.
         * @final
         */

        function isValidElement(object) {
          {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return '\n\nCheck the render method of `' + name + '`.';
              }
            }
            return '';
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            return '';
          }
        }
        /**
         * Warn if there's no key explicitly set on dynamic arrays of children or
         * object keys are not valid. This allows us to keep track of children between
         * updates.
         */

        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        /**
         * Warn if the element doesn't have an explicit key assigned to it.
         * This element is in an array. The array could grow and shrink or be
         * reordered. All children that haven't already been validated are required to
         * have a "key" property assigned to it. Error statuses are cached so a warning
         * will only be shown once.
         *
         * @internal
         * @param {ReactElement} element Element that requires a key.
         * @param {*} parentType element's parent's type.
         */

        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
            // property, it may be the creator of the child that's responsible for
            // assigning it a key.

            var childOwner = '';
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              // Give the component that originally created this child.
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        /**
         * Ensure that every element either is passed in a static location, in an
         * array with an explicit keys property defined, or in an object literal
         * with valid key property.
         *
         * @internal
         * @param {ReactNode} node Statically passed child of any type.
         * @param {*} parentType node's parent's type.
         */

        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== 'object') {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              // This element was passed in a valid location.
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === 'function') {
                // Entry iterators used to provide implicit keys,
                // but now we print a separate warning for them later.
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        /**
         * Given an element, validate that its props follow the propTypes definition,
         * provided by the type.
         *
         * @param {ReactElement} element
         */

        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === undefined || typeof type === 'string') {
              return;
            }
            var propTypes;
            if (typeof type === 'function') {
              propTypes = type.propTypes;
            } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              // Intentionally inside to avoid triggering lazy initializers:
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, 'prop', name, element);
            } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

              var _name = getComponentNameFromType(type);
              error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
            }
            if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
              error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
            }
          }
        }
        /**
         * Given a fragment, validate that it can only be provided with fragment props
         * @param {ReactElement} fragment
         */

        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error('Invalid attribute `ref` supplied to `React.Fragment`.');
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
            // succeed and there will likely be errors in render.

            if (!validType) {
              var info = '';
              if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum();
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = 'null';
              } else if (isArray(type)) {
                typeString = 'array';
              } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
              } else {
                typeString = typeof type;
              }
              error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
            // TODO: Drop this when these are no longer allowed as the type argument.

            if (element == null) {
              return element;
            } // Skip key warning if the type isn't valid since our key validation logic
            // doesn't expect a non-string/function type and can throw confusing errors.
            // We don't want exception behavior to differ between dev and prod.
            // (Rendering will throw with a helpful message and as soon as the type is
            // fixed, the key warnings will appear.)

            if (validType) {
              var children = props.children;
              if (children !== undefined) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, 'key')) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function (k) {
                  return k !== 'key';
                });
                var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';
                  error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        } // These two functions exist to still get child warnings in dev
        // even with the prod transform. This means that jsxDEV is purely
        // opt-in behavior for better messages but that we won't stop
        // giving you warnings if you use production apis.

        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
        // for now we can ship identical prod functions

        var jsxs = jsxWithValidationStatic;
        reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
        reactJsxRuntime_development.jsx = jsx;
        reactJsxRuntime_development.jsxs = jsxs;
      })();
    }
    return reactJsxRuntime_development;
  }

  var hasRequiredJsxRuntime;
  function requireJsxRuntime() {
    if (hasRequiredJsxRuntime) return jsxRuntime.exports;
    hasRequiredJsxRuntime = 1;
    if (process.env.NODE_ENV === 'production') {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    } else {
      jsxRuntime.exports = requireReactJsxRuntime_development();
    }
    return jsxRuntime.exports;
  }

  var jsxRuntimeExports = requireJsxRuntime();

  /**
   * @mui/styled-engine v6.1.10
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  /* eslint-disable no-underscore-dangle */
  function styled$1(tag, options) {
    const stylesFactory = newStyled(tag, options);
    if (process.env.NODE_ENV !== 'production') {
      return (...styles) => {
        const component = typeof tag === 'string' ? `"${tag}"` : 'component';
        if (styles.length === 0) {
          console.error([`MUI: Seems like you called \`styled(${component})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join('\n'));
        } else if (styles.some(style => style === undefined)) {
          console.error(`MUI: the styled(${component})(...args) API requires all its args to be defined.`);
        }
        return stylesFactory(...styles);
      };
    }
    return stylesFactory;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  function internal_mutateStyles(tag, processor) {
    // Emotion attaches all the styles as `__emotion_styles`.
    // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
    if (Array.isArray(tag.__emotion_styles)) {
      tag.__emotion_styles = processor(tag.__emotion_styles);
    }
  }

  // Emotion only accepts an array, but we want to avoid allocations
  const wrapper = [];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  function internal_serializeStyles(styles) {
    wrapper[0] = styles;
    return serializeStyles(wrapper);
  }

  // https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
  function isPlainObject(item) {
    if (typeof item !== 'object' || item === null) {
      return false;
    }
    const prototype = Object.getPrototypeOf(item);
    return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
  }
  function deepClone(source) {
    if (/*#__PURE__*/ /*#__PURE__*/React__namespace.isValidElement(source) || !isPlainObject(source)) {
      return source;
    }
    const output = {};
    Object.keys(source).forEach(key => {
      output[key] = deepClone(source[key]);
    });
    return output;
  }
  function deepmerge(target, source, options = {
    clone: true
  }) {
    const output = options.clone ? {
      ...target
    } : target;
    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach(key => {
        if (/*#__PURE__*/React__namespace.isValidElement(source[key])) {
          output[key] = source[key];
        } else if (isPlainObject(source[key]) &&
        // Avoid prototype pollution
        Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
          // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
          output[key] = deepmerge(target[key], source[key], options);
        } else if (options.clone) {
          output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
        } else {
          output[key] = source[key];
        }
      });
    }
    return output;
  }

  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  const sortBreakpointsValues = values => {
    const breakpointsAsArray = Object.keys(values).map(key => ({
      key,
      val: values[key]
    })) || [];
    // Sort in ascending order
    breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
    return breakpointsAsArray.reduce((acc, obj) => {
      return {
        ...acc,
        [obj.key]: obj.val
      };
    }, {});
  };

  // Keep in mind that @media is inclusive by the CSS specification.
  function createBreakpoints(breakpoints) {
    const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
      },
      unit = 'px',
      step = 5,
      ...other
    } = breakpoints;
    const sortedValues = sortBreakpointsValues(values);
    const keys = Object.keys(sortedValues);
    function up(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (min-width:${value}${unit})`;
    }
    function down(key) {
      const value = typeof values[key] === 'number' ? values[key] : key;
      return `@media (max-width:${value - step / 100}${unit})`;
    }
    function between(start, end) {
      const endIndex = keys.indexOf(end);
      return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
    }
    function only(key) {
      if (keys.indexOf(key) + 1 < keys.length) {
        return between(key, keys[keys.indexOf(key) + 1]);
      }
      return up(key);
    }
    function not(key) {
      // handle first and last key separately, for better readability
      const keyIndex = keys.indexOf(key);
      if (keyIndex === 0) {
        return up(keys[1]);
      }
      if (keyIndex === keys.length - 1) {
        return down(keys[keyIndex]);
      }
      return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
    }
    return {
      keys,
      values: sortedValues,
      up,
      down,
      between,
      only,
      not,
      unit,
      ...other
    };
  }

  /**
   * For using in `sx` prop to sort the breakpoint from low to high.
   * Note: this function does not work and will not support multiple units.
   *       e.g. input: { '@container (min-width:300px)': '1rem', '@container (min-width:40rem)': '2rem' }
   *            output: { '@container (min-width:40rem)': '2rem', '@container (min-width:300px)': '1rem' } // since 40 < 300 eventhough 40rem > 300px
   */
  function sortContainerQueries(theme, css) {
    if (!theme.containerQueries) {
      return css;
    }
    const sorted = Object.keys(css).filter(key => key.startsWith('@container')).sort((a, b) => {
      const regex = /min-width:\s*([0-9.]+)/;
      return +(a.match(regex)?.[1] || 0) - +(b.match(regex)?.[1] || 0);
    });
    if (!sorted.length) {
      return css;
    }
    return sorted.reduce((acc, key) => {
      const value = css[key];
      delete acc[key];
      acc[key] = value;
      return acc;
    }, {
      ...css
    });
  }
  function isCqShorthand(breakpointKeys, value) {
    return value === '@' || value.startsWith('@') && (breakpointKeys.some(key => value.startsWith(`@${key}`)) || !!value.match(/^@\d/));
  }
  function getContainerQuery(theme, shorthand) {
    const matches = shorthand.match(/^@([^/]+)?\/?(.+)?$/);
    if (!matches) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${shorthand})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.\n` + 'For example, `@sm` or `@600` or `@40rem/sidebar`.' : formatMuiErrorMessage(18, `(${shorthand})`));
      }
      return null;
    }
    const [, containerQuery, containerName] = matches;
    const value = Number.isNaN(+containerQuery) ? containerQuery || 0 : +containerQuery;
    return theme.containerQueries(containerName).up(value);
  }
  function cssContainerQueries(themeInput) {
    const toContainerQuery = (mediaQuery, name) => mediaQuery.replace('@media', name ? `@container ${name}` : '@container');
    function attachCq(node, name) {
      node.up = (...args) => toContainerQuery(themeInput.breakpoints.up(...args), name);
      node.down = (...args) => toContainerQuery(themeInput.breakpoints.down(...args), name);
      node.between = (...args) => toContainerQuery(themeInput.breakpoints.between(...args), name);
      node.only = (...args) => toContainerQuery(themeInput.breakpoints.only(...args), name);
      node.not = (...args) => {
        const result = toContainerQuery(themeInput.breakpoints.not(...args), name);
        if (result.includes('not all and')) {
          // `@container` does not work with `not all and`, so need to invert the logic
          return result.replace('not all and ', '').replace('min-width:', 'width<').replace('max-width:', 'width>').replace('and', 'or');
        }
        return result;
      };
    }
    const node = {};
    const containerQueries = name => {
      attachCq(node, name);
      return node;
    };
    attachCq(containerQueries);
    return {
      ...themeInput,
      containerQueries
    };
  }

  const shape = {
    borderRadius: 4
  };

  const responsivePropType = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object, PropTypes.array]) : {};

  function merge(acc, item) {
    if (!item) {
      return acc;
    }
    return deepmerge(acc, item, {
      clone: false // No need to clone deep, it's way faster.
    });
  }

  // The breakpoint **start** at this value.
  // For instance with the first breakpoint xs: [xs, sm[.
  const values$1 = {
    xs: 0,
    // phone
    sm: 600,
    // tablet
    md: 900,
    // small laptop
    lg: 1200,
    // desktop
    xl: 1536 // large screen
  };
  const defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values$1[key]}px)`
  };
  const defaultContainerQueries = {
    containerQueries: containerName => ({
      up: key => {
        let result = typeof key === 'number' ? key : values$1[key] || key;
        if (typeof result === 'number') {
          result = `${result}px`;
        }
        return containerName ? `@container ${containerName} (min-width:${result})` : `@container (min-width:${result})`;
      }
    })
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    const theme = props.theme || {};
    if (Array.isArray(propValue)) {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return propValue.reduce((acc, item, index) => {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }
    if (typeof propValue === 'object') {
      const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
      return Object.keys(propValue).reduce((acc, breakpoint) => {
        if (isCqShorthand(themeBreakpoints.keys, breakpoint)) {
          const containerKey = getContainerQuery(theme.containerQueries ? theme : defaultContainerQueries, breakpoint);
          if (containerKey) {
            acc[containerKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
          }
        }
        // key is breakpoint
        else if (Object.keys(themeBreakpoints.values || values$1).includes(breakpoint)) {
          const mediaKey = themeBreakpoints.up(breakpoint);
          acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
        } else {
          const cssKey = breakpoint;
          acc[cssKey] = propValue[cssKey];
        }
        return acc;
      }, {});
    }
    const output = styleFromPropValue(propValue);
    return output;
  }
  function createEmptyBreakpointObject(breakpointsInput = {}) {
    const breakpointsInOrder = breakpointsInput.keys?.reduce((acc, key) => {
      const breakpointStyleKey = breakpointsInput.up(key);
      acc[breakpointStyleKey] = {};
      return acc;
    }, {});
    return breakpointsInOrder || {};
  }
  function removeUnusedBreakpoints(breakpointKeys, style) {
    return breakpointKeys.reduce((acc, key) => {
      const breakpointOutput = acc[key];
      const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
      if (isBreakpointUnused) {
        delete acc[key];
      }
      return acc;
    }, style);
  }

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word in the sentence.
  // We only handle the first word.
  function capitalize(string) {
    if (typeof string !== 'string') {
      throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `capitalize(string)` expects a string argument.' : formatMuiErrorMessage(7));
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function getPath(obj, path, checkVars = true) {
    if (!path || typeof path !== 'string') {
      return null;
    }

    // Check if CSS variables are used
    if (obj && obj.vars && checkVars) {
      const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
      if (val != null) {
        return val;
      }
    }
    return path.split('.').reduce((acc, item) => {
      if (acc && acc[item] != null) {
        return acc[item];
      }
      return null;
    }, obj);
  }
  function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
    let value;
    if (typeof themeMapping === 'function') {
      value = themeMapping(propValueFinal);
    } else if (Array.isArray(themeMapping)) {
      value = themeMapping[propValueFinal] || userValue;
    } else {
      value = getPath(themeMapping, propValueFinal) || userValue;
    }
    if (transform) {
      value = transform(value, userValue, themeMapping);
    }
    return value;
  }
  function style$1(options) {
    const {
      prop,
      cssProperty = options.prop,
      themeKey,
      transform
    } = options;

    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = props => {
      if (props[prop] == null) {
        return null;
      }
      const propValue = props[prop];
      const theme = props.theme;
      const themeMapping = getPath(theme, themeKey) || {};
      const styleFromPropValue = propValueFinal => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, propValue, styleFromPropValue);
    };
    fn.propTypes = process.env.NODE_ENV !== 'production' ? {
      [prop]: responsivePropType
    } : {};
    fn.filterProps = [prop];
    return fn;
  }

  function memoize(fn) {
    const cache = {};
    return arg => {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg);
      }
      return cache[arg];
    };
  }

  const properties = {
    m: 'margin',
    p: 'padding'
  };
  const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom']
  };
  const aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py'
  };

  // memoize() impact:
  // From 300,000 ops/sec
  // To 350,000 ops/sec
  const getCssProperties = memoize(prop => {
    // It's not a shorthand notation.
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }
    const [a, b] = prop.split('');
    const property = properties[a];
    const direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
  });
  const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
  const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
  const spacingKeys = [...marginKeys, ...paddingKeys];
  function createUnaryUnit(theme, themeKey, defaultValue, propName) {
    const themeSpacing = getPath(theme, themeKey, true) ?? defaultValue;
    if (typeof themeSpacing === 'number' || typeof themeSpacing === 'string') {
      return val => {
        if (typeof val === 'string') {
          return val;
        }
        if (process.env.NODE_ENV !== 'production') {
          if (typeof val !== 'number') {
            console.error(`MUI: Expected ${propName} argument to be a number or a string, got ${val}.`);
          }
        }
        if (typeof themeSpacing === 'string') {
          return `calc(${val} * ${themeSpacing})`;
        }
        return themeSpacing * val;
      };
    }
    if (Array.isArray(themeSpacing)) {
      return val => {
        if (typeof val === 'string') {
          return val;
        }
        const abs = Math.abs(val);
        if (process.env.NODE_ENV !== 'production') {
          if (!Number.isInteger(abs)) {
            console.error([`MUI: The \`theme.${themeKey}\` array type cannot be combined with non integer values.` + `You should either use an integer value that can be used as index, or define the \`theme.${themeKey}\` as a number.`].join('\n'));
          } else if (abs > themeSpacing.length - 1) {
            console.error([`MUI: The value provided (${abs}) overflows.`, `The supported values are: ${JSON.stringify(themeSpacing)}.`, `${abs} > ${themeSpacing.length - 1}, you need to add the missing values.`].join('\n'));
          }
        }
        const transformed = themeSpacing[abs];
        if (val >= 0) {
          return transformed;
        }
        if (typeof transformed === 'number') {
          return -transformed;
        }
        return `-${transformed}`;
      };
    }
    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }
    if (process.env.NODE_ENV !== 'production') {
      console.error([`MUI: The \`theme.${themeKey}\` value (${themeSpacing}) is invalid.`, 'It should be a number, an array or a function.'].join('\n'));
    }
    return () => undefined;
  }
  function createUnarySpacing(theme) {
    return createUnaryUnit(theme, 'spacing', 8, 'spacing');
  }
  function getValue(transformer, propValue) {
    if (typeof propValue === 'string' || propValue == null) {
      return propValue;
    }
    return transformer(propValue);
  }
  function getStyleFromPropValue(cssProperties, transformer) {
    return propValue => cssProperties.reduce((acc, cssProperty) => {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  }
  function resolveCssProperty(props, keys, prop, transformer) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (!keys.includes(prop)) {
      return null;
    }
    const cssProperties = getCssProperties(prop);
    const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    const propValue = props[prop];
    return handleBreakpoints(props, propValue, styleFromPropValue);
  }
  function style(props, keys) {
    const transformer = createUnarySpacing(props.theme);
    return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
  }
  function margin(props) {
    return style(props, marginKeys);
  }
  margin.propTypes = process.env.NODE_ENV !== 'production' ? marginKeys.reduce((obj, key) => {
    obj[key] = responsivePropType;
    return obj;
  }, {}) : {};
  margin.filterProps = marginKeys;
  function padding(props) {
    return style(props, paddingKeys);
  }
  padding.propTypes = process.env.NODE_ENV !== 'production' ? paddingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType;
    return obj;
  }, {}) : {};
  padding.filterProps = paddingKeys;
  process.env.NODE_ENV !== 'production' ? spacingKeys.reduce((obj, key) => {
    obj[key] = responsivePropType;
    return obj;
  }, {}) : {};

  // The different signatures imply different meaning for their arguments that can't be expressed structurally.
  // We express the difference with variable names.

  function createSpacing(spacingInput = 8,
  // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://m2.material.io/design/layout/understanding-layout.html
  transform = createUnarySpacing({
    spacing: spacingInput
  })) {
    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    }
    const spacing = (...argsInput) => {
      if (process.env.NODE_ENV !== 'production') {
        if (!(argsInput.length <= 4)) {
          console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${argsInput.length}`);
        }
      }
      const args = argsInput.length === 0 ? [1] : argsInput;
      return args.map(argument => {
        const output = transform(argument);
        return typeof output === 'number' ? `${output}px` : output;
      }).join(' ');
    };
    spacing.mui = true;
    return spacing;
  }

  function compose(...styles) {
    const handlers = styles.reduce((acc, style) => {
      style.filterProps.forEach(prop => {
        acc[prop] = style;
      });
      return acc;
    }, {});

    // false positive
    // eslint-disable-next-line react/function-component-definition
    const fn = props => {
      return Object.keys(props).reduce((acc, prop) => {
        if (handlers[prop]) {
          return merge(acc, handlers[prop](props));
        }
        return acc;
      }, {});
    };
    fn.propTypes = process.env.NODE_ENV !== 'production' ? styles.reduce((acc, style) => Object.assign(acc, style.propTypes), {}) : {};
    fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
    return fn;
  }

  function borderTransform(value) {
    if (typeof value !== 'number') {
      return value;
    }
    return `${value}px solid`;
  }
  function createBorderStyle(prop, transform) {
    return style$1({
      prop,
      themeKey: 'borders',
      transform
    });
  }
  const border = createBorderStyle('border', borderTransform);
  const borderTop = createBorderStyle('borderTop', borderTransform);
  const borderRight = createBorderStyle('borderRight', borderTransform);
  const borderBottom = createBorderStyle('borderBottom', borderTransform);
  const borderLeft = createBorderStyle('borderLeft', borderTransform);
  const borderColor = createBorderStyle('borderColor');
  const borderTopColor = createBorderStyle('borderTopColor');
  const borderRightColor = createBorderStyle('borderRightColor');
  const borderBottomColor = createBorderStyle('borderBottomColor');
  const borderLeftColor = createBorderStyle('borderLeftColor');
  const outline = createBorderStyle('outline', borderTransform);
  const outlineColor = createBorderStyle('outlineColor');

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const borderRadius = props => {
    if (props.borderRadius !== undefined && props.borderRadius !== null) {
      const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4, 'borderRadius');
      const styleFromPropValue = propValue => ({
        borderRadius: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
    }
    return null;
  };
  borderRadius.propTypes = process.env.NODE_ENV !== 'production' ? {
    borderRadius: responsivePropType
  } : {};
  borderRadius.filterProps = ['borderRadius'];
  compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const gap = props => {
    if (props.gap !== undefined && props.gap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'gap');
      const styleFromPropValue = propValue => ({
        gap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.gap, styleFromPropValue);
    }
    return null;
  };
  gap.propTypes = process.env.NODE_ENV !== 'production' ? {
    gap: responsivePropType
  } : {};
  gap.filterProps = ['gap'];

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const columnGap = props => {
    if (props.columnGap !== undefined && props.columnGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'columnGap');
      const styleFromPropValue = propValue => ({
        columnGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.columnGap, styleFromPropValue);
    }
    return null;
  };
  columnGap.propTypes = process.env.NODE_ENV !== 'production' ? {
    columnGap: responsivePropType
  } : {};
  columnGap.filterProps = ['columnGap'];

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const rowGap = props => {
    if (props.rowGap !== undefined && props.rowGap !== null) {
      const transformer = createUnaryUnit(props.theme, 'spacing', 8, 'rowGap');
      const styleFromPropValue = propValue => ({
        rowGap: getValue(transformer, propValue)
      });
      return handleBreakpoints(props, props.rowGap, styleFromPropValue);
    }
    return null;
  };
  rowGap.propTypes = process.env.NODE_ENV !== 'production' ? {
    rowGap: responsivePropType
  } : {};
  rowGap.filterProps = ['rowGap'];
  const gridColumn = style$1({
    prop: 'gridColumn'
  });
  const gridRow = style$1({
    prop: 'gridRow'
  });
  const gridAutoFlow = style$1({
    prop: 'gridAutoFlow'
  });
  const gridAutoColumns = style$1({
    prop: 'gridAutoColumns'
  });
  const gridAutoRows = style$1({
    prop: 'gridAutoRows'
  });
  const gridTemplateColumns = style$1({
    prop: 'gridTemplateColumns'
  });
  const gridTemplateRows = style$1({
    prop: 'gridTemplateRows'
  });
  const gridTemplateAreas = style$1({
    prop: 'gridTemplateAreas'
  });
  const gridArea = style$1({
    prop: 'gridArea'
  });
  compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);

  function paletteTransform(value, userValue) {
    if (userValue === 'grey') {
      return userValue;
    }
    return value;
  }
  const color = style$1({
    prop: 'color',
    themeKey: 'palette',
    transform: paletteTransform
  });
  const bgcolor = style$1({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
  });
  const backgroundColor = style$1({
    prop: 'backgroundColor',
    themeKey: 'palette',
    transform: paletteTransform
  });
  compose(color, bgcolor, backgroundColor);

  function sizingTransform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  const width = style$1({
    prop: 'width',
    transform: sizingTransform
  });
  const maxWidth = props => {
    if (props.maxWidth !== undefined && props.maxWidth !== null) {
      const styleFromPropValue = propValue => {
        const breakpoint = props.theme?.breakpoints?.values?.[propValue] || values$1[propValue];
        if (!breakpoint) {
          return {
            maxWidth: sizingTransform(propValue)
          };
        }
        if (props.theme?.breakpoints?.unit !== 'px') {
          return {
            maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
          };
        }
        return {
          maxWidth: breakpoint
        };
      };
      return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
    }
    return null;
  };
  maxWidth.filterProps = ['maxWidth'];
  const minWidth = style$1({
    prop: 'minWidth',
    transform: sizingTransform
  });
  const height = style$1({
    prop: 'height',
    transform: sizingTransform
  });
  const maxHeight = style$1({
    prop: 'maxHeight',
    transform: sizingTransform
  });
  const minHeight = style$1({
    prop: 'minHeight',
    transform: sizingTransform
  });
  style$1({
    prop: 'size',
    cssProperty: 'width',
    transform: sizingTransform
  });
  style$1({
    prop: 'size',
    cssProperty: 'height',
    transform: sizingTransform
  });
  const boxSizing = style$1({
    prop: 'boxSizing'
  });
  compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);

  const defaultSxConfig = {
    // borders
    border: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderTop: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderRight: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderBottom: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderLeft: {
      themeKey: 'borders',
      transform: borderTransform
    },
    borderColor: {
      themeKey: 'palette'
    },
    borderTopColor: {
      themeKey: 'palette'
    },
    borderRightColor: {
      themeKey: 'palette'
    },
    borderBottomColor: {
      themeKey: 'palette'
    },
    borderLeftColor: {
      themeKey: 'palette'
    },
    outline: {
      themeKey: 'borders',
      transform: borderTransform
    },
    outlineColor: {
      themeKey: 'palette'
    },
    borderRadius: {
      themeKey: 'shape.borderRadius',
      style: borderRadius
    },
    // palette
    color: {
      themeKey: 'palette',
      transform: paletteTransform
    },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: paletteTransform
    },
    backgroundColor: {
      themeKey: 'palette',
      transform: paletteTransform
    },
    // spacing
    p: {
      style: padding
    },
    pt: {
      style: padding
    },
    pr: {
      style: padding
    },
    pb: {
      style: padding
    },
    pl: {
      style: padding
    },
    px: {
      style: padding
    },
    py: {
      style: padding
    },
    padding: {
      style: padding
    },
    paddingTop: {
      style: padding
    },
    paddingRight: {
      style: padding
    },
    paddingBottom: {
      style: padding
    },
    paddingLeft: {
      style: padding
    },
    paddingX: {
      style: padding
    },
    paddingY: {
      style: padding
    },
    paddingInline: {
      style: padding
    },
    paddingInlineStart: {
      style: padding
    },
    paddingInlineEnd: {
      style: padding
    },
    paddingBlock: {
      style: padding
    },
    paddingBlockStart: {
      style: padding
    },
    paddingBlockEnd: {
      style: padding
    },
    m: {
      style: margin
    },
    mt: {
      style: margin
    },
    mr: {
      style: margin
    },
    mb: {
      style: margin
    },
    ml: {
      style: margin
    },
    mx: {
      style: margin
    },
    my: {
      style: margin
    },
    margin: {
      style: margin
    },
    marginTop: {
      style: margin
    },
    marginRight: {
      style: margin
    },
    marginBottom: {
      style: margin
    },
    marginLeft: {
      style: margin
    },
    marginX: {
      style: margin
    },
    marginY: {
      style: margin
    },
    marginInline: {
      style: margin
    },
    marginInlineStart: {
      style: margin
    },
    marginInlineEnd: {
      style: margin
    },
    marginBlock: {
      style: margin
    },
    marginBlockStart: {
      style: margin
    },
    marginBlockEnd: {
      style: margin
    },
    // display
    displayPrint: {
      cssProperty: false,
      transform: value => ({
        '@media print': {
          display: value
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    // flexbox
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    // grid
    gap: {
      style: gap
    },
    rowGap: {
      style: rowGap
    },
    columnGap: {
      style: columnGap
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    // positions
    position: {},
    zIndex: {
      themeKey: 'zIndex'
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    // shadows
    boxShadow: {
      themeKey: 'shadows'
    },
    // sizing
    width: {
      transform: sizingTransform
    },
    maxWidth: {
      style: maxWidth
    },
    minWidth: {
      transform: sizingTransform
    },
    height: {
      transform: sizingTransform
    },
    maxHeight: {
      transform: sizingTransform
    },
    minHeight: {
      transform: sizingTransform
    },
    boxSizing: {},
    // typography
    font: {
      themeKey: 'font'
    },
    fontFamily: {
      themeKey: 'typography'
    },
    fontSize: {
      themeKey: 'typography'
    },
    fontStyle: {
      themeKey: 'typography'
    },
    fontWeight: {
      themeKey: 'typography'
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: false,
      themeKey: 'typography'
    }
  };

  function objectsHaveSameKeys(...objects) {
    const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
    const union = new Set(allKeys);
    return objects.every(object => union.size === Object.keys(object).length);
  }
  function callIfFn(maybeFn, arg) {
    return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  function unstable_createStyleFunctionSx() {
    function getThemeValue(prop, val, theme, config) {
      const props = {
        [prop]: val,
        theme
      };
      const options = config[prop];
      if (!options) {
        return {
          [prop]: val
        };
      }
      const {
        cssProperty = prop,
        themeKey,
        transform,
        style
      } = options;
      if (val == null) {
        return null;
      }

      // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
      if (themeKey === 'typography' && val === 'inherit') {
        return {
          [prop]: val
        };
      }
      const themeMapping = getPath(theme, themeKey) || {};
      if (style) {
        return style(props);
      }
      const styleFromPropValue = propValueFinal => {
        let value = getStyleValue(themeMapping, transform, propValueFinal);
        if (propValueFinal === value && typeof propValueFinal === 'string') {
          // Haven't found value
          value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : capitalize(propValueFinal)}`, propValueFinal);
        }
        if (cssProperty === false) {
          return value;
        }
        return {
          [cssProperty]: value
        };
      };
      return handleBreakpoints(props, val, styleFromPropValue);
    }
    function styleFunctionSx(props) {
      const {
        sx,
        theme = {}
      } = props || {};
      if (!sx) {
        return null; // Emotion & styled-components will neglect null
      }
      const config = theme.unstable_sxConfig ?? defaultSxConfig;

      /*
       * Receive `sxInput` as object or callback
       * and then recursively check keys & values to create media query object styles.
       * (the result will be used in `styled`)
       */
      function traverse(sxInput) {
        let sxObject = sxInput;
        if (typeof sxInput === 'function') {
          sxObject = sxInput(theme);
        } else if (typeof sxInput !== 'object') {
          // value
          return sxInput;
        }
        if (!sxObject) {
          return null;
        }
        const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
        const breakpointsKeys = Object.keys(emptyBreakpoints);
        let css = emptyBreakpoints;
        Object.keys(sxObject).forEach(styleKey => {
          const value = callIfFn(sxObject[styleKey], theme);
          if (value !== null && value !== undefined) {
            if (typeof value === 'object') {
              if (config[styleKey]) {
                css = merge(css, getThemeValue(styleKey, value, theme, config));
              } else {
                const breakpointsValues = handleBreakpoints({
                  theme
                }, value, x => ({
                  [styleKey]: x
                }));
                if (objectsHaveSameKeys(breakpointsValues, value)) {
                  css[styleKey] = styleFunctionSx({
                    sx: value,
                    theme
                  });
                } else {
                  css = merge(css, breakpointsValues);
                }
              }
            } else {
              css = merge(css, getThemeValue(styleKey, value, theme, config));
            }
          }
        });
        return sortContainerQueries(theme, removeUnusedBreakpoints(breakpointsKeys, css));
      }
      return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
    }
    return styleFunctionSx;
  }
  const styleFunctionSx = unstable_createStyleFunctionSx();
  styleFunctionSx.filterProps = ['sx'];

  /**
   * A universal utility to style components with multiple color modes. Always use it from the theme object.
   * It works with:
   *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
   *  - [CSS theme variables](https://mui.com/material-ui/customization/css-theme-variables/overview/)
   *  - Zero-runtime engine
   *
   * Tips: Use an array over object spread and place `theme.applyStyles()` last.
   *
   * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
   *
   * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
   *
   * @example
   * 1. using with `styled`:
   * ```jsx
   *   const Component = styled('div')(({ theme }) => [
   *     { background: '#e5e5e5' },
   *     theme.applyStyles('dark', {
   *       background: '#1c1c1c',
   *       color: '#fff',
   *     }),
   *   ]);
   * ```
   *
   * @example
   * 2. using with `sx` prop:
   * ```jsx
   *   <Box sx={theme => [
   *     { background: '#e5e5e5' },
   *     theme.applyStyles('dark', {
   *        background: '#1c1c1c',
   *        color: '#fff',
   *      }),
   *     ]}
   *   />
   * ```
   *
   * @example
   * 3. theming a component:
   * ```jsx
   *   extendTheme({
   *     components: {
   *       MuiButton: {
   *         styleOverrides: {
   *           root: ({ theme }) => [
   *             { background: '#e5e5e5' },
   *             theme.applyStyles('dark', {
   *               background: '#1c1c1c',
   *               color: '#fff',
   *             }),
   *           ],
   *         },
   *       }
   *     }
   *   })
   *```
   */
  function applyStyles(key, styles) {
    // @ts-expect-error this is 'any' type
    const theme = this;
    if (theme.vars) {
      if (!theme.colorSchemes?.[key] || typeof theme.getColorSchemeSelector !== 'function') {
        return {};
      }
      // If CssVarsProvider is used as a provider, returns '*:where({selector}) &'
      let selector = theme.getColorSchemeSelector(key);
      if (selector === '&') {
        return styles;
      }
      if (selector.includes('data-') || selector.includes('.')) {
        // '*' is required as a workaround for Emotion issue (https://github.com/emotion-js/emotion/issues/2836)
        selector = `*:where(${selector.replace(/\s*&$/, '')}) &`;
      }
      return {
        [selector]: styles
      };
    }
    if (theme.palette.mode === key) {
      return styles;
    }
    return {};
  }

  function createTheme$1(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {},
      ...other
    } = options;
    const breakpoints = createBreakpoints(breakpointsInput);
    const spacing = createSpacing(spacingInput);
    let muiTheme = deepmerge({
      breakpoints,
      direction: 'ltr',
      components: {},
      // Inject component definitions.
      palette: {
        mode: 'light',
        ...paletteInput
      },
      spacing,
      shape: {
        ...shape,
        ...shapeInput
      }
    }, other);
    muiTheme = cssContainerQueries(muiTheme);
    muiTheme.applyStyles = applyStyles;
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    muiTheme.unstable_sxConfig = {
      ...defaultSxConfig,
      ...other?.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    return muiTheme;
  }

  function isObjectEmpty$1(obj) {
    return Object.keys(obj).length === 0;
  }
  function useTheme$2(defaultTheme = null) {
    const contextTheme = React__namespace.useContext(ThemeContext);
    return !contextTheme || isObjectEmpty$1(contextTheme) ? defaultTheme : contextTheme;
  }

  const systemDefaultTheme$1 = createTheme$1();
  function useTheme$1(defaultTheme = systemDefaultTheme$1) {
    return useTheme$2(defaultTheme);
  }

  const splitProps = props => {
    const result = {
      systemProps: {},
      otherProps: {}
    };
    const config = props?.theme?.unstable_sxConfig ?? defaultSxConfig;
    Object.keys(props).forEach(prop => {
      if (config[prop]) {
        result.systemProps[prop] = props[prop];
      } else {
        result.otherProps[prop] = props[prop];
      }
    });
    return result;
  };
  function extendSxProp$1(props) {
    const {
      sx: inSx,
      ...other
    } = props;
    const {
      systemProps,
      otherProps
    } = splitProps(other);
    let finalSx;
    if (Array.isArray(inSx)) {
      finalSx = [systemProps, ...inSx];
    } else if (typeof inSx === 'function') {
      finalSx = (...args) => {
        const result = inSx(...args);
        if (!isPlainObject(result)) {
          return systemProps;
        }
        return {
          ...systemProps,
          ...result
        };
      };
    } else {
      finalSx = {
        ...systemProps,
        ...inSx
      };
    }
    return {
      ...otherProps,
      sx: finalSx
    };
  }

  const defaultGenerator = componentName => componentName;
  const createClassNameGenerator = () => {
    let generate = defaultGenerator;
    return {
      configure(generator) {
        generate = generator;
      },
      generate(componentName) {
        return generate(componentName);
      },
      reset() {
        generate = defaultGenerator;
      }
    };
  };
  const ClassNameGenerator = createClassNameGenerator();

  function r(e) {
    var t,
      f,
      n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;else if ("object" == typeof e) if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for (f in e) e[f] && (n && (n += " "), n += f);
    return n;
  }
  function clsx() {
    for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
  }

  const globalStateClasses = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    open: 'open',
    readOnly: 'readOnly',
    required: 'required',
    selected: 'selected'
  };
  function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
    const globalStateClass = globalStateClasses[slot];
    return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator.generate(componentName)}-${slot}`;
  }

  function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
    const result = {};
    slots.forEach(slot => {
      result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
    });
    return result;
  }

  var reactIs = {exports: {}};

  var reactIs_production_min = {};

  /**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_production_min;
  function requireReactIs_production_min() {
    if (hasRequiredReactIs_production_min) return reactIs_production_min;
    hasRequiredReactIs_production_min = 1;
    var b = Symbol.for("react.element"),
      c = Symbol.for("react.portal"),
      d = Symbol.for("react.fragment"),
      e = Symbol.for("react.strict_mode"),
      f = Symbol.for("react.profiler"),
      g = Symbol.for("react.provider"),
      h = Symbol.for("react.context"),
      k = Symbol.for("react.server_context"),
      l = Symbol.for("react.forward_ref"),
      m = Symbol.for("react.suspense"),
      n = Symbol.for("react.suspense_list"),
      p = Symbol.for("react.memo"),
      q = Symbol.for("react.lazy"),
      t = Symbol.for("react.offscreen"),
      u;
    u = Symbol.for("react.module.reference");
    function v(a) {
      if ("object" === typeof a && null !== a) {
        var r = a.$$typeof;
        switch (r) {
          case b:
            switch (a = a.type, a) {
              case d:
              case f:
              case e:
              case m:
              case n:
                return a;
              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case h:
                  case l:
                  case q:
                  case p:
                  case g:
                    return a;
                  default:
                    return r;
                }
            }
          case c:
            return r;
        }
      }
    }
    reactIs_production_min.ContextConsumer = h;
    reactIs_production_min.ContextProvider = g;
    reactIs_production_min.Element = b;
    reactIs_production_min.ForwardRef = l;
    reactIs_production_min.Fragment = d;
    reactIs_production_min.Lazy = q;
    reactIs_production_min.Memo = p;
    reactIs_production_min.Portal = c;
    reactIs_production_min.Profiler = f;
    reactIs_production_min.StrictMode = e;
    reactIs_production_min.Suspense = m;
    reactIs_production_min.SuspenseList = n;
    reactIs_production_min.isAsyncMode = function () {
      return !1;
    };
    reactIs_production_min.isConcurrentMode = function () {
      return !1;
    };
    reactIs_production_min.isContextConsumer = function (a) {
      return v(a) === h;
    };
    reactIs_production_min.isContextProvider = function (a) {
      return v(a) === g;
    };
    reactIs_production_min.isElement = function (a) {
      return "object" === typeof a && null !== a && a.$$typeof === b;
    };
    reactIs_production_min.isForwardRef = function (a) {
      return v(a) === l;
    };
    reactIs_production_min.isFragment = function (a) {
      return v(a) === d;
    };
    reactIs_production_min.isLazy = function (a) {
      return v(a) === q;
    };
    reactIs_production_min.isMemo = function (a) {
      return v(a) === p;
    };
    reactIs_production_min.isPortal = function (a) {
      return v(a) === c;
    };
    reactIs_production_min.isProfiler = function (a) {
      return v(a) === f;
    };
    reactIs_production_min.isStrictMode = function (a) {
      return v(a) === e;
    };
    reactIs_production_min.isSuspense = function (a) {
      return v(a) === m;
    };
    reactIs_production_min.isSuspenseList = function (a) {
      return v(a) === n;
    };
    reactIs_production_min.isValidElementType = function (a) {
      return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? !0 : !1;
    };
    reactIs_production_min.typeOf = v;
    return reactIs_production_min;
  }

  var reactIs_development = {};

  /**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var hasRequiredReactIs_development;
  function requireReactIs_development() {
    if (hasRequiredReactIs_development) return reactIs_development;
    hasRequiredReactIs_development = 1;
    if (process.env.NODE_ENV !== "production") {
      (function () {

        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');

        // -----------------------------------------------------------------------------

        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing

        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.

        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
        }
        function isValidElementType(type) {
          if (typeof type === 'string' || typeof type === 'function') {
            return true;
          } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
            // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_SERVER_CONTEXT_TYPE:
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return undefined;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        function isSuspenseList(object) {
          return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
        }
        reactIs_development.ContextConsumer = ContextConsumer;
        reactIs_development.ContextProvider = ContextProvider;
        reactIs_development.Element = Element;
        reactIs_development.ForwardRef = ForwardRef;
        reactIs_development.Fragment = Fragment;
        reactIs_development.Lazy = Lazy;
        reactIs_development.Memo = Memo;
        reactIs_development.Portal = Portal;
        reactIs_development.Profiler = Profiler;
        reactIs_development.StrictMode = StrictMode;
        reactIs_development.Suspense = Suspense;
        reactIs_development.SuspenseList = SuspenseList;
        reactIs_development.isAsyncMode = isAsyncMode;
        reactIs_development.isConcurrentMode = isConcurrentMode;
        reactIs_development.isContextConsumer = isContextConsumer;
        reactIs_development.isContextProvider = isContextProvider;
        reactIs_development.isElement = isElement;
        reactIs_development.isForwardRef = isForwardRef;
        reactIs_development.isFragment = isFragment;
        reactIs_development.isLazy = isLazy;
        reactIs_development.isMemo = isMemo;
        reactIs_development.isPortal = isPortal;
        reactIs_development.isProfiler = isProfiler;
        reactIs_development.isStrictMode = isStrictMode;
        reactIs_development.isSuspense = isSuspense;
        reactIs_development.isSuspenseList = isSuspenseList;
        reactIs_development.isValidElementType = isValidElementType;
        reactIs_development.typeOf = typeOf;
      })();
    }
    return reactIs_development;
  }

  var hasRequiredReactIs;
  function requireReactIs() {
    if (hasRequiredReactIs) return reactIs.exports;
    hasRequiredReactIs = 1;
    if (process.env.NODE_ENV === 'production') {
      reactIs.exports = requireReactIs_production_min();
    } else {
      reactIs.exports = requireReactIs_development();
    }
    return reactIs.exports;
  }

  var reactIsExports = requireReactIs();

  function getFunctionComponentName(Component, fallback = '') {
    return Component.displayName || Component.name || fallback;
  }
  function getWrappedName(outerType, innerType, wrapperName) {
    const functionName = getFunctionComponentName(innerType);
    return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
  }

  /**
   * cherry-pick from
   * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
   * originally forked from recompose/getDisplayName
   */
  function getDisplayName(Component) {
    if (Component == null) {
      return undefined;
    }
    if (typeof Component === 'string') {
      return Component;
    }
    if (typeof Component === 'function') {
      return getFunctionComponentName(Component, 'Component');
    }

    // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
    if (typeof Component === 'object') {
      switch (Component.$$typeof) {
        case reactIsExports.ForwardRef:
          return getWrappedName(Component, Component.render, 'ForwardRef');
        case reactIsExports.Memo:
          return getWrappedName(Component, Component.type, 'memo');
        default:
          return undefined;
      }
    }
    return undefined;
  }

  function preprocessStyles(input) {
    const {
      variants,
      ...style
    } = input;
    const result = {
      variants,
      style: internal_serializeStyles(style),
      isProcessed: true
    };

    // Not supported on styled-components
    if (result.style === style) {
      return result;
    }
    if (variants) {
      variants.forEach(variant => {
        if (typeof variant.style !== 'function') {
          variant.style = internal_serializeStyles(variant.style);
        }
      });
    }
    return result;
  }

  /* eslint-disable no-underscore-dangle */
  /* eslint-disable no-labels */
  /* eslint-disable no-lone-blocks */

  const systemDefaultTheme = createTheme$1();

  // Update /system/styled/#api in case if this changes
  function shouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
  }
  function defaultOverridesResolver(slot) {
    if (!slot) {
      return null;
    }
    return (_props, styles) => styles[slot];
  }
  function attachTheme(props, themeId, defaultTheme) {
    props.theme = isObjectEmpty(props.theme) ? defaultTheme : props.theme[themeId] || props.theme;
  }
  function processStyle(props, style) {
    /*
     * Style types:
     *  - null/undefined
     *  - string
     *  - CSS style object: { [cssKey]: [cssValue], variants }
     *  - Processed style object: { style, variants, isProcessed: true }
     *  - Array of any of the above
     */

    const resolvedStyle = typeof style === 'function' ? style(props) : style;
    if (Array.isArray(resolvedStyle)) {
      return resolvedStyle.flatMap(subStyle => processStyle(props, subStyle));
    }
    if (Array.isArray(resolvedStyle?.variants)) {
      let rootStyle;
      if (resolvedStyle.isProcessed) {
        rootStyle = resolvedStyle.style;
      } else {
        const {
          variants,
          ...otherStyles
        } = resolvedStyle;
        rootStyle = otherStyles;
      }
      return processStyleVariants(props, resolvedStyle.variants, [rootStyle]);
    }
    if (resolvedStyle?.isProcessed) {
      return resolvedStyle.style;
    }
    return resolvedStyle;
  }
  function processStyleVariants(props, variants, results = []) {
    let mergedState; // We might not need it, initialized lazily

    variantLoop: for (let i = 0; i < variants.length; i += 1) {
      const variant = variants[i];
      if (typeof variant.props === 'function') {
        mergedState ??= {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        };
        if (!variant.props(mergedState)) {
          continue;
        }
      } else {
        for (const key in variant.props) {
          if (props[key] !== variant.props[key] && props.ownerState?.[key] !== variant.props[key]) {
            continue variantLoop;
          }
        }
      }
      if (typeof variant.style === 'function') {
        mergedState ??= {
          ...props,
          ...props.ownerState,
          ownerState: props.ownerState
        };
        results.push(variant.style(mergedState));
      } else {
        results.push(variant.style);
      }
    }
    return results;
  }
  function createStyled(input = {}) {
    const {
      themeId,
      defaultTheme = systemDefaultTheme,
      rootShouldForwardProp = shouldForwardProp,
      slotShouldForwardProp = shouldForwardProp
    } = input;
    function styleAttachTheme(props) {
      attachTheme(props, themeId, defaultTheme);
    }
    const styled = (tag, inputOptions = {}) => {
      // If `tag` is already a styled component, filter out the `sx` style function
      // to prevent unnecessary styles generated by the composite components.
      internal_mutateStyles(tag, styles => styles.filter(style => style !== styleFunctionSx));
      const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot)),
        ...options
      } = inputOptions;

      // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
      const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
      const skipSx = inputSkipSx || false;
      let shouldForwardPropOption = shouldForwardProp;

      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      if (componentSlot === 'Root' || componentSlot === 'root') {
        shouldForwardPropOption = rootShouldForwardProp;
      } else if (componentSlot) {
        // any other slot specified
        shouldForwardPropOption = slotShouldForwardProp;
      } else if (isStringTag(tag)) {
        // for string (html) tag, preserve the behavior in emotion & styled-components.
        shouldForwardPropOption = undefined;
      }
      const defaultStyledResolver = styled$1(tag, {
        shouldForwardProp: shouldForwardPropOption,
        label: generateStyledLabel(componentName, componentSlot),
        ...options
      });
      const transformStyle = style => {
        // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        if (typeof style === 'function' && style.__emotion_real !== style) {
          return function styleFunctionProcessor(props) {
            return processStyle(props, style);
          };
        }
        if (isPlainObject(style)) {
          const serialized = preprocessStyles(style);
          if (!serialized.variants) {
            return serialized.style;
          }
          return function styleObjectProcessor(props) {
            return processStyle(props, serialized);
          };
        }
        return style;
      };
      const muiStyledResolver = (...expressionsInput) => {
        const expressionsHead = [];
        const expressionsBody = expressionsInput.map(transformStyle);
        const expressionsTail = [];

        // Preprocess `props` to set the scoped theme value.
        // This must run before any other expression.
        expressionsHead.push(styleAttachTheme);
        if (componentName && overridesResolver) {
          expressionsTail.push(function styleThemeOverrides(props) {
            const theme = props.theme;
            const styleOverrides = theme.components?.[componentName]?.styleOverrides;
            if (!styleOverrides) {
              return null;
            }
            const resolvedStyleOverrides = {};

            // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
            // eslint-disable-next-line guard-for-in
            for (const slotKey in styleOverrides) {
              resolvedStyleOverrides[slotKey] = processStyle(props, styleOverrides[slotKey]);
            }
            return overridesResolver(props, resolvedStyleOverrides);
          });
        }
        if (componentName && !skipVariantsResolver) {
          expressionsTail.push(function styleThemeVariants(props) {
            const theme = props.theme;
            const themeVariants = theme?.components?.[componentName]?.variants;
            if (!themeVariants) {
              return null;
            }
            return processStyleVariants(props, themeVariants);
          });
        }
        if (!skipSx) {
          expressionsTail.push(styleFunctionSx);
        }

        // This function can be called as a tagged template, so the first argument would contain
        // CSS `string[]` values.
        if (Array.isArray(expressionsBody[0])) {
          const inputStrings = expressionsBody.shift();

          // We need to add placeholders in the tagged template for the custom functions we have
          // possibly added (attachTheme, overrides, variants, and sx).
          const placeholdersHead = new Array(expressionsHead.length).fill('');
          const placeholdersTail = new Array(expressionsTail.length).fill('');
          let outputStrings;
          // prettier-ignore
          {
            outputStrings = [...placeholdersHead, ...inputStrings, ...placeholdersTail];
            outputStrings.raw = [...placeholdersHead, ...inputStrings.raw, ...placeholdersTail];
          }

          // The only case where we put something before `attachTheme`
          expressionsHead.unshift(outputStrings);
        }
        const expressions = [...expressionsHead, ...expressionsBody, ...expressionsTail];
        const Component = defaultStyledResolver(...expressions);
        if (tag.muiName) {
          Component.muiName = tag.muiName;
        }
        if (process.env.NODE_ENV !== 'production') {
          Component.displayName = generateDisplayName(componentName, componentSlot, tag);
        }
        return Component;
      };
      if (defaultStyledResolver.withConfig) {
        muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
      }
      return muiStyledResolver;
    };
    return styled;
  }
  function generateDisplayName(componentName, componentSlot, tag) {
    if (componentName) {
      return `${componentName}${capitalize(componentSlot || '')}`;
    }
    return `Styled(${getDisplayName(tag)})`;
  }
  function generateStyledLabel(componentName, componentSlot) {
    let label;
    if (process.env.NODE_ENV !== 'production') {
      if (componentName) {
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        label = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
      }
    }
    return label;
  }
  function isObjectEmpty(object) {
    // eslint-disable-next-line
    for (const _ in object) {
      return false;
    }
    return true;
  }

  // https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
  function isStringTag(tag) {
    return typeof tag === 'string' &&
    // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96;
  }
  function lowercaseFirstLetter(string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  /**
   * Add keys, values of `defaultProps` that does not exist in `props`
   * @param defaultProps
   * @param props
   * @returns resolved props
   */
  function resolveProps(defaultProps, props) {
    const output = {
      ...props
    };
    for (const key in defaultProps) {
      if (Object.prototype.hasOwnProperty.call(defaultProps, key)) {
        const propName = key;
        if (propName === 'components' || propName === 'slots') {
          output[propName] = {
            ...defaultProps[propName],
            ...output[propName]
          };
        } else if (propName === 'componentsProps' || propName === 'slotProps') {
          const defaultSlotProps = defaultProps[propName];
          const slotProps = props[propName];
          if (!slotProps) {
            output[propName] = defaultSlotProps || {};
          } else if (!defaultSlotProps) {
            output[propName] = slotProps;
          } else {
            output[propName] = {
              ...slotProps
            };
            for (const slotKey in defaultSlotProps) {
              if (Object.prototype.hasOwnProperty.call(defaultSlotProps, slotKey)) {
                const slotPropName = slotKey;
                output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
              }
            }
          }
        } else if (output[propName] === undefined) {
          output[propName] = defaultProps[propName];
        }
      }
    }
    return output;
  }

  /**
   * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
   * This is useful for effects that are only needed for client-side rendering but not for SSR.
   *
   * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
   * and confirm it doesn't apply to your use-case.
   */
  const useEnhancedEffect = typeof window !== 'undefined' ? React__namespace.useLayoutEffect : React__namespace.useEffect;

  function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    return Math.max(min, Math.min(val, max));
  }

  /**
   * Returns a number whose value is limited to the given range.
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clampWrapper(value, min = 0, max = 1) {
    if (process.env.NODE_ENV !== 'production') {
      if (value < min || value > max) {
        console.error(`MUI: The value provided ${value} is out of range [${min}, ${max}].`);
      }
    }
    return clamp(value, min, max);
  }

  /**
   * Converts a color from CSS hex format to CSS rgb format.
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */
  function hexToRgb(color) {
    color = color.slice(1);
    const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
    let colors = color.match(re);
    if (colors && colors[0].length === 1) {
      colors = colors.map(n => n + n);
    }
    return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
  }

  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */
  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }
    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }
    const marker = color.indexOf('(');
    const type = color.substring(0, marker);
    if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(type)) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${color}\` color.\n` + 'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().' : formatMuiErrorMessage(9, color));
    }
    let values = color.substring(marker + 1, color.length - 1);
    let colorSpace;
    if (type === 'color') {
      values = values.split(' ');
      colorSpace = values.shift();
      if (values.length === 4 && values[3].charAt(0) === '/') {
        values[3] = values[3].slice(1);
      }
      if (!['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(colorSpace)) {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${colorSpace}\` color space.\n` + 'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.' : formatMuiErrorMessage(10, colorSpace));
      }
    } else {
      values = values.split(',');
    }
    values = values.map(value => parseFloat(value));
    return {
      type,
      values,
      colorSpace
    };
  }

  /**
   * Returns a channel created from the input color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
   */
  const colorChannel = color => {
    const decomposedColor = decomposeColor(color);
    return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.includes('hsl') && idx !== 0 ? `${val}%` : val).join(' ');
  };
  const private_safeColorChannel = (color, warning) => {
    try {
      return colorChannel(color);
    } catch (error) {
      if (warning && process.env.NODE_ENV !== 'production') {
        console.warn(warning);
      }
      return color;
    }
  };

  /**
   * Converts a color object with type and values to a string.
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */
  function recomposeColor(color) {
    const {
      type,
      colorSpace
    } = color;
    let {
      values
    } = color;
    if (type.includes('rgb')) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
    } else if (type.includes('hsl')) {
      values[1] = `${values[1]}%`;
      values[2] = `${values[2]}%`;
    }
    if (type.includes('color')) {
      values = `${colorSpace} ${values.join(' ')}`;
    } else {
      values = `${values.join(', ')}`;
    }
    return `${type}(${values})`;
  }

  /**
   * Converts a color from hsl format to rgb format.
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */
  function hslToRgb(color) {
    color = decomposeColor(color);
    const {
      values
    } = color;
    const h = values[0];
    const s = values[1] / 100;
    const l = values[2] / 100;
    const a = s * Math.min(l, 1 - l);
    const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    let type = 'rgb';
    const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }
    return recomposeColor({
      type,
      values: rgb
    });
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */
  function getLuminance(color) {
    color = decomposeColor(color);
    let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
    rgb = rgb.map(val => {
      if (color.type !== 'color') {
        val /= 255; // normalized
      }
      return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
    });

    // Truncate at 3 digits
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  }

  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */
  function getContrastRatio(foreground, background) {
    const lumA = getLuminance(foreground);
    const lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }

  /**
   * Sets the absolute transparency of a color.
   * Any existing alpha values are overwritten.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} value - value to set the alpha channel to in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function alpha(color, value) {
    color = decomposeColor(color);
    value = clampWrapper(value);
    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }
    if (color.type === 'color') {
      color.values[3] = `/${value}`;
    } else {
      color.values[3] = value;
    }
    return recomposeColor(color);
  }
  function private_safeAlpha(color, value, warning) {
    try {
      return alpha(color, value);
    } catch (error) {
      return color;
    }
  }

  /**
   * Darkens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clampWrapper(coefficient);
    if (color.type.includes('hsl')) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.includes('rgb') || color.type.includes('color')) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }
    return recomposeColor(color);
  }
  function private_safeDarken(color, coefficient, warning) {
    try {
      return darken(color, coefficient);
    } catch (error) {
      return color;
    }
  }

  /**
   * Lightens a color.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clampWrapper(coefficient);
    if (color.type.includes('hsl')) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.includes('rgb')) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    } else if (color.type.includes('color')) {
      for (let i = 0; i < 3; i += 1) {
        color.values[i] += (1 - color.values[i]) * coefficient;
      }
    }
    return recomposeColor(color);
  }
  function private_safeLighten(color, coefficient, warning) {
    try {
      return lighten(color, coefficient);
    } catch (error) {
      return color;
    }
  }

  /**
   * Darken or lighten a color, depending on its luminance.
   * Light colors are darkened, dark colors are lightened.
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
   * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */
  function emphasize(color, coefficient = 0.15) {
    return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
  }
  function private_safeEmphasize(color, coefficient, warning) {
    try {
      return emphasize(color, coefficient);
    } catch (error) {
      return color;
    }
  }

  function chainPropTypes(propType1, propType2) {
    if (process.env.NODE_ENV === 'production') {
      return () => null;
    }
    return function validate(...args) {
      return propType1(...args) || propType2(...args);
    };
  }

  function isClassComponent$1(elementType) {
    // elementType.prototype?.isReactComponent
    const {
      prototype = {}
    } = elementType;
    return Boolean(prototype.isReactComponent);
  }
  function acceptingRef(props, propName, componentName, location, propFullName) {
    const element = props[propName];
    const safePropName = propFullName || propName;
    if (element == null ||
    // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for Emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
      return null;
    }
    let warningHint;
    const elementType = element.type;
    /**
     * Blacklisting instead of whitelisting
     *
     * Blacklisting will miss some components, such as React.Fragment. Those will at least
     * trigger a warning in React.
     * We can't whitelist because there is no safe way to detect React.forwardRef
     * or class components. "Safe" means there's no public API.
     *
     */
    if (typeof elementType === 'function' && !isClassComponent$1(elementType)) {
      warningHint = 'Did you accidentally use a plain function component for an element instead?';
    }
    if (warningHint !== undefined) {
      return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
  }
  const elementAcceptingRef = chainPropTypes(PropTypes.element, acceptingRef);
  elementAcceptingRef.isRequired = chainPropTypes(PropTypes.element.isRequired, acceptingRef);

  function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    const {
      prototype = {}
    } = elementType;
    return Boolean(prototype.isReactComponent);
  }
  function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null ||
    // When server-side rendering React doesn't warn either.
    // This is not an accurate check for SSR.
    // This is only in place for emotion compat.
    // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
    typeof window === 'undefined') {
      return null;
    }
    let warningHint;

    /**
     * Blacklisting instead of whitelisting
     *
     * Blacklisting will miss some components, such as React.Fragment. Those will at least
     * trigger a warning in React.
     * We can't whitelist because there is no safe way to detect React.forwardRef
     * or class components. "Safe" means there's no public API.
     *
     */
    if (typeof propValue === 'function' && !isClassComponent(propValue)) {
      warningHint = 'Did you accidentally provide a plain function component instead?';
    }
    if (warningHint !== undefined) {
      return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an element type that can hold a ref. ${warningHint} ` + 'For more information see https://mui.com/r/caveat-with-refs-guide');
    }
    return null;
  }
  var elementTypeAcceptingRef$1 = chainPropTypes(PropTypes.elementType, elementTypeAcceptingRef);

  // This module is based on https://github.com/airbnb/prop-types-exact repository.
  // However, in order to reduce the number of dependencies and to remove some extra safe checks
  // the module was forked.

  const specialProperty = 'exact-prop: \u200b';
  function exactProp(propTypes) {
    if (process.env.NODE_ENV === 'production') {
      return propTypes;
    }
    return {
      ...propTypes,
      [specialProperty]: props => {
        const unsupportedProps = Object.keys(props).filter(prop => !propTypes.hasOwnProperty(prop));
        if (unsupportedProps.length > 0) {
          return new Error(`The following props are not supported: ${unsupportedProps.map(prop => `\`${prop}\``).join(', ')}. Please remove them.`);
        }
        return null;
      }
    };
  }

  function HTMLElementType(props, propName, componentName, location, propFullName) {
    if (process.env.NODE_ENV === 'production') {
      return null;
    }
    const propValue = props[propName];
    const safePropName = propFullName || propName;
    if (propValue == null) {
      return null;
    }
    if (propValue && propValue.nodeType !== 1) {
      return new Error(`Invalid ${location} \`${safePropName}\` supplied to \`${componentName}\`. ` + `Expected an HTMLElement.`);
    }
    return null;
  }

  const refType = PropTypes.oneOfType([PropTypes.func, PropTypes.object]);

  /**
   * Safe chained function.
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   */
  function createChainedFunction(...funcs) {
    return funcs.reduce((acc, func) => {
      if (func == null) {
        return acc;
      }
      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    }, () => {});
  }

  function ownerDocument(node) {
    return node && node.ownerDocument || document;
  }

  function ownerWindow(node) {
    const doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  /**
   * TODO v5: consider making it private
   *
   * passes {value} to {ref}
   *
   * WARNING: Be sure to only call this inside a callback that is passed as a ref.
   * Otherwise, make sure to cleanup the previous {ref} if it changes. See
   * https://github.com/mui/material-ui/issues/13539
   *
   * Useful if you want to expose the ref of an inner component to the public API
   * while still using it inside the component.
   * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
   */
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  let globalId = 0;

  // TODO React 17: Remove `useGlobalId` once React 17 support is removed
  function useGlobalId(idOverride) {
    const [defaultId, setDefaultId] = React__namespace.useState(idOverride);
    const id = idOverride || defaultId;
    React__namespace.useEffect(() => {
      if (defaultId == null) {
        // Fallback to this default id when possible.
        // Use the incrementing value for client-side rendering only.
        // We can't use it server-side.
        // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
        globalId += 1;
        setDefaultId(`mui-${globalId}`);
      }
    }, [defaultId]);
    return id;
  }

  // See https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379 for why
  const safeReact = {
    ...React__namespace
  };
  const maybeReactUseId = safeReact.useId;

  /**
   *
   * @example <div id={useId()} />
   * @param idOverride
   * @returns {string}
   */
  function useId(idOverride) {
    // React.useId() is only available from React 17.0.0.
    if (maybeReactUseId !== undefined) {
      const reactId = maybeReactUseId();
      return idOverride ?? reactId;
    }

    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride);
  }

  /**
   * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
   * See RFC in https://github.com/reactjs/rfcs/pull/220
   */

  function useEventCallback(fn) {
    const ref = React__namespace.useRef(fn);
    useEnhancedEffect(() => {
      ref.current = fn;
    });
    return React__namespace.useRef((...args) =>
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)).current;
  }

  /**
   * Takes an array of refs and returns a new ref which will apply any modification to all of the refs.
   * This is useful when you want to have the ref used in multiple places.
   *
   * ```tsx
   * const rootRef = React.useRef<Instance>(null);
   * const refFork = useForkRef(rootRef, props.ref);
   *
   * return (
   *   <Root {...props} ref={refFork} />
   * );
   * ```
   *
   * @param {Array<React.Ref<Instance> | undefined>} refs The ref array.
   * @returns {React.RefCallback<Instance> | null} The new ref callback.
   */
  function useForkRef(...refs) {
    /**
     * This will create a new function if the refs passed to this hook change and are all defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior.
     */
    return React__namespace.useMemo(() => {
      if (refs.every(ref => ref == null)) {
        return null;
      }
      return instance => {
        refs.forEach(ref => {
          setRef(ref, instance);
        });
      };
      // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- intentionally ignoring that the dependency array must be an array literal
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, refs);
  }

  const UNINITIALIZED = {};

  /**
   * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
   * initialization argument, so the initialization function doesn't need to be an inline closure.
   *
   * @usage
   *   const ref = useLazyRef(sortColumns, columns)
   */
  function useLazyRef(init, initArg) {
    const ref = React__namespace.useRef(UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
      ref.current = init(initArg);
    }
    return ref;
  }

  const EMPTY = [];

  /**
   * A React.useEffect equivalent that runs once, when the component is mounted.
   */
  function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */
    React__namespace.useEffect(fn, EMPTY);
    /* eslint-enable react-hooks/exhaustive-deps */
  }

  class Timeout {
    static create() {
      return new Timeout();
    }
    currentId = null;

    /**
     * Executes `fn` after `delay`, clearing any previously scheduled call.
     */
    start(delay, fn) {
      this.clear();
      this.currentId = setTimeout(() => {
        this.currentId = null;
        fn();
      }, delay);
    }
    clear = () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    };
    disposeEffect = () => {
      return this.clear;
    };
  }
  function useTimeout() {
    const timeout = useLazyRef(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
  }

  /**
   * Returns a boolean indicating if the event's target has :focus-visible
   */
  function isFocusVisible(element) {
    try {
      return element.matches(':focus-visible');
    } catch (error) {
      // Do not warn on jsdom tests, otherwise all tests that rely on focus have to be skipped
      // Tests that rely on `:focus-visible` will still have to be skipped in jsdom
      if (process.env.NODE_ENV !== 'production' && !/jsdom/.test(window.navigator.userAgent)) {
        console.warn(['MUI: The `:focus-visible` pseudo class is not supported in this browser.', 'Some components rely on this feature to work properly.'].join('\n'));
      }
    }
    return false;
  }

  // A change of the browser zoom change the scrollbar size.
  // Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
  function getScrollbarSize(win = window) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = win.document.documentElement.clientWidth;
    return win.innerWidth - documentWidth;
  }

  function getTypeByValue(value) {
    const valueType = typeof value;
    switch (valueType) {
      case 'number':
        if (Number.isNaN(value)) {
          return 'NaN';
        }
        if (!Number.isFinite(value)) {
          return 'Infinity';
        }
        if (value !== Math.floor(value)) {
          return 'float';
        }
        return 'number';
      case 'object':
        if (value === null) {
          return 'null';
        }
        return value.constructor.name;
      default:
        return valueType;
    }
  }
  function requiredInteger(props, propName, componentName, location) {
    const propValue = props[propName];
    if (propValue == null || !Number.isInteger(propValue)) {
      const propType = getTypeByValue(propValue);
      return new RangeError(`Invalid ${location} \`${propName}\` of type \`${propType}\` supplied to \`${componentName}\`, expected \`integer\`.`);
    }
    return null;
  }
  function validator(props, propName, ...other) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return null;
    }
    return requiredInteger(props, propName, ...other);
  }
  function validatorNoop() {
    return null;
  }
  validator.isRequired = requiredInteger;
  validatorNoop.isRequired = validatorNoop;
  var integerPropType = process.env.NODE_ENV === 'production' ? validatorNoop : validator;

  /* eslint no-restricted-syntax: 0, prefer-template: 0, guard-for-in: 0
     ---
     These rules are preventing the performance optimizations below.
   */

  function composeClasses(slots, getUtilityClass, classes = undefined) {
    const output = {};
    for (const slotName in slots) {
      const slot = slots[slotName];
      let buffer = '';
      let start = true;
      for (let i = 0; i < slot.length; i += 1) {
        const value = slot[i];
        if (value) {
          buffer += (start === true ? '' : ' ') + getUtilityClass(value);
          start = false;
          if (classes && classes[value]) {
            buffer += ' ' + classes[value];
          }
        }
      }
      output[slotName] = buffer;
    }
    return output;
  }

  /**
   * Determines if a given element is a DOM element name (i.e. not a React component).
   */
  function isHostComponent(element) {
    return typeof element === 'string';
  }

  /**
   * Type of the ownerState based on the type of an element it applies to.
   * This resolves to the provided OwnerState for React components and `undefined` for host components.
   * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
   */

  /**
   * Appends the ownerState object to the props, merging with the existing one if necessary.
   *
   * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
   * @param otherProps Props of the element.
   * @param ownerState
   */
  function appendOwnerState(elementType, otherProps, ownerState) {
    if (elementType === undefined || isHostComponent(elementType)) {
      return otherProps;
    }
    return {
      ...otherProps,
      ownerState: {
        ...otherProps.ownerState,
        ...ownerState
      }
    };
  }

  /**
   * Extracts event handlers from a given object.
   * A prop is considered an event handler if it is a function and its name starts with `on`.
   *
   * @param object An object to extract event handlers from.
   * @param excludeKeys An array of keys to exclude from the returned object.
   */
  function extractEventHandlers(object, excludeKeys = []) {
    if (object === undefined) {
      return {};
    }
    const result = {};
    Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
      result[prop] = object[prop];
    });
    return result;
  }

  /**
   * Removes event handlers from the given object.
   * A field is considered an event handler if it is a function with a name beginning with `on`.
   *
   * @param object Object to remove event handlers from.
   * @returns Object with event handlers removed.
   */
  function omitEventHandlers(object) {
    if (object === undefined) {
      return {};
    }
    const result = {};
    Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
      result[prop] = object[prop];
    });
    return result;
  }

  /**
   * Merges the slot component internal props (usually coming from a hook)
   * with the externally provided ones.
   *
   * The merge order is (the latter overrides the former):
   * 1. The internal props (specified as a getter function to work with get*Props hook result)
   * 2. Additional props (specified internally on a Base UI component)
   * 3. External props specified on the owner component. These should only be used on a root slot.
   * 4. External props specified in the `slotProps.*` prop.
   * 5. The `className` prop - combined from all the above.
   * @param parameters
   * @returns
   */
  function mergeSlotProps(parameters) {
    const {
      getSlotProps,
      additionalProps,
      externalSlotProps,
      externalForwardedProps,
      className
    } = parameters;
    if (!getSlotProps) {
      // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
      // so we can simply merge all the props without having to worry about extracting event handlers.
      const joinedClasses = clsx(additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
      const mergedStyle = {
        ...additionalProps?.style,
        ...externalForwardedProps?.style,
        ...externalSlotProps?.style
      };
      const props = {
        ...additionalProps,
        ...externalForwardedProps,
        ...externalSlotProps
      };
      if (joinedClasses.length > 0) {
        props.className = joinedClasses;
      }
      if (Object.keys(mergedStyle).length > 0) {
        props.style = mergedStyle;
      }
      return {
        props,
        internalRef: undefined
      };
    }

    // In this case, getSlotProps is responsible for calling the external event handlers.
    // We don't need to include them in the merged props because of this.

    const eventHandlers = extractEventHandlers({
      ...externalForwardedProps,
      ...externalSlotProps
    });
    const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
    const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
    const internalSlotProps = getSlotProps(eventHandlers);

    // The order of classes is important here.
    // Emotion (that we use in libraries consuming Base UI) depends on this order
    // to properly override style. It requires the most important classes to be last
    // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
    const joinedClasses = clsx(internalSlotProps?.className, additionalProps?.className, className, externalForwardedProps?.className, externalSlotProps?.className);
    const mergedStyle = {
      ...internalSlotProps?.style,
      ...additionalProps?.style,
      ...externalForwardedProps?.style,
      ...externalSlotProps?.style
    };
    const props = {
      ...internalSlotProps,
      ...additionalProps,
      ...otherPropsWithoutEventHandlers,
      ...componentsPropsWithoutEventHandlers
    };
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: internalSlotProps.ref
    };
  }

  /**
   * If `componentProps` is a function, calls it with the provided `ownerState`.
   * Otherwise, just returns `componentProps`.
   */
  function resolveComponentProps(componentProps, ownerState, slotState) {
    if (typeof componentProps === 'function') {
      return componentProps(ownerState, slotState);
    }
    return componentProps;
  }

  /**
   * Returns the ref of a React element handling differences between React 19 and older versions.
   * It will throw runtime error if the element is not a valid React element.
   *
   * @param element React.ReactElement
   * @returns React.Ref<any> | null
   */
  function getReactElementRef(element) {
    // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
    if (parseInt(React__namespace.version, 10) >= 19) {
      return element?.props?.ref || null;
    }
    // @ts-expect-error element.ref is not included in the ReactElement type
    // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
    return element?.ref || null;
  }

  const PropsContext = /*#__PURE__*/React__namespace.createContext(undefined);
  process.env.NODE_ENV !== "production" ? {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * @ignore
     */
    children: PropTypes.node,
    /**
     * @ignore
     */
    value: PropTypes.object
  } : void 0;
  function getThemeProps(params) {
    const {
      theme,
      name,
      props
    } = params;
    if (!theme || !theme.components || !theme.components[name]) {
      return props;
    }
    const config = theme.components[name];
    if (config.defaultProps) {
      // compatible with v5 signature
      return resolveProps(config.defaultProps, props);
    }
    if (!config.styleOverrides && !config.variants) {
      // v6 signature, no property 'defaultProps'
      return resolveProps(config, props);
    }
    return props;
  }
  function useDefaultProps$1({
    props,
    name
  }) {
    const ctx = React__namespace.useContext(PropsContext);
    return getThemeProps({
      props,
      name,
      theme: {
        components: ctx
      }
    });
  }

  /* eslint-disable @typescript-eslint/naming-convention */

  // We need to pass an argument as `{ theme }` for PigmentCSS, but we don't want to
  // allocate more objects.
  const arg = {
    theme: undefined
  };

  /**
   * Memoize style function on theme.
   * Intended to be used in styled() calls that only need access to the theme.
   */
  function unstable_memoTheme(styleFn) {
    let lastValue;
    let lastTheme;
    return function styleMemoized(props) {
      let value = lastValue;
      if (value === undefined || props.theme !== lastTheme) {
        arg.theme = props.theme;
        value = preprocessStyles(styleFn(arg));
        lastValue = value;
        lastTheme = props.theme;
      }
      return value;
    };
  }

  /**
   * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
   * and they does not need to remember the prefix (defined once).
   */
  function createGetCssVar$1(prefix = '') {
    function appendVar(...vars) {
      if (!vars.length) {
        return '';
      }
      const value = vars[0];
      if (typeof value === 'string' && !value.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/)) {
        return `, var(--${prefix ? `${prefix}-` : ''}${value}${appendVar(...vars.slice(1))})`;
      }
      return `, ${value}`;
    }

    // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.
    const getCssVar = (field, ...fallbacks) => {
      return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...fallbacks)})`;
    };
    return getCssVar;
  }

  /**
   * This function create an object from keys, value and then assign to target
   *
   * @param {Object} obj : the target object to be assigned
   * @param {string[]} keys
   * @param {string | number} value
   *
   * @example
   * const source = {}
   * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
   * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
   *
   * @example
   * const source = { palette: { primary: 'var(--palette-primary)' } }
   * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
   * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
   */
  const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
    let temp = obj;
    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        if (Array.isArray(temp)) {
          temp[Number(k)] = value;
        } else if (temp && typeof temp === 'object') {
          temp[k] = value;
        }
      } else if (temp && typeof temp === 'object') {
        if (!temp[k]) {
          temp[k] = arrayKeys.includes(k) ? [] : {};
        }
        temp = temp[k];
      }
    });
  };

  /**
   *
   * @param {Object} obj : source object
   * @param {Function} callback : a function that will be called when
   *                   - the deepest key in source object is reached
   *                   - the value of the deepest key is NOT `undefined` | `null`
   *
   * @example
   * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
   * // ['palette', 'primary', 'main'] '#000000'
   */
  const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
    function recurse(object, parentKeys = [], arrayKeys = []) {
      Object.entries(object).forEach(([key, value]) => {
        if (!shouldSkipPaths || shouldSkipPaths && !shouldSkipPaths([...parentKeys, key])) {
          if (value !== undefined && value !== null) {
            if (typeof value === 'object' && Object.keys(value).length > 0) {
              recurse(value, [...parentKeys, key], Array.isArray(value) ? [...arrayKeys, key] : arrayKeys);
            } else {
              callback([...parentKeys, key], value, arrayKeys);
            }
          }
        }
      });
    }
    recurse(obj);
  };
  const getCssValue = (keys, value) => {
    if (typeof value === 'number') {
      if (['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some(prop => keys.includes(prop))) {
        // CSS property that are unitless
        return value;
      }
      const lastKey = keys[keys.length - 1];
      if (lastKey.toLowerCase().includes('opacity')) {
        // opacity values are unitless
        return value;
      }
      return `${value}px`;
    }
    return value;
  };

  /**
   * a function that parse theme and return { css, vars }
   *
   * @param {Object} theme
   * @param {{
   *  prefix?: string,
   *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
   * }} options.
   *  `prefix`: The prefix of the generated CSS variables. This function does not change the value.
   *
   * @returns {{ css: Object, vars: Object }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme).
   *
   * @example
   * const { css, vars } = parser({
   *   fontSize: 12,
   *   lineHeight: 1.2,
   *   palette: { primary: { 500: 'var(--color)' } }
   * }, { prefix: 'foo' })
   *
   * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--color)' }
   * console.log(vars) // { fontSize: 'var(--foo-fontSize)', lineHeight: 'var(--foo-lineHeight)', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
   */
  function cssVarsParser(theme, options) {
    const {
      prefix,
      shouldSkipGeneratingVar
    } = options || {};
    const css = {};
    const vars = {};
    const varsWithDefaults = {};
    walkObjectDeep(theme, (keys, value, arrayKeys) => {
      if (typeof value === 'string' || typeof value === 'number') {
        if (!shouldSkipGeneratingVar || !shouldSkipGeneratingVar(keys, value)) {
          // only create css & var if `shouldSkipGeneratingVar` return false
          const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
          const resolvedValue = getCssValue(keys, value);
          Object.assign(css, {
            [cssVar]: resolvedValue
          });
          assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
          assignNestedKeys(varsWithDefaults, keys, `var(${cssVar}, ${resolvedValue})`, arrayKeys);
        }
      }
    }, keys => keys[0] === 'vars' // skip 'vars/*' paths
    );
    return {
      css,
      vars,
      varsWithDefaults
    };
  }

  function prepareCssVars(theme, parserConfig = {}) {
    const {
      getSelector = defaultGetSelector,
      disableCssColorScheme,
      colorSchemeSelector: selector
    } = parserConfig;
    // @ts-ignore - ignore components do not exist
    const {
      colorSchemes = {},
      components,
      defaultColorScheme = 'light',
      ...otherTheme
    } = theme;
    const {
      vars: rootVars,
      css: rootCss,
      varsWithDefaults: rootVarsWithDefaults
    } = cssVarsParser(otherTheme, parserConfig);
    let themeVars = rootVarsWithDefaults;
    const colorSchemesMap = {};
    const {
      [defaultColorScheme]: defaultScheme,
      ...otherColorSchemes
    } = colorSchemes;
    Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
      const {
        vars,
        css,
        varsWithDefaults
      } = cssVarsParser(scheme, parserConfig);
      themeVars = deepmerge(themeVars, varsWithDefaults);
      colorSchemesMap[key] = {
        css,
        vars
      };
    });
    if (defaultScheme) {
      // default color scheme vars should be merged last to set as default
      const {
        css,
        vars,
        varsWithDefaults
      } = cssVarsParser(defaultScheme, parserConfig);
      themeVars = deepmerge(themeVars, varsWithDefaults);
      colorSchemesMap[defaultColorScheme] = {
        css,
        vars
      };
    }
    function defaultGetSelector(colorScheme, cssObject) {
      let rule = selector;
      if (selector === 'class') {
        rule = '.%s';
      }
      if (selector === 'data') {
        rule = '[data-%s]';
      }
      if (selector?.startsWith('data-') && !selector.includes('%s')) {
        // 'data-joy-color-scheme' -> '[data-joy-color-scheme="%s"]'
        rule = `[${selector}="%s"]`;
      }
      if (colorScheme) {
        if (rule === 'media') {
          if (theme.defaultColorScheme === colorScheme) {
            return ':root';
          }
          const mode = colorSchemes[colorScheme]?.palette?.mode || colorScheme;
          return {
            [`@media (prefers-color-scheme: ${mode})`]: {
              ':root': cssObject
            }
          };
        }
        if (rule) {
          if (theme.defaultColorScheme === colorScheme) {
            return `:root, ${rule.replace('%s', String(colorScheme))}`;
          }
          return rule.replace('%s', String(colorScheme));
        }
      }
      return ':root';
    }
    const generateThemeVars = () => {
      let vars = {
        ...rootVars
      };
      Object.entries(colorSchemesMap).forEach(([, {
        vars: schemeVars
      }]) => {
        vars = deepmerge(vars, schemeVars);
      });
      return vars;
    };
    const generateStyleSheets = () => {
      const stylesheets = [];
      const colorScheme = theme.defaultColorScheme || 'light';
      function insertStyleSheet(key, css) {
        if (Object.keys(css).length) {
          stylesheets.push(typeof key === 'string' ? {
            [key]: {
              ...css
            }
          } : key);
        }
      }
      insertStyleSheet(getSelector(undefined, {
        ...rootCss
      }), rootCss);
      const {
        [colorScheme]: defaultSchemeVal,
        ...other
      } = colorSchemesMap;
      if (defaultSchemeVal) {
        // default color scheme has to come before other color schemes
        const {
          css
        } = defaultSchemeVal;
        const cssColorSheme = colorSchemes[colorScheme]?.palette?.mode;
        const finalCss = !disableCssColorScheme && cssColorSheme ? {
          colorScheme: cssColorSheme,
          ...css
        } : {
          ...css
        };
        insertStyleSheet(getSelector(colorScheme, {
          ...finalCss
        }), finalCss);
      }
      Object.entries(other).forEach(([key, {
        css
      }]) => {
        const cssColorSheme = colorSchemes[key]?.palette?.mode;
        const finalCss = !disableCssColorScheme && cssColorSheme ? {
          colorScheme: cssColorSheme,
          ...css
        } : {
          ...css
        };
        insertStyleSheet(getSelector(key, {
          ...finalCss
        }), finalCss);
      });
      return stylesheets;
    };
    return {
      vars: themeVars,
      generateThemeVars,
      generateStyleSheets
    };
  }

  /* eslint-disable import/prefer-default-export */
  function createGetColorSchemeSelector(selector) {
    return function getColorSchemeSelector(colorScheme) {
      if (selector === 'media') {
        if (process.env.NODE_ENV !== 'production') {
          if (colorScheme !== 'light' && colorScheme !== 'dark') {
            console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${colorScheme}'.`);
          }
        }
        return `@media (prefers-color-scheme: ${colorScheme})`;
      }
      if (selector) {
        if (selector.startsWith('data-') && !selector.includes('%s')) {
          return `[${selector}="${colorScheme}"] &`;
        }
        if (selector === 'class') {
          return `.${colorScheme} &`;
        }
        if (selector === 'data') {
          return `[data-${colorScheme}] &`;
        }
        return `${selector.replace('%s', colorScheme)} &`;
      }
      return '&';
    };
  }

  function getLight() {
    return {
      // The colors used to style the text.
      text: {
        // The most important text.
        primary: 'rgba(0, 0, 0, 0.87)',
        // Secondary text.
        secondary: 'rgba(0, 0, 0, 0.6)',
        // Disabled text have even lower visual prominence.
        disabled: 'rgba(0, 0, 0, 0.38)'
      },
      // The color used to divide different elements.
      divider: 'rgba(0, 0, 0, 0.12)',
      // The background colors used to style the surfaces.
      // Consistency between these values is important.
      background: {
        paper: common.white,
        default: common.white
      },
      // The colors used to style the action elements.
      action: {
        // The color of an active action like an icon button.
        active: 'rgba(0, 0, 0, 0.54)',
        // The color of an hovered action.
        hover: 'rgba(0, 0, 0, 0.04)',
        hoverOpacity: 0.04,
        // The color of a selected action.
        selected: 'rgba(0, 0, 0, 0.08)',
        selectedOpacity: 0.08,
        // The color of a disabled action.
        disabled: 'rgba(0, 0, 0, 0.26)',
        // The background color of a disabled action.
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(0, 0, 0, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.12
      }
    };
  }
  const light = getLight();
  function getDark() {
    return {
      text: {
        primary: common.white,
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(255, 255, 255, 0.5)',
        icon: 'rgba(255, 255, 255, 0.5)'
      },
      divider: 'rgba(255, 255, 255, 0.12)',
      background: {
        paper: '#121212',
        default: '#121212'
      },
      action: {
        active: common.white,
        hover: 'rgba(255, 255, 255, 0.08)',
        hoverOpacity: 0.08,
        selected: 'rgba(255, 255, 255, 0.16)',
        selectedOpacity: 0.16,
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        disabledOpacity: 0.38,
        focus: 'rgba(255, 255, 255, 0.12)',
        focusOpacity: 0.12,
        activatedOpacity: 0.24
      }
    };
  }
  const dark = getDark();
  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }
  function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: blue[200],
        light: blue[50],
        dark: blue[400]
      };
    }
    return {
      main: blue[700],
      light: blue[400],
      dark: blue[800]
    };
  }
  function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: purple[200],
        light: purple[50],
        dark: purple[400]
      };
    }
    return {
      main: purple[500],
      light: purple[300],
      dark: purple[700]
    };
  }
  function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: red[500],
        light: red[300],
        dark: red[700]
      };
    }
    return {
      main: red[700],
      light: red[400],
      dark: red[800]
    };
  }
  function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: lightBlue[400],
        light: lightBlue[300],
        dark: lightBlue[700]
      };
    }
    return {
      main: lightBlue[700],
      light: lightBlue[500],
      dark: lightBlue[900]
    };
  }
  function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: green[400],
        light: green[300],
        dark: green[700]
      };
    }
    return {
      main: green[800],
      light: green[500],
      dark: green[900]
    };
  }
  function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: orange[400],
        light: orange[300],
        dark: orange[700]
      };
    }
    return {
      main: '#ed6c02',
      // closest to orange[800] that pass 3:1.
      light: orange[500],
      dark: orange[900]
    };
  }
  function createPalette(palette) {
    const {
      mode = 'light',
      contrastThreshold = 3,
      tonalOffset = 0.2,
      ...other
    } = palette;
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode);

    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    function getContrastText(background) {
      const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
      if (process.env.NODE_ENV !== 'production') {
        const contrast = getContrastRatio(background, contrastText);
        if (contrast < 3) {
          console.error([`MUI: The contrast ratio of ${contrast}:1 for ${contrastText} on ${background}`, 'falls below the WCAG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n'));
        }
      }
      return contrastText;
    }
    const augmentColor = ({
      color,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700
    }) => {
      color = {
        ...color
      };
      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }
      if (!color.hasOwnProperty('main')) {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `The color object needs to have a \`main\` property or a \`${mainShade}\` property.` : formatMuiErrorMessage(11, name ? ` (${name})` : '', mainShade));
      }
      if (typeof color.main !== 'string') {
        throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${name ? ` (${name})` : ''} provided to augmentColor(color) is invalid.\n` + `\`color.main\` should be a string, but \`${JSON.stringify(color.main)}\` was provided instead.\n` + '\n' + 'Did you intend to use one of the following approaches?\n' + '\n' + 'import { green } from "@mui/material/colors";\n' + '\n' + 'const theme1 = createTheme({ palette: {\n' + '  primary: green,\n' + '} });\n' + '\n' + 'const theme2 = createTheme({ palette: {\n' + '  primary: { main: green[500] },\n' + '} });' : formatMuiErrorMessage(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
      }
      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);
      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }
      return color;
    };
    let modeHydrated;
    if (mode === 'light') {
      modeHydrated = getLight();
    } else if (mode === 'dark') {
      modeHydrated = getDark();
    }
    if (process.env.NODE_ENV !== 'production') {
      if (!modeHydrated) {
        console.error(`MUI: The palette mode \`${mode}\` is not supported.`);
      }
    }
    const paletteOutput = deepmerge({
      // A collection of common colors.
      common: {
        ...common
      },
      // prevent mutable object.
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary: augmentColor({
        color: primary,
        name: 'primary'
      }),
      // The colors used to represent secondary interface elements for a user.
      secondary: augmentColor({
        color: secondary,
        name: 'secondary',
        mainShade: 'A400',
        lightShade: 'A200',
        darkShade: 'A700'
      }),
      // The colors used to represent interface elements that the user should be made aware of.
      error: augmentColor({
        color: error,
        name: 'error'
      }),
      // The colors used to represent potentially dangerous actions or important messages.
      warning: augmentColor({
        color: warning,
        name: 'warning'
      }),
      // The colors used to present information to the user that is neutral and not necessarily important.
      info: augmentColor({
        color: info,
        name: 'info'
      }),
      // The colors used to indicate the successful completion of an action that user triggered.
      success: augmentColor({
        color: success,
        name: 'success'
      }),
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold,
      // Takes a background color and returns the text color that maximizes the contrast.
      getContrastText,
      // Generate a rich color object.
      augmentColor,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark mode object.
      ...modeHydrated
    }, other);
    return paletteOutput;
  }

  function prepareTypographyVars(typography) {
    const vars = {};
    const entries = Object.entries(typography);
    entries.forEach(entry => {
      const [key, value] = entry;
      if (typeof value === 'object') {
        vars[key] = `${value.fontStyle ? `${value.fontStyle} ` : ''}${value.fontVariant ? `${value.fontVariant} ` : ''}${value.fontWeight ? `${value.fontWeight} ` : ''}${value.fontStretch ? `${value.fontStretch} ` : ''}${value.fontSize || ''}${value.lineHeight ? `/${value.lineHeight} ` : ''}${value.fontFamily || ''}`;
      }
    });
    return vars;
  }

  function createMixins(breakpoints, mixins) {
    return {
      toolbar: {
        minHeight: 56,
        [breakpoints.up('xs')]: {
          '@media (orientation: landscape)': {
            minHeight: 48
          }
        },
        [breakpoints.up('sm')]: {
          minHeight: 64
        }
      },
      ...mixins
    };
  }

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }
  const caseAllCaps = {
    textTransform: 'uppercase'
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

  /**
   * @see @link{https://m2.material.io/design/typography/the-type-system.html}
   * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
   */
  function createTypography(palette, typography) {
    const {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2,
      ...other
    } = typeof typography === 'function' ? typography(palette) : typography;
    if (process.env.NODE_ENV !== 'production') {
      if (typeof fontSize !== 'number') {
        console.error('MUI: `fontSize` is required to be a number.');
      }
      if (typeof htmlFontSize !== 'number') {
        console.error('MUI: `htmlFontSize` is required to be a number.');
      }
    }
    const coef = fontSize / 14;
    const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
    const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => ({
      fontFamily,
      fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight,
      // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
      // across font-families can cause issues with the kerning.
      ...(fontFamily === defaultFontFamily ? {
        letterSpacing: `${round(letterSpacing / size)}em`
      } : {}),
      ...casing,
      ...allVariants
    });
    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
      // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    };
    return deepmerge({
      htmlFontSize,
      pxToRem,
      fontFamily,
      fontSize,
      fontWeightLight,
      fontWeightRegular,
      fontWeightMedium,
      fontWeightBold,
      ...variants
    }, other, {
      clone: false // No need to clone deep
    });
  }

  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;
  function createShadow(...px) {
    return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
  }

  // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
  const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
  };

  // Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing
  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195
  };
  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }
  function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }
    const constant = height / 36;

    // https://www.desmos.com/calculator/vbrp3ggqet
    return Math.min(Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10), 3000);
  }
  function createTransitions(inputTransitions) {
    const mergedEasing = {
      ...easing,
      ...inputTransitions.easing
    };
    const mergedDuration = {
      ...duration,
      ...inputTransitions.duration
    };
    const create = (props = ['all'], options = {}) => {
      const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0,
        ...other
      } = options;
      if (process.env.NODE_ENV !== 'production') {
        const isString = value => typeof value === 'string';
        const isNumber = value => !Number.isNaN(parseFloat(value));
        if (!isString(props) && !Array.isArray(props)) {
          console.error('MUI: Argument "props" must be a string or Array.');
        }
        if (!isNumber(durationOption) && !isString(durationOption)) {
          console.error(`MUI: Argument "duration" must be a number or a string but found ${durationOption}.`);
        }
        if (!isString(easingOption)) {
          console.error('MUI: Argument "easing" must be a string.');
        }
        if (!isNumber(delay) && !isString(delay)) {
          console.error('MUI: Argument "delay" must be a number or a string.');
        }
        if (typeof options !== 'object') {
          console.error(['MUI: Secong argument of transition.create must be an object.', "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join('\n'));
        }
        if (Object.keys(other).length !== 0) {
          console.error(`MUI: Unrecognized argument(s) [${Object.keys(other).join(',')}].`);
        }
      }
      return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
    };
    return {
      getAutoHeightDuration,
      create,
      ...inputTransitions,
      easing: mergedEasing,
      duration: mergedDuration
    };
  }

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  };

  /* eslint-disable import/prefer-default-export */
  function isSerializable(val) {
    return isPlainObject(val) || typeof val === 'undefined' || typeof val === 'string' || typeof val === 'boolean' || typeof val === 'number' || Array.isArray(val);
  }

  /**
   * `baseTheme` usually comes from `createTheme()` or `extendTheme()`.
   *
   * This function is intended to be used with zero-runtime CSS-in-JS like Pigment CSS
   * For example, in a Next.js project:
   *
   * ```js
   * // next.config.js
   * const { extendTheme } = require('@mui/material/styles');
   *
   * const theme = extendTheme();
   * // `.toRuntimeSource` is Pigment CSS specific to create a theme that is available at runtime.
   * theme.toRuntimeSource = stringifyTheme;
   *
   * module.exports = withPigment({
   *  theme,
   * });
   * ```
   */
  function stringifyTheme(baseTheme = {}) {
    const serializableTheme = {
      ...baseTheme
    };
    function serializeTheme(object) {
      const array = Object.entries(object);
      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < array.length; index++) {
        const [key, value] = array[index];
        if (!isSerializable(value) || key.startsWith('unstable_')) {
          delete object[key];
        } else if (isPlainObject(value)) {
          object[key] = {
            ...value
          };
          serializeTheme(object[key]);
        }
      }
    }
    serializeTheme(serializableTheme);
    return `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(serializableTheme, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
  }

  function createThemeNoVars(options = {}, ...args) {
    const {
      breakpoints: breakpointsInput,
      mixins: mixinsInput = {},
      spacing: spacingInput,
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {},
      shape: shapeInput,
      ...other
    } = options;
    if (options.vars) {
      throw new Error(process.env.NODE_ENV !== "production" ? 'MUI: `vars` is a private field used for CSS variables support.\n' + 'Please use another name.' : formatMuiErrorMessage(20));
    }
    const palette = createPalette(paletteInput);
    const systemTheme = createTheme$1(options);
    let muiTheme = deepmerge(systemTheme, {
      mixins: createMixins(systemTheme.breakpoints, mixinsInput),
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: shadows.slice(),
      typography: createTypography(palette, typographyInput),
      transitions: createTransitions(transitionsInput),
      zIndex: {
        ...zIndex
      }
    });
    muiTheme = deepmerge(muiTheme, other);
    muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
    if (process.env.NODE_ENV !== 'production') {
      // TODO v6: Refactor to use globalStateClassesMapping from @mui/utils once `readOnly` state class is used in Rating component.
      const stateClasses = ['active', 'checked', 'completed', 'disabled', 'error', 'expanded', 'focused', 'focusVisible', 'required', 'selected'];
      const traverse = (node, component) => {
        let key;

        // eslint-disable-next-line guard-for-in
        for (key in node) {
          const child = node[key];
          if (stateClasses.includes(key) && Object.keys(child).length > 0) {
            if (process.env.NODE_ENV !== 'production') {
              const stateClass = generateUtilityClass('', key);
              console.error([`MUI: The \`${component}\` component increases ` + `the CSS specificity of the \`${key}\` internal state.`, 'You can not override it like this: ', JSON.stringify(node, null, 2), '', `Instead, you need to use the '&.${stateClass}' syntax:`, JSON.stringify({
                root: {
                  [`&.${stateClass}`]: child
                }
              }, null, 2), '', 'https://mui.com/r/state-classes-guide'].join('\n'));
            }
            // Remove the style to prevent global conflicts.
            node[key] = {};
          }
        }
      };
      Object.keys(muiTheme.components).forEach(component => {
        const styleOverrides = muiTheme.components[component].styleOverrides;
        if (styleOverrides && component.startsWith('Mui')) {
          traverse(styleOverrides, component);
        }
      });
    }
    muiTheme.unstable_sxConfig = {
      ...defaultSxConfig,
      ...other?.unstable_sxConfig
    };
    muiTheme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    muiTheme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

    return muiTheme;
  }

  // Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
  function getOverlayAlpha(elevation) {
    let alphaValue;
    if (elevation < 1) {
      alphaValue = 5.11916 * elevation ** 2;
    } else {
      alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }
    return Math.round(alphaValue * 10) / 1000;
  }

  const defaultDarkOverlays = [...Array(25)].map((_, index) => {
    if (index === 0) {
      return 'none';
    }
    const overlay = getOverlayAlpha(index);
    return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
  });
  function getOpacity(mode) {
    return {
      inputPlaceholder: mode === 'dark' ? 0.5 : 0.42,
      inputUnderline: mode === 'dark' ? 0.7 : 0.42,
      switchTrackDisabled: mode === 'dark' ? 0.2 : 0.12,
      switchTrack: mode === 'dark' ? 0.3 : 0.38
    };
  }
  function getOverlays(mode) {
    return mode === 'dark' ? defaultDarkOverlays : [];
  }
  function createColorScheme(options) {
    const {
      palette: paletteInput = {
        mode: 'light'
      },
      // need to cast to avoid module augmentation test
      opacity,
      overlays,
      ...rest
    } = options;
    const palette = createPalette(paletteInput);
    return {
      palette,
      opacity: {
        ...getOpacity(palette.mode),
        ...opacity
      },
      overlays: overlays || getOverlays(palette.mode),
      ...rest
    };
  }

  function shouldSkipGeneratingVar(keys) {
    return !!keys[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!keys[0].match(/sxConfig$/) ||
    // ends with sxConfig
    keys[0] === 'palette' && !!keys[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
  }

  /**
   * @internal These variables should not appear in the :root stylesheet when the `defaultColorScheme="dark"`
   */
  const excludeVariablesFromRoot = cssVarPrefix => [...[...Array(25)].map((_, index) => `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}overlays-${index}`), `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkBg`, `--${cssVarPrefix ? `${cssVarPrefix}-` : ''}palette-AppBar-darkColor`];

  var defaultGetSelector = theme => (colorScheme, css) => {
    const root = theme.rootSelector || ':root';
    const selector = theme.colorSchemeSelector;
    let rule = selector;
    if (selector === 'class') {
      rule = '.%s';
    }
    if (selector === 'data') {
      rule = '[data-%s]';
    }
    if (selector?.startsWith('data-') && !selector.includes('%s')) {
      // 'data-mui-color-scheme' -> '[data-mui-color-scheme="%s"]'
      rule = `[${selector}="%s"]`;
    }
    if (theme.defaultColorScheme === colorScheme) {
      if (colorScheme === 'dark') {
        const excludedVariables = {};
        excludeVariablesFromRoot(theme.cssVarPrefix).forEach(cssVar => {
          excludedVariables[cssVar] = css[cssVar];
          delete css[cssVar];
        });
        if (rule === 'media') {
          return {
            [root]: css,
            [`@media (prefers-color-scheme: dark)`]: {
              [root]: excludedVariables
            }
          };
        }
        if (rule) {
          return {
            [rule.replace('%s', colorScheme)]: excludedVariables,
            [`${root}, ${rule.replace('%s', colorScheme)}`]: css
          };
        }
        return {
          [root]: {
            ...css,
            ...excludedVariables
          }
        };
      }
      if (rule && rule !== 'media') {
        return `${root}, ${rule.replace('%s', String(colorScheme))}`;
      }
    } else if (colorScheme) {
      if (rule === 'media') {
        return {
          [`@media (prefers-color-scheme: ${String(colorScheme)})`]: {
            [root]: css
          }
        };
      }
      if (rule) {
        return rule.replace('%s', String(colorScheme));
      }
    }
    return root;
  };

  function assignNode(obj, keys) {
    keys.forEach(k => {
      if (!obj[k]) {
        obj[k] = {};
      }
    });
  }
  function setColor(obj, key, defaultValue) {
    if (!obj[key] && defaultValue) {
      obj[key] = defaultValue;
    }
  }
  function toRgb(color) {
    if (typeof color !== 'string' || !color.startsWith('hsl')) {
      return color;
    }
    return hslToRgb(color);
  }
  function setColorChannel(obj, key) {
    if (!(`${key}Channel` in obj)) {
      // custom channel token is not provided, generate one.
      // if channel token can't be generated, show a warning.
      obj[`${key}Channel`] = private_safeColorChannel(toRgb(obj[key]), `MUI: Can't create \`palette.${key}Channel\` because \`palette.${key}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` + '\n' + `To suppress this warning, you need to explicitly provide the \`palette.${key}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`);
    }
  }
  function getSpacingVal(spacingInput) {
    if (typeof spacingInput === 'number') {
      return `${spacingInput}px`;
    }
    if (typeof spacingInput === 'string' || typeof spacingInput === 'function' || Array.isArray(spacingInput)) {
      return spacingInput;
    }
    return '8px';
  }
  const silent = fn => {
    try {
      return fn();
    } catch (error) {
      // ignore error
    }
    return undefined;
  };
  const createGetCssVar = (cssVarPrefix = 'mui') => createGetCssVar$1(cssVarPrefix);
  function attachColorScheme$1(colorSchemes, scheme, restTheme, colorScheme) {
    if (!scheme) {
      return undefined;
    }
    scheme = scheme === true ? {} : scheme;
    const mode = colorScheme === 'dark' ? 'dark' : 'light';
    if (!restTheme) {
      colorSchemes[colorScheme] = createColorScheme({
        ...scheme,
        palette: {
          mode,
          ...scheme?.palette
        }
      });
      return undefined;
    }
    const {
      palette,
      ...muiTheme
    } = createThemeNoVars({
      ...restTheme,
      palette: {
        mode,
        ...scheme?.palette
      }
    });
    colorSchemes[colorScheme] = {
      ...scheme,
      palette,
      opacity: {
        ...getOpacity(mode),
        ...scheme?.opacity
      },
      overlays: scheme?.overlays || getOverlays(mode)
    };
    return muiTheme;
  }

  /**
   * A default `createThemeWithVars` comes with a single color scheme, either `light` or `dark` based on the `defaultColorScheme`.
   * This is better suited for apps that only need a single color scheme.
   *
   * To enable built-in `light` and `dark` color schemes, either:
   * 1. provide a `colorSchemeSelector` to define how the color schemes will change.
   * 2. provide `colorSchemes.dark` will set `colorSchemeSelector: 'media'` by default.
   */
  function createThemeWithVars(options = {}, ...args) {
    const {
      colorSchemes: colorSchemesInput = {
        light: true
      },
      defaultColorScheme: defaultColorSchemeInput,
      disableCssColorScheme = false,
      cssVarPrefix = 'mui',
      shouldSkipGeneratingVar: shouldSkipGeneratingVar$1 = shouldSkipGeneratingVar,
      colorSchemeSelector: selector = colorSchemesInput.light && colorSchemesInput.dark ? 'media' : undefined,
      rootSelector = ':root',
      ...input
    } = options;
    const firstColorScheme = Object.keys(colorSchemesInput)[0];
    const defaultColorScheme = defaultColorSchemeInput || (colorSchemesInput.light && firstColorScheme !== 'light' ? 'light' : firstColorScheme);
    const getCssVar = createGetCssVar(cssVarPrefix);
    const {
      [defaultColorScheme]: defaultSchemeInput,
      light: builtInLight,
      dark: builtInDark,
      ...customColorSchemes
    } = colorSchemesInput;
    const colorSchemes = {
      ...customColorSchemes
    };
    let defaultScheme = defaultSchemeInput;

    // For built-in light and dark color schemes, ensure that the value is valid if they are the default color scheme.
    if (defaultColorScheme === 'dark' && !('dark' in colorSchemesInput) || defaultColorScheme === 'light' && !('light' in colorSchemesInput)) {
      defaultScheme = true;
    }
    if (!defaultScheme) {
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${defaultColorScheme}\` option is either missing or invalid.` : formatMuiErrorMessage(21, defaultColorScheme));
    }

    // Create the palette for the default color scheme, either `light`, `dark`, or custom color scheme.
    const muiTheme = attachColorScheme$1(colorSchemes, defaultScheme, input, defaultColorScheme);
    if (builtInLight && !colorSchemes.light) {
      attachColorScheme$1(colorSchemes, builtInLight, undefined, 'light');
    }
    if (builtInDark && !colorSchemes.dark) {
      attachColorScheme$1(colorSchemes, builtInDark, undefined, 'dark');
    }
    let theme = {
      defaultColorScheme,
      ...muiTheme,
      cssVarPrefix,
      colorSchemeSelector: selector,
      rootSelector,
      getCssVar,
      colorSchemes,
      font: {
        ...prepareTypographyVars(muiTheme.typography),
        ...muiTheme.font
      },
      spacing: getSpacingVal(input.spacing)
    };
    Object.keys(theme.colorSchemes).forEach(key => {
      const palette = theme.colorSchemes[key].palette;
      const setCssVarColor = cssVar => {
        const tokens = cssVar.split('-');
        const color = tokens[1];
        const colorToken = tokens[2];
        return getCssVar(cssVar, palette[color][colorToken]);
      };

      // attach black & white channels to common node
      if (palette.mode === 'light') {
        setColor(palette.common, 'background', '#fff');
        setColor(palette.common, 'onBackground', '#000');
      }
      if (palette.mode === 'dark') {
        setColor(palette.common, 'background', '#000');
        setColor(palette.common, 'onBackground', '#fff');
      }

      // assign component variables
      assignNode(palette, ['Alert', 'AppBar', 'Avatar', 'Button', 'Chip', 'FilledInput', 'LinearProgress', 'Skeleton', 'Slider', 'SnackbarContent', 'SpeedDialAction', 'StepConnector', 'StepContent', 'Switch', 'TableCell', 'Tooltip']);
      if (palette.mode === 'light') {
        setColor(palette.Alert, 'errorColor', private_safeDarken(palette.error.light, 0.6));
        setColor(palette.Alert, 'infoColor', private_safeDarken(palette.info.light, 0.6));
        setColor(palette.Alert, 'successColor', private_safeDarken(palette.success.light, 0.6));
        setColor(palette.Alert, 'warningColor', private_safeDarken(palette.warning.light, 0.6));
        setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-main'));
        setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-main'));
        setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-main'));
        setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-main'));
        setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.main)));
        setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.main)));
        setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.main)));
        setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.main)));
        setColor(palette.Alert, 'errorStandardBg', private_safeLighten(palette.error.light, 0.9));
        setColor(palette.Alert, 'infoStandardBg', private_safeLighten(palette.info.light, 0.9));
        setColor(palette.Alert, 'successStandardBg', private_safeLighten(palette.success.light, 0.9));
        setColor(palette.Alert, 'warningStandardBg', private_safeLighten(palette.warning.light, 0.9));
        setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
        setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
        setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
        setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
        setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-100'));
        setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-400'));
        setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-300'));
        setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-A100'));
        setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-400'));
        setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-700'));
        setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-700'));
        setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
        setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
        setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
        setColor(palette.LinearProgress, 'primaryBg', private_safeLighten(palette.primary.main, 0.62));
        setColor(palette.LinearProgress, 'secondaryBg', private_safeLighten(palette.secondary.main, 0.62));
        setColor(palette.LinearProgress, 'errorBg', private_safeLighten(palette.error.main, 0.62));
        setColor(palette.LinearProgress, 'infoBg', private_safeLighten(palette.info.main, 0.62));
        setColor(palette.LinearProgress, 'successBg', private_safeLighten(palette.success.main, 0.62));
        setColor(palette.LinearProgress, 'warningBg', private_safeLighten(palette.warning.main, 0.62));
        setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.11)`);
        setColor(palette.Slider, 'primaryTrack', private_safeLighten(palette.primary.main, 0.62));
        setColor(palette.Slider, 'secondaryTrack', private_safeLighten(palette.secondary.main, 0.62));
        setColor(palette.Slider, 'errorTrack', private_safeLighten(palette.error.main, 0.62));
        setColor(palette.Slider, 'infoTrack', private_safeLighten(palette.info.main, 0.62));
        setColor(palette.Slider, 'successTrack', private_safeLighten(palette.success.main, 0.62));
        setColor(palette.Slider, 'warningTrack', private_safeLighten(palette.warning.main, 0.62));
        const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.8);
        setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
        setColor(palette.SnackbarContent, 'color', silent(() => palette.getContrastText(snackbarContentBackground)));
        setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
        setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-400'));
        setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-400'));
        setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-common-white'));
        setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-100'));
        setColor(palette.Switch, 'primaryDisabledColor', private_safeLighten(palette.primary.main, 0.62));
        setColor(palette.Switch, 'secondaryDisabledColor', private_safeLighten(palette.secondary.main, 0.62));
        setColor(palette.Switch, 'errorDisabledColor', private_safeLighten(palette.error.main, 0.62));
        setColor(palette.Switch, 'infoDisabledColor', private_safeLighten(palette.info.main, 0.62));
        setColor(palette.Switch, 'successDisabledColor', private_safeLighten(palette.success.main, 0.62));
        setColor(palette.Switch, 'warningDisabledColor', private_safeLighten(palette.warning.main, 0.62));
        setColor(palette.TableCell, 'border', private_safeLighten(private_safeAlpha(palette.divider, 1), 0.88));
        setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
      }
      if (palette.mode === 'dark') {
        setColor(palette.Alert, 'errorColor', private_safeLighten(palette.error.light, 0.6));
        setColor(palette.Alert, 'infoColor', private_safeLighten(palette.info.light, 0.6));
        setColor(palette.Alert, 'successColor', private_safeLighten(palette.success.light, 0.6));
        setColor(palette.Alert, 'warningColor', private_safeLighten(palette.warning.light, 0.6));
        setColor(palette.Alert, 'errorFilledBg', setCssVarColor('palette-error-dark'));
        setColor(palette.Alert, 'infoFilledBg', setCssVarColor('palette-info-dark'));
        setColor(palette.Alert, 'successFilledBg', setCssVarColor('palette-success-dark'));
        setColor(palette.Alert, 'warningFilledBg', setCssVarColor('palette-warning-dark'));
        setColor(palette.Alert, 'errorFilledColor', silent(() => palette.getContrastText(palette.error.dark)));
        setColor(palette.Alert, 'infoFilledColor', silent(() => palette.getContrastText(palette.info.dark)));
        setColor(palette.Alert, 'successFilledColor', silent(() => palette.getContrastText(palette.success.dark)));
        setColor(palette.Alert, 'warningFilledColor', silent(() => palette.getContrastText(palette.warning.dark)));
        setColor(palette.Alert, 'errorStandardBg', private_safeDarken(palette.error.light, 0.9));
        setColor(palette.Alert, 'infoStandardBg', private_safeDarken(palette.info.light, 0.9));
        setColor(palette.Alert, 'successStandardBg', private_safeDarken(palette.success.light, 0.9));
        setColor(palette.Alert, 'warningStandardBg', private_safeDarken(palette.warning.light, 0.9));
        setColor(palette.Alert, 'errorIconColor', setCssVarColor('palette-error-main'));
        setColor(palette.Alert, 'infoIconColor', setCssVarColor('palette-info-main'));
        setColor(palette.Alert, 'successIconColor', setCssVarColor('palette-success-main'));
        setColor(palette.Alert, 'warningIconColor', setCssVarColor('palette-warning-main'));
        setColor(palette.AppBar, 'defaultBg', setCssVarColor('palette-grey-900'));
        setColor(palette.AppBar, 'darkBg', setCssVarColor('palette-background-paper')); // specific for dark mode
        setColor(palette.AppBar, 'darkColor', setCssVarColor('palette-text-primary')); // specific for dark mode
        setColor(palette.Avatar, 'defaultBg', setCssVarColor('palette-grey-600'));
        setColor(palette.Button, 'inheritContainedBg', setCssVarColor('palette-grey-800'));
        setColor(palette.Button, 'inheritContainedHoverBg', setCssVarColor('palette-grey-700'));
        setColor(palette.Chip, 'defaultBorder', setCssVarColor('palette-grey-700'));
        setColor(palette.Chip, 'defaultAvatarColor', setCssVarColor('palette-grey-300'));
        setColor(palette.Chip, 'defaultIconColor', setCssVarColor('palette-grey-300'));
        setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
        setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
        setColor(palette.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)');
        setColor(palette.LinearProgress, 'primaryBg', private_safeDarken(palette.primary.main, 0.5));
        setColor(palette.LinearProgress, 'secondaryBg', private_safeDarken(palette.secondary.main, 0.5));
        setColor(palette.LinearProgress, 'errorBg', private_safeDarken(palette.error.main, 0.5));
        setColor(palette.LinearProgress, 'infoBg', private_safeDarken(palette.info.main, 0.5));
        setColor(palette.LinearProgress, 'successBg', private_safeDarken(palette.success.main, 0.5));
        setColor(palette.LinearProgress, 'warningBg', private_safeDarken(palette.warning.main, 0.5));
        setColor(palette.Skeleton, 'bg', `rgba(${setCssVarColor('palette-text-primaryChannel')} / 0.13)`);
        setColor(palette.Slider, 'primaryTrack', private_safeDarken(palette.primary.main, 0.5));
        setColor(palette.Slider, 'secondaryTrack', private_safeDarken(palette.secondary.main, 0.5));
        setColor(palette.Slider, 'errorTrack', private_safeDarken(palette.error.main, 0.5));
        setColor(palette.Slider, 'infoTrack', private_safeDarken(palette.info.main, 0.5));
        setColor(palette.Slider, 'successTrack', private_safeDarken(palette.success.main, 0.5));
        setColor(palette.Slider, 'warningTrack', private_safeDarken(palette.warning.main, 0.5));
        const snackbarContentBackground = private_safeEmphasize(palette.background.default, 0.98);
        setColor(palette.SnackbarContent, 'bg', snackbarContentBackground);
        setColor(palette.SnackbarContent, 'color', silent(() => palette.getContrastText(snackbarContentBackground)));
        setColor(palette.SpeedDialAction, 'fabHoverBg', private_safeEmphasize(palette.background.paper, 0.15));
        setColor(palette.StepConnector, 'border', setCssVarColor('palette-grey-600'));
        setColor(palette.StepContent, 'border', setCssVarColor('palette-grey-600'));
        setColor(palette.Switch, 'defaultColor', setCssVarColor('palette-grey-300'));
        setColor(palette.Switch, 'defaultDisabledColor', setCssVarColor('palette-grey-600'));
        setColor(palette.Switch, 'primaryDisabledColor', private_safeDarken(palette.primary.main, 0.55));
        setColor(palette.Switch, 'secondaryDisabledColor', private_safeDarken(palette.secondary.main, 0.55));
        setColor(palette.Switch, 'errorDisabledColor', private_safeDarken(palette.error.main, 0.55));
        setColor(palette.Switch, 'infoDisabledColor', private_safeDarken(palette.info.main, 0.55));
        setColor(palette.Switch, 'successDisabledColor', private_safeDarken(palette.success.main, 0.55));
        setColor(palette.Switch, 'warningDisabledColor', private_safeDarken(palette.warning.main, 0.55));
        setColor(palette.TableCell, 'border', private_safeDarken(private_safeAlpha(palette.divider, 1), 0.68));
        setColor(palette.Tooltip, 'bg', private_safeAlpha(palette.grey[700], 0.92));
      }

      // MUI X - DataGrid needs this token.
      setColorChannel(palette.background, 'default');

      // added for consistency with the `background.default` token
      setColorChannel(palette.background, 'paper');
      setColorChannel(palette.common, 'background');
      setColorChannel(palette.common, 'onBackground');
      setColorChannel(palette, 'divider');
      Object.keys(palette).forEach(color => {
        const colors = palette[color];

        // The default palettes (primary, secondary, error, info, success, and warning) errors are handled by the above `createTheme(...)`.

        if (color !== 'tonalOffset' && colors && typeof colors === 'object') {
          // Silent the error for custom palettes.
          if (colors.main) {
            setColor(palette[color], 'mainChannel', private_safeColorChannel(toRgb(colors.main)));
          }
          if (colors.light) {
            setColor(palette[color], 'lightChannel', private_safeColorChannel(toRgb(colors.light)));
          }
          if (colors.dark) {
            setColor(palette[color], 'darkChannel', private_safeColorChannel(toRgb(colors.dark)));
          }
          if (colors.contrastText) {
            setColor(palette[color], 'contrastTextChannel', private_safeColorChannel(toRgb(colors.contrastText)));
          }
          if (color === 'text') {
            // Text colors: text.primary, text.secondary
            setColorChannel(palette[color], 'primary');
            setColorChannel(palette[color], 'secondary');
          }
          if (color === 'action') {
            // Action colors: action.active, action.selected
            if (colors.active) {
              setColorChannel(palette[color], 'active');
            }
            if (colors.selected) {
              setColorChannel(palette[color], 'selected');
            }
          }
        }
      });
    });
    theme = args.reduce((acc, argument) => deepmerge(acc, argument), theme);
    const parserConfig = {
      prefix: cssVarPrefix,
      disableCssColorScheme,
      shouldSkipGeneratingVar: shouldSkipGeneratingVar$1,
      getSelector: defaultGetSelector(theme)
    };
    const {
      vars,
      generateThemeVars,
      generateStyleSheets
    } = prepareCssVars(theme, parserConfig);
    theme.vars = vars;
    Object.entries(theme.colorSchemes[theme.defaultColorScheme]).forEach(([key, value]) => {
      theme[key] = value;
    });
    theme.generateThemeVars = generateThemeVars;
    theme.generateStyleSheets = generateStyleSheets;
    theme.generateSpacing = function generateSpacing() {
      return createSpacing(input.spacing, createUnarySpacing(this));
    };
    theme.getColorSchemeSelector = createGetColorSchemeSelector(selector);
    theme.spacing = theme.generateSpacing();
    theme.shouldSkipGeneratingVar = shouldSkipGeneratingVar$1;
    theme.unstable_sxConfig = {
      ...defaultSxConfig,
      ...input?.unstable_sxConfig
    };
    theme.unstable_sx = function sx(props) {
      return styleFunctionSx({
        sx: props,
        theme: this
      });
    };
    theme.toRuntimeSource = stringifyTheme; // for Pigment CSS integration

    return theme;
  }

  // eslint-disable-next-line consistent-return
  function attachColorScheme(theme, scheme, colorScheme) {
    if (!theme.colorSchemes) {
      return undefined;
    }
    if (colorScheme) {
      theme.colorSchemes[scheme] = {
        ...(colorScheme !== true && colorScheme),
        palette: createPalette({
          ...(colorScheme === true ? {} : colorScheme.palette),
          mode: scheme
        }) // cast type to skip module augmentation test
      };
    }
  }

  /**
   * Generate a theme base on the options received.
   * @param options Takes an incomplete theme object and adds the missing parts.
   * @param args Deep merge the arguments with the about to be returned theme.
   * @returns A complete, ready-to-use theme object.
   */
  function createTheme(options = {},
  // cast type to skip module augmentation test
  ...args) {
    const {
      palette,
      cssVariables = false,
      colorSchemes: initialColorSchemes = !palette ? {
        light: true
      } : undefined,
      defaultColorScheme: initialDefaultColorScheme = palette?.mode,
      ...rest
    } = options;
    const defaultColorSchemeInput = initialDefaultColorScheme || 'light';
    const defaultScheme = initialColorSchemes?.[defaultColorSchemeInput];
    const colorSchemesInput = {
      ...initialColorSchemes,
      ...(palette ? {
        [defaultColorSchemeInput]: {
          ...(typeof defaultScheme !== 'boolean' && defaultScheme),
          palette
        }
      } : undefined)
    };
    if (cssVariables === false) {
      if (!('colorSchemes' in options)) {
        // Behaves exactly as v5
        return createThemeNoVars(options, ...args);
      }
      let paletteOptions = palette;
      if (!('palette' in options)) {
        if (colorSchemesInput[defaultColorSchemeInput]) {
          if (colorSchemesInput[defaultColorSchemeInput] !== true) {
            paletteOptions = colorSchemesInput[defaultColorSchemeInput].palette;
          } else if (defaultColorSchemeInput === 'dark') {
            // @ts-ignore to prevent the module augmentation test from failing
            paletteOptions = {
              mode: 'dark'
            };
          }
        }
      }
      const theme = createThemeNoVars({
        ...options,
        palette: paletteOptions
      }, ...args);
      theme.defaultColorScheme = defaultColorSchemeInput;
      theme.colorSchemes = colorSchemesInput;
      if (theme.palette.mode === 'light') {
        theme.colorSchemes.light = {
          ...(colorSchemesInput.light !== true && colorSchemesInput.light),
          palette: theme.palette
        };
        attachColorScheme(theme, 'dark', colorSchemesInput.dark);
      }
      if (theme.palette.mode === 'dark') {
        theme.colorSchemes.dark = {
          ...(colorSchemesInput.dark !== true && colorSchemesInput.dark),
          palette: theme.palette
        };
        attachColorScheme(theme, 'light', colorSchemesInput.light);
      }
      return theme;
    }
    if (!palette && !('light' in colorSchemesInput) && defaultColorSchemeInput === 'light') {
      colorSchemesInput.light = true;
    }
    return createThemeWithVars({
      ...rest,
      colorSchemes: colorSchemesInput,
      defaultColorScheme: defaultColorSchemeInput,
      ...(typeof cssVariables !== 'boolean' && cssVariables)
    }, ...args);
  }

  const defaultTheme = createTheme();

  function useTheme() {
    const theme = useTheme$1(defaultTheme);
    if (process.env.NODE_ENV !== 'production') {
      // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
      // eslint-disable-next-line react-hooks/rules-of-hooks
      React__namespace.useDebugValue(theme);
    }
    return theme[THEME_ID] || theme;
  }

  // copied from @mui/system/createStyled
  function slotShouldForwardProp(prop) {
    return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
  }

  const rootShouldForwardProp = prop => slotShouldForwardProp(prop) && prop !== 'classes';

  const styled = createStyled({
    themeId: THEME_ID,
    defaultTheme,
    rootShouldForwardProp
  });

  // eslint-disable-next-line @typescript-eslint/naming-convention
  function internal_createExtendSxProp() {
    return extendSxProp$1;
  }

  const memoTheme = unstable_memoTheme;

  process.env.NODE_ENV !== "production" ? {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * @ignore
     */
    children: PropTypes.node,
    /**
     * @ignore
     */
    value: PropTypes.object.isRequired
  } : void 0;
  function useDefaultProps(params) {
    return useDefaultProps$1(params);
  }

  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
    return t;
  }

  function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
      return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
  }

  function _inheritsLoose(t, o) {
    t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
  }

  var config = {
    disabled: false
  };

  var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number,
    appear: PropTypes.number
  }).isRequired]) : null;
  process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string,
    active: PropTypes.string
  }), PropTypes.shape({
    enter: PropTypes.string,
    enterDone: PropTypes.string,
    enterActive: PropTypes.string,
    exit: PropTypes.string,
    exitDone: PropTypes.string,
    exitActive: PropTypes.string
  })]) : null;

  var TransitionGroupContext = /*#__PURE__*/React.createContext(null);

  var forceReflow = function forceReflow(node) {
    return node.scrollTop;
  };

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);
    function Transition(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;
      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }
      _this.state = {
        status: initialStatus
      };
      _this.nextCallback = null;
      return _this;
    }
    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
      var nextIn = _ref.in;
      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED
        };
      }
      return null;
    } // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }
    ;
    var _proto = Transition.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };
    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;
      if (prevProps !== this.props) {
        var status = this.state.status;
        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }
      this.updateStatus(false, nextStatus);
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };
    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;
      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }
      return {
        exit: exit,
        enter: enter,
        appear: appear
      };
    };
    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }
      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();
        if (nextStatus === ENTERING) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
            // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
            // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

            if (node) forceReflow(node);
          }
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED
        });
      }
    };
    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;
      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;
      var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];
      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if (!mounting && !enter || config.disabled) {
        this.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode);
        });
        return;
      }
      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState({
        status: ENTERING
      }, function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);
        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(maybeNode, maybeAppearing);
          });
        });
      });
    };
    _proto.performExit = function performExit() {
      var _this3 = this;
      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef ? undefined : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
        return;
      }
      this.props.onExit(maybeNode);
      this.safeSetState({
        status: EXITING
      }, function () {
        _this3.props.onExiting(maybeNode);
        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(maybeNode);
          });
        });
      });
    };
    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };
    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };
    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;
      var active = true;
      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };
      this.nextCallback.cancel = function () {
        active = false;
      };
      return this.nextCallback;
    };
    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }
      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];
        this.props.addEndListener(maybeNode, maybeNextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };
    _proto.render = function render() {
      var status = this.state.status;
      if (status === UNMOUNTED) {
        return null;
      }
      var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
      return (/*#__PURE__*/
        // allows for nested Transitions
        React.createElement(TransitionGroupContext.Provider, {
          value: null
        }, typeof children === 'function' ? children(status, childProps) : /*#__PURE__*/React.cloneElement(React.Children.only(children), childProps))
      );
    };
    return Transition;
  }(React.Component);
  Transition.contextType = TransitionGroupContext;
  Transition.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * A React reference to DOM element that need to transition:
     * https://stackoverflow.com/a/51127130/4671932
     *
     *   - When `nodeRef` prop is used, `node` is not passed to callback functions
     *      (e.g. `onEnter`) because user already has direct access to the node.
     *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
     *     `nodeRef` need to be provided to `Transition` with changed `key` prop
     *     (see
     *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
     */
    nodeRef: PropTypes.shape({
      current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
        var value = propValue[key];
        return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
      }
    }),
    /**
     * A `function` child can be used instead of a React element. This function is
     * called with the current transition status (`'entering'`, `'entered'`,
     * `'exiting'`, `'exited'`), which can be used to apply context
     * specific props to a component.
     *
     * ```jsx
     * <Transition in={this.state.in} timeout={150}>
     *   {state => (
     *     <MyComponent className={`fade fade-${state}`} />
     *   )}
     * </Transition>
     * ```
     */
    children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
    /**
     * Show the component; triggers the enter or exit states
     */
    in: PropTypes.bool,
    /**
     * By default the child component is mounted immediately along with
     * the parent `Transition` component. If you want to "lazy mount" the component on the
     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
     * mounted, even on "exited", unless you also specify `unmountOnExit`.
     */
    mountOnEnter: PropTypes.bool,
    /**
     * By default the child component stays mounted after it reaches the `'exited'` state.
     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
     */
    unmountOnExit: PropTypes.bool,
    /**
     * By default the child component does not perform the enter transition when
     * it first mounts, regardless of the value of `in`. If you want this
     * behavior, set both `appear` and `in` to `true`.
     *
     * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
     * > only adds an additional enter transition. However, in the
     * > `<CSSTransition>` component that first enter transition does result in
     * > additional `.appear-*` classes, that way you can choose to style it
     * > differently.
     */
    appear: PropTypes.bool,
    /**
     * Enable or disable enter transitions.
     */
    enter: PropTypes.bool,
    /**
     * Enable or disable exit transitions.
     */
    exit: PropTypes.bool,
    /**
     * The duration of the transition, in milliseconds.
     * Required unless `addEndListener` is provided.
     *
     * You may specify a single timeout for all transitions:
     *
     * ```jsx
     * timeout={500}
     * ```
     *
     * or individually:
     *
     * ```jsx
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     *
     * - `appear` defaults to the value of `enter`
     * - `enter` defaults to `0`
     * - `exit` defaults to `0`
     *
     * @type {number | { enter?: number, exit?: number, appear?: number }}
     */
    timeout: function timeout(props) {
      var pt = timeoutsShape;
      if (!props.addEndListener) pt = pt.isRequired;
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return pt.apply(void 0, [props].concat(args));
    },
    /**
     * Add a custom transition end trigger. Called with the transitioning
     * DOM node and a `done` callback. Allows for more fine grained transition end
     * logic. Timeouts are still used as a fallback if provided.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * ```jsx
     * addEndListener={(node, done) => {
     *   // use the css transitionend event to mark the finish of a transition
     *   node.addEventListener('transitionend', done, false);
     * }}
     * ```
     */
    addEndListener: PropTypes.func,
    /**
     * Callback fired before the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEnter: PropTypes.func,
    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool)
     */
    onEntering: PropTypes.func,
    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement, isAppearing: bool) -> void
     */
    onEntered: PropTypes.func,
    /**
     * Callback fired before the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExit: PropTypes.func,
    /**
     * Callback fired after the "exiting" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed.
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExiting: PropTypes.func,
    /**
     * Callback fired after the "exited" status is applied.
     *
     * **Note**: when `nodeRef` prop is passed, `node` is not passed
     *
     * @type Function(node: HtmlElement) -> void
     */
    onExited: PropTypes.func
  } : {}; // Name the function so it is clearer in the documentation

  function noop$1() {}
  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop$1,
    onEntering: noop$1,
    onEntered: noop$1,
    onExit: noop$1,
    onExiting: noop$1,
    onExited: noop$1
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;

  function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && /*#__PURE__*/React.isValidElement(child) ? mapFn(child) : child;
    };
    var result = Object.create(null);
    if (children) React.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};
    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list

    var nextKeysPending = Object.create(null);
    var pendingKeys = [];
    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }
    var i;
    var childMapping = {};
    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
        }
      }
      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`

    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }
    return childMapping;
  }
  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }
  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return /*#__PURE__*/React.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props)
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (! /*#__PURE__*/React.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = /*#__PURE__*/React.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = /*#__PURE__*/React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = /*#__PURE__*/React.cloneElement(child, {
          in: false
        });
      } else if (hasNext && hasPrev && /*#__PURE__*/React.isValidElement(prevChild)) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = /*#__PURE__*/React.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps)
        });
      }
    });
    return children;
  }

  var values = Object.values || function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };
  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    }
  };
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

  var TransitionGroup = /*#__PURE__*/function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);
    function TransitionGroup(props, context) {
      var _this;
      _this = _React$Component.call(this, props, context) || this;
      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear

      _this.state = {
        contextValue: {
          isMounting: true
        },
        handleExited: handleExited,
        firstRender: true
      };
      return _this;
    }
    var _proto = TransitionGroup.prototype;
    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false
        }
      });
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };
    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
      var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
      return {
        children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
        firstRender: false
      };
    } // node is `undefined` when user provided `nodeRef` prop
    ;
    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;
      if (child.props.onExited) {
        child.props.onExited(node);
      }
      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends({}, state.children);
          delete children[child.key];
          return {
            children: children
          };
        });
      }
    };
    _proto.render = function render() {
      var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;
      if (Component === null) {
        return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
          value: contextValue
        }, children);
      }
      return /*#__PURE__*/React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, /*#__PURE__*/React.createElement(Component, props, children));
    };
    return TransitionGroup;
  }(React.Component);
  TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * `<TransitionGroup>` renders a `<div>` by default. You can change this
     * behavior by providing a `component` prop.
     * If you use React v16+ and would like to avoid a wrapping `<div>` element
     * you can pass in `component={null}`. This is useful if the wrapping div
     * borks your css styles.
     */
    component: PropTypes.any,
    /**
     * A set of `<Transition>` components, that are toggled `in` and out as they
     * leave. the `<TransitionGroup>` will inject specific transition props, so
     * remember to spread them through if you are wrapping the `<Transition>` as
     * with our `<Fade>` example.
     *
     * While this component is meant for multiple `Transition` or `CSSTransition`
     * children, sometimes you may want to have a single transition child with
     * content that you want to be transitioned out and in when you change it
     * (e.g. routes, images etc.) In that case you can change the `key` prop of
     * the transition child as you change its content, this will cause
     * `TransitionGroup` to transition the child out and back in.
     */
    children: PropTypes.node,
    /**
     * A convenience prop that enables or disables appear animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    appear: PropTypes.bool,
    /**
     * A convenience prop that enables or disables enter animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    enter: PropTypes.bool,
    /**
     * A convenience prop that enables or disables exit animations
     * for all children. Note that specifying this will override any defaults set
     * on individual children Transitions.
     */
    exit: PropTypes.bool,
    /**
     * You may need to apply reactive updates to a child as it is exiting.
     * This is generally done by using `cloneElement` however in the case of an exiting
     * child the element has already been removed and not accessible to the consumer.
     *
     * If you do need to update a child as it leaves you can provide a `childFactory`
     * to wrap every child, even the ones that are leaving.
     *
     * @type Function(child: ReactElement) -> ReactElement
     */
    childFactory: PropTypes.func
  } : {};
  TransitionGroup.defaultProps = defaultProps;

  const reflow = node => node.scrollTop;
  function getTransitionProps(props, options) {
    const {
      timeout,
      easing,
      style = {}
    } = props;
    return {
      duration: style.transitionDuration ?? (typeof timeout === 'number' ? timeout : timeout[options.mode] || 0),
      easing: style.transitionTimingFunction ?? (typeof easing === 'object' ? easing[options.mode] : easing),
      delay: style.transitionDelay
    };
  }

  function getPaperUtilityClass(slot) {
    return generateUtilityClass('MuiPaper', slot);
  }
  generateUtilityClasses('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);

  const useUtilityClasses$9 = ownerState => {
    const {
      square,
      elevation,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
    };
    return composeClasses(slots, getPaperUtilityClass, classes);
  };
  const PaperRoot = styled('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
    }
  })(memoTheme(({
    theme
  }) => ({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create('box-shadow'),
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.square,
      style: {
        borderRadius: theme.shape.borderRadius
      }
    }, {
      props: {
        variant: 'outlined'
      },
      style: {
        border: `1px solid ${(theme.vars || theme).palette.divider}`
      }
    }, {
      props: {
        variant: 'elevation'
      },
      style: {
        boxShadow: 'var(--Paper-shadow)',
        backgroundImage: 'var(--Paper-overlay)'
      }
    }]
  })));
  const Paper = /*#__PURE__*/React__namespace.forwardRef(function Paper(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiPaper'
    });
    const theme = useTheme();
    const {
      className,
      component = 'div',
      elevation = 1,
      square = false,
      variant = 'elevation',
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      elevation,
      square,
      variant
    };
    const classes = useUtilityClasses$9(ownerState);
    if (process.env.NODE_ENV !== 'production') {
      if (theme.shadows[elevation] === undefined) {
        console.error([`MUI: The elevation provided <Paper elevation={${elevation}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${elevation}]\` is defined.`].join('\n'));
      }
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(PaperRoot, {
      as: component,
      ownerState: ownerState,
      className: clsx(classes.root, className),
      ref: ref,
      ...other,
      style: {
        ...(variant === 'elevation' && {
          '--Paper-shadow': (theme.vars || theme).shadows[elevation],
          ...(theme.vars && {
            '--Paper-overlay': theme.vars.overlays?.[elevation]
          }),
          ...(!theme.vars && theme.palette.mode === 'dark' && {
            '--Paper-overlay': `linear-gradient(${alpha('#fff', getOverlayAlpha(elevation))}, ${alpha('#fff', getOverlayAlpha(elevation))})`
          })
        }),
        ...other.style
      }
    });
  });
  process.env.NODE_ENV !== "production" ? Paper.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * Shadow depth, corresponds to `dp` in the spec.
     * It accepts values between 0 and 24 inclusive.
     * @default 1
     */
    elevation: chainPropTypes(integerPropType, props => {
      const {
        elevation,
        variant
      } = props;
      if (elevation > 0 && variant === 'outlined') {
        return new Error(`MUI: Combining \`elevation={${elevation}}\` with \`variant="${variant}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`);
      }
      return null;
    }),
    /**
     * If `true`, rounded corners are disabled.
     * @default false
     */
    square: PropTypes.bool,
    /**
     * @ignore
     */
    style: PropTypes.object,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    /**
     * The variant to use.
     * @default 'elevation'
     */
    variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['elevation', 'outlined']), PropTypes.string])
  } : void 0;

  /**
   * An internal function to create a Material UI slot.
   *
   * This is an advanced version of Base UI `useSlotProps` because Material UI allows leaf component to be customized via `component` prop
   * while Base UI does not need to support leaf component customization.
   *
   * @param {string} name: name of the slot
   * @param {object} parameters
   * @returns {[Slot, slotProps]} The slot's React component and the slot's props
   *
   * Note: the returned slot's props
   * - will never contain `component` prop.
   * - might contain `as` prop.
   */
  function useSlot(
  /**
   * The slot's name. All Material UI components should have `root` slot.
   *
   * If the name is `root`, the logic behaves differently from other slots,
   * e.g. the `externalForwardedProps` are spread to `root` slot but not other slots.
   */
  name, parameters) {
    const {
      className,
      elementType: initialElementType,
      ownerState,
      externalForwardedProps,
      internalForwardedProps,
      ...useSlotPropsParams
    } = parameters;
    const {
      component: rootComponent,
      slots = {
        [name]: undefined
      },
      slotProps = {
        [name]: undefined
      },
      ...other
    } = externalForwardedProps;
    const elementType = slots[name] || initialElementType;

    // `slotProps[name]` can be a callback that receives the component's ownerState.
    // `resolvedComponentsProps` is always a plain object.
    const resolvedComponentsProps = resolveComponentProps(slotProps[name], ownerState);
    const {
      props: {
        component: slotComponent,
        ...mergedProps
      },
      internalRef
    } = mergeSlotProps({
      className,
      ...useSlotPropsParams,
      externalForwardedProps: name === 'root' ? other : undefined,
      externalSlotProps: resolvedComponentsProps
    });
    const ref = useForkRef(internalRef, resolvedComponentsProps?.ref, parameters.ref);
    const LeafComponent = name === 'root' ? slotComponent || rootComponent : slotComponent;
    const props = appendOwnerState(elementType, {
      ...(name === 'root' && !rootComponent && !slots[name] && internalForwardedProps),
      ...(name !== 'root' && !slots[name] && internalForwardedProps),
      ...mergedProps,
      ...(LeafComponent && {
        as: LeafComponent
      }),
      ref
    }, ownerState);
    return [elementType, props];
  }

  /**
   * Lazy initialization container for the Ripple instance. This improves
   * performance by delaying mounting the ripple until it's needed.
   */
  class LazyRipple {
    /** React ref to the ripple instance */

    /** If the ripple component should be mounted */

    /** Promise that resolves when the ripple component is mounted */

    /** If the ripple component has been mounted */

    /** React state hook setter */

    static create() {
      return new LazyRipple();
    }
    static use() {
      /* eslint-disable */
      const ripple = useLazyRef(LazyRipple.create).current;
      const [shouldMount, setShouldMount] = React__namespace.useState(false);
      ripple.shouldMount = shouldMount;
      ripple.setShouldMount = setShouldMount;
      React__namespace.useEffect(ripple.mountEffect, [shouldMount]);
      /* eslint-enable */

      return ripple;
    }
    constructor() {
      this.ref = {
        current: null
      };
      this.mounted = null;
      this.didMount = false;
      this.shouldMount = false;
      this.setShouldMount = null;
    }
    mount() {
      if (!this.mounted) {
        this.mounted = createControlledPromise();
        this.shouldMount = true;
        this.setShouldMount(this.shouldMount);
      }
      return this.mounted;
    }
    mountEffect = () => {
      if (this.shouldMount && !this.didMount) {
        if (this.ref.current !== null) {
          this.didMount = true;
          this.mounted.resolve();
        }
      }
    };

    /* Ripple API */

    start(...args) {
      this.mount().then(() => this.ref.current?.start(...args));
    }
    stop(...args) {
      this.mount().then(() => this.ref.current?.stop(...args));
    }
    pulsate(...args) {
      this.mount().then(() => this.ref.current?.pulsate(...args));
    }
  }
  function useLazyRipple() {
    return LazyRipple.use();
  }
  function createControlledPromise() {
    let resolve;
    let reject;
    const p = new Promise((resolveFn, rejectFn) => {
      resolve = resolveFn;
      reject = rejectFn;
    });
    p.resolve = resolve;
    p.reject = reject;
    return p;
  }

  function Ripple(props) {
    const {
      className,
      classes,
      pulsate = false,
      rippleX,
      rippleY,
      rippleSize,
      in: inProp,
      onExited,
      timeout
    } = props;
    const [leaving, setLeaving] = React__namespace.useState(false);
    const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
    const rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX
    };
    const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
    if (!inProp && !leaving) {
      setLeaving(true);
    }
    React__namespace.useEffect(() => {
      if (!inProp && onExited != null) {
        // react-transition-group#onExited
        const timeoutId = setTimeout(onExited, timeout);
        return () => {
          clearTimeout(timeoutId);
        };
      }
      return undefined;
    }, [onExited, inProp, timeout]);
    return /*#__PURE__*/jsxRuntimeExports.jsx("span", {
      className: rippleClassName,
      style: rippleStyles,
      children: /*#__PURE__*/jsxRuntimeExports.jsx("span", {
        className: childClassName
      })
    });
  }
  process.env.NODE_ENV !== "production" ? Ripple.propTypes /* remove-proptypes */ = {
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    /**
     * @ignore - injected from TransitionGroup
     */
    in: PropTypes.bool,
    /**
     * @ignore - injected from TransitionGroup
     */
    onExited: PropTypes.func,
    /**
     * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
     */
    pulsate: PropTypes.bool,
    /**
     * Diameter of the ripple.
     */
    rippleSize: PropTypes.number,
    /**
     * Horizontal position of the ripple center.
     */
    rippleX: PropTypes.number,
    /**
     * Vertical position of the ripple center.
     */
    rippleY: PropTypes.number,
    /**
     * exit delay
     */
    timeout: PropTypes.number.isRequired
  } : void 0;

  const touchRippleClasses = generateUtilityClasses('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);

  const DURATION = 550;
  const DELAY_RIPPLE = 80;
  const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`;
  const exitKeyframe = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
  const pulsateKeyframe = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;
  const TouchRippleRoot = styled('span', {
    name: 'MuiTouchRipple',
    slot: 'Root'
  })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit'
  });

  // This `styled()` function invokes keyframes. `styled-components` only supports keyframes
  // in string templates. Do not convert these styles in JS object as it will break.
  const TouchRippleRipple = styled(Ripple, {
    name: 'MuiTouchRipple',
    slot: 'Ripple'
  })`
  opacity: 0;
  position: absolute;

  &.${touchRippleClasses.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${enterKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  &.${touchRippleClasses.ripplePulsate} {
    animation-duration: ${({
  theme
}) => theme.transitions.duration.shorter}ms;
  }

  & .${touchRippleClasses.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${touchRippleClasses.childLeaving} {
    opacity: 0;
    animation-name: ${exitKeyframe};
    animation-duration: ${DURATION}ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
  }

  & .${touchRippleClasses.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${pulsateKeyframe};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme
}) => theme.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`;

  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */
  const TouchRipple = /*#__PURE__*/React__namespace.forwardRef(function TouchRipple(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiTouchRipple'
    });
    const {
      center: centerProp = false,
      classes = {},
      className,
      ...other
    } = props;
    const [ripples, setRipples] = React__namespace.useState([]);
    const nextKey = React__namespace.useRef(0);
    const rippleCallback = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      if (rippleCallback.current) {
        rippleCallback.current();
        rippleCallback.current = null;
      }
    }, [ripples]);

    // Used to filter out mouse emulated events on mobile.
    const ignoringMouseDown = React__namespace.useRef(false);
    // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.
    const startTimer = useTimeout();

    // This is the hook called once the previous timeout is ready.
    const startTimerCommit = React__namespace.useRef(null);
    const container = React__namespace.useRef(null);
    const startCommit = React__namespace.useCallback(params => {
      const {
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      } = params;
      setRipples(oldRipples => [...oldRipples, /*#__PURE__*/jsxRuntimeExports.jsx(TouchRippleRipple, {
        classes: {
          ripple: clsx(classes.ripple, touchRippleClasses.ripple),
          rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
          ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
          child: clsx(classes.child, touchRippleClasses.child),
          childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
          childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
        },
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      }, nextKey.current)]);
      nextKey.current += 1;
      rippleCallback.current = cb;
    }, [classes]);
    const start = React__namespace.useCallback((event = {}, options = {}, cb = () => {}) => {
      const {
        pulsate = false,
        center = centerProp || options.pulsate,
        fakeElement = false // For test purposes
      } = options;
      if (event?.type === 'mousedown' && ignoringMouseDown.current) {
        ignoringMouseDown.current = false;
        return;
      }
      if (event?.type === 'touchstart') {
        ignoringMouseDown.current = true;
      }
      const element = fakeElement ? null : container.current;
      const rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      };

      // Get the size of the ripple
      let rippleX;
      let rippleY;
      let rippleSize;
      if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        const {
          clientX,
          clientY
        } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }
      if (center) {
        rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

        // For some reason the animation is broken on Mobile Chrome if the size is even.
        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
      }

      // Touche devices
      if (event?.touches) {
        // check that this isn't another touchstart due to multitouch
        // otherwise we will only clear a single timer when unmounting while two
        // are running
        if (startTimerCommit.current === null) {
          // Prepare the ripple effect.
          startTimerCommit.current = () => {
            startCommit({
              pulsate,
              rippleX,
              rippleY,
              rippleSize,
              cb
            });
          };
          // Delay the execution of the ripple effect.
          // We have to make a tradeoff with this delay value.
          startTimer.start(DELAY_RIPPLE, () => {
            if (startTimerCommit.current) {
              startTimerCommit.current();
              startTimerCommit.current = null;
            }
          });
        }
      } else {
        startCommit({
          pulsate,
          rippleX,
          rippleY,
          rippleSize,
          cb
        });
      }
    }, [centerProp, startCommit, startTimer]);
    const pulsate = React__namespace.useCallback(() => {
      start({}, {
        pulsate: true
      });
    }, [start]);
    const stop = React__namespace.useCallback((event, cb) => {
      startTimer.clear();

      // The touch interaction occurs too quickly.
      // We still want to show ripple effect.
      if (event?.type === 'touchend' && startTimerCommit.current) {
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.start(0, () => {
          stop(event, cb);
        });
        return;
      }
      startTimerCommit.current = null;
      setRipples(oldRipples => {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }
        return oldRipples;
      });
      rippleCallback.current = cb;
    }, [startTimer]);
    React__namespace.useImperativeHandle(ref, () => ({
      pulsate,
      start,
      stop
    }), [pulsate, start, stop]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TouchRippleRoot, {
      className: clsx(touchRippleClasses.root, classes.root, className),
      ref: container,
      ...other,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionGroup, {
        component: null,
        exit: true,
        children: ripples
      })
    });
  });
  process.env.NODE_ENV !== "production" ? TouchRipple.propTypes /* remove-proptypes */ = {
    /**
     * If `true`, the ripple starts at the center of the component
     * rather than at the point of interaction.
     */
    center: PropTypes.bool,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string
  } : void 0;

  function getButtonBaseUtilityClass(slot) {
    return generateUtilityClass('MuiButtonBase', slot);
  }
  const buttonBaseClasses = generateUtilityClasses('MuiButtonBase', ['root', 'disabled', 'focusVisible']);

  const useUtilityClasses$8 = ownerState => {
    const {
      disabled,
      focusVisible,
      focusVisibleClassName,
      classes
    } = ownerState;
    const slots = {
      root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
    };
    const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
    if (focusVisible && focusVisibleClassName) {
      composedClasses.root += ` ${focusVisibleClassName}`;
    }
    return composedClasses;
  };
  const ButtonBaseRoot = styled('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.
    },
    [`&.${buttonBaseClasses.disabled}`]: {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  });

  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */
  const ButtonBase = /*#__PURE__*/React__namespace.forwardRef(function ButtonBase(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiButtonBase'
    });
    const {
      action,
      centerRipple = false,
      children,
      className,
      component = 'button',
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      focusVisibleClassName,
      LinkComponent = 'a',
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      touchRippleRef,
      type,
      ...other
    } = props;
    const buttonRef = React__namespace.useRef(null);
    const ripple = useLazyRipple();
    const handleRippleRef = useForkRef(ripple.ref, touchRippleRef);
    const [focusVisible, setFocusVisible] = React__namespace.useState(false);
    if (disabled && focusVisible) {
      setFocusVisible(false);
    }
    React__namespace.useImperativeHandle(action, () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    }), []);
    const enableTouchRipple = ripple.shouldMount && !disableRipple && !disabled;
    React__namespace.useEffect(() => {
      if (focusVisible && focusRipple && !disableRipple) {
        ripple.pulsate();
      }
    }, [disableRipple, focusRipple, focusVisible, ripple]);
    const handleMouseDown = useRippleHandler(ripple, 'start', onMouseDown, disableTouchRipple);
    const handleContextMenu = useRippleHandler(ripple, 'stop', onContextMenu, disableTouchRipple);
    const handleDragLeave = useRippleHandler(ripple, 'stop', onDragLeave, disableTouchRipple);
    const handleMouseUp = useRippleHandler(ripple, 'stop', onMouseUp, disableTouchRipple);
    const handleMouseLeave = useRippleHandler(ripple, 'stop', event => {
      if (focusVisible) {
        event.preventDefault();
      }
      if (onMouseLeave) {
        onMouseLeave(event);
      }
    }, disableTouchRipple);
    const handleTouchStart = useRippleHandler(ripple, 'start', onTouchStart, disableTouchRipple);
    const handleTouchEnd = useRippleHandler(ripple, 'stop', onTouchEnd, disableTouchRipple);
    const handleTouchMove = useRippleHandler(ripple, 'stop', onTouchMove, disableTouchRipple);
    const handleBlur = useRippleHandler(ripple, 'stop', event => {
      if (!isFocusVisible(event.target)) {
        setFocusVisible(false);
      }
      if (onBlur) {
        onBlur(event);
      }
    }, false);
    const handleFocus = useEventCallback(event => {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }
      if (isFocusVisible(event.target)) {
        setFocusVisible(true);
        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }
      if (onFocus) {
        onFocus(event);
      }
    });
    const isNonNativeButton = () => {
      const button = buttonRef.current;
      return component && component !== 'button' && !(button.tagName === 'A' && button.href);
    };
    const handleKeyDown = useEventCallback(event => {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (focusRipple && !event.repeat && focusVisible && event.key === ' ') {
        ripple.stop(event, () => {
          ripple.start(event);
        });
      }
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }

      // Keyboard accessibility for non interactive elements
      if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
        event.preventDefault();
        if (onClick) {
          onClick(event);
        }
      }
    });
    const handleKeyUp = useEventCallback(event => {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
      if (focusRipple && event.key === ' ' && focusVisible && !event.defaultPrevented) {
        ripple.stop(event, () => {
          ripple.pulsate(event);
        });
      }
      if (onKeyUp) {
        onKeyUp(event);
      }

      // Keyboard accessibility for non interactive elements
      if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
        onClick(event);
      }
    });
    let ComponentProp = component;
    if (ComponentProp === 'button' && (other.href || other.to)) {
      ComponentProp = LinkComponent;
    }
    const buttonProps = {};
    if (ComponentProp === 'button') {
      buttonProps.type = type === undefined ? 'button' : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href && !other.to) {
        buttonProps.role = 'button';
      }
      if (disabled) {
        buttonProps['aria-disabled'] = disabled;
      }
    }
    const handleRef = useForkRef(ref, buttonRef);
    const ownerState = {
      ...props,
      centerRipple,
      component,
      disabled,
      disableRipple,
      disableTouchRipple,
      focusRipple,
      tabIndex,
      focusVisible
    };
    const classes = useUtilityClasses$8(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsxs(ButtonBaseRoot, {
      as: ComponentProp,
      className: clsx(classes.root, className),
      ownerState: ownerState,
      onBlur: handleBlur,
      onClick: onClick,
      onContextMenu: handleContextMenu,
      onFocus: handleFocus,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      onMouseDown: handleMouseDown,
      onMouseLeave: handleMouseLeave,
      onMouseUp: handleMouseUp,
      onDragLeave: handleDragLeave,
      onTouchEnd: handleTouchEnd,
      onTouchMove: handleTouchMove,
      onTouchStart: handleTouchStart,
      ref: handleRef,
      tabIndex: disabled ? -1 : tabIndex,
      type: type,
      ...buttonProps,
      ...other,
      children: [children, enableTouchRipple ? /*#__PURE__*/jsxRuntimeExports.jsx(TouchRipple, {
        ref: handleRippleRef,
        center: centerRipple,
        ...TouchRippleProps
      }) : null]
    });
  });
  function useRippleHandler(ripple, rippleAction, eventCallback, skipRippleAction = false) {
    return useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }
      if (!skipRippleAction) {
        ripple[rippleAction](event);
      }
      return true;
    });
  }
  process.env.NODE_ENV !== "production" ? ButtonBase.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * A ref for imperative actions.
     * It currently only supports `focusVisible()` action.
     */
    action: refType,
    /**
     * If `true`, the ripples are centered.
     * They won't start at the cursor interaction position.
     * @default false
     */
    centerRipple: PropTypes.bool,
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: elementTypeAcceptingRef$1,
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool,
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
     * @default false
     */
    disableRipple: PropTypes.bool,
    /**
     * If `true`, the touch ripple effect is disabled.
     * @default false
     */
    disableTouchRipple: PropTypes.bool,
    /**
     * If `true`, the base button will have a keyboard focus ripple.
     * @default false
     */
    focusRipple: PropTypes.bool,
    /**
     * This prop can help identify which element has keyboard focus.
     * The class name will be applied when the element gains the focus through keyboard interaction.
     * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
     * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
     * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
     * if needed.
     */
    focusVisibleClassName: PropTypes.string,
    /**
     * @ignore
     */
    href: PropTypes /* @typescript-to-proptypes-ignore */.any,
    /**
     * The component used to render a link when the `href` prop is provided.
     * @default 'a'
     */
    LinkComponent: PropTypes.elementType,
    /**
     * @ignore
     */
    onBlur: PropTypes.func,
    /**
     * @ignore
     */
    onClick: PropTypes.func,
    /**
     * @ignore
     */
    onContextMenu: PropTypes.func,
    /**
     * @ignore
     */
    onDragLeave: PropTypes.func,
    /**
     * @ignore
     */
    onFocus: PropTypes.func,
    /**
     * Callback fired when the component is focused with a keyboard.
     * We trigger a `onFocus` callback too.
     */
    onFocusVisible: PropTypes.func,
    /**
     * @ignore
     */
    onKeyDown: PropTypes.func,
    /**
     * @ignore
     */
    onKeyUp: PropTypes.func,
    /**
     * @ignore
     */
    onMouseDown: PropTypes.func,
    /**
     * @ignore
     */
    onMouseLeave: PropTypes.func,
    /**
     * @ignore
     */
    onMouseUp: PropTypes.func,
    /**
     * @ignore
     */
    onTouchEnd: PropTypes.func,
    /**
     * @ignore
     */
    onTouchMove: PropTypes.func,
    /**
     * @ignore
     */
    onTouchStart: PropTypes.func,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    /**
     * @default 0
     */
    tabIndex: PropTypes.number,
    /**
     * Props applied to the `TouchRipple` element.
     */
    TouchRippleProps: PropTypes.object,
    /**
     * A ref that points to the `TouchRipple` element.
     */
    touchRippleRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({
      current: PropTypes.shape({
        pulsate: PropTypes.func.isRequired,
        start: PropTypes.func.isRequired,
        stop: PropTypes.func.isRequired
      })
    })]),
    /**
     * @ignore
     */
    type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string])
  } : void 0;

  /**
   * Type guard to check if the object has a "main" property of type string.
   *
   * @param obj - the object to check
   * @returns boolean
   */
  function hasCorrectMainProperty(obj) {
    return typeof obj.main === 'string';
  }
  /**
   * Checks if the object conforms to the SimplePaletteColorOptions type.
   * The minimum requirement is that the object has a "main" property of type string, this is always checked.
   * Optionally, you can pass additional properties to check.
   *
   * @param obj - The object to check
   * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
   * @returns boolean
   */
  function checkSimplePaletteColorValues(obj, additionalPropertiesToCheck = []) {
    if (!hasCorrectMainProperty(obj)) {
      return false;
    }
    for (const value of additionalPropertiesToCheck) {
      if (!obj.hasOwnProperty(value) || typeof obj[value] !== 'string') {
        return false;
      }
    }
    return true;
  }

  /**
   * Creates a filter function used to filter simple palette color options.
   * The minimum requirement is that the object has a "main" property of type string, this is always checked.
   * Optionally, you can pass additional properties to check.
   *
   * @param additionalPropertiesToCheck - Array containing "light", "dark", and/or "contrastText"
   * @returns ([, value]: [any, PaletteColorOptions]) => boolean
   */
  function createSimplePaletteValueFilter(additionalPropertiesToCheck = []) {
    return ([, value]) => value && checkSimplePaletteColorValues(value, additionalPropertiesToCheck);
  }

  function getTypographyUtilityClass(slot) {
    return generateUtilityClass('MuiTypography', slot);
  }
  generateUtilityClasses('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);

  const v6Colors = {
    primary: true,
    secondary: true,
    error: true,
    info: true,
    success: true,
    warning: true,
    textPrimary: true,
    textSecondary: true,
    textDisabled: true
  };
  const extendSxProp = internal_createExtendSxProp();
  const useUtilityClasses$7 = ownerState => {
    const {
      align,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, ownerState.align !== 'inherit' && `align${capitalize(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
    };
    return composeClasses(slots, getTypographyUtilityClass, classes);
  };
  const TypographyRoot = styled('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
    }
  })(memoTheme(({
    theme
  }) => ({
    margin: 0,
    variants: [{
      props: {
        variant: 'inherit'
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit'
      }
    }, ...Object.entries(theme.typography).filter(([variant, value]) => variant !== 'inherit' && value && typeof value === 'object').map(([variant, value]) => ({
      props: {
        variant
      },
      style: value
    })), ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
      props: {
        color
      },
      style: {
        color: (theme.vars || theme).palette[color].main
      }
    })), ...Object.entries(theme.palette?.text || {}).filter(([, value]) => typeof value === 'string').map(([color]) => ({
      props: {
        color: `text${capitalize(color)}`
      },
      style: {
        color: (theme.vars || theme).palette.text[color]
      }
    })), {
      props: ({
        ownerState
      }) => ownerState.align !== 'inherit',
      style: {
        textAlign: 'var(--Typography-textAlign)'
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.noWrap,
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.gutterBottom,
      style: {
        marginBottom: '0.35em'
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  })));
  const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p'
  };
  const Typography = /*#__PURE__*/React__namespace.forwardRef(function Typography(inProps, ref) {
    const {
      color,
      ...themeProps
    } = useDefaultProps({
      props: inProps,
      name: 'MuiTypography'
    });
    const isSxColor = !v6Colors[color];
    // TODO: Remove `extendSxProp` in v7
    const props = extendSxProp({
      ...themeProps,
      ...(isSxColor && {
        color
      })
    });
    const {
      align = 'inherit',
      className,
      component,
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      variantMapping = defaultVariantMapping,
      ...other
    } = props;
    const ownerState = {
      ...props,
      align,
      color,
      className,
      component,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      variantMapping
    };
    const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
    const classes = useUtilityClasses$7(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TypographyRoot, {
      as: Component,
      ref: ref,
      className: clsx(classes.root, className),
      ...other,
      ownerState: ownerState,
      style: {
        ...(align !== 'inherit' && {
          '--Typography-textAlign': align
        }),
        ...other.style
      }
    });
  });
  process.env.NODE_ENV !== "production" ? Typography.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * Set the text-align on the component.
     * @default 'inherit'
     */
    align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
     */
    color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning', 'textPrimary', 'textSecondary', 'textDisabled']), PropTypes.string]),
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * If `true`, the text will have a bottom margin.
     * @default false
     */
    gutterBottom: PropTypes.bool,
    /**
     * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     *
     * Note that text overflow can only happen with block or inline-block level elements
     * (the element needs to have a width in order to overflow).
     * @default false
     */
    noWrap: PropTypes.bool,
    /**
     * If `true`, the element will be a paragraph element.
     * @default false
     * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
     */
    paragraph: PropTypes.bool,
    /**
     * @ignore
     */
    style: PropTypes.object,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    /**
     * Applies the theme typography styles.
     * @default 'body1'
     */
    variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), PropTypes.string]),
    /**
     * The component maps the variant prop to a range of different HTML element types.
     * For instance, subtitle1 to `<h6>`.
     * If you wish to change that mapping, you can provide your own.
     * Alternatively, you can use the `component` prop.
     * @default {
     *   h1: 'h1',
     *   h2: 'h2',
     *   h3: 'h3',
     *   h4: 'h4',
     *   h5: 'h5',
     *   h6: 'h6',
     *   subtitle1: 'h6',
     *   subtitle2: 'h6',
     *   body1: 'p',
     *   body2: 'p',
     *   inherit: 'p',
     * }
     */
    variantMapping: PropTypes /* @typescript-to-proptypes-ignore */.object
  } : void 0;

  function getContainer$1(container) {
    return typeof container === 'function' ? container() : container;
  }

  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   *
   * Demos:
   *
   * - [Portal](https://mui.com/material-ui/react-portal/)
   *
   * API:
   *
   * - [Portal API](https://mui.com/material-ui/api/portal/)
   */
  const Portal = /*#__PURE__*/React__namespace.forwardRef(function Portal(props, forwardedRef) {
    const {
      children,
      container,
      disablePortal = false
    } = props;
    const [mountNode, setMountNode] = React__namespace.useState(null);
    const handleRef = useForkRef(/*#__PURE__*/React__namespace.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
    useEnhancedEffect(() => {
      if (!disablePortal) {
        setMountNode(getContainer$1(container) || document.body);
      }
    }, [container, disablePortal]);
    useEnhancedEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(forwardedRef, mountNode);
        return () => {
          setRef(forwardedRef, null);
        };
      }
      return undefined;
    }, [forwardedRef, mountNode, disablePortal]);
    if (disablePortal) {
      if (/*#__PURE__*/React__namespace.isValidElement(children)) {
        const newProps = {
          ref: handleRef
        };
        return /*#__PURE__*/React__namespace.cloneElement(children, newProps);
      }
      return children;
    }
    return mountNode ? /*#__PURE__*/ReactDOM__namespace.createPortal(children, mountNode) : mountNode;
  });
  process.env.NODE_ENV !== "production" ? Portal.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The children to render into the `container`.
     */
    children: PropTypes.node,
    /**
     * An HTML element or function that returns one.
     * The `container` will have the portal children appended to it.
     *
     * You can also provide a callback, which is called in a React layout effect.
     * This lets you set the container from a ref, and also makes server-side rendering possible.
     *
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
    /**
     * The `children` will be under the DOM hierarchy of the parent component.
     * @default false
     */
    disablePortal: PropTypes.bool
  } : void 0;
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    Portal['propTypes' + ''] = exactProp(Portal.propTypes);
  }

  const styles = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  };

  /**
   * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */
  const Fade = /*#__PURE__*/React__namespace.forwardRef(function Fade(props, ref) {
    const theme = useTheme();
    const defaultTimeout = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition,
      ...other
    } = props;
    const nodeRef = React__namespace.useRef(null);
    const handleRef = useForkRef(nodeRef, getReactElementRef(children), ref);
    const normalizedTransitionCallback = callback => maybeIsAppearing => {
      if (callback) {
        const node = nodeRef.current;

        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };
    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      reflow(node); // So the animation always start from the start.

      const transitionProps = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);
      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback(node => {
      const transitionProps = getTransitionProps({
        style,
        timeout,
        easing
      }, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);
      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);
    const handleAddEndListener = next => {
      if (addEndListener) {
        // Old call signature before `react-transition-group` implemented `nodeRef`
        addEndListener(nodeRef.current, next);
      }
    };
    return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, {
      appear: appear,
      in: inProp,
      nodeRef: nodeRef ,
      onEnter: handleEnter,
      onEntered: handleEntered,
      onEntering: handleEntering,
      onExit: handleExit,
      onExited: handleExited,
      onExiting: handleExiting,
      addEndListener: handleAddEndListener,
      timeout: timeout,
      ...other,
      children: (state, childProps) => {
        return /*#__PURE__*/React__namespace.cloneElement(children, {
          style: {
            opacity: 0,
            visibility: state === 'exited' && !inProp ? 'hidden' : undefined,
            ...styles[state],
            ...style,
            ...children.props.style
          },
          ref: handleRef,
          ...childProps
        });
      }
    });
  });
  process.env.NODE_ENV !== "production" ? Fade.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * Add a custom transition end trigger. Called with the transitioning DOM
     * node and a done callback. Allows for more fine grained transition end
     * logic. Note: Timeouts are still used as a fallback if provided.
     */
    addEndListener: PropTypes.func,
    /**
     * Perform the enter transition when it first mounts if `in` is also `true`.
     * Set this to `false` to disable this behavior.
     * @default true
     */
    appear: PropTypes.bool,
    /**
     * A single child content element.
     */
    children: elementAcceptingRef.isRequired,
    /**
     * The transition timing function.
     * You may specify a single easing or a object containing enter and exit values.
     */
    easing: PropTypes.oneOfType([PropTypes.shape({
      enter: PropTypes.string,
      exit: PropTypes.string
    }), PropTypes.string]),
    /**
     * If `true`, the component will transition in.
     */
    in: PropTypes.bool,
    /**
     * @ignore
     */
    onEnter: PropTypes.func,
    /**
     * @ignore
     */
    onEntered: PropTypes.func,
    /**
     * @ignore
     */
    onEntering: PropTypes.func,
    /**
     * @ignore
     */
    onExit: PropTypes.func,
    /**
     * @ignore
     */
    onExited: PropTypes.func,
    /**
     * @ignore
     */
    onExiting: PropTypes.func,
    /**
     * @ignore
     */
    style: PropTypes.object,
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })])
  } : void 0;

  function getBackdropUtilityClass(slot) {
    return generateUtilityClass('MuiBackdrop', slot);
  }
  generateUtilityClasses('MuiBackdrop', ['root', 'invisible']);

  const removeOwnerState = props => {
    const {
      ownerState,
      ...rest
    } = props;
    return rest;
  };
  const useUtilityClasses$6 = ownerState => {
    const {
      classes,
      invisible
    } = ownerState;
    const slots = {
      root: ['root', invisible && 'invisible']
    };
    return composeClasses(slots, getBackdropUtilityClass, classes);
  };
  const BackdropRoot = styled('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.invisible && styles.invisible];
    }
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [{
      props: {
        invisible: true
      },
      style: {
        backgroundColor: 'transparent'
      }
    }]
  });
  const Backdrop = /*#__PURE__*/React__namespace.forwardRef(function Backdrop(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiBackdrop'
    });
    const {
      children,
      className,
      component = 'div',
      invisible = false,
      open,
      components = {},
      componentsProps = {},
      slotProps = {},
      slots = {},
      TransitionComponent: TransitionComponentProp,
      transitionDuration,
      ...other
    } = props;
    const ownerState = {
      ...props,
      component,
      invisible
    };
    const classes = useUtilityClasses$6(ownerState);
    const backwardCompatibleSlots = {
      transition: TransitionComponentProp,
      root: components.Root,
      ...slots
    };
    const backwardCompatibleSlotProps = {
      ...componentsProps,
      ...slotProps
    };
    const externalForwardedProps = {
      slots: backwardCompatibleSlots,
      slotProps: backwardCompatibleSlotProps
    };
    const [RootSlot, rootProps] = useSlot('root', {
      elementType: BackdropRoot,
      externalForwardedProps,
      className: clsx(classes.root, className),
      ownerState
    });
    const [TransitionSlot, transitionProps] = useSlot('transition', {
      elementType: Fade,
      externalForwardedProps,
      ownerState
    });
    const transitionPropsRemoved = removeOwnerState(transitionProps);
    return /*#__PURE__*/jsxRuntimeExports.jsx(TransitionSlot, {
      in: open,
      timeout: transitionDuration,
      ...other,
      ...transitionPropsRemoved,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(RootSlot, {
        "aria-hidden": true,
        ...rootProps,
        classes: classes,
        ref: ref,
        children: children
      })
    });
  });
  process.env.NODE_ENV !== "production" ? Backdrop.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * The components used for each slot inside.
     *
     * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
     *
     * @default {}
     */
    components: PropTypes.shape({
      Root: PropTypes.elementType
    }),
    /**
     * The extra props for the slot components.
     * You can override the existing props or add new ones.
     *
     * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
     *
     * @default {}
     */
    componentsProps: PropTypes.shape({
      root: PropTypes.object
    }),
    /**
     * If `true`, the backdrop is invisible.
     * It can be used when rendering a popover or a custom select component.
     * @default false
     */
    invisible: PropTypes.bool,
    /**
     * If `true`, the component is shown.
     */
    open: PropTypes.bool.isRequired,
    /**
     * The props used for each slot inside.
     * @default {}
     */
    slotProps: PropTypes.shape({
      root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      transition: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    }),
    /**
     * The components used for each slot inside.
     * @default {}
     */
    slots: PropTypes.shape({
      root: PropTypes.elementType,
      transition: PropTypes.elementType
    }),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    /**
     * The component used for the transition.
     * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Fade
     * @deprecated Use `slots.transition` instead. This prop will be removed in v7. See [Migrating from deprecated APIs](/material-ui/migration/migrating-from-deprecated-apis/) for more details.
     */
    TransitionComponent: PropTypes.elementType,
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     */
    transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })])
  } : void 0;

  function getButtonUtilityClass(slot) {
    return generateUtilityClass('MuiButton', slot);
  }
  const buttonClasses = generateUtilityClasses('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorError', 'colorInfo', 'colorWarning', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'icon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);

  /**
   * @ignore - internal component.
   */
  const ButtonGroupContext = /*#__PURE__*/React__namespace.createContext({});
  if (process.env.NODE_ENV !== 'production') {
    ButtonGroupContext.displayName = 'ButtonGroupContext';
  }

  /**
   * @ignore - internal component.
   */
  const ButtonGroupButtonContext = /*#__PURE__*/React__namespace.createContext(undefined);
  if (process.env.NODE_ENV !== 'production') {
    ButtonGroupButtonContext.displayName = 'ButtonGroupButtonContext';
  }

  const useUtilityClasses$5 = ownerState => {
    const {
      color,
      disableElevation,
      fullWidth,
      size,
      variant,
      classes
    } = ownerState;
    const slots = {
      root: ['root', variant, `${variant}${capitalize(color)}`, `size${capitalize(size)}`, `${variant}Size${capitalize(size)}`, `color${capitalize(color)}`, disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
      label: ['label'],
      startIcon: ['icon', 'startIcon', `iconSize${capitalize(size)}`],
      endIcon: ['icon', 'endIcon', `iconSize${capitalize(size)}`]
    };
    const composedClasses = composeClasses(slots, getButtonUtilityClass, classes);
    return {
      ...classes,
      // forward the focused, disabled, etc. classes to the ButtonBase
      ...composedClasses
    };
  };
  const commonIconStyles = [{
    props: {
      size: 'small'
    },
    style: {
      '& > *:nth-of-type(1)': {
        fontSize: 18
      }
    }
  }, {
    props: {
      size: 'medium'
    },
    style: {
      '& > *:nth-of-type(1)': {
        fontSize: 20
      }
    }
  }, {
    props: {
      size: 'large'
    },
    style: {
      '& > *:nth-of-type(1)': {
        fontSize: 22
      }
    }
  }];
  const ButtonRoot = styled(ButtonBase, {
    shouldForwardProp: prop => rootShouldForwardProp(prop) || prop === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${capitalize(ownerState.color)}`], styles[`size${capitalize(ownerState.size)}`], styles[`${ownerState.variant}Size${capitalize(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
    }
  })(memoTheme(({
    theme
  }) => {
    const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
    const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
    return {
      ...theme.typography.button,
      minWidth: 64,
      padding: '6px 16px',
      border: 0,
      borderRadius: (theme.vars || theme).shape.borderRadius,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none'
      },
      [`&.${buttonClasses.disabled}`]: {
        color: (theme.vars || theme).palette.action.disabled
      },
      variants: [{
        props: {
          variant: 'contained'
        },
        style: {
          color: `var(--variant-containedColor)`,
          backgroundColor: `var(--variant-containedBg)`,
          boxShadow: (theme.vars || theme).shadows[2],
          '&:hover': {
            boxShadow: (theme.vars || theme).shadows[4],
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              boxShadow: (theme.vars || theme).shadows[2]
            }
          },
          '&:active': {
            boxShadow: (theme.vars || theme).shadows[8]
          },
          [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: (theme.vars || theme).shadows[6]
          },
          [`&.${buttonClasses.disabled}`]: {
            color: (theme.vars || theme).palette.action.disabled,
            boxShadow: (theme.vars || theme).shadows[0],
            backgroundColor: (theme.vars || theme).palette.action.disabledBackground
          }
        }
      }, {
        props: {
          variant: 'outlined'
        },
        style: {
          padding: '5px 15px',
          border: '1px solid currentColor',
          borderColor: `var(--variant-outlinedBorder, currentColor)`,
          backgroundColor: `var(--variant-outlinedBg)`,
          color: `var(--variant-outlinedColor)`,
          [`&.${buttonClasses.disabled}`]: {
            border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
          }
        }
      }, {
        props: {
          variant: 'text'
        },
        style: {
          padding: '6px 8px',
          color: `var(--variant-textColor)`,
          backgroundColor: `var(--variant-textBg)`
        }
      }, ...Object.entries(theme.palette).filter(createSimplePaletteValueFilter()).map(([color]) => ({
        props: {
          color
        },
        style: {
          '--variant-textColor': (theme.vars || theme).palette[color].main,
          '--variant-outlinedColor': (theme.vars || theme).palette[color].main,
          '--variant-outlinedBorder': theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / 0.5)` : alpha(theme.palette[color].main, 0.5),
          '--variant-containedColor': (theme.vars || theme).palette[color].contrastText,
          '--variant-containedBg': (theme.vars || theme).palette[color].main,
          '@media (hover: hover)': {
            '&:hover': {
              '--variant-containedBg': (theme.vars || theme).palette[color].dark,
              '--variant-textBg': theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity),
              '--variant-outlinedBorder': (theme.vars || theme).palette[color].main,
              '--variant-outlinedBg': theme.vars ? `rgba(${theme.vars.palette[color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette[color].main, theme.palette.action.hoverOpacity)
            }
          }
        }
      })), {
        props: {
          color: 'inherit'
        },
        style: {
          color: 'inherit',
          borderColor: 'currentColor',
          '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
          '@media (hover: hover)': {
            '&:hover': {
              '--variant-containedBg': theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
              '--variant-textBg': theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity),
              '--variant-outlinedBg': theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.text.primary, theme.palette.action.hoverOpacity)
            }
          }
        }
      }, {
        props: {
          size: 'small',
          variant: 'text'
        },
        style: {
          padding: '4px 5px',
          fontSize: theme.typography.pxToRem(13)
        }
      }, {
        props: {
          size: 'large',
          variant: 'text'
        },
        style: {
          padding: '8px 11px',
          fontSize: theme.typography.pxToRem(15)
        }
      }, {
        props: {
          size: 'small',
          variant: 'outlined'
        },
        style: {
          padding: '3px 9px',
          fontSize: theme.typography.pxToRem(13)
        }
      }, {
        props: {
          size: 'large',
          variant: 'outlined'
        },
        style: {
          padding: '7px 21px',
          fontSize: theme.typography.pxToRem(15)
        }
      }, {
        props: {
          size: 'small',
          variant: 'contained'
        },
        style: {
          padding: '4px 10px',
          fontSize: theme.typography.pxToRem(13)
        }
      }, {
        props: {
          size: 'large',
          variant: 'contained'
        },
        style: {
          padding: '8px 22px',
          fontSize: theme.typography.pxToRem(15)
        }
      }, {
        props: {
          disableElevation: true
        },
        style: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          },
          [`&.${buttonClasses.focusVisible}`]: {
            boxShadow: 'none'
          },
          '&:active': {
            boxShadow: 'none'
          },
          [`&.${buttonClasses.disabled}`]: {
            boxShadow: 'none'
          }
        }
      }, {
        props: {
          fullWidth: true
        },
        style: {
          width: '100%'
        }
      }]
    };
  }));
  const ButtonStartIcon = styled('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.startIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
    }
  })({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [{
      props: {
        size: 'small'
      },
      style: {
        marginLeft: -2
      }
    }, ...commonIconStyles]
  });
  const ButtonEndIcon = styled('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.endIcon, styles[`iconSize${capitalize(ownerState.size)}`]];
    }
  })({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [{
      props: {
        size: 'small'
      },
      style: {
        marginRight: -2
      }
    }, ...commonIconStyles]
  });
  const Button = /*#__PURE__*/React__namespace.forwardRef(function Button(inProps, ref) {
    // props priority: `inProps` > `contextProps` > `themeDefaultProps`
    const contextProps = React__namespace.useContext(ButtonGroupContext);
    const buttonGroupButtonContextPositionClassName = React__namespace.useContext(ButtonGroupButtonContext);
    const resolvedProps = resolveProps(contextProps, inProps);
    const props = useDefaultProps({
      props: resolvedProps,
      name: 'MuiButton'
    });
    const {
      children,
      color = 'primary',
      component = 'button',
      className,
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      endIcon: endIconProp,
      focusVisibleClassName,
      fullWidth = false,
      size = 'medium',
      startIcon: startIconProp,
      type,
      variant = 'text',
      ...other
    } = props;
    const ownerState = {
      ...props,
      color,
      component,
      disabled,
      disableElevation,
      disableFocusRipple,
      fullWidth,
      size,
      type,
      variant
    };
    const classes = useUtilityClasses$5(ownerState);
    const startIcon = startIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonStartIcon, {
      className: classes.startIcon,
      ownerState: ownerState,
      children: startIconProp
    });
    const endIcon = endIconProp && /*#__PURE__*/jsxRuntimeExports.jsx(ButtonEndIcon, {
      className: classes.endIcon,
      ownerState: ownerState,
      children: endIconProp
    });
    const positionClassName = buttonGroupButtonContextPositionClassName || '';
    return /*#__PURE__*/jsxRuntimeExports.jsxs(ButtonRoot, {
      ownerState: ownerState,
      className: clsx(contextProps.className, classes.root, className, positionClassName),
      component: component,
      disabled: disabled,
      focusRipple: !disableFocusRipple,
      focusVisibleClassName: clsx(classes.focusVisible, focusVisibleClassName),
      ref: ref,
      type: type,
      ...other,
      classes: classes,
      children: [startIcon, children, endIcon]
    });
  });
  process.env.NODE_ENV !== "production" ? Button.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * The color of the component.
     * It supports both default and custom theme colors, which can be added as shown in the
     * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
     * @default 'primary'
     */
    color: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']), PropTypes.string]),
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * If `true`, the component is disabled.
     * @default false
     */
    disabled: PropTypes.bool,
    /**
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation: PropTypes.bool,
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple: PropTypes.bool,
    /**
     * If `true`, the ripple effect is disabled.
     *
     * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
     * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
     * @default false
     */
    disableRipple: PropTypes.bool,
    /**
     * Element placed after the children.
     */
    endIcon: PropTypes.node,
    /**
     * @ignore
     */
    focusVisibleClassName: PropTypes.string,
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth: PropTypes.bool,
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href: PropTypes.string,
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['small', 'medium', 'large']), PropTypes.string]),
    /**
     * Element placed before the children.
     */
    startIcon: PropTypes.node,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    /**
     * @ignore
     */
    type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
    /**
     * The variant to use.
     * @default 'text'
     */
    variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['contained', 'outlined', 'text']), PropTypes.string])
  } : void 0;

  // Is a vertical scrollbar displayed?
  function isOverflowing(container) {
    const doc = ownerDocument(container);
    if (doc.body === container) {
      return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
    }
    return container.scrollHeight > container.clientHeight;
  }
  function ariaHidden(element, hide) {
    if (hide) {
      element.setAttribute('aria-hidden', 'true');
    } else {
      element.removeAttribute('aria-hidden');
    }
  }
  function getPaddingRight(element) {
    return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
  }
  function isAriaHiddenForbiddenOnElement(element) {
    // The forbidden HTML tags are the ones from ARIA specification that
    // can be children of body and can't have aria-hidden attribute.
    // cf. https://www.w3.org/TR/html-aria/#docconformance
    const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
    const isForbiddenTagName = forbiddenTagNames.includes(element.tagName);
    const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
    return isForbiddenTagName || isInputHidden;
  }
  function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, hide) {
    const blacklist = [mountElement, currentElement, ...elementsToExclude];
    [].forEach.call(container.children, element => {
      const isNotExcludedElement = !blacklist.includes(element);
      const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
      if (isNotExcludedElement && isNotForbiddenElement) {
        ariaHidden(element, hide);
      }
    });
  }
  function findIndexOf(items, callback) {
    let idx = -1;
    items.some((item, index) => {
      if (callback(item)) {
        idx = index;
        return true;
      }
      return false;
    });
    return idx;
  }
  function handleContainer(containerInfo, props) {
    const restoreStyle = [];
    const container = containerInfo.container;
    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        // Compute the size before applying overflow hidden to avoid any scroll jumps.
        const scrollbarSize = getScrollbarSize(ownerWindow(container));
        restoreStyle.push({
          value: container.style.paddingRight,
          property: 'padding-right',
          el: container
        });
        // Use computed style, here to get the real padding to add our scrollbar width.
        container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

        // .mui-fixed is a global helper.
        const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
        [].forEach.call(fixedElements, element => {
          restoreStyle.push({
            value: element.style.paddingRight,
            property: 'padding-right',
            el: element
          });
          element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
        });
      }
      let scrollContainer;
      if (container.parentNode instanceof DocumentFragment) {
        scrollContainer = ownerDocument(container).body;
      } else {
        // Support html overflow-y: auto for scroll stability between pages
        // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
        const parent = container.parentElement;
        const containerWindow = ownerWindow(container);
        scrollContainer = parent?.nodeName === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
      }

      // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screensize shrink.
      restoreStyle.push({
        value: scrollContainer.style.overflow,
        property: 'overflow',
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowX,
        property: 'overflow-x',
        el: scrollContainer
      }, {
        value: scrollContainer.style.overflowY,
        property: 'overflow-y',
        el: scrollContainer
      });
      scrollContainer.style.overflow = 'hidden';
    }
    const restore = () => {
      restoreStyle.forEach(({
        value,
        el,
        property
      }) => {
        if (value) {
          el.style.setProperty(property, value);
        } else {
          el.style.removeProperty(property);
        }
      });
    };
    return restore;
  }
  function getHiddenSiblings(container) {
    const hiddenSiblings = [];
    [].forEach.call(container.children, element => {
      if (element.getAttribute('aria-hidden') === 'true') {
        hiddenSiblings.push(element);
      }
    });
    return hiddenSiblings;
  }
  /**
   * @ignore - do not document.
   *
   * Proper state management for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */
  class ModalManager {
    constructor() {
      this.modals = [];
      this.containers = [];
    }
    add(modal, container) {
      let modalIndex = this.modals.indexOf(modal);
      if (modalIndex !== -1) {
        return modalIndex;
      }
      modalIndex = this.modals.length;
      this.modals.push(modal);

      // If the modal we are adding is already in the DOM.
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }
      const hiddenSiblings = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
      const containerIndex = findIndexOf(this.containers, item => item.container === container);
      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }
      this.containers.push({
        modals: [modal],
        container,
        restore: null,
        hiddenSiblings
      });
      return modalIndex;
    }
    mount(modal, props) {
      const containerIndex = findIndexOf(this.containers, item => item.modals.includes(modal));
      const containerInfo = this.containers[containerIndex];
      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
    remove(modal, ariaHiddenState = true) {
      const modalIndex = this.modals.indexOf(modal);
      if (modalIndex === -1) {
        return modalIndex;
      }
      const containerIndex = findIndexOf(this.containers, item => item.modals.includes(modal));
      const containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1);

      // If that was the last modal in a container, clean up the container.
      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }
        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, ariaHiddenState);
        }
        ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
        // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null
        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }
      return modalIndex;
    }
    isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }

  // Inspired by https://github.com/focus-trap/tabbable
  const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
  function getTabIndex(node) {
    const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
    if (!Number.isNaN(tabindexAttr)) {
      return tabindexAttr;
    }

    // Browsers do not return `tabIndex` correctly for contentEditable nodes;
    // https://issues.chromium.org/issues/41283952
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    //  yet they are still part of the regular tab order; in FF, they get a default
    //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    //  order, consider their tab index to be 0.
    if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
      return 0;
    }
    return node.tabIndex;
  }
  function isNonTabbableRadio(node) {
    if (node.tagName !== 'INPUT' || node.type !== 'radio') {
      return false;
    }
    if (!node.name) {
      return false;
    }
    const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
    let roving = getRadio(`[name="${node.name}"]:checked`);
    if (!roving) {
      roving = getRadio(`[name="${node.name}"]`);
    }
    return roving !== node;
  }
  function isNodeMatchingSelectorFocusable(node) {
    if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
      return false;
    }
    return true;
  }
  function defaultGetTabbable(root) {
    const regularTabNodes = [];
    const orderedTabNodes = [];
    Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
      const nodeTabIndex = getTabIndex(node);
      if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
        return;
      }
      if (nodeTabIndex === 0) {
        regularTabNodes.push(node);
      } else {
        orderedTabNodes.push({
          documentOrder: i,
          tabIndex: nodeTabIndex,
          node: node
        });
      }
    });
    return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
  }
  function defaultIsEnabled() {
    return true;
  }

  /**
   * @ignore - internal component.
   */
  function FocusTrap(props) {
    const {
      children,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableRestoreFocus = false,
      getTabbable = defaultGetTabbable,
      isEnabled = defaultIsEnabled,
      open
    } = props;
    const ignoreNextEnforceFocus = React__namespace.useRef(false);
    const sentinelStart = React__namespace.useRef(null);
    const sentinelEnd = React__namespace.useRef(null);
    const nodeToRestore = React__namespace.useRef(null);
    const reactFocusEventTarget = React__namespace.useRef(null);
    // This variable is useful when disableAutoFocus is true.
    // It waits for the active element to move into the component to activate.
    const activated = React__namespace.useRef(false);
    const rootRef = React__namespace.useRef(null);
    const handleRef = useForkRef(getReactElementRef(children), rootRef);
    const lastKeydown = React__namespace.useRef(null);
    React__namespace.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }
      activated.current = !disableAutoFocus;
    }, [disableAutoFocus, open]);
    React__namespace.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }
      const doc = ownerDocument(rootRef.current);
      if (!rootRef.current.contains(doc.activeElement)) {
        if (!rootRef.current.hasAttribute('tabIndex')) {
          if (process.env.NODE_ENV !== 'production') {
            console.error(['MUI: The modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
          }
          rootRef.current.setAttribute('tabIndex', '-1');
        }
        if (activated.current) {
          rootRef.current.focus();
        }
      }
      return () => {
        // restoreLastFocus()
        if (!disableRestoreFocus) {
          // In IE11 it is possible for document.activeElement to be null resulting
          // in nodeToRestore.current being null.
          // Not all elements in IE11 have a focus method.
          // Once IE11 support is dropped the focus() call can be unconditional.
          if (nodeToRestore.current && nodeToRestore.current.focus) {
            ignoreNextEnforceFocus.current = true;
            nodeToRestore.current.focus();
          }
          nodeToRestore.current = null;
        }
      };
      // Missing `disableRestoreFocus` which is fine.
      // We don't support changing that prop on an open FocusTrap
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);
    React__namespace.useEffect(() => {
      // We might render an empty child.
      if (!open || !rootRef.current) {
        return;
      }
      const doc = ownerDocument(rootRef.current);
      const loopFocus = nativeEvent => {
        lastKeydown.current = nativeEvent;
        if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
          return;
        }

        // Make sure the next tab starts from the right place.
        // doc.activeElement refers to the origin.
        if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
          // We need to ignore the next contain as
          // it will try to move the focus back to the rootRef element.
          ignoreNextEnforceFocus.current = true;
          if (sentinelEnd.current) {
            sentinelEnd.current.focus();
          }
        }
      };
      const contain = () => {
        const rootElement = rootRef.current;

        // Cleanup functions are executed lazily in React 17.
        // Contain can be called between the component being unmounted and its cleanup function being run.
        if (rootElement === null) {
          return;
        }
        if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
          ignoreNextEnforceFocus.current = false;
          return;
        }

        // The focus is already inside
        if (rootElement.contains(doc.activeElement)) {
          return;
        }

        // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
        if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
          return;
        }

        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (doc.activeElement !== reactFocusEventTarget.current) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }
        if (!activated.current) {
          return;
        }
        let tabbable = [];
        if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
          tabbable = getTabbable(rootRef.current);
        }

        // one of the sentinel nodes was focused, so move the focus
        // to the first/last tabbable element inside the focus trap
        if (tabbable.length > 0) {
          const isShiftTab = Boolean(lastKeydown.current?.shiftKey && lastKeydown.current?.key === 'Tab');
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];
          if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
            if (isShiftTab) {
              focusPrevious.focus();
            } else {
              focusNext.focus();
            }
          }
          // no tabbable elements in the trap focus or the focus was outside of the focus trap
        } else {
          rootElement.focus();
        }
      };
      doc.addEventListener('focusin', contain);
      doc.addEventListener('keydown', loopFocus, true);

      // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
      // for example https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
      // Instead, we can look if the active element was restored on the BODY element.
      //
      // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
      // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
      const interval = setInterval(() => {
        if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
          contain();
        }
      }, 50);
      return () => {
        clearInterval(interval);
        doc.removeEventListener('focusin', contain);
        doc.removeEventListener('keydown', loopFocus, true);
      };
    }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
    const onFocus = event => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }
      activated.current = true;
      reactFocusEventTarget.current = event.target;
      const childrenPropsHandler = children.props.onFocus;
      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
    const handleFocusSentinel = event => {
      if (nodeToRestore.current === null) {
        nodeToRestore.current = event.relatedTarget;
      }
      activated.current = true;
    };
    return /*#__PURE__*/jsxRuntimeExports.jsxs(React__namespace.Fragment, {
      children: [/*#__PURE__*/jsxRuntimeExports.jsx("div", {
        tabIndex: open ? 0 : -1,
        onFocus: handleFocusSentinel,
        ref: sentinelStart,
        "data-testid": "sentinelStart"
      }), /*#__PURE__*/React__namespace.cloneElement(children, {
        ref: handleRef,
        onFocus
      }), /*#__PURE__*/jsxRuntimeExports.jsx("div", {
        tabIndex: open ? 0 : -1,
        onFocus: handleFocusSentinel,
        ref: sentinelEnd,
        "data-testid": "sentinelEnd"
      })]
    });
  }
  process.env.NODE_ENV !== "production" ? FocusTrap.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * A single child content element.
     */
    children: elementAcceptingRef,
    /**
     * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes.
     * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
     *
     * Generally this should never be set to `true` as it makes the focus trap less
     * accessible to assistive technologies, like screen readers.
     * @default false
     */
    disableAutoFocus: PropTypes.bool,
    /**
     * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
     *
     * Generally this should never be set to `true` as it makes the focus trap less
     * accessible to assistive technologies, like screen readers.
     * @default false
     */
    disableEnforceFocus: PropTypes.bool,
    /**
     * If `true`, the focus trap will not restore focus to previously focused element once
     * focus trap is hidden or unmounted.
     * @default false
     */
    disableRestoreFocus: PropTypes.bool,
    /**
     * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
     * For instance, you can provide the "tabbable" npm dependency.
     * @param {HTMLElement} root
     */
    getTabbable: PropTypes.func,
    /**
     * This prop extends the `open` prop.
     * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
     * This prop should be memoized.
     * It can be used to support multiple focus trap mounted at the same time.
     * @default function defaultIsEnabled(): boolean {
     *   return true;
     * }
     */
    isEnabled: PropTypes.func,
    /**
     * If `true`, focus is locked.
     */
    open: PropTypes.bool.isRequired
  } : void 0;
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line
    FocusTrap['propTypes' + ''] = exactProp(FocusTrap.propTypes);
  }

  function getContainer(container) {
    return typeof container === 'function' ? container() : container;
  }
  function getHasTransition(children) {
    return children ? children.props.hasOwnProperty('in') : false;
  }
  const noop = () => {};

  // A modal manager used to track and manage the state of open Modals.
  // Modals don't open on the server so this won't conflict with concurrent requests.
  const manager = new ModalManager();
  /**
   *
   * Demos:
   *
   * - [Modal](https://mui.com/base-ui/react-modal/#hook)
   *
   * API:
   *
   * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
   */
  function useModal(parameters) {
    const {
      container,
      disableEscapeKeyDown = false,
      disableScrollLock = false,
      closeAfterTransition = false,
      onTransitionEnter,
      onTransitionExited,
      children,
      onClose,
      open,
      rootRef
    } = parameters;

    // @ts-ignore internal logic
    const modal = React__namespace.useRef({});
    const mountNodeRef = React__namespace.useRef(null);
    const modalRef = React__namespace.useRef(null);
    const handleRef = useForkRef(modalRef, rootRef);
    const [exited, setExited] = React__namespace.useState(!open);
    const hasTransition = getHasTransition(children);
    let ariaHiddenProp = true;
    if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
      ariaHiddenProp = false;
    }
    const getDoc = () => ownerDocument(mountNodeRef.current);
    const getModal = () => {
      modal.current.modalRef = modalRef.current;
      modal.current.mount = mountNodeRef.current;
      return modal.current;
    };
    const handleMounted = () => {
      manager.mount(getModal(), {
        disableScrollLock
      });

      // Fix a bug on Chrome where the scroll isn't initially 0.
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
      }
    };
    const handleOpen = useEventCallback(() => {
      const resolvedContainer = getContainer(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer);

      // The element was already mounted.
      if (modalRef.current) {
        handleMounted();
      }
    });
    const isTopModal = () => manager.isTopModal(getModal());
    const handlePortalRef = useEventCallback(node => {
      mountNodeRef.current = node;
      if (!node) {
        return;
      }
      if (open && isTopModal()) {
        handleMounted();
      } else if (modalRef.current) {
        ariaHidden(modalRef.current, ariaHiddenProp);
      }
    });
    const handleClose = React__namespace.useCallback(() => {
      manager.remove(getModal(), ariaHiddenProp);
    }, [ariaHiddenProp]);
    React__namespace.useEffect(() => {
      return () => {
        handleClose();
      };
    }, [handleClose]);
    React__namespace.useEffect(() => {
      if (open) {
        handleOpen();
      } else if (!hasTransition || !closeAfterTransition) {
        handleClose();
      }
    }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
    const createHandleKeyDown = otherHandlers => event => {
      otherHandlers.onKeyDown?.(event);

      // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviors like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.
      if (event.key !== 'Escape' || event.which === 229 ||
      // Wait until IME is settled.
      !isTopModal()) {
        return;
      }
      if (!disableEscapeKeyDown) {
        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation();
        if (onClose) {
          onClose(event, 'escapeKeyDown');
        }
      }
    };
    const createHandleBackdropClick = otherHandlers => event => {
      otherHandlers.onClick?.(event);
      if (event.target !== event.currentTarget) {
        return;
      }
      if (onClose) {
        onClose(event, 'backdropClick');
      }
    };
    const getRootProps = (otherHandlers = {}) => {
      const propsEventHandlers = extractEventHandlers(parameters);

      // The custom event handlers shouldn't be spread on the root element
      delete propsEventHandlers.onTransitionEnter;
      delete propsEventHandlers.onTransitionExited;
      const externalEventHandlers = {
        ...propsEventHandlers,
        ...otherHandlers
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: 'presentation',
        ...externalEventHandlers,
        onKeyDown: createHandleKeyDown(externalEventHandlers),
        ref: handleRef
      };
    };
    const getBackdropProps = (otherHandlers = {}) => {
      const externalEventHandlers = otherHandlers;
      return {
        'aria-hidden': true,
        ...externalEventHandlers,
        onClick: createHandleBackdropClick(externalEventHandlers),
        open
      };
    };
    const getTransitionProps = () => {
      const handleEnter = () => {
        setExited(false);
        if (onTransitionEnter) {
          onTransitionEnter();
        }
      };
      const handleExited = () => {
        setExited(true);
        if (onTransitionExited) {
          onTransitionExited();
        }
        if (closeAfterTransition) {
          handleClose();
        }
      };
      return {
        onEnter: createChainedFunction(handleEnter, children?.props.onEnter ?? noop),
        onExited: createChainedFunction(handleExited, children?.props.onExited ?? noop)
      };
    };
    return {
      getRootProps,
      getBackdropProps,
      getTransitionProps,
      rootRef: handleRef,
      portalRef: handlePortalRef,
      isTopModal,
      exited,
      hasTransition
    };
  }

  function getModalUtilityClass(slot) {
    return generateUtilityClass('MuiModal', slot);
  }
  generateUtilityClasses('MuiModal', ['root', 'hidden', 'backdrop']);

  const useUtilityClasses$4 = ownerState => {
    const {
      open,
      exited,
      classes
    } = ownerState;
    const slots = {
      root: ['root', !open && exited && 'hidden'],
      backdrop: ['backdrop']
    };
    return composeClasses(slots, getModalUtilityClass, classes);
  };
  const ModalRoot = styled('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
    }
  })(memoTheme(({
    theme
  }) => ({
    position: 'fixed',
    zIndex: (theme.vars || theme).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.open && ownerState.exited,
      style: {
        visibility: 'hidden'
      }
    }]
  })));
  const ModalBackdrop = styled(Backdrop, {
    name: 'MuiModal',
    slot: 'Backdrop',
    overridesResolver: (props, styles) => {
      return styles.backdrop;
    }
  })({
    zIndex: -1
  });

  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/material-ui/api/dialog/)
   * - [Drawer](/material-ui/api/drawer/)
   * - [Menu](/material-ui/api/menu/)
   * - [Popover](/material-ui/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */
  const Modal = /*#__PURE__*/React__namespace.forwardRef(function Modal(inProps, ref) {
    const props = useDefaultProps({
      name: 'MuiModal',
      props: inProps
    });
    const {
      BackdropComponent = ModalBackdrop,
      BackdropProps,
      classes: classesProp,
      className,
      closeAfterTransition = false,
      children,
      container,
      component,
      components = {},
      componentsProps = {},
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onBackdropClick,
      onClose,
      onTransitionEnter,
      onTransitionExited,
      open,
      slotProps = {},
      slots = {},
      // eslint-disable-next-line react/prop-types
      theme,
      ...other
    } = props;
    const propsWithDefaults = {
      ...props,
      closeAfterTransition,
      disableAutoFocus,
      disableEnforceFocus,
      disableEscapeKeyDown,
      disablePortal,
      disableRestoreFocus,
      disableScrollLock,
      hideBackdrop,
      keepMounted
    };
    const {
      getRootProps,
      getBackdropProps,
      getTransitionProps,
      portalRef,
      isTopModal,
      exited,
      hasTransition
    } = useModal({
      ...propsWithDefaults,
      rootRef: ref
    });
    const ownerState = {
      ...propsWithDefaults,
      exited
    };
    const classes = useUtilityClasses$4(ownerState);
    const childProps = {};
    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = '-1';
    }

    // It's a Transition like component
    if (hasTransition) {
      const {
        onEnter,
        onExited
      } = getTransitionProps();
      childProps.onEnter = onEnter;
      childProps.onExited = onExited;
    }
    const externalForwardedProps = {
      ...other,
      slots: {
        root: components.Root,
        backdrop: components.Backdrop,
        ...slots
      },
      slotProps: {
        ...componentsProps,
        ...slotProps
      }
    };
    const [RootSlot, rootProps] = useSlot('root', {
      elementType: ModalRoot,
      externalForwardedProps,
      getSlotProps: getRootProps,
      additionalProps: {
        ref,
        as: component
      },
      ownerState,
      className: clsx(className, classes?.root, !ownerState.open && ownerState.exited && classes?.hidden)
    });
    const [BackdropSlot, backdropProps] = useSlot('backdrop', {
      elementType: BackdropComponent,
      externalForwardedProps,
      additionalProps: BackdropProps,
      getSlotProps: otherHandlers => {
        return getBackdropProps({
          ...otherHandlers,
          onClick: event => {
            if (onBackdropClick) {
              onBackdropClick(event);
            }
            if (otherHandlers?.onClick) {
              otherHandlers.onClick(event);
            }
          }
        });
      },
      className: clsx(BackdropProps?.className, classes?.backdrop),
      ownerState
    });
    const backdropRef = useForkRef(BackdropProps?.ref, backdropProps.ref);
    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }
    return /*#__PURE__*/jsxRuntimeExports.jsx(Portal, {
      ref: portalRef,
      container: container,
      disablePortal: disablePortal,
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(RootSlot, {
        ...rootProps,
        children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/jsxRuntimeExports.jsx(BackdropSlot, {
          ...backdropProps,
          ref: backdropRef
        }) : null, /*#__PURE__*/jsxRuntimeExports.jsx(FocusTrap, {
          disableEnforceFocus: disableEnforceFocus,
          disableAutoFocus: disableAutoFocus,
          disableRestoreFocus: disableRestoreFocus,
          isEnabled: isTopModal,
          open: open,
          children: /*#__PURE__*/React__namespace.cloneElement(children, childProps)
        })]
      })
    });
  });
  process.env.NODE_ENV !== "production" ? Modal.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * A backdrop component. This prop enables custom backdrop rendering.
     * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
     * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
     * @default styled(Backdrop, {
     *   name: 'MuiModal',
     *   slot: 'Backdrop',
     *   overridesResolver: (props, styles) => {
     *     return styles.backdrop;
     *   },
     * })({
     *   zIndex: -1,
     * })
     */
    BackdropComponent: PropTypes.elementType,
    /**
     * Props applied to the [`Backdrop`](https://mui.com/material-ui/api/backdrop/) element.
     * @deprecated Use `slotProps.backdrop` instead.
     */
    BackdropProps: PropTypes.object,
    /**
     * A single child content element.
     */
    children: elementAcceptingRef.isRequired,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * When set to true the Modal waits until a nested Transition is completed before closing.
     * @default false
     */
    closeAfterTransition: PropTypes.bool,
    /**
     * The component used for the root node.
     * Either a string to use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * The components used for each slot inside.
     *
     * @deprecated Use the `slots` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
     *
     * @default {}
     */
    components: PropTypes.shape({
      Backdrop: PropTypes.elementType,
      Root: PropTypes.elementType
    }),
    /**
     * The extra props for the slot components.
     * You can override the existing props or add new ones.
     *
     * @deprecated Use the `slotProps` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
     *
     * @default {}
     */
    componentsProps: PropTypes.shape({
      backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    }),
    /**
     * An HTML element or function that returns one.
     * The `container` will have the portal children appended to it.
     *
     * You can also provide a callback, which is called in a React layout effect.
     * This lets you set the container from a ref, and also makes server-side rendering possible.
     *
     * By default, it uses the body of the top-level document object,
     * so it's simply `document.body` most of the time.
     */
    container: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([HTMLElementType, PropTypes.func]),
    /**
     * If `true`, the modal will not automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes.
     * This also works correctly with any modal children that have the `disableAutoFocus` prop.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     * @default false
     */
    disableAutoFocus: PropTypes.bool,
    /**
     * If `true`, the modal will not prevent focus from leaving the modal while open.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     * @default false
     */
    disableEnforceFocus: PropTypes.bool,
    /**
     * If `true`, hitting escape will not fire the `onClose` callback.
     * @default false
     */
    disableEscapeKeyDown: PropTypes.bool,
    /**
     * The `children` will be under the DOM hierarchy of the parent component.
     * @default false
     */
    disablePortal: PropTypes.bool,
    /**
     * If `true`, the modal will not restore focus to previously focused element once
     * modal is hidden or unmounted.
     * @default false
     */
    disableRestoreFocus: PropTypes.bool,
    /**
     * Disable the scroll lock behavior.
     * @default false
     */
    disableScrollLock: PropTypes.bool,
    /**
     * If `true`, the backdrop is not rendered.
     * @default false
     */
    hideBackdrop: PropTypes.bool,
    /**
     * Always keep the children in the DOM.
     * This prop can be useful in SEO situation or
     * when you want to maximize the responsiveness of the Modal.
     * @default false
     */
    keepMounted: PropTypes.bool,
    /**
     * Callback fired when the backdrop is clicked.
     * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
     */
    onBackdropClick: PropTypes.func,
    /**
     * Callback fired when the component requests to be closed.
     * The `reason` parameter can optionally be used to control the response to `onClose`.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
     */
    onClose: PropTypes.func,
    /**
     * A function called when a transition enters.
     */
    onTransitionEnter: PropTypes.func,
    /**
     * A function called when a transition has exited.
     */
    onTransitionExited: PropTypes.func,
    /**
     * If `true`, the component is shown.
     */
    open: PropTypes.bool.isRequired,
    /**
     * The props used for each slot inside the Modal.
     * @default {}
     */
    slotProps: PropTypes.shape({
      backdrop: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
      root: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    }),
    /**
     * The components used for each slot inside the Modal.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots: PropTypes.shape({
      backdrop: PropTypes.elementType,
      root: PropTypes.elementType
    }),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
  } : void 0;

  function getDialogUtilityClass(slot) {
    return generateUtilityClass('MuiDialog', slot);
  }
  const dialogClasses = generateUtilityClasses('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);

  const DialogContext = /*#__PURE__*/React__namespace.createContext({});
  if (process.env.NODE_ENV !== 'production') {
    DialogContext.displayName = 'DialogContext';
  }

  const DialogBackdrop = styled(Backdrop, {
    name: 'MuiDialog',
    slot: 'Backdrop',
    overrides: (props, styles) => styles.backdrop
  })({
    // Improve scrollable dialog support.
    zIndex: -1
  });
  const useUtilityClasses$3 = ownerState => {
    const {
      classes,
      scroll,
      maxWidth,
      fullWidth,
      fullScreen
    } = ownerState;
    const slots = {
      root: ['root'],
      container: ['container', `scroll${capitalize(scroll)}`],
      paper: ['paper', `paperScroll${capitalize(scroll)}`, `paperWidth${capitalize(String(maxWidth))}`, fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
    };
    return composeClasses(slots, getDialogUtilityClass, classes);
  };
  const DialogRoot = styled(Modal, {
    name: 'MuiDialog',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    '@media print': {
      // Use !important to override the Modal inline-style.
      position: 'absolute !important'
    }
  });
  const DialogContainer = styled('div', {
    name: 'MuiDialog',
    slot: 'Container',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.container, styles[`scroll${capitalize(ownerState.scroll)}`]];
    }
  })({
    height: '100%',
    '@media print': {
      height: 'auto'
    },
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    variants: [{
      props: {
        scroll: 'paper'
      },
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, {
      props: {
        scroll: 'body'
      },
      style: {
        overflowY: 'auto',
        overflowX: 'hidden',
        textAlign: 'center',
        '&::after': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0'
        }
      }
    }]
  });
  const DialogPaper = styled(Paper, {
    name: 'MuiDialog',
    slot: 'Paper',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.paper, styles[`scrollPaper${capitalize(ownerState.scroll)}`], styles[`paperWidth${capitalize(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
    }
  })(memoTheme(({
    theme
  }) => ({
    margin: 32,
    position: 'relative',
    overflowY: 'auto',
    '@media print': {
      overflowY: 'visible',
      boxShadow: 'none'
    },
    variants: [{
      props: {
        scroll: 'paper'
      },
      style: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 64px)'
      }
    }, {
      props: {
        scroll: 'body'
      },
      style: {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'initial'
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.maxWidth,
      style: {
        maxWidth: 'calc(100% - 64px)'
      }
    }, {
      props: {
        maxWidth: 'xs'
      },
      style: {
        maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
        [`&.${dialogClasses.paperScrollBody}`]: {
          [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
            maxWidth: 'calc(100% - 64px)'
          }
        }
      }
    }, ...Object.keys(theme.breakpoints.values).filter(maxWidth => maxWidth !== 'xs').map(maxWidth => ({
      props: {
        maxWidth
      },
      style: {
        maxWidth: `${theme.breakpoints.values[maxWidth]}${theme.breakpoints.unit}`,
        [`&.${dialogClasses.paperScrollBody}`]: {
          [theme.breakpoints.down(theme.breakpoints.values[maxWidth] + 32 * 2)]: {
            maxWidth: 'calc(100% - 64px)'
          }
        }
      }
    })), {
      props: ({
        ownerState
      }) => ownerState.fullWidth,
      style: {
        width: 'calc(100% - 64px)'
      }
    }, {
      props: ({
        ownerState
      }) => ownerState.fullScreen,
      style: {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: 'none',
        borderRadius: 0,
        [`&.${dialogClasses.paperScrollBody}`]: {
          margin: 0,
          maxWidth: '100%'
        }
      }
    }]
  })));

  /**
   * Dialogs are overlaid modal paper based components with a backdrop.
   */
  const Dialog = /*#__PURE__*/React__namespace.forwardRef(function Dialog(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiDialog'
    });
    const theme = useTheme();
    const defaultTransitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    };
    const {
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledbyProp,
      'aria-modal': ariaModal = true,
      BackdropComponent,
      BackdropProps,
      children,
      className,
      disableEscapeKeyDown = false,
      fullScreen = false,
      fullWidth = false,
      maxWidth = 'sm',
      onBackdropClick,
      onClick,
      onClose,
      open,
      PaperComponent = Paper,
      PaperProps = {},
      scroll = 'paper',
      TransitionComponent = Fade,
      transitionDuration = defaultTransitionDuration,
      TransitionProps,
      ...other
    } = props;
    const ownerState = {
      ...props,
      disableEscapeKeyDown,
      fullScreen,
      fullWidth,
      maxWidth,
      scroll
    };
    const classes = useUtilityClasses$3(ownerState);
    const backdropClick = React__namespace.useRef();
    const handleMouseDown = event => {
      // We don't want to close the dialog when clicking the dialog content.
      // Make sure the event starts and ends on the same DOM element.
      backdropClick.current = event.target === event.currentTarget;
    };
    const handleBackdropClick = event => {
      if (onClick) {
        onClick(event);
      }

      // Ignore the events not coming from the "backdrop".
      if (!backdropClick.current) {
        return;
      }
      backdropClick.current = null;
      if (onBackdropClick) {
        onBackdropClick(event);
      }
      if (onClose) {
        onClose(event, 'backdropClick');
      }
    };
    const ariaLabelledby = useId(ariaLabelledbyProp);
    const dialogContextValue = React__namespace.useMemo(() => {
      return {
        titleId: ariaLabelledby
      };
    }, [ariaLabelledby]);
    return /*#__PURE__*/jsxRuntimeExports.jsx(DialogRoot, {
      className: clsx(classes.root, className),
      closeAfterTransition: true,
      components: {
        Backdrop: DialogBackdrop
      },
      componentsProps: {
        backdrop: {
          transitionDuration,
          as: BackdropComponent,
          ...BackdropProps
        }
      },
      disableEscapeKeyDown: disableEscapeKeyDown,
      onClose: onClose,
      open: open,
      ref: ref,
      onClick: handleBackdropClick,
      ownerState: ownerState,
      ...other,
      children: /*#__PURE__*/jsxRuntimeExports.jsx(TransitionComponent, {
        appear: true,
        in: open,
        timeout: transitionDuration,
        role: "presentation",
        ...TransitionProps,
        children: /*#__PURE__*/jsxRuntimeExports.jsx(DialogContainer, {
          className: clsx(classes.container),
          onMouseDown: handleMouseDown,
          ownerState: ownerState,
          children: /*#__PURE__*/jsxRuntimeExports.jsx(DialogPaper, {
            as: PaperComponent,
            elevation: 24,
            role: "dialog",
            "aria-describedby": ariaDescribedby,
            "aria-labelledby": ariaLabelledby,
            "aria-modal": ariaModal,
            ...PaperProps,
            className: clsx(classes.paper, PaperProps.className),
            ownerState: ownerState,
            children: /*#__PURE__*/jsxRuntimeExports.jsx(DialogContext.Provider, {
              value: dialogContextValue,
              children: children
            })
          })
        })
      })
    });
  });
  process.env.NODE_ENV !== "production" ? Dialog.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The id(s) of the element(s) that describe the dialog.
     */
    'aria-describedby': PropTypes.string,
    /**
     * The id(s) of the element(s) that label the dialog.
     */
    'aria-labelledby': PropTypes.string,
    /**
     * Informs assistive technologies that the element is modal.
     * It's added on the element with role="dialog".
     * @default true
     */
    'aria-modal': PropTypes.oneOfType([PropTypes.oneOf(['false', 'true']), PropTypes.bool]),
    /**
     * A backdrop component. This prop enables custom backdrop rendering.
     * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
     * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
     * @default styled(Backdrop, {
     *   name: 'MuiModal',
     *   slot: 'Backdrop',
     *   overridesResolver: (props, styles) => {
     *     return styles.backdrop;
     *   },
     * })({
     *   zIndex: -1,
     * })
     */
    BackdropComponent: PropTypes.elementType,
    /**
     * @ignore
     */
    BackdropProps: PropTypes.object,
    /**
     * Dialog children, usually the included sub-components.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * If `true`, hitting escape will not fire the `onClose` callback.
     * @default false
     */
    disableEscapeKeyDown: PropTypes.bool,
    /**
     * If `true`, the dialog is full-screen.
     * @default false
     */
    fullScreen: PropTypes.bool,
    /**
     * If `true`, the dialog stretches to `maxWidth`.
     *
     * Notice that the dialog width grow is limited by the default margin.
     * @default false
     */
    fullWidth: PropTypes.bool,
    /**
     * Determine the max-width of the dialog.
     * The dialog width grows with the size of the screen.
     * Set to `false` to disable `maxWidth`.
     * @default 'sm'
     */
    maxWidth: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]), PropTypes.string]),
    /**
     * Callback fired when the backdrop is clicked.
     * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
     */
    onBackdropClick: PropTypes.func,
    /**
     * @ignore
     */
    onClick: PropTypes.func,
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {object} event The event source of the callback.
     * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
     */
    onClose: PropTypes.func,
    /**
     * If `true`, the component is shown.
     */
    open: PropTypes.bool.isRequired,
    /**
     * The component used to render the body of the dialog.
     * @default Paper
     */
    PaperComponent: PropTypes.elementType,
    /**
     * Props applied to the [`Paper`](https://mui.com/material-ui/api/paper/) element.
     * @default {}
     */
    PaperProps: PropTypes.object,
    /**
     * Determine the container for scrolling the dialog.
     * @default 'paper'
     */
    scroll: PropTypes.oneOf(['body', 'paper']),
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object]),
    /**
     * The component used for the transition.
     * [Follow this guide](https://mui.com/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
     * @default Fade
     */
    TransitionComponent: PropTypes.elementType,
    /**
     * The duration for the transition, in milliseconds.
     * You may specify a single timeout for all transitions, or individually with an object.
     * @default {
     *   enter: theme.transitions.duration.enteringScreen,
     *   exit: theme.transitions.duration.leavingScreen,
     * }
     */
    transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
      appear: PropTypes.number,
      enter: PropTypes.number,
      exit: PropTypes.number
    })]),
    /**
     * Props applied to the transition element.
     * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
     */
    TransitionProps: PropTypes.object
  } : void 0;

  function getDialogActionsUtilityClass(slot) {
    return generateUtilityClass('MuiDialogActions', slot);
  }
  generateUtilityClasses('MuiDialogActions', ['root', 'spacing']);

  const useUtilityClasses$2 = ownerState => {
    const {
      classes,
      disableSpacing
    } = ownerState;
    const slots = {
      root: ['root', !disableSpacing && 'spacing']
    };
    return composeClasses(slots, getDialogActionsUtilityClass, classes);
  };
  const DialogActionsRoot = styled('div', {
    name: 'MuiDialogActions',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, !ownerState.disableSpacing && styles.spacing];
    }
  })({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto',
    variants: [{
      props: ({
        ownerState
      }) => !ownerState.disableSpacing,
      style: {
        '& > :not(style) ~ :not(style)': {
          marginLeft: 8
        }
      }
    }]
  });
  const DialogActions = /*#__PURE__*/React__namespace.forwardRef(function DialogActions(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiDialogActions'
    });
    const {
      className,
      disableSpacing = false,
      ...other
    } = props;
    const ownerState = {
      ...props,
      disableSpacing
    };
    const classes = useUtilityClasses$2(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(DialogActionsRoot, {
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref,
      ...other
    });
  });
  process.env.NODE_ENV !== "production" ? DialogActions.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * If `true`, the actions do not have additional margin.
     * @default false
     */
    disableSpacing: PropTypes.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
  } : void 0;

  function getDialogContentUtilityClass(slot) {
    return generateUtilityClass('MuiDialogContent', slot);
  }
  generateUtilityClasses('MuiDialogContent', ['root', 'dividers']);

  function getDialogTitleUtilityClass(slot) {
    return generateUtilityClass('MuiDialogTitle', slot);
  }
  const dialogTitleClasses = generateUtilityClasses('MuiDialogTitle', ['root']);

  const useUtilityClasses$1 = ownerState => {
    const {
      classes,
      dividers
    } = ownerState;
    const slots = {
      root: ['root', dividers && 'dividers']
    };
    return composeClasses(slots, getDialogContentUtilityClass, classes);
  };
  const DialogContentRoot = styled('div', {
    name: 'MuiDialogContent',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const {
        ownerState
      } = props;
      return [styles.root, ownerState.dividers && styles.dividers];
    }
  })(memoTheme(({
    theme
  }) => ({
    flex: '1 1 auto',
    // Add iOS momentum scrolling for iOS < 13.0
    WebkitOverflowScrolling: 'touch',
    overflowY: 'auto',
    padding: '20px 24px',
    variants: [{
      props: ({
        ownerState
      }) => ownerState.dividers,
      style: {
        padding: '16px 24px',
        borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
        borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
      }
    }, {
      props: ({
        ownerState
      }) => !ownerState.dividers,
      style: {
        [`.${dialogTitleClasses.root} + &`]: {
          paddingTop: 0
        }
      }
    }]
  })));
  const DialogContent = /*#__PURE__*/React__namespace.forwardRef(function DialogContent(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiDialogContent'
    });
    const {
      className,
      dividers = false,
      ...other
    } = props;
    const ownerState = {
      ...props,
      dividers
    };
    const classes = useUtilityClasses$1(ownerState);
    return /*#__PURE__*/jsxRuntimeExports.jsx(DialogContentRoot, {
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref,
      ...other
    });
  });
  process.env.NODE_ENV !== "production" ? DialogContent.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * Display the top and bottom dividers.
     * @default false
     */
    dividers: PropTypes.bool,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
  } : void 0;

  const useUtilityClasses = ownerState => {
    const {
      classes
    } = ownerState;
    const slots = {
      root: ['root']
    };
    return composeClasses(slots, getDialogTitleUtilityClass, classes);
  };
  const DialogTitleRoot = styled(Typography, {
    name: 'MuiDialogTitle',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root
  })({
    padding: '16px 24px',
    flex: '0 0 auto'
  });
  const DialogTitle = /*#__PURE__*/React__namespace.forwardRef(function DialogTitle(inProps, ref) {
    const props = useDefaultProps({
      props: inProps,
      name: 'MuiDialogTitle'
    });
    const {
      className,
      id: idProp,
      ...other
    } = props;
    const ownerState = props;
    const classes = useUtilityClasses(ownerState);
    const {
      titleId = idProp
    } = React__namespace.useContext(DialogContext);
    return /*#__PURE__*/jsxRuntimeExports.jsx(DialogTitleRoot, {
      component: "h2",
      className: clsx(classes.root, className),
      ownerState: ownerState,
      ref: ref,
      variant: "h6",
      id: idProp ?? titleId,
      ...other
    });
  });
  process.env.NODE_ENV !== "production" ? DialogTitle.propTypes /* remove-proptypes */ = {
    // ┌────────────────────────────── Warning ──────────────────────────────┐
    // │ These PropTypes are generated from the TypeScript type definitions. │
    // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
    // └─────────────────────────────────────────────────────────────────────┘
    /**
     * The content of the component.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.object,
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * @ignore
     */
    id: PropTypes.string,
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
  } : void 0;

  var LoginDialog = function LoginDialog(_ref) {
    var clientId = _ref.clientId;
      _ref.redirectUrl;
    var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];
    var _useState3 = React.useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      providers = _useState4[0],
      setProviders = _useState4[1];
    React.useEffect(function () {
      var fetchProviders = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var response, data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return fetch("http://localhost:8100/providers/".concat(clientId), {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-trusted-source': 'login-widget'
                  }
                });
              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();
              case 6:
                data = _context.sent;
                setProviders(data.providers);
                _context.next = 13;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                console.error('Error fetching providers:', _context.t0);
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[0, 10]]);
        }));
        return function fetchProviders() {
          return _ref2.apply(this, arguments);
        };
      }();
      fetchProviders();
    }, []);
    var handleOpen = function handleOpen() {
      return setOpen(true);
    };
    var handleClose = function handleClose() {
      return setOpen(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-center"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: handleOpen,
      className: "px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-900 text-white font-semibold rounded-lg shadow-lg hover:from-violet-600 hover:to-violet-900 transition"
    }, "Login Widget"), /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: handleClose,
      fullWidth: true,
      maxWidth: "sm",
      className: "p-4 rounded-lg shadow-2xl"
    }, /*#__PURE__*/React.createElement(DialogTitle, {
      className: "text-center text-3xl font-semibold text-gray-800"
    }, "Select a Login Provider"), /*#__PURE__*/React.createElement(DialogContent, {
      className: "bg-gray-50 rounded-lg py-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center space-y-4 mt-4"
    }, providers.length > 0 ? providers.map(function (provider) {
      return /*#__PURE__*/React.createElement("button", {
        key: provider.id,
        className: "w-full px-6 py-3 bg-white text-gray-800 font-medium border border-gray-300 rounded-lg shadow-sm hover:bg-blue-50 transition-transform transform hover:scale-105",
        onClick: function onClick() {
          return alert("Logging in with ".concat(provider.name));
        }
      }, "Login with ", provider.name);
    }) : /*#__PURE__*/React.createElement("div", {
      className: "text-gray-500"
    }, "Loading providers..."))), /*#__PURE__*/React.createElement(DialogActions, {
      className: "bg-gray-100 p-4 rounded-b-lg"
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: handleClose,
      className: "text-blue-500 font-medium"
    }, "Cancel"))));
  };

  return LoginDialog;

}));
//# sourceMappingURL=login-widget.js.map
