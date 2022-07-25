(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    10: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(27),
        __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          24,
        ),
        _util_accessibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          69,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          13,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getChildrenStyle = function getChildrenStyle(_ref, index) {
          var direction = _ref.direction,
            theme = _ref.theme,
            space = _ref.space,
            verticalSpace = _ref.verticalSpace,
            horizontalSpace = _ref.horizontalSpace,
            cropEndSpace = _ref.cropEndSpace,
            children = _ref.children;
          if (direction === 'vertical') {
            var childStyle = [{marginBottom: theme.space[space]}];
            return (
              index === 0 && childStyle.push({marginTop: theme.space[space]}),
              horizontalSpace &&
                childStyle.push({
                  marginHorizontal: theme.space[horizontalSpace],
                }),
              cropEndSpace &&
                (index === 0 && childStyle.push({marginTop: 0}),
                index ===
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.count(
                    children,
                  ) -
                    1 && childStyle.push({marginBottom: 0})),
              childStyle
            );
          }
          var _childStyle = [{marginRight: theme.space[space]}];
          return (
            index === 0 && _childStyle.push({marginLeft: theme.space[space]}),
            verticalSpace &&
              _childStyle.push({
                marginVertical: theme.space[verticalSpace],
              }),
            cropEndSpace &&
              (index === 0 && _childStyle.push({marginLeft: 0}),
              index ===
                react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.count(
                  children,
                ) -
                  1 && _childStyle.push({marginRight: 0})),
            _childStyle
          );
        },
        Stack = react__WEBPACK_IMPORTED_MODULE_5___default.a.forwardRef(
          function(props, ref) {
            var theme = Object(
                _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__.b,
              )(),
              Container = props.scrollable
                ? react_native__WEBPACK_IMPORTED_MODULE_6__.ScrollView
                : react_native__WEBPACK_IMPORTED_MODULE_6__.View,
              direction = props.direction,
              children = (props.style, props.children),
              otherProps = _objectWithoutProperties(props, [
                'direction',
                'style',
                'children',
              ]);
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              Container,
              _extends({ref: ref}, otherProps, {
                style: [
                  {backgroundColor: theme.colors[props.background]},
                  props.direction === 'horizontal' ? styles.container : {},
                  props.style,
                ],
              }),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.Children.toArray(
                children,
              ).map(function(item, index) {
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_6__.View,
                  {
                    style: getChildrenStyle(
                      Object.assign(
                        {},
                        Object(
                          _util_accessibility__WEBPACK_IMPORTED_MODULE_9__.b,
                        )(otherProps),
                        {
                          direction: direction,
                          children: children,
                          theme: theme,
                        },
                      ),
                      index,
                    ),
                    key: index,
                  },
                  item,
                );
              }),
            );
          },
        );
      (Stack.propTypes = {
        style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
        ]),
        space: _util_prop_types__WEBPACK_IMPORTED_MODULE_10__.c,
        horizontalSpace: _util_prop_types__WEBPACK_IMPORTED_MODULE_10__.c,
        verticalSpace: _util_prop_types__WEBPACK_IMPORTED_MODULE_10__.c,
        children: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element,
        ]).isRequired,
        direction: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([
          'vertical',
          'horizontal',
        ]).isRequired,
        cropEndSpace: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        background: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        scrollable: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
      }),
        (Stack.defaultProps = {
          space: 'medium',
          horizontalSpace: 'none',
          verticalSpace: 'none',
          cropEndSpace: !1,
          direction: 'vertical',
          scrollable: !1,
          background: 'transparent',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_6__.StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          flexGrow: 1,
          flexWrap: 'wrap',
        },
      });
      (Stack.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Stack',
        props: {
          space: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'spaces'},
            required: !1,
            description: '',
          },
          horizontalSpace: {
            defaultValue: {value: "'none'", computed: !1},
            type: {name: 'custom', raw: 'spaces'},
            required: !1,
            description: '',
          },
          verticalSpace: {
            defaultValue: {value: "'none'", computed: !1},
            type: {name: 'custom', raw: 'spaces'},
            required: !1,
            description: '',
          },
          cropEndSpace: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          direction: {
            defaultValue: {value: "'vertical'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'vertical'", computed: !1},
                {value: "'horizontal'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          scrollable: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          background: {
            defaultValue: {value: "'transparent'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          children: {
            type: {name: 'union', value: [{name: 'array'}, {name: 'element'}]},
            required: !0,
            description: '',
          },
        },
      }),
        (__webpack_exports__.a = Stack),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Layout/Stack.js'] = {
            name: 'Stack',
            docgenInfo: Stack.__docgenInfo,
            path: 'src/Layout/Stack.js',
          });
    },
    110: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            space = _ref.space,
            background = _ref.background;
          return {
            padding: theme.space[space],
            background: theme.colors[background],
            alignItems: 'center',
            justifyContent: 'center',
          };
        },
        Box = function Box(props) {
          var theme = Object(
            _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.b,
          )();
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.View,
            _extends({}, props, {
              style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                [
                  getContainerStyle(Object.assign({}, props, {theme: theme})),
                  props.style,
                ],
              ),
            }),
            props.children,
          );
        };
      (Box.displayName = 'Box'),
        (Box.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
          ]),
          background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          space: _util_prop_types__WEBPACK_IMPORTED_MODULE_5__.c,
          children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
            ],
          ).isRequired,
        }),
        (Box.defaultProps = {space: 'medium', background: 'transparent'}),
        (Box.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Box',
          props: {
            space: {
              defaultValue: {value: "'md'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            background: {
              defaultValue: {value: "'transparent'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            style: {
              type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
              required: !1,
              description: '',
            },
            children: {
              type: {
                name: 'union',
                value: [{name: 'array'}, {name: 'element'}],
              },
              required: !0,
              description: '',
            },
          },
        }),
        (__webpack_exports__.a = Box),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Layout/Box.js'] = {
            name: 'Box',
            docgenInfo: Box.__docgenInfo,
            path: 'src/Layout/Box.js',
          });
    },
    111: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            space = _ref.space,
            background = _ref.background,
            flex = _ref.flex,
            flexDirection = _ref.flexDirection,
            alignItems = _ref.alignItems,
            justifyContent = _ref.justifyContent,
            flexWrap = _ref.flexWrap,
            alignContent = _ref.alignContent,
            alignSelf = _ref.alignSelf,
            styles = {
              flex: flex,
              flexDirection: flexDirection,
              alignItems: alignItems,
              justifyContent: justifyContent,
              padding: theme.space[space],
              background: theme.colors[background],
            };
          return (
            flexWrap && (styles.flexWrap = flexWrap),
            alignContent && (styles.alignContent = alignContent),
            alignSelf && (styles.alignSelf = alignSelf),
            styles
          );
        },
        Flex = function Flex(props) {
          var theme = Object(
            _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.b,
          )();
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.View,
            _extends({}, props, {
              style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                [
                  getContainerStyle(Object.assign({}, props, {theme: theme})),
                  props.style,
                ],
              ),
            }),
            props.children,
          );
        };
      (Flex.displayName = 'Flex'),
        (Flex.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
          ]),
          background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          space: _util_prop_types__WEBPACK_IMPORTED_MODULE_5__.c,
          flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(
            ['row', 'column', 'row-reverse', 'column-reverse'],
          ),
          alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
          ]),
          alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'flex-start',
            'flex-end',
            'center',
            'stretch',
            'baseline',
          ]),
          justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(
            [
              'flex-start',
              'flex-end',
              'center',
              'space-between',
              'space-around',
              'space-evenly',
            ],
          ),
          alignContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(
            [
              'flex-start',
              'flex-end',
              'center',
              'space-between',
              'space-around',
              'space-evenly',
            ],
          ),
          flex: prop_types__WEBPACK_IMPORTED_MODULE_3__.number,
          flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'no-wrap',
            'wrap',
            'wrap-reverse',
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
            ],
          ).isRequired,
        }),
        (Flex.defaultProps = {
          flex: 1,
          flexDirection: 'row',
          space: 'medium',
          background: 'transparent',
        }),
        (Flex.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Flex',
          props: {
            flex: {
              defaultValue: {value: '1', computed: !1},
              type: {name: 'number'},
              required: !1,
              description: '',
            },
            flexDirection: {
              defaultValue: {value: "'row'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'row'", computed: !1},
                  {value: "'column'", computed: !1},
                  {value: "'row-reverse'", computed: !1},
                  {value: "'column-reverse'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            space: {
              defaultValue: {value: "'md'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            background: {
              defaultValue: {value: "'transparent'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            style: {
              type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
              required: !1,
              description: '',
            },
            alignItems: {
              type: {
                name: 'enum',
                value: [
                  {value: "'flex-start'", computed: !1},
                  {value: "'flex-end'", computed: !1},
                  {value: "'center'", computed: !1},
                  {value: "'stretch'", computed: !1},
                  {value: "'baseline'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            alignSelf: {
              type: {
                name: 'enum',
                value: [
                  {value: "'flex-start'", computed: !1},
                  {value: "'flex-end'", computed: !1},
                  {value: "'center'", computed: !1},
                  {value: "'stretch'", computed: !1},
                  {value: "'baseline'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            justifyContent: {
              type: {
                name: 'enum',
                value: [
                  {value: "'flex-start'", computed: !1},
                  {value: "'flex-end'", computed: !1},
                  {value: "'center'", computed: !1},
                  {value: "'space-between'", computed: !1},
                  {value: "'space-around'", computed: !1},
                  {value: "'space-evenly'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            alignContent: {
              type: {
                name: 'enum',
                value: [
                  {value: "'flex-start'", computed: !1},
                  {value: "'flex-end'", computed: !1},
                  {value: "'center'", computed: !1},
                  {value: "'space-between'", computed: !1},
                  {value: "'space-around'", computed: !1},
                  {value: "'space-evenly'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            flexWrap: {
              type: {
                name: 'enum',
                value: [
                  {value: "'no-wrap'", computed: !1},
                  {value: "'wrap'", computed: !1},
                  {value: "'wrap-reverse'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            children: {
              type: {
                name: 'union',
                value: [{name: 'array'}, {name: 'element'}],
              },
              required: !0,
              description: '',
            },
          },
        }),
        (__webpack_exports__.a = Flex),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Layout/Flex.js'] = {
            name: 'Flex',
            docgenInfo: Flex.__docgenInfo,
            path: 'src/Layout/Flex.js',
          });
    },
    1165: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        (0, __webpack_require__(439).configure)(
          [
            __webpack_require__(1166),
            __webpack_require__(1168),
            __webpack_require__(1170),
            __webpack_require__(1172),
            __webpack_require__(1174),
          ],
          module,
          !1,
        );
      }.call(this, __webpack_require__(250)(module)));
    },
    1166: function(module, exports, __webpack_require__) {
      var map = {'./GetStarted.stories.mdx': 1167};
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1166);
    },
    1167: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function() {
          return __page;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {title: 'Guide|Get Started', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'get-started'},
            'Get Started',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'React Native Design System',
            ),
            " is a set of design rules and component library that lets you prototype faster with easy to use cross-platform components. Let's get started!",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'install'},
            'Install',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Simply go to the command line and run this command.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-sh'},
              'yarn add react-native-design-system\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can use ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'yarn',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'npm',
            ),
            ' as per your choice.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-sh'},
              'npm install react-native-design-system\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'This library needs ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'react-native-vector-icons',
            ),
            ' so go on and install that too to get all the cool icons. Check out ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'a',
              {
                parentName: 'p',
                href:
                  'https://github.com/oblador/react-native-vector-icons#installation',
                target: '_blank',
                rel: 'nofollow noopener noreferrer',
              },
              'Install guide',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'React Native Design System uses a centralized theme to provide consistency across all the components.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h3',
            {
              id:
                'step-1-import-themeprovider-and-theme-then-wrap-your-root-component',
            },
            'Step 1. Import ThemeProvider and theme then wrap your root component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'This step is important. We are passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ' as context value that each component will access.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "//your root component\nimport {ThemeProvider, theme} from 'react-native-design-system';\n\nfunction App() {\n  return (\n    <ThemeProvider value={theme}>\n      <Root />\n    </ThemeProvider>\n  );\n}\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h3',
            {id: 'step-2-use-component'},
            'Step 2. Use component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "//inside any file\nimport {Button} from 'react-native-design-system';\n\nfunction HomeScreen() {\n  return <Button>Press Me</Button>;\n}\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            "That's pretty much it. ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            " file contains configuration for all the components. Don't worry, you can easily customize it. Let me show how:",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'customize'},
            'Customize',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You just need to import ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ', reassign the value you want to change and pass it to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'ThemeProvider',
            ),
            '. Example:',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('br', {
              parentName: 'p',
            }),
            '\n',
            'Default primary color is blue but you like orange so you can simply do:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {ThemeProvider, theme} from 'react-native-design-system';\n\ntheme.colors.primary = 'orange';\n\nfunction App() {\n  return (\n    <ThemeProvider value={theme}>\n      <Root />\n    </ThemeProvider>\n  );\n}\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'And we are done!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              'You can see all the configurations available on the theme page.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'if-you-have-a-lot-of-customizations'},
            'If you have a lot of customizations',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'This is just a personal approach, you can do as you prefer. What I usually do is create a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme.config.js',
            ),
            ' file and add all my customizations there.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "//theme.config.js at root\nimport {theme} from 'react-native-design-system';\n\ntheme.colors = {\n  default: '#000',\n  heading: '#999',\n  subtle: '#333',\n  gray: '#757575',\n  disabled: '#78909c',\n  white: '#f8f8f8',\n};\n\nexport default theme;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Now, I will just import ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ' from here and pass it to my ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'ThemeProvider',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {ThemeProvider} from 'react-native-design-system';\nimport theme from './theme.config.js';\n\nfunction App() {\n  return (\n    <ThemeProvider value={theme}>\n      <Root />\n    </ThemeProvider>\n  );\n}\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              'Please make sure to pass all the keys while reassigning any object inside the theme.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Storybook provide interactive playground to test the component in all possible scenarios. There is a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'playground',
            ),
            ' story at the end of each component. Click on that and switch to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Canvas',
            ),
            ' to access ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Knobs',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Actions',
            ),
            ' addons.',
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = {docsOnly: !0};
      const componentMeta = {
          title: 'Guide|Get Started',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1168: function(module, exports, __webpack_require__) {
      var map = {'./DesignRules.stories.mdx': 1169};
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1168);
    },
    1169: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function() {
          return __page;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {title: 'Guide|Design Rules', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'design-rules'},
            'Design Rules',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'These are some design rules that this library follows. It is based on the four key aspects that I considered while creating this.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              "Feel free to send a PR for corrections, these are personal opinion and I'm here to learn. 😅",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'low-surface-area'},
            'Low surface area',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Most of the props are common across all components or they are the same as their parent component imported from React Native. This makes sure that you do not have to learn a whole set of extra props or just use what you already know.',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)('br', {
              parentName: 'p',
            }),
            '\n',
            'For example:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              "If it's a Button, it receives all the props of Touchable component of React Native.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              "If it's a Modal, it receives all the props of Modal.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'Each component receives a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'size',
              ),
              ' prop whose value can be one of these: ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'xs',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'sm',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'md',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'lg',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '2xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '3xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '4xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '5xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '6xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '7xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '8xl',
              ),
              ', & ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '9xl',
              ),
              '. You just have to pass ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'size',
              ),
              " prop with one of these value and you're done.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'Another example could be ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'color',
              ),
              ' prop. You can pass one of the colors defined in ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'brandColor',
              ),
              ' of theme to any component.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              "If it's a layout based component like ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'Box',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'Stack',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'Inline',
              ),
              ' or our best friend ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'Card',
              ),
              ' then it receives a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'space',
              ),
              ' prop. This also takes one of the values between ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'xs',
              ),
              ' and ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '9xl',
              ),
              ' ( with an addition of ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'space="none"',
              ),
              ') and provide appropriate spacing between components.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'Each component receives a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'style',
              ),
              ' and a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'textStyle',
              ),
              " prop (if there is a text involved). This is for some rare cases when you have to override the default styling. It's preferable to tweak the ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'theme',
              ),
              ' instead to maintain consistency and avoid adding that ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'style',
              ),
              ' again and again.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'These props are common to all the components. Other component-specific props are pretty straight forward too.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'speed'},
            'Speed',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'For most of the cases, default styles like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'size={medium}',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space={medium}',
            ),
            " will be enough. In other cases, it's just two to three props max to achieve any desired result. This makes it faster to prototype. The layout components make it easier to achieve the desired screen layout with ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' props. See the playground in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Stack',
            ),
            ' documentation.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'One of the key aspects of pixel-perfect design is the spacing between components. This design system proposes two things:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'ol',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ol'},
              'Every UI component has a margin of 0.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ol'},
              'The spacing of any component will be determined by its parent Layout component.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'The separation of concerns makes the job easier. Layout component should take care of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' only and UI component should worry about UI only i.e., ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'color',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'size',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'consistency'},
            'Consistency',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'The correct balance of freedom and consistency is hard to achieve.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'ol',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ol'},
              'For freedom, you get straight forward props like ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'color',
              ),
              ' and ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'size',
              ),
              '.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ol'},
              'For consistency, you need to define these configurations inside theme file i.e ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'strong',
                {parentName: 'li'},
                'Single source of truth',
              ),
              '.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'It helps in maintaining uniformity across all the usage. It also allows you to have several choices and use them as needed. Check out the theme section of this guide for the default configuration.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'connection'},
            'Connection',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Big problems are always more manageable when broken into smaller pieces. The design language of the system is broken down into color, typography, size, and space. These API is followed by each component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h2',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are basically two types of colors:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'strong',
                {parentName: 'li'},
                'brandColor:',
              ),
              ' "primary", "secondary", "tertiary", "background", "disabled", "semitransparent".',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'strong',
                {parentName: 'li'},
                'textColor:',
              ),
              ' "default", "heading", "gray", "subtle", "disabled", and "white"',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h2',
            {id: 'typography'},
            'Typography',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'To keep things simple and consistent. There are two choices for fonts to use:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'heading',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'text',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h2',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'The available sizes you can use is ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'xs',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'sm',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'md',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'lg',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '2xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '3xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '4xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '5xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '6xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '7xl',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '8xl',
              ),
              ', & ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '9xl',
              ),
              '. The default is ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '"md"',
              ),
              ' and it will be applied if are not passing anything.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'Font size is also similar and it ranges from "xs" to "9xl".',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h2',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Space also shares similar API as size but with one addition. You can also pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '"none"',
            ),
            ' with the range of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '"xs"',
            ),
            ' to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '"9xl"',
            ),
            '. Space is a dedicated prop for layout components like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Stack',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Inline',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Box',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Card',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              "You can contribute to the theme. Please share what are the common color tokens you use, what are the common font sizes that you use in any app, etc. Let's make the theme config more generic together.",
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = {docsOnly: !0};
      const componentMeta = {
          title: 'Guide|Design Rules',
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1170: function(module, exports, __webpack_require__) {
      var map = {'./Theme.stories.mdx': 1171};
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1170);
    },
    1171: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function() {
          return __page;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {title: 'Guide|Theme', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'the-list-includes-all-the-theme-variables'},
            'The list includes all the theme variables.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-json'},
              "{\n  fontSize: {\n    xxsmall: 11,\n    xsmall: 12.5,\n    small: 14,\n    medium: 16,\n    large: 20,\n    xlarge: 26,\n    xxlarge: 32,\n  },\n  size: {\n    xxsmall: 10,\n    xsmall: 12,\n    small: 14,\n    medium: 16,\n    large: 18,\n    xlarge: 20,\n    xxlarge: 22,\n  },\n  actionButtonSize: {\n    xxsmall: 30,\n    xsmall: 40,\n    small: 50,\n    medium: 60,\n    large: 70,\n    xlarge: 80,\n    xxlarge: 90,\n  },\n  buttonSize: {\n    xxsmall: 8,\n    xsmall: 10,\n    small: 12,\n    medium: 14,\n    large: 16,\n    xlarge: 18,\n    xxlarge: 20,\n  },\n  buttonWidth: {\n    xxsmall: 100,\n    xsmall: 120,\n    small: 140,\n    medium: 160,\n    large: 180,\n    xlarge: 200,\n    xxlarge: 220,\n  },\n  iconSize: {\n    xxsmall: 16,\n    xsmall: 18,\n    small: 22,\n    medium: 26,\n    large: 28,\n    xlarge: 32,\n    xxlarge: 36,\n  },\n  avatarSize: {\n    xxsmall: 40,\n    xsmall: 60,\n    small: 80,\n    medium: 90,\n    large: 110,\n    xlarge: 120,\n    xxlarge: 140,\n  },\n  badgeSize: {\n    xxsmall: 10,\n    xsmall: 11,\n    small: 12,\n    medium: 13,\n    large: 14,\n    xlarge: 16,\n    xxlarge: 18,\n  },\n  miniBadgeSize: {\n    xxsmall: 10,\n    xsmall: 11,\n    small: 12,\n    medium: 15,\n    large: 17,\n    xlarge: 19,\n    xxlarge: 21,\n  },\n  space: {\n    xxsmall: 5,\n    xsmall: 7.5,\n    small: 10,\n    medium: 12,\n    large: 14,\n    xlarge: 16,\n    xxlarge: 18,\n  },\n  space: {\n    none: 0,\n    xxsmall: 2.5,\n    xsmall: 5,\n    small: 7.5,\n    medium: 10,\n    large: 12.5,\n    xlarge: 15,\n    xxlarge: 20,\n  },\n  space: {\n    none: 0,\n    xxsmall: 5,\n    xsmall: 10,\n    small: 12,\n    medium: 16,\n    large: 20,\n    xlarge: 24,\n    xxlarge: 32,\n  },\n  indicatorSize: {\n    xxsmall: 0.8,\n    xsmall: 0.9,\n    small: 1,\n    medium: 1.1,\n    large: 1.25,\n    xlarge: 1.5,\n    xxlarge: 1.7,\n  },\n  colors: {\n    // brand colors\n    primary: colors.blue[600],\n    secondary: colors.yellow[800],\n    // action colors\n    success: colors.green[500],\n    error: colors.red[500],\n    warning: colors.yellow[800],\n    disabled: colors.bluegray[100],\n    disabledText: colors.bluegray[300],\n    // background color\n    backgroundDark: '#fff',\n    backgroundLight: '#f8f8f8',\n    foregound: colors.gray[100],\n\n    // text colors\n    heading: colors.black[800],\n    para: colors.black[300],\n    subtle: colors.gray[600],\n    // extras\n    transparent: 'transparent',\n    semitransparent: 'rgba(0, 0, 0, 0.3)',\n    outline: 'rgba(204, 214, 221, .5)',\n    white: '#fff',\n  },\n};\n",
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = {docsOnly: !0};
      const componentMeta = {title: 'Guide|Theme', includeStories: ['__page']},
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1172: function(module, exports, __webpack_require__) {
      var map = {'./Colors.stories.mdx': 1173};
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1172);
    },
    1173: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function() {
          return __page;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
        _src_util_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {title: 'Guide|Colors', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'colors'},
            'Colors',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'These are all the colors that you can use.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "//usage\nimport {colors} from 'react-native-design-system';\n\ntheme.colors.primary = colors['lime-A700'];\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.c,
            {mdxType: 'ColorPalette'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native__WEBPACK_IMPORTED_MODULE_3__.FlatList,
              {
                data: Object.keys(
                  _src_util_colors__WEBPACK_IMPORTED_MODULE_4__.a,
                ).filter(
                  item =>
                    typeof _src_util_colors__WEBPACK_IMPORTED_MODULE_4__.a[
                      item
                    ] === 'string',
                ),
                keyExtractor: (hex, index) => index.toString(),
                renderItem: ({item: shade}) =>
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.b,
                    {
                      title: shade,
                      subtitle: shade
                        .toUpperCase()
                        .split('-')
                        .join(' '),
                      colors: [
                        _src_util_colors__WEBPACK_IMPORTED_MODULE_4__.a[shade],
                      ],
                      mdxType: 'ColorItem',
                    },
                  ),
                mdxType: 'FlatList',
              },
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = {docsOnly: !0};
      const componentMeta = {title: 'Guide|Colors', includeStories: ['__page']},
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1174: function(module, exports, __webpack_require__) {
      var map = {
        './ActionButton/ActionButton.stories.mdx': 1175,
        './Avatar/Avatar.stories.mdx': 1178,
        './Badge/Badge.stories.mdx': 1179,
        './Button/Button.stories.mdx': 1180,
        './Button/MenuAddButton.stories.mdx': 1200,
        './Card/Card.stories.mdx': 1182,
        './CheckBox/CheckBox.stories.mdx': 1201,
        './CircularProgressBar/CircularProgressBar.stories.mdx': 1183,
        './Deck/Deck.stories.mdx': 1184,
        './FullScreenLoader/FullScreenLoader.stories.mdx': 1185,
        './Header/Header.stories.mdx': 1186,
        './Input/Input.stories.mdx': 1202,
        './Layout/Box.stories.mdx': 1188,
        './Layout/Flex.stories.mdx': 1189,
        './Layout/Inline.stories.mdx': 1190,
        './Layout/Stack.stories.mdx': 1191,
        './ListItem/ListItem.stories.mdx': 1192,
        './Overlay/Overlay.stories.mdx': 1193,
        './RadioButton/RadioButton.stories.mdx': 1203,
        './SearchBar/SearchBar.stories.mdx': 1194,
        './Text/Text.stories.mdx': 1195,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return map[req];
      }
      (webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1174);
    },
    1175: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'sizes', function() {
          return sizes;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'icon', function() {
          return icon;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _ActionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'ActionButton',
              component: _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'actionbutton'},
            'ActionButton',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            "ActionButton is the buttons you use on your landing screen to guide users towards your goal action. It's the part of the landing screen that the user needs to click to take the action you want them to take.",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {ActionButton} from 'react-native-design-system';\n\n<ActionButton onPress={() => this.handlePress()} />;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {
              of: _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Props',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: '2xl',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xl',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'lg',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'md',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'sm',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'primary',
                    size: 'md',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'secondary',
                    size: 'md',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'success',
                    size: 'md',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
                    {
                      name: 'chevron-up',
                      size: 26,
                      color: 'white',
                      mdxType: 'Feather',
                    },
                  ),
                  size: 'md',
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'ActionButton',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with ActionButton in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'size',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
                  'medium',
                ),
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
                mdxType: 'ActionButton',
              },
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const sizes = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: '2xl',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xl',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'lg',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'md',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'sm',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
        );
      (sizes.storyName = 'sizes'),
        (sizes.parameters = {
          storySource: {
            source:
              '<Inline>\n      <ActionButton size="2xl" onPress={action(\'pressed\')} />\n      <ActionButton size="xl" onPress={action(\'pressed\')} />\n      <ActionButton size="lg" onPress={action(\'pressed\')} />\n      <ActionButton size="md" onPress={action(\'pressed\')} />\n      <ActionButton size="sm" onPress={action(\'pressed\')} />\n      <ActionButton size="xs" onPress={action(\'pressed\')} />\n      <ActionButton size="xs" onPress={action(\'pressed\')} />\n    </Inline>',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'primary',
              size: 'md',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'secondary',
              size: 'md',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'success',
              size: 'md',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Inline>\n      <ActionButton color="primary" size="md" onPress={action(\'pressed\')} />\n      <ActionButton color="secondary" size="md" onPress={action(\'pressed\')} />\n      <ActionButton color="success" size="md" onPress={action(\'pressed\')} />\n    </Inline>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
              {name: 'chevron-up', size: 26, color: 'white'},
            ),
            size: 'md',
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
        );
      (icon.storyName = 'icon'),
        (icon.parameters = {
          storySource: {
            source:
              '<ActionButton icon={<Feather name="chevron-up" size={26} color="white" />} size="md" onPress={action(\'pressed\')} />',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d)(
              'size',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
              'medium',
            ),
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<ActionButton size={select('size', sizeArray, 'md')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')} onPress={action('pressed')} />",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'ActionButton',
          component: _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: ['sizes', 'color', 'icon', 'playground'],
        },
        mdxStoryNameToKey = {
          sizes: 'sizes',
          color: 'color',
          icon: 'icon',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1178: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'sizes', function() {
          return sizes;
        }),
        __webpack_require__.d(__webpack_exports__, 'types', function() {
          return types;
        }),
        __webpack_require__.d(__webpack_exports__, 'title', function() {
          return title;
        }),
        __webpack_require__.d(__webpack_exports__, 'source', function() {
          return source;
        }),
        __webpack_require__.d(__webpack_exports__, 'editable', function() {
          return editable;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41),
        _Avatar__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(42),
        __webpack_require__(36)),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Avatar',
              component: _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'avatar'},
            'Avatar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Avatars are used to represent a user and can contain photos or text.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {Avatar} from 'react-native-design-system';\n\n<Avatar\n  title=\"MD\"\n  source={{uri: 'image_url_here'}}\n  onPress={() => this.handlePress()}\n/>;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Avatar__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'As usual, 7 sizes are available.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: '2xl',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xl',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'lg',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'md',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'sm',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'types'},
            'Types',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are mainly three types og Avatar: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'square',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'rounded',
            ),
            '. All props accept ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'boolean',
            ),
            ' value.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'types', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    square: !0,
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    rounded: !0,
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'title'},
            'Title',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'title',
            ),
            ' accepts a string. Passing upto 3 character (maximum) is recommended.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'title', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                {title: 'MD', mdxType: 'Avatar'},
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'source'},
            'Source',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'source',
            ),
            ' is same as Image component. You can pass a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'required',
            ),
            ' image or a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'uri',
            ),
            ' object.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'source', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  source: {uri: 'https://www.github.com/iamshadmirza.png'},
                  mdxType: 'Avatar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'editable'},
            'Editable',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'editable',
            ),
            ' is a boolean value which adds an edit button to the bottom. You just have to pass one ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'onPress',
            ),
            ' function and the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Avatar',
            ),
            ' is clickable.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'editable', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    title: 'MD',
                    editable: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    source: {uri: 'https://www.github.com/iamshadmirza.png'},
                    editable: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Avatar in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'size',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
                  'medium',
                ),
                title: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e,
                )('title', 'MD'),
                editable: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('editable', !0),
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
                editIconColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
                )('editIconColor', '#78909c'),
                mdxType: 'Avatar',
              },
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const sizes = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: '2xl',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xl',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'lg',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'md',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'sm',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
        );
      (sizes.storyName = 'sizes'),
        (sizes.parameters = {
          storySource: {
            source:
              '<Inline>\n      <Avatar size="2xl" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="xl" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="lg" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="md" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="sm" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="xs" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="xs" onPress={action(\'pressed\')} />\n    </Inline>',
          },
        });
      const types = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              square: !0,
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              rounded: !0,
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
        );
      (types.storyName = 'types'),
        (types.parameters = {
          storySource: {
            source:
              '<Inline>\n      <Avatar title="MD" onPress={action(\'pressed\')} />\n      <Avatar square title="MD" onPress={action(\'pressed\')} />\n      <Avatar rounded title="MD" onPress={action(\'pressed\')} />\n    </Inline>',
          },
        });
      const title = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
          {title: 'MD'},
        );
      (title.storyName = 'title'),
        (title.parameters = {storySource: {source: '<Avatar title="MD" />'}});
      const source = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
          {source: {uri: 'https://www.github.com/iamshadmirza.png'}},
        );
      (source.storyName = 'source'),
        (source.parameters = {
          storySource: {
            source:
              "<Avatar source={{\n  uri: 'https://www.github.com/iamshadmirza.png'\n}} />",
          },
        });
      const editable = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: 'MD',
              editable: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              source: {uri: 'https://www.github.com/iamshadmirza.png'},
              editable: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
        );
      (editable.storyName = 'editable'),
        (editable.parameters = {
          storySource: {
            source:
              "<Inline>\n      <Avatar title=\"MD\" editable={true} onPress={action('pressed')} />\n      <Avatar source={{\n    uri: 'https://www.github.com/iamshadmirza.png'\n  }} editable={true} onPress={action('pressed')} />\n    </Inline>",
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d)(
              'size',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
              'medium',
            ),
            title: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e,
            )('title', 'MD'),
            editable: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('editable', !0),
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
            editIconColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
            )('editIconColor', '#78909c'),
          },
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Avatar size={select('size', sizeArray, 'md')} title={text('title', 'MD')} editable={boolean('editable', true)} onPress={action('pressed')} editIconColor={color('editIconColor', '#78909c')} />",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Avatar',
          component: _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: [
            'sizes',
            'types',
            'title',
            'source',
            'editable',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          sizes: 'sizes',
          types: 'types',
          title: 'title',
          source: 'source',
          editable: 'editable',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1179: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'sizes', function() {
          return sizes;
        }),
        __webpack_require__.d(__webpack_exports__, 'types', function() {
          return types;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41),
        _Badge__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(42),
        __webpack_require__(15)),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Badge',
              component: _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'badge'},
            'Badge',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Badges are small components typically used to communicate a number value or indicate the status of an item to the user.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import { Badge } from 'react-native-design-system';\n\n<Badge\n  onPress={() => this.handlePress())}\n>\n  10000\n</Badge>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Badge__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'As usual, there are 7 sizes available.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: '2xl',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '10000',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xl',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '1000',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'lg',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '100',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'md',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '50',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'sm',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '0',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '-10',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '-100',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'types'},
            'Types',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are 3 types of Badges mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ' which is round, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'sqaure',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'mini',
            ),
            '. The prop accept boolean value.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'types', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '10',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    square: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '10',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    mini: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'success',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  'Featured',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'error',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  'Deprecated',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Badge in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'size',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
                  'medium',
                ),
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
                children: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
                )('children', 10),
                square: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('square', !1),
                mini: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('mini', !1),
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
                mdxType: 'Badge',
              },
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const sizes = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: '2xl',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10000',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xl',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '1000',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'lg',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '100',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'md',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '50',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'sm',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '0',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '-10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '-100',
          ),
        );
      (sizes.storyName = 'sizes'),
        (sizes.parameters = {
          storySource: {
            source:
              '<Inline>\n      <Badge size="2xl" onPress={action(\'pressed\')}>\n        10000\n      </Badge>\n      <Badge size="xl" onPress={action(\'pressed\')}>\n        1000\n      </Badge>\n      <Badge size="lg" onPress={action(\'pressed\')}>\n        100\n      </Badge>\n      <Badge size="md" onPress={action(\'pressed\')}>\n        50\n      </Badge>\n      <Badge size="sm" onPress={action(\'pressed\')}>\n        0\n      </Badge>\n      <Badge size="xs" onPress={action(\'pressed\')}>\n        -10\n      </Badge>\n      <Badge size="xs" onPress={action(\'pressed\')}>\n        -100\n      </Badge>\n    </Inline>',
          },
        });
      const types = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              square: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              mini: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'success',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Featured',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'error',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Deprecated',
          ),
        );
      (types.storyName = 'types'),
        (types.parameters = {
          storySource: {
            source:
              "<Inline>\n      <Badge onPress={action('pressed')}>10</Badge>\n      <Badge square onPress={action('pressed')}>\n        10\n      </Badge>\n      <Badge mini onPress={action('pressed')} />\n      <Badge color=\"success\" onPress={action('pressed')}>\n        Featured\n      </Badge>\n      <Badge color=\"error\" onPress={action('pressed')}>\n        Deprecated\n      </Badge>\n    </Inline>",
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d)(
              'size',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
              'medium',
            ),
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
            children: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
            )('children', 10),
            square: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('square', !1),
            mini: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a)(
              'mini',
              !1,
            ),
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Badge size={select('size', sizeArray, 'md')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')} children={number('children', 10)} square={boolean('square', false)} mini={boolean('mini', false)} onPress={action('pressed')} />",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Badge',
          component: _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: ['sizes', 'types', 'playground'],
        },
        mdxStoryNameToKey = {
          sizes: 'sizes',
          types: 'types',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1180: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'type', function() {
          return type;
        }),
        __webpack_require__.d(__webpack_exports__, 'loading', function() {
          return loading;
        }),
        __webpack_require__.d(__webpack_exports__, 'disabled', function() {
          return disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'length', function() {
          return length;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'icon', function() {
          return icon;
        }),
        __webpack_require__.d(__webpack_exports__, 'size', function() {
          return size;
        }),
        __webpack_require__.d(__webpack_exports__, 'width', function() {
          return width;
        }),
        __webpack_require__.d(__webpack_exports__, 'tint', function() {
          return tint;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Button',
              component: _Button__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'button'},
            'Button',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'A Button is a clickable view to carry out actions such as clearing user input or submitting the form.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import { Button } from 'react-native-design-system';\n\n<Button onPress={() => this.handleChange())}>\n  Press Me\n</Button>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Button__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are four types of button mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'round',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'outline',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'transparent',
            ),
            '. You can pass boolean value ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'round={true}',
            ),
            ' for round button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'outline={true}',
            ),
            ' for outline button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'transparent={true}',
            ),
            ' for transparent button and nothing for default solid button.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    round: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    transparent: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'loading'},
            'Loading',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'loading', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  loading: !0,
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Button',
                },
                'Press Me',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'disabled'},
            'Disabled',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'disabled', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  disabled: !0,
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Button',
                },
                'Press Me',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'length'},
            'Length',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Button ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'length',
            ),
            ' can either be ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'short',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'long',
            ),
            '. Default is long so no need to provide that. Length can further be configured by using ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'width',
            ),
            ' prop along with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'length="short"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'length', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'long',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are three different ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' available. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'primary',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'secondary',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'tertiary',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'primary',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'secondary',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can directly pass any icon via icon props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              'Icon size and color should be defined by developers manually according to button size.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
                    {
                      name: 'user',
                      size: 24,
                      color: 'white',
                      mdxType: 'Feather',
                    },
                  ),
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Button',
                },
                'Login',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are 7 different size of buttons.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'size', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xs',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'sm',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'md',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'lg',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xl',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: '2xl',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'width'},
            'Width',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Must be used with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'type="short"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'width', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'xxsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'xsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'small',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'md',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'large',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'xlarge',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'xxlarge',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'tint'},
            'Tint',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Tint is a boolean property which allows you to enable or disable transpent tint of outline button. Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'tint={false}',
            ),
            ' to make the background of outline button totally transparent.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'tint', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  tint: !1,
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Button',
                },
                'Login',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Button in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'size',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
                  'medium',
                ),
                width: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'width',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
                  'medium',
                ),
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
                length: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('length', ['long', 'short'], 'long'),
                round: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('round', !1),
                outline: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('outline', !1),
                transparent: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('transparent', !1),
                loading: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('loading', !1),
                disabled: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('disabled', !1),
                tint: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('tint', !0),
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
                mdxType: 'Button',
              },
              'Press Me',
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const type = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              round: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              transparent: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
        );
      (type.storyName = 'type'),
        (type.parameters = {
          storySource: {
            source:
              "<Stack>\n      <Button onPress={action('pressed')}>Press Me</Button>\n      <Button round onPress={action('pressed')}>\n        Press Me\n      </Button>\n      <Button outline onPress={action('pressed')}>\n        Press Me\n      </Button>\n      <Button transparent onPress={action('pressed')}>\n        Press Me\n      </Button>\n    </Stack>",
          },
        });
      const loading = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            loading: !0,
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
          'Press Me',
        );
      (loading.storyName = 'loading'),
        (loading.parameters = {
          storySource: {
            source:
              "<Button loading onPress={action('pressed')}>\n      Press Me\n    </Button>",
          },
        });
      const disabled = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            disabled: !0,
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
          'Press Me',
        );
      (disabled.storyName = 'disabled'),
        (disabled.parameters = {
          storySource: {
            source:
              "<Button disabled onPress={action('pressed')}>\n      Press Me\n    </Button>",
          },
        });
      const length = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'long',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
        );
      (length.storyName = 'length'),
        (length.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Button length="short" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="long" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Stack>',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'primary',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'secondary',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Button color="primary" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button color="secondary" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Stack>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
              {name: 'user', size: 24, color: 'white'},
            ),
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
          'Login',
        );
      (icon.storyName = 'icon'),
        (icon.parameters = {
          storySource: {
            source:
              '<Button icon={<Feather name="user" size={24} color="white" />} onPress={action(\'pressed\')}>\n      Login\n    </Button>',
          },
        });
      const size = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xs',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'sm',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'md',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'lg',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xl',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: '2xl',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Button size="xs" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="xs" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="sm" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="md" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="lg" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="xl" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="2xl" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Stack>',
          },
        });
      const width = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'xxsmall',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'xsmall',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'small',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'md',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'large',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'xlarge',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'xxlarge',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
        );
      (width.storyName = 'width'),
        (width.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Button length="short" width="xxsmall" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="xsmall" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="small" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="md" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="large" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="xlarge" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="xxlarge" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Stack>',
          },
        });
      const tint = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            tint: !1,
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
          'Login',
        );
      (tint.storyName = 'tint'),
        (tint.parameters = {
          storySource: {
            source:
              "<Button outline tint={false} onPress={action('pressed')}>\n      Login\n    </Button>",
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d)(
              'size',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
              'medium',
            ),
            width: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'width',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
              'medium',
            ),
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
            length: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('length', ['long', 'short'], 'long'),
            round: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('round', !1),
            outline: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('outline', !1),
            transparent: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('transparent', !1),
            loading: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('loading', !1),
            disabled: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('disabled', !1),
            tint: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a)(
              'tint',
              !0,
            ),
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
          'Press Me',
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Button size={select('size', sizeArray, 'md')} width={select('width', sizeArray, 'md')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')} length={select('length', ['long', 'short'], 'long')} round={boolean('round', false)} outline={boolean('outline', false)} transparent={boolean('transparent', false)} loading={boolean('loading', false)} disabled={boolean('disabled', false)} tint={boolean('tint', true)} onPress={action('pressed')}>\n    Press Me\n  </Button>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Button',
          component: _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: [
            'type',
            'loading',
            'disabled',
            'length',
            'color',
            'icon',
            'size',
            'width',
            'tint',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          type: 'type',
          loading: 'loading',
          disabled: 'disabled',
          length: 'length',
          color: 'color',
          icon: 'icon',
          size: 'size',
          width: 'width',
          tint: 'tint',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1182: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'space', function() {
          return space;
        }),
        __webpack_require__.d(__webpack_exports__, 'type', function() {
          return type;
        }),
        __webpack_require__.d(__webpack_exports__, 'padding', function() {
          return padding;
        }),
        __webpack_require__.d(__webpack_exports__, 'row', function() {
          return row;
        }),
        __webpack_require__.d(__webpack_exports__, 'shadow', function() {
          return shadow;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10),
        _Card__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(42),
        __webpack_require__(34)),
        _Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Card',
              component: _Card__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'card'},
            'Card',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Card is a wrapper component with a small padding. It included center, left and right aligned card to auto align childrens. Use ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Box',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Stack',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Inline',
            ),
            ' when making a layout.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import { Card, Button } from 'react-native-design-system';\n\n<Card>\n  <Button onPress={() => this.handleChange())}>\n    Press Me\n  </Button>\n</Card>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Card__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'size',
            ),
            ' in each component, Card receives 7 available ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' values with an additional ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ' value.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'none', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {size: 'xs', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {size: 'xs', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {size: 'sm', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'md', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {size: 'lg', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {size: 'xl', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {size: '2xl', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are 3 types of alignment for children: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'left',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'center',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'right',
            ),
            '. You just have to pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'align',
            ),
            ' prop which accepts a string from three choices.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {align: 'left', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      length: 'short',
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {align: 'center', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      length: 'short',
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {align: 'right', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      length: 'short',
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'padding'},
            'Padding',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Padding can be applied horizontally and vertically only.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'First button is getting ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'horizontal',
              ),
              ' prop which makes vertical padding ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '0',
              ),
              '.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'li',
              {parentName: 'ul'},
              'Second button is getting ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                'vertical',
              ),
              ' prop which makes horizontal padding ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'li'},
                '0',
              ),
              '.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'padding', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {horizontal: !0, mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {vertical: !0, mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'row'},
            'Row',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Default alignment of childrens is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'column',
            ),
            ' which can be changed to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'row',
            ),
            ' by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'row',
            ),
            " prop. It's a boolean value. This is totally a personal use-case and you can always customize the view with ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'style',
            ),
            ' prop.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'row', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {row: !0, mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      length: 'short',
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      length: 'short',
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                    {
                      length: 'short',
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Button',
                    },
                    'Press Me',
                  ),
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'shadow'},
            'Shadow',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'shadow',
            ),
            ' to render a shadow around card. It is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'false',
            ),
            ' by default.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'shadow', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                {row: !0, shadow: !0, mdxType: 'Card'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                  {
                    length: 'short',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Card in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Card__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'space',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                row: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('row', !1),
                shadow: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('shadow', !1),
                align: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('center', ['left', 'center', 'right'], 'left'),
                mdxType: 'Card',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  length: 'short',
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Button',
                },
                'Press Me',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const space = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'none'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {size: 'xs'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {size: 'xs'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {size: 'sm'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'md'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {size: 'lg'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {size: 'xl'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {size: '2xl'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Card space="none">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n      <Card size="xs">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n      <Card size="xs">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n      <Card size="sm">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n      <Card space="md">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n      <Card size="lg">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n      <Card size="xl">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n      <Card size="2xl">\n        <Button onPress={action(\'pressed\')}>Press Me</Button>\n      </Card>\n    </Stack>',
          },
        });
      const type = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {align: 'left'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {align: 'center'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {align: 'right'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
        );
      (type.storyName = 'type'),
        (type.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Card align="left">\n        <Button length="short" onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card align="center">\n        <Button length="short" onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card align="right">\n        <Button length="short" onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n    </Stack>',
          },
        });
      const padding = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {horizontal: !0},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {vertical: !0},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
        );
      (padding.storyName = 'padding'),
        (padding.parameters = {
          storySource: {
            source:
              "<Stack>\n      <Card horizontal>\n        <Button onPress={action('pressed')}>Press Me</Button>\n      </Card>\n      <Card vertical>\n        <Button onPress={action('pressed')}>Press Me</Button>\n      </Card>\n    </Stack>",
          },
        });
      const row = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {row: !0},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
        );
      (row.storyName = 'row'),
        (row.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Card row>\n        <Button length="short" onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n        <Button length="short" onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n        <Button length="short" onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n    </Stack>',
          },
        });
      const shadow = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Card__WEBPACK_IMPORTED_MODULE_7__.a,
          {row: !0, shadow: !0},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
            {
              length: 'short',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
        );
      (shadow.storyName = 'shadow'),
        (shadow.parameters = {
          storySource: {
            source:
              '<Card row shadow={true}>\n      <Button length="short" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Card>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Card__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'space',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
            row: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a)(
              'row',
              !1,
            ),
            shadow: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('shadow', !1),
            align: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('center', ['left', 'center', 'right'], 'left'),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
            {
              length: 'short',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Card space={select('space', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')} row={boolean('row', false)} shadow={boolean('shadow', false)} align={select('center', ['left', 'center', 'right'], 'left')}>\n    <Button length=\"short\" onPress={action('pressed')}>\n      Press Me\n    </Button>\n  </Card>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Card',
          component: _Card__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: [
            'space',
            'type',
            'padding',
            'row',
            'shadow',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          space: 'space',
          type: 'type',
          padding: 'padding',
          row: 'row',
          shadow: 'shadow',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1183: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
        _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(
          3,
        ),
        __webpack_require__(10),
        __webpack_require__(156));
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'CircularProgressBar',
              component: _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'circularprogressbar'},
            'CircularProgressBar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Animated circular progress bar for cross plateform.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              'import {CircularProgressBar} from \'react-native-design-system\';\n\n<CircularProgressBar\n  activeColor="darkviolet"\n  passiveColor="darkgray"\n  baseColor="white"\n  width={50}\n  percent={35}\n  radius={100}\n  duration={1200}>\n  <Text>Wow!</Text>\n</CircularProgressBar>;\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {
              of: _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Props',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'This component is fully customizable. Go on, play with CircularProgressBar inside Canvas.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                activeColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
                )('activeColor', 'darkviolet'),
                passiveColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
                )('passiveColor', 'darkgray'),
                baseColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
                )('baseColor', 'white'),
                width: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
                )('width', 50),
                percent: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
                )('percent', 35),
                radius: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
                )('radius', 100),
                duration: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
                )('duration', 1200),
                mdxType: 'CircularProgressBar',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
                {mdxType: 'Text'},
                'Wow!',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            activeColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
            )('activeColor', 'darkviolet'),
            passiveColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
            )('passiveColor', 'darkgray'),
            baseColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
            )('baseColor', 'white'),
            width: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
            )('width', 50),
            percent: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
            )('percent', 35),
            radius: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
            )('radius', 100),
            duration: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.c,
            )('duration', 1200),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
            null,
            'Wow!',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<CircularProgressBar activeColor={color('activeColor', 'darkviolet')} passiveColor={color('passiveColor', 'darkgray')} baseColor={color('baseColor', 'white')} width={number('width', 50)} percent={number('percent', 35)} radius={number('radius', 100)} duration={number('duration', 1200)}>\n    <Text>Wow!</Text>\n  </CircularProgressBar>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'CircularProgressBar',
          component: _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: ['playground'],
        },
        mdxStoryNameToKey = {playground: 'playground'};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1184: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          3,
        ),
        _Deck__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(10),
        __webpack_require__(158));
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Deck',
              component: _Deck__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'deck'},
            'Deck',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Swippable Deck component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import { Deck } from 'react-native-design-system';\n\n<Deck\n    data={[\n        {\n            id: 28362836,\n            imageUrl: './Kitty1.png'\n        },\n        {\n            id: 5325732,\n            imageUrl: './Kitty2.png'\n        },\n        {\n            id: 9372333,\n            imageUrl: './Kitty3.png'\n        },\n        {\n            id: 76732573,\n            imageUrl: './Kitty4.png'\n        },\n    ]}\n    keyExtractor={item => item.id.toString()}\n    renderItem={item => {\n        return (\n            <View style={{ flex: 1}}>\n                <Image style={{ width: 100, height: 100 }} source={{ uri: item.imageUrl }} />\n            </View>\n        );\n    }}\n/>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Deck__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'data'},
            'data',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass array of items you want to render. Works just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '<FlatList />',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'renderitem'},
            'renderItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass a callback function to render each item. Function receives ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'item',
            ),
            ' as argument and returns react element. Works just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '<FlatList />',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'keyextractor'},
            'keyExtractor',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass a function that returns unique id as strings. Function receives ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'item',
            ),
            ' as argument. Works just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '<FlatList />',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'direction'},
            'direction',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'direction',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'vertical',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'horizontal',
            ),
            ' to change direction of swipe. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'horzintal',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'loop'},
            'loop',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'loop={true}',
            ),
            ' to repeat the data array when all items are swiped. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'false',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'fade'},
            'fade',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'fade={true}',
            ),
            ' to reduce opacity as the user swipes. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'true',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'onpositiveswipe'},
            'onPositiveSwipe',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass a function to be called when item has been swiped right in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'direction="horizontal"',
            ),
            ' and up in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'direction="vertical"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'onnegativeswipe'},
            'onNegativeSwipe',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass a function to be called when item has been swiped left in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'direction="horizontal"',
            ),
            ' and down in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'direction="vertical"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'loadmorecards'},
            'loadMoreCards',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass an async function (promise) to load more cards from all cards are swiped. This function will receive ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'page',
            ),
            ' as argument which is integer value for pagination and should return new batch of items in an array. We take care of concatinating received data inside Deck component, you just have to return an array with new data.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'loadinitialdata'},
            'loadInitialData',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'loadInitialData={true}',
            ),
            ' when passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'data={[]}',
            ),
            ' as empty array. Deck component will use ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'loadMoreCards',
            ),
            ' to fetch the initial batch of data. We show a loading screen while fetching data, you can pass this loading screen yourself. See next prop.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'loadingscreen'},
            'loadingScreen',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'React component to show while fetching data, this component will be used at initial screen when ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'loadInitialData={true}',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'This component is fully customizable. Go on, play with Deck inside Canvas.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Deck__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                data: [
                  'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty1.jpeg',
                  'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty2.jpeg',
                  'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty3.jpeg',
                  'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty4.jpeg',
                ],
                keyExtractor: item => item.toString(),
                renderItem: item =>
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    react_native__WEBPACK_IMPORTED_MODULE_4__.View,
                    {
                      style: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 100,
                        backgroundColor: '#f4f4f4',
                        padding: 30,
                      },
                      mdxType: 'View',
                    },
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                      react_native__WEBPACK_IMPORTED_MODULE_4__.Image,
                      {
                        style: {width: 300, height: 300},
                        source: {uri: item},
                        resizeMode: 'contain',
                        mdxType: 'Image',
                      },
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                      react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
                      {mdxType: 'Text'},
                      'Adorable Kittens 😍',
                    ),
                  ),
                direction: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('direction', ['horizontal', 'vertical'], 'horizontal'),
                fade: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('fade', !1),
                loop: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('loop', !0),
                onPositiveSwipe: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action,
                )('swipped up or right'),
                onNegativeSwipe: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action,
                )('swipped down or left'),
                mdxType: 'Deck',
              },
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Deck__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            data: [
              'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty1.jpeg',
              'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty2.jpeg',
              'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty3.jpeg',
              'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty4.jpeg',
            ],
            keyExtractor: item => item.toString(),
            renderItem: item =>
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                react_native__WEBPACK_IMPORTED_MODULE_4__.View,
                {
                  style: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 100,
                    backgroundColor: '#f4f4f4',
                    padding: 30,
                  },
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  react_native__WEBPACK_IMPORTED_MODULE_4__.Image,
                  {
                    style: {width: 300, height: 300},
                    source: {uri: item},
                    resizeMode: 'contain',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
                  null,
                  'Adorable Kittens 😍',
                ),
              ),
            direction: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('direction', ['horizontal', 'vertical'], 'horizontal'),
            fade: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a)(
              'fade',
              !1,
            ),
            loop: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a)(
              'loop',
              !0,
            ),
            onPositiveSwipe: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action,
            )('swipped up or right'),
            onNegativeSwipe: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_5__.action,
            )('swipped down or left'),
          },
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Deck data={['https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty1.jpeg', 'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty2.jpeg', 'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty3.jpeg', 'https://raw.githubusercontent.com/iamshadmirza/BlogsByShad/master/blogs/saved_data/kitty4.jpeg']} keyExtractor={item => item.toString()} renderItem={item => {\n  return <View style={{\n    justifyContent: 'center',\n    alignItems: 'center',\n    marginTop: 100,\n    backgroundColor: '#f4f4f4',\n    padding: 30\n  }}>\n                <Image style={{\n      width: 300,\n      height: 300\n    }} source={{\n      uri: item\n    }} resizeMode=\"contain\" />\n                <Text>Adorable Kittens 😍</Text>\n            </View>;\n}} direction={select('direction', ['horizontal', 'vertical'], 'horizontal')} fade={boolean('fade', false)} loop={boolean('loop', true)} onPositiveSwipe={action('swipped up or right')} onNegativeSwipe={action('swipped down or left')} />",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Deck',
          component: _Deck__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: ['playground'],
        },
        mdxStoryNameToKey = {playground: 'playground'};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1185: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5),
        _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          157,
        ),
        _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(221);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'FullScreenLoader',
              component: _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'fullscreenloader'},
            'FullScreenLoader',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'FullScreenLoader is a loading screen component which sits on top of all the view. It shows an Activity Indicator and restrict touches while spinner is rotating.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import { FullScreenLoader } from 'react-native-design-system';\n\n<FullScreenLoader \n  loading={this.state.loading}\n>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {
              of: _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
              mdxType: 'Props',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'loading'},
            'Loading',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'loading={true}',
            ),
            ' makes the loading screen visible. View will be unmounted when ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'loading',
            ),
            ' changes to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'false',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'indicator-color'},
            'Indicator Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass any theme color in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'indicatorColor',
            ),
            ' prop for desired result. Passed color should be present in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'background'},
            'Background',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass any theme color in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' prop for set desired Background. Passed color should be present in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Size gives the size of Indicator: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'children'},
            'Children',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'If you want to pass any element to render with spinner.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with FullScreenLoader in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {
                name: 'playground',
                parameters: {
                  decorators: [
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                  ],
                },
                mdxType: 'Story',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                react_native__WEBPACK_IMPORTED_MODULE_4__.View,
                {
                  style: {height: 480, width: 270, borderWidth: 1},
                  mdxType: 'View',
                },
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    loading: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                    )('loading', !0),
                    size: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                    )('size', ['small', 'large']),
                    background: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                    )(
                      'background',
                      ['backgroundDark', 'backgroundLight', 'foreground'],
                      'backgroundLight',
                    ),
                    indicatorColor: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
                    )('indicatorColor', '#1e88e5'),
                    mdxType: 'FullScreenLoader',
                  },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Text__WEBPACK_IMPORTED_MODULE_6__.a,
                    {mdxType: 'Text'},
                    'Loading...',
                  ),
                ),
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          react_native__WEBPACK_IMPORTED_MODULE_4__.View,
          {style: {height: 480, width: 270, borderWidth: 1}},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              loading: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
              )('loading', !0),
              size: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
              )('size', ['small', 'large']),
              background: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
              )(
                'background',
                ['backgroundDark', 'backgroundLight', 'foreground'],
                'backgroundLight',
              ),
              indicatorColor: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.b,
              )('indicatorColor', '#1e88e5'),
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Text__WEBPACK_IMPORTED_MODULE_6__.a,
              null,
              'Loading...',
            ),
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<View style={{\n  height: 480,\n  width: 270,\n  borderWidth: 1\n}}>\n      <FullScreenLoader loading={boolean('loading', true)} size={select('size', ['sm', 'lg'])} background={select('background', ['backgroundDark', 'backgroundLight', 'foreground'], 'backgroundLight')} indicatorColor={color('indicatorColor', '#1e88e5')}>\n      <Text>Loading...</Text>\n      </FullScreenLoader>\n    </View>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'FullScreenLoader',
          component: _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
          includeStories: ['playground'],
        },
        mdxStoryNameToKey = {playground: 'playground'};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1186: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'textAlign', function() {
          return textAlign;
        }),
        __webpack_require__.d(__webpack_exports__, 'fontSize', function() {
          return fontSize;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'icons', function() {
          return icons;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          387,
        ),
        react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5__,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Header',
              component: _Header__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'header'},
            'Header',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Header is just a fixed Header bar that sits on top of screen.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {Header} from 'react-native-design-system';\n\n<Header>Home</Header>;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              "If you're using ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'p'},
                'Expo',
              ),
              ' then you have to provide top margin for StatusBar:',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import { Constants } from 'expo'\n\n...\nheaderStyle: { marginTop: Constants.statusBarHeight },\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Header__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'text-align'},
            'Text Align',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can align Header title position by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'auto',
            ),
            ',',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'left',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'center',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'right',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'justify',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'textAlign',
            ),
            ' property.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'textAlign', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {textAlign: 'left', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {textAlign: 'center', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {textAlign: 'right', mdxType: 'Header'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'font-size'},
            'Font Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are 7 font sizes available from ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ' to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            '. Below Headers are of size ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'fontSize', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {fontsize: 'xs', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {fontsize: 'md', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {fontsize: '2xl', mdxType: 'Header'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Color takes any string defined in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ' file.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {color: 'primary', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {color: 'secondary', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {color: 'tertiary', mdxType: 'Header'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'icons'},
            'Icons',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'leftIcon',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'onLeftIconPress',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'onRightIconPress',
            ),
            ' handler. Size, type and color of icon is upto developer.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'icons', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  leftIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b,
                  )(
                    react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5___default.a,
                    {
                      name: 'navicon',
                      size: 26,
                      color: 'white',
                      mdxType: 'EvilIcons',
                    },
                  ),
                  rightIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b,
                  )(
                    react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
                    {
                      name: 'settings',
                      size: 24,
                      color: 'white',
                      mdxType: 'Feather',
                    },
                  ),
                  onLeftIconPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('left icon pressed'),
                  onRightIconPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('right icon pressed'),
                  mdxType: 'Header',
                },
                'Home',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'bar-color'},
            'Bar Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can pass StatusBar ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'strong',
              {parentName: 'p'},
              'backgroundColor',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'barColor',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'strong',
              {parentName: 'p'},
              'barStyle',
            ),
            ' for StatusBar ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'barColor',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'icon-styles'},
            'Icon Styles',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'iconStyle',
            ),
            ' to pass custom styling for left and right. This is handy when you have to provide some extra padding to the icons.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Header in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Header__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                fontSize: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'space',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                textAlign: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'center',
                  ['auto', 'left', 'center', 'right', 'justify'],
                  'left',
                ),
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
                mdxType: 'Header',
              },
              'Home',
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const textAlign = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {textAlign: 'left'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {textAlign: 'center'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {textAlign: 'right'},
            'Home',
          ),
        );
      (textAlign.storyName = 'textAlign'),
        (textAlign.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Header textAlign="left">Home</Header>\n      <Header textAlign="center">Home</Header>\n      <Header textAlign="right">Home</Header>\n    </Stack>',
          },
        });
      const fontSize = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {fontsize: 'xs'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {fontsize: 'md'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {fontsize: '2xl'},
            'Home',
          ),
        );
      (fontSize.storyName = 'fontSize'),
        (fontSize.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Header fontsize="xs">Home</Header>\n      <Header fontsize="md">Home</Header>\n      <Header fontsize="2xl">Home</Header>\n    </Stack>',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {color: 'primary'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {color: 'secondary'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {color: 'tertiary'},
            'Home',
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Header color="primary">Home</Header>\n      <Header color="secondary">Home</Header>\n      <Header color="tertiary">Home</Header>\n    </Stack>',
          },
        });
      const icons = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Header__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            leftIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5___default.a,
              {name: 'navicon', size: 26, color: 'white'},
            ),
            rightIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
              {name: 'settings', size: 24, color: 'white'},
            ),
            onLeftIconPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('left icon pressed'),
            onRightIconPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('right icon pressed'),
          },
          'Home',
        );
      (icons.storyName = 'icons'),
        (icons.parameters = {
          storySource: {
            source:
              '<Header leftIcon={<EvilIcons name="navicon" size={26} color="white" />} rightIcon={<Feather name="settings" size={24} color="white" />} onLeftIconPress={action(\'left icon pressed\')} onRightIconPress={action(\'right icon pressed\')}>\n      Home\n    </Header>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Header__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            fontSize: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'space',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
            textAlign: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('center', ['auto', 'left', 'center', 'right', 'justify'], 'left'),
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
          },
          'Home',
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Header fontSize={select('space', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')} textAlign={select('center', ['auto', 'left', 'center', 'right', 'justify'], 'left')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')}>\n    Home\n  </Header>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Header',
          component: _Header__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: [
            'textAlign',
            'fontSize',
            'color',
            'icons',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          textAlign: 'textAlign',
          fontSize: 'fontSize',
          color: 'color',
          icons: 'icons',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1188: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'space', function() {
          return space;
        }),
        __webpack_require__.d(__webpack_exports__, 'background', function() {
          return background;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_require__(3),
        __webpack_require__(9)),
        _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(110);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Box',
              component: _Box__WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'box'},
            'Box',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Box is a simple layout container which accepts a child and provide padding around it. The child is centered by default.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              'import {Box} from \'react-native-design-system\';\n\n<Box size="lg">\n  <Button>Press Me</Button>\n</Box>;\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Box__WEBPACK_IMPORTED_MODULE_6__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Customize padding for the child. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' prop accepts one of the given values: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xlarge',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Box__WEBPACK_IMPORTED_MODULE_6__.a,
                {size: 'lg', mdxType: 'Box'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                  {mdxType: 'Button'},
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'background'},
            'Background',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can also pass a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' color. Color string should be present inside ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of theme.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'background', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Box__WEBPACK_IMPORTED_MODULE_6__.a,
                {background: 'backgroundLight', mdxType: 'Box'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                  {mdxType: 'Button'},
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Box in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Box__WEBPACK_IMPORTED_MODULE_6__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'space',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                background: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('background', [
                  'backgroundDark',
                  'backgroundLight',
                  'foreground',
                  'white',
                  'disabled',
                  'semitransparent',
                  'transparent',
                  'black',
                ]),
                mdxType: 'Box',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Button'},
                'Press Me',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const space = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Box__WEBPACK_IMPORTED_MODULE_6__.a,
          {size: 'lg'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              '<Box size="lg">\n      <Button>Press Me</Button>\n    </Box>',
          },
        });
      const background = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Box__WEBPACK_IMPORTED_MODULE_6__.a,
          {background: 'backgroundLight'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (background.storyName = 'background'),
        (background.parameters = {
          storySource: {
            source:
              '<Box background="backgroundLight">\n      <Button>Press Me</Button>\n    </Box>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Box__WEBPACK_IMPORTED_MODULE_6__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'space',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
            background: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('background', [
              'backgroundDark',
              'backgroundLight',
              'foreground',
              'white',
              'disabled',
              'semitransparent',
              'transparent',
              'black',
            ]),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Box space={select('space', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')} background={select('background', ['backgroundDark', 'backgroundLight', 'foreground', 'white', 'disabled', 'semitransparent', 'transparent', 'black'])}>\n    <Button>Press Me</Button>\n  </Box>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Box',
          component: _Box__WEBPACK_IMPORTED_MODULE_6__.a,
          includeStories: ['space', 'background', 'playground'],
        },
        mdxStoryNameToKey = {
          space: 'space',
          background: 'background',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1189: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'space', function() {
          return space;
        }),
        __webpack_require__.d(__webpack_exports__, 'background', function() {
          return background;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_require__(3),
        __webpack_require__(9)),
        _Flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(111);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Flex',
              component: _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'flex'},
            'Flex',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Flex is a simple layout container works as a Flex box.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              'import {Flex} from \'react-native-design-system\';\n\n<Flex size="lg">\n  <Button>Press Me</Button>\n</Flex>;\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Flex__WEBPACK_IMPORTED_MODULE_6__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Customize padding for the child. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' prop accepts one of the given values: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xlarge',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
                {size: 'lg', mdxType: 'Flex'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                  {mdxType: 'Button'},
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'background'},
            'Background',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can also pass a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' color. Color string should be present inside ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of theme.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'background', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
                {background: 'disabled', mdxType: 'Flex'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                  {mdxType: 'Button'},
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Flex in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
              {
                flex: 1,
                flexDirection: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('row', ['row', 'column', 'row-reverse', 'column-reverse']),
                alignItems: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('alignItems', [
                  'flex-start',
                  'flex-end',
                  'center',
                  'stretch',
                  'baseline',
                ]),
                justifyContent: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('justifyContent', [
                  'flex-start',
                  'flex-end',
                  'center',
                  'space-between',
                  'space-around',
                  'space-evenly',
                ]),
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'space',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                background: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'background',
                  [
                    'background',
                    'clearWhite',
                    'disabled',
                    'semitransparent',
                    'gray',
                    'white',
                    'outline',
                  ],
                  'background',
                ),
                mdxType: 'Flex',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Button'},
                'Press Me',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const space = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
          {size: 'lg'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              '<Flex size="lg">\n      <Button>Press Me</Button>\n    </Flex>',
          },
        });
      const background = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
          {background: 'disabled'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (background.storyName = 'background'),
        (background.parameters = {
          storySource: {
            source:
              '<Flex background="disabled">\n      <Button>Press Me</Button>\n    </Flex>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
          {
            flex: 1,
            flexDirection: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('row', ['row', 'column', 'row-reverse', 'column-reverse']),
            alignItems: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('alignItems', [
              'flex-start',
              'flex-end',
              'center',
              'stretch',
              'baseline',
            ]),
            justifyContent: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('justifyContent', [
              'flex-start',
              'flex-end',
              'center',
              'space-between',
              'space-around',
              'space-evenly',
            ]),
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'space',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
            background: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'background',
              [
                'background',
                'clearWhite',
                'disabled',
                'semitransparent',
                'gray',
                'white',
                'outline',
              ],
              'background',
            ),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Flex flex={1} flexDirection={select('row', ['row', 'column', 'row-reverse', 'column-reverse'])} alignItems={select('alignItems', ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'])} justifyContent={select('justifyContent', ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])} space={select('space', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')} background={select('background', ['background', 'clearWhite', 'disabled', 'semitransparent', 'gray', 'white', 'outline'], 'background')}>\n    <Button>Press Me</Button>\n  </Flex>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Flex',
          component: _Flex__WEBPACK_IMPORTED_MODULE_6__.a,
          includeStories: ['space', 'background', 'playground'],
        },
        mdxStoryNameToKey = {
          space: 'space',
          background: 'background',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1190: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'space', function() {
          return space;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15),
        _Inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41),
        _Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Inline',
              component: _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'inline'},
            'Inline',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            "Inline is a layout container which alligns it's children horizontally (inline) and provide constant margin around them.",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              'Use of Inline is discraged. Use ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                'inlineCode',
                {parentName: 'p'},
                'Stack',
              ),
              ' with direction="horizontal" instead.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              'import {Box, Badge} from \'react-native-design-system\';\n\n<Inline size="2xl">\n  <Badge onPress={() => this.handlePress(id)}>10</Badge>\n  <Badge onPress={() => this.handlePress(id)}>50</Badge>\n  <Badge onPress={() => this.handlePress(id)}>677</Badge>\n  <Badge onPress={() => this.handlePress(id)}>9999</Badge>\n</Inline>;\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Inline__WEBPACK_IMPORTED_MODULE_6__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Customize spacing of each child from one another. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' prop accepts one of the given values: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xlarge',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            ' and provide constant spacing between each children.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
                  {space: 'none', mdxType: 'Inline'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '10',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '50',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '677',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '9999',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
                  {space: 'md', mdxType: 'Inline'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '10',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '50',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '677',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '9999',
                  ),
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
                  {size: '2xl', mdxType: 'Inline'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '10',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '50',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '677',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '9999',
                  ),
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Inline in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'space',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                mdxType: 'Inline',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Badge',
                },
                '10',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Badge',
                },
                '50',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Badge',
                },
                '677',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Badge',
                },
                '9999',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const space = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
            {space: 'none'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '10',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '50',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '677',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '9999',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
            {space: 'md'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '10',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '50',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '677',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '9999',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
            {size: '2xl'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '10',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '50',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '677',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '9999',
            ),
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              "<Stack>\n      <Inline space=\"none\">\n        <Badge onPress={action('pressed')}>10</Badge>\n        <Badge onPress={action('pressed')}>50</Badge>\n        <Badge onPress={action('pressed')}>677</Badge>\n        <Badge onPress={action('pressed')}>9999</Badge>\n      </Inline>\n      <Inline space=\"md\">\n        <Badge onPress={action('pressed')}>10</Badge>\n        <Badge onPress={action('pressed')}>50</Badge>\n        <Badge onPress={action('pressed')}>677</Badge>\n        <Badge onPress={action('pressed')}>9999</Badge>\n      </Inline>\n      <Inline size=\"2xl\">\n        <Badge onPress={action('pressed')}>10</Badge>\n        <Badge onPress={action('pressed')}>50</Badge>\n        <Badge onPress={action('pressed')}>677</Badge>\n        <Badge onPress={action('pressed')}>9999</Badge>\n      </Inline>\n    </Stack>",
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'space',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '50',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '677',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '9999',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Inline space={select('space', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')}>\n    <Badge onPress={action('pressed')}>10</Badge>\n    <Badge onPress={action('pressed')}>50</Badge>\n    <Badge onPress={action('pressed')}>677</Badge>\n    <Badge onPress={action('pressed')}>9999</Badge>\n  </Inline>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Inline',
          component: _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
          includeStories: ['space', 'playground'],
        },
        mdxStoryNameToKey = {space: 'space', playground: 'playground'};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1191: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'space', function() {
          return space;
        }),
        __webpack_require__.d(
          __webpack_exports__,
          'horizontalSpace',
          function() {
            return horizontalSpace;
          },
        ),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17),
        _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9),
        _Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Stack',
              component: _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'stack'},
            'Stack',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            "Stack is a layout container which alligns it's children vertrically (stack) and provide constant margin around them.",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              'import {Stack, Input} from \'react-native-design-system\';\n\n<Stack size="lg">\n  <Input\n    placeholder="Enter Username"\n    value=""\n    outline\n    onChangeText={text => handleUsernameChange(text)}\n  />\n  <Input\n    placeholder="Enter Email"\n    value=""\n    outline\n    onChangeText={text => handleEmailChange(text)}\n  />\n  <Input\n    placeholder="Enter Password"\n    value=""\n    outline\n    onChangeText={text => handlePasswordChange(text)}\n  />\n</Stack>;\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Stack__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Customize spacing of each child from one another. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' prop accepts one of the given values: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xlarge',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            ' and provide constant spacing between each children.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
                {size: 'lg', mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    placeholder: 'Enter Username',
                    value: '',
                    outline: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'Input',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    placeholder: 'Enter Email',
                    value: '',
                    outline: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'Input',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    placeholder: 'Enter Password',
                    value: '',
                    outline: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'Input',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'direction'},
            'Direction',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Give direction="horizontal" to make it behave like Inline. Direction can either be "vertical" or "horizontal". Default is "vertical".',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'horizontal-space'},
            'Horizontal Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'horizontalSpace',
            ),
            ' prop adds horizontal spacing. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ' but you can any of the 8 spacing values provided.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'horizontalSpace', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
                {size: 'lg', horizontalsize: '2xl', mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    placeholder: 'Enter Username',
                    value: '',
                    outline: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'Input',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    placeholder: 'Enter Email',
                    value: '',
                    outline: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'Input',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    placeholder: 'Enter Password',
                    value: '',
                    outline: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'Input',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Stack in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'space',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                scrollable: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('scrollable', !1),
                horizontalSpace: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'horizontalSpace',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                direction: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('direction', ['vertical', 'horizontal'], 'vertical'),
                mdxType: 'Stack',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  placeholder: 'Enter username',
                  value: '',
                  outline: !0,
                  label: 'Username',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'Input',
                },
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  placeholder: 'Enter email',
                  value: '',
                  outline: !0,
                  label: 'Email',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'Input',
                },
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  placeholder: 'Enter password',
                  value: '',
                  outline: !0,
                  label: 'Password',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'Input',
                },
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
                {mdxType: 'Button'},
                'LOG IN',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
                {outline: !0, mdxType: 'Button'},
                'SIGN UP',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
                {transparent: !0, mdxType: 'Button'},
                'forget password?',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const space = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          {size: 'lg'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter Username',
              value: '',
              outline: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter Email',
              value: '',
              outline: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter Password',
              value: '',
              outline: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              '<Stack size="lg">\n      <Input placeholder="Enter Username" value="" outline onChangeText={text => action(\'pressed\')} />\n      <Input placeholder="Enter Email" value="" outline onChangeText={text => action(\'pressed\')} />\n      <Input placeholder="Enter Password" value="" outline onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const horizontalSpace = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          {size: 'lg', horizontalsize: '2xl'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter Username',
              value: '',
              outline: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter Email',
              value: '',
              outline: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter Password',
              value: '',
              outline: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
        );
      (horizontalSpace.storyName = 'horizontalSpace'),
        (horizontalSpace.parameters = {
          storySource: {
            source:
              '<Stack size="lg" horizontalsize="2xl">\n      <Input placeholder="Enter Username" value="" outline onChangeText={text => action(\'pressed\')} />\n      <Input placeholder="Enter Email" value="" outline onChangeText={text => action(\'pressed\')} />\n      <Input placeholder="Enter Password" value="" outline onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'space',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
            scrollable: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('scrollable', !1),
            horizontalSpace: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'horizontalSpace',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
            direction: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('direction', ['vertical', 'horizontal'], 'vertical'),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter username',
              value: '',
              outline: !0,
              label: 'Username',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter email',
              value: '',
              outline: !0,
              label: 'Email',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Input_Input__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              placeholder: 'Enter password',
              value: '',
              outline: !0,
              label: 'Password',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
            null,
            'LOG IN',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
            {outline: !0},
            'SIGN UP',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
            {transparent: !0},
            'forget password?',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Stack space={select('space', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')} scrollable={boolean('scrollable', false)} horizontalSpace={select('horizontalSpace', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')} direction={select('direction', ['vertical', 'horizontal'], 'vertical')}>\n    <Input placeholder=\"Enter username\" value=\"\" outline label=\"Username\" onChangeText={text => action('pressed')} />\n    <Input placeholder=\"Enter email\" value=\"\" outline label=\"Email\" onChangeText={text => action('pressed')} />\n    <Input placeholder=\"Enter password\" value=\"\" outline label=\"Password\" onChangeText={text => action('pressed')} />\n    <Button>LOG IN</Button>\n    <Button outline>SIGN UP</Button>\n    <Button transparent>forget password?</Button>\n  </Stack>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Stack',
          component: _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: ['space', 'horizontalSpace', 'playground'],
        },
        mdxStoryNameToKey = {
          space: 'space',
          horizontalSpace: 'horizontalSpace',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1192: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'type', function() {
          return type;
        }),
        __webpack_require__.d(__webpack_exports__, 'chevron', function() {
          return chevron;
        }),
        __webpack_require__.d(__webpack_exports__, 'subtitle', function() {
          return subtitle;
        }),
        __webpack_require__.d(__webpack_exports__, 'avatarSource', function() {
          return avatarSource;
        }),
        __webpack_require__.d(__webpack_exports__, 'icon', function() {
          return icon;
        }),
        __webpack_require__.d(__webpack_exports__, 'disabled', function() {
          return disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'textColor', function() {
          return textColor;
        }),
        __webpack_require__.d(__webpack_exports__, 'textAlign', function() {
          return textAlign;
        }),
        __webpack_require__.d(__webpack_exports__, 'size', function() {
          return size;
        }),
        __webpack_require__.d(__webpack_exports__, 'space', function() {
          return space;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_require__(3),
        __webpack_require__(10)),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          100,
        ),
        react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'ListItem',
              component: _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'listitem'},
            'ListItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'A ListItem is a wrapper around ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'TextInput',
            ),
            ' with commonly used styles and easy to make customization.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {ListItem} from 'react-native-design-system';\n\n<ListItem chevron>This is a ListItem</ListItem>;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _ListItem__WEBPACK_IMPORTED_MODULE_8__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are three types of button mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'round',
            ),
            ', and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'outline',
            ),
            '. You can pass boolean value ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'round={true}',
            ),
            ' for round button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'outline={true}',
            ),
            ' for outline button and nothing for default solid button.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {mdxType: 'ListItem'},
                  'This is a ListItem',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, mdxType: 'ListItem'},
                  'This is a ListItem',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {
                    chevron: !0,
                    subtitle: 'This is a subtitle',
                    mdxType: 'ListItem',
                  },
                  'This is a ListItem',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'chevron'},
            'Chevron',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'chevro={true}',
            ),
            ' to show chevron at left. You can pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'chevronColor',
            ),
            ' to change its color.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'chevron', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {chevron: !0, mdxType: 'ListItem'},
                'This is a ListItem',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'subtitle'},
            'Subtitle',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass a string to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'subtitle',
            ),
            ' prop to go below list text.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'subtitle', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  chevron: !0,
                  subtitle: 'a generic subtitle',
                  mdxType: 'ListItem',
                },
                'Hey there!',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'avatar'},
            'Avatar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'avatarSource',
            ),
            ' to get an avatar on left. It receives prop same as an Image component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'avatarSource', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  chevron: !0,
                  avatarSource: {
                    uri: 'https://avatars.io/twitter/iamshadmirza',
                  },
                  subtitle: 'a generic subtitle',
                  mdxType: 'ListItem',
                },
                'Hey there!',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'leftIcon',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' that goes to left and right on the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'ListItem',
            ),
            '. You can customize icon with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'iconStyle',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  chevron: !0,
                  subtitle: '@iamshadmirza',
                  leftIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b,
                  )(
                    react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
                    {
                      name: 'twitter',
                      color: '#333',
                      size: 24,
                      mdxType: 'Feather',
                    },
                  ),
                  rightIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b,
                  )(
                    react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7___default.a,
                    {
                      name: 'adduser',
                      color: '#333',
                      size: 24,
                      mdxType: 'AntDesign',
                    },
                  ),
                  mdxType: 'ListItem',
                },
                'Follow me on twitter',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'disabled'},
            'Disabled',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'disabled={true}',
            ),
            ' property restrict any kind of action on ListItem.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'disabled', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  chevron: !0,
                  disabled: !0,
                  subtitle: 'a generic subtitle',
                  mdxType: 'ListItem',
                },
                'Hey there!',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'text-color'},
            'Text Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can pass any of the color present inside ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'textColor',
            ),
            ' in theme. Same property applies to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'subtitleColor',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'textColor', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  chevron: !0,
                  textColor: 'success',
                  subtitle: 'a generic subtitle',
                  mdxType: 'ListItem',
                },
                'Hey there!!',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'text-align'},
            'Text Align',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can align ListItem text position by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'auto',
            ),
            ',',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'left',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'center',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'right',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'justify',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'textAlign',
            ),
            ' property.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'textAlign', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, textAlign: 'left', mdxType: 'ListItem'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, textAlign: 'center', mdxType: 'ListItem'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, textAlign: 'right', mdxType: 'ListItem'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'As usual, 7 available sized.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'size', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xs', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xs', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'sm', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'md', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'lg', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xl', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: '2xl', mdxType: 'ListItem'},
                  'Hey there!',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can customize just the padding too by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' props with one of the 7 values (',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ' to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            ').',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xs', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xs', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'sm', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'md', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'lg', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xl', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: '2xl', mdxType: 'ListItem'},
                  'Hey there!',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with ListItem in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                chevron: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('chevron', !0),
                disabled: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('disabled', !1),
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'size',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_9__.a,
                  'medium',
                ),
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'space',
                  [
                    'none',
                    'xxsmall',
                    'xsmall',
                    'small',
                    'medium',
                    'large',
                    'xlarge',
                    'xxlarge',
                  ],
                  'medium',
                ),
                textColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'textColor',
                  ['default', 'heading', 'subtle', 'gray'],
                  'gray',
                ),
                subtitleColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'subtitleColor',
                  ['default', 'heading', 'subtle', 'gray'],
                  'gray',
                ),
                textAlign: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'center',
                  ['auto', 'left', 'center', 'right', 'justify'],
                  'left',
                ),
                mdxType: 'ListItem',
              },
              Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e)(
                'children',
                'Play around wit ListItem',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const type = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            null,
            'This is a ListItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0},
            'This is a ListItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, subtitle: 'This is a subtitle'},
            'This is a ListItem',
          ),
        );
      (type.storyName = 'type'),
        (type.parameters = {
          storySource: {
            source:
              '<Stack>\n      <ListItem>This is a ListItem</ListItem>\n      <ListItem chevron>This is a ListItem</ListItem>\n      <ListItem chevron subtitle="This is a subtitle">\n        This is a ListItem\n      </ListItem>\n    </Stack>',
          },
        });
      const chevron = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0},
          'This is a ListItem',
        );
      (chevron.storyName = 'chevron'),
        (chevron.parameters = {
          storySource: {
            source: '<ListItem chevron>This is a ListItem</ListItem>',
          },
        });
      const subtitle = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0, subtitle: 'a generic subtitle'},
          'Hey there!',
        );
      (subtitle.storyName = 'subtitle'),
        (subtitle.parameters = {
          storySource: {
            source:
              '<ListItem chevron subtitle="a generic subtitle">\n      Hey there!\n    </ListItem>',
          },
        });
      const avatarSource = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {
            chevron: !0,
            avatarSource: {uri: 'https://avatars.io/twitter/iamshadmirza'},
            subtitle: 'a generic subtitle',
          },
          'Hey there!',
        );
      (avatarSource.storyName = 'avatarSource'),
        (avatarSource.parameters = {
          storySource: {
            source:
              '<ListItem chevron avatarSource={{\n  uri: \'https://avatars.io/twitter/iamshadmirza\'\n}} subtitle="a generic subtitle">\n      Hey there!\n    </ListItem>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {
            chevron: !0,
            subtitle: '@iamshadmirza',
            leftIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
              {name: 'twitter', color: '#333', size: 24},
            ),
            rightIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7___default.a,
              {name: 'adduser', color: '#333', size: 24},
            ),
          },
          'Follow me on twitter',
        );
      (icon.storyName = 'icon'),
        (icon.parameters = {
          storySource: {
            source:
              '<ListItem chevron subtitle="@iamshadmirza" leftIcon={<Feather name="twitter" color="#333" size={24} />} rightIcon={<AntDesign name="adduser" color="#333" size={24} />}>\n      Follow me on twitter\n    </ListItem>',
          },
        });
      const disabled = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0, disabled: !0, subtitle: 'a generic subtitle'},
          'Hey there!',
        );
      (disabled.storyName = 'disabled'),
        (disabled.parameters = {
          storySource: {
            source:
              '<ListItem chevron disabled subtitle="a generic subtitle">\n      Hey there!\n    </ListItem>',
          },
        });
      const textColor = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0, textColor: 'success', subtitle: 'a generic subtitle'},
          'Hey there!!',
        );
      (textColor.storyName = 'textColor'),
        (textColor.parameters = {
          storySource: {
            source:
              '<ListItem chevron textColor="success" subtitle="a generic subtitle">\n      Hey there!!\n    </ListItem>',
          },
        });
      const textAlign = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, textAlign: 'left'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, textAlign: 'center'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, textAlign: 'right'},
            'Home',
          ),
        );
      (textAlign.storyName = 'textAlign'),
        (textAlign.parameters = {
          storySource: {
            source:
              '<Stack>\n      <ListItem chevron textAlign="left">\n        Home\n      </ListItem>\n      <ListItem chevron textAlign="center">\n        Home\n      </ListItem>\n      <ListItem chevron textAlign="right">\n        Home\n      </ListItem>\n    </Stack>',
          },
        });
      const size = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xs'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xs'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'sm'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'md'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'lg'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xl'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: '2xl'},
            'Hey there!',
          ),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <ListItem chevron size="xs">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="xs">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="sm">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="md">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="lg">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="xl">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="2xl">\n        Hey there!\n      </ListItem>\n    </Stack>',
          },
        });
      const space = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xs'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xs'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'sm'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'md'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'lg'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xl'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: '2xl'},
            'Hey there!',
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              '<Stack>\n      <ListItem chevron size="xs">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="xs">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="sm">\n        Hey there!\n      </ListItem>\n      <ListItem chevron space="md">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="lg">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="xl">\n        Hey there!\n      </ListItem>\n      <ListItem chevron size="2xl">\n        Hey there!\n      </ListItem>\n    </Stack>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {
            chevron: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('chevron', !0),
            disabled: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('disabled', !1),
            size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d)(
              'size',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_9__.a,
              'medium',
            ),
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'space',
              [
                'none',
                'xxsmall',
                'xsmall',
                'small',
                'medium',
                'large',
                'xlarge',
                'xxlarge',
              ],
              'medium',
            ),
            textColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('textColor', ['default', 'heading', 'subtle', 'gray'], 'gray'),
            subtitleColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )(
              'subtitleColor',
              ['default', 'heading', 'subtle', 'gray'],
              'gray',
            ),
            textAlign: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('center', ['auto', 'left', 'center', 'right', 'justify'], 'left'),
          },
          Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e)(
            'children',
            'Play around wit ListItem',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<ListItem chevron={boolean('chevron', true)} disabled={boolean('disabled', false)} size={select('size', sizeArray, 'md')} space={select('space', ['none', 'xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], 'md')} textColor={select('textColor', ['default', 'heading', 'subtle', 'gray'], 'gray')} subtitleColor={select('subtitleColor', ['default', 'heading', 'subtle', 'gray'], 'gray')} textAlign={select('center', ['auto', 'left', 'center', 'right', 'justify'], 'left')}>\n    {text('children', 'Play around wit ListItem')}\n  </ListItem>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'ListItem',
          component: _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          includeStories: [
            'type',
            'chevron',
            'subtitle',
            'avatarSource',
            'icon',
            'disabled',
            'textColor',
            'textAlign',
            'size',
            'space',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          type: 'type',
          chevron: 'chevron',
          subtitle: 'subtitle',
          avatarSource: 'avatarSource',
          icon: 'icon',
          disabled: 'disabled',
          textColor: 'textColor',
          textAlign: 'textAlign',
          size: 'size',
          space: 'space',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1193: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, '__page', function() {
          return __page;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _Overlay__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_require__(6),
        __webpack_require__(190));
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Overlay',
              component: _Overlay__WEBPACK_IMPORTED_MODULE_4__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'overlay'},
            'Overlay',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Overlay covers the view and adds a transparent layer on top of it. Any view can be passed as a children. Used generally as a prompt or notify user about something.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import { Overlay } from 'react-native-design-system';\n\n<Overlay visible={this.state.visible} onRequestClose={() => this.setState({ visible: false })}>\n  <View>\n    <Text>Hey there!</Text>\n  </View>\n</Overlay>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Overlay__WEBPACK_IMPORTED_MODULE_4__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'modal-props'},
            'Modal Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Accepts all the modal props like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'visible={true}',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'onRequestClose',
            ),
            ', etc.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'styles'},
            'Styles',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'The container receives an ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'style',
            ),
            ' props and overlay can be customized with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'overlayStyle',
            ),
            ' which is the inside content on transparent layer.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'dimensions'},
            'Dimensions',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Overlay has a default width and height of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '80%',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '70%',
            ),
            '. It can be customized by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'width',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'height',
            ),
            ' props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'border-radius'},
            'Border Radius',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Overlay curves can be customized with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'borderRadius',
            ),
            ' prop, default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '3',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'backgrounds'},
            'Backgrounds',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Container has a default background of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'semitransparent',
            ),
            ' and overlay is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'clearWhite',
            ),
            ' from ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of theme. You can pass any brandColor inside ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'overlayBackground',
            ),
            ' props.',
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const __page = () => {
        throw new Error('Docs-only story');
      };
      __page.parameters = {docsOnly: !0};
      const componentMeta = {
          title: 'Overlay',
          component: _Overlay__WEBPACK_IMPORTED_MODULE_4__.a,
          includeStories: ['__page'],
        },
        mdxStoryNameToKey = {};
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1194: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'type', function() {
          return type;
        }),
        __webpack_require__.d(__webpack_exports__, 'label', function() {
          return label;
        }),
        __webpack_require__.d(__webpack_exports__, 'error', function() {
          return error;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'disabled', function() {
          return disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'onCancel', function() {
          return onCancel;
        }),
        __webpack_require__.d(__webpack_exports__, 'loading', function() {
          return loading;
        }),
        __webpack_require__.d(__webpack_exports__, 'size', function() {
          return size;
        }),
        __webpack_require__.d(__webpack_exports__, 'icon', function() {
          return icon;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'SearchBar',
              component: _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'searchbar'},
            'SearchBar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'A SearchBar is a wrapper around ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'TextInput',
            ),
            ' with commonly used styles and easy to make customization. Receives all the props of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Input',
            ),
            ' component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {SearchBar} from 'react-native-design-system';\n\n<SearchBar\n  round\n  value={this.state.text}\n  onChangeText={text => handleChange(text)}\n/>;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'There are three types of button mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'round',
            ),
            ', and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'outline',
            ),
            '. You can pass boolean value ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'round={true}',
            ),
            ' for round button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'outline={true}',
            ),
            ' for outline button and nothing for default solid button.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    value: '',
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    round: !0,
                    value: '',
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    value: '',
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    round: !0,
                    value: '',
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'label'},
            'Label',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'label',
            ),
            ' to render a label string above SearchBar. You can customise label using ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'labelColor',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'labelStyle',
            ),
            ' props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'label', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  label: 'Username',
                  placeholder: 'Enter Username',
                  value: '',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'SearchBar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'error-and-error-caption'},
            'Error and Error Caption',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'error={true}',
            ),
            ' when you want to show error and pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'errorCaption',
            ),
            ' string to render the string below SearchBar to notify user about the error.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'error', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  error: !0,
                  value: '',
                  errorCaption: 'Please try again',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'SearchBar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'color',
            ),
            ' from brandColor to change outline color of SearchBar. Background is managed by ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' property inside theme. You can also directly pass a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' prop with one of the colors in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  color: 'secondary',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'SearchBar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'disabled'},
            'Disabled',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'disabled={true}',
            ),
            ' property restrict any kind of action on SearchBar.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'disabled', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  disabled: !0,
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'SearchBar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'oncancel'},
            'onCancel',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'pass a function to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'onCancel',
            ),
            ' to clear the input or cancel search. It will be triggered on clicking right icon. Cancel icon (right) will appear only when there is some text inside SearchBar. Right can be customised by passing any icon to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' prop.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'onCancel', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  value: 'I typed something...',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  onCancel: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'SearchBar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'loading'},
            'Loading',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'loading={true}',
            ),
            ' to show a indicator while the search is going on.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'loading', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  round: !0,
                  value: 'Searching for something...',
                  loading: !0,
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  onCancel: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'SearchBar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'As usual, 7 available sized.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'size', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'xs',
                    placeholder: 'Enter username',
                    value: '',
                    loading: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'xs',
                    placeholder: 'Enter username',
                    value: '',
                    loading: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'sm',
                    placeholder: 'Enter username',
                    value: '',
                    loading: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'md',
                    placeholder: 'Enter username',
                    value: '',
                    loading: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'lg',
                    placeholder: 'Enter username',
                    value: '',
                    loading: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'xl',
                    placeholder: 'Enter username',
                    value: '',
                    loading: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: '2xl',
                    placeholder: 'Enter username',
                    value: '',
                    loading: !0,
                    onChangeText: text =>
                      Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                    mdxType: 'SearchBar',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'You can pass any icon via ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'leftIcon',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'p',
              {parentName: 'blockquote'},
              'Icon size and color should be defined by developers manually according to button size.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  placeholder: 'Search for location',
                  leftIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b,
                  )(
                    react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
                    {
                      name: 'crosshair',
                      size: 22,
                      color: 'gray',
                      mdxType: 'Feather',
                    },
                  ),
                  value: '',
                  onChangeText: text =>
                    Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                  mdxType: 'SearchBar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with SearchBar in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'size',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
                  'medium',
                ),
                outline: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('outline', !1),
                round: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('round', !0),
                loading: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('loading', !0),
                value: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e,
                )('value', 'Type something'),
                error: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
                )('error', !1),
                errorCaption: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e,
                )('errorCaption', 'Please try again'),
                onChangeText: text =>
                  Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('text changed'),
                onCancel: text =>
                  Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('cancel triggered'),
                mdxType: 'SearchBar',
              },
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const type = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              value: '',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              round: !0,
              value: '',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              value: '',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              round: !0,
              value: '',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
        );
      (type.storyName = 'type'),
        (type.parameters = {
          storySource: {
            source:
              '<Stack>\n      <SearchBar value="" onChangeText={text => action(\'pressed\')} />\n      <SearchBar round value="" onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline value="" onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline round value="" onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const label = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            label: 'Username',
            placeholder: 'Enter Username',
            value: '',
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
          },
        );
      (label.storyName = 'label'),
        (label.parameters = {
          storySource: {
            source:
              '<SearchBar outline label="Username" placeholder="Enter Username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const error = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            error: !0,
            value: '',
            errorCaption: 'Please try again',
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
          },
        );
      (error.storyName = 'error'),
        (error.parameters = {
          storySource: {
            source:
              '<SearchBar outline error={true} value="" errorCaption="Please try again" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            color: 'secondary',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
          },
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<SearchBar outline color="secondary" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const disabled = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            disabled: !0,
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
          },
        );
      (disabled.storyName = 'disabled'),
        (disabled.parameters = {
          storySource: {
            source:
              '<SearchBar outline disabled placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const onCancel = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            value: 'I typed something...',
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            onCancel: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
          },
        );
      (onCancel.storyName = 'onCancel'),
        (onCancel.parameters = {
          storySource: {
            source:
              "<SearchBar outline value=\"I typed something...\" onChangeText={text => action('pressed')} onCancel={text => action('pressed')} />",
          },
        });
      const loading = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            round: !0,
            value: 'Searching for something...',
            loading: !0,
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            onCancel: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
          },
        );
      (loading.storyName = 'loading'),
        (loading.parameters = {
          storySource: {
            source:
              "<SearchBar round value=\"Searching for something...\" loading={true} onChangeText={text => action('pressed')} onCancel={text => action('pressed')} />",
          },
        });
      const size = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'xs',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'xs',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'sm',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'md',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'lg',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'xl',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: '2xl',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <SearchBar outline size="xs" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="xs" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="sm" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="md" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="lg" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="xl" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="2xl" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            placeholder: 'Search for location',
            leftIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
              {name: 'crosshair', size: 22, color: 'gray'},
            ),
            value: '',
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
          },
        );
      (icon.storyName = 'icon'),
        (icon.parameters = {
          storySource: {
            source:
              '<SearchBar outline placeholder="Search for location" leftIcon={<Feather name="crosshair" size={22} color="gray" />} value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d)(
              'size',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.a,
              'medium',
            ),
            outline: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('outline', !1),
            round: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('round', !0),
            loading: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('loading', !0),
            value: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e,
            )('value', 'Type something'),
            error: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.a,
            )('error', !1),
            errorCaption: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.e,
            )('errorCaption', 'Please try again'),
            onChangeText: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('text changed'),
            onCancel: text =>
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('cancel triggered'),
          },
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<SearchBar size={select('size', sizeArray, 'md')} outline={boolean('outline', false)} round={boolean('round', true)} loading={boolean('loading', true)} value={text('value', 'Type something')} error={boolean('error', false)} errorCaption={text('errorCaption', 'Please try again')} onChangeText={text => action('text changed')} onCancel={text => action('cancel triggered')} />",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'SearchBar',
          component: _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          includeStories: [
            'type',
            'label',
            'error',
            'color',
            'disabled',
            'onCancel',
            'loading',
            'size',
            'icon',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          type: 'type',
          label: 'label',
          error: 'error',
          color: 'color',
          disabled: 'disabled',
          onCancel: 'onCancel',
          loading: 'loading',
          size: 'size',
          icon: 'icon',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1195: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'sizes', function() {
          return sizes;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      __webpack_require__(1);
      var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          4,
        ),
        _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          6,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10),
        _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.d,
            {
              title: 'Text',
              component: _Text__WEBPACK_IMPORTED_MODULE_5__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'text'},
            'Text',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Simple ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'Text',
            ),
            ' element that gives you different sizes and colors.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {Text} from 'react-native-design-system';\n\n<Text>Hello Design System</Text>;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.f,
            {of: _Text__WEBPACK_IMPORTED_MODULE_5__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            '7 available font sizes are ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '11',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '12.5',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '14',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '16',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '20',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '26',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              '32',
            ),
            '. You can customize them in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'fontSize',
            ),
            ' property of theme.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: '2xl', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'xl', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'lg', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'md', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'sm', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'xs', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'xs', mdxType: 'Text'},
                  'Hello Design System',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Uses color defined in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'textColor',
            ),
            ' in theme.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.e,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {color: 'heading', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {color: 'body', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {color: 'subtle', mdxType: 'Text'},
                  'Hello Design System',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'scale'},
            'Scale',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'scale={false}',
            ),
            " if you don't want text to scale when device default font size changes. Default is ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              'inlineCode',
              {parentName: 'p'},
              'true',
            ),
            ' and text will scale accrording to default font size.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            'p',
            null,
            'Play with Text in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.g,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _Text__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )(
                  'size',
                  _util_prop_types__WEBPACK_IMPORTED_MODULE_6__.a,
                  'medium',
                ),
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
                )('color', ['heading', 'body', 'subtle'], 'heading'),
                mdxType: 'Text',
              },
              'Hello World',
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const sizes = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: '2xl'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'xl'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'lg'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'md'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'sm'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'xs'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'xs'},
            'Hello Design System',
          ),
        );
      (sizes.storyName = 'sizes'),
        (sizes.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Text size="2xl">Hello Design System</Text>\n      <Text size="xl">Hello Design System</Text>\n      <Text size="lg">Hello Design System</Text>\n      <Text size="md">Hello Design System</Text>\n      <Text size="sm">Hello Design System</Text>\n      <Text size="xs">Hello Design System</Text>\n      <Text size="xs">Hello Design System</Text>\n    </Stack>',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {color: 'heading'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {color: 'body'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {color: 'subtle'},
            'Hello Design System',
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Text color="heading">Hello Design System</Text>\n      <Text color="body">Hello Design System</Text>\n      <Text color="subtle">Hello Design System</Text>\n    </Stack>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
          _Text__WEBPACK_IMPORTED_MODULE_5__.a,
          {
            size: Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d)(
              'size',
              _util_prop_types__WEBPACK_IMPORTED_MODULE_6__.a,
              'medium',
            ),
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.d,
            )('color', ['heading', 'body', 'subtle'], 'heading'),
          },
          'Hello World',
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Text size={select('size', sizeArray, 'md')} color={select('color', ['heading', 'body', 'subtle'], 'heading')}>\n    Hello World\n  </Text>",
          },
          decorators: [_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.f],
        });
      const componentMeta = {
          title: 'Text',
          component: _Text__WEBPACK_IMPORTED_MODULE_5__.a,
          includeStories: ['sizes', 'color', 'playground'],
        },
        mdxStoryNameToKey = {
          sizes: 'sizes',
          color: 'color',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.b)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1197: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(
          preview_namespaceObject,
          'decorators',
          function() {
            return decorators;
          },
        );
      __webpack_require__(21),
        __webpack_require__(31),
        __webpack_require__(75),
        __webpack_require__(969),
        __webpack_require__(67),
        __webpack_require__(68),
        __webpack_require__(970),
        __webpack_require__(971),
        __webpack_require__(255);
      var client_api = __webpack_require__(1208),
        esm = __webpack_require__(16),
        react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        cjs = (__webpack_require__(280),
        __webpack_require__(43),
        __webpack_require__(15),
        __webpack_require__(9),
        __webpack_require__(38),
        __webpack_require__(34),
        __webpack_require__(281),
        __webpack_require__(156),
        __webpack_require__(154),
        __webpack_require__(47),
        __webpack_require__(17),
        __webpack_require__(19),
        __webpack_require__(190),
        __webpack_require__(172),
        __webpack_require__(29),
        __webpack_require__(221),
        __webpack_require__(10),
        __webpack_require__(41),
        __webpack_require__(110),
        __webpack_require__(14),
        __webpack_require__(5)),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        ThemeProvider = __webpack_require__(24),
        util_prop_types = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var getChildrenStyle = function getChildrenStyle(_ref, index) {
          var theme = _ref.theme,
            space = _ref.space,
            horizontalSpace = _ref.horizontalSpace,
            cropEndSpace = _ref.cropEndSpace,
            data = _ref.data,
            childStyle = [{marginBottom: theme.space[space]}];
          return (
            index === 0 && childStyle.push({marginTop: theme.space[space]}),
            horizontalSpace &&
              childStyle.push({
                marginHorizontal: theme.space[horizontalSpace],
              }),
            cropEndSpace &&
              (index === 0 && childStyle.push({marginTop: 0}),
              index === data.length - 1 && childStyle.push({marginBottom: 0})),
            childStyle
          );
        },
        StackList = react_default.a.forwardRef(function(props, ref) {
          var theme = Object(ThemeProvider.b)();
          return react_default.a.createElement(
            cjs.FlatList,
            _extends({ref: ref}, props, {
              style: cjs.StyleSheet.flatten([
                {backgroundColor: theme.colors[props.background]},
                props.style,
              ]),
              renderItem: function renderItem(child) {
                return react_default.a.createElement(
                  cjs.View,
                  {
                    style: getChildrenStyle(
                      Object.assign({}, props, {theme: theme}),
                      child.index,
                    ),
                  },
                  props.renderItem(child),
                );
              },
            }),
          );
        });
      (StackList.propTypes = Object.assign(
        {
          style: prop_types_default.a.oneOfType([
            prop_types_default.a.object,
            prop_types_default.a.array,
          ]),
          space: util_prop_types.c,
          horizontalSpace: util_prop_types.c,
          background: prop_types_default.a.string,
          cropEndSpace: prop_types_default.a.bool,
        },
        cjs.FlatList.propTypes,
      )),
        (StackList.defaultProps = {
          space: 'medium',
          horizontalSpace: 'none',
          cropEndSpace: !0,
          background: 'backgroundDark',
        }),
        (StackList.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'StackList',
          props: {
            space: {
              defaultValue: {value: "'md'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            horizontalSpace: {
              defaultValue: {value: "'none'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            cropEndSpace: {
              defaultValue: {value: 'true', computed: !1},
              type: {name: 'bool'},
              required: !1,
              description: '',
            },
            background: {
              defaultValue: {value: "'backgroundDark'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            style: {
              type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
              required: !1,
              description: '',
            },
          },
          composes: ['react-native'],
        });
      function InlineList_extends() {
        return (InlineList_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Layout/StackList.js'] = {
          name: 'StackList',
          docgenInfo: StackList.__docgenInfo,
          path: 'src/Layout/StackList.js',
        });
      var InlineList_getChildrenStyle = function getChildrenStyle(_ref, index) {
          var theme = _ref.theme,
            space = _ref.space,
            verticalSpace = _ref.verticalSpace,
            cropEndSpace = _ref.cropEndSpace,
            data = _ref.data,
            childStyle = [{marginRight: theme.space[space]}];
          return (
            index === 0 && childStyle.push({marginLeft: theme.space[space]}),
            verticalSpace &&
              childStyle.push({
                marginVertical: theme.space[verticalSpace],
              }),
            cropEndSpace &&
              (index === 0 && childStyle.push({marginLeft: 0}),
              index === data.length - 1 && childStyle.push({marginRight: 0})),
            childStyle
          );
        },
        InlineList = react_default.a.forwardRef(function(props, ref) {
          var theme = Object(ThemeProvider.b)();
          return react_default.a.createElement(
            cjs.FlatList,
            InlineList_extends({ref: ref, horizontal: !0}, props, {
              style: cjs.StyleSheet.flatten([
                {backgroundColor: theme.colors.background},
                props.style,
              ]),
              renderItem: function renderItem(child) {
                return react_default.a.createElement(
                  cjs.View,
                  {
                    style: InlineList_getChildrenStyle(
                      Object.assign({}, props, {theme: theme}),
                      child.index,
                    ),
                  },
                  props.renderItem(child),
                );
              },
            }),
          );
        });
      (InlineList.propTypes = Object.assign(
        {
          style: prop_types_default.a.oneOfType([
            prop_types_default.a.object,
            prop_types_default.a.array,
          ]),
          space: util_prop_types.c,
          verticalSpace: util_prop_types.c,
          cropEndSpace: prop_types_default.a.bool,
        },
        cjs.FlatList.propTypes,
      )),
        (InlineList.defaultProps = {
          space: 'medium',
          verticalSpace: 'none',
          cropEndSpace: !0,
        }),
        (InlineList.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'InlineList',
          props: {
            space: {
              defaultValue: {value: "'md'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            verticalSpace: {
              defaultValue: {value: "'none'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            cropEndSpace: {
              defaultValue: {value: 'true', computed: !1},
              type: {name: 'bool'},
              required: !1,
              description: '',
            },
            style: {
              type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
              required: !1,
              description: '',
            },
          },
          composes: ['react-native'],
        });
      function TileList_extends() {
        return (TileList_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Layout/InlineList.js'] = {
          name: 'InlineList',
          docgenInfo: InlineList.__docgenInfo,
          path: 'src/Layout/InlineList.js',
        });
      var TileList_getChildrenStyle = function getChildrenStyle(_ref, index) {
          var theme = _ref.theme,
            space = _ref.space;
          _ref.horizontalSpace, _ref.cropEndSpace, _ref.data;
          return [
            {
              marginLeft: theme.space[space],
              marginTop: theme.space[space],
            },
          ];
        },
        TileList_TileList = function TileList(props) {
          var theme = Object(ThemeProvider.b)();
          return react_default.a.createElement(
            cjs.FlatList,
            TileList_extends({}, props, {
              numColumns: 3,
              renderItem: function renderItem(child) {
                return react_default.a.createElement(
                  cjs.View,
                  {
                    style: TileList_getChildrenStyle(
                      Object.assign({}, props, {theme: theme}),
                      child.index,
                    ),
                  },
                  props.renderItem(child),
                );
              },
            }),
          );
        };
      (TileList_TileList.displayName = 'TileList'),
        (TileList_TileList.propTypes = Object.assign(
          {
            style: prop_types_default.a.oneOfType([
              prop_types_default.a.object,
              prop_types_default.a.array,
            ]),
            space: util_prop_types.c,
            horizontalSpace: util_prop_types.c,
            cropEndSpace: prop_types_default.a.bool,
          },
          cjs.FlatList.propTypes,
        )),
        (TileList_TileList.defaultProps = {
          space: 'medium',
          horizontalSpace: 'none',
          cropEndSpace: !1,
        }),
        (TileList_TileList.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TileList',
          props: {
            space: {
              defaultValue: {value: "'md'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            horizontalSpace: {
              defaultValue: {value: "'none'", computed: !1},
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            cropEndSpace: {
              defaultValue: {value: 'false', computed: !1},
              type: {name: 'bool'},
              required: !1,
              description: '',
            },
            style: {
              type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
              required: !1,
              description: '',
            },
          },
          composes: ['react-native'],
        });
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Layout/TileList.js'] = {
          name: 'TileList',
          docgenInfo: TileList_TileList.__docgenInfo,
          path: 'src/Layout/TileList.js',
        });
      __webpack_require__(111), __webpack_require__(32);
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            m = _ref.m,
            mv = _ref.mv,
            mh = _ref.mh,
            mt = _ref.mt,
            mb = _ref.mb,
            ml = _ref.ml,
            mr = _ref.mr,
            p = _ref.p,
            pv = _ref.pv,
            ph = _ref.ph,
            pt = _ref.pt,
            pb = _ref.pb,
            pl = _ref.pl,
            pr = _ref.pr,
            style = {};
          return (
            m && (style.margin = theme.space[m]),
            mv && (style.marginVerticle = theme.space[mv]),
            mh && (style.marginHorizontal = theme.space[mh]),
            mt && (style.marginTop = theme.space[mt]),
            mb && (style.marginBottom = theme.space[mb]),
            ml && (style.marginLeft = theme.space[ml]),
            mr && (style.marginRight = theme.space[mr]),
            p && (style.padding = theme.space[p]),
            pv && (style.paddingVerticle = theme.space[pv]),
            ph && (style.paddingHorizontal = theme.space[ph]),
            pt && (style.paddingTop = theme.space[pt]),
            pb && (style.paddingBottom = theme.space[pb]),
            pl && (style.paddingLeft = theme.space[pl]),
            pr && (style.paddingRight = theme.space[pr]),
            style
          );
        },
        Spacer_Spacer = function Spacer(_ref2) {
          var style = _ref2.style,
            children = _ref2.children,
            props = _objectWithoutProperties(_ref2, ['style', 'children']),
            theme = Object(ThemeProvider.b)();
          return react_default.a.createElement(
            cjs.View,
            {
              style: [
                getContainerStyle(Object.assign({theme: theme}, props)),
                style,
              ],
            },
            children,
          );
        };
      (Spacer_Spacer.displayName = 'Spacer'),
        (Spacer_Spacer.propTypes = {
          style: prop_types_default.a.oneOfType([
            prop_types_default.a.object,
            prop_types_default.a.array,
          ]),
          m: util_prop_types.c,
          mv: util_prop_types.c,
          mh: util_prop_types.c,
          mt: util_prop_types.c,
          mb: util_prop_types.c,
          ml: util_prop_types.c,
          mr: util_prop_types.c,
          p: util_prop_types.c,
          pv: util_prop_types.c,
          ph: util_prop_types.c,
          pt: util_prop_types.c,
          pb: util_prop_types.c,
          pl: util_prop_types.c,
          pr: util_prop_types.c,
          children: prop_types_default.a.oneOfType([
            prop_types_default.a.array,
            prop_types_default.a.element,
          ]).isRequired,
        }),
        (Spacer_Spacer.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Spacer',
          props: {
            style: {
              type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
              required: !1,
              description: '',
            },
            m: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            mv: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            mh: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            mt: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            mb: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            ml: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            mr: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            p: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            pv: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            ph: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            pt: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            pb: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            pl: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            pr: {
              type: {name: 'custom', raw: 'spaces'},
              required: !1,
              description: '',
            },
            children: {
              type: {
                name: 'union',
                value: [{name: 'array'}, {name: 'element'}],
              },
              required: !0,
              description: '',
            },
          },
        });
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Layout/Spacer.js'] = {
          name: 'Spacer',
          docgenInfo: Spacer_Spacer.__docgenInfo,
          path: 'src/Layout/Spacer.js',
        });
      __webpack_require__(158);
      var colors = __webpack_require__(89),
        theme_theme = {
          fontSize: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
            '2xl': 24,
            '3xl': 30,
            '4xl': 36,
            '5xl': 48,
            '6xl': 60,
            '7xl': 72,
            '8xl': 96,
            '9xl': 128,
          },
          size: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 20,
            '2xl': 24,
            '3xl': 30,
            '4xl': 36,
            '5xl': 48,
            '6xl': 60,
            '7xl': 72,
            '8xl': 96,
            '9xl': 128,
          },
          actionButtonSize: {
            xs: 30,
            sm: 40,
            md: 50,
            lg: 60,
            xl: 70,
            '2xl': 80,
            '3xl': 90,
            '4xl': 100,
            '5xl': 110,
            '6xl': 120,
            '7xl': 130,
            '8xl': 140,
            '9xl': 150,
          },
          buttonSize: {
            xs: 8,
            sm: 10,
            md: 12,
            lg: 14,
            xl: 16,
            '2xl': 18,
            '3xl': 20,
            '4xl': 22,
            '5xl': 24,
            '6xl': 28,
            '7xl': 32,
            '8xl': 36,
            '9xl': 40,
          },
          buttonWidth: {
            xs: 100,
            sm: 120,
            md: 140,
            lg: 160,
            xl: 180,
            '2xl': 200,
            '3xl': 220,
            '4xl': 240,
            '5xl': 260,
            '6xl': 280,
            '7xl': 300,
            '8xl': 340,
            '9xl': 360,
          },
          iconSize: {
            xs: 16,
            sm: 18,
            md: 22,
            lg: 26,
            xl: 28,
            '2xl': 32,
            '3xl': 36,
            '4xl': 40,
            '5xl': 44,
            '6xl': 46,
            '7xl': 50,
            '8xl': 54,
          },
          avatarSize: {
            xs: 20,
            sm: 30,
            md: 40,
            lg: 60,
            xl: 70,
            '2xl': 80,
            '3xl': 90,
            '4xl': 100,
            '5xl': 120,
            '6xl': 140,
            '7xl': 160,
            '8xl': 180,
            '9xl': 200,
          },
          badgeSize: {
            xs: 10,
            sm: 11,
            md: 12,
            lg: 13.5,
            xl: 16,
            '2xl': 18,
            '3xl': 20,
            '4xl': 22,
            '5xl': 24,
            '6xl': 26,
            '7xl': 28,
            '8xl': 30,
            '9xl': 32,
          },
          miniBadgeSize: {
            xxsmall: 10,
            xsmall: 11,
            small: 12,
            medium: 15,
            large: 17,
            xlarge: 19,
            xxlarge: 21,
          },
          space: {
            xs: 0,
            sm: 2,
            md: 4,
            lg: 8,
            xl: 10,
            '2xl': 12,
            '3xl': 13.2,
            '4xl': 16,
            '5xl': 20,
            '6xl': 24,
            '7xl': 28,
            '8xl': 32,
            '9xl': 36,
          },
          indicatorSize: {
            xs: 0.8,
            sm: 0.9,
            md: 1,
            lg: 1.1,
            xl: 1.25,
            '2xl': 1.5,
            '3xl': 1.7,
            '4xl': 1.8,
            '5xl': 2,
            '6xl': 2.2,
            '7xl': 2.4,
            '8xl': 2.6,
            '9xl': 2.8,
          },
          colors: Object.assign({}, colors.a),
          lineHeight: {
            xs: 16,
            sm: 20,
            md: 24,
            lg: 28,
            xl: 28,
            '2xl': 32,
            '3xl': 36,
            '4xl': 40,
            '5xl': 48,
            '6xl': 60,
            '7xl': 72,
            '8xl': 96,
            '9xl': 128,
          },
        },
        util_theme = theme_theme,
        decorators = [
          __webpack_require__(6).f,
          function(Story) {
            return react_default.a.createElement(
              ThemeProvider.a,
              {theme: util_theme},
              react_default.a.createElement(Story, null),
            );
          },
        ];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      Object.keys(preview_namespaceObject).forEach(function(key) {
        var value = preview_namespaceObject[key];
        switch (key) {
          case 'args':
          case 'argTypes':
            return esm.a.warn(
              'Invalid args/argTypes in config, ignoring.',
              JSON.stringify(value),
            );
          case 'decorators':
            return value.forEach(function(decorator) {
              return Object(client_api.b)(decorator, !1);
            });
          case 'loaders':
            return value.forEach(function(loader) {
              return Object(client_api.c)(loader, !1);
            });
          case 'parameters':
            return Object(client_api.d)(
              (function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i] != null ? arguments[i] : {};
                  i % 2
                    ? ownKeys(Object(source), !0).forEach(function(key) {
                        _defineProperty(target, key, source[key]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        target,
                        Object.getOwnPropertyDescriptors(source),
                      )
                    : ownKeys(Object(source)).forEach(function(key) {
                        Object.defineProperty(
                          target,
                          key,
                          Object.getOwnPropertyDescriptor(source, key),
                        );
                      });
                }
                return target;
              })({}, value),
              !1,
            );
          case 'argTypesEnhancers':
            return value.forEach(function(enhancer) {
              return Object(client_api.a)(enhancer);
            });
          case 'globals':
          case 'globalTypes':
            var v = {};
            return (v[key] = value), Object(client_api.d)(v, !1);
          default:
            return console.log(key + ' was not supported :( !');
        }
      });
    },
    12: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return RadioItem;
      });
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          112,
        ),
        react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          24,
        ),
        _util_accessibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          69,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          13,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var Context = Object(react__WEBPACK_IMPORTED_MODULE_4__.createContext)(),
        Provider = Context.Provider,
        getTextStyle = function getTextStyle(_ref) {
          var theme = _ref.theme,
            size = _ref.size,
            textColor = _ref.textColor,
            iconRight = _ref.iconRight,
            textStyle = [
              {
                fontSize: theme.fontSize[size],
                color: theme.colors[textColor],
                marginLeft: 10,
                marginVertical: 2.5,
              },
            ];
          return (
            iconRight && textStyle.push({marginLeft: 0, marginRight: 10}),
            textStyle
          );
        },
        renderIcon = function renderIcon(_ref2) {
          var theme = _ref2.theme,
            size = _ref2.size,
            color = _ref2.color,
            id = _ref2.id,
            activeId = _ref2.activeId,
            props = _objectWithoutProperties(_ref2, [
              'theme',
              'size',
              'color',
              'id',
              'activeId',
            ]);
          return activeId === id
            ? props.checkedIcon ||
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7___default.a,
                  {
                    name: 'ios-radio-button-on',
                    size: 1.2 * theme.fontSize[size],
                    color: theme.colors[color],
                  },
                )
            : props.uncheckedIcon ||
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7___default.a,
                  {
                    name: 'ios-radio-button-off',
                    size: 1.2 * theme.fontSize[size],
                    color: theme.colors[color],
                  },
                );
        },
        RadioItem = function RadioItem(_ref3) {
          var children = _ref3.children,
            id = _ref3.id,
            otherProps = _objectWithoutProperties(_ref3, ['children', 'id']),
            _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__.useContext)(
              Context,
            ),
            selectItem = _useContext.selectItem,
            style = _useContext.style,
            props = _objectWithoutProperties(_useContext, [
              'selectItem',
              'style',
            ]),
            propsToPass = Object.assign({}, props, {id: id}),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            TouchableElement,
            _extends(
              {},
              props,
              Object(_util_accessibility__WEBPACK_IMPORTED_MODULE_9__.a)(
                otherProps,
              ),
              {
                onPress: function onPress() {
                  return selectItem(id);
                },
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_5__.View,
              {style: [styles.itemContainer, style]},
              !props.iconRight && renderIcon(propsToPass),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                    [getTextStyle(propsToPass), props.textStyle],
                  ),
                },
                children,
              ),
              props.iconRight && renderIcon(propsToPass),
            ),
          );
        };
      RadioItem.displayName = 'RadioItem';
      var RadioButton = function RadioButton(_ref4) {
        var children = _ref4.children,
          props = _objectWithoutProperties(_ref4, ['children']),
          theme = Object(_util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__.b)();
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          Provider,
          {value: Object.assign({}, props, {theme: theme})},
          children,
        );
      };
      (RadioButton.displayName = 'RadioButton'),
        (RadioButton.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            ],
          ),
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
            ],
          ).isRequired,
          activeId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
            ],
          ).isRequired,
          iconRight: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          textColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          size: _util_prop_types__WEBPACK_IMPORTED_MODULE_10__.b,
          selectItem:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
          checkedIcon:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          uncheckedIcon:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
        }),
        (RadioButton.defaultProps = {
          size: 'medium',
          color: 'primary',
          textColor: 'body',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        itemContainer: {flexDirection: 'row', alignItems: 'center'},
      });
      (RadioButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'RadioButton',
        props: {
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          color: {
            defaultValue: {value: "'primary'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          textColor: {
            defaultValue: {value: "'body'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          children: {
            type: {name: 'union', value: [{name: 'array'}, {name: 'element'}]},
            required: !0,
            description: '',
          },
          activeId: {
            type: {name: 'union', value: [{name: 'number'}, {name: 'string'}]},
            required: !0,
            description: '',
          },
          iconRight: {type: {name: 'bool'}, required: !1, description: ''},
          selectItem: {type: {name: 'func'}, required: !0, description: ''},
          checkedIcon: {type: {name: 'element'}, required: !1, description: ''},
          uncheckedIcon: {
            type: {name: 'element'},
            required: !1,
            description: '',
          },
        },
      }),
        (__webpack_exports__.b = RadioButton),
        (RadioItem.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'RadioItem',
        }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/RadioButton/RadioButton.js'] = {
            name: 'RadioItem',
            docgenInfo: RadioItem.__docgenInfo,
            path: 'src/RadioButton/RadioButton.js',
          }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/RadioButton/RadioButton.js'] = {
            name: 'RadioButton',
            docgenInfo: RadioButton.__docgenInfo,
            path: 'src/RadioButton/RadioButton.js',
          });
    },
    1200: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'count', function() {
          return MenuAddButton_stories_count;
        }),
        __webpack_require__.d(__webpack_exports__, 'disabled', function() {
          return disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'size', function() {
          return size;
        }),
        __webpack_require__.d(__webpack_exports__, 'custom', function() {
          return custom;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(0),
        blocks = __webpack_require__(4),
        dist_esm = __webpack_require__(6),
        addon_actions_dist_esm = __webpack_require__(3),
        Stack = __webpack_require__(10),
        AntDesign = __webpack_require__(100),
        AntDesign_default = __webpack_require__.n(AntDesign),
        MenuAddButton = __webpack_require__(38),
        prop_types = (__webpack_require__(130),
        __webpack_require__(31),
        __webpack_require__(46),
        __webpack_require__(30),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(60),
        __webpack_require__(20),
        __webpack_require__(86),
        __webpack_require__(13));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              arr &&
              ((typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
                arr['@@iterator']);
            if (_i == null) {
              return;
            }
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              ) {}
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function ExampleMenuButton() {
        var _useState2 = _slicedToArray(Object(react.useState)(0), 2),
          count = _useState2[0],
          setCount = _useState2[1];
        return react_default.a.createElement(MenuAddButton.a, {
          size: Object(dist_esm.d)('size', prop_types.a, 'medium'),
          disabled: Object(dist_esm.a)('disabled', !1),
          onIncrement: function onIncrement() {
            return setCount(count + 1);
          },
          onDecrement: function onDecrement() {
            return setCount(count - 1);
          },
          iconColor: Object(dist_esm.b)('iconColor', '#333'),
          count: count,
        });
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      (ExampleMenuButton.displayName = 'ExampleMenuButton'),
        (ExampleMenuButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ExampleMenuButton',
        }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Button/MenuAddButton.example.js'] = {
            name: 'ExampleMenuButton',
            docgenInfo: ExampleMenuButton.__docgenInfo,
            path: 'src/Button/MenuAddButton.example.js',
          });
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(blocks.d, {
            title: 'MenuAddButton',
            component: MenuAddButton.a,
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', {id: 'menuaddbutton'}, 'MenuAddButton'),
          Object(esm.b)(
            'p',
            null,
            'A ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'MenuAddButton'),
            ' is a clickable button to carry out actions like adding and removing items from cart.',
          ),
          Object(esm.b)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {MenuAddButton} from 'react-native-design-system';\n\n<MenuAddButton\n  onIncrement={() => handleIncrement()}\n  onDecrement={() => handleDecrement()}\n  count={this.state.count}\n/>;\n",
            ),
          ),
          Object(esm.b)('h1', {id: 'props'}, 'Props'),
          Object(esm.b)(blocks.f, {of: MenuAddButton.a, mdxType: 'Props'}),
          Object(esm.b)('h1', {id: 'count'}, 'Count'),
          Object(esm.b)(
            'p',
            null,
            'Pass an ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'Integer'),
            ' value in ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'count'),
            ' prop as number of items.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'count', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 0,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 5,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 25,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 100,
                  mdxType: 'MenuAddButton',
                }),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'disabled'}, 'Disabled'),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'disabled'),
            ' accepts a boolean value and restricts touch response.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'disabled', mdxType: 'Story'},
              Object(esm.b)(MenuAddButton.a, {
                disabled: !0,
                onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                count: 0,
                mdxType: 'MenuAddButton',
              }),
            ),
          ),
          Object(esm.b)('h1', {id: 'size'}, 'Size'),
          Object(esm.b)(
            'p',
            null,
            "There are 7 different size available. You may not need all of them but it doesn't hurt to have them just in case. 😅",
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'size', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(MenuAddButton.a, {
                  size: 'xs',
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 0,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  size: 'xs',
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 2,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  size: 'sm',
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 10,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  size: 'md',
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 50,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  size: 'lg',
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 100,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  size: 'xl',
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 500,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.b)(MenuAddButton.a, {
                  size: '2xl',
                  onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                  onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                  count: 2020,
                  mdxType: 'MenuAddButton',
                }),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'custom-icons'}, 'Custom icons'),
          Object(esm.b)(
            'p',
            null,
            'Pass custom icon as ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'plusIcon'),
            ' and ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'minusIcon'),
            ' of your choice.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'custom', mdxType: 'Story'},
              Object(esm.b)(MenuAddButton.a, {
                onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
                onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
                plusIcon: Object(esm.b)(AntDesign_default.a, {
                  name: 'like2',
                  size: 24,
                  color: 'gray',
                  mdxType: 'AntDesign',
                }),
                minusIcon: Object(esm.b)(AntDesign_default.a, {
                  name: 'dislike2',
                  size: 24,
                  color: 'gray',
                  mdxType: 'AntDesign',
                }),
                count: 10,
                mdxType: 'MenuAddButton',
              }),
            ),
          ),
          Object(esm.b)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.b)('p', null, 'Play with MenuAddButton in Canvas mode.'),
          Object(esm.b)(
            blocks.g,
            {
              name: 'playground',
              parameters: {decorators: [dist_esm.f]},
              mdxType: 'Story',
            },
            Object(esm.b)(ExampleMenuButton, {mdxType: 'ExampleMenuButton'}),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const MenuAddButton_stories_count = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 0,
          }),
          Object(esm.b)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 5,
          }),
          Object(esm.b)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 25,
          }),
          Object(esm.b)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 100,
          }),
        );
      (MenuAddButton_stories_count.storyName = 'count'),
        (MenuAddButton_stories_count.parameters = {
          storySource: {
            source:
              "<Stack>\n      <MenuAddButton onIncrement={action('pressed')} onDecrement={action('pressed')} count={0} />\n      <MenuAddButton onIncrement={action('pressed')} onDecrement={action('pressed')} count={5} />\n      <MenuAddButton onIncrement={action('pressed')} onDecrement={action('pressed')} count={25} />\n      <MenuAddButton onIncrement={action('pressed')} onDecrement={action('pressed')} count={100} />\n    </Stack>",
          },
        });
      const disabled = () =>
        Object(esm.b)(MenuAddButton.a, {
          disabled: !0,
          onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
          onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
          count: 0,
        });
      (disabled.storyName = 'disabled'),
        (disabled.parameters = {
          storySource: {
            source:
              "<MenuAddButton disabled onIncrement={action('pressed')} onDecrement={action('pressed')} count={0} />",
          },
        });
      const size = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(MenuAddButton.a, {
            size: 'xs',
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 0,
          }),
          Object(esm.b)(MenuAddButton.a, {
            size: 'xs',
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 2,
          }),
          Object(esm.b)(MenuAddButton.a, {
            size: 'sm',
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 10,
          }),
          Object(esm.b)(MenuAddButton.a, {
            size: 'md',
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 50,
          }),
          Object(esm.b)(MenuAddButton.a, {
            size: 'lg',
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 100,
          }),
          Object(esm.b)(MenuAddButton.a, {
            size: 'xl',
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 500,
          }),
          Object(esm.b)(MenuAddButton.a, {
            size: '2xl',
            onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
            onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
            count: 2020,
          }),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              "<Stack>\n      <MenuAddButton size=\"xs\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={0} />\n      <MenuAddButton size=\"xs\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={2} />\n      <MenuAddButton size=\"sm\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={10} />\n      <MenuAddButton size=\"md\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={50} />\n      <MenuAddButton size=\"lg\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={100} />\n      <MenuAddButton size=\"xl\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={500} />\n      <MenuAddButton size=\"2xl\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={2020} />\n    </Stack>",
          },
        });
      const custom = () =>
        Object(esm.b)(MenuAddButton.a, {
          onIncrement: Object(addon_actions_dist_esm.action)('pressed'),
          onDecrement: Object(addon_actions_dist_esm.action)('pressed'),
          plusIcon: Object(esm.b)(AntDesign_default.a, {
            name: 'like2',
            size: 24,
            color: 'gray',
          }),
          minusIcon: Object(esm.b)(AntDesign_default.a, {
            name: 'dislike2',
            size: 24,
            color: 'gray',
          }),
          count: 10,
        });
      (custom.storyName = 'custom'),
        (custom.parameters = {
          storySource: {
            source:
              '<MenuAddButton onIncrement={action(\'pressed\')} onDecrement={action(\'pressed\')} plusIcon={<AntDesign name="like2" size={24} color="gray" />} minusIcon={<AntDesign name="dislike2" size={24} color="gray" />} count={10} />',
          },
        });
      const playground = () => Object(esm.b)(ExampleMenuButton, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleMenuButton />'},
          decorators: [dist_esm.f],
        });
      const componentMeta = {
          title: 'MenuAddButton',
          component: MenuAddButton.a,
          includeStories: ['count', 'disabled', 'size', 'custom', 'playground'],
        },
        mdxStoryNameToKey = {
          count: 'count',
          disabled: 'disabled',
          size: 'size',
          custom: 'custom',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(esm.b)(
              blocks.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.b)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    1201: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'size', function() {
          return size;
        }),
        __webpack_require__.d(__webpack_exports__, 'iconRight', function() {
          return iconRight;
        }),
        __webpack_require__.d(__webpack_exports__, 'checked', function() {
          return checked;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'textColor', function() {
          return textColor;
        }),
        __webpack_require__.d(__webpack_exports__, 'icons', function() {
          return icons;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(0),
        blocks = __webpack_require__(4),
        dist_esm = __webpack_require__(6),
        Stack = (__webpack_require__(3), __webpack_require__(10)),
        Ionicons = __webpack_require__(112),
        Ionicons_default = __webpack_require__.n(Ionicons),
        CheckBox = __webpack_require__(35),
        src_CheckBox = (__webpack_require__(130),
        __webpack_require__(31),
        __webpack_require__(46),
        __webpack_require__(30),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(60),
        __webpack_require__(20),
        __webpack_require__(86),
        __webpack_require__(281));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              arr &&
              ((typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
                arr['@@iterator']);
            if (_i == null) {
              return;
            }
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              ) {}
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function ExampleRadioButton() {
        var _useState2 = _slicedToArray(Object(react.useState)(!1), 2),
          value = _useState2[0],
          setCheckBoxValue = _useState2[1];
        return react_default.a.createElement(
          src_CheckBox.a,
          {
            size: Object(dist_esm.d)('size', sizeArray, 'medium'),
            checked: value,
            iconRight: Object(dist_esm.a)('iconRight', !1),
            color: Object(dist_esm.d)(
              'color',
              ['primary', 'secondary'],
              'primary',
            ),
            textColor: Object(dist_esm.d)(
              'textColor',
              ['heading', 'body', 'subtle'],
              'heading',
            ),
            onPress: function onPress() {
              return setCheckBoxValue(!value);
            },
          },
          'Hello CheckBox',
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      (ExampleRadioButton.displayName = 'ExampleRadioButton'),
        (ExampleRadioButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ExampleRadioButton',
        }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/CheckBox/CheckBox.example.js'] = {
            name: 'ExampleRadioButton',
            docgenInfo: ExampleRadioButton.__docgenInfo,
            path: 'src/CheckBox/CheckBox.example.js',
          });
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(blocks.d, {
            title: 'CheckBox',
            component: CheckBox.a,
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', {id: 'checkbox'}, 'CheckBox'),
          Object(esm.b)(
            'p',
            null,
            'Use ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'CheckBox'),
            ' when looking for yes or no answers.',
          ),
          Object(esm.b)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              "import {CheckBox} from 'react-native-design-system';\n\n<CheckBox\n  checked={this.state.checked}\n  onPress={() => this.setState({checked: !this.state.checked})}>\n  Hello CheckBox\n</CheckBox>;\n",
            ),
          ),
          Object(esm.b)('h1', {id: 'props'}, 'Props'),
          Object(esm.b)(blocks.f, {of: CheckBox.a, mdxType: 'Props'}),
          Object(esm.b)('h1', {id: 'size'}, 'Size'),
          Object(esm.b)(
            'p',
            null,
            'There are 7 sizes available bases on fontSize.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'size', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  CheckBox.a,
                  {size: 'xs', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {size: 'xs', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {size: 'sm', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {size: 'md', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {size: 'lg', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {size: 'xl', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {size: '2xl', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'right-align-icon'}, 'Right align icon'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'iconRight={true}'),
            ' to shift checkbox icon to right.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'iconRight', mdxType: 'Story'},
              Object(esm.b)(
                CheckBox.a,
                {iconRight: !0, mdxType: 'CheckBox'},
                'Hello CheckBox',
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'checked'}, 'Checked'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'checked={true}'),
            ' to select checkbox.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'checked', mdxType: 'Story'},
              Object(esm.b)(
                CheckBox.a,
                {checked: !0, mdxType: 'CheckBox'},
                'Hello CheckBox',
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'color'}, 'Color'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'color'),
            ' to select from three available brand colors.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'color', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  CheckBox.a,
                  {color: 'primary', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {color: 'secondary', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'text-color'}, 'Text color'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'textColor'),
            ' to select from available brand text colors.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'textColor', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  CheckBox.a,
                  {textColor: 'heading', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {textColor: 'body', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {textColor: 'subtle', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'custom-icons'}, 'Custom icons'),
          Object(esm.b)(
            'p',
            null,
            'Pass custom icons via ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'checkedIcon'),
            ' and ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'uncheckedIcon'),
            ' prop. Size and color will be manually set by developer.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'icons', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  CheckBox.a,
                  {
                    checked: !1,
                    checkedIcon: Object(esm.b)(Ionicons_default.a, {
                      name: 'ios-radio-button-on',
                      size: 24,
                      color: '#1e88e5',
                      mdxType: 'Ionicons',
                    }),
                    uncheckedIcon: Object(esm.b)(Ionicons_default.a, {
                      name: 'ios-radio-button-off',
                      size: 24,
                      color: '#1e88e5',
                      mdxType: 'Ionicons',
                    }),
                    mdxType: 'CheckBox',
                  },
                  'Hello CheckBox',
                ),
                Object(esm.b)(
                  CheckBox.a,
                  {
                    checked: !0,
                    checkedIcon: Object(esm.b)(Ionicons_default.a, {
                      name: 'ios-radio-button-on',
                      size: 24,
                      color: '#1e88e5',
                      mdxType: 'Ionicons',
                    }),
                    uncheckedIcon: Object(esm.b)(Ionicons_default.a, {
                      name: 'ios-radio-button-off',
                      size: 24,
                      color: '#1e88e5',
                      mdxType: 'Ionicons',
                    }),
                    mdxType: 'CheckBox',
                  },
                  'Hello CheckBox',
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.b)('p', null, 'Play with CheckBox in Canvas mode.'),
          Object(esm.b)(
            blocks.g,
            {
              name: 'playground',
              parameters: {decorators: [dist_esm.f]},
              mdxType: 'Story',
            },
            Object(esm.b)(ExampleRadioButton, {mdxType: 'ExampleCheckBox'}),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const size = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(CheckBox.a, {size: 'xs'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {size: 'xs'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {size: 'sm'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {size: 'md'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {size: 'lg'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {size: 'xl'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {size: '2xl'}, 'Hello CheckBox'),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <CheckBox size="xs">Hello CheckBox</CheckBox>\n      <CheckBox size="xs">Hello CheckBox</CheckBox>\n      <CheckBox size="sm">Hello CheckBox</CheckBox>\n      <CheckBox size="md">Hello CheckBox</CheckBox>\n      <CheckBox size="lg">Hello CheckBox</CheckBox>\n      <CheckBox size="xl">Hello CheckBox</CheckBox>\n      <CheckBox size="2xl">Hello CheckBox</CheckBox>\n    </Stack>',
          },
        });
      const iconRight = () =>
        Object(esm.b)(CheckBox.a, {iconRight: !0}, 'Hello CheckBox');
      (iconRight.storyName = 'iconRight'),
        (iconRight.parameters = {
          storySource: {
            source: '<CheckBox iconRight>Hello CheckBox</CheckBox>',
          },
        });
      const checked = () =>
        Object(esm.b)(CheckBox.a, {checked: !0}, 'Hello CheckBox');
      (checked.storyName = 'checked'),
        (checked.parameters = {
          storySource: {source: '<CheckBox checked>Hello CheckBox</CheckBox>'},
        });
      const color = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(CheckBox.a, {color: 'primary'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {color: 'secondary'}, 'Hello CheckBox'),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <CheckBox color="primary">Hello CheckBox</CheckBox>\n      <CheckBox color="secondary">Hello CheckBox</CheckBox>\n    </Stack>',
          },
        });
      const textColor = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(CheckBox.a, {textColor: 'heading'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {textColor: 'body'}, 'Hello CheckBox'),
          Object(esm.b)(CheckBox.a, {textColor: 'subtle'}, 'Hello CheckBox'),
        );
      (textColor.storyName = 'textColor'),
        (textColor.parameters = {
          storySource: {
            source:
              '<Stack>\n      <CheckBox textColor="heading">Hello CheckBox</CheckBox>\n      <CheckBox textColor="body">Hello CheckBox</CheckBox>\n      <CheckBox textColor="subtle">Hello CheckBox</CheckBox>\n    </Stack>',
          },
        });
      const icons = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(
            CheckBox.a,
            {
              checked: !1,
              checkedIcon: Object(esm.b)(Ionicons_default.a, {
                name: 'ios-radio-button-on',
                size: 24,
                color: '#1e88e5',
              }),
              uncheckedIcon: Object(esm.b)(Ionicons_default.a, {
                name: 'ios-radio-button-off',
                size: 24,
                color: '#1e88e5',
              }),
            },
            'Hello CheckBox',
          ),
          Object(esm.b)(
            CheckBox.a,
            {
              checked: !0,
              checkedIcon: Object(esm.b)(Ionicons_default.a, {
                name: 'ios-radio-button-on',
                size: 24,
                color: '#1e88e5',
              }),
              uncheckedIcon: Object(esm.b)(Ionicons_default.a, {
                name: 'ios-radio-button-off',
                size: 24,
                color: '#1e88e5',
              }),
            },
            'Hello CheckBox',
          ),
        );
      (icons.storyName = 'icons'),
        (icons.parameters = {
          storySource: {
            source:
              '<Stack>\n      <CheckBox checked={false} checkedIcon={<Ionicons name="ios-radio-button-on" size={24} color="#1e88e5" />} uncheckedIcon={<Ionicons name="ios-radio-button-off" size={24} color="#1e88e5" />}>\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox checked={true} checkedIcon={<Ionicons name="ios-radio-button-on" size={24} color="#1e88e5" />} uncheckedIcon={<Ionicons name="ios-radio-button-off" size={24} color="#1e88e5" />}>\n        Hello CheckBox\n      </CheckBox>\n    </Stack>',
          },
        });
      const playground = () => Object(esm.b)(ExampleRadioButton, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleCheckBox />'},
          decorators: [dist_esm.f],
        });
      const componentMeta = {
          title: 'CheckBox',
          component: CheckBox.a,
          includeStories: [
            'size',
            'iconRight',
            'checked',
            'color',
            'textColor',
            'icons',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          size: 'size',
          iconRight: 'iconRight',
          checked: 'checked',
          color: 'color',
          textColor: 'textColor',
          icons: 'icons',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(esm.b)(
              blocks.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.b)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    1202: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'type', function() {
          return type;
        }),
        __webpack_require__.d(__webpack_exports__, 'label', function() {
          return label;
        }),
        __webpack_require__.d(__webpack_exports__, 'error', function() {
          return error;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'disabled', function() {
          return disabled;
        }),
        __webpack_require__.d(__webpack_exports__, 'size', function() {
          return size;
        }),
        __webpack_require__.d(__webpack_exports__, 'icon', function() {
          return icon;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(0),
        blocks = __webpack_require__(4),
        dist_esm = __webpack_require__(6),
        addon_actions_dist_esm = __webpack_require__(3),
        Stack = __webpack_require__(10),
        Feather = __webpack_require__(42),
        Feather_default = __webpack_require__.n(Feather),
        Input = __webpack_require__(17),
        prop_types = (__webpack_require__(130),
        __webpack_require__(31),
        __webpack_require__(46),
        __webpack_require__(30),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(60),
        __webpack_require__(20),
        __webpack_require__(86),
        __webpack_require__(13));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              arr &&
              ((typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
                arr['@@iterator']);
            if (_i == null) {
              return;
            }
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              ) {}
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function ExampleInput() {
        var _useState2 = _slicedToArray(Object(react.useState)(''), 2),
          textValue = _useState2[0],
          setTextValue = _useState2[1];
        return react_default.a.createElement(Input.a, {
          size: Object(dist_esm.d)('size', prop_types.a, 'medium'),
          outline: Object(dist_esm.a)('outline', !0),
          round: Object(dist_esm.a)('round', !1),
          label: Object(dist_esm.e)('label', 'Username'),
          labelColor: Object(dist_esm.d)(
            'labelColor',
            ['heading', 'body', 'subtle'],
            'body',
          ),
          textColor: Object(dist_esm.d)(
            'textColor',
            ['heading', 'body', 'subtle'],
            'body',
          ),
          placeholder: Object(dist_esm.e)('placeholder', 'Enter Username'),
          error: Object(dist_esm.a)('error', !1),
          floatingLabel: Object(dist_esm.a)('floatingLabel', !1),
          errorCaption: Object(dist_esm.e)(
            'errorCaption',
            'Please enter the correct username',
          ),
          value: textValue,
          onChangeText: setTextValue,
        });
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      (ExampleInput.displayName = 'ExampleInput'),
        (ExampleInput.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ExampleInput',
        }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Input/Input.example.js'] = {
            name: 'ExampleInput',
            docgenInfo: ExampleInput.__docgenInfo,
            path: 'src/Input/Input.example.js',
          });
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(blocks.d, {
            title: 'Input',
            component: Input.a,
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', {id: 'input'}, 'Input'),
          Object(esm.b)(
            'p',
            null,
            'A Input is a wrapper around ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'TextInput'),
            ' with commonly used styles and easy to make customization.',
          ),
          Object(esm.b)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              'import {Input} from \'react-native-design-system\';\n\n<Input\n  placeholder="Start typing here"\n  value=""\n  onChangeText={text => handleChange(text)}\n/>;\n',
            ),
          ),
          Object(esm.b)('h1', {id: 'props'}, 'Props'),
          Object(esm.b)(blocks.f, {of: Input.a, mdxType: 'Props'}),
          Object(esm.b)('h1', {id: 'type'}, 'Type'),
          Object(esm.b)(
            'p',
            null,
            'There are three types of button mainly: ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'default'),
            ', ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'round'),
            ', and ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'outline'),
            '. You can pass boolean value ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'round={true}'),
            ' for round button, ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'outline={true}'),
            ' for outline button and nothing for default solid button.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'type', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(Input.a, {
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  round: !0,
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  round: !0,
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'label'}, 'Label'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'label'),
            ' to render a label string above input. You can customise label using ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'labelColor'),
            ' and ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'labelStyle'),
            ' props.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'label', mdxType: 'Story'},
              Object(esm.b)(Input.a, {
                outline: !0,
                label: 'Username',
                placeholder: 'Enter Username',
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist_esm.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.b)(
            'h1',
            {id: 'error-and-error-caption'},
            'Error and Error Caption',
          ),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'error={true}'),
            ' when you want to show error and pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'errorCaption'),
            ' string to render the string below input to notify user about the error.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'error', mdxType: 'Story'},
              Object(esm.b)(Input.a, {
                outline: !0,
                error: !0,
                placeholder: 'Enter username',
                value: '',
                errorCaption: 'Please check the username again',
                onChangeText: text =>
                  Object(addon_actions_dist_esm.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.b)('h1', {id: 'color'}, 'Color'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'color'),
            ' from brandColor to change outline color of input. Background is managed by ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'background'),
            ' property inside theme. You can also directly pass a ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'background'),
            ' prop with one of the colors in ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'brandColor'),
            '.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'color', mdxType: 'Story'},
              Object(esm.b)(Input.a, {
                outline: !0,
                color: 'secondary',
                placeholder: 'Enter username',
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist_esm.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.b)('h1', {id: 'disabled'}, 'Disabled'),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'disabled={true}'),
            ' property restrict any kind of action on input.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'disabled', mdxType: 'Story'},
              Object(esm.b)(Input.a, {
                outline: !0,
                disabled: !0,
                placeholder: 'Enter username',
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist_esm.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.b)('h1', {id: 'size'}, 'Size'),
          Object(esm.b)('p', null, 'As usual, 7 available sized.'),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'size', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(Input.a, {
                  outline: !0,
                  size: 'xs',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  size: 'xs',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  size: 'sm',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  size: 'md',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  size: 'lg',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  size: 'xl',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.b)(Input.a, {
                  outline: !0,
                  size: '2xl',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'Input',
                }),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'icon'}, 'Icon'),
          Object(esm.b)(
            'p',
            null,
            'You can pass any icon via ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'leftIcon'),
            ' and ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'rightIcon'),
            ' props.',
          ),
          Object(esm.b)(
            'blockquote',
            null,
            Object(esm.b)(
              'p',
              {parentName: 'blockquote'},
              'Icon size and color should be defined by developers manually according to button size.',
            ),
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'icon', mdxType: 'Story'},
              Object(esm.b)(Input.a, {
                outline: !0,
                placeholder: 'Enter username',
                leftIcon: Object(esm.b)(Feather_default.a, {
                  name: 'user',
                  size: 22,
                  color: 'gray',
                  mdxType: 'Feather',
                }),
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist_esm.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.b)('h1', {id: 'floatinglabel'}, 'floatingLabel'),
          Object(esm.b)(
            'p',
            null,
            'A boolean value to make the label float. Label will appear as soon as youn start typing.',
          ),
          Object(esm.b)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.b)('p', null, 'Play with Input in Canvas mode.'),
          Object(esm.b)(
            blocks.g,
            {
              name: 'playground',
              parameters: {decorators: [dist_esm.f]},
              mdxType: 'Story',
            },
            Object(esm.b)(ExampleInput, {mdxType: 'ExampleInput'}),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const type = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(Input.a, {
            placeholder: 'Start typing',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            round: !0,
            placeholder: 'Start typing',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            placeholder: 'Start typing',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            round: !0,
            placeholder: 'Start typing',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
        );
      (type.storyName = 'type'),
        (type.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Input placeholder="Start typing" value="" onChangeText={text => action(\'pressed\')} />\n      <Input round placeholder="Start typing" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline placeholder="Start typing" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline round placeholder="Start typing" value="" onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const label = () =>
        Object(esm.b)(Input.a, {
          outline: !0,
          label: 'Username',
          placeholder: 'Enter Username',
          value: '',
          onChangeText: text =>
            Object(addon_actions_dist_esm.action)('pressed'),
        });
      (label.storyName = 'label'),
        (label.parameters = {
          storySource: {
            source:
              '<Input outline label="Username" placeholder="Enter Username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const error = () =>
        Object(esm.b)(Input.a, {
          outline: !0,
          error: !0,
          placeholder: 'Enter username',
          value: '',
          errorCaption: 'Please check the username again',
          onChangeText: text =>
            Object(addon_actions_dist_esm.action)('pressed'),
        });
      (error.storyName = 'error'),
        (error.parameters = {
          storySource: {
            source:
              '<Input outline error={true} placeholder="Enter username" value="" errorCaption="Please check the username again" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const color = () =>
        Object(esm.b)(Input.a, {
          outline: !0,
          color: 'secondary',
          placeholder: 'Enter username',
          value: '',
          onChangeText: text =>
            Object(addon_actions_dist_esm.action)('pressed'),
        });
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Input outline color="secondary" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const disabled = () =>
        Object(esm.b)(Input.a, {
          outline: !0,
          disabled: !0,
          placeholder: 'Enter username',
          value: '',
          onChangeText: text =>
            Object(addon_actions_dist_esm.action)('pressed'),
        });
      (disabled.storyName = 'disabled'),
        (disabled.parameters = {
          storySource: {
            source:
              '<Input outline disabled placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const size = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(Input.a, {
            outline: !0,
            size: 'xs',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            size: 'xs',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            size: 'sm',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            size: 'md',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            size: 'lg',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            size: 'xl',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
          Object(esm.b)(Input.a, {
            outline: !0,
            size: '2xl',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text =>
              Object(addon_actions_dist_esm.action)('pressed'),
          }),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Input outline size="xs" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="xs" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="sm" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="md" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="lg" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="xl" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="2xl" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const icon = () =>
        Object(esm.b)(Input.a, {
          outline: !0,
          placeholder: 'Enter username',
          leftIcon: Object(esm.b)(Feather_default.a, {
            name: 'user',
            size: 22,
            color: 'gray',
          }),
          value: '',
          onChangeText: text =>
            Object(addon_actions_dist_esm.action)('pressed'),
        });
      (icon.storyName = 'icon'),
        (icon.parameters = {
          storySource: {
            source:
              '<Input outline placeholder="Enter username" leftIcon={<Feather name="user" size={22} color="gray" />} value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const playground = () => Object(esm.b)(ExampleInput, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleInput />'},
          decorators: [dist_esm.f],
        });
      const componentMeta = {
          title: 'Input',
          component: Input.a,
          includeStories: [
            'type',
            'label',
            'error',
            'color',
            'disabled',
            'size',
            'icon',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          type: 'type',
          label: 'label',
          error: 'error',
          color: 'color',
          disabled: 'disabled',
          size: 'size',
          icon: 'icon',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(esm.b)(
              blocks.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.b)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    1203: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'usage', function() {
          return usage;
        }),
        __webpack_require__.d(__webpack_exports__, 'size', function() {
          return size;
        }),
        __webpack_require__.d(__webpack_exports__, 'iconRight', function() {
          return iconRight;
        }),
        __webpack_require__.d(__webpack_exports__, 'activeId', function() {
          return RadioButton_stories_activeId;
        }),
        __webpack_require__.d(__webpack_exports__, 'color', function() {
          return color;
        }),
        __webpack_require__.d(__webpack_exports__, 'textColor', function() {
          return textColor;
        }),
        __webpack_require__.d(__webpack_exports__, 'icons', function() {
          return icons;
        }),
        __webpack_require__.d(__webpack_exports__, 'playground', function() {
          return playground;
        });
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        esm = __webpack_require__(0),
        blocks = __webpack_require__(4),
        dist_esm = __webpack_require__(6),
        addon_actions_dist_esm = __webpack_require__(3),
        AntDesign = __webpack_require__(100),
        AntDesign_default = __webpack_require__.n(AntDesign),
        RadioButton = __webpack_require__(12),
        Stack = __webpack_require__(10),
        src_RadioButton = (__webpack_require__(130),
        __webpack_require__(31),
        __webpack_require__(46),
        __webpack_require__(30),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(60),
        __webpack_require__(20),
        __webpack_require__(86),
        __webpack_require__(172)),
        prop_types = __webpack_require__(13);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              arr &&
              ((typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
                arr['@@iterator']);
            if (_i == null) {
              return;
            }
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              ) {}
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function ExampleRadioButton() {
        var _useState2 = _slicedToArray(Object(react.useState)('a'), 2),
          activeId = _useState2[0],
          setActiveId = _useState2[1];
        return react_default.a.createElement(
          src_RadioButton.a,
          {
            size: Object(dist_esm.d)('size', prop_types.a, 'medium'),
            activeId: activeId,
            iconRight: Object(dist_esm.a)('iconRight', !1),
            color: Object(dist_esm.d)(
              'color',
              ['primary', 'secondary', 'tertiary'],
              'primary',
            ),
            textColor: Object(dist_esm.d)(
              'textColor',
              ['heading', 'default', 'subtle', 'gray'],
              'default',
            ),
            selectItem: function selectItem(id) {
              return setActiveId(id);
            },
          },
          react_default.a.createElement(
            src_RadioButton.b,
            {id: 'a'},
            'Option A',
          ),
          react_default.a.createElement(
            src_RadioButton.b,
            {id: 'b'},
            'Option B',
          ),
          react_default.a.createElement(
            src_RadioButton.b,
            {id: 'c'},
            'Option C',
          ),
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      (ExampleRadioButton.displayName = 'ExampleRadioButton'),
        (ExampleRadioButton.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ExampleRadioButton',
        }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/RadioButton/RadioButton.example.js'] = {
            name: 'ExampleRadioButton',
            docgenInfo: ExampleRadioButton.__docgenInfo,
            path: 'src/RadioButton/RadioButton.example.js',
          });
      const layoutProps = {};
      function MDXContent({components: components, ...props}) {
        return Object(esm.b)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.b)(blocks.d, {
            title: 'RadioButton',
            component: RadioButton.b,
            mdxType: 'Meta',
          }),
          Object(esm.b)('h1', {id: 'radiobutton'}, 'RadioButton'),
          Object(esm.b)(
            'p',
            null,
            'A RadioButton is a graphical control element that allows the user to choose only one of a predefined set of mutually exclusive options.',
          ),
          Object(esm.b)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              {parentName: 'pre', className: 'language-js'},
              'import {RadioButton, RadioItem} from \'react-native-design-system\';\n\n<RadioButton activeId={activeId} selectItem={id => selectItemHandler(id)}>\n  <RadioItem id="a">Option A</RadioItem>\n  <RadioItem id="b">Option B</RadioItem>\n  <RadioItem id="c">Option C</RadioItem>\n</RadioButton>;\n',
            ),
          ),
          Object(esm.b)('h1', {id: 'props'}, 'Props'),
          Object(esm.b)(blocks.f, {of: RadioButton.b, mdxType: 'Props'}),
          Object(esm.b)(
            'h1',
            {id: 'radiobutton-and-radioitem'},
            'RadioButton and RadioItem',
          ),
          Object(esm.b)(
            'p',
            null,
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'RadioButton'),
            ' and ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'RadioItem'),
            ' are used together as compound component.',
          ),
          Object(esm.b)(
            'pre',
            null,
            Object(esm.b)(
              'code',
              {parentName: 'pre', className: 'language-jsx'},
              'import RadioButton, {RadioItem} from \'react-native-design-system\';\n\n<RadioButton activeId={activeId} selectItem={id => selectItemHandler(id)}>\n  <RadioItem id="a">Option A</RadioItem>\n  <RadioItem id="b">Option B</RadioItem>\n  <RadioItem id="c">Option C</RadioItem>\n</RadioButton>;\n',
            ),
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'usage', mdxType: 'Story'},
              Object(esm.b)(
                RadioButton.b,
                {activeId: 'a', mdxType: 'RadioButton'},
                Object(esm.b)(
                  RadioButton.a,
                  {id: 'a', mdxType: 'RadioItem'},
                  'Option A',
                ),
                Object(esm.b)(
                  RadioButton.a,
                  {id: 'b', mdxType: 'RadioItem'},
                  'Option B',
                ),
                Object(esm.b)(
                  RadioButton.a,
                  {id: 'c', mdxType: 'RadioItem'},
                  'Option C',
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'size'}, 'Size'),
          Object(esm.b)(
            'p',
            null,
            'There are 7 sizes available bases on fontSize. Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'size'),
            ' prop to parent ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'RadioButton'),
            ' component to size all ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'RadioItem'),
            's.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'size', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'xs',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'xs',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'sm',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'md',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'lg',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'xl',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: '2xl',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'right-align-icon'}, 'Right align icon'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'iconRight={true}'),
            ' to shift checkbox icon to right.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'iconRight', mdxType: 'Story'},
              Object(esm.b)(
                RadioButton.b,
                {
                  activeId: 'a',
                  iconRight: !0,
                  selectItem: Object(addon_actions_dist_esm.action)('pressed'),
                  mdxType: 'RadioButton',
                },
                Object(esm.b)(
                  RadioButton.a,
                  {id: 'a', mdxType: 'RadioItem'},
                  'Option A',
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'activeid'}, 'activeId'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'activeId'),
            ' which equals to one of the ids passed to children ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'RadioItem'),
            '. ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'selectItem'),
            ' function received an ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'id'),
            ' which can be used to update ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'activeId'),
            '. Click on ',
            Object(esm.b)('strong', {parentName: 'p'}, 'Show code'),
            ' for info.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'activeId', mdxType: 'Story'},
              Object(esm.b)(
                RadioButton.b,
                {
                  activeId: 'b',
                  selectItem: id => this.seState({activeId: id}),
                  mdxType: 'RadioButton',
                },
                Object(esm.b)(
                  RadioButton.a,
                  {id: 'a', mdxType: 'RadioItem'},
                  'Option A',
                ),
                Object(esm.b)(
                  RadioButton.a,
                  {id: 'b', mdxType: 'RadioItem'},
                  'Option B',
                ),
                Object(esm.b)(
                  RadioButton.a,
                  {id: 'c', mdxType: 'RadioItem'},
                  'Option C',
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'color'}, 'Color'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'color'),
            ' to select from the available brand colors.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'color', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    color: 'primary',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    color: 'secondary',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'text-color'}, 'Text color'),
          Object(esm.b)(
            'p',
            null,
            'Pass ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'textColor'),
            ' to select from available brand text colors.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'textColor', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'heading',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'body',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'subtle',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'success',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Success',
                  ),
                ),
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'warning',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Warning',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'custom-icons'}, 'Custom icons'),
          Object(esm.b)(
            'p',
            null,
            'Pass custom icons via ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'checkedIcon'),
            ' and ',
            Object(esm.b)('inlineCode', {parentName: 'p'}, 'uncheckedIcon'),
            ' prop. Size and color will be manually set by developer.',
          ),
          Object(esm.b)(
            blocks.e,
            {mdxType: 'Preview'},
            Object(esm.b)(
              blocks.g,
              {name: 'icons', mdxType: 'Story'},
              Object(esm.b)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.b)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    selectItem: Object(addon_actions_dist_esm.action)(
                      'pressed',
                    ),
                    checkedIcon: Object(esm.b)(AntDesign_default.a, {
                      name: 'checkcircle',
                      size: 20,
                      color: '#1e88e5',
                      mdxType: 'AntDesign',
                    }),
                    uncheckedIcon: Object(esm.b)(AntDesign_default.a, {
                      name: 'checkcircleo',
                      size: 20,
                      color: '#1e88e5',
                      mdxType: 'AntDesign',
                    }),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                  Object(esm.b)(
                    RadioButton.a,
                    {id: 'b', mdxType: 'RadioItem'},
                    'Option B',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.b)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.b)('p', null, 'Play with RadioButton in Canvas mode.'),
          Object(esm.b)(
            blocks.g,
            {
              name: 'playground',
              parameters: {decorators: [dist_esm.f]},
              mdxType: 'Story',
            },
            Object(esm.b)(ExampleRadioButton, {mdxType: 'ExampleRadioButton'}),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const usage = () =>
        Object(esm.b)(
          RadioButton.b,
          {activeId: 'a'},
          Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          Object(esm.b)(RadioButton.a, {id: 'b'}, 'Option B'),
          Object(esm.b)(RadioButton.a, {id: 'c'}, 'Option C'),
        );
      (usage.storyName = 'usage'),
        (usage.parameters = {
          storySource: {
            source:
              '<RadioButton activeId="a">\n      <RadioItem id="a">Option A</RadioItem>\n      <RadioItem id="b">Option B</RadioItem>\n      <RadioItem id="c">Option C</RadioItem>\n    </RadioButton>',
          },
        });
      const size = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'xs',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'xs',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'sm',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'md',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'lg',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'xl',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              size: '2xl',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" size="xs" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="xs" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="sm" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="md" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="lg" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="xl" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="2xl" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const iconRight = () =>
        Object(esm.b)(
          RadioButton.b,
          {
            activeId: 'a',
            iconRight: !0,
            selectItem: Object(addon_actions_dist_esm.action)('pressed'),
          },
          Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
        );
      (iconRight.storyName = 'iconRight'),
        (iconRight.parameters = {
          storySource: {
            source:
              '<RadioButton activeId="a" iconRight selectItem={action(\'pressed\')}>\n      <RadioItem id="a">Option A</RadioItem>\n    </RadioButton>',
          },
        });
      const RadioButton_stories_activeId = () =>
        Object(esm.b)(
          RadioButton.b,
          {activeId: 'b', selectItem: id => (void 0).seState({activeId: id})},
          Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          Object(esm.b)(RadioButton.a, {id: 'b'}, 'Option B'),
          Object(esm.b)(RadioButton.a, {id: 'c'}, 'Option C'),
        );
      (RadioButton_stories_activeId.storyName = 'activeId'),
        (RadioButton_stories_activeId.parameters = {
          storySource: {
            source:
              '<RadioButton activeId="b" selectItem={id => this.seState({\n  activeId: id\n})}>\n      <RadioItem id="a">Option A</RadioItem>\n      <RadioItem id="b">Option B</RadioItem>\n      <RadioItem id="c">Option C</RadioItem>\n    </RadioButton>',
          },
        });
      const color = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              color: 'primary',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              color: 'secondary',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" color="primary" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" color="secondary" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const textColor = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'heading',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'body',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'subtle',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'success',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Success'),
          ),
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'warning',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Warning'),
          ),
        );
      (textColor.storyName = 'textColor'),
        (textColor.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" textColor="heading" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" textColor="body" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" textColor="subtle" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Option A</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" textColor="success" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Success</RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" textColor="warning" selectItem={action(\'pressed\')}>\n        <RadioItem id="a">Warning</RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const icons = () =>
        Object(esm.b)(
          Stack.a,
          null,
          Object(esm.b)(
            RadioButton.b,
            {
              activeId: 'a',
              selectItem: Object(addon_actions_dist_esm.action)('pressed'),
              checkedIcon: Object(esm.b)(AntDesign_default.a, {
                name: 'checkcircle',
                size: 20,
                color: '#1e88e5',
              }),
              uncheckedIcon: Object(esm.b)(AntDesign_default.a, {
                name: 'checkcircleo',
                size: 20,
                color: '#1e88e5',
              }),
            },
            Object(esm.b)(RadioButton.a, {id: 'a'}, 'Option A'),
            Object(esm.b)(RadioButton.a, {id: 'b'}, 'Option B'),
          ),
        );
      (icons.storyName = 'icons'),
        (icons.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" selectItem={action(\'pressed\')} checkedIcon={<AntDesign name="checkcircle" size={20} color="#1e88e5" />} uncheckedIcon={<AntDesign name="checkcircleo" size={20} color="#1e88e5" />}>\n        <RadioItem id="a">Option A</RadioItem>\n        <RadioItem id="b">Option B</RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const playground = () => Object(esm.b)(ExampleRadioButton, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleRadioButton />'},
          decorators: [dist_esm.f],
        });
      const componentMeta = {
          title: 'RadioButton',
          component: RadioButton.b,
          includeStories: [
            'usage',
            'size',
            'iconRight',
            'activeId',
            'color',
            'textColor',
            'icons',
            'playground',
          ],
        },
        mdxStoryNameToKey = {
          usage: 'usage',
          size: 'size',
          iconRight: 'iconRight',
          activeId: 'activeId',
          color: 'color',
          textColor: 'textColor',
          icons: 'icons',
          playground: 'playground',
        };
      (componentMeta.parameters = componentMeta.parameters || {}),
        (componentMeta.parameters.docs = {
          ...(componentMeta.parameters.docs || {}),
          page: () =>
            Object(esm.b)(
              blocks.a,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.b)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    13: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return sizeArray;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return sizes;
        }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return spaces;
        });
      __webpack_require__(26);
      var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        ),
        sizeArray = [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
          '2xl',
          '3xl',
          '4xl',
          '5xl',
          '6xl',
          '7xl',
          '8xl',
          '9xl',
        ],
        sizes = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(
          sizeArray,
        ),
        spaces = prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(
          ['none'].concat(sizeArray),
        );
    },
    15: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            size = _ref.size,
            mini = _ref.mini,
            color = _ref.color,
            square = _ref.square,
            badgeStyle = [styles.container];
          return (
            color && badgeStyle.push({backgroundColor: theme.colors[color]}),
            square && badgeStyle.push({borderRadius: 3}),
            mini &&
              badgeStyle.push({
                width: theme.miniBadgeSize[size],
                height: theme.miniBadgeSize[size],
              }),
            badgeStyle
          );
        },
        getTextStyle = function getTextStyle(_ref2) {
          var theme = _ref2.theme,
            size = _ref2.size;
          return {
            color: '#fff',
            fontSize: theme.badgeSize[size],
            marginVertical: 5,
            marginHorizontal: 10,
          };
        },
        Badge = function Badge(_ref3) {
          var children = _ref3.children,
            onPress = _ref3.onPress,
            style = _ref3.style,
            textStyle = _ref3.textStyle,
            props = _objectWithoutProperties(_ref3, [
              'children',
              'onPress',
              'style',
              'textStyle',
            ]),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.b,
            )(),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            TouchableElement,
            _extends({}, props, {onPress: onPress, disabled: !onPress}),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_5__.View,
              {
                style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                  react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten([
                    getContainerStyle(Object.assign({}, props, {theme: theme})),
                    style,
                  ]),
                ),
              },
              props.mini
                ? null
                : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                        [
                          getTextStyle(
                            Object.assign({}, props, {theme: theme}),
                          ),
                          textStyle,
                        ],
                      ),
                    },
                    children,
                  ),
            ),
          );
        };
      (Badge.displayName = 'Badge'),
        (Badge.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            ],
          ),
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
            ],
          ),
          size: _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.b,
          mini: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          onPress: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          square: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        }),
        (Badge.defaultProps = {children: 0, color: 'primary', size: 'small'});
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: Object.assign(
          {
            alignSelf: 'flex-start',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          },
          react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.select({
            android: {elevation: 1},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
            },
          }),
        ),
      });
      (Badge.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Badge',
        props: {
          children: {
            defaultValue: {value: '0', computed: !1},
            type: {name: 'union', value: [{name: 'string'}, {name: 'number'}]},
            required: !1,
            description: '',
          },
          color: {
            defaultValue: {value: "'primary'", computed: !1},
            required: !1,
          },
          size: {
            defaultValue: {value: "'sm'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          mini: {type: {name: 'bool'}, required: !1, description: ''},
          onPress: {type: {name: 'func'}, required: !1, description: ''},
          square: {type: {name: 'bool'}, required: !1, description: ''},
        },
      }),
        (__webpack_exports__.a = Badge),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Badge/Badge.js'] = {
            name: 'Badge',
            docgenInfo: Badge.__docgenInfo,
            path: 'src/Badge/Badge.js',
          });
    },
    154: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _FullScreenLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        157,
      );
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _FullScreenLoader__WEBPACK_IMPORTED_MODULE_0__.a;
      });
    },
    156: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(26),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31),
        __webpack_require__(130),
        __webpack_require__(46),
        __webpack_require__(30),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(86),
        __webpack_require__(60),
        __webpack_require__(20),
        __webpack_require__(14);
      var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_15__,
        ),
        react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_16__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5),
        _util_accessibility__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          69,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) {
              return _arrayLikeToArray(arr);
            }
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              (typeof Symbol !== 'undefined' &&
                iter[Symbol.iterator] != null) ||
              iter['@@iterator'] != null
            ) {
              return Array.from(iter);
            }
          })(arr) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var CircularProgressBar = function CircularProgressBar(props) {
        var activeColor = props.activeColor,
          passiveColor = props.passiveColor,
          baseColor = props.baseColor,
          radius = props.radius,
          percent = props.percent,
          width = props.width,
          duration = props.duration,
          children = props.children,
          rest = _objectWithoutProperties(props, [
            'activeColor',
            'passiveColor',
            'baseColor',
            'radius',
            'percent',
            'width',
            'duration',
            'children',
          ]),
          initialValueHalfCircle = percent >= 50 ? 0 : 180,
          firstCircleAnimatedValue = new react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.Value(
            initialValueHalfCircle,
          ),
          secondCircleAnimatedValue = new react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.Value(
            initialValueHalfCircle,
          ),
          thirdCircleAnimatedValue = new react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.Value(
            0,
          ),
          timePerDegree = duration / 360,
          firstCircleColor = activeColor,
          secondCircleColor = percent >= 50 ? activeColor : passiveColor;
        Object(react__WEBPACK_IMPORTED_MODULE_16__.useEffect)(function() {
          percent < 50
            ? (function firstAnimation() {
                react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.timing(
                  secondCircleAnimatedValue,
                  {
                    toValue: 180 + 3.6 * percent,
                    duration: 3.6 * percent * timePerDegree,
                    useNativeDriver: !0,
                    easing:
                      react_native__WEBPACK_IMPORTED_MODULE_17__.Easing.linear,
                  },
                ).start();
              })()
            : (function secondAnimation() {
                firstCircleAnimatedValue.setValue(initialValueHalfCircle),
                  secondCircleAnimatedValue.setValue(initialValueHalfCircle),
                  thirdCircleAnimatedValue.setValue(initialValueHalfCircle),
                  react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.parallel([
                    react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.timing(
                      firstCircleAnimatedValue,
                      {
                        toValue: 180,
                        duration: 180 * timePerDegree,
                        useNativeDriver: !0,
                        easing:
                          react_native__WEBPACK_IMPORTED_MODULE_17__.Easing
                            .linear,
                      },
                    ),
                    react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.timing(
                      secondCircleAnimatedValue,
                      {
                        toValue: 180 + 3.6 * (percent - 50),
                        duration: (180 + 3.6 * (percent - 50)) * timePerDegree,
                        useNativeDriver: !0,
                        easing:
                          react_native__WEBPACK_IMPORTED_MODULE_17__.Easing
                            .linear,
                      },
                    ),
                    react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.timing(
                      thirdCircleAnimatedValue,
                      {
                        toValue: 3.6 * (percent - 50),
                        delay: 180 * timePerDegree,
                        duration: timePerDegree * (3.6 * (percent - 50)),
                        useNativeDriver: !1,
                        easing:
                          react_native__WEBPACK_IMPORTED_MODULE_17__.Easing
                            .linear,
                      },
                    ),
                  ]).start();
              })();
        });
        var renderHalf = function renderHalf(color) {
            var transforms =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [],
              otherStyles =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_17__.Animated.View,
              {
                style: [
                  styles.half,
                  {backgroundColor: color, borderColor: color},
                  {width: radius, height: 2 * radius, borderRadius: radius},
                  {
                    transform: [{translateX: radius / 2}].concat(
                      _toConsumableArray(transforms),
                      [{translateX: -radius / 2}],
                    ),
                  },
                  otherStyles,
                ],
              },
            );
          },
          rotate1 = firstCircleAnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '1deg'],
          }),
          rotate2 = secondCircleAnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '1deg'],
          }),
          rotate3 = thirdCircleAnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '1deg'],
          }),
          elevation3 = thirdCircleAnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -1],
          }),
          innerCircleStyle = {
            backgroundColor: baseColor,
            width: 2 * radius - width,
            height: 2 * radius - width,
            borderRadius: radius,
            elevation: 1e3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          };
        return react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(
          react_native__WEBPACK_IMPORTED_MODULE_17__.View,
          _extends(
            {},
            Object(_util_accessibility__WEBPACK_IMPORTED_MODULE_18__.a)(rest),
            {style: styles.container, key: percent},
          ),
          react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_17__.View,
            {
              style: [
                styles.outerCircle,
                {
                  height: 2 * radius,
                  width: 2 * radius,
                  borderRadius: radius,
                  backgroundColor: passiveColor,
                },
              ],
            },
            renderHalf(firstCircleColor, [{rotate: rotate1}]),
            renderHalf(secondCircleColor, [{rotate: rotate2}]),
            renderHalf(passiveColor, [{rotate: rotate3}], {
              elevation: elevation3,
              zIndex: elevation3,
            }),
            react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_17__.View,
              {style: innerCircleStyle},
              children,
            ),
          ),
        );
      };
      (CircularProgressBar.displayName = 'CircularProgressBar'),
        (CircularProgressBar.propTypes = {
          activeColor:
            prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string
              .isRequired,
          passiveColor:
            prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string
              .isRequired,
          baseColor:
            prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.string
              .isRequired,
          width:
            prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.number
              .isRequired,
          radius:
            prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.number
              .isRequired,
          percent:
            prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.number
              .isRequired,
          duration:
            prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.number
              .isRequired,
          children: prop_types__WEBPACK_IMPORTED_MODULE_15___default.a.element,
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_17__.StyleSheet.create(
        {
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
          outerCircle: {
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          },
          half: {
            position: 'absolute',
            left: 0,
            top: 0,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        },
      );
      (CircularProgressBar.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'CircularProgressBar',
        props: {
          activeColor: {type: {name: 'string'}, required: !0, description: ''},
          passiveColor: {type: {name: 'string'}, required: !0, description: ''},
          baseColor: {type: {name: 'string'}, required: !0, description: ''},
          width: {type: {name: 'number'}, required: !0, description: ''},
          radius: {type: {name: 'number'}, required: !0, description: ''},
          percent: {type: {name: 'number'}, required: !0, description: ''},
          duration: {type: {name: 'number'}, required: !0, description: ''},
          children: {type: {name: 'element'}, required: !1, description: ''},
        },
      }),
        (__webpack_exports__.a = CircularProgressBar),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES[
            'src/CircularProgressBar/CircularProgressBar.js'
          ] = {
            name: 'CircularProgressBar',
            docgenInfo: CircularProgressBar.__docgenInfo,
            path: 'src/CircularProgressBar/CircularProgressBar.js',
          });
    },
    157: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          24,
        ),
        _util_accessibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          69,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var FullScreenLoader = function FullScreenLoader(props) {
        var background = {
          backgroundColor: Object(
            _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.b,
          )().colors[props.background],
        };
        return props.loading
          ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_2__.View,
              _extends(
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                    [styles.container, background, props.style],
                  ),
                },
                Object(_util_accessibility__WEBPACK_IMPORTED_MODULE_5__.a)(
                  props,
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_2__.ActivityIndicator,
                {
                  style: styles.indicator,
                  color: props.indicatorColor,
                  size: props.size,
                },
              ),
              props.children,
            )
          : null;
      };
      (FullScreenLoader.propTypes = {
        loading:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
        style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
        ]),
        children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
        indicatorColor:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
          'small',
          'large',
        ]),
      }),
        (FullScreenLoader.defaultProps = {
          size: 'large',
          background: 'backgroundDark',
          indicatorColor: '#1e88e5',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        container: {
          position: 'absolute',
          zIndex: 1e3,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        },
        indicator: {padding: 10},
      });
      (FullScreenLoader.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'FullScreenLoader',
        props: {
          size: {
            defaultValue: {value: "'lg'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'sm'", computed: !1},
                {value: "'lg'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          background: {
            defaultValue: {value: "'backgroundDark'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          indicatorColor: {
            defaultValue: {value: "'#1e88e5'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          loading: {type: {name: 'bool'}, required: !0, description: ''},
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          children: {type: {name: 'element'}, required: !1, description: ''},
        },
      }),
        (__webpack_exports__.a = FullScreenLoader),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES[
            'src/FullScreenLoader/FullScreenLoader.js'
          ] = {
            name: 'FullScreenLoader',
            docgenInfo: FullScreenLoader.__docgenInfo,
            path: 'src/FullScreenLoader/FullScreenLoader.js',
          });
    },
    158: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return Deck_Deck;
      });
      __webpack_require__(21), __webpack_require__(32), __webpack_require__(31);
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        cjs = (__webpack_require__(77),
        __webpack_require__(30),
        __webpack_require__(26),
        __webpack_require__(27),
        __webpack_require__(377),
        __webpack_require__(60),
        __webpack_require__(14),
        __webpack_require__(378),
        __webpack_require__(87),
        __webpack_require__(379),
        __webpack_require__(380),
        __webpack_require__(255),
        __webpack_require__(130),
        __webpack_require__(46),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(86),
        __webpack_require__(20),
        __webpack_require__(5)),
        FullScreenLoader = __webpack_require__(154),
        prop_types = __webpack_require__(2),
        prop_types_default = __webpack_require__.n(prop_types),
        clamp = __webpack_require__(145),
        clamp_default = __webpack_require__.n(clamp),
        accessibility = __webpack_require__(69);
      function _typeof(obj) {
        return (_typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) {
              return _arrayLikeToArray(arr);
            }
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              (typeof Symbol !== 'undefined' &&
                iter[Symbol.iterator] != null) ||
              iter['@@iterator'] != null
            ) {
              return Array.from(iter);
            }
          })(arr) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value,
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err,
              );
            }
            _next(void 0);
          });
        };
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = (function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct) {
            return !1;
          }
          if (Reflect.construct.sham) {
            return !1;
          }
          if (typeof Proxy === 'function') {
            return !0;
          }
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = _getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          (_typeof(call) !== 'object' && typeof call !== 'function')
          ? (function _assertThisInitialized(self) {
              if (void 0 === self) {
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              }
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      var width = cjs.Dimensions.get('screen').width,
        DeckHorizontal_Deck = (function(_Component) {
          !(function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            }
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {constructor: {value: subClass, writable: !0, configurable: !0}},
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Deck, _Component);
          var _super = _createSuper(Deck);
          function Deck(props) {
            var _this;
            return (
              (function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError('Cannot call a class as a function');
                }
              })(this, Deck),
              ((_this = _super.call(
                this,
                props,
              )).createPanResponder = function() {
                _this._panResponder = cjs.PanResponder.create({
                  onStartShouldSetPanResponder: function onStartShouldSetPanResponder() {
                    return !0;
                  },
                  onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder() {
                    return !0;
                  },
                  onPanResponderMove: function onPanResponderMove(
                    event,
                    gesture,
                  ) {
                    _this.state.animation.setValue({
                      x: gesture.dx,
                      y: gesture.dy,
                    });
                  },
                  onPanResponderRelease: function onPanResponderRelease(
                    e,
                    _ref,
                  ) {
                    var velocity,
                      dx = _ref.dx,
                      vx = (_ref.dy, _ref.vx),
                      vy = _ref.vy;
                    vx >= 0
                      ? (velocity = clamp_default()(vx, 4, 5))
                      : vx < 0 &&
                        (velocity = -1 * clamp_default()(Math.abs(vx), 4, 5)),
                      Math.abs(dx) > _this.SWIPE_THRESHOLD
                        ? (cjs.Animated.parallel([
                            cjs.Animated.decay(_this.state.animation, {
                              velocity: {x: velocity, y: vy},
                              deceleration: 0.99,
                              useNativeDriver: !0,
                            }),
                            cjs.Animated.spring(_this.state.next, {
                              toValue: 1,
                              friction: 4,
                              useNativeDriver: !0,
                            }),
                          ]).start(_this.transitionNext),
                          velocity > 0
                            ? _this.handlePositiveDecay()
                            : _this.handleNegativeDecay())
                        : cjs.Animated.spring(_this.state.animation, {
                            toValue: {x: 0, y: 0},
                            friction: 4,
                            useNativeDriver: !0,
                          }).start();
                  },
                });
              }),
              (_this.handleNegativeDecay = function() {
                _this.props.onNegativeSwipe && _this.props.onNegativeSwipe();
              }),
              (_this.handlePositiveDecay = function() {
                _this.props.onPositiveSwipe && _this.props.onPositiveSwipe();
              }),
              (_this.transitionNext = function() {
                _this.setState(
                  function(state) {
                    var data = state.data,
                      swiped = state.swiped;
                    return (
                      swiped.unshift(data.shift()), {swiped: swiped, data: data}
                    );
                  },
                  function() {
                    _this.state.next.setValue(0.9),
                      _this.state.animation.setValue({x: 0, y: 0}),
                      _this.checkMoreCards();
                  },
                );
              }),
              (_this.checkMoreCards = _asyncToGenerator(
                regeneratorRuntime.mark(function _callee() {
                  var data, endOfCards;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    for (;;) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!(_this.state.data.length < 2)) {
                            _context.next = 16;
                            break;
                          }
                          if (
                            !_this.props.loop ||
                            _this.props.loadInitialData
                          ) {
                            _context.next = 3;
                            break;
                          }
                          return _context.abrupt(
                            'return',
                            _this.setState(function(state) {
                              return {
                                data: state.data.concat(_this.state.swiped),
                              };
                            }),
                          );
                        case 3:
                          if (
                            (_this.props.loadInitialData &&
                              _this.state.data.length === 0 &&
                              (_this.page = -1),
                            _this.page++,
                            _this.setState({loading: !0}),
                            !_this.props.loadMoreCards)
                          ) {
                            _context.next = 12;
                            break;
                          }
                          return (
                            (_context.next = 9),
                            _this.props.loadMoreCards(_this.page)
                          );
                        case 9:
                          (_context.t0 = _context.sent), (_context.next = 13);
                          break;
                        case 12:
                          _context.t0 = [];
                        case 13:
                          (data = _context.t0),
                            (endOfCards = data.length === 0),
                            _this.setState(function(state) {
                              return {
                                data: state.data.concat(data),
                                endOfCards: endOfCards,
                                loading: !1,
                              };
                            });
                        case 16:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }),
              )),
              (_this.getCardStyles = function(index, items) {
                var isLastItem = index === items.length - 1,
                  isSecondToLast = index === items.length - 2,
                  _this$state = _this.state,
                  animation = _this$state.animation,
                  next = _this$state.next,
                  fade = _this.props.fade,
                  rotate = animation.x.interpolate({
                    inputRange: [-200, 0, 200],
                    outputRange: ['-30deg', '0deg', '30deg'],
                    extrapolate: 'clamp',
                  }),
                  opacity = fade
                    ? animation.x.interpolate({
                        inputRange: [-200, 0, 200],
                        outputRange: [0.5, 1, 0.5],
                      })
                    : 1,
                  animatedCardStyles = {
                    transform: [{rotate: rotate}].concat(
                      _toConsumableArray(animation.getTranslateTransform()),
                    ),
                    opacity: opacity,
                  },
                  cardStyle = isLastItem ? animatedCardStyles : void 0,
                  nextStyle = isSecondToLast
                    ? {transform: [{scale: next}], borderRadius: 5}
                    : void 0;
                return cjs.StyleSheet.flatten([
                  styles.card,
                  cardStyle,
                  nextStyle,
                  _this.props.style,
                ]);
              }),
              (_this.state = {
                data: props.data,
                swiped: [],
                animation: new cjs.Animated.ValueXY(),
                next: new cjs.Animated.Value(0.9),
                endOfCards: !1,
                loading: !!props.loadInitialData,
              }),
              (_this.SWIPE_THRESHOLD = 0.25 * width),
              (_this.page = 0),
              _this.createPanResponder(),
              _this
            );
          }
          return (
            (function _createClass(Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  _defineProperties(Constructor.prototype, protoProps),
                staticProps && _defineProperties(Constructor, staticProps),
                Constructor
              );
            })(Deck, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.checkMoreCards();
                },
              },
              {
                key: 'renderLoadingScreen',
                value: function renderLoadingScreen() {
                  return (
                    this.props.loadingScreen ||
                    react_default.a.createElement(FullScreenLoader.a, {
                      loading: !0,
                    })
                  );
                },
              },
              {
                key: 'renderCards',
                value: function renderCards() {
                  var _this2 = this,
                    data = this.state.data;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    data
                      .slice(0, 2)
                      .reverse()
                      .map(function(item, index, items) {
                        var panHandlers =
                          index === items.length - 1
                            ? Object.assign(
                                {},
                                _this2._panResponder.panHandlers,
                              )
                            : {};
                        return react_default.a.createElement(
                          cjs.Animated.View,
                          _extends({}, panHandlers, {
                            style: _this2.getCardStyles(index, items),
                            key: _this2.props.keyExtractor(item),
                          }),
                          _this2.props.renderItem(item),
                        );
                      }),
                  );
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this$state2 = this.state,
                    endOfCards = _this$state2.endOfCards,
                    loading = _this$state2.loading;
                  return react_default.a.createElement(
                    cjs.View,
                    _extends(
                      {style: styles.container},
                      Object(accessibility.a)(this.props),
                    ),
                    loading
                      ? this.renderLoadingScreen()
                      : endOfCards
                      ? react_default.a.createElement(
                          cjs.Text,
                          null,
                          'No more cards',
                        )
                      : this.renderCards(),
                  );
                },
              },
            ]),
            Deck
          );
        })(react.Component);
      (DeckHorizontal_Deck.propTypes = {
        style: prop_types_default.a.oneOfType([
          prop_types_default.a.object,
          prop_types_default.a.array,
        ]),
        data: prop_types_default.a.array.isRequired,
        renderItem: prop_types_default.a.func.isRequired,
        keyExtractor: prop_types_default.a.func.isRequired,
        loadMoreCards: prop_types_default.a.func,
        onNegativeSwipe: prop_types_default.a.func,
        onPositiveSwipe: prop_types_default.a.func,
        direction: prop_types_default.a.oneOf(['vertical', 'horizontal'])
          .isRequired,
        loadInitialData: prop_types_default.a.bool,
        fade: prop_types_default.a.bool,
        loop: prop_types_default.a.bool,
        loadingScreen: prop_types_default.a.element,
      }),
        (DeckHorizontal_Deck.defaultProps = {
          direction: 'horizontal',
          loop: !1,
          loadInitialData: !1,
          fade: !0,
        });
      var styles = cjs.StyleSheet.create({
        container: {flex: 1},
        card: Object.assign(
          {
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 3,
          },
          cjs.Platform.select({
            android: {elevation: 1},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
            },
          }),
          {borderWidth: 1, borderColor: '#FFF'},
        ),
        loadingScreen: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        loadingText: {fontStyle: 'italic', fontSize: 18},
      });
      DeckHorizontal_Deck.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'createPanResponder',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handleNegativeDecay',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handlePositiveDecay',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'transitionNext',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'checkMoreCards',
            docblock: null,
            modifiers: ['async'],
            params: [],
            returns: null,
          },
          {
            name: 'getCardStyles',
            docblock: null,
            modifiers: [],
            params: [{name: 'index', type: null}, {name: 'items', type: null}],
            returns: null,
          },
          {
            name: 'renderLoadingScreen',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'renderCards',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Deck',
        props: {
          direction: {
            defaultValue: {value: "'horizontal'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'vertical'", computed: !1},
                {value: "'horizontal'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          loop: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          loadInitialData: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          fade: {
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          data: {type: {name: 'array'}, required: !0, description: ''},
          renderItem: {type: {name: 'func'}, required: !0, description: ''},
          keyExtractor: {type: {name: 'func'}, required: !0, description: ''},
          loadMoreCards: {type: {name: 'func'}, required: !1, description: ''},
          onNegativeSwipe: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          onPositiveSwipe: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          loadingScreen: {
            type: {name: 'element'},
            required: !1,
            description: '',
          },
        },
      };
      var DeckHorizontal = DeckHorizontal_Deck;
      function DeckVertical_typeof(obj) {
        return (DeckVertical_typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function DeckVertical_extends() {
        return (DeckVertical_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function DeckVertical_toConsumableArray(arr) {
        return (
          (function DeckVertical_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) {
              return DeckVertical_arrayLikeToArray(arr);
            }
          })(arr) ||
          (function DeckVertical_iterableToArray(iter) {
            if (
              (typeof Symbol !== 'undefined' &&
                iter[Symbol.iterator] != null) ||
              iter['@@iterator'] != null
            ) {
              return Array.from(iter);
            }
          })(arr) ||
          (function DeckVertical_unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return DeckVertical_arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return DeckVertical_arrayLikeToArray(o, minLen);
            }
          })(arr) ||
          (function DeckVertical_nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function DeckVertical_arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function DeckVertical_asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function DeckVertical_asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              DeckVertical_asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value,
              );
            }
            function _throw(err) {
              DeckVertical_asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err,
              );
            }
            _next(void 0);
          });
        };
      }
      function DeckVertical_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function DeckVertical_setPrototypeOf(o, p) {
        return (DeckVertical_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function DeckVertical_createSuper(Derived) {
        var hasNativeReflectConstruct = (function DeckVertical_isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct) {
            return !1;
          }
          if (Reflect.construct.sham) {
            return !1;
          }
          if (typeof Proxy === 'function') {
            return !0;
          }
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = DeckVertical_getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = DeckVertical_getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return DeckVertical_possibleConstructorReturn(this, result);
        };
      }
      function DeckVertical_possibleConstructorReturn(self, call) {
        return !call ||
          (DeckVertical_typeof(call) !== 'object' && typeof call !== 'function')
          ? (function DeckVertical_assertThisInitialized(self) {
              if (void 0 === self) {
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              }
              return self;
            })(self)
          : call;
      }
      function DeckVertical_getPrototypeOf(o) {
        return (DeckVertical_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Deck/DeckHorizontal.js'] = {
          name: 'Deck',
          docgenInfo: DeckHorizontal_Deck.__docgenInfo,
          path: 'src/Deck/DeckHorizontal.js',
        });
      var height = cjs.Dimensions.get('screen').height,
        DeckVertical_Deck = (function(_Component) {
          !(function DeckVertical_inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            }
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {constructor: {value: subClass, writable: !0, configurable: !0}},
            )),
              superClass && DeckVertical_setPrototypeOf(subClass, superClass);
          })(Deck, _Component);
          var _super = DeckVertical_createSuper(Deck);
          function Deck(props) {
            var _this;
            return (
              (function DeckVertical_classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError('Cannot call a class as a function');
                }
              })(this, Deck),
              ((_this = _super.call(
                this,
                props,
              )).createPanResponder = function() {
                _this._panResponder = cjs.PanResponder.create({
                  onStartShouldSetPanResponder: function onStartShouldSetPanResponder() {
                    return !0;
                  },
                  onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder() {
                    return !0;
                  },
                  onPanResponderMove: function onPanResponderMove(
                    event,
                    gesture,
                  ) {
                    gesture.dy > 0
                      ? _this.state.swing.setValue({
                          x: 0,
                          y: gesture.dy - height,
                        })
                      : _this.state.animation.setValue({x: 0, y: gesture.dy});
                  },
                  onPanResponderRelease: function onPanResponderRelease(
                    e,
                    _ref,
                  ) {
                    _ref.dx;
                    var velocity,
                      dy = _ref.dy,
                      vy = (_ref.vx, _ref.vy);
                    if (
                      (vy >= 0
                        ? (velocity = clamp_default()(vy, 8, 10))
                        : vy < 0 &&
                          (velocity =
                            -1 * clamp_default()(Math.abs(vy), 8, 10)),
                      vy > 0)
                    ) {
                      if (_this.state.swiped.length === 0) {
                        return;
                      }
                      Math.abs(dy) > _this.SWIPE_THRESHOLD
                        ? cjs.Animated.spring(_this.state.swing, {
                            toValue: {x: 0, y: 0},
                            speed: 20,
                            useNativeDriver: !0,
                          }).start(function() {
                            _this.setState(
                              function(state) {
                                var data = state.data,
                                  swiped = state.swiped;
                                return (
                                  data.unshift(swiped.shift()),
                                  {swiped: swiped, data: data}
                                );
                              },
                              function() {
                                _this.state.swing.setValue({x: 0, y: height});
                              },
                            );
                          })
                        : cjs.Animated.spring(_this.state.swing, {
                            toValue: {x: 0, y: -height},
                            friction: 4,
                            useNativeDriver: !0,
                          }).start();
                    } else {
                      Math.abs(dy) > _this.SWIPE_THRESHOLD
                        ? (cjs.Animated.parallel([
                            cjs.Animated.decay(_this.state.animation, {
                              velocity: {x: 0, y: velocity},
                              deceleration: 0.99,
                              useNativeDriver: !0,
                            }),
                            cjs.Animated.spring(_this.state.next, {
                              toValue: 1,
                              friction: 4,
                              useNativeDriver: !0,
                            }),
                          ]).start(_this.transitionNext),
                          velocity > 0
                            ? _this.handlePositiveDecay()
                            : _this.handleNegativeDecay())
                        : cjs.Animated.spring(_this.state.animation, {
                            toValue: {x: 0, y: 0},
                            friction: 4,
                            useNativeDriver: !0,
                          }).start();
                    }
                  },
                });
              }),
              (_this.handleNegativeDecay = function() {
                _this.props.onNegativeSwipe && _this.props.onNegativeSwipe();
              }),
              (_this.handlePositiveDecay = function() {
                _this.props.onPositiveSwipe && _this.props.onPositiveSwipe();
              }),
              (_this.transitionNext = function() {
                _this.setState(
                  function(state) {
                    var data = state.data,
                      swiped = state.swiped;
                    return (
                      swiped.unshift(data.shift()), {swiped: swiped, data: data}
                    );
                  },
                  function() {
                    _this.state.next.setValue(0.9),
                      _this.state.animation.setValue({x: 0, y: 0}),
                      _this.checkMoreCards();
                  },
                );
              }),
              (_this.checkMoreCards = DeckVertical_asyncToGenerator(
                regeneratorRuntime.mark(function _callee() {
                  var data, endOfCards;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    for (;;) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!(_this.state.data.length < 2)) {
                            _context.next = 16;
                            break;
                          }
                          if (
                            !_this.props.loop ||
                            _this.props.loadInitialData
                          ) {
                            _context.next = 3;
                            break;
                          }
                          return _context.abrupt(
                            'return',
                            _this.setState(function(state) {
                              return {
                                data: state.data.concat(_this.state.swiped),
                              };
                            }),
                          );
                        case 3:
                          if (
                            (_this.props.loadInitialData &&
                              _this.state.data.length === 0 &&
                              (_this.page = -1),
                            _this.page++,
                            _this.setState({loading: !0}),
                            !_this.props.loadMoreCards)
                          ) {
                            _context.next = 12;
                            break;
                          }
                          return (
                            (_context.next = 9),
                            _this.props.loadMoreCards(_this.page)
                          );
                        case 9:
                          (_context.t0 = _context.sent), (_context.next = 13);
                          break;
                        case 12:
                          _context.t0 = [];
                        case 13:
                          (data = _context.t0),
                            (endOfCards = data.length === 0),
                            _this.setState(function(state) {
                              return {
                                data: state.data.concat(data),
                                endOfCards: endOfCards,
                                loading: !1,
                              };
                            });
                        case 16:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }),
              )),
              (_this.getCardStyles = function(index, items) {
                var isLastItem = index === items.length - 1,
                  isSecondToLast = index === items.length - 2,
                  _this$state = _this.state,
                  animation = _this$state.animation,
                  next = _this$state.next,
                  opacity = _this.props.fade
                    ? animation.y.interpolate({
                        inputRange: [-200, 0, 200],
                        outputRange: [0.5, 1, 0.5],
                      })
                    : 1,
                  animatedCardStyles = {
                    transform: DeckVertical_toConsumableArray(
                      animation.getTranslateTransform(),
                    ),
                    opacity: opacity,
                  },
                  cardStyle = isLastItem ? animatedCardStyles : void 0,
                  nextStyle = isSecondToLast
                    ? {transform: [{scale: next}], borderRadius: 5}
                    : void 0;
                return cjs.StyleSheet.flatten([
                  DeckVertical_styles.card,
                  cardStyle,
                  nextStyle,
                  _this.props.style,
                ]);
              }),
              (_this.state = {
                data: props.data,
                swiped: [],
                animation: new cjs.Animated.ValueXY(),
                next: new cjs.Animated.Value(0.9),
                swing: new cjs.Animated.ValueXY({x: 0, y: height}),
                endOfCards: !1,
                loading: !!props.loadInitialData,
              }),
              (_this.SWIPE_THRESHOLD = 0.3 * height),
              (_this.page = 0),
              _this.createPanResponder(),
              _this
            );
          }
          return (
            (function DeckVertical_createClass(
              Constructor,
              protoProps,
              staticProps,
            ) {
              return (
                protoProps &&
                  DeckVertical_defineProperties(
                    Constructor.prototype,
                    protoProps,
                  ),
                staticProps &&
                  DeckVertical_defineProperties(Constructor, staticProps),
                Constructor
              );
            })(Deck, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.checkMoreCards();
                },
              },
              {
                key: 'renderLoadingScreen',
                value: function renderLoadingScreen() {
                  return (
                    this.props.loadingScreen ||
                    react_default.a.createElement(FullScreenLoader.a, {
                      loading: !0,
                    })
                  );
                },
              },
              {
                key: 'renderCards',
                value: function renderCards() {
                  var _this2 = this,
                    _this$state2 = this.state,
                    data = _this$state2.data,
                    swiped = _this$state2.swiped,
                    swing = _this$state2.swing;
                  return react_default.a.createElement(
                    react_default.a.Fragment,
                    null,
                    swiped
                      .slice(0, 2)
                      .reverse()
                      .map(function(item, index, items) {
                        var animationStyles =
                          index === items.length - 1
                            ? {
                                transform: DeckVertical_toConsumableArray(
                                  swing.getTranslateTransform(),
                                ),
                                elevation: 3,
                              }
                            : {
                                transform: [{translateY: -height}],
                                elevation: 3,
                              };
                        return react_default.a.createElement(
                          cjs.Animated.View,
                          {
                            style: [DeckVertical_styles.card, animationStyles],
                            key: _this2.props.keyExtractor(item),
                          },
                          _this2.props.renderItem(item, !0),
                        );
                      }),
                    data
                      .slice(0, 2)
                      .reverse()
                      .map(function(item, index, items) {
                        var panHandlers =
                          index === items.length - 1
                            ? Object.assign(
                                {},
                                _this2._panResponder.panHandlers,
                              )
                            : {};
                        return react_default.a.createElement(
                          cjs.Animated.View,
                          DeckVertical_extends({}, panHandlers, {
                            style: _this2.getCardStyles(index, items),
                            key: _this2.props.keyExtractor(item),
                          }),
                          _this2.props.renderItem(item),
                        );
                      }),
                  );
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this$state3 = this.state,
                    endOfCards = _this$state3.endOfCards,
                    loading = _this$state3.loading;
                  return react_default.a.createElement(
                    cjs.View,
                    DeckVertical_extends(
                      {style: DeckVertical_styles.container},
                      Object(accessibility.a)(this.props),
                    ),
                    loading
                      ? this.renderLoadingScreen()
                      : endOfCards
                      ? react_default.a.createElement(
                          cjs.Text,
                          null,
                          'No more cards',
                        )
                      : this.renderCards(),
                  );
                },
              },
            ]),
            Deck
          );
        })(react.Component);
      (DeckVertical_Deck.propTypes = {
        style: prop_types_default.a.oneOfType([
          prop_types_default.a.object,
          prop_types_default.a.array,
        ]),
        data: prop_types_default.a.array.isRequired,
        renderItem: prop_types_default.a.func.isRequired,
        keyExtractor: prop_types_default.a.func.isRequired,
        loadMoreCards: prop_types_default.a.func,
        onNegativeSwipe: prop_types_default.a.func,
        onPositiveSwipe: prop_types_default.a.func,
        direction: prop_types_default.a.oneOf(['vertical', 'horizontal'])
          .isRequired,
        loadInitialData: prop_types_default.a.bool,
        fade: prop_types_default.a.bool,
        loop: prop_types_default.a.bool,
        loadingScreen: prop_types_default.a.element,
        allowBackSwipe: prop_types_default.a.bool,
      }),
        (DeckVertical_Deck.defaultProps = {
          direction: 'horizontal',
          loop: !1,
          loadInitialData: !1,
          fade: !0,
          allowBackSwipe: !0,
        });
      var DeckVertical_styles = cjs.StyleSheet.create({
        container: {flex: 1},
        card: Object.assign(
          {
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 3,
          },
          cjs.Platform.select({
            android: {elevation: 1},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
            },
          }),
          {borderWidth: 1, borderColor: '#FFF'},
        ),
        loadingScreen: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        loadingText: {fontStyle: 'italic', fontSize: 18},
      });
      DeckVertical_Deck.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'createPanResponder',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handleNegativeDecay',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handlePositiveDecay',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'transitionNext',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'checkMoreCards',
            docblock: null,
            modifiers: ['async'],
            params: [],
            returns: null,
          },
          {
            name: 'getCardStyles',
            docblock: null,
            modifiers: [],
            params: [{name: 'index', type: null}, {name: 'items', type: null}],
            returns: null,
          },
          {
            name: 'renderLoadingScreen',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'renderCards',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Deck',
        props: {
          direction: {
            defaultValue: {value: "'horizontal'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'vertical'", computed: !1},
                {value: "'horizontal'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          loop: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          loadInitialData: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          fade: {
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          allowBackSwipe: {
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          data: {type: {name: 'array'}, required: !0, description: ''},
          renderItem: {type: {name: 'func'}, required: !0, description: ''},
          keyExtractor: {type: {name: 'func'}, required: !0, description: ''},
          loadMoreCards: {type: {name: 'func'}, required: !1, description: ''},
          onNegativeSwipe: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          onPositiveSwipe: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          loadingScreen: {
            type: {name: 'element'},
            required: !1,
            description: '',
          },
        },
      };
      var DeckVertical = DeckVertical_Deck;
      function DeckVerticalBasic_typeof(obj) {
        return (DeckVerticalBasic_typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function DeckVerticalBasic_extends() {
        return (DeckVerticalBasic_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function DeckVerticalBasic_toConsumableArray(arr) {
        return (
          (function DeckVerticalBasic_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) {
              return DeckVerticalBasic_arrayLikeToArray(arr);
            }
          })(arr) ||
          (function DeckVerticalBasic_iterableToArray(iter) {
            if (
              (typeof Symbol !== 'undefined' &&
                iter[Symbol.iterator] != null) ||
              iter['@@iterator'] != null
            ) {
              return Array.from(iter);
            }
          })(arr) ||
          (function DeckVerticalBasic_unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return DeckVerticalBasic_arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return DeckVerticalBasic_arrayLikeToArray(o, minLen);
            }
          })(arr) ||
          (function DeckVerticalBasic_nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function DeckVerticalBasic_arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function DeckVerticalBasic_asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function DeckVerticalBasic_asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              DeckVerticalBasic_asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value,
              );
            }
            function _throw(err) {
              DeckVerticalBasic_asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err,
              );
            }
            _next(void 0);
          });
        };
      }
      function DeckVerticalBasic_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          (descriptor.enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function DeckVerticalBasic_setPrototypeOf(o, p) {
        return (DeckVerticalBasic_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function DeckVerticalBasic_createSuper(Derived) {
        var hasNativeReflectConstruct = (function DeckVerticalBasic_isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct) {
            return !1;
          }
          if (Reflect.construct.sham) {
            return !1;
          }
          if (typeof Proxy === 'function') {
            return !0;
          }
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function() {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function _createSuperInternal() {
          var result,
            Super = DeckVerticalBasic_getPrototypeOf(Derived);
          if (hasNativeReflectConstruct) {
            var NewTarget = DeckVerticalBasic_getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return DeckVerticalBasic_possibleConstructorReturn(this, result);
        };
      }
      function DeckVerticalBasic_possibleConstructorReturn(self, call) {
        return !call ||
          (DeckVerticalBasic_typeof(call) !== 'object' &&
            typeof call !== 'function')
          ? (function DeckVerticalBasic_assertThisInitialized(self) {
              if (void 0 === self) {
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              }
              return self;
            })(self)
          : call;
      }
      function DeckVerticalBasic_getPrototypeOf(o) {
        return (DeckVerticalBasic_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Deck/DeckVertical.js'] = {
          name: 'Deck',
          docgenInfo: DeckVertical_Deck.__docgenInfo,
          path: 'src/Deck/DeckVertical.js',
        });
      var DeckVerticalBasic_height = cjs.Dimensions.get('window').height,
        DeckVerticalBasic_Deck = (function(_Component) {
          !(function DeckVerticalBasic_inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            }
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {constructor: {value: subClass, writable: !0, configurable: !0}},
            )),
              superClass &&
                DeckVerticalBasic_setPrototypeOf(subClass, superClass);
          })(Deck, _Component);
          var _super = DeckVerticalBasic_createSuper(Deck);
          function Deck(props) {
            var _this;
            return (
              (function DeckVerticalBasic_classCallCheck(
                instance,
                Constructor,
              ) {
                if (!(instance instanceof Constructor)) {
                  throw new TypeError('Cannot call a class as a function');
                }
              })(this, Deck),
              ((_this = _super.call(
                this,
                props,
              )).createPanResponder = function() {
                _this._panResponder = cjs.PanResponder.create({
                  onStartShouldSetPanResponder: function onStartShouldSetPanResponder() {
                    return !0;
                  },
                  onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder() {
                    return !0;
                  },
                  onPanResponderMove: function onPanResponderMove(
                    event,
                    gesture,
                  ) {
                    _this.state.animation.setValue({x: 0, y: gesture.dy});
                  },
                  onPanResponderRelease: function onPanResponderRelease(
                    e,
                    _ref,
                  ) {
                    _ref.dx;
                    var velocity,
                      dy = _ref.dy,
                      vy = (_ref.vx, _ref.vy);
                    vy >= 0
                      ? (velocity = clamp_default()(vy, 8, 10))
                      : vy < 0 &&
                        (velocity = -1 * clamp_default()(Math.abs(vy), 8, 10)),
                      Math.abs(dy) > _this.SWIPE_THRESHOLD
                        ? (cjs.Animated.parallel([
                            cjs.Animated.decay(_this.state.animation, {
                              velocity: {x: 0, y: velocity},
                              deceleration: 0.99,
                              useNativeDriver: !0,
                            }),
                            cjs.Animated.spring(_this.state.next, {
                              toValue: 1,
                              friction: 4,
                              useNativeDriver: !0,
                            }),
                          ]).start(_this.transitionNext),
                          velocity > 0
                            ? _this.handlePositiveDecay()
                            : _this.handleNegativeDecay())
                        : cjs.Animated.spring(_this.state.animation, {
                            toValue: {x: 0, y: 0},
                            friction: 4,
                            useNativeDriver: !0,
                          }).start();
                  },
                });
              }),
              (_this.handleNegativeDecay = function() {
                _this.props.onNegativeSwipe && _this.props.onNegativeSwipe();
              }),
              (_this.handlePositiveDecay = function() {
                _this.props.onPositiveSwipe && _this.props.onPositiveSwipe();
              }),
              (_this.transitionNext = function() {
                _this.setState(
                  function(state) {
                    var data = state.data,
                      swiped = state.swiped;
                    return (
                      swiped.push(data.shift()), {swiped: swiped, data: data}
                    );
                  },
                  function() {
                    _this.state.next.setValue(0.9),
                      _this.state.animation.setValue({x: 0, y: 0}),
                      _this.checkMoreCards();
                  },
                );
              }),
              (_this.checkMoreCards = DeckVerticalBasic_asyncToGenerator(
                regeneratorRuntime.mark(function _callee() {
                  var data, endOfCards;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    for (;;) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          if (!(_this.state.data.length < 2)) {
                            _context.next = 16;
                            break;
                          }
                          if (
                            !_this.props.loop ||
                            _this.props.loadInitialData
                          ) {
                            _context.next = 3;
                            break;
                          }
                          return _context.abrupt(
                            'return',
                            _this.setState(function(state) {
                              return {
                                data: state.data.concat(_this.state.swiped),
                              };
                            }),
                          );
                        case 3:
                          if (
                            (_this.props.loadInitialData &&
                              _this.state.data.length === 0 &&
                              (_this.page = -1),
                            _this.page++,
                            _this.setState({loading: !0}),
                            !_this.props.loadMoreCards)
                          ) {
                            _context.next = 12;
                            break;
                          }
                          return (
                            (_context.next = 9),
                            _this.props.loadMoreCards(_this.page)
                          );
                        case 9:
                          (_context.t0 = _context.sent), (_context.next = 13);
                          break;
                        case 12:
                          _context.t0 = [];
                        case 13:
                          (data = _context.t0),
                            (endOfCards = data.length === 0),
                            _this.setState(function(state) {
                              return {
                                data: state.data.concat(data),
                                endOfCards: endOfCards,
                                loading: !1,
                              };
                            });
                        case 16:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }),
              )),
              (_this.getCardStyles = function(index, items) {
                var isLastItem = index === items.length - 1,
                  isSecondToLast = index === items.length - 2,
                  _this$state = _this.state,
                  animation = _this$state.animation,
                  next = _this$state.next,
                  opacity = _this.props.fade
                    ? animation.y.interpolate({
                        inputRange: [-200, 0, 200],
                        outputRange: [0.5, 1, 0.5],
                      })
                    : 1,
                  animatedCardStyles = {
                    transform: [{rotate: '0deg'}].concat(
                      DeckVerticalBasic_toConsumableArray(
                        animation.getTranslateTransform(),
                      ),
                    ),
                    opacity: opacity,
                  },
                  cardStyle = isLastItem ? animatedCardStyles : void 0,
                  nextStyle = isSecondToLast
                    ? {transform: [{scale: next}], borderRadius: 5}
                    : void 0;
                return cjs.StyleSheet.flatten([
                  DeckVerticalBasic_styles.card,
                  cardStyle,
                  nextStyle,
                  _this.props.style,
                ]);
              }),
              (_this.state = {
                data: props.data,
                swiped: [],
                animation: new cjs.Animated.ValueXY(),
                next: new cjs.Animated.Value(0.9),
                endOfCards: !1,
                loading: !!props.loadInitialData,
              }),
              (_this.SWIPE_THRESHOLD = 0.3 * DeckVerticalBasic_height),
              (_this.page = 0),
              _this.createPanResponder(),
              _this
            );
          }
          return (
            (function DeckVerticalBasic_createClass(
              Constructor,
              protoProps,
              staticProps,
            ) {
              return (
                protoProps &&
                  DeckVerticalBasic_defineProperties(
                    Constructor.prototype,
                    protoProps,
                  ),
                staticProps &&
                  DeckVerticalBasic_defineProperties(Constructor, staticProps),
                Constructor
              );
            })(Deck, [
              {
                key: 'componentDidMount',
                value: function componentDidMount() {
                  this.checkMoreCards();
                },
              },
              {
                key: 'renderLoadingScreen',
                value: function renderLoadingScreen() {
                  return (
                    this.props.loadingScreen ||
                    react_default.a.createElement(FullScreenLoader.a, {
                      loading: !0,
                    })
                  );
                },
              },
              {
                key: 'render',
                value: function render() {
                  var _this2 = this,
                    _this$state2 = this.state,
                    data = _this$state2.data,
                    endOfCards = _this$state2.endOfCards,
                    loading = _this$state2.loading;
                  return react_default.a.createElement(
                    cjs.View,
                    DeckVerticalBasic_extends(
                      {style: DeckVerticalBasic_styles.container},
                      Object(accessibility.a)(this.props),
                    ),
                    loading
                      ? this.renderLoadingScreen()
                      : endOfCards
                      ? react_default.a.createElement(
                          cjs.Text,
                          null,
                          'No more cards',
                        )
                      : data
                          .slice(0, 2)
                          .reverse()
                          .map(function(item, index, items) {
                            var panHandlers =
                              index === items.length - 1
                                ? Object.assign(
                                    {},
                                    _this2._panResponder.panHandlers,
                                  )
                                : {};
                            return react_default.a.createElement(
                              cjs.Animated.View,
                              DeckVerticalBasic_extends({}, panHandlers, {
                                style: _this2.getCardStyles(index, items),
                                key: _this2.props.keyExtractor(item),
                              }),
                              _this2.props.renderItem(item),
                            );
                          }),
                  );
                },
              },
            ]),
            Deck
          );
        })(react.Component);
      (DeckVerticalBasic_Deck.propTypes = {
        style: prop_types_default.a.oneOfType([
          prop_types_default.a.object,
          prop_types_default.a.array,
        ]),
        data: prop_types_default.a.array.isRequired,
        renderItem: prop_types_default.a.func.isRequired,
        keyExtractor: prop_types_default.a.func.isRequired,
        loadMoreCards: prop_types_default.a.func,
        onNegativeSwipe: prop_types_default.a.func,
        onPositiveSwipe: prop_types_default.a.func,
        direction: prop_types_default.a.oneOf(['vertical', 'horizontal'])
          .isRequired,
        loadInitialData: prop_types_default.a.bool,
        fade: prop_types_default.a.bool,
        loop: prop_types_default.a.bool,
        loadingScreen: prop_types_default.a.element,
      }),
        (DeckVerticalBasic_Deck.defaultProps = {
          direction: 'horizontal',
          loop: !1,
          loadInitialData: !1,
          fade: !0,
        });
      var DeckVerticalBasic_styles = cjs.StyleSheet.create({
        container: {flex: 1},
        card: Object.assign(
          {
            width: '100%',
            height: '100%',
            position: 'absolute',
            borderRadius: 3,
          },
          cjs.Platform.select({
            android: {elevation: 1},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
            },
          }),
          {borderWidth: 1, borderColor: '#FFF'},
        ),
        loadingScreen: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        loadingText: {fontStyle: 'italic', fontSize: 18},
      });
      DeckVerticalBasic_Deck.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'createPanResponder',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handleNegativeDecay',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handlePositiveDecay',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'transitionNext',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'checkMoreCards',
            docblock: null,
            modifiers: ['async'],
            params: [],
            returns: null,
          },
          {
            name: 'getCardStyles',
            docblock: null,
            modifiers: [],
            params: [{name: 'index', type: null}, {name: 'items', type: null}],
            returns: null,
          },
          {
            name: 'renderLoadingScreen',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Deck',
        props: {
          direction: {
            defaultValue: {value: "'horizontal'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'vertical'", computed: !1},
                {value: "'horizontal'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          loop: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          loadInitialData: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          fade: {
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          data: {type: {name: 'array'}, required: !0, description: ''},
          renderItem: {type: {name: 'func'}, required: !0, description: ''},
          keyExtractor: {type: {name: 'func'}, required: !0, description: ''},
          loadMoreCards: {type: {name: 'func'}, required: !1, description: ''},
          onNegativeSwipe: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          onPositiveSwipe: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          loadingScreen: {
            type: {name: 'element'},
            required: !1,
            description: '',
          },
        },
      };
      var DeckVerticalBasic = DeckVerticalBasic_Deck;
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      function Deck_Deck(_ref) {
        var direction = _ref.direction,
          allowBackSwipe = _ref.allowBackSwipe,
          props = _objectWithoutProperties(_ref, [
            'direction',
            'allowBackSwipe',
          ]);
        return direction === 'horizontal'
          ? react_default.a.createElement(DeckHorizontal, props)
          : allowBackSwipe
          ? react_default.a.createElement(DeckVertical, props)
          : react_default.a.createElement(DeckVerticalBasic, props);
      }
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Deck/DeckVerticalBasic.js'] = {
          name: 'Deck',
          docgenInfo: DeckVerticalBasic_Deck.__docgenInfo,
          path: 'src/Deck/DeckVerticalBasic.js',
        }),
        (Deck_Deck.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Deck',
        }),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Deck/Deck.js'] = {
            name: 'Deck',
            docgenInfo: Deck_Deck.__docgenInfo,
            path: 'src/Deck/Deck.js',
          });
    },
    17: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            round = _ref.round,
            outline = _ref.outline,
            outlineColor = _ref.outlineColor,
            error = _ref.error,
            background = _ref.background,
            inputContainerStyle = [styles.container];
          return (
            inputContainerStyle.push({
              borderBottomColor: theme.colors[outlineColor],
            }),
            outline &&
              inputContainerStyle.push({
                borderWidth: 1,
                borderBottomWidth: 1,
                borderColor: theme.colors[outlineColor],
                borderBottomColor: theme.colors[outlineColor],
                backgroundColor: theme.colors[background],
                borderRadius: 5,
              }),
            round &&
              inputContainerStyle.push({
                borderBottomWidth: 0,
                borderRadius: 50,
                backgroundColor: theme.colors[background],
              }),
            outline &&
              round &&
              inputContainerStyle.push({
                borderWidth: 1,
                borderBottomWidth: 1,
                borderColor: theme.colors[outlineColor],
                borderBottomColor: theme.colors[outlineColor],
                backgroundColor: theme.colors[background],
              }),
            error &&
              inputContainerStyle.push({
                borderColor: '#ff000080',
                borderBottomColor: '#ff000080',
                backgroundColor: '#ff000005',
              }),
            inputContainerStyle
          );
        },
        getInputStyle = function getInputStyle(_ref2) {
          var theme = _ref2.theme,
            size = _ref2.size,
            textColor = _ref2.textColor,
            textAlign = _ref2.textAlign,
            inputStyle = [styles.input];
          return (
            inputStyle.push({
              fontSize: theme.fontSize[size],
              color: theme.colors[textColor],
              marginVertical: 0,
              textAlign: textAlign,
            }),
            inputStyle
          );
        },
        getLabelStyle = function getLabelStyle(_ref3) {
          var theme = _ref3.theme,
            size = _ref3.size,
            labelColor = _ref3.labelColor;
          return [
            {
              fontSize: theme.fontSize[size],
              fontWeight: 'bold',
              paddingLeft: 2.5,
              paddingBottom: 5,
              color: theme.colors[labelColor],
            },
          ];
        },
        getLabelHintStyle = function getLabelHintStyle(_ref4) {
          var theme = _ref4.theme,
            size = _ref4.size,
            labelHintColor = _ref4.labelHintColor;
          return [
            {
              fontSize: 0.9 * theme.fontSize[size],
              fontStyle: 'italic',
              paddingLeft: 2.5,
              paddingBottom: 8,
              color: theme.textColor[labelHintColor],
            },
          ];
        },
        getCaptionStyle = function getCaptionStyle(_ref5) {
          var theme = _ref5.theme,
            size = _ref5.size;
          return [
            {
              fontSize: 0.8 * theme.fontSize[size],
              fontWeight: '600',
              paddingLeft: 5,
              paddingTop: 5,
              color: '#ff000080',
            },
          ];
        },
        Input = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(
          function(props, ref) {
            var theme = Object(
                _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.b,
              )(),
              showLabel = props.floatingLabel
                ? props.value.length > 0
                : props.label,
              showLabelHint = showLabel && props.labelHint;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_2__.View,
              {style: props.containerStyle},
              showLabel
                ? typeof props.label === 'string'
                  ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_2__.Text,
                      {
                        style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                          [
                            getLabelStyle(
                              Object.assign({}, props, {theme: theme}),
                            ),
                            props.labelStyle,
                          ],
                        ),
                      },
                      props.label,
                    )
                  : props.label
                : null,
              showLabelHint
                ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_2__.Text,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                        [
                          getLabelHintStyle(
                            Object.assign({}, props, {theme: theme}),
                          ),
                          props.labelHintStyle,
                        ],
                      ),
                    },
                    props.labelHint,
                  )
                : null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                    [
                      getContainerStyle(
                        Object.assign({}, props, {theme: theme}),
                      ),
                      props.style,
                    ],
                  ),
                },
                props.leftIcon &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                    {style: styles.leftIcon},
                    props.leftIcon,
                  ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_2__.TextInput,
                  _extends({editable: !props.disabled}, props, {
                    ref: ref,
                    style: getInputStyle(
                      Object.assign({}, props, {theme: theme}),
                    ),
                    placeholderTextColor: theme.colors.subtle,
                    placeholder: props.floatingLabel
                      ? props.label
                      : props.placeholder,
                  }),
                ),
                props.rightIcon &&
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                    {style: styles.rightIcon},
                    props.rightIcon,
                  ),
              ),
              props.error && props.errorCaption
                ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_2__.Text,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                        [
                          getCaptionStyle(
                            Object.assign({}, props, {theme: theme}),
                          ),
                          props.labelStyle,
                        ],
                      ),
                    },
                    props.errorCaption,
                  )
                : null,
            );
          },
        );
      (Input.propTypes = {
        style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
        ]),
        textStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
        ]),
        textColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        value:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
        onChangeText:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
        placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        floatingLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        labelStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        labelHintStyle:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        labelColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        labelHintColor:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
        ]),
        labelHint: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        outlineColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        round: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        outline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        errorCaption: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        textAlign: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
          'left',
          'center',
          'right',
        ]),
        size: _util_prop_types__WEBPACK_IMPORTED_MODULE_5__.b,
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
        rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
        background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
      }),
        (Input.defaultProps = {
          placeholder: 'Type here',
          textColor: 'body',
          color: 'subtle',
          size: 'medium',
          labelColor: 'subtle',
          background: 'foreground',
          outlineColor: 'outline',
          floatingLabel: !1,
          textAlign: 'left',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.5,
        },
        input: {flex: 1, padding: 10},
        leftIcon: {
          paddingLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
        rightIcon: {
          paddingRight: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
      (Input.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Input',
        props: {
          placeholder: {
            defaultValue: {value: "'Type here'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          textColor: {
            defaultValue: {value: "'body'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          color: {
            defaultValue: {value: "'subtle'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          labelColor: {
            defaultValue: {value: "'subtle'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          background: {
            defaultValue: {value: "'foreground'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          outlineColor: {
            defaultValue: {value: "'outline'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          floatingLabel: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          textAlign: {
            defaultValue: {value: "'left'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'left'", computed: !1},
                {value: "'center'", computed: !1},
                {value: "'right'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          value: {type: {name: 'string'}, required: !0, description: ''},
          onChangeText: {type: {name: 'func'}, required: !0, description: ''},
          labelStyle: {type: {name: 'object'}, required: !1, description: ''},
          labelHintStyle: {
            type: {name: 'object'},
            required: !1,
            description: '',
          },
          labelHintColor: {
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          label: {
            type: {name: 'union', value: [{name: 'string'}, {name: 'element'}]},
            required: !1,
            description: '',
          },
          labelHint: {type: {name: 'string'}, required: !1, description: ''},
          round: {type: {name: 'bool'}, required: !1, description: ''},
          outline: {type: {name: 'bool'}, required: !1, description: ''},
          error: {type: {name: 'bool'}, required: !1, description: ''},
          errorCaption: {type: {name: 'string'}, required: !1, description: ''},
          disabled: {type: {name: 'bool'}, required: !1, description: ''},
          leftIcon: {type: {name: 'element'}, required: !1, description: ''},
          rightIcon: {type: {name: 'element'}, required: !1, description: ''},
        },
      }),
        (__webpack_exports__.a = Input),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Input/Input.js'] = {
            name: 'Input',
            docgenInfo: Input.__docgenInfo,
            path: 'src/Input/Input.js',
          });
    },
    172: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _RadioButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _RadioButton__WEBPACK_IMPORTED_MODULE_0__.b;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return _RadioButton__WEBPACK_IMPORTED_MODULE_0__.a;
        });
    },
    19: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(280),
        prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_8__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          13,
        );
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            space = _ref.space,
            background = _ref.background,
            itemStyle = [styles.container];
          return (
            itemStyle.push({
              borderColor: theme.colors.outline,
              backgroundColor: theme.colors[background],
              padding: theme.space[space],
            }),
            itemStyle
          );
        },
        getTextStyle = function getTextStyle(_ref2) {
          var theme = _ref2.theme,
            size = _ref2.size,
            textColor = _ref2.textColor,
            textAlign = _ref2.textAlign;
          return {
            fontSize: theme.fontSize[size],
            fontWeight: '500',
            color: theme.colors[textColor],
            textAlign: textAlign,
          };
        },
        getSubtitleStyle = function getSubtitleStyle(_ref3) {
          var theme = _ref3.theme,
            size = _ref3.size,
            subtitleColor = _ref3.subtitleColor,
            textAlign = _ref3.textAlign;
          return {
            fontSize: 0.7 * theme.fontSize[size],
            fontWeight: '400',
            color: theme.colors[subtitleColor],
            textAlign: textAlign,
            marginTop: 3,
          };
        },
        ListItem = function ListItem(_ref6) {
          var style = _ref6.style,
            textStyle = _ref6.textStyle,
            subtitleStyle = _ref6.subtitleStyle,
            background = _ref6.background,
            props = _objectWithoutProperties(_ref6, [
              'style',
              'textStyle',
              'subtitleStyle',
              'background',
            ]),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__.b,
            )(),
            propsWithTheme = Object.assign({}, props, {
              background: background,
              theme: theme,
            }),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            TouchableElement,
            props,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_5__.View,
              {
                style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                  [getContainerStyle(propsWithTheme), style],
                ),
              },
              (function renderLeftChild(_ref4) {
                var avatarSource = _ref4.avatarSource,
                  leftIcon = _ref4.leftIcon,
                  iconStyle = _ref4.iconStyle;
                return avatarSource
                  ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                      {source: avatarSource, size: 'xs'},
                    )
                  : leftIcon
                  ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                      {
                        style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                          [styles.iconStyle, iconStyle],
                        ),
                      },
                      leftIcon,
                    )
                  : null;
              })(propsWithTheme),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                {style: styles.textView},
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                  {
                    style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                      [getTextStyle(propsWithTheme), textStyle],
                    ),
                  },
                  props.children,
                ),
                props.subtitle &&
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                        [getSubtitleStyle(propsWithTheme), subtitleStyle],
                      ),
                    },
                    props.subtitle,
                  ),
              ),
              (function renderRightChild(_ref5) {
                var chevron = _ref5.chevron,
                  rightIcon = _ref5.rightIcon,
                  iconStyle = _ref5.iconStyle,
                  theme = _ref5.theme,
                  size = _ref5.size,
                  chevronColor = _ref5.chevronColor;
                return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
                  null,
                  rightIcon &&
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                      {
                        style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                          [styles.iconStyle, iconStyle],
                        ),
                      },
                      rightIcon,
                    ),
                  chevron &&
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                      {
                        style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                          [styles.iconStyle, iconStyle],
                        ),
                      },
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
                        {
                          name: 'chevron-right',
                          size: theme.iconSize[size],
                          color: theme.colors[chevronColor],
                        },
                      ),
                    ),
                );
              })(propsWithTheme),
            ),
          );
        };
      (ListItem.displayName = 'ListItem'),
        (ListItem.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,
            ],
          ),
          subtitleStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
          iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
          textAlign: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf([
            'auto',
            'left',
            'center',
            'right',
            'justify',
          ]),
          children:
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
          subtitle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
          background: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
          textColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
          subtitleColor:
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
          chevronColor:
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
          size: _util_prop_types__WEBPACK_IMPORTED_MODULE_10__.b,
          space: _util_prop_types__WEBPACK_IMPORTED_MODULE_10__.c,
          onPress:
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
          avatarSource:
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
          leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.element,
          rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.element,
          chevron: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
          activeOpacity:
            prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
        }),
        (ListItem.defaultProps = {
          children: 'Pass children to render',
          background: 'foreground',
          textColor: 'body',
          subtitleColor: 'subtle',
          chevronColor: 'body',
          textAlign: 'left',
          space: 'medium',
          size: 'medium',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: Object.assign(
          {flexDirection: 'row', alignItems: 'center', borderRadius: 1},
          react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.select({
            android: {elevation: 1},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
            },
          }),
        ),
        textView: {flex: 1, justifyContent: 'center', paddingHorizontal: 10},
        iconStyle: {justifyContent: 'center', alignItems: 'center'},
      });
      (ListItem.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ListItem',
        props: {
          children: {
            defaultValue: {value: "'Pass children to render'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          background: {
            defaultValue: {value: "'foreground'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          textColor: {
            defaultValue: {value: "'body'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          subtitleColor: {
            defaultValue: {value: "'subtle'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          chevronColor: {
            defaultValue: {value: "'body'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          textAlign: {
            defaultValue: {value: "'left'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'auto'", computed: !1},
                {value: "'left'", computed: !1},
                {value: "'center'", computed: !1},
                {value: "'right'", computed: !1},
                {value: "'justify'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          space: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'spaces'},
            required: !1,
            description: '',
          },
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          subtitleStyle: {
            type: {name: 'object'},
            required: !1,
            description: '',
          },
          iconStyle: {type: {name: 'object'}, required: !1, description: ''},
          subtitle: {type: {name: 'string'}, required: !1, description: ''},
          onPress: {type: {name: 'func'}, required: !0, description: ''},
          avatarSource: {type: {name: 'object'}, required: !1, description: ''},
          leftIcon: {type: {name: 'element'}, required: !1, description: ''},
          rightIcon: {type: {name: 'element'}, required: !1, description: ''},
          chevron: {type: {name: 'bool'}, required: !1, description: ''},
          disabled: {type: {name: 'bool'}, required: !1, description: ''},
          activeOpacity: {
            type: {name: 'number'},
            required: !1,
            description: '',
          },
        },
      }),
        (__webpack_exports__.a = ListItem),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/ListItem/ListItem.js'] = {
            name: 'ListItem',
            docgenInfo: ListItem.__docgenInfo,
            path: 'src/ListItem/ListItem.js',
          });
    },
    190: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          24,
        ),
        _util_accessibility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          69,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            background = _ref.background,
            style = _ref.style,
            containerStyle = [
              styles.container,
              {backgroundColor: theme.colors[background]},
            ];
          return (
            style && containerStyle.push(style),
            react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
              containerStyle,
            )
          );
        },
        getChildStyle = function getChildStyle(_ref2) {
          var theme = _ref2.theme,
            overlayBackground = _ref2.overlayBackground,
            overlayStyle = _ref2.overlayStyle,
            borderRadius = _ref2.borderRadius,
            width = _ref2.width,
            contentStyle = [
              {
                elevation: 1,
                backgroundColor: theme.colors[overlayBackground],
                borderRadius: borderRadius,
                width: width,
              },
            ];
          return (
            overlayStyle && contentStyle.push(overlayStyle),
            react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
              contentStyle,
            )
          );
        },
        Overlay = function Overlay(props) {
          var theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.b,
            )(),
            ContainerView = props.onPressOutside
              ? react_native__WEBPACK_IMPORTED_MODULE_2__.Pressable
              : react_native__WEBPACK_IMPORTED_MODULE_2__.View;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.Modal,
            Object(_util_accessibility__WEBPACK_IMPORTED_MODULE_5__.b)(props),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              ContainerView,
              _extends(
                {},
                Object(_util_accessibility__WEBPACK_IMPORTED_MODULE_5__.a)(
                  props,
                ),
                {
                  onPress: props.onPressOutside,
                  style: getContainerStyle(
                    Object.assign({}, props, {theme: theme}),
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                {
                  style: getChildStyle(
                    Object.assign({}, props, {theme: theme}),
                  ),
                },
                props.children,
              ),
            ),
          );
        };
      (Overlay.displayName = 'Overlay'),
        (Overlay.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
          ]),
          overlayStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          children:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element
              .isRequired,
          background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          overlayBackground:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          borderRadius:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
          width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          ]),
          height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          ]),
        }),
        (Overlay.defaultProps = {
          background: 'semitransparent',
          overlayBackground: 'clearWhite',
          borderRadius: 3,
          width: '80%',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
      });
      (Overlay.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Overlay',
        props: {
          background: {
            defaultValue: {value: "'semitransparent'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          overlayBackground: {
            defaultValue: {value: "'clearWhite'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          borderRadius: {
            defaultValue: {value: '3', computed: !1},
            type: {name: 'number'},
            required: !1,
            description: '',
          },
          width: {
            defaultValue: {value: "'80%'", computed: !1},
            type: {name: 'union', value: [{name: 'number'}, {name: 'string'}]},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          overlayStyle: {type: {name: 'object'}, required: !1, description: ''},
          children: {type: {name: 'element'}, required: !0, description: ''},
          height: {
            type: {name: 'union', value: [{name: 'number'}, {name: 'string'}]},
            required: !1,
            description: '',
          },
        },
      }),
        (__webpack_exports__.a = Overlay),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Overlay/Overlay.js'] = {
            name: 'Overlay',
            docgenInfo: Overlay.__docgenInfo,
            path: 'src/Overlay/Overlay.js',
          });
    },
    221: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _Text__WEBPACK_IMPORTED_MODULE_0__.a;
      });
    },
    24: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return useThemeContext;
      }),
        __webpack_require__.d(__webpack_exports__, 'c', function() {
          return useThemeMode;
        });
      __webpack_require__(14),
        __webpack_require__(77),
        __webpack_require__(30),
        __webpack_require__(130),
        __webpack_require__(31),
        __webpack_require__(46),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(60),
        __webpack_require__(20),
        __webpack_require__(86);
      var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_13__,
        );
      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg,
      ) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value,
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err,
              );
            }
            _next(void 0);
          });
        };
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              arr &&
              ((typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
                arr['@@iterator']);
            if (_i == null) {
              return;
            }
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              ) {}
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      var ThemeContext = react__WEBPACK_IMPORTED_MODULE_13___default.a.createContext(),
        ColorSchemeContext = react__WEBPACK_IMPORTED_MODULE_13___default.a.createContext(),
        useThemeContext = function useThemeContext() {
          var theme = react__WEBPACK_IMPORTED_MODULE_13___default.a.useContext(
            ThemeContext,
          );
          if (void 0 === theme) {
            throw new Error(
              'useThemeContext must be used within a ThemeProvider',
            );
          }
          return theme;
        },
        useThemeMode = function useThemeMode() {
          var themeInfo = react__WEBPACK_IMPORTED_MODULE_13___default.a.useContext(
            ColorSchemeContext,
          );
          if (void 0 === themeInfo) {
            throw new Error('useThemeMode must be used within a ThemeProvider');
          }
          return themeInfo;
        },
        ThemeProvider = function ThemeProvider(_ref) {
          var theme = _ref.theme,
            colorMode = _ref.colorMode,
            storage = _ref.storage,
            children = _ref.children;
          if (void 0 === theme) {
            throw new Error(
              'theme value must be provided within a ThemeProvider',
            );
          }
          var _React$useState2 = _slicedToArray(
              react__WEBPACK_IMPORTED_MODULE_13___default.a.useState(
                colorMode !== 'light',
              ),
              2,
            ),
            isDarkMode = _React$useState2[0],
            setIsDarkMode = _React$useState2[1],
            _React$useState4 = _slicedToArray(
              react__WEBPACK_IMPORTED_MODULE_13___default.a.useState(
                void 0 !== storage,
              ),
              2,
            ),
            loadingStorage = _React$useState4[0],
            setLoadingStorage = _React$useState4[1],
            currentTheme = react__WEBPACK_IMPORTED_MODULE_13___default.a.useMemo(
              function() {
                var _theme = Object.assign({}, theme);
                return (
                  isDarkMode &&
                    (_theme = Object.assign({}, theme, {
                      colors: Object.assign(
                        {},
                        theme.colors,
                        theme.colors.dark,
                      ),
                    })),
                  _theme
                );
              },
              [isDarkMode, theme],
            );
          return (
            react__WEBPACK_IMPORTED_MODULE_13___default.a.useEffect(
              function() {
                storage &&
                  !loadingStorage &&
                  storage
                    .setItem('rnds_color_scheme', isDarkMode ? 'dark' : 'light')
                    .catch(function(e) {
                      return console.log(e);
                    });
              },
              [isDarkMode],
            ),
            react__WEBPACK_IMPORTED_MODULE_13___default.a.useEffect(
              function() {
                function _getThemeFromStorage() {
                  return (_getThemeFromStorage = _asyncToGenerator(
                    regeneratorRuntime.mark(function _callee() {
                      var AsyncStorage, colorScheme;
                      return regeneratorRuntime.wrap(function _callee$(
                        _context,
                      ) {
                        for (;;) {
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              if (!storage) {
                                _context.next = 9;
                                break;
                              }
                              return (
                                (AsyncStorage = storage),
                                (_context.next = 4),
                                AsyncStorage.getItem('rnds_color_scheme')
                              );
                            case 4:
                              (colorScheme = _context.sent),
                                console.log('colorScheme', colorScheme),
                                setIsDarkMode(colorScheme === 'dark'),
                                setLoadingStorage(!1);
                            case 9:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      },
                      _callee);
                    }),
                  )).apply(this, arguments);
                }
                !(function getThemeFromStorage() {
                  return _getThemeFromStorage.apply(this, arguments);
                })();
              },
              [storage],
            ),
            react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
              ThemeContext.Provider,
              {value: currentTheme},
              react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                ColorSchemeContext.Provider,
                {
                  value: {
                    isDarkMode: isDarkMode,
                    toggleDarkMode: function toggleDarkMode() {
                      setIsDarkMode(function(prevValue) {
                        return !prevValue;
                      });
                    },
                  },
                },
                children,
              ),
            )
          );
        };
      (ThemeProvider.displayName = 'ThemeProvider'),
        (ThemeProvider.defaultProps = {colorMode: 'light'}),
        (ThemeProvider.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ThemeProvider',
          props: {
            colorMode: {
              defaultValue: {value: "'light'", computed: !1},
              required: !1,
            },
          },
        }),
        (__webpack_exports__.a = ThemeProvider),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/util/ThemeProvider.js'] = {
            name: 'ThemeProvider',
            docgenInfo: ThemeProvider.__docgenInfo,
            path: 'src/util/ThemeProvider.js',
          });
    },
    280: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _Avatar__WEBPACK_IMPORTED_MODULE_0__.a;
      });
    },
    281: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _CheckBox__WEBPACK_IMPORTED_MODULE_0__.a;
      });
    },
    29: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17),
        prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_5__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          24,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var renderIndicator = function renderIndicator(props) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          react_native__WEBPACK_IMPORTED_MODULE_2__.View,
          {style: styles.rightIcons},
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.View,
            {style: styles.indicator},
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_2__.ActivityIndicator,
              {animating: !0 === props.loading, color: props.indicatorColor},
            ),
          ),
          props.onCancel &&
            props.value.length !== 0 &&
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_2__.TouchableOpacity,
              {onPress: props.onCancel},
              props.rightIcon ||
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {
                    name: 'x-circle',
                    size: 20,
                    color: props.theme.colors[props.iconColor],
                  },
                ),
            ),
        );
      };
      renderIndicator.displayName = 'renderIndicator';
      var SearchBar = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(
        function(props, ref) {
          var theme = Object(
            _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__.b,
          )();
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Input_Input__WEBPACK_IMPORTED_MODULE_4__.a,
            _extends(
              {
                leftIcon:
                  props.leftIcon ||
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3___default.a,
                    {
                      name: 'search',
                      size: 20,
                      color: theme.colors[props.iconColor],
                    },
                  ),
              },
              props,
              {
                ref: ref,
                rightIcon: renderIndicator(
                  Object.assign({}, props, {theme: theme}),
                ),
              },
            ),
          );
        },
      );
      (SearchBar.propTypes = {
        indicatorColor:
          prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        loading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
        iconColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
        onCancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
        rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.element,
      }),
        (SearchBar.defaultProps = {
          iconColor: 'subtle',
          value: '',
          placeholder: 'Search here',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        rightIcons: {flexDirection: 'row'},
        indicator: {paddingHorizontal: 10},
      });
      (SearchBar.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SearchBar',
        props: {
          iconColor: {
            defaultValue: {value: "'subtle'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          value: {defaultValue: {value: "''", computed: !1}, required: !1},
          placeholder: {
            defaultValue: {value: "'Search here'", computed: !1},
            required: !1,
          },
          indicatorColor: {
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          loading: {type: {name: 'bool'}, required: !1, description: ''},
          onCancel: {type: {name: 'func'}, required: !1, description: ''},
          rightIcon: {type: {name: 'element'}, required: !1, description: ''},
        },
      }),
        (__webpack_exports__.a = SearchBar),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/SearchBar/SearchBar.js'] = {
            name: 'SearchBar',
            docgenInfo: SearchBar.__docgenInfo,
            path: 'src/SearchBar/SearchBar.js',
          });
    },
    34: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var row = _ref.row,
            horizontal = _ref.horizontal,
            align = _ref.align,
            vertical = _ref.vertical,
            theme = _ref.theme,
            space = _ref.space,
            shadow = _ref.shadow,
            outline = _ref.outline,
            wrap = _ref.wrap,
            background = _ref.background,
            cardStyle = [
              styles.container,
              {
                padding: theme.space[space],
                backgroundColor: theme.colors[background],
              },
            ];
          return (
            shadow && cardStyle.push(styles.shadow),
            row &&
              cardStyle.push({
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }),
            wrap && cardStyle.push({flexWrap: 'wrap'}),
            outline &&
              cardStyle.push({
                elevation: 0,
                borderWidth:
                  react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet
                    .hairlineWidth,
                borderColor: '#333',
              }),
            align === 'center' && cardStyle.push({alignItems: 'center'}),
            align === 'left' && cardStyle.push({alignItems: 'flex-start'}),
            align === 'right' && cardStyle.push({alignItems: 'flex-end'}),
            horizontal && cardStyle.push({paddingVertical: 0}),
            vertical && cardStyle.push({paddingHorizontal: 0}),
            cardStyle
          );
        },
        Card = function Card(props) {
          var theme = Object(
            _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.b,
          )();
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.View,
            _extends({}, props, {
              style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                [
                  getContainerStyle(Object.assign({}, props, {theme: theme})),
                  props.style,
                ],
              ),
            }),
            props.children,
          );
        };
      (Card.displayName = 'Card'),
        (Card.propTypes = {
          row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          wrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
          ]),
          space: _util_prop_types__WEBPACK_IMPORTED_MODULE_5__.c,
          children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
            ],
          ).isRequired,
          horizontal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          vertical: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          align: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'center',
            'left',
            'right',
          ]),
          shadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          outline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        }),
        (Card.defaultProps = {
          space: 'medium',
          shadow: !1,
          outline: !1,
          background: 'backgroundLight',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        container: {
          width: '100%',
          alignItems: 'stretch',
          justifyContent: 'center',
          borderRadius: 5,
        },
        shadow: Object.assign(
          {},
          react_native__WEBPACK_IMPORTED_MODULE_2__.Platform.select({
            android: {elevation: 1},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
            },
          }),
        ),
      });
      (Card.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card',
        props: {
          space: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'spaces'},
            required: !1,
            description: '',
          },
          shadow: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          outline: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          background: {
            defaultValue: {value: "'backgroundLight'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          row: {type: {name: 'bool'}, required: !1, description: ''},
          wrap: {type: {name: 'bool'}, required: !1, description: ''},
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          children: {
            type: {name: 'union', value: [{name: 'array'}, {name: 'element'}]},
            required: !0,
            description: '',
          },
          horizontal: {type: {name: 'bool'}, required: !1, description: ''},
          vertical: {type: {name: 'bool'}, required: !1, description: ''},
          align: {
            type: {
              name: 'enum',
              value: [
                {value: "'center'", computed: !1},
                {value: "'left'", computed: !1},
                {value: "'right'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
        },
      }),
        (__webpack_exports__.a = Card),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Card/Card.js'] = {
            name: 'Card',
            docgenInfo: Card.__docgenInfo,
            path: 'src/Card/Card.js',
          });
    },
    35: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          192,
        ),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getTextStyle = function getTextStyle(_ref) {
          var theme = _ref.theme,
            size = _ref.size,
            textColor = _ref.textColor,
            iconRight = _ref.iconRight,
            textStyle = [
              {
                fontSize: theme.fontSize[size],
                color: theme.colors[textColor],
                marginLeft: 5,
              },
            ];
          return (
            iconRight && textStyle.push({marginLeft: 0, marginRight: 5}),
            textStyle
          );
        },
        renderIcon = function renderIcon(_ref2) {
          _ref2.style;
          var theme = _ref2.theme,
            size = _ref2.size,
            color = _ref2.color,
            props = _objectWithoutProperties(_ref2, [
              'style',
              'theme',
              'size',
              'color',
            ]);
          return props.checked
            ? props.checkedIcon ||
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7___default.a,
                  {
                    name: 'check-box',
                    size: 1.5 * theme.fontSize[size],
                    color: theme.colors[color],
                  },
                )
            : props.uncheckedIcon ||
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7___default.a,
                  {
                    name: 'check-box-outline-blank',
                    size: 1.5 * theme.fontSize[size],
                    color: theme.colors[color],
                  },
                );
        },
        CheckBox = function CheckBox(_ref3) {
          var style = _ref3.style,
            textStyle = _ref3.textStyle,
            props = _objectWithoutProperties(_ref3, ['style', 'textStyle']),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__.b,
            )(),
            propsWithTheme = Object.assign({}, props, {theme: theme}),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            TouchableElement,
            _extends({}, props, {
              disabled: props.disabled,
              onPress: props.onPress,
            }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_5__.View,
              {
                style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                  [styles.container, style],
                ),
              },
              !props.iconRight && renderIcon(propsWithTheme),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                    [getTextStyle(propsWithTheme), textStyle],
                  ),
                },
                props.children,
              ),
              props.iconRight && renderIcon(propsWithTheme),
            ),
          );
        };
      (CheckBox.displayName = 'CheckBox'),
        (CheckBox.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            ],
          ),
          children:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
          checked: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          iconRight: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          textColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          size: _util_prop_types__WEBPACK_IMPORTED_MODULE_9__.b,
          onPress:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
          checkedIcon:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          uncheckedIcon:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
        }),
        (CheckBox.defaultProps = {
          size: 'medium',
          color: 'primary',
          textColor: 'body',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: {flexDirection: 'row', alignItems: 'center'},
      });
      (CheckBox.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'CheckBox',
        props: {
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          color: {
            defaultValue: {value: "'primary'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          textColor: {
            defaultValue: {value: "'body'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          children: {type: {name: 'string'}, required: !0, description: ''},
          checked: {type: {name: 'bool'}, required: !1, description: ''},
          iconRight: {type: {name: 'bool'}, required: !1, description: ''},
          onPress: {type: {name: 'func'}, required: !0, description: ''},
          checkedIcon: {type: {name: 'element'}, required: !1, description: ''},
          uncheckedIcon: {
            type: {name: 'element'},
            required: !1,
            description: '',
          },
        },
      }),
        (__webpack_exports__.a = CheckBox),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/CheckBox/CheckBox.js'] = {
            name: 'CheckBox',
            docgenInfo: CheckBox.__docgenInfo,
            path: 'src/CheckBox/CheckBox.js',
          });
    },
    36: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            source = _ref.source,
            square = _ref.square,
            rounded = _ref.rounded,
            size = _ref.size,
            avatarStyle = [styles.container];
          return (
            avatarStyle.push({
              backgroundColor: theme.colors.backgroundLight,
              padding: theme.size[size],
              width: theme.avatarSize[size],
              height: theme.avatarSize[size],
              borderRadius: 2 * theme.avatarSize[size],
            }),
            source && avatarStyle.push({padding: 0}),
            square && avatarStyle.push({borderRadius: 0}),
            rounded && avatarStyle.push({borderRadius: 10}),
            avatarStyle
          );
        },
        getEditIconStyle = function getEditIconStyle(_ref2) {
          var theme = _ref2.theme,
            size = _ref2.size;
          return [
            styles.editView,
            {
              width: theme.avatarSize[size] / 4,
              height: theme.avatarSize[size] / 4,
              borderRadius: theme.avatarSize[size] / 8,
              backgroundColor: theme.colors.backgroundDark,
            },
          ];
        },
        getTitleStyle = function getTitleStyle(_ref3) {
          var theme = _ref3.theme,
            size = _ref3.size;
          return {
            fontWeight: '600',
            fontSize: theme.avatarSize[size] / 4,
            color: theme.colors.para,
          };
        },
        Avatar = function Avatar(_ref4) {
          var style = _ref4.style,
            props = _objectWithoutProperties(_ref4, ['style']),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__.b,
            )(),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_5__.View,
            {
              style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                [styles.propView, {width: theme.avatarSize[props.size]}],
              ),
            },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              TouchableElement,
              _extends({disabled: !props.editable}, props),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                    [
                      getContainerStyle(
                        Object.assign({}, props, {theme: theme}),
                      ),
                      style,
                    ],
                  ),
                },
                props.source
                  ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_5__.Image,
                      {
                        source: props.source,
                        resizeMode: 'cover',
                        style: styles.image,
                      },
                    )
                  : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                      {
                        numberOfLines: 1,
                        style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                          [
                            getTitleStyle(
                              Object.assign({}, props, {theme: theme}),
                            ),
                            props.textStyle,
                          ],
                        ),
                      },
                      props.title,
                    ),
              ),
            ),
            props.editable &&
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                    [
                      getEditIconStyle(
                        Object.assign({}, props, {theme: theme}),
                      ),
                      props.editIconStyle,
                    ],
                  ),
                },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7___default.a,
                  {
                    name: 'edit-2',
                    size: theme.avatarSize[props.size] / 8,
                    color: props.editIconColor || theme.colors.para,
                  },
                ),
              ),
          );
        };
      (Avatar.displayName = 'Avatar'),
        (Avatar.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            ],
          ),
          title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          source: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          editable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          onPress: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            _util_prop_types__WEBPACK_IMPORTED_MODULE_9__.b,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          ]),
          square: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          rounded: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          editIconStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          editIconColor:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
        }),
        (Avatar.defaultProps = {title: 'MD', editable: !1, size: 'medium'});
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: {
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 1,
        },
        propView: {backgroundColor: 'transparent'},
        image: {width: '100%', height: '100%'},
        editView: {
          position: 'absolute',
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 1,
        },
      });
      (Avatar.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Avatar',
        props: {
          title: {
            defaultValue: {value: "'MD'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          editable: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: '',
          },
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {
              name: 'union',
              value: [{name: 'custom', raw: 'sizes'}, {name: 'string'}],
            },
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          source: {type: {name: 'object'}, required: !1, description: ''},
          onPress: {type: {name: 'func'}, required: !1, description: ''},
          square: {type: {name: 'bool'}, required: !1, description: ''},
          rounded: {type: {name: 'bool'}, required: !1, description: ''},
          editIconStyle: {
            type: {name: 'object'},
            required: !1,
            description: '',
          },
          editIconColor: {
            type: {name: 'string'},
            required: !1,
            description: '',
          },
        },
      }),
        (__webpack_exports__.a = Avatar),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Avatar/Avatar.js'] = {
            name: 'Avatar',
            docgenInfo: Avatar.__docgenInfo,
            path: 'src/Avatar/Avatar.js',
          });
    },
    38: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          192,
        ),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          13,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            size = _ref.size,
            count = _ref.count,
            disabled = _ref.disabled,
            isDarkMode = _ref.isDarkMode,
            buttonStyle = [styles.container];
          return (
            buttonStyle.push({
              backgroundColor: theme.colors.backgroundLight,
              width: theme.buttonWidth[size],
              height: theme.buttonWidth[size] / 3,
              flexDirection: 'row',
              justifyContent: 'center',
            }),
            count < 1 &&
              buttonStyle.push({
                backgroundColor: isDarkMode
                  ? _util_colors__WEBPACK_IMPORTED_MODULE_8__.a['bluegray-500']
                  : _util_colors__WEBPACK_IMPORTED_MODULE_8__.a['bluegray-200'],
                elevation: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }),
            disabled &&
              buttonStyle.push({
                backgroundColor: theme.colors.disabled,
                elevation: 0,
                justifyContent: 'center',
                alignItems: 'center',
              }),
            buttonStyle
          );
        },
        getTextStyle = function getTextStyle(_ref2) {
          var theme = _ref2.theme,
            size = _ref2.size,
            disabled = _ref2.disabled,
            textStyle = [
              {fontSize: theme.fontSize[size], color: theme.colors.para},
            ];
          return (
            disabled && textStyle.push({color: theme.colors.disabledText}),
            textStyle
          );
        },
        MenuAddButton = function MenuAddButton(_ref3) {
          var style = _ref3.style,
            textStyle = _ref3.textStyle,
            props = _objectWithoutProperties(_ref3, ['style', 'textStyle']),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__.b,
            )(),
            isDarkMode = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__.c,
            )().isDarkMode,
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return props.count < 1 || props.disabled
            ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                TouchableElement,
                _extends({}, props, {
                  disabled: props.disabled,
                  onPress: props.onIncrement,
                }),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                  {
                    style: [
                      getContainerStyle(
                        Object.assign({}, props, {
                          theme: theme,
                          isDarkMode: isDarkMode,
                        }),
                      ),
                      style,
                    ],
                  },
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                    {
                      style: [
                        getTextStyle(
                          Object.assign({}, props, {
                            theme: theme,
                            isDarkMode: isDarkMode,
                          }),
                        ),
                        textStyle,
                      ],
                    },
                    'ADD',
                  ),
                ),
              )
            : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                {
                  style: [
                    getContainerStyle(Object.assign({}, props, {theme: theme})),
                    style,
                  ],
                },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  TouchableElement,
                  _extends({}, props, {onPress: props.onDecrement}),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                    {style: styles.icon},
                    props.minusIcon ||
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6___default.a,
                        {
                          name: 'remove',
                          color: props.iconColor || theme.colors.para,
                          size: theme.iconSize[props.size],
                        },
                      ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                  {
                    style: [
                      styles.countView,
                      {
                        backgroundColor:
                          (textStyle && textStyle.backgroundColor) ||
                          (isDarkMode
                            ? _util_colors__WEBPACK_IMPORTED_MODULE_8__.a[
                                'bluegray-500'
                              ]
                            : _util_colors__WEBPACK_IMPORTED_MODULE_8__.a[
                                'bluegray-200'
                              ]),
                      },
                    ],
                  },
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                    {
                      style: [
                        getTextStyle(Object.assign({}, props, {theme: theme})),
                        textStyle,
                      ],
                    },
                    props.count,
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  TouchableElement,
                  _extends({}, props, {onPress: props.onIncrement}),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                    {style: styles.icon},
                    props.plusIcon ||
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6___default.a,
                        {
                          name: 'add',
                          color: props.iconColor || theme.colors.para,
                          size: theme.iconSize[props.size],
                        },
                      ),
                  ),
                ),
              );
        };
      (MenuAddButton.displayName = 'MenuAddButton'),
        (MenuAddButton.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array,
            ],
          ),
          count:
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired,
          onIncrement:
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
          onDecrement:
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
          plusIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element,
          minusIcon: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.element,
          iconColor: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
          size: _util_prop_types__WEBPACK_IMPORTED_MODULE_10__.b,
        }),
        (MenuAddButton.defaultProps = {count: 0, size: 'medium'});
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: {
          flexDirection: 'row',
          backgroundColor: '#f8f8f8',
          borderRadius: 2,
          elevation: 2,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 1,
        },
        icon: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 5,
        },
        countView: {
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:
            _util_colors__WEBPACK_IMPORTED_MODULE_8__.a['bluegray-200'],
        },
      });
      (MenuAddButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MenuAddButton',
        props: {
          count: {
            defaultValue: {value: '0', computed: !1},
            type: {name: 'number'},
            required: !1,
            description: '',
          },
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          onIncrement: {type: {name: 'func'}, required: !0, description: ''},
          onDecrement: {type: {name: 'func'}, required: !0, description: ''},
          plusIcon: {type: {name: 'element'}, required: !1, description: ''},
          minusIcon: {type: {name: 'element'}, required: !1, description: ''},
          iconColor: {type: {name: 'string'}, required: !1, description: ''},
          disabled: {type: {name: 'bool'}, required: !1, description: ''},
        },
      }),
        (__webpack_exports__.a = MenuAddButton),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Button/MenuAddButton.js'] = {
            name: 'MenuAddButton',
            docgenInfo: MenuAddButton.__docgenInfo,
            path: 'src/Button/MenuAddButton.js',
          });
    },
    41: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      var Inline = function Inline(props) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          _Stack__WEBPACK_IMPORTED_MODULE_2__.a,
          _extends({}, props, {direction: 'horizontal'}),
        );
      };
      (Inline.displayName = 'Inline'),
        (Inline.propTypes = Object.assign(
          {},
          _Stack__WEBPACK_IMPORTED_MODULE_2__.a.propTypes,
        )),
        (Inline.defaultProps = Object.assign(
          {},
          _Stack__WEBPACK_IMPORTED_MODULE_2__.a.defaultProps,
        )),
        (Inline.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Inline',
          composes: ['./Stack'],
        }),
        (__webpack_exports__.a = Inline),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Layout/Inline.js'] = {
            name: 'Inline',
            docgenInfo: Inline.__docgenInfo,
            path: 'src/Layout/Inline.js',
          });
    },
    43: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          42,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            size = _ref.size,
            color = _ref.color;
          return Object.assign({}, styles.container, {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors[color],
            width: theme.actionButtonSize[size],
            height: theme.actionButtonSize[size],
            borderRadius: theme.actionButtonSize[size] / 2,
          });
        },
        ActionButton = function ActionButton(_ref2) {
          var style = _ref2.style,
            props = _objectWithoutProperties(_ref2, ['style']),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__.b,
            )(),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            TouchableElement,
            _extends({}, props, {onPress: props.onPress}),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_5__.View,
              {
                style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                  [
                    getContainerStyle(Object.assign({}, props, {theme: theme})),
                    style,
                  ],
                ),
              },
              props.icon ||
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7___default.a,
                  {
                    name: 'plus',
                    size: theme.iconSize[props.size],
                    color: props.iconColor || theme.colors.white,
                  },
                ),
            ),
          );
        };
      (ActionButton.displayName = 'ActionButton'),
        (ActionButton.propTypes = {
          size: _util_prop_types__WEBPACK_IMPORTED_MODULE_9__.b,
          onPress:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
          iconColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
          ]),
        }),
        (ActionButton.defaultProps = {size: 'medium', color: 'primary'});
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: Object.assign(
          {},
          react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.select({
            android: {elevation: 3},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
            },
          }),
        ),
      });
      (ActionButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'ActionButton',
        props: {
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          color: {
            defaultValue: {value: "'primary'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          onPress: {type: {name: 'func'}, required: !0, description: ''},
          iconColor: {type: {name: 'string'}, required: !1, description: ''},
          icon: {type: {name: 'element'}, required: !1, description: ''},
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
        },
      }),
        (__webpack_exports__.a = ActionButton),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/ActionButton/ActionButton.js'] = {
            name: 'ActionButton',
            docgenInfo: ActionButton.__docgenInfo,
            path: 'src/ActionButton/ActionButton.js',
          });
    },
    47: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5),
        _util_accessibility__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          69,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          24,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            color = _ref.color,
            headerStyle = [styles.container];
          return (
            headerStyle.push({backgroundColor: theme.colors[color]}),
            headerStyle
          );
        },
        getTextStyle = function getTextStyle(_ref2) {
          var theme = _ref2.theme,
            color = _ref2.color,
            textAlign = _ref2.textAlign,
            fontSize = _ref2.fontSize,
            textStyle = [styles.text];
          return (
            textStyle.push({
              backgroundColor: theme.colors[color],
              fontSize: theme.fontSize[fontSize],
            }),
            textAlign && textStyle.push({textAlign: textAlign}),
            textStyle
          );
        },
        Header = function Header(_ref3) {
          var style = _ref3.style,
            textStyle = _ref3.textStyle,
            props = _objectWithoutProperties(_ref3, ['style', 'textStyle']),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__.b,
            )(),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_6__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_6__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_6__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_6__.SafeAreaView,
            _extends(
              {},
              Object(_util_accessibility__WEBPACK_IMPORTED_MODULE_7__.a)(props),
              {
                style: [
                  styles.safeAreaView,
                  {backgroundColor: theme.colors[props.barColor]},
                ],
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_6__.StatusBar,
              {
                barStyle: props.barStyle,
                backgroundColor: theme.colors[props.barColor],
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_6__.View,
              {
                style: react_native__WEBPACK_IMPORTED_MODULE_6__.StyleSheet.flatten(
                  [
                    getContainerStyle(Object.assign({}, props, {theme: theme})),
                    style,
                  ],
                ),
              },
              props.leftIcon &&
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  TouchableElement,
                  _extends({}, props, {onPress: props.onLeftIconPress}),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_6__.View,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_6__.StyleSheet.flatten(
                        [styles.iconStyle, props.iconStyle],
                      ),
                    },
                    props.leftIcon,
                  ),
                ),
              !!props.children &&
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_6__.Text,
                  {
                    style: react_native__WEBPACK_IMPORTED_MODULE_6__.StyleSheet.flatten(
                      [
                        getTextStyle(Object.assign({}, props, {theme: theme})),
                        textStyle,
                      ],
                    ),
                  },
                  props.children,
                ),
              props.rightIcon &&
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  TouchableElement,
                  _extends({}, props, {onPress: props.onRightIconPress}),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_6__.View,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_6__.StyleSheet.flatten(
                        [styles.iconStyle, props.iconStyle],
                      ),
                    },
                    props.rightIcon,
                  ),
                ),
            ),
          );
        };
      (Header.displayName = 'Header'),
        (Header.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
            ],
          ),
          textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([
            'auto',
            'left',
            'center',
            'right',
            'justify',
          ]),
          fontSize: _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.b,
          children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
          color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
          leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,
          onLeftIconPress:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
          rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,
          onRightIconPress:
            prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
          iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          barColor: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
          barStyle: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([
            'default',
            'dark-content',
            'light-content',
          ]),
        }),
        (Header.defaultProps = {
          color: 'primary',
          barColor: 'primary',
          barStyle: 'light-content',
          fontSize: 'medium',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_6__.StyleSheet.create({
        safeAreaView: Object.assign(
          {},
          react_native__WEBPACK_IMPORTED_MODULE_6__.Platform.select({
            android: {elevation: 3},
            ios: {
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.25,
              shadowRadius: 3,
            },
            web: {
              boxShadow:
                '0 5px 5px rgba(0,0,0,0.10), 1px 5px 5px rgba(0,0,0,0.10)',
            },
          }),
          {zIndex: 10},
        ),
        container: {
          width: '100%',
          height: react_native__WEBPACK_IMPORTED_MODULE_6__.Platform.select({
            android: 56,
            ios: 56,
            web: 64,
          }),
          flexDirection: 'row',
          alignItems: 'center',
          zIndex: 10,
        },
        text: {
          flex: 1,
          fontWeight: react_native__WEBPACK_IMPORTED_MODULE_6__.Platform.select(
            {android: 'bold', ios: '500'},
          ),
          textAlign: react_native__WEBPACK_IMPORTED_MODULE_6__.Platform.select({
            android: 'left',
            ios: 'center',
            web: 'center',
          }),
          color: '#fff',
          paddingHorizontal: 10,
        },
        iconStyle: {padding: 10},
      });
      (Header.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Header',
        props: {
          color: {
            defaultValue: {value: "'primary'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          barColor: {
            defaultValue: {value: "'primary'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          barStyle: {
            defaultValue: {value: "'light-content'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'default'", computed: !1},
                {value: "'dark-content'", computed: !1},
                {value: "'light-content'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          fontSize: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: '',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: '',
          },
          textAlign: {
            type: {
              name: 'enum',
              value: [
                {value: "'auto'", computed: !1},
                {value: "'left'", computed: !1},
                {value: "'center'", computed: !1},
                {value: "'right'", computed: !1},
                {value: "'justify'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          children: {type: {name: 'string'}, required: !1, description: ''},
          leftIcon: {type: {name: 'element'}, required: !1, description: ''},
          onLeftIconPress: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          rightIcon: {type: {name: 'element'}, required: !1, description: ''},
          onRightIconPress: {
            type: {name: 'func'},
            required: !1,
            description: '',
          },
          iconStyle: {type: {name: 'object'}, required: !1, description: ''},
        },
      }),
        (__webpack_exports__.a = Header),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Header/Header.js'] = {
            name: 'Header',
            docgenInfo: Header.__docgenInfo,
            path: 'src/Header/Header.js',
          });
    },
    48: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getTextStyle = function getTextStyle(_ref) {
          var theme = _ref.theme,
            color = _ref.color,
            size = _ref.size,
            fontWeight = _ref.fontWeight,
            fontFamily = _ref.fontFamily,
            textAlign = _ref.textAlign,
            style = {
              color: theme.colors[color],
              fontSize: theme.fontSize[size],
              lineHeight: theme.lineHeight[size],
              includeFontPadding: !1,
              textAlignVertical: 'center',
              fontWeight: fontWeight,
              textAlign: textAlign,
            };
          return fontFamily && (style.fontFamily = fontFamily), style;
        },
        TextElement = function TextElement(_ref2) {
          var style = _ref2.style,
            props = _objectWithoutProperties(_ref2, ['style']),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.b,
            )();
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
            _extends({}, props, {
              style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                [getTextStyle(Object.assign({}, props, {theme: theme})), style],
              ),
            }),
            props.children,
          );
        };
      (TextElement.displayName = 'TextElement'),
        (TextElement.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            ],
          ).isRequired,
          size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.b,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          ]),
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          textAlign: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'left',
            'center',
            'right',
          ]),
        }),
        (TextElement.defaultProps = {
          color: 'body',
          size: 'medium',
          fontWeight: '500',
          textAlign: 'left',
        }),
        (TextElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TextElement',
          props: {
            color: {
              defaultValue: {value: "'body'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            size: {
              defaultValue: {value: "'md'", computed: !1},
              type: {
                name: 'union',
                value: [{name: 'custom', raw: 'sizes'}, {name: 'string'}],
              },
              required: !1,
              description: '',
            },
            fontWeight: {
              defaultValue: {value: "'500'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            textAlign: {
              defaultValue: {value: "'left'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'left'", computed: !1},
                  {value: "'center'", computed: !1},
                  {value: "'right'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            style: {
              type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
              required: !1,
              description: '',
            },
            children: {
              type: {
                name: 'union',
                value: [{name: 'string'}, {name: 'number'}, {name: 'array'}],
              },
              required: !0,
              description: '',
            },
            fontFamily: {type: {name: 'string'}, required: !1, description: ''},
          },
        }),
        (__webpack_exports__.a = TextElement),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Text/Text.js'] = {
            name: 'TextElement',
            docgenInfo: TextElement.__docgenInfo,
            path: 'src/Text/Text.js',
          });
    },
    616: function(module, exports, __webpack_require__) {
      __webpack_require__(617),
        __webpack_require__(769),
        __webpack_require__(770),
        __webpack_require__(1198),
        __webpack_require__(1196),
        __webpack_require__(1199),
        __webpack_require__(1197),
        (module.exports = __webpack_require__(1165));
    },
    684: function(module, exports) {},
    69: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return extractAccessibilityPropsFromProps;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return removeAccessibilityPropsFromProps;
        });
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var extractAccessibilityPropsFromProps = function extractAccessibilityPropsFromProps(
          props,
        ) {
          return props
            ? {
                accessible: props.accessible,
                accessibilityLabel: props.accessibilityLabel,
                accessibilityRole: props.accessibilityRole,
                accessibilityStates: props.accessibilityStates,
                accessibilityHint: props.accessibilityHint,
                accessibilityComponentType: props.accessibilityComponentType,
                accessibilityLiveRegion: props.importantForAccessibility,
                importantForAccessibility: props.accessibilityLiveRegion,
                accessibilityElementsHidden: props.accessibilityElementsHidden,
                accessibilityTraits: props.accessibilityTraits,
                onAccessibilityTap: props.onAccessibilityTap,
                onMagicTap: props.onMagicTap,
                accessibilityIgnoresInvertColors:
                  props.accessibilityIgnoresInvertColors,
              }
            : {};
        },
        removeAccessibilityPropsFromProps = function removeAccessibilityPropsFromProps(
          props,
        ) {
          if (!props) {
            return {};
          }
          props.accessible,
            props.accessibilityLabel,
            props.accessibilityRole,
            props.accessibilityStates,
            props.accessibilityHint,
            props.accessibilityComponentType,
            props.importantForAccessibility,
            props.accessibilityLiveRegion,
            props.accessibilityTraits,
            props.onAccessibilityTap,
            props.onMagicTap,
            props.accessibilityIgnoresInvertColors;
          var otherProps = _objectWithoutProperties(props, [
            'accessible',
            'accessibilityLabel',
            'accessibilityRole',
            'accessibilityStates',
            'accessibilityHint',
            'accessibilityComponentType',
            'importantForAccessibility',
            'accessibilityLiveRegion',
            'accessibilityTraits',
            'onAccessibilityTap',
            'onMagicTap',
            'accessibilityIgnoresInvertColors',
          ]);
          return Object.assign({}, otherProps);
        };
    },
    770: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(439);
    },
    797: function(module, exports) {},
    89: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(103),
        __webpack_require__(26),
        __webpack_require__(130),
        __webpack_require__(31),
        __webpack_require__(46),
        __webpack_require__(30),
        __webpack_require__(76),
        __webpack_require__(51),
        __webpack_require__(52),
        __webpack_require__(55),
        __webpack_require__(60),
        __webpack_require__(20),
        __webpack_require__(86);
      function _typeof(obj) {
        return (_typeof =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function _typeof(obj) {
                return typeof obj;
              }
            : function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              arr &&
              ((typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
                arr['@@iterator']);
            if (_i == null) {
              return;
            }
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              ) {}
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || _i.return == null || _i.return();
              } finally {
                if (_d) {
                  throw _e;
                }
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) {
              return;
            }
            if (typeof o === 'string') {
              return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            n === 'Object' && o.constructor && (n = o.constructor.name);
            if (n === 'Map' || n === 'Set') {
              return Array.from(o);
            }
            if (
              n === 'Arguments' ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ) {
              return _arrayLikeToArray(o, minLen);
            }
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (len == null || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      var colors = {
          slate: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          zinc: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
          },
          neutral: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          stone: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
          },
          red: {
            50: '#fef2f2',
            100: '#fee2e2',
            200: '#fecaca',
            300: '#fca5a5',
            400: '#f87171',
            500: '#ef4444',
            600: '#dc2626',
            700: '#b91c1c',
            800: '#991b1b',
            900: '#7f1d1d',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          },
          yellow: {
            50: '#fefce8',
            100: '#fef9c3',
            200: '#fef08a',
            300: '#fde047',
            400: '#facc15',
            500: '#eab308',
            600: '#ca8a04',
            700: '#a16207',
            800: '#854d0e',
            900: '#713f12',
          },
          lime: {
            50: '#f7fee7',
            100: '#ecfccb',
            200: '#d9f99d',
            300: '#bef264',
            400: '#a3e635',
            500: '#84cc16',
            600: '#65a30d',
            700: '#4d7c0f',
            800: '#3f6212',
            900: '#365314',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
          },
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
          },
          cyan: {
            50: '#ecfeff',
            100: '#cffafe',
            200: '#a5f3fc',
            300: '#67e8f9',
            400: '#22d3ee',
            500: '#06b6d4',
            600: '#0891b2',
            700: '#0e7490',
            800: '#155e75',
            900: '#164e63',
          },
          sky: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          indigo: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
          },
          violet: {
            50: '#f5f3ff',
            100: '#ede9fe',
            200: '#ddd6fe',
            300: '#c4b5fd',
            400: '#a78bfa',
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            800: '#5b21b6',
            900: '#4c1d95',
          },
          purple: {
            50: '#faf5ff',
            100: '#f3e8ff',
            200: '#e9d5ff',
            300: '#d8b4fe',
            400: '#c084fc',
            500: '#a855f7',
            600: '#9333ea',
            700: '#7e22ce',
            800: '#6b21a8',
            900: '#581c87',
          },
          fuchsia: {
            50: '#fdf4ff',
            100: '#fae8ff',
            200: '#f5d0fe',
            300: '#f0abfc',
            400: '#e879f9',
            500: '#d946ef',
            600: '#c026d3',
            700: '#a21caf',
            800: '#86198f',
            900: '#701a75',
          },
          pink: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
            600: '#db2777',
            700: '#be185d',
            800: '#9d174d',
            900: '#831843',
          },
          rose: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#f43f5e',
            600: '#e11d48',
            700: '#be123c',
            800: '#9f1239',
            900: '#881337',
          },
          get lightBlue() {
            return this.sky;
          },
          get warmGray() {
            return this.stone;
          },
          get trueGray() {
            return this.neutral;
          },
          get coolGray() {
            return this.gray;
          },
          get blueGray() {
            return this.slate;
          },
          black: '#000',
          white: '#fff',
          transparent: 'transparent',
          get background() {
            return {100: this.gray[100], 200: this.gray[50], 300: this.white};
          },
        },
        lightColors = {
          primary: colors.blue[600],
          secondary: colors.orange[400],
          success: colors.green[500],
          error: colors.red[500],
          warning: colors.yellow[500],
          disabled: colors.blueGray[100],
          disabledText: colors.blueGray[300],
          heading: colors.gray[900],
          para: colors.gray[700],
          subtle: colors.gray[500],
          transparent: 'transparent',
          semitransparent: 'rgba(0, 0, 0, 0.3)',
          outline: 'rgba(204, 214, 221, .5)',
        },
        darkColors = Object.assign({}, lightColors, {
          background: {
            100: colors.gray[700],
            200: colors.gray[800],
            300: colors.gray[900],
          },
          heading: colors.white,
          para: colors.gray[100],
          subtle: colors.gray[300],
          transparent: 'transparent',
          outline: colors.gray[800],
          semitransparent: 'rgba(0, 0, 0, 0.3)',
        });
      var flatColors = (function flattenColors() {
        for (
          var allColors = Object.assign({}, colors, lightColors),
            result = {},
            _i2 = 0,
            _Object$entries = Object.entries(allColors);
          _i2 < _Object$entries.length;
          _i2++
        ) {
          var _ref2 = _slicedToArray(_Object$entries[_i2], 2),
            color = _ref2[0],
            shades = _ref2[1];
          if (_typeof(shades) === 'object') {
            for (
              var _i3 = 0, _Object$entries2 = Object.entries(shades);
              _i3 < _Object$entries2.length;
              _i3++
            ) {
              var _ref4 = _slicedToArray(_Object$entries2[_i3], 2),
                shade = _ref4[0],
                hex = _ref4[1];
              result[''.concat(color, '-').concat(shade)] = hex;
            }
          } else {
            result[color] = shades;
          }
        }
        return result;
      })();
      (flatColors.dark = darkColors), (__webpack_exports__.a = flatColors);
    },
    9: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(14),
        __webpack_require__(21),
        __webpack_require__(32),
        __webpack_require__(31);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          24,
        ),
        _util_prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
              }
            }
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (source == null) {
          return {};
        }
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (source == null) {
              return {};
            }
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++) {
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            }
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++) {
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
          }
        }
        return target;
      }
      var getTextStyle = function getTextStyle(_ref) {
          var size = _ref.size,
            outline = _ref.outline,
            transparent = _ref.transparent,
            loading = _ref.loading,
            disabled = _ref.disabled,
            theme = _ref.theme,
            color = _ref.color,
            textStyle = [
              {
                fontSize: theme.fontSize[size],
                margin: theme.buttonSize[size],
                color: theme.colors.white,
              },
            ];
          return (
            (outline || transparent) &&
              textStyle.push({color: theme.colors[color]}),
            loading &&
              outline &&
              textStyle.push({color: theme.colors[color] + '50'}),
            disabled && textStyle.push({color: theme.colors.disabledText}),
            textStyle
          );
        },
        getContainerStyle = function getContainerStyle(props) {
          var outline = props.outline,
            width = props.width,
            round = props.round,
            transparent = props.transparent,
            disabled = props.disabled,
            loading = props.loading,
            size = props.size,
            length = props.length,
            theme = props.theme,
            color = props.color,
            tint = props.tint,
            borderColor = props.borderColor,
            buttonStyles = [styles.container];
          return (
            buttonStyles.push({
              backgroundColor: theme.colors[color],
              borderWidth: 1,
              borderColor: theme.colors[color],
            }),
            length === 'short' &&
              buttonStyles.push({width: theme.buttonWidth[width]}),
            borderColor &&
              buttonStyles.push({borderColor: theme.colors[borderColor]}),
            round &&
              buttonStyles.push({borderRadius: 2 * theme.buttonSize[size]}),
            outline &&
              buttonStyles.push({
                backgroundColor: theme.colors[color] + (tint ? '10' : '00'),
              }),
            loading &&
              buttonStyles.push({
                borderWidth: 0,
                backgroundColor: theme.colors[color] + '50',
              }),
            transparent &&
              buttonStyles.push({
                borderWidth: 0,
                backgroundColor: 'transparent',
              }),
            loading &&
              outline &&
              buttonStyles.push({
                backgroundColor: theme.colors[color] + '20',
                borderWidth:
                  react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet
                    .hairlineWidth,
                borderColor: theme.colors[borderColor || color] + '30',
              }),
            disabled &&
              buttonStyles.push({
                backgroundColor: theme.colors.disabled,
                borderColor: theme.colors.disabled,
              }),
            buttonStyles
          );
        },
        Button = function Button(_ref2) {
          var style = _ref2.style,
            props = _objectWithoutProperties(_ref2, ['style']),
            theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.b,
            )(),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_5__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            TouchableElement,
            _extends({}, props, {
              onPress: props.onPress,
              disabled: props.disabled || props.loading,
            }),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_5__.View,
              {
                style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                  [
                    getContainerStyle(Object.assign({}, props, {theme: theme})),
                    style,
                  ],
                ),
              },
              (function renderChildren(props) {
                return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
                  null,
                  props.loading &&
                    !props.disabled &&
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_5__.ActivityIndicator,
                      {
                        style: [styles.iconStyle, props.iconStyle],
                        color:
                          props.indicatorColor ||
                          props.theme.colors[props.color],
                      },
                    ),
                  props.leftIcon ||
                    (props.icon &&
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                        {
                          style: [
                            styles.iconStyle,
                            props.iconStyle,
                            props.leftIconStyle,
                          ],
                        },
                        props.leftIcon || props.icon,
                      )),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                        [getTextStyle(props), props.textStyle],
                      ),
                    },
                    props.children,
                  ),
                  props.rightIcon &&
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                      {
                        style: [
                          styles.iconStyle,
                          props.iconStyle,
                          props.rightIconStyle,
                        ],
                      },
                      props.rightIcon,
                    ),
                );
              })(Object.assign({}, props, {theme: theme})),
            ),
          );
        };
      (Button.displayName = 'Button'),
        (Button.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
          ]),
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            ],
          ),
          iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          leftIconStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          rightIconStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            ],
          ),
          indicatorColor:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          size: _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.b,
          width: _util_prop_types__WEBPACK_IMPORTED_MODULE_8__.b,
          onPress:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          borderColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          round: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          outline: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          transparent: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          loading: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          length: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'long',
            'short',
          ]),
          tint: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
        }),
        (Button.defaultProps = {
          children: 'Submit',
          size: 'medium',
          length: 'long',
          width: 'medium',
          color: 'primary',
          tint: !1,
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: {
          left: 0,
          right: 0,
          borderRadius: 2,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        iconStyle: {paddingHorizontal: 5},
      });
      (Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          children: {
            defaultValue: {value: "'Submit'", computed: !1},
            type: {name: 'union', value: [{name: 'string'}, {name: 'array'}]},
            required: !1,
            description: 'Pass button text as children as children',
          },
          size: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: 'To change button size',
          },
          length: {
            defaultValue: {value: "'long'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'long'", computed: !1},
                {value: "'short'", computed: !1},
              ],
            },
            required: !1,
            description: 'To make button short or long',
          },
          width: {
            defaultValue: {value: "'md'", computed: !1},
            type: {name: 'custom', raw: 'sizes'},
            required: !1,
            description: 'To change button width',
          },
          color: {
            defaultValue: {value: "'primary'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: 'Pass the brand color',
          },
          tint: {
            defaultValue: {value: 'false', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: 'To enable outline button tint',
          },
          style: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: 'To override default style',
          },
          textStyle: {
            type: {name: 'union', value: [{name: 'object'}, {name: 'array'}]},
            required: !1,
            description: 'To override default text style',
          },
          iconStyle: {
            type: {name: 'object'},
            required: !1,
            description: 'To override default icon style',
          },
          leftIconStyle: {
            type: {name: 'object'},
            required: !1,
            description: 'To override default left icon style',
          },
          rightIconStyle: {
            type: {name: 'object'},
            required: !1,
            description: 'To override default right icon style',
          },
          indicatorColor: {
            type: {name: 'string'},
            required: !1,
            description: 'Change indicator color',
          },
          onPress: {
            type: {name: 'func'},
            required: !0,
            description: 'callback function to be called when pressed',
          },
          borderColor: {
            type: {name: 'string'},
            required: !1,
            description: 'Pass the brand color',
          },
          round: {
            type: {name: 'bool'},
            required: !1,
            description: 'Boolean value for round button',
          },
          outline: {
            type: {name: 'bool'},
            required: !1,
            description: 'Boolean value for outline button',
          },
          transparent: {
            type: {name: 'bool'},
            required: !1,
            description: 'Boolean value for disabled button',
          },
          disabled: {
            type: {name: 'bool'},
            required: !1,
            description: 'Boolean value for transparent button',
          },
          loading: {
            type: {name: 'bool'},
            required: !1,
            description: 'Boolean value for loading button',
          },
          icon: {
            type: {name: 'element'},
            required: !1,
            description: 'To pass custom icon (default and same as leftIcon)',
          },
          leftIcon: {
            type: {name: 'element'},
            required: !1,
            description: 'To pass custom icon on left',
          },
          rightIcon: {
            type: {name: 'element'},
            required: !1,
            description: 'To pass custom icon on right',
          },
        },
      }),
        (__webpack_exports__.a = Button),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Button/Button.js'] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'src/Button/Button.js',
          });
    },
  },
  [[616, 2, 3]],
]);
