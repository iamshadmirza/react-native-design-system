(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    102: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          33,
        ),
        getContainerStyle = function getContainerStyle(_ref) {
          var theme = _ref.theme,
            space = _ref.space,
            background = _ref.background;
          return {
            padding: theme.layoutSpace[space],
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
            {
              style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                [
                  getContainerStyle(Object.assign({}, props, {theme: theme})),
                  props.style,
                ],
              ),
            },
            props.children,
          );
        };
      (Box.displayName = 'Box'),
        (Box.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'none',
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array,
              prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
            ],
          ).isRequired,
        }),
        (Box.defaultProps = {space: 'medium', background: 'clearWhite'}),
        (Box.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Box',
          props: {
            space: {
              defaultValue: {value: "'medium'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'none'", computed: !1},
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            background: {
              defaultValue: {value: "'clearWhite'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            style: {type: {name: 'object'}, required: !1, description: ''},
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
    11: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return RadioItem;
      });
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          103,
        ),
        react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_Ionicons__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          33,
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
            _extends({}, props, {
              onPress: function onPress() {
                return selectItem(id);
              },
            }),
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
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          children:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
          activeId: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
            ],
          ).isRequired,
          iconRight: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          textColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
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
          textColor: 'para',
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
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
            defaultValue: {value: "'default'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
          children: {type: {name: 'string'}, required: !0, description: ''},
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
    14: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          33,
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
            round = _ref.round,
            color = _ref.color,
            outline = _ref.outline,
            error = _ref.error,
            inputContainerStyle = [styles.container];
          return (
            inputContainerStyle.push({
              borderBottomColor: theme.colors[color],
            }),
            outline &&
              inputContainerStyle.push({
                borderWidth: 1,
                borderBottomWidth: 1,
                borderColor: theme.colors[color],
                backgroundColor: theme.colors.background,
                borderRadius: 5,
              }),
            round &&
              inputContainerStyle.push({
                borderBottomWidth: 0,
                borderRadius: 50,
                backgroundColor: theme.colors.background,
              }),
            outline &&
              round &&
              inputContainerStyle.push({
                borderWidth: 1,
                borderBottomWidth: 1,
                backgroundColor: theme.colors.background,
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
            inputStyle = [styles.input];
          return (
            inputStyle.push({
              fontSize: theme.fontSize[size],
              marginVertical: 0,
              color: theme.colors[textColor],
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
              fontSize: 0.8 * theme.fontSize[size],
              fontWeight: 'bold',
              paddingLeft: 2.5,
              paddingBottom: 5,
              color: theme.colors[labelColor],
            },
          ];
        },
        getCaptionStyle = function getCaptionStyle(_ref4) {
          var theme = _ref4.theme,
            size = _ref4.size;
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
                : props.label;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_2__.View,
              {style: props.containerStyle},
              showLabel
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
        style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        textStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        textColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        value:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
        onChangeText:
          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
        placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        floatingLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        labelStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
        labelColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        round: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        outline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        errorCaption: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
          'xxsmall',
          'xsmall',
          'small',
          'medium',
          'large',
          'xlarge',
          'xxlarge',
        ]),
        disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
        rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
        background: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
      }),
        (Input.defaultProps = {
          placeholder: 'Type here',
          textColor: 'para',
          color: 'outline',
          size: 'medium',
          labelColor: 'gray',
          background: 'gray',
          floatingLabel: !1,
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        container: {
          flexDirection: 'row',
          alignItems: 'center',
          borderBottomWidth: 0.5,
        },
        input: {
          flex: 1,
          padding: 5,
          paddingVertical: 10,
          paddingHorizontal: 15,
        },
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
            defaultValue: {value: "'default'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          color: {
            defaultValue: {value: "'outline'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          size: {
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          labelColor: {
            defaultValue: {value: "'gray'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          background: {
            defaultValue: {value: "'gray'", computed: !1},
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
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
          value: {type: {name: 'string'}, required: !0, description: ''},
          onChangeText: {type: {name: 'func'}, required: !0, description: ''},
          labelStyle: {type: {name: 'object'}, required: !1, description: ''},
          label: {type: {name: 'string'}, required: !1, description: ''},
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
    15: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          33,
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
            mini = _ref.mini,
            color = _ref.color,
            square = _ref.square,
            badgeStyle = [styles.container];
          return (
            color &&
              badgeStyle.push({
                backgroundColor: theme.colors[color],
              }),
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
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
            ],
          ),
          size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
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
            defaultValue: {value: "'small'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
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
    151: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(19),
        __webpack_require__(31),
        __webpack_require__(37),
        __webpack_require__(41),
        __webpack_require__(24),
        __webpack_require__(25),
        __webpack_require__(23),
        __webpack_require__(27),
        __webpack_require__(12),
        __webpack_require__(21),
        __webpack_require__(30),
        __webpack_require__(26),
        __webpack_require__(28);
      var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_14__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_16__,
        );
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) {
              return _arrayLikeToArray(arr);
            }
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              typeof Symbol !== 'undefined' &&
              Symbol.iterator in Object(iter)
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
      var CircularProgressBar = function CircularProgressBar(props) {
        var activeColor = props.activeColor,
          passiveColor = props.passiveColor,
          baseColor = props.baseColor,
          radius = props.radius,
          percent = props.percent,
          width = props.width,
          duration = props.duration,
          children = props.children,
          initialValueHalfCircle = percent >= 50 ? 0 : 180,
          firstCircleAnimatedValue = new react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.Value(
            initialValueHalfCircle,
          ),
          secondCircleAnimatedValue = new react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.Value(
            initialValueHalfCircle,
          ),
          thirdCircleAnimatedValue = new react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.Value(
            0,
          ),
          timePerDegree = duration / 360,
          firstCircleColor = activeColor,
          secondCircleColor = percent >= 50 ? activeColor : passiveColor;
        Object(react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function() {
          percent < 50
            ? (function firstAnimation() {
                react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.timing(
                  secondCircleAnimatedValue,
                  {
                    toValue: 180 + 3.6 * percent,
                    duration: 3.6 * percent * timePerDegree,
                    useNativeDriver: !0,
                    easing:
                      react_native__WEBPACK_IMPORTED_MODULE_15__.Easing.linear,
                  },
                ).start();
              })()
            : (function secondAnimation() {
                firstCircleAnimatedValue.setValue(initialValueHalfCircle),
                  secondCircleAnimatedValue.setValue(initialValueHalfCircle),
                  thirdCircleAnimatedValue.setValue(initialValueHalfCircle),
                  react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.parallel([
                    react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.timing(
                      firstCircleAnimatedValue,
                      {
                        toValue: 180,
                        duration: 180 * timePerDegree,
                        useNativeDriver: !0,
                        easing:
                          react_native__WEBPACK_IMPORTED_MODULE_15__.Easing
                            .linear,
                      },
                    ),
                    react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.timing(
                      secondCircleAnimatedValue,
                      {
                        toValue: 180 + 3.6 * (percent - 50),
                        duration: (180 + 3.6 * (percent - 50)) * timePerDegree,
                        useNativeDriver: !0,
                        easing:
                          react_native__WEBPACK_IMPORTED_MODULE_15__.Easing
                            .linear,
                      },
                    ),
                    react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.timing(
                      thirdCircleAnimatedValue,
                      {
                        toValue: 3.6 * (percent - 50),
                        delay: 180 * timePerDegree,
                        duration: timePerDegree * (3.6 * (percent - 50)),
                        useNativeDriver: !1,
                        easing:
                          react_native__WEBPACK_IMPORTED_MODULE_15__.Easing
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
            return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_15__.Animated.View,
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
        return react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(
          react_native__WEBPACK_IMPORTED_MODULE_15__.View,
          {style: styles.container, key: percent},
          react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_15__.View,
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
            react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_15__.View,
              {style: innerCircleStyle},
              children,
            ),
          ),
        );
      };
      (CircularProgressBar.displayName = 'CircularProgressBar'),
        (CircularProgressBar.propTypes = {
          activeColor:
            prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string
              .isRequired,
          passiveColor:
            prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string
              .isRequired,
          baseColor:
            prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string
              .isRequired,
          width:
            prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number
              .isRequired,
          radius:
            prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number
              .isRequired,
          percent:
            prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number
              .isRequired,
          duration:
            prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.number
              .isRequired,
          children: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.element,
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_15__.StyleSheet.create(
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
    152: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          33,
        ),
        FullScreenLoader = function FullScreenLoader(props) {
          var background = {
            backgroundColor: Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.b,
            )().brandColor[props.background],
          };
          return props.loading
            ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_1__.View,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.flatten(
                    [styles.container, background, props.style],
                  ),
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_1__.ActivityIndicator,
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
          prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
        style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
        children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element,
        indicatorColor:
          prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
        background: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
        size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([
          'small',
          'large',
        ]),
      }),
        (FullScreenLoader.defaultProps = {
          size: 'large',
          background: 'semitransparent',
          indicatorColor: '#1e88e5',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_1__.StyleSheet.create({
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
            defaultValue: {value: "'large'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'small'", computed: !1},
                {value: "'large'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          background: {
            defaultValue: {value: "'semitransparent'", computed: !1},
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
          style: {type: {name: 'object'}, required: !1, description: ''},
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
    153: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(19),
        __webpack_require__(31),
        __webpack_require__(37),
        __webpack_require__(41),
        __webpack_require__(24),
        __webpack_require__(25),
        __webpack_require__(35),
        __webpack_require__(1791),
        __webpack_require__(23),
        __webpack_require__(27),
        __webpack_require__(12),
        __webpack_require__(8),
        __webpack_require__(261),
        __webpack_require__(64),
        __webpack_require__(205),
        __webpack_require__(262),
        __webpack_require__(21),
        __webpack_require__(207),
        __webpack_require__(263),
        __webpack_require__(30),
        __webpack_require__(26),
        __webpack_require__(28),
        __webpack_require__(192);
      var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_24___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_24__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5),
        _FullScreenLoader__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
          293,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_27___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_27__,
        ),
        clamp__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(433),
        clamp__WEBPACK_IMPORTED_MODULE_28___default = __webpack_require__.n(
          clamp__WEBPACK_IMPORTED_MODULE_28__,
        );
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
              typeof Symbol !== 'undefined' &&
              Symbol.iterator in Object(iter)
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
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function() {}),
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
      var _Dimensions$get = react_native__WEBPACK_IMPORTED_MODULE_25__.Dimensions.get(
          'window',
        ),
        width = _Dimensions$get.width,
        height = _Dimensions$get.height,
        Deck = (function(_Component) {
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
                var vertical = _this.props.direction === 'vertical';
                _this._panResponder = react_native__WEBPACK_IMPORTED_MODULE_25__.PanResponder.create(
                  {
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
                      vertical
                        ? _this.state.animation.setValue({x: 0, y: gesture.dy})
                        : _this.state.animation.setValue({
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
                        dy = _ref.dy,
                        vx = _ref.vx,
                        vy = _ref.vy,
                        vxy = vertical ? vy : vx,
                        minClamp = vertical ? 8 : 4,
                        maxClamp = vertical ? 10 : 5;
                      vxy >= 0
                        ? (velocity = clamp__WEBPACK_IMPORTED_MODULE_28___default()(
                            vxy,
                            minClamp,
                            maxClamp,
                          ))
                        : vxy < 0 &&
                          (velocity =
                            -1 *
                            clamp__WEBPACK_IMPORTED_MODULE_28___default()(
                              Math.abs(vxy),
                              minClamp,
                              maxClamp,
                            )),
                        Math.abs(vertical ? dy : dx) > _this.SWIPE_THRESHOLD
                          ? (react_native__WEBPACK_IMPORTED_MODULE_25__.Animated.parallel(
                              [
                                react_native__WEBPACK_IMPORTED_MODULE_25__.Animated.decay(
                                  _this.state.animation,
                                  {
                                    velocity: {
                                      x: vertical ? 0 : velocity,
                                      y: vertical ? velocity : vy,
                                    },
                                    deceleration: 0.99,
                                    useNativeDriver: !0,
                                  },
                                ),
                                react_native__WEBPACK_IMPORTED_MODULE_25__.Animated.spring(
                                  _this.state.next,
                                  {
                                    toValue: 1,
                                    friction: 4,
                                    useNativeDriver: !0,
                                  },
                                ),
                              ],
                            ).start(_this.transitionNext),
                            velocity > 0
                              ? _this.handlePositiveDecay()
                              : _this.handleNegativeDecay())
                          : react_native__WEBPACK_IMPORTED_MODULE_25__.Animated.spring(
                              _this.state.animation,
                              {
                                toValue: {x: 0, y: 0},
                                friction: 4,
                                useNativeDriver: !0,
                              },
                            ).start();
                    },
                  },
                );
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
                  _this$props = _this.props,
                  direction = _this$props.direction,
                  fade = _this$props.fade,
                  vertical = direction === 'vertical',
                  rotate = vertical
                    ? '0deg'
                    : animation.x.interpolate({
                        inputRange: [-200, 0, 200],
                        outputRange: ['-30deg', '0deg', '30deg'],
                        extrapolate: 'clamp',
                      }),
                  opacity = fade
                    ? vertical
                      ? animation.y.interpolate({
                          inputRange: [-200, 0, 200],
                          outputRange: [0.5, 1, 0.5],
                        })
                      : animation.x.interpolate({
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
                return react_native__WEBPACK_IMPORTED_MODULE_25__.StyleSheet.flatten(
                  [styles.card, cardStyle, nextStyle, _this.props.style],
                );
              }),
              (_this.state = {
                data: props.data,
                swiped: [],
                animation: new react_native__WEBPACK_IMPORTED_MODULE_25__.Animated.ValueXY(),
                next: new react_native__WEBPACK_IMPORTED_MODULE_25__.Animated.Value(
                  0.9,
                ),
                endOfCards: !1,
                loading: !!props.loadInitialData,
              }),
              (_this.SWIPE_THRESHOLD =
                0.25 * (props.direction === 'vertical' ? height : width)),
              (_this.page = 0),
              _this.createPanResponder(),
              _this.checkMoreCards(),
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
                key: 'renderLoadingScreen',
                value: function renderLoadingScreen() {
                  return (
                    this.props.loadingScreen ||
                    react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(
                      _FullScreenLoader__WEBPACK_IMPORTED_MODULE_26__.a,
                      {loading: !0},
                    )
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
                  return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_25__.View,
                    {style: styles.container},
                    loading
                      ? this.renderLoadingScreen()
                      : endOfCards
                      ? react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(
                          react_native__WEBPACK_IMPORTED_MODULE_25__.Text,
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
                            return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(
                              react_native__WEBPACK_IMPORTED_MODULE_25__
                                .Animated.View,
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
            ]),
            Deck
          );
        })(react__WEBPACK_IMPORTED_MODULE_24__.Component);
      (Deck.propTypes = {
        style: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.object,
        data:
          prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.array.isRequired,
        renderItem:
          prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.func.isRequired,
        keyExtractor:
          prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.func.isRequired,
        loadMoreCards: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.func,
        onNegativeSwipe:
          prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.func,
        onPositiveSwipe:
          prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.func,
        direction: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.oneOf([
          'vertical',
          'horizontal',
        ]).isRequired,
        loadInitialData:
          prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.bool,
        fade: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.bool,
        loop: prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.bool,
        loadingScreen:
          prop_types__WEBPACK_IMPORTED_MODULE_27___default.a.element,
      }),
        (Deck.defaultProps = {
          direction: 'horizontal',
          loop: !1,
          loadInitialData: !1,
          fade: !0,
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_25__.StyleSheet.create(
        {
          container: {flex: 1},
          card: Object.assign(
            {
              width: '100%',
              height: '100%',
              position: 'absolute',
              borderRadius: 3,
            },
            react_native__WEBPACK_IMPORTED_MODULE_25__.Platform.select({
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
        },
      );
      (Deck.__docgenInfo = {
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
          style: {type: {name: 'object'}, required: !1, description: ''},
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
      }),
        (__webpack_exports__.a = Deck),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/Deck/Deck.js'] = {
            name: 'Deck',
            docgenInfo: Deck.__docgenInfo,
            path: 'src/Deck/Deck.js',
          });
    },
    1599: function(module, exports, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(78),
        __webpack_require__(72),
        __webpack_require__(74),
        __webpack_require__(64),
        __webpack_require__(1600),
        __webpack_require__(1601),
        __webpack_require__(13),
        __webpack_require__(73);
      var _clientApi = __webpack_require__(100),
        _clientLogger = __webpack_require__(77),
        _configFilename = __webpack_require__(1830);
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
      function _objectSpread(target) {
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
      (_configFilename.args || _configFilename.argTypes) &&
        _clientLogger.logger.warn(
          'Invalid args/argTypes in config, ignoring.',
          JSON.stringify({
            args: _configFilename.args,
            argTypes: _configFilename.argTypes,
          }),
        ),
        _configFilename.decorators &&
          _configFilename.decorators.forEach(function(decorator) {
            return (0, _clientApi.addDecorator)(decorator, !1);
          }),
        (_configFilename.parameters ||
          _configFilename.globals ||
          _configFilename.globalTypes) &&
          (0, _clientApi.addParameters)(
            _objectSpread(
              _objectSpread({}, _configFilename.parameters),
              {},
              {
                globals: _configFilename.globals,
                globalTypes: _configFilename.globalTypes,
              },
            ),
            !1,
          ),
        _configFilename.argTypesEnhancers &&
          _configFilename.argTypesEnhancers.forEach(function(enhancer) {
            return (0, _clientApi.addArgTypesEnhancer)(enhancer);
          });
    },
    16: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(291),
        prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_8__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          33,
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
              padding: theme.listItemSpace[space],
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
                      {source: avatarSource, size: 'xxsmall'},
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
          style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
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
          size: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          space: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
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
          background: 'clearWhite',
          textColor: 'subtle',
          subtitleColor: 'gray',
          chevronColor: 'outline',
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
            defaultValue: {value: "'clearWhite'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          textColor: {
            defaultValue: {value: "'subtle'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          subtitleColor: {
            defaultValue: {value: "'gray'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          chevronColor: {
            defaultValue: {value: "'outline'", computed: !1},
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          size: {
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
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
    166: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _RadioButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _RadioButton__WEBPACK_IMPORTED_MODULE_0__.b;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return _RadioButton__WEBPACK_IMPORTED_MODULE_0__.a;
        });
    },
    1792: function(module, exports, __webpack_require__) {
      'use strict';
      (function(module) {
        (0, __webpack_require__(480).configure)(
          [
            __webpack_require__(1793),
            __webpack_require__(1795),
            __webpack_require__(1797),
            __webpack_require__(1799),
            __webpack_require__(1801),
          ],
          module,
          !1,
        );
      }.call(this, __webpack_require__(156)(module)));
    },
    1793: function(module, exports, __webpack_require__) {
      var map = {'./GetStarted.stories.mdx': 1794};
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
        (webpackContext.id = 1793);
    },
    1794: function(module, __webpack_exports__, __webpack_require__) {
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {title: 'Guide|Get Started', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'get-started'},
            'Get Started',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'React Native Design System',
            ),
            " is a set of design rules and component library that lets you prototype faster with easy to use cross-platform components. Let's get started!",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'install'},
            'Install',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Simply go to the command line and run this command.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-sh'}),
              'yarn add react-native-design-system\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can use ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'yarn',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'npm',
            ),
            ' as per your choice.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-sh'}),
              'npm install react-native-design-system\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'This library needs ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'react-native-vector-icons',
            ),
            ' so go on and install that too to get all the cool icons. Check out ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'a',
              _extends(
                {parentName: 'p'},
                {
                  href:
                    'https://github.com/oblador/react-native-vector-icons#installation',
                  target: '_blank',
                  rel: 'nofollow noopener noreferrer',
                },
              ),
              'Install guide',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'React Native Design System uses a centralized theme to provide consistency across all the components.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h3',
            {
              id:
                'step-1-import-themeprovider-and-theme-then-wrap-your-root-component',
            },
            'Step 1. Import ThemeProvider and theme then wrap your root component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'This step is important. We are passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ' as context value that each component will access.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "//your root component\nimport { ThemeProvider, theme } from 'react-native-design-system';\n\nfunction App(){\n  return (\n    <ThemeProvider value={theme}>\n      <Root />\n    </ThemeProvider>\n  );\n}\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h3',
            {id: 'step-2-use-component'},
            'Step 2. Use component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "//inside any file\nimport { Button } from 'react-native-design-system';\n\nfunction HomeScreen(){\n  return (\n    <Button>\n      Press Me\n    </Button>\n  );\n}\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            "That's pretty much it. ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            " file contains configuration for all the components. Don't worry, you can easily customize it. Let me show how:",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'customize'},
            'Customize',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You just need to import ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ', reassign the value you want to change and pass it to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'ThemeProvider',
            ),
            '. Example:',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)('br', {
              parentName: 'p',
            }),
            '\n',
            'Default primary color is blue but you like orange so you can simply do:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              'import { ThemeProvider, theme } from \'react-native-design-system\';\n\ntheme.colors.primary = "orange";\n\nfunction App(){\n  return (\n    <ThemeProvider value={theme}>\n      <Root />\n    </ThemeProvider>\n  );\n}\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'And we are done!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'p',
              {parentName: 'blockquote'},
              'You can see all the configurations available on the theme page.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'if-you-have-a-lot-of-customizations'},
            'If you have a lot of customizations',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'This is just a personal approach, you can do as you prefer. What I usually do is create a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme.config.js',
            ),
            ' file and add all my customizations there.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "//theme.config.js at root\nimport { theme } from 'react-native-design-system';\n\ntheme.colors = {\n    'default': '#000',\n    'heading': '#999',\n    'subtle': '#333',\n    'gray': '#757575',\n    'disabled': '#78909c',\n    'white': '#f8f8f8',\n};\n\nexport default theme;\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Now, I will just import ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ' from here and pass it to my ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'ThemeProvider',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { ThemeProvider } from 'react-native-design-system';\nimport theme from './theme.config.js';\n\nfunction App(){\n  return (\n    <ThemeProvider value={theme}>\n      <Root />\n    </ThemeProvider>\n  );\n}\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'p',
              {parentName: 'blockquote'},
              'Please make sure to pass all the keys while reassigning any object inside the theme.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Storybook provide interactive playground to test the component in all possible scenarios. There is a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'playground',
            ),
            ' story at the end of each component. Click on that and switch to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Canvas',
            ),
            ' to access ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Knobs',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1795: function(module, exports, __webpack_require__) {
      var map = {'./DesignRules.stories.mdx': 1796};
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
        (webpackContext.id = 1795);
    },
    1796: function(module, __webpack_exports__, __webpack_require__) {
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {title: 'Guide|Design Rules', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'design-rules'},
            'Design Rules',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'These are some design rules that this library follows. It is based on the four key aspects that I considered while creating this.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'p',
              {parentName: 'blockquote'},
              "Feel free to send a PR for corrections, these are personal opinion and I'm here to learn. 😅",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'low-surface-area'},
            'Low surface area',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Most of the props are common across all components or they are the same as their parent component imported from React Native. This makes sure that you do not have to learn a whole set of extra props or just use what you already know.',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)('br', {
              parentName: 'p',
            }),
            '\n',
            'For example:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              "If it's a Button, it receives all the props of Touchable component of React Native.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              "If it's a Modal, it receives all the props of Modal.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'Each component receives a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'size',
              ),
              ' prop whose value can be one of these: ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'xxsmall',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'xsmall',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'small',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'medium',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'large',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'xlarge',
              ),
              ' & ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'xxlarge',
              ),
              '. You just have to pass ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'size',
              ),
              " prop with one of these value and you're done.",
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'Another example could be ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'color',
              ),
              ' prop. You can pass one of the colors defined in ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'brandColor',
              ),
              ' of theme to any component.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              "If it's a layout based component like ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'Box',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'Stack',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'Inline',
              ),
              ' or our best friend ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'Card',
              ),
              ' then it receives a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'space',
              ),
              ' prop. This also takes one of the values between ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'xxsmall',
              ),
              ' and ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'xxlarge',
              ),
              ' ( with an addition of ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'space="none"',
              ),
              ')  and provide appropriate spacing between components.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'Each component receives a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'style',
              ),
              ' and a ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'textStyle',
              ),
              " prop (if there is a text involved). This is for some rare cases when you have to override the default styling. It's preferable to tweak the ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'theme',
              ),
              ' instead to maintain consistency and avoid adding that ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'style',
              ),
              ' again and again.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'These props are common to all the components. Other component-specific props are pretty straight forward too. ',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'speed'},
            'Speed',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'For most of the cases, default styles like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'size={medium}',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space={medium}',
            ),
            " will be enough. In other cases, it's just two to three props max to achieve any desired result. This makes it faster to prototype. The layout components make it easier to achieve the desired screen layout with ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' props. See the playground in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Stack',
            ),
            ' documentation.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'One of the key aspects of pixel-perfect design is the spacing between components. This design system proposes two things:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'ol',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ol'},
              'Every UI component has a margin of 0.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ol'},
              'The spacing of any component will be determined by its parent Layout component.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'The separation of concerns makes the job easier.  Layout component should take care of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' only and UI component should worry about UI only i.e., ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'color',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'size',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'consistency'},
            'Consistency',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'The correct balance of freedom and consistency is hard to achieve.  ',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'ol',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ol'},
              'For freedom, you get straight forward props like ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'color',
              ),
              ' and ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'size',
              ),
              '. ',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ol'},
              'For consistency, you need to define these configurations inside theme file i.e ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'strong',
                {parentName: 'li'},
                'Single source of truth',
              ),
              '.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'It helps in maintaining uniformity across all the usage. It also allows you to have several choices and use them as needed. Check out the theme section of this guide for the default configuration.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'connection'},
            'Connection',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Big problems are always more manageable when broken into smaller pieces. The design language of the system is broken down into color, typography, size, and space. These API is followed by each component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h2',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are basically two types of colors:',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'strong',
                {parentName: 'li'},
                'brandColor:',
              ),
              ' "primary", "secondary", "tertiary", "background", "disabled", "semitransparent".',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'strong',
                {parentName: 'li'},
                'textColor:',
              ),
              ' "default", "heading", "gray", "subtle", "disabled", and "white"',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h2',
            {id: 'typography'},
            'Typography',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'To keep things simple and consistent. There are two choices for fonts to use: ',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'heading ',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'text ',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h2',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'The available sizes you can use is ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"xxsmall"',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"xsmall"',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"small"',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"medium"',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"large"',
              ),
              ', ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"xlarge"',
              ),
              ' and ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"xxlarge"',
              ),
              '. The default is ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '"medium"',
              ),
              ' and it will be applied if are not passing anything.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'Font size is also similar and it ranges from "xxsmall" to "xxlarge".',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h2',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Space also shares similar API as size but with one addition. You can also pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '"none"',
            ),
            ' with the range of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '"xxsmall"',
            ),
            ' to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '"xxlarge"',
            ),
            '. Space is a dedicated prop for layout components like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Stack',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Inline',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Box',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Card',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1797: function(module, exports, __webpack_require__) {
      var map = {'./Theme.stories.mdx': 1798};
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
        (webpackContext.id = 1797);
    },
    1798: function(module, __webpack_exports__, __webpack_require__) {
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {title: 'Guide|Theme', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'the-list-includes-all-the-theme-variables'},
            'The list includes all the theme variables.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-json'}),
              "{\n  fontSize: {\n    'xxsmall': 11,\n    'xsmall': 12.5,\n    'small': 14,\n    'medium': 16,\n    'large': 20,\n    'xlarge': 26,\n    'xxlarge': 32,\n  },\n  size: {\n    'xxsmall': 10,\n    'xsmall': 12,\n    'small': 14,\n    'medium': 16,\n    'large': 18,\n    'xlarge': 20,\n    'xxlarge': 22,\n  },\n  actionButtonSize: {\n    'xxsmall': 30,\n    'xsmall': 40,\n    'small': 50,\n    'medium': 60,\n    'large': 70,\n    'xlarge': 80,\n    'xxlarge': 90,\n  },\n  buttonSize: {\n    'xxsmall': 8,\n    'xsmall': 10,\n    'small': 12,\n    'medium': 14,\n    'large': 16,\n    'xlarge': 18,\n    'xxlarge': 20,\n  },\n  buttonWidth: {\n    'xxsmall': 100,\n    'xsmall': 120,\n    'small': 140,\n    'medium': 160,\n    'large': 180,\n    'xlarge': 200,\n    'xxlarge': 220,\n  },\n  iconSize: {\n    'xxsmall': 16,\n    'xsmall': 18,\n    'small': 22,\n    'medium': 26,\n    'large': 28,\n    'xlarge': 32,\n    'xxlarge': 36,\n  },\n  avatarSize: {\n    'xxsmall': 40,\n    'xsmall': 60,\n    'small': 80,\n    'medium': 90,\n    'large': 110,\n    'xlarge': 120,\n    'xxlarge': 140,\n  },\n  badgeSize: {\n    'xxsmall': 10,\n    'xsmall': 11,\n    'small': 12,\n    'medium': 13,\n    'large': 14,\n    'xlarge': 16,\n    'xxlarge': 18,\n  },\n  miniBadgeSize: {\n    'xxsmall': 10,\n    'xsmall': 11,\n    'small': 12,\n    'medium': 15,\n    'large': 17,\n    'xlarge': 19,\n    'xxlarge': 21,\n  },\n  listItemSpace: {\n    'xxsmall': 5,\n    'xsmall': 7.5,\n    'small': 10,\n    'medium': 12,\n    'large': 14,\n    'xlarge': 16,\n    'xxlarge': 18,\n  },\n  space: {\n    'none': 0,\n    'xxsmall': 2.5,\n    'xsmall': 5,\n    'small': 7.5,\n    'medium': 10,\n    'large': 12.5,\n    'xlarge': 15,\n    'xxlarge': 20,\n  },\n  layoutSpace: {\n    'none': 0,\n    'xxsmall': 5,\n    'xsmall': 10,\n    'small': 12,\n    'medium': 16,\n    'large': 20,\n    'xlarge': 24,\n    'xxlarge': 32,\n  },\n  indicatorSize: {\n    'xxsmall': 0.8,\n    'xsmall': 0.9,\n    'small': 1,\n    'medium': 1.1,\n    'large': 1.25,\n    'xlarge': 1.5,\n    'xxlarge': 1.7,\n  },\n  textColor: {\n    'default': colors.black[300],\n    'heading': colors.black[800],\n    'subtle': colors.black[100],\n    'gray': colors.gray[600],\n    'disabled': colors.bluegray[400],\n    'white': colors.blue[50],\n  },\n  brandColor: {\n    'primary': colors.blue[600],\n    'secondary': colors.yellow[800],\n    'tertiary': colors.red[600],\n    'background': '#f8f8f8',\n    'disabled': colors.bluegray[100],\n    'white': colors.blue[50],\n    'semitransparent': 'rgba(0, 0, 0, 0.3)',\n    'gray': colors.gray[200],\n    'clearWhite': '#fff',\n    'outline': colors.gray[400],\n  },\n}\n",
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1799: function(module, exports, __webpack_require__) {
      var map = {'./Colors.stories.mdx': 1800};
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
        (webpackContext.id = 1799);
    },
    1800: function(module, __webpack_exports__, __webpack_require__) {
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
        _src_util_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {title: 'Guide|Colors', mdxType: 'Meta'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'colors'},
            'Colors',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'These are all the colors that you can use.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "//usage\nimport { colors } from 'react-native-design-system';\n\ntheme.colors.primary = color.lime['A700'];\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.ColorPalette,
            {mdxType: 'ColorPalette'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              react_native__WEBPACK_IMPORTED_MODULE_3__.FlatList,
              {
                data: Object.keys(
                  _src_util_colors__WEBPACK_IMPORTED_MODULE_4__.a,
                ),
                keyExtractor: (colorGroup, index) => index.toString(),
                renderItem: ({item: colorGroup}) =>
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    react_native__WEBPACK_IMPORTED_MODULE_3__.FlatList,
                    {
                      data: Object.keys(
                        _src_util_colors__WEBPACK_IMPORTED_MODULE_4__.a[
                          colorGroup
                        ],
                      ),
                      keyExtractor: hex => hex,
                      renderItem: ({item: hex}) =>
                        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                          _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.ColorItem,
                          {
                            title: `colors.${colorGroup}['${hex}']`,
                            subtitle: colorGroup.toUpperCase(),
                            colors: [
                              _src_util_colors__WEBPACK_IMPORTED_MODULE_4__.a[
                                colorGroup
                              ][hex],
                            ],
                            mdxType: 'ColorItem',
                          },
                        ),
                      mdxType: 'FlatList',
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1801: function(module, exports, __webpack_require__) {
      var map = {
        './ActionButton/ActionButton.stories.mdx': 1802,
        './Avatar/Avatar.stories.mdx': 1813,
        './Badge/Badge.stories.mdx': 1814,
        './Button/Button.stories.mdx': 1815,
        './Button/MenuAddButton.stories.mdx': 1835,
        './Card/Card.stories.mdx': 1817,
        './CheckBox/CheckBox.stories.mdx': 1836,
        './CircularProgressBar/CircularProgressBar.stories.mdx': 1818,
        './Deck/Deck.stories.mdx': 1819,
        './FullScreenLoader/FullScreenLoader.stories.mdx': 1820,
        './Header/Header.stories.mdx': 1821,
        './Input/Input.stories.mdx': 1837,
        './Layout/Box.stories.mdx': 1823,
        './Layout/Inline.stories.mdx': 1824,
        './Layout/Stack.stories.mdx': 1825,
        './ListItem/ListItem.stories.mdx': 1826,
        './Overlay/Overlay.stories.mdx': 1827,
        './RadioButton/RadioButton.stories.mdx': 1838,
        './SearchBar/SearchBar.stories.mdx': 1828,
        './Text/Text.stories.mdx': 1829,
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
        (webpackContext.id = 1801);
    },
    1802: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _ActionButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'ActionButton',
              component: _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'actionbutton'},
            'ActionButton',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            "ActionButton is the buttons you use on your landing screen to guide users towards your goal action. It's the part of the landing screen that the user needs to click to take the action you want them to take.",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { ActionButton } from 'react-native-design-system';\n\n<ActionButton\n  onPress={() => this.handlePress()}  \n/>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {
              of: _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Props',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxlarge',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xlarge',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'large',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'medium',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'small',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'primary',
                    size: 'medium',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'secondary',
                    size: 'medium',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'tertiary',
                    size: 'medium',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'ActionButton',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
                    {
                      name: 'chevron-up',
                      size: 26,
                      color: 'white',
                      mdxType: 'Feather',
                    },
                  ),
                  size: 'medium',
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'ActionButton',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with ActionButton in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'size',
                  [
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
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxlarge',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xlarge',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'large',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'medium',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'small',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xsmall',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxsmall',
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
              '<Inline>\n      <ActionButton size="xxlarge" onPress={action(\'pressed\')} />\n      <ActionButton size="xlarge" onPress={action(\'pressed\')} />\n      <ActionButton size="large" onPress={action(\'pressed\')} />\n      <ActionButton size="medium" onPress={action(\'pressed\')} />\n      <ActionButton size="small" onPress={action(\'pressed\')} />\n      <ActionButton size="xsmall" onPress={action(\'pressed\')} />\n      <ActionButton size="xxsmall" onPress={action(\'pressed\')} />\n  </Inline>',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'primary',
              size: 'medium',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'secondary',
              size: 'medium',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'tertiary',
              size: 'medium',
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
              '<Inline>\n      <ActionButton color="primary" size="medium" onPress={action(\'pressed\')} />\n      <ActionButton color="secondary" size="medium" onPress={action(\'pressed\')} />\n      <ActionButton color="tertiary" size="medium" onPress={action(\'pressed\')} />\n    </Inline>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
              {name: 'chevron-up', size: 26, color: 'white'},
            ),
            size: 'medium',
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
        );
      (icon.storyName = 'icon'),
        (icon.parameters = {
          storySource: {
            source:
              '<ActionButton icon={<Feather name="chevron-up" size={26} color="white" />} size="medium" onPress={action(\'pressed\')} />',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ActionButton__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'size',
              [
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
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
              "<ActionButton size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')} onPress={action('pressed')} />",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1813: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45),
        _Avatar__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(48),
        __webpack_require__(40));
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Avatar',
              component: _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'avatar'},
            'Avatar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Avatars are used to represent a user and can contain photos or text.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Avatar } from 'react-native-design-system';\n\n<Avatar\n  title=\"MD\"\n  source={{ uri: 'image_url_here'}}\n  onPress={() => this.handlePress()}\n/>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Avatar__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'As usual, 7 sizes are available.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxlarge',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xlarge',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'large',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'medium',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'small',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xsmall',
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'types'},
            'Types',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are mainly three types og Avatar: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'square',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'rounded',
            ),
            '. All props accept ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'boolean',
            ),
            ' value.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'types', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    title: 'MD',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Avatar',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'title'},
            'Title',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'title',
            ),
            ' accepts a string. Passing upto 3 character (maximum) is recommended. ',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'title', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                {title: 'MD', mdxType: 'Avatar'},
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'source'},
            'Source',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'source',
            ),
            ' is same as Image component. You can pass a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'required',
            ),
            ' image or a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'uri',
            ),
            ' object.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'source', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  source: {uri: 'https://www.github.com/iamshadmirza.png'},
                  mdxType: 'Avatar',
                },
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'editable'},
            'Editable',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'editable',
            ),
            ' is a boolean value which adds an edit button to the bottom. You just have to pass one ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'onPress',
            ),
            ' function and the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Avatar',
            ),
            ' is clickable.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'editable', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Avatar in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'size',
                  [
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
                title: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text,
                )('title', 'MD'),
                editable: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('editable', !0),
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
                editIconColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
                )('editIconColor', '#78909c'),
                mdxType: 'Avatar',
              },
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const sizes = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxlarge',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xlarge',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'large',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'medium',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'small',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xsmall',
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxsmall',
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
              '<Inline>\n      <Avatar size="xxlarge" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="xlarge" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="large" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="medium" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="small" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="xsmall" title="MD" onPress={action(\'pressed\')} />\n      <Avatar size="xxsmall" onPress={action(\'pressed\')} />\n  </Inline>',
          },
        });
      const types = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              square: !0,
              title: 'MD',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<Inline>\n      <Avatar title="MD" onPress={action(\'pressed\')} />\n      <Avatar square title="MD" onPress={action(\'pressed\')} />\n      <Avatar rounded title="MD" onPress={action(\'pressed\')} />\n  </Inline>',
          },
        });
      const title = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
          {title: 'MD'},
        );
      (title.storyName = 'title'),
        (title.parameters = {storySource: {source: '<Avatar title="MD" />'}});
      const source = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              title: 'MD',
              editable: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<Inline>\n      <Avatar title="MD" editable={true} onPress={action("pressed")} />\n      <Avatar source={{\n    uri: \'https://www.github.com/iamshadmirza.png\'\n  }} editable={true} onPress={action("pressed")} />\n    </Inline>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Avatar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'size',
              [
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
            title: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text,
            )('title', 'MD'),
            editable: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('editable', !0),
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
            editIconColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
            )('editIconColor', '#78909c'),
          },
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Avatar size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} title={text('title', 'MD')} editable={boolean('editable', true)} onPress={action('pressed')} editIconColor={color('editIconColor', '#78909c')} />",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1814: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45),
        _Badge__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(48),
        __webpack_require__(15));
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Badge',
              component: _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'badge'},
            'Badge',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Badges are small components typically used to communicate a number value or indicate the status of an item to the user.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Badge } from 'react-native-design-system';\n\n<Badge\n  onPress={() => this.handlePress())}\n>\n  10000\n</Badge>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Badge__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'As usual, there are 7 sizes available.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxlarge',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '10000',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xlarge',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '1000',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'large',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '100',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'medium',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '50',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'small',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '0',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '-10',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxsmall',
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'types'},
            'Types',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are 3 types of Badges mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ' which is round, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'sqaure',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'mini',
            ),
            '. The prop accept boolean value.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'types', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Inline'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                  '10',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    mini: !0,
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Badge',
                  },
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Badge in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'size',
                  [
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
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
                children: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
                )('children', 10),
                square: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('square', !1),
                mini: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxlarge',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10000',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xlarge',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '1000',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'large',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '100',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'medium',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '50',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'small',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '0',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xsmall',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '-10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxsmall',
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
              '<Inline>\n      <Badge size="xxlarge" onPress={action(\'pressed\')}>\n      10000\n      </Badge>\n      <Badge size="xlarge" onPress={action(\'pressed\')}>\n      1000\n      </Badge>\n      <Badge size="large" onPress={action(\'pressed\')}>\n      100\n      </Badge>\n      <Badge size="medium" onPress={action(\'pressed\')}>\n      50\n      </Badge>\n      <Badge size="small" onPress={action(\'pressed\')}>\n      0\n      </Badge>\n      <Badge size="xsmall" onPress={action(\'pressed\')}>\n      -10\n      </Badge>\n      <Badge size="xxsmall" onPress={action(\'pressed\')}>\n      -100\n      </Badge>\n  </Inline>',
          },
        });
      const types = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Inline__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              square: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              mini: !0,
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
              "<Inline>\n      <Badge onPress={action('pressed')}>\n        10\n      </Badge>\n      <Badge square onPress={action('pressed')}>\n        10\n      </Badge>\n      <Badge mini onPress={action('pressed')} />\n  </Inline>",
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Badge__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'size',
              [
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
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
            children: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
            )('children', 10),
            square: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('square', !1),
            mini: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('mini', !1),
            onPress: Object(
              _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
            )('pressed'),
          },
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Badge size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')} children={number('children', 10)} square={boolean('square', false)} mini={boolean('mini', false)} onPress={action('pressed')} />",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1815: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Button',
              component: _Button__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'button'},
            'Button',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'A Button is a clickable view to carry out actions such as clearing user input or submitting the form.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Button } from 'react-native-design-system';\n\n<Button onPress={() => this.handleChange())}>\n  Press Me\n</Button>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Button__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are four types of button mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'round',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'outline',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'transparent',
            ),
            '. You can pass boolean value ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'round={true}',
            ),
            ' for round button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'outline={true}',
            ),
            ' for outline button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'transparent={true}',
            ),
            ' for transparent button and nothing for default solid button.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'loading'},
            'Loading',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'loading', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'disabled'},
            'Disabled',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'disabled', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'length'},
            'Length',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Button ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'length',
            ),
            ' can either be ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'short',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'long',
            ),
            '. Default is long so no need to provide that. Length can further be configured by using ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'width',
            ),
            ' prop along with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'length="short"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'length', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are three different ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' available. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'primary',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'secondary',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'tertiary',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    color: 'tertiary',
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can directly pass any icon via icon props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'p',
              {parentName: 'blockquote'},
              'Icon size and color should be defined by developers manually according to button size.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are 7 different size of buttons.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'size', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xsmall',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'small',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'medium',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'large',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xlarge',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    size: 'xxlarge',
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'width'},
            'Width',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Must be used with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'type="short"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'width', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    length: 'short',
                    width: 'medium',
                    onPress: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                    )('pressed'),
                    mdxType: 'Button',
                  },
                  'Press Me',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'tint'},
            'Tint',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Tint is a boolean property which allows you to enable or disable transpent tint of outline button. Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'tint={false}',
            ),
            ' to make the background of outline button totally transparent.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'tint', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Button in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'size',
                  [
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
                width: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'width',
                  [
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
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
                length: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )('length', ['long', 'short'], 'long'),
                round: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('round', !1),
                outline: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('outline', !1),
                transparent: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('transparent', !1),
                loading: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('loading', !1),
                disabled: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('disabled', !1),
                tint: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              round: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              "<Stack>\n      <Button onPress={action('pressed')}>\n        Press Me\n      </Button>\n      <Button round onPress={action('pressed')}>\n        Press Me\n      </Button>\n      <Button outline onPress={action('pressed')}>\n        Press Me\n      </Button>\n       <Button transparent onPress={action('pressed')}>\n        Press Me\n      </Button>\n    </Stack>",
          },
        });
      const loading = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'primary',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'secondary',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              color: 'tertiary',
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
              '<Stack>\n      <Button color="primary" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button color="secondary" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button color="tertiary" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Stack>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            icon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxsmall',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xsmall',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'small',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'medium',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'large',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xlarge',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              size: 'xxlarge',
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
              '<Stack>\n      <Button size="xxsmall" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="xsmall" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="small" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="medium" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="large" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="xlarge" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button size="xxlarge" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Stack>',
          },
        });
      const width = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              length: 'short',
              width: 'medium',
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            'Press Me',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<Stack>\n      <Button length="short" width="xxsmall" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="xsmall" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="small" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="medium" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="large" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="xlarge" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n      <Button length="short" width="xxlarge" onPress={action(\'pressed\')}>\n        Press Me\n      </Button>\n    </Stack>',
          },
        });
      const tint = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Button__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'size',
              [
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
            width: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'width',
              [
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
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
            length: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('length', ['long', 'short'], 'long'),
            round: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('round', !1),
            outline: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('outline', !1),
            transparent: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('transparent', !1),
            loading: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('loading', !1),
            disabled: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('disabled', !1),
            tint: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('tint', !0),
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
              "<Button size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} width={select('width', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')} length={select('length', ['long', 'short'], 'long')} round={boolean('round', false)} outline={boolean('outline', false)} transparent={boolean('transparent', false)} loading={boolean('loading', false)} disabled={boolean('disabled', false)} tint={boolean('tint', true)} onPress={action('pressed')}>\n  Press Me\n  </Button>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1817: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9),
        _Card__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(48),
        __webpack_require__(36)),
        _Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Card',
              component: _Card__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'card'},
            'Card',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Card is a wrapper component with a small padding. It included center, left and right aligned card to auto align childrens. Use ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Box',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Stack',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Inline',
            ),
            ' when making a layout.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Card, Button } from 'react-native-design-system';\n\n<Card>\n  <Button onPress={() => this.handleChange())}>\n    Press Me\n  </Button>\n</Card>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Card__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'size',
            ),
            ' in each component, Card receives 7 available ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' values with an additional ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ' value.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'none', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'xxsmall', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'xsmall', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'small', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'medium', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'large', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'xlarge', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {space: 'xxlarge', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are 3 types of alignment for children: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'left',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'center',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'right',
            ),
            '. You just have to pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'align',
            ),
            ' prop which accepts a string from three choices.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {align: 'left', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {align: 'center', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {align: 'right', mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'padding'},
            'Padding',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Padding can be applied horizontally and vertically only.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'ul',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'First button is getting ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'horizontal',
              ),
              ' prop which makes vertical padding ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '0',
              ),
              '.',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'li',
              {parentName: 'ul'},
              'Second button is getting ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                'vertical',
              ),
              ' prop which makes horizontal padding ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'li'},
                '0',
              ),
              '.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'padding', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {horizontal: !0, mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {vertical: !0, mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'row'},
            'Row',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Default alignment of childrens is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'column',
            ),
            ' which can be changed to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'row',
            ),
            ' by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'row',
            ),
            " prop. It's a boolean value. This is totally a personal use-case and you can always customize the view with ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'style',
            ),
            ' prop.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'row', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                  {row: !0, mdxType: 'Card'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'shadow'},
            'Shadow',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'shadow',
            ),
            ' to render a shadow around card. It is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'false',
            ),
            ' by default.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'shadow', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Card__WEBPACK_IMPORTED_MODULE_7__.a,
                {row: !0, shadow: !0, mdxType: 'Card'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Card in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Card__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('row', !1),
                shadow: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('shadow', !1),
                align: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )('center', ['left', 'center', 'right'], 'left'),
                mdxType: 'Card',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'none'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'xxsmall'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'xsmall'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'small'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'medium'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'large'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'xlarge'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {space: 'xxlarge'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<Stack>\n      <Card space="none">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card space="xxsmall">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card space="xsmall">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card space="small">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card space="medium">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card space="large">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card space="xlarge">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n      <Card space="xxlarge">\n        <Button onPress={action(\'pressed\')}>\n          Press Me\n        </Button>\n      </Card>\n    </Stack>',
          },
        });
      const type = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {align: 'left'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {align: 'center'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {align: 'right'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {horizontal: !0},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {vertical: !0},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              "<Stack>\n        <Card horizontal>\n          <Button onPress={action('pressed')}>\n            Press Me\n          </Button>\n        </Card>\n        <Card vertical>\n          <Button onPress={action('pressed')}>\n            Press Me\n          </Button>\n        </Card>\n      </Stack>",
          },
        });
      const row = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Card__WEBPACK_IMPORTED_MODULE_7__.a,
            {row: !0},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Button_Button__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                length: 'short',
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              'Press Me',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Card__WEBPACK_IMPORTED_MODULE_7__.a,
          {row: !0, shadow: !0},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Card__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('row', !1),
            shadow: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('shadow', !1),
            align: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('center', ['left', 'center', 'right'], 'left'),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              "<Card space={select('space', ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} row={boolean('row', false)} shadow={boolean('shadow', false)} align={select('center', ['left', 'center', 'right'], 'left')}>\n    <Button length=\"short\" onPress={action('pressed')}>\n      Press Me\n    </Button>\n    </Card>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1818: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        __webpack_require__(9),
        __webpack_require__(151));
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'CircularProgressBar',
              component: _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'circularprogressbar'},
            'CircularProgressBar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Animated circular progress bar for cross plateform.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              'import { CircularProgressBar } from \'react-native-design-system\';\n\n<CircularProgressBar\n    activeColor="darkviolet"\n    passiveColor="darkgray"\n    baseColor="white"\n    width={50}\n    percent={35}\n    radius={100}\n    duration={1200}\n  >\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {
              of: _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Props',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'This component is fully customizable. Go on, play with CircularProgressBar inside Canvas.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                activeColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
                )('activeColor', 'darkviolet'),
                passiveColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
                )('passiveColor', 'darkgray'),
                baseColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
                )('baseColor', 'white'),
                width: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
                )('width', 50),
                percent: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
                )('percent', 35),
                radius: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
                )('radius', 100),
                duration: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
                )('duration', 1200),
                mdxType: 'CircularProgressBar',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _CircularProgressBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            activeColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
            )('activeColor', 'darkviolet'),
            passiveColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
            )('passiveColor', 'darkgray'),
            baseColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
            )('baseColor', 'white'),
            width: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
            )('width', 50),
            percent: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
            )('percent', 35),
            radius: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
            )('radius', 100),
            duration: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.number,
            )('duration', 1200),
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
            null,
            'Wow!',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              '<CircularProgressBar activeColor={color("activeColor", "darkviolet")} passiveColor={color("passiveColor", "darkgray")} baseColor={color("baseColor", "white")} width={number(\'width\', 50)} percent={number(\'percent\', 35)} radius={number(\'radius\', 100)} duration={number(\'duration\', 1200)}>\n    <Text>Wow!</Text>\n  </CircularProgressBar>',
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1819: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Deck__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_require__(9),
        __webpack_require__(153));
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Deck',
              component: _Deck__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'deck'},
            'Deck',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Swippable Deck component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Deck } from 'react-native-design-system';\n\n<Deck\n    data={[\n        {\n            id: 28362836,\n            imageUrl: './Kitty1.png'\n        },\n        {\n            id: 5325732,\n            imageUrl: './Kitty2.png'\n        },\n        {\n            id: 9372333,\n            imageUrl: './Kitty3.png'\n        },\n        {\n            id: 76732573,\n            imageUrl: './Kitty4.png'\n        },\n    ]}\n    keyExtractor={item => item.id.toString()}\n    renderItem={item => {\n        return (\n            <View style={{ flex: 1}}>\n                <Image style={{ width: 100, height: 100 }} source={{ uri: item.imageUrl }} />\n            </View>\n        );\n    }}\n/>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Deck__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'data'},
            'data',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass array of items you want to render. Works just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '<FlatList />',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'renderitem'},
            'renderItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass a callback function to render each item. Function receives ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'item',
            ),
            ' as argument and returns react element. Works just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '<FlatList />',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'keyextractor'},
            'keyExtractor',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass a function that returns unique id as strings. Function receives ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'item',
            ),
            ' as argument. Works just like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '<FlatList />',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'direction'},
            'direction',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'direction',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'vertical',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'horizontal',
            ),
            ' to change direction of swipe. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'horzintal',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'loop'},
            'loop',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'loop={true}',
            ),
            ' to repeat the data array when all items are swiped. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'false',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'fade'},
            'fade',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'fade={true}',
            ),
            ' to reduce opacity as the user swipes. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'true',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'onpositiveswipe'},
            'onPositiveSwipe',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass a function to be called when item has been swiped right in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'direction="horizontal"',
            ),
            ' and up in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'direction="vertical"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'onnegativeswipe'},
            'onNegativeSwipe',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass a function to be called when item has been swiped left in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'direction="horizontal"',
            ),
            ' and down in case of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'direction="vertical"',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'loadmorecards'},
            'loadMoreCards',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass an async function (promise) to load more cards from all cards are swiped. This function will receive ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'page',
            ),
            ' as argument which is integer value for pagination and should return new batch of items in an array. We take care of concatinating received data inside Deck component, you just have to return an array with new data.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'loadinitialdata'},
            'loadInitialData',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'loadInitialData={true}',
            ),
            ' when passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'data={[]}',
            ),
            ' as empty array. Deck component will use ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'loadMoreCards',
            ),
            ' to fetch the initial batch of data. We show a loading screen while fetching data, you can pass this loading screen yourself. See next prop.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'loadingscreen'},
            'loadingScreen',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'React component to show while fetching data, this component will be used at initial screen when ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'loadInitialData={true}',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'This component is fully customizable. Go on, play with Deck inside Canvas.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                      react_native__WEBPACK_IMPORTED_MODULE_4__.Image,
                      {
                        style: {width: 300, height: 300},
                        source: {uri: item},
                        resizeMode: 'contain',
                        mdxType: 'Image',
                      },
                    ),
                    Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                      react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
                      {mdxType: 'Text'},
                      'Adorable Kittens 😍',
                    ),
                  ),
                direction: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )('direction', ['horizontal', 'vertical'], 'horizontal'),
                fade: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('fade', !1),
                loop: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  react_native__WEBPACK_IMPORTED_MODULE_4__.Image,
                  {
                    style: {width: 300, height: 300},
                    source: {uri: item},
                    resizeMode: 'contain',
                  },
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
                  null,
                  'Adorable Kittens 😍',
                ),
              ),
            direction: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('direction', ['horizontal', 'vertical'], 'horizontal'),
            fade: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('fade', !1),
            loop: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('loop', !0),
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
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1820: function(module, __webpack_exports__, __webpack_require__) {
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
          152,
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'FullScreenLoader',
              component: _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'fullscreenloader'},
            'FullScreenLoader',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'FullScreenLoader is a loading screen component which sits on top of all the view. It shows an Activity Indicator and restrict touches while spinner is rotating.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { FullScreenLoader } from 'react-native-design-system';\n\n<FullScreenLoader \n  loading={this.state.loading}\n>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {
              of: _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
              mdxType: 'Props',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'loading'},
            'Loading',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'loading={true}',
            ),
            ' makes the loading screen visible. View will be unmounted when ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'loading',
            ),
            ' changes to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'false',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'indicator-color'},
            'Indicator Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass any theme color in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'indicatorColor',
            ),
            ' prop for desired result. Passed color should be present in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'background'},
            'Background',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass any theme color in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' prop for set desired Background. Passed color should be present in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Size gives the size of Indicator: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'children'},
            'Children',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'If you want to pass any element to render with spinner.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with FullScreenLoader in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {
                name: 'playground',
                parameters: {
                  decorators: [
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                  ],
                },
                mdxType: 'Story',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                react_native__WEBPACK_IMPORTED_MODULE_4__.View,
                {style: {height: 480, width: 270}, mdxType: 'View'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
                  {
                    loading: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                    )('loading', !0),
                    size: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                    )('size', ['small', 'large']),
                    background: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                    )(
                      'background',
                      [
                        'primary',
                        'secondary',
                        'tertiary',
                        'disabled',
                        'semitransparent',
                      ],
                      'semitransparent',
                    ),
                    indicatorColor: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
                    )('indicatorColor', '#1e88e5'),
                    mdxType: 'FullScreenLoader',
                  },
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          react_native__WEBPACK_IMPORTED_MODULE_4__.View,
          {style: {height: 480, width: 270}},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _FullScreenLoader__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              loading: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
              )('loading', !0),
              size: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
              )('size', ['small', 'large']),
              background: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
              )(
                'background',
                [
                  'primary',
                  'secondary',
                  'tertiary',
                  'disabled',
                  'semitransparent',
                ],
                'semitransparent',
              ),
              indicatorColor: Object(
                _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.color,
              )('indicatorColor', '#1e88e5'),
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              react_native__WEBPACK_IMPORTED_MODULE_4__.Text,
              null,
              'Loading...',
            ),
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<View style={{\n  height: 480,\n  width: 270\n}}>\n      <FullScreenLoader loading={boolean('loading', true)} size={select('size', ['small', 'large'])} background={select('background', ['primary', 'secondary', 'tertiary', 'disabled', 'semitransparent'], 'semitransparent')} indicatorColor={color('indicatorColor', '#1e88e5')}>\n      <Text>Loading...</Text>\n      </FullScreenLoader>\n    </View>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1821: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          434,
        ),
        react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5__,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Header',
              component: _Header__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'header'},
            'Header',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Header is just a fixed Header bar that sits on top of screen.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Header } from 'react-native-design-system';\n\n<Header>\n  Home\n</Header>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'p',
              {parentName: 'blockquote'},
              "If you're using ",
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'p'},
                'Expo',
              ),
              ' then you have to provide top margin for StatusBar:',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Constants } from 'expo'\n\n...\nheaderStyle: { marginTop: Constants.statusBarHeight },\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Header__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'text-align'},
            'Text Align',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can align Header title position by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'auto',
            ),
            ',',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'left',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'center',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'right',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'justify',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'textAlign',
            ),
            ' property.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'textAlign', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {textAlign: 'left', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {textAlign: 'center', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {textAlign: 'right', mdxType: 'Header'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'font-size'},
            'Font Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are 7 font sizes available from ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ' to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            '. Below Headers are of size ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'fontSize', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {fontSize: 'xxsmall', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {fontSize: 'medium', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {fontSize: 'xxlarge', mdxType: 'Header'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Color takes any string defined in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'theme',
            ),
            ' file.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {color: 'primary', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {color: 'secondary', mdxType: 'Header'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                  {color: 'tertiary', mdxType: 'Header'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'icons'},
            'Icons',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'leftIcon',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'onLeftIconPress',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'onRightIconPress',
            ),
            ' handler. Size, type and color of icon is upto developer.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'icons', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Header__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  leftIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx,
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
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx,
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'bar-color'},
            'Bar Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can pass StatusBar ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'strong',
              {parentName: 'p'},
              'backgroundColor',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'barColor',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'strong',
              {parentName: 'p'},
              'barStyle',
            ),
            ' for StatusBar ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'barColor',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'icon-styles'},
            'Icon Styles',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'iconStyle',
            ),
            ' to pass custom styling for left and right. This is handy when you have to provide some extra padding to the icons.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Header in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Header__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                fontSize: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'center',
                  ['auto', 'left', 'center', 'right', 'justify'],
                  'left',
                ),
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {textAlign: 'left'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {textAlign: 'center'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {textAlign: 'right'},
            'Home',
          ),
        );
      (textAlign.storyName = 'textAlign'),
        (textAlign.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Header textAlign="left">\n        Home\n      </Header>\n      <Header textAlign="center">\n        Home\n      </Header>\n      <Header textAlign="right">\n        Home\n      </Header>\n    </Stack>',
          },
        });
      const fontSize = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {fontSize: 'xxsmall'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {fontSize: 'medium'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {fontSize: 'xxlarge'},
            'Home',
          ),
        );
      (fontSize.storyName = 'fontSize'),
        (fontSize.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Header fontSize="xxsmall">\n        Home\n      </Header>\n      <Header fontSize="medium">\n        Home\n      </Header>\n      <Header fontSize="xxlarge">\n        Home\n      </Header>\n    </Stack>',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_8__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {color: 'primary'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {color: 'secondary'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Header__WEBPACK_IMPORTED_MODULE_7__.a,
            {color: 'tertiary'},
            'Home',
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Header color="primary">\n        Home\n      </Header>\n      <Header color="secondary">\n        Home\n      </Header>\n      <Header color="tertiary">\n        Home\n      </Header>\n    </Stack>',
          },
        });
      const icons = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Header__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            leftIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              react_native_vector_icons_EvilIcons__WEBPACK_IMPORTED_MODULE_5___default.a,
              {name: 'navicon', size: 26, color: 'white'},
            ),
            rightIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Header__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            fontSize: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('center', ['auto', 'left', 'center', 'right', 'justify'], 'left'),
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('color', ['primary', 'secondary', 'tertiary'], 'primary'),
          },
          'Home',
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Header fontSize={select('space', ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} textAlign={select('center', ['auto', 'left', 'center', 'right', 'justify'], 'left')} color={select('color', ['primary', 'secondary', 'tertiary'], 'primary')}>\n    Home\n  </Header>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1823: function(module, __webpack_exports__, __webpack_require__) {
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
        _Button_Button__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_require__(2),
        __webpack_require__(7)),
        _Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(102);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Box',
              component: _Box__WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'box'},
            'Box',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Box is a simple layout container which accepts a child and provide padding around it. The child is centered by default.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              'import { Box } from \'react-native-design-system\';\n\n<Box space="large">\n  <Button>\n    Press Me\n  </Button>    \n</Box>\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Box__WEBPACK_IMPORTED_MODULE_6__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Customize padding for the child. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' prop accepts one of the given values: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xlarge',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Box__WEBPACK_IMPORTED_MODULE_6__.a,
                {space: 'large', mdxType: 'Box'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                  {mdxType: 'Button'},
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'background'},
            'Background',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can also pass a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' color. Color string should be present inside ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of theme.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'background', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Box__WEBPACK_IMPORTED_MODULE_6__.a,
                {background: 'disabled', mdxType: 'Box'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                  {mdxType: 'Button'},
                  'Press Me',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Box in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Box__WEBPACK_IMPORTED_MODULE_6__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
                mdxType: 'Box',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Box__WEBPACK_IMPORTED_MODULE_6__.a,
          {space: 'large'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              '<Box space="large">\n      <Button>\n        Press Me\n      </Button>    \n    </Box>',
          },
        });
      const background = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Box__WEBPACK_IMPORTED_MODULE_6__.a,
          {background: 'disabled'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (background.storyName = 'background'),
        (background.parameters = {
          storySource: {
            source:
              '<Box background="disabled">\n      <Button>\n        Press Me\n      </Button>    \n    </Box>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Box__WEBPACK_IMPORTED_MODULE_6__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_5__.a,
            null,
            'Press Me',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Box space={select('space', ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} background={select('background', ['background', 'clearWhite', 'disabled', 'semitransparent', 'gray', 'white', 'outline'], 'background')}>\n    <Button>\n      Press Me\n    </Button>    \n  </Box>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1824: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15),
        _Inline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45),
        _Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Inline',
              component: _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'inline'},
            'Inline',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            "Inline is a layout container which alligns it's children horizontally (inline) and provide constant margin around them.",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'p',
              {parentName: 'blockquote'},
              'Use of Inline is discraged. Use ',
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                'inlineCode',
                {parentName: 'p'},
                'Stack',
              ),
              ' with direction="horizontal" instead.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              'import { Box, Badge } from \'react-native-design-system\';\n\n<Inline space="xxlarge">\n  <Badge onPress={() => this.handlePress(id)}>\n    10\n  </Badge>\n  <Badge onPress={() => this.handlePress(id)}>\n    50\n  </Badge>\n  <Badge onPress={() => this.handlePress(id)}>\n    677\n  </Badge>\n  <Badge onPress={() => this.handlePress(id)}>\n    9999\n  </Badge>\n</Inline>\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Inline__WEBPACK_IMPORTED_MODULE_6__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Customize spacing of each child from one another. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' prop accepts one of the given values: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xlarge',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            ' and provide constant spacing between each children.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
                  {space: 'none', mdxType: 'Inline'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '10',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '50',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '677',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
                  {space: 'medium', mdxType: 'Inline'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '10',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '50',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '677',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
                  {space: 'xxlarge', mdxType: 'Inline'},
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '10',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '50',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                    _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                    {
                      onPress: Object(
                        _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                      )('pressed'),
                      mdxType: 'Badge',
                    },
                    '677',
                  ),
                  Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Inline in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Badge',
                },
                '10',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Badge',
                },
                '50',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  onPress: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                  )('pressed'),
                  mdxType: 'Badge',
                },
                '677',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
            {space: 'none'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '10',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '50',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '677',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '9999',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
            {space: 'medium'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '10',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '50',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '677',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '9999',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
            {space: 'xxlarge'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '10',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '50',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                onPress: Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
              },
              '677',
            ),
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              "<Stack>\n      <Inline space=\"none\">\n        <Badge onPress={action('pressed')}>\n          10\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          50\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          677\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          9999\n        </Badge>\n      </Inline>\n      <Inline space=\"medium\">\n        <Badge onPress={action('pressed')}>\n          10\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          50\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          677\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          9999\n        </Badge>\n      </Inline>\n      <Inline space=\"xxlarge\">\n        <Badge onPress={action('pressed')}>\n          10\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          50\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          677\n        </Badge>\n        <Badge onPress={action('pressed')}>\n          9999\n        </Badge>\n      </Inline>\n    </Stack>",
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Inline__WEBPACK_IMPORTED_MODULE_6__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '10',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '50',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Badge_Badge__WEBPACK_IMPORTED_MODULE_5__.a,
            {
              onPress: Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
              )('pressed'),
            },
            '677',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              "<Inline space={select('space', ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')}>\n    <Badge onPress={action('pressed')}>\n      10\n    </Badge>\n    <Badge onPress={action('pressed')}>\n      50\n    </Badge>\n    <Badge onPress={action('pressed')}>\n      677\n    </Badge>\n    <Badge onPress={action('pressed')}>\n      9999\n    </Badge> \n  </Inline>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1825: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14),
        _Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7),
        _Stack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Stack',
              component: _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'stack'},
            'Stack',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            "Stack is a layout container which alligns it's children vertrically (stack) and provide constant margin around them.",
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              'import { Stack, Input } from \'react-native-design-system\';\n\n<Stack space="large">\n  <Input\n    placeholder="Enter Username"\n    value=""\n    outline\n    onChangeText={text => handleUsernameChange(text)}\n  />\n  <Input\n    placeholder="Enter Email"\n    value=""\n    outline\n    onChangeText={text => handleEmailChange(text)}\n  />\n  <Input\n    placeholder="Enter Password"\n    value=""\n    outline\n    onChangeText={text => handlePasswordChange(text)}\n  />\n</Stack>\n',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Stack__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Customize spacing of each child from one another. ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' prop accepts one of the given values: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xsmall',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'small',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'medium',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'large',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xlarge',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            ' and provide constant spacing between each children.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
                {space: 'large', mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'direction'},
            'Direction',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Give direction="horizontal" to make it behave like Inline. Direction can either be "vertical" or "horizontal". Default is "vertical".',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'horizontal-space'},
            'Horizontal Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'horizontalSpace',
            ),
            ' prop adds horizontal spacing. Default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'none',
            ),
            ' but you can any of the 8 spacing values provided.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'horizontalSpace', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
                {space: 'large', horizontalSpace: 'xxlarge', mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Stack in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
                horizontalSpace: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
                mdxType: 'Stack',
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
                {mdxType: 'Button'},
                'LOG IN',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
                {outline: !0, mdxType: 'Button'},
                'SIGN UP',
              ),
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          {space: 'large'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<Stack space="large">\n        <Input placeholder="Enter Username" value="" outline onChangeText={text => action(\'pressed\')} />\n        <Input placeholder="Enter Email" value="" outline onChangeText={text => action(\'pressed\')} />\n        <Input placeholder="Enter Password" value="" outline onChangeText={text => action(\'pressed\')} />\n      </Stack>',
          },
        });
      const horizontalSpace = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          {space: 'large', horizontalSpace: 'xxlarge'},
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<Stack space="large" horizontalSpace="xxlarge">\n        <Input placeholder="Enter Username" value="" outline onChangeText={text => action(\'pressed\')} />\n        <Input placeholder="Enter Email" value="" outline onChangeText={text => action(\'pressed\')} />\n        <Input placeholder="Enter Password" value="" outline onChangeText={text => action(\'pressed\')} />\n      </Stack>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Stack__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
            horizontalSpace: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
          },
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
            null,
            'LOG IN',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
            {outline: !0},
            'SIGN UP',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Button_Button__WEBPACK_IMPORTED_MODULE_6__.a,
            {transparent: !0},
            'forget password?',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Stack space={select('space', ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} horizontalSpace={select('horizontalSpace', ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')}>\n    <Input placeholder=\"Enter username\" value=\"\" outline label=\"Username\" onChangeText={text => action('pressed')} />\n    <Input placeholder=\"Enter email\" value=\"\" outline label=\"Email\" onChangeText={text => action('pressed')} />\n    <Input placeholder=\"Enter password\" value=\"\" outline label=\"Password\" onChangeText={text => action('pressed')} />\n    <Button>\n      LOG IN\n    </Button>\n    <Button outline>\n      SIGN UP\n    </Button>\n    <Button transparent>\n      forget password?\n    </Button>\n  </Stack>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1826: function(module, __webpack_exports__, __webpack_require__) {
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
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_require__(2),
        __webpack_require__(9)),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          96,
        ),
        react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_AntDesign__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'ListItem',
              component: _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'listitem'},
            'ListItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'A ListItem is a wrapper around ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'TextInput',
            ),
            ' with commonly used styles and easy to make customization.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { ListItem } from 'react-native-design-system';\n\n<ListItem chevron>\n  This is a ListItem\n</ListItem>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _ListItem__WEBPACK_IMPORTED_MODULE_8__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are three types of button mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'round',
            ),
            ', and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'outline',
            ),
            '. You can pass boolean value ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'round={true}',
            ),
            ' for round button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'outline={true}',
            ),
            ' for outline button and nothing for default solid button.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {mdxType: 'ListItem'},
                  'This is a ListItem',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, mdxType: 'ListItem'},
                  'This is a ListItem',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'chevron'},
            'Chevron',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'chevro={true}',
            ),
            ' to show chevron at left. You can pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'chevronColor',
            ),
            ' to change its color.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'chevron', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {chevron: !0, mdxType: 'ListItem'},
                'This is a ListItem',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'subtitle'},
            'Subtitle',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass a string to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'subtitle',
            ),
            ' prop to go below list text.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'subtitle', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'avatar'},
            'Avatar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'avatarSource',
            ),
            ' to get an avatar on left. It receives prop same as an Image component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'avatarSource', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'leftIcon',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' that goes to left and right on the ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'ListItem',
            ),
            '. You can customize icon with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'iconStyle',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  chevron: !0,
                  subtitle: '@iamshadmirza',
                  leftIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx,
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
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx,
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'disabled'},
            'Disabled',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'disabled={true}',
            ),
            ' property restrict any kind of action on ListItem.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'disabled', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'text-color'},
            'Text Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can pass any of the color present inside ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'textColor',
            ),
            ' in theme. Same property applies to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'subtitleColor',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'textColor', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                {
                  chevron: !0,
                  textColor: 'gray',
                  subtitle: 'a generic subtitle',
                  mdxType: 'ListItem',
                },
                'Hey there!',
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'text-align'},
            'Text Align',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can align ListItem text position by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'auto',
            ),
            ',',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'left',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'center',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'right',
            ),
            ' or ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'justify',
            ),
            ' as ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'textAlign',
            ),
            ' property.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'textAlign', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, textAlign: 'left', mdxType: 'ListItem'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, textAlign: 'center', mdxType: 'ListItem'},
                  'Home',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, textAlign: 'right', mdxType: 'ListItem'},
                  'Home',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'As usual, 7 available sized.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'size', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xxsmall', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xsmall', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'small', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'medium', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'large', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xlarge', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, size: 'xxlarge', mdxType: 'ListItem'},
                  'Hey there!',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'space'},
            'Space',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can customize just the padding too by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'space',
            ),
            ' props with one of the 7 values (',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxsmall',
            ),
            ' to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'xxlarge',
            ),
            ').',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'space', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'xxsmall', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'xsmall', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'small', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'medium', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'large', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'xlarge', mdxType: 'ListItem'},
                  'Hey there!',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
                  {chevron: !0, space: 'xxlarge', mdxType: 'ListItem'},
                  'Hey there!',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with ListItem in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
              {
                chevron: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('chevron', !0),
                disabled: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('disabled', !1),
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'size',
                  [
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
                space: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'textColor',
                  ['default', 'heading', 'subtle', 'gray'],
                  'gray',
                ),
                subtitleColor: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'subtitleColor',
                  ['default', 'heading', 'subtle', 'gray'],
                  'gray',
                ),
                textAlign: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'center',
                  ['auto', 'left', 'center', 'right', 'justify'],
                  'left',
                ),
                mdxType: 'ListItem',
              },
              Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)(
                'children',
                'Play around wit ListItem',
              ),
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const type = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            null,
            'This is a ListItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0},
            'This is a ListItem',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, subtitle: 'This is a subtitle'},
            'This is a ListItem',
          ),
        );
      (type.storyName = 'type'),
        (type.parameters = {
          storySource: {
            source:
              '<Stack>\n      <ListItem>\n        This is a ListItem\n      </ListItem>\n      <ListItem chevron>\n        This is a ListItem\n      </ListItem>\n      <ListItem chevron subtitle="This is a subtitle">\n        This is a ListItem\n      </ListItem>\n    </Stack>',
          },
        });
      const chevron = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0},
          'This is a ListItem',
        );
      (chevron.storyName = 'chevron'),
        (chevron.parameters = {
          storySource: {
            source:
              '<ListItem chevron>\n        This is a ListItem\n    </ListItem>',
          },
        });
      const subtitle = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0, subtitle: 'a generic subtitle'},
          'Hey there!',
        );
      (subtitle.storyName = 'subtitle'),
        (subtitle.parameters = {
          storySource: {
            source:
              '<ListItem chevron subtitle="a generic subtitle">\n        Hey there!\n    </ListItem>',
          },
        });
      const avatarSource = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<ListItem chevron avatarSource={{\n  uri: \'https://avatars.io/twitter/iamshadmirza\'\n}} subtitle="a generic subtitle">\n        Hey there!\n    </ListItem>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {
            chevron: !0,
            subtitle: '@iamshadmirza',
            leftIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default.a,
              {name: 'twitter', color: '#333', size: 24},
            ),
            rightIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
              '<ListItem chevron subtitle="@iamshadmirza" leftIcon={<Feather name="twitter" color="#333" size={24} />} rightIcon={<AntDesign name="adduser" color="#333" size={24} />}>\n        Follow me on twitter\n    </ListItem>',
          },
        });
      const disabled = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0, disabled: !0, subtitle: 'a generic subtitle'},
          'Hey there!',
        );
      (disabled.storyName = 'disabled'),
        (disabled.parameters = {
          storySource: {
            source:
              '<ListItem chevron disabled subtitle="a generic subtitle">\n        Hey there!\n    </ListItem>',
          },
        });
      const textColor = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {chevron: !0, textColor: 'gray', subtitle: 'a generic subtitle'},
          'Hey there!',
        );
      (textColor.storyName = 'textColor'),
        (textColor.parameters = {
          storySource: {
            source:
              '<ListItem chevron textColor="gray" subtitle="a generic subtitle">\n        Hey there!\n    </ListItem>',
          },
        });
      const textAlign = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, textAlign: 'left'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, textAlign: 'center'},
            'Home',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xxsmall'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xsmall'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'small'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'medium'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'large'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xlarge'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, size: 'xxlarge'},
            'Hey there!',
          ),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <ListItem chevron size="xxsmall">\n          Hey there!\n      </ListItem>\n      <ListItem chevron size="xsmall">\n          Hey there!\n      </ListItem>\n      <ListItem chevron size="small">\n          Hey there!\n      </ListItem>\n      <ListItem chevron size="medium">\n          Hey there!\n      </ListItem>\n      <ListItem chevron size="large">\n          Hey there!\n      </ListItem>\n      <ListItem chevron size="xlarge">\n          Hey there!\n      </ListItem>\n      <ListItem chevron size="xxlarge">\n          Hey there!\n      </ListItem>\n    </Stack>',
          },
        });
      const space = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'xxsmall'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'xsmall'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'small'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'medium'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'large'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'xlarge'},
            'Hey there!',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
            {chevron: !0, space: 'xxlarge'},
            'Hey there!',
          ),
        );
      (space.storyName = 'space'),
        (space.parameters = {
          storySource: {
            source:
              '<Stack>\n      <ListItem chevron space="xxsmall">\n          Hey there!\n      </ListItem>\n      <ListItem chevron space="xsmall">\n          Hey there!\n      </ListItem>\n      <ListItem chevron space="small">\n          Hey there!\n      </ListItem>\n      <ListItem chevron space="medium">\n          Hey there!\n      </ListItem>\n      <ListItem chevron space="large">\n          Hey there!\n      </ListItem>\n      <ListItem chevron space="xlarge">\n          Hey there!\n      </ListItem>\n      <ListItem chevron space="xxlarge">\n          Hey there!\n      </ListItem>\n    </Stack>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _ListItem__WEBPACK_IMPORTED_MODULE_8__.a,
          {
            chevron: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('chevron', !0),
            disabled: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('disabled', !1),
            size: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'size',
              [
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
            space: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
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
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('textColor', ['default', 'heading', 'subtle', 'gray'], 'gray'),
            subtitleColor: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'subtitleColor',
              ['default', 'heading', 'subtle', 'gray'],
              'gray',
            ),
            textAlign: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('center', ['auto', 'left', 'center', 'right', 'justify'], 'left'),
          },
          Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text)(
            'children',
            'Play around wit ListItem',
          ),
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<ListItem chevron={boolean('chevron', true)} disabled={boolean('disabled', false)} size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} space={select('space', ['none', 'xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} textColor={select('textColor', ['default', 'heading', 'subtle', 'gray'], 'gray')} subtitleColor={select('subtitleColor', ['default', 'heading', 'subtle', 'gray'], 'gray')} textAlign={select('center', ['auto', 'left', 'center', 'right', 'justify'], 'left')}>\n    {text('children', 'Play around wit ListItem')}\n  </ListItem>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1827: function(module, __webpack_exports__, __webpack_require__) {
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Overlay',
              component: _Overlay__WEBPACK_IMPORTED_MODULE_4__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'overlay'},
            'Overlay',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Overlay covers the view and adds a transparent layer on top of it. Any view can be passed as a children. Used generally as a prompt or notify user about something.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Overlay } from 'react-native-design-system';\n\n<Overlay visible={this.state.visible} onRequestClose={() => this.setState({ visible: false })}>\n  <View>\n    <Text>Hey there!</Text>\n  </View>\n</Overlay>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Overlay__WEBPACK_IMPORTED_MODULE_4__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'modal-props'},
            'Modal Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Accepts all the modal props like ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'visible={true}',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'onRequestClose',
            ),
            ', etc.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'styles'},
            'Styles',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'The container receives an ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'style',
            ),
            ' props and overlay can be customized with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'overlayStyle',
            ),
            ' which is the inside content on transparent layer.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'dimensions'},
            'Dimensions',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Overlay has a default width and height of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '80%',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '70%',
            ),
            '. It can be customized by passing ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'width',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'height',
            ),
            ' props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'border-radius'},
            'Border Radius',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Overlay curves can be customized with ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'borderRadius',
            ),
            ' prop, default is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '3',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'backgrounds'},
            'Backgrounds',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Container has a default background of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'semitransparent',
            ),
            ' and overlay is ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'clearWhite',
            ),
            ' from ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            ' of theme. You can pass any brandColor inside ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1828: function(module, __webpack_exports__, __webpack_require__) {
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
          2,
        ),
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'SearchBar',
              component: _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'searchbar'},
            'SearchBar',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'A SearchBar is a wrapper around ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'TextInput',
            ),
            ' with commonly used styles and easy to make customization. Receives all the props of ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Input',
            ),
            ' component.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { SearchBar } from 'react-native-design-system';\n\n<SearchBar\n  round\n  value={this.state.text}\n  onChangeText={text => handleChange(text)}\n/>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'type'},
            'Type',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'There are three types of button mainly: ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'default',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'round',
            ),
            ', and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'outline',
            ),
            '. You can pass boolean value ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'round={true}',
            ),
            ' for round button, ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'outline={true}',
            ),
            ' for outline button and nothing for default solid button.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'type', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'label'},
            'Label',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'label',
            ),
            ' to render a label string above SearchBar. You can customise label using ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'labelColor',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'labelStyle',
            ),
            ' props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'label', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'error-and-error-caption'},
            'Error and Error Caption',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'error={true}',
            ),
            ' when you want to show error and pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'errorCaption',
            ),
            ' string to render the string below SearchBar to notify user about the error.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'error', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'color',
            ),
            ' from brandColor to change outline color of SearchBar. Background is managed by ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' property inside theme. You can also directly pass a ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'background',
            ),
            ' prop with one of the colors in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'brandColor',
            ),
            '.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'disabled'},
            'Disabled',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'disabled={true}',
            ),
            ' property restrict any kind of action on SearchBar.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'disabled', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'oncancel'},
            'onCancel',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'pass a function to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'onCancel',
            ),
            ' to clear the input or cancel search. It will be triggered on clicking right icon. Cancel icon (right) will appear only when there is some text inside SearchBar. Right can be customised by passing any icon to ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' prop.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'onCancel', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'loading'},
            'Loading',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'loading={true}',
            ),
            ' to show a indicator while the search is going on.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'loading', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'size'},
            'Size',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'As usual, 7 available sized.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'size', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'xxsmall',
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'xsmall',
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'small',
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'medium',
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'large',
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'xlarge',
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
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                  {
                    outline: !0,
                    size: 'xxlarge',
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'icon'},
            'Icon',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'You can pass any icon via ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'leftIcon',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'rightIcon',
            ),
            ' props.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'blockquote',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'p',
              {parentName: 'blockquote'},
              'Icon size and color should be defined by developers manually according to button size.',
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'icon', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  outline: !0,
                  placeholder: 'Search for location',
                  leftIcon: Object(
                    _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx,
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with SearchBar in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'size',
                  [
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
                outline: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('outline', !1),
                round: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('round', !0),
                loading: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('loading', !0),
                value: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text,
                )('value', 'Type something'),
                error: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
                )('error', !1),
                errorCaption: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text,
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              value: '',
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_5__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'xxsmall',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'xsmall',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'small',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'medium',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'large',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'xlarge',
              placeholder: 'Enter username',
              value: '',
              loading: !0,
              onChangeText: text =>
                Object(
                  _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_4__.action,
                )('pressed'),
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
            {
              outline: !0,
              size: 'xxlarge',
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
              '<Stack>\n      <SearchBar outline size="xxsmall" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="xsmall" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="small" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="medium" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="large" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="xlarge" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n      <SearchBar outline size="xxlarge" placeholder="Enter username" value="" loading onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const icon = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            outline: !0,
            placeholder: 'Search for location',
            leftIcon: Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
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
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _SearchBar__WEBPACK_IMPORTED_MODULE_7__.a,
          {
            size: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'size',
              [
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
            outline: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('outline', !1),
            round: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('round', !0),
            loading: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('loading', !0),
            value: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text,
            )('value', 'Type something'),
            error: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean,
            )('error', !1),
            errorCaption: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text,
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
              "<SearchBar size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} outline={boolean('outline', false)} round={boolean('round', true)} loading={boolean('loading', true)} value={text('value', 'Type something')} error={boolean('error', false)} errorCaption={text('errorCaption', 'Please try again')} onChangeText={text => action('text changed')} onCancel={text => action('cancel triggered')} />",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1829: function(module, __webpack_exports__, __webpack_require__) {
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
        _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9),
        _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
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
        return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Meta,
            {
              title: 'Text',
              component: _Text__WEBPACK_IMPORTED_MODULE_5__.a,
              mdxType: 'Meta',
            },
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'text'},
            'Text',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Simple ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'Text',
            ),
            ' element that gives you different sizes and colors.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'usage'},
            'Usage',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'pre',
            null,
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { Text } from 'react-native-design-system';\n\n<Text>\n  Hello Design System\n</Text>\n",
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'props'},
            'Props',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Props,
            {of: _Text__WEBPACK_IMPORTED_MODULE_5__.a, mdxType: 'Props'},
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'sizes'},
            'Sizes',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            '7 available font sizes are ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '11',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '12.5',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '14',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '16',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '20',
            ),
            ', ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '26',
            ),
            ' and ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              '32',
            ),
            '. You can customize them in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'fontSize',
            ),
            ' property of theme.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'sizes', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'xxlarge', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'xlarge', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'large', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'medium', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'small', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'xsmall', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {size: 'xxsmall', mdxType: 'Text'},
                  'Hello Design System',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'color'},
            'Color',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Uses color defined in ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'textColor',
            ),
            ' in theme.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Preview,
            {mdxType: 'Preview'},
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
              {name: 'color', mdxType: 'Story'},
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
                {mdxType: 'Stack'},
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {color: 'default', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {color: 'heading', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {color: 'subtle', mdxType: 'Text'},
                  'Hello Design System',
                ),
                Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                  _Text__WEBPACK_IMPORTED_MODULE_5__.a,
                  {color: 'gray', mdxType: 'Text'},
                  'Hello Design System',
                ),
              ),
            ),
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'scale'},
            'Scale',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Pass ',
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'scale={false}',
            ),
            " if you don't want text to scale when device default font size changes. Default is ",
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'true',
            ),
            ' and text will scale accrording to default font size.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'h1',
            {id: 'playground'},
            'Playground',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            'p',
            null,
            'Play with Text in Canvas mode.',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.Story,
            {
              name: 'playground',
              parameters: {
                decorators: [
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
                ],
              },
              mdxType: 'Story',
            },
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _Text__WEBPACK_IMPORTED_MODULE_5__.a,
              {
                size: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )(
                  'size',
                  [
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
                color: Object(
                  _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
                )('color', ['default', 'heading', 'subtle', 'gray'], 'gray'),
                mdxType: 'Text',
              },
              'Hello World',
            ),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const sizes = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'xxlarge'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'xlarge'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'large'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'medium'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'small'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'xsmall'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {size: 'xxsmall'},
            'Hello Design System',
          ),
        );
      (sizes.storyName = 'sizes'),
        (sizes.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Text size="xxlarge">\n        Hello Design System\n      </Text>\n      <Text size="xlarge">\n        Hello Design System\n      </Text>\n      <Text size="large">\n        Hello Design System\n      </Text>\n      <Text size="medium">\n        Hello Design System\n      </Text>\n      <Text size="small">\n        Hello Design System\n      </Text>\n      <Text size="xsmall">\n        Hello Design System\n      </Text>\n      <Text size="xxsmall">\n        Hello Design System\n      </Text>\n    </Stack>',
          },
        });
      const color = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Layout_Stack__WEBPACK_IMPORTED_MODULE_4__.a,
          null,
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {color: 'default'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {color: 'heading'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {color: 'subtle'},
            'Hello Design System',
          ),
          Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
            _Text__WEBPACK_IMPORTED_MODULE_5__.a,
            {color: 'gray'},
            'Hello Design System',
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Text color="default">\n        Hello Design System\n      </Text>\n      <Text color="heading">\n        Hello Design System\n      </Text>\n      <Text color="subtle">\n        Hello Design System\n      </Text>\n      <Text color="gray">\n        Hello Design System\n      </Text>\n    </Stack>',
          },
        });
      const playground = () =>
        Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
          _Text__WEBPACK_IMPORTED_MODULE_5__.a,
          {
            size: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )(
              'size',
              [
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
            color: Object(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.select,
            )('color', ['default', 'heading', 'subtle', 'gray'], 'gray'),
          },
          'Hello World',
        );
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {
            source:
              "<Text size={select('size', ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'], 'medium')} color={select('color', ['default', 'heading', 'subtle', 'gray'], 'gray')}>\n  Hello World\n  </Text>",
          },
          decorators: [
            _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs,
          ],
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
            Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
              _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_2__.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.mdx)(
                MDXContent,
                null,
              ),
            ),
        }),
        (__webpack_exports__.default = componentMeta);
    },
    1830: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'decorators', function() {
          return decorators;
        });
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        cjs = (__webpack_require__(291),
        __webpack_require__(49),
        __webpack_require__(15),
        __webpack_require__(7),
        __webpack_require__(43),
        __webpack_require__(36),
        __webpack_require__(292),
        __webpack_require__(151),
        __webpack_require__(293),
        __webpack_require__(51),
        __webpack_require__(14),
        __webpack_require__(16),
        __webpack_require__(190),
        __webpack_require__(166),
        __webpack_require__(29),
        __webpack_require__(50),
        __webpack_require__(9),
        __webpack_require__(45),
        __webpack_require__(102),
        __webpack_require__(8),
        __webpack_require__(5)),
        prop_types = __webpack_require__(3),
        prop_types_default = __webpack_require__.n(prop_types),
        ThemeProvider = __webpack_require__(33);
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
            data = _ref.data;
          console.log({index: index, data: data});
          var childStyle = [{marginBottom: theme.layoutSpace[space]}];
          return (
            index === 0 &&
              childStyle.push({marginTop: theme.layoutSpace[space]}),
            horizontalSpace &&
              childStyle.push({
                marginHorizontal: theme.layoutSpace[horizontalSpace],
              }),
            cropEndSpace &&
              (index === 0 && childStyle.push({marginTop: 0}),
              index === data.length - 1 && childStyle.push({marginBottom: 0})),
            childStyle
          );
        },
        StackList_StackList = function StackList(props) {
          var theme = Object(ThemeProvider.b)();
          return react_default.a.createElement(
            cjs.FlatList,
            _extends({}, props, {
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
        };
      (StackList_StackList.displayName = 'StackList'),
        (StackList_StackList.propTypes = Object.assign(
          {
            style: prop_types_default.a.object,
            space: prop_types_default.a.oneOf([
              'none',
              'xxsmall',
              'xsmall',
              'small',
              'medium',
              'large',
              'xlarge',
              'xxlarge',
            ]),
            horizontalSpace: prop_types_default.a.oneOf([
              'none',
              'xxsmall',
              'xsmall',
              'small',
              'medium',
              'large',
              'xlarge',
              'xxlarge',
            ]),
            cropEndSpace: prop_types_default.a.bool,
          },
          cjs.FlatList.propTypes,
        )),
        (StackList_StackList.defaultProps = {
          space: 'medium',
          horizontalSpace: 'none',
          cropEndSpace: !0,
        }),
        (StackList_StackList.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'StackList',
          props: {
            space: {
              defaultValue: {value: "'medium'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'none'", computed: !1},
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            horizontalSpace: {
              defaultValue: {value: "'none'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'none'", computed: !1},
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            cropEndSpace: {
              defaultValue: {value: 'true', computed: !1},
              type: {name: 'bool'},
              required: !1,
              description: '',
            },
            style: {type: {name: 'object'}, required: !1, description: ''},
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
          docgenInfo: StackList_StackList.__docgenInfo,
          path: 'src/Layout/StackList.js',
        });
      var InlineList_getChildrenStyle = function getChildrenStyle(_ref, index) {
          var theme = _ref.theme,
            space = _ref.space,
            verticalSpace = _ref.verticalSpace,
            cropEndSpace = _ref.cropEndSpace,
            data = _ref.data,
            childStyle = [{marginRight: theme.layoutSpace[space]}];
          return (
            index === 0 &&
              childStyle.push({marginLeft: theme.layoutSpace[space]}),
            verticalSpace &&
              childStyle.push({
                marginVertical: theme.layoutSpace[verticalSpace],
              }),
            cropEndSpace &&
              (index === 0 && childStyle.push({marginLeft: 0}),
              index === data.length - 1 && childStyle.push({marginRight: 0})),
            childStyle
          );
        },
        InlineList_InlineList = function InlineList(props) {
          var theme = Object(ThemeProvider.b)();
          return react_default.a.createElement(
            cjs.FlatList,
            InlineList_extends({horizontal: !0}, props, {
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
        };
      (InlineList_InlineList.displayName = 'InlineList'),
        (InlineList_InlineList.propTypes = Object.assign(
          {
            style: prop_types_default.a.object,
            space: prop_types_default.a.oneOf([
              'none',
              'xxsmall',
              'xsmall',
              'small',
              'medium',
              'large',
              'xlarge',
              'xxlarge',
            ]),
            verticalSpace: prop_types_default.a.oneOf([
              'none',
              'xxsmall',
              'xsmall',
              'small',
              'medium',
              'large',
              'xlarge',
              'xxlarge',
            ]),
            cropEndSpace: prop_types_default.a.bool,
          },
          cjs.FlatList.propTypes,
        )),
        (InlineList_InlineList.defaultProps = {
          space: 'medium',
          verticalSpace: 'none',
          cropEndSpace: !0,
        }),
        (InlineList_InlineList.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'InlineList',
          props: {
            space: {
              defaultValue: {value: "'medium'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'none'", computed: !1},
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            verticalSpace: {
              defaultValue: {value: "'none'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'none'", computed: !1},
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            cropEndSpace: {
              defaultValue: {value: 'true', computed: !1},
              type: {name: 'bool'},
              required: !1,
              description: '',
            },
            style: {type: {name: 'object'}, required: !1, description: ''},
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
          docgenInfo: InlineList_InlineList.__docgenInfo,
          path: 'src/Layout/InlineList.js',
        });
      var TileList_getChildrenStyle = function getChildrenStyle(_ref, index) {
          var theme = _ref.theme,
            space = _ref.space;
          _ref.horizontalSpace, _ref.cropEndSpace, _ref.data;
          return [
            {
              marginLeft: theme.layoutSpace[space],
              marginTop: theme.layoutSpace[space],
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
            style: prop_types_default.a.object,
            space: prop_types_default.a.oneOf([
              'none',
              'xxsmall',
              'xsmall',
              'small',
              'medium',
              'large',
              'xlarge',
              'xxlarge',
            ]),
            horizontalSpace: prop_types_default.a.oneOf([
              'none',
              'xxsmall',
              'xsmall',
              'small',
              'medium',
              'large',
              'xlarge',
              'xxlarge',
            ]),
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
              defaultValue: {value: "'medium'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'none'", computed: !1},
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            horizontalSpace: {
              defaultValue: {value: "'none'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'none'", computed: !1},
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            cropEndSpace: {
              defaultValue: {value: 'false', computed: !1},
              type: {name: 'bool'},
              required: !1,
              description: '',
            },
            style: {type: {name: 'object'}, required: !1, description: ''},
          },
          composes: ['react-native'],
        });
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Layout/TileList.js'] = {
          name: 'TileList',
          docgenInfo: TileList_TileList.__docgenInfo,
          path: 'src/Layout/TileList.js',
        });
      __webpack_require__(153);
      var colors = __webpack_require__(61),
        util_theme = {
          fontSize: {
            xxsmall: 11,
            xsmall: 12.5,
            small: 14,
            medium: 16,
            large: 20,
            xlarge: 26,
            xxlarge: 32,
          },
          size: {
            xxsmall: 10,
            xsmall: 12,
            small: 14,
            medium: 16,
            large: 18,
            xlarge: 20,
            xxlarge: 22,
          },
          actionButtonSize: {
            xxsmall: 30,
            xsmall: 40,
            small: 50,
            medium: 60,
            large: 70,
            xlarge: 80,
            xxlarge: 90,
          },
          buttonSize: {
            xxsmall: 8,
            xsmall: 10,
            small: 12,
            medium: 14,
            large: 16,
            xlarge: 18,
            xxlarge: 20,
          },
          buttonWidth: {
            xxsmall: 100,
            xsmall: 120,
            small: 140,
            medium: 160,
            large: 180,
            xlarge: 200,
            xxlarge: 220,
          },
          iconSize: {
            xxsmall: 16,
            xsmall: 18,
            small: 22,
            medium: 26,
            large: 28,
            xlarge: 32,
            xxlarge: 36,
          },
          avatarSize: {
            xxsmall: 40,
            xsmall: 60,
            small: 80,
            medium: 90,
            large: 110,
            xlarge: 120,
            xxlarge: 140,
          },
          badgeSize: {
            xxsmall: 10,
            xsmall: 11,
            small: 12,
            medium: 13,
            large: 14,
            xlarge: 16,
            xxlarge: 18,
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
          listItemSpace: {
            xxsmall: 5,
            xsmall: 7.5,
            small: 10,
            medium: 12,
            large: 14,
            xlarge: 16,
            xxlarge: 18,
          },
          space: {
            none: 0,
            xxsmall: 2.5,
            xsmall: 5,
            small: 7.5,
            medium: 10,
            large: 12.5,
            xlarge: 15,
            xxlarge: 20,
          },
          layoutSpace: {
            none: 0,
            xxsmall: 5,
            xsmall: 10,
            small: 12,
            medium: 16,
            large: 20,
            xlarge: 24,
            xxlarge: 32,
          },
          indicatorSize: {
            xxsmall: 0.8,
            xsmall: 0.9,
            small: 1,
            medium: 1.1,
            large: 1.25,
            xlarge: 1.5,
            xxlarge: 1.7,
          },
          fontFamily: {heading: 'FontAwesome', text: 'FontAwesome'},
          textColor: {
            default: colors.a.black[300],
            heading: colors.a.black[800],
            subtle: colors.a.black[100],
            gray: colors.a.gray[600],
            disabled: colors.a.bluegray[400],
            white: colors.a.blue[50],
          },
          brandColor: {
            primary: colors.a.blue[600],
            secondary: colors.a.yellow[800],
            tertiary: colors.a.red[600],
            background: '#f8f8f8',
            disabled: colors.a.bluegray[100],
            white: colors.a.blue[50],
            semitransparent: 'rgba(0, 0, 0, 0.3)',
            gray: colors.a.gray[200],
            clearWhite: '#fff',
            outline: colors.a.gray[400],
          },
        },
        decorators = [
          function(Story) {
            return react_default.a.createElement(
              ThemeProvider.a,
              {value: util_theme},
              react_default.a.createElement(Story, null),
            );
          },
        ];
    },
    1835: function(module, __webpack_exports__, __webpack_require__) {
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
        dist = __webpack_require__(6),
        addon_actions_dist = __webpack_require__(2),
        Stack = __webpack_require__(9),
        AntDesign = __webpack_require__(96),
        AntDesign_default = __webpack_require__.n(AntDesign),
        MenuAddButton = __webpack_require__(43);
      __webpack_require__(10),
        __webpack_require__(19),
        __webpack_require__(31),
        __webpack_require__(41),
        __webpack_require__(24),
        __webpack_require__(25),
        __webpack_require__(23),
        __webpack_require__(27),
        __webpack_require__(12),
        __webpack_require__(21),
        __webpack_require__(30),
        __webpack_require__(26),
        __webpack_require__(28);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              typeof Symbol === 'undefined' ||
              !(Symbol.iterator in Object(arr))
            ) {
              return;
            }
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
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
          size: Object(dist.select)(
            'size',
            [
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
          disabled: Object(dist.boolean)('disabled', !1),
          onIncrement: function onIncrement() {
            return setCount(count + 1);
          },
          onDecrement: function onDecrement() {
            return setCount(count - 1);
          },
          iconColor: Object(dist.color)('iconColor', '#333'),
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
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: 'MenuAddButton',
            component: MenuAddButton.a,
            mdxType: 'Meta',
          }),
          Object(esm.mdx)('h1', {id: 'menuaddbutton'}, 'MenuAddButton'),
          Object(esm.mdx)(
            'p',
            null,
            'A ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'MenuAddButton'),
            ' is a clickable button to carry out actions like adding and removing items from cart.',
          ),
          Object(esm.mdx)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.mdx)(
            'pre',
            null,
            Object(esm.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { MenuAddButton } from 'react-native-design-system';\n\n<MenuAddButton\n  onIncrement={() => handleIncrement())}\n  onDecrement={() => handleDecrement())}\n  count={this.state.count}\n/>\n",
            ),
          ),
          Object(esm.mdx)('h1', {id: 'props'}, 'Props'),
          Object(esm.mdx)(blocks.Props, {
            of: MenuAddButton.a,
            mdxType: 'Props',
          }),
          Object(esm.mdx)('h1', {id: 'count'}, 'Count'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass an ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'Integer'),
            ' value in ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'count'),
            ' prop as number of items.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'count', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 0,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 5,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 25,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 100,
                  mdxType: 'MenuAddButton',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'disabled'}, 'Disabled'),
          Object(esm.mdx)(
            'p',
            null,
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'disabled'),
            ' accepts a boolean value and restricts touch response. ',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'disabled', mdxType: 'Story'},
              Object(esm.mdx)(MenuAddButton.a, {
                disabled: !0,
                onIncrement: Object(addon_actions_dist.action)('pressed'),
                onDecrement: Object(addon_actions_dist.action)('pressed'),
                count: 0,
                mdxType: 'MenuAddButton',
              }),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'size'}, 'Size'),
          Object(esm.mdx)(
            'p',
            null,
            "There are 7 different size available. You may not need all of them but it doesn't hurt to have them just in case. 😅",
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'size', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(MenuAddButton.a, {
                  size: 'xxsmall',
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 0,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  size: 'xsmall',
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 2,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  size: 'small',
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 10,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  size: 'medium',
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 50,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  size: 'large',
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 100,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  size: 'xlarge',
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 500,
                  mdxType: 'MenuAddButton',
                }),
                Object(esm.mdx)(MenuAddButton.a, {
                  size: 'xxlarge',
                  onIncrement: Object(addon_actions_dist.action)('pressed'),
                  onDecrement: Object(addon_actions_dist.action)('pressed'),
                  count: 2020,
                  mdxType: 'MenuAddButton',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'custom-icons'}, 'Custom icons'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass custom icon as ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'plusIcon'),
            ' and ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'minusIcon'),
            ' of your choice.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'custom', mdxType: 'Story'},
              Object(esm.mdx)(MenuAddButton.a, {
                onIncrement: Object(addon_actions_dist.action)('pressed'),
                onDecrement: Object(addon_actions_dist.action)('pressed'),
                plusIcon: Object(esm.mdx)(AntDesign_default.a, {
                  name: 'like2',
                  size: 24,
                  color: 'black',
                  mdxType: 'AntDesign',
                }),
                minusIcon: Object(esm.mdx)(AntDesign_default.a, {
                  name: 'dislike2',
                  size: 24,
                  color: 'black',
                  mdxType: 'AntDesign',
                }),
                count: 10,
                mdxType: 'MenuAddButton',
              }),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.mdx)('p', null, 'Play with MenuAddButton in Canvas mode.'),
          Object(esm.mdx)(
            blocks.Story,
            {
              name: 'playground',
              parameters: {decorators: [dist.withKnobs]},
              mdxType: 'Story',
            },
            Object(esm.mdx)(ExampleMenuButton, {mdxType: 'ExampleMenuButton'}),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const MenuAddButton_stories_count = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 0,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 5,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 25,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
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
        Object(esm.mdx)(MenuAddButton.a, {
          disabled: !0,
          onIncrement: Object(addon_actions_dist.action)('pressed'),
          onDecrement: Object(addon_actions_dist.action)('pressed'),
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
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(MenuAddButton.a, {
            size: 'xxsmall',
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 0,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            size: 'xsmall',
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 2,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            size: 'small',
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 10,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            size: 'medium',
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 50,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            size: 'large',
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 100,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            size: 'xlarge',
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 500,
          }),
          Object(esm.mdx)(MenuAddButton.a, {
            size: 'xxlarge',
            onIncrement: Object(addon_actions_dist.action)('pressed'),
            onDecrement: Object(addon_actions_dist.action)('pressed'),
            count: 2020,
          }),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              "<Stack>\n      <MenuAddButton size=\"xxsmall\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={0} />\n      <MenuAddButton size=\"xsmall\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={2} />\n      <MenuAddButton size=\"small\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={10} />\n      <MenuAddButton size=\"medium\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={50} />\n      <MenuAddButton size=\"large\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={100} />\n      <MenuAddButton size=\"xlarge\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={500} />\n      <MenuAddButton size=\"xxlarge\" onIncrement={action('pressed')} onDecrement={action('pressed')} count={2020} />\n    </Stack>",
          },
        });
      const custom = () =>
        Object(esm.mdx)(MenuAddButton.a, {
          onIncrement: Object(addon_actions_dist.action)('pressed'),
          onDecrement: Object(addon_actions_dist.action)('pressed'),
          plusIcon: Object(esm.mdx)(AntDesign_default.a, {
            name: 'like2',
            size: 24,
            color: 'black',
          }),
          minusIcon: Object(esm.mdx)(AntDesign_default.a, {
            name: 'dislike2',
            size: 24,
            color: 'black',
          }),
          count: 10,
        });
      (custom.storyName = 'custom'),
        (custom.parameters = {
          storySource: {
            source:
              '<MenuAddButton onIncrement={action(\'pressed\')} onDecrement={action(\'pressed\')} plusIcon={<AntDesign name="like2" size={24} color="black" />} minusIcon={<AntDesign name="dislike2" size={24} color="black" />} count={10} />',
          },
        });
      const playground = () => Object(esm.mdx)(ExampleMenuButton, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleMenuButton />'},
          decorators: [dist.withKnobs],
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
            Object(esm.mdx)(
              blocks.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.mdx)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    1836: function(module, __webpack_exports__, __webpack_require__) {
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
        dist = __webpack_require__(6),
        Stack = (__webpack_require__(2), __webpack_require__(9)),
        Ionicons = __webpack_require__(103),
        Ionicons_default = __webpack_require__.n(Ionicons),
        CheckBox = __webpack_require__(34),
        src_CheckBox = (__webpack_require__(10),
        __webpack_require__(19),
        __webpack_require__(31),
        __webpack_require__(41),
        __webpack_require__(24),
        __webpack_require__(25),
        __webpack_require__(23),
        __webpack_require__(27),
        __webpack_require__(12),
        __webpack_require__(21),
        __webpack_require__(30),
        __webpack_require__(26),
        __webpack_require__(28),
        __webpack_require__(292));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              typeof Symbol === 'undefined' ||
              !(Symbol.iterator in Object(arr))
            ) {
              return;
            }
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
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
            size: Object(dist.select)(
              'size',
              [
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
            checked: value,
            iconRight: Object(dist.boolean)('iconRight', !1),
            color: Object(dist.select)(
              'color',
              ['primary', 'secondary', 'tertiary'],
              'primary',
            ),
            textColor: Object(dist.select)(
              'textColor',
              ['heading', 'default', 'subtle', 'gray'],
              'default',
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
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: 'CheckBox',
            component: CheckBox.a,
            mdxType: 'Meta',
          }),
          Object(esm.mdx)('h1', {id: 'checkbox'}, 'CheckBox'),
          Object(esm.mdx)(
            'p',
            null,
            'Use ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'CheckBox'),
            ' when looking for yes or no answers.',
          ),
          Object(esm.mdx)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.mdx)(
            'pre',
            null,
            Object(esm.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              "import { CheckBox } from 'react-native-design-system';\n\n<CheckBox checked={this.state.checked} onPress={() => this.setState({ checked: !this.state.checked })}>\n    Hello CheckBox\n</CheckBox>\n",
            ),
          ),
          Object(esm.mdx)('h1', {id: 'props'}, 'Props'),
          Object(esm.mdx)(blocks.Props, {of: CheckBox.a, mdxType: 'Props'}),
          Object(esm.mdx)('h1', {id: 'size'}, 'Size'),
          Object(esm.mdx)(
            'p',
            null,
            'There are 7 sizes available bases on fontSize.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'size', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  CheckBox.a,
                  {size: 'xxsmall', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {size: 'xsmall', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {size: 'small', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {size: 'medium', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {size: 'large', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {size: 'xlarge', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {size: 'xxlarge', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'right-align-icon'}, 'Right align icon'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'iconRight={true}',
            ),
            ' to shift checkbox icon to right.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'iconRight', mdxType: 'Story'},
              Object(esm.mdx)(
                CheckBox.a,
                {iconRight: !0, mdxType: 'CheckBox'},
                'Hello CheckBox',
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'checked'}, 'Checked'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'checked={true}'),
            ' to select checkbox.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'checked', mdxType: 'Story'},
              Object(esm.mdx)(
                CheckBox.a,
                {checked: !0, mdxType: 'CheckBox'},
                'Hello CheckBox',
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'color'}, 'Color'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'color'),
            ' to select from three available brand colors.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'color', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  CheckBox.a,
                  {color: 'primary', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {color: 'secondary', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {color: 'tertiary', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'text-color'}, 'Text color'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'textColor'),
            ' to select from available brand text colors.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'textColor', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  CheckBox.a,
                  {textColor: 'heading', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {textColor: 'para', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {textColor: 'subtle', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {textColor: 'gray', mdxType: 'CheckBox'},
                  'Hello CheckBox',
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'custom-icons'}, 'Custom icons'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass custom icons via  ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'checkedIcon'),
            ' and ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'uncheckedIcon'),
            ' prop. Size and color will be manually set by developer.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'icons', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  CheckBox.a,
                  {
                    checked: !1,
                    checkedIcon: Object(esm.mdx)(Ionicons_default.a, {
                      name: 'ios-radio-button-on',
                      size: 24,
                      color: '#1e88e5',
                      mdxType: 'Ionicons',
                    }),
                    uncheckedIcon: Object(esm.mdx)(Ionicons_default.a, {
                      name: 'ios-radio-button-off',
                      size: 24,
                      color: '#1e88e5',
                      mdxType: 'Ionicons',
                    }),
                    mdxType: 'CheckBox',
                  },
                  'Hello CheckBox',
                ),
                Object(esm.mdx)(
                  CheckBox.a,
                  {
                    checked: !0,
                    checkedIcon: Object(esm.mdx)(Ionicons_default.a, {
                      name: 'ios-radio-button-on',
                      size: 24,
                      color: '#1e88e5',
                      mdxType: 'Ionicons',
                    }),
                    uncheckedIcon: Object(esm.mdx)(Ionicons_default.a, {
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
          Object(esm.mdx)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.mdx)('p', null, 'Play with CheckBox in Canvas mode.'),
          Object(esm.mdx)(
            blocks.Story,
            {
              name: 'playground',
              parameters: {decorators: [dist.withKnobs]},
              mdxType: 'Story',
            },
            Object(esm.mdx)(ExampleRadioButton, {mdxType: 'ExampleCheckBox'}),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const size = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(CheckBox.a, {size: 'xxsmall'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {size: 'xsmall'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {size: 'small'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {size: 'medium'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {size: 'large'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {size: 'xlarge'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {size: 'xxlarge'}, 'Hello CheckBox'),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <CheckBox size="xxsmall">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox size="xsmall">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox size="small">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox size="medium">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox size="large">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox size="xlarge">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox size="xxlarge">\n        Hello CheckBox\n      </CheckBox>\n    </Stack>',
          },
        });
      const iconRight = () =>
        Object(esm.mdx)(CheckBox.a, {iconRight: !0}, 'Hello CheckBox');
      (iconRight.storyName = 'iconRight'),
        (iconRight.parameters = {
          storySource: {
            source:
              '<CheckBox iconRight>\n        Hello CheckBox\n    </CheckBox>',
          },
        });
      const checked = () =>
        Object(esm.mdx)(CheckBox.a, {checked: !0}, 'Hello CheckBox');
      (checked.storyName = 'checked'),
        (checked.parameters = {
          storySource: {
            source:
              '<CheckBox checked>\n        Hello CheckBox\n    </CheckBox>',
          },
        });
      const color = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(CheckBox.a, {color: 'primary'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {color: 'secondary'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {color: 'tertiary'}, 'Hello CheckBox'),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <CheckBox color="primary">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox color="secondary">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox color="tertiary">\n        Hello CheckBox\n      </CheckBox>\n    </Stack>',
          },
        });
      const textColor = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(CheckBox.a, {textColor: 'heading'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {textColor: 'para'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {textColor: 'subtle'}, 'Hello CheckBox'),
          Object(esm.mdx)(CheckBox.a, {textColor: 'gray'}, 'Hello CheckBox'),
        );
      (textColor.storyName = 'textColor'),
        (textColor.parameters = {
          storySource: {
            source:
              '<Stack>\n      <CheckBox textColor="heading">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox textColor="default">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox textColor="subtle">\n        Hello CheckBox\n      </CheckBox>\n      <CheckBox textColor="gray">\n        Hello CheckBox\n      </CheckBox>\n    </Stack>',
          },
        });
      const icons = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(
            CheckBox.a,
            {
              checked: !1,
              checkedIcon: Object(esm.mdx)(Ionicons_default.a, {
                name: 'ios-radio-button-on',
                size: 24,
                color: '#1e88e5',
              }),
              uncheckedIcon: Object(esm.mdx)(Ionicons_default.a, {
                name: 'ios-radio-button-off',
                size: 24,
                color: '#1e88e5',
              }),
            },
            'Hello CheckBox',
          ),
          Object(esm.mdx)(
            CheckBox.a,
            {
              checked: !0,
              checkedIcon: Object(esm.mdx)(Ionicons_default.a, {
                name: 'ios-radio-button-on',
                size: 24,
                color: '#1e88e5',
              }),
              uncheckedIcon: Object(esm.mdx)(Ionicons_default.a, {
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
      const playground = () => Object(esm.mdx)(ExampleRadioButton, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleCheckBox />'},
          decorators: [dist.withKnobs],
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
            Object(esm.mdx)(
              blocks.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.mdx)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    1837: function(module, __webpack_exports__, __webpack_require__) {
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
        dist = __webpack_require__(6),
        addon_actions_dist = __webpack_require__(2),
        Stack = __webpack_require__(9),
        Feather = __webpack_require__(48),
        Feather_default = __webpack_require__.n(Feather),
        Input = __webpack_require__(14);
      __webpack_require__(10),
        __webpack_require__(19),
        __webpack_require__(31),
        __webpack_require__(41),
        __webpack_require__(24),
        __webpack_require__(25),
        __webpack_require__(23),
        __webpack_require__(27),
        __webpack_require__(12),
        __webpack_require__(21),
        __webpack_require__(30),
        __webpack_require__(26),
        __webpack_require__(28);
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              typeof Symbol === 'undefined' ||
              !(Symbol.iterator in Object(arr))
            ) {
              return;
            }
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
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
          size: Object(dist.select)(
            'size',
            [
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
          outline: Object(dist.boolean)('outline', !0),
          round: Object(dist.boolean)('round', !1),
          label: Object(dist.text)('label', 'Username'),
          labelColor: Object(dist.select)(
            'labelColor',
            ['default', 'heading', 'subtle', 'gray'],
            'gray',
          ),
          placeholder: Object(dist.text)('placeholder', 'Enter Username'),
          error: Object(dist.boolean)('error', !1),
          floatingLabel: Object(dist.boolean)('floatingLabel', !1),
          errorCaption: Object(dist.text)(
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
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: 'Input',
            component: Input.a,
            mdxType: 'Meta',
          }),
          Object(esm.mdx)('h1', {id: 'input'}, 'Input'),
          Object(esm.mdx)(
            'p',
            null,
            'A Input is a wrapper around ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'TextInput'),
            ' with commonly used styles and easy to make customization.',
          ),
          Object(esm.mdx)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.mdx)(
            'pre',
            null,
            Object(esm.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              'import { Input } from \'react-native-design-system\';\n\n <Input\n  placeholder="Start typing here"\n  value=""\n  onChangeText={text => handleChange(text)}\n/>\n',
            ),
          ),
          Object(esm.mdx)('h1', {id: 'props'}, 'Props'),
          Object(esm.mdx)(blocks.Props, {of: Input.a, mdxType: 'Props'}),
          Object(esm.mdx)('h1', {id: 'type'}, 'Type'),
          Object(esm.mdx)(
            'p',
            null,
            'There are three types of button mainly: ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'default'),
            ', ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'round'),
            ', and ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'outline'),
            '. You can pass boolean value ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'round={true}'),
            ' for round button, ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'outline={true}'),
            ' for outline button and nothing for default solid button.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'type', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(Input.a, {
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  round: !0,
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  round: !0,
                  placeholder: 'Start typing',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'label'}, 'Label'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'label'),
            ' to render a label string above input. You can customise label using ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'labelColor'),
            ' and ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'labelStyle'),
            ' props.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'label', mdxType: 'Story'},
              Object(esm.mdx)(Input.a, {
                outline: !0,
                label: 'Username',
                placeholder: 'Enter Username',
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.mdx)(
            'h1',
            {id: 'error-and-error-caption'},
            'Error and Error Caption',
          ),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'error={true}'),
            ' when you want to show error and pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'errorCaption'),
            ' string to render the string below input to notify user about the error.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'error', mdxType: 'Story'},
              Object(esm.mdx)(Input.a, {
                outline: !0,
                error: !0,
                placeholder: 'Enter username',
                value: '',
                errorCaption: 'Please check the username again',
                onChangeText: text =>
                  Object(addon_actions_dist.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'color'}, 'Color'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'color'),
            ' from brandColor to change outline color of input. Background is managed by ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'background'),
            ' property inside theme. You can also directly pass a ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'background'),
            ' prop with one of the colors in ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'brandColor'),
            '.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'color', mdxType: 'Story'},
              Object(esm.mdx)(Input.a, {
                outline: !0,
                color: 'secondary',
                placeholder: 'Enter username',
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'disabled'}, 'Disabled'),
          Object(esm.mdx)(
            'p',
            null,
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'disabled={true}'),
            ' property restrict any kind of action on input.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'disabled', mdxType: 'Story'},
              Object(esm.mdx)(Input.a, {
                outline: !0,
                disabled: !0,
                placeholder: 'Enter username',
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'size'}, 'Size'),
          Object(esm.mdx)('p', null, 'As usual, 7 available sized.'),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'size', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  size: 'xxsmall',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  size: 'xsmall',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  size: 'small',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  size: 'medium',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  size: 'large',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  size: 'xlarge',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
                Object(esm.mdx)(Input.a, {
                  outline: !0,
                  size: 'xxlarge',
                  placeholder: 'Enter username',
                  value: '',
                  onChangeText: text =>
                    Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'Input',
                }),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'icon'}, 'Icon'),
          Object(esm.mdx)(
            'p',
            null,
            'You can pass any icon via ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'leftIcon'),
            ' and ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'rightIcon'),
            ' props.',
          ),
          Object(esm.mdx)(
            'blockquote',
            null,
            Object(esm.mdx)(
              'p',
              {parentName: 'blockquote'},
              'Icon size and color should be defined by developers manually according to button size.',
            ),
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'icon', mdxType: 'Story'},
              Object(esm.mdx)(Input.a, {
                outline: !0,
                placeholder: 'Enter username',
                leftIcon: Object(esm.mdx)(Feather_default.a, {
                  name: 'user',
                  size: 22,
                  color: 'gray',
                  mdxType: 'Feather',
                }),
                value: '',
                onChangeText: text =>
                  Object(addon_actions_dist.action)('pressed'),
                mdxType: 'Input',
              }),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'floatinglabel'}, 'floatingLabel'),
          Object(esm.mdx)(
            'p',
            null,
            'A boolean value to make the label float. Label will appear as soon as youn start typing. ',
          ),
          Object(esm.mdx)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.mdx)('p', null, 'Play with Input in Canvas mode.'),
          Object(esm.mdx)(
            blocks.Story,
            {
              name: 'playground',
              parameters: {decorators: [dist.withKnobs]},
              mdxType: 'Story',
            },
            Object(esm.mdx)(ExampleInput, {mdxType: 'ExampleInput'}),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const type = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(Input.a, {
            placeholder: 'Start typing',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            round: !0,
            placeholder: 'Start typing',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            placeholder: 'Start typing',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            round: !0,
            placeholder: 'Start typing',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
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
        Object(esm.mdx)(Input.a, {
          outline: !0,
          label: 'Username',
          placeholder: 'Enter Username',
          value: '',
          onChangeText: text => Object(addon_actions_dist.action)('pressed'),
        });
      (label.storyName = 'label'),
        (label.parameters = {
          storySource: {
            source:
              '<Input outline label="Username" placeholder="Enter Username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const error = () =>
        Object(esm.mdx)(Input.a, {
          outline: !0,
          error: !0,
          placeholder: 'Enter username',
          value: '',
          errorCaption: 'Please check the username again',
          onChangeText: text => Object(addon_actions_dist.action)('pressed'),
        });
      (error.storyName = 'error'),
        (error.parameters = {
          storySource: {
            source:
              '<Input outline error={true} placeholder="Enter username" value="" errorCaption="Please check the username again" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const color = () =>
        Object(esm.mdx)(Input.a, {
          outline: !0,
          color: 'secondary',
          placeholder: 'Enter username',
          value: '',
          onChangeText: text => Object(addon_actions_dist.action)('pressed'),
        });
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Input outline color="secondary" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const disabled = () =>
        Object(esm.mdx)(Input.a, {
          outline: !0,
          disabled: !0,
          placeholder: 'Enter username',
          value: '',
          onChangeText: text => Object(addon_actions_dist.action)('pressed'),
        });
      (disabled.storyName = 'disabled'),
        (disabled.parameters = {
          storySource: {
            source:
              '<Input outline disabled placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const size = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(Input.a, {
            outline: !0,
            size: 'xxsmall',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            size: 'xsmall',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            size: 'small',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            size: 'medium',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            size: 'large',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            size: 'xlarge',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
          Object(esm.mdx)(Input.a, {
            outline: !0,
            size: 'xxlarge',
            placeholder: 'Enter username',
            value: '',
            onChangeText: text => Object(addon_actions_dist.action)('pressed'),
          }),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <Input outline size="xxsmall" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="xsmall" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="small" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="medium" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="large" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="xlarge" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n      <Input outline size="xxlarge" placeholder="Enter username" value="" onChangeText={text => action(\'pressed\')} />\n    </Stack>',
          },
        });
      const icon = () =>
        Object(esm.mdx)(Input.a, {
          outline: !0,
          placeholder: 'Enter username',
          leftIcon: Object(esm.mdx)(Feather_default.a, {
            name: 'user',
            size: 22,
            color: 'gray',
          }),
          value: '',
          onChangeText: text => Object(addon_actions_dist.action)('pressed'),
        });
      (icon.storyName = 'icon'),
        (icon.parameters = {
          storySource: {
            source:
              '<Input outline placeholder="Enter username" leftIcon={<Feather name="user" size={22} color="gray" />} value="" onChangeText={text => action(\'pressed\')} />',
          },
        });
      const playground = () => Object(esm.mdx)(ExampleInput, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleInput />'},
          decorators: [dist.withKnobs],
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
            Object(esm.mdx)(
              blocks.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.mdx)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    1838: function(module, __webpack_exports__, __webpack_require__) {
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
        dist = __webpack_require__(6),
        addon_actions_dist = __webpack_require__(2),
        AntDesign = __webpack_require__(96),
        AntDesign_default = __webpack_require__.n(AntDesign),
        RadioButton = __webpack_require__(11),
        Stack = __webpack_require__(9),
        src_RadioButton = (__webpack_require__(10),
        __webpack_require__(19),
        __webpack_require__(31),
        __webpack_require__(41),
        __webpack_require__(24),
        __webpack_require__(25),
        __webpack_require__(23),
        __webpack_require__(27),
        __webpack_require__(12),
        __webpack_require__(21),
        __webpack_require__(30),
        __webpack_require__(26),
        __webpack_require__(28),
        __webpack_require__(166));
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) {
              return arr;
            }
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if (
              typeof Symbol === 'undefined' ||
              !(Symbol.iterator in Object(arr))
            ) {
              return;
            }
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
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
            size: Object(dist.select)(
              'size',
              [
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
            activeId: activeId,
            iconRight: Object(dist.boolean)('iconRight', !1),
            color: Object(dist.select)(
              'color',
              ['primary', 'secondary', 'tertiary'],
              'primary',
            ),
            textColor: Object(dist.select)(
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
        return Object(esm.mdx)(
          'wrapper',
          _extends({}, layoutProps, props, {
            components: components,
            mdxType: 'MDXLayout',
          }),
          Object(esm.mdx)(blocks.Meta, {
            title: 'RadioButton',
            component: RadioButton.b,
            mdxType: 'Meta',
          }),
          Object(esm.mdx)('h1', {id: 'radiobutton'}, 'RadioButton'),
          Object(esm.mdx)(
            'p',
            null,
            'A RadioButton is a graphical control element that allows the user to choose only one of a predefined set of mutually exclusive options.',
          ),
          Object(esm.mdx)('h1', {id: 'usage'}, 'Usage'),
          Object(esm.mdx)(
            'pre',
            null,
            Object(esm.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-js'}),
              'import { RadioButton, RadioItem } from \'react-native-design-system\';\n\n<RadioButton activeId={activeId} selectItem={(id) => selectItemHandler(id)}>\n    <RadioItem id="a">\n      Option A\n    </RadioItem>\n    <RadioItem id="b">\n      Option B\n    </RadioItem>\n    <RadioItem id="c">\n      Option C\n    </RadioItem>\n</RadioButton>\n',
            ),
          ),
          Object(esm.mdx)('h1', {id: 'props'}, 'Props'),
          Object(esm.mdx)(blocks.Props, {of: RadioButton.b, mdxType: 'Props'}),
          Object(esm.mdx)(
            'h1',
            {id: 'radiobutton-and-radioitem'},
            'RadioButton and RadioItem',
          ),
          Object(esm.mdx)(
            'p',
            null,
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'RadioButton'),
            ' and ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'RadioItem'),
            ' are used together as compound component.',
          ),
          Object(esm.mdx)(
            'pre',
            null,
            Object(esm.mdx)(
              'code',
              _extends({parentName: 'pre'}, {className: 'language-jsx'}),
              'import RadioButton, { RadioItem } from \'react-native-design-system\';\n\n<RadioButton activeId={activeId} selectItem={(id) => selectItemHandler(id)}>\n    <RadioItem id="a">\n      Option A\n    </RadioItem>\n    <RadioItem id="b">\n      Option B\n    </RadioItem>\n    <RadioItem id="c">\n      Option C\n    </RadioItem>\n</RadioButton>\n',
            ),
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'usage', mdxType: 'Story'},
              Object(esm.mdx)(
                RadioButton.b,
                {activeId: 'a', mdxType: 'RadioButton'},
                Object(esm.mdx)(
                  RadioButton.a,
                  {id: 'a', mdxType: 'RadioItem'},
                  'Option A',
                ),
                Object(esm.mdx)(
                  RadioButton.a,
                  {id: 'b', mdxType: 'RadioItem'},
                  'Option B',
                ),
                Object(esm.mdx)(
                  RadioButton.a,
                  {id: 'c', mdxType: 'RadioItem'},
                  'Option C',
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'size'}, 'Size'),
          Object(esm.mdx)(
            'p',
            null,
            'There are 7 sizes available bases on fontSize. Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'size'),
            ' prop to parent ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'RadioButton'),
            ' component to size all ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'RadioItem'),
            's.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'size', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'xxsmall',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'xsmall',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'small',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'medium',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'large',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'xlarge',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    size: 'xxlarge',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'right-align-icon'}, 'Right align icon'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)(
              'inlineCode',
              {parentName: 'p'},
              'iconRight={true}',
            ),
            ' to shift checkbox icon to right.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'iconRight', mdxType: 'Story'},
              Object(esm.mdx)(
                RadioButton.b,
                {
                  activeId: 'a',
                  iconRight: !0,
                  selectItem: Object(addon_actions_dist.action)('pressed'),
                  mdxType: 'RadioButton',
                },
                Object(esm.mdx)(
                  RadioButton.a,
                  {id: 'a', mdxType: 'RadioItem'},
                  'Option A',
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'activeid'}, 'activeId'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'activeId'),
            ' which equals to one of the ids passed to children ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'RadioItem'),
            '. ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'selectItem'),
            ' function received an ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'id'),
            ' which can be used to update ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'activeId'),
            '. Click on ',
            Object(esm.mdx)('strong', {parentName: 'p'}, 'Show code'),
            ' for info.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'activeId', mdxType: 'Story'},
              Object(esm.mdx)(
                RadioButton.b,
                {
                  activeId: 'b',
                  selectItem: id => this.seState({activeId: id}),
                  mdxType: 'RadioButton',
                },
                Object(esm.mdx)(
                  RadioButton.a,
                  {id: 'a', mdxType: 'RadioItem'},
                  'Option A',
                ),
                Object(esm.mdx)(
                  RadioButton.a,
                  {id: 'b', mdxType: 'RadioItem'},
                  'Option B',
                ),
                Object(esm.mdx)(
                  RadioButton.a,
                  {id: 'c', mdxType: 'RadioItem'},
                  'Option C',
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'color'}, 'Color'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'color'),
            ' to select from the available brand colors.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'color', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    color: 'primary',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    color: 'secondary',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    color: 'tertiary',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'text-color'}, 'Text color'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'textColor'),
            ' to select from available brand text colors.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'textColor', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'heading',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'para',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'subtle',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    textColor: 'gray',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'custom-icons'}, 'Custom icons'),
          Object(esm.mdx)(
            'p',
            null,
            'Pass custom icons via  ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'checkedIcon'),
            ' and ',
            Object(esm.mdx)('inlineCode', {parentName: 'p'}, 'uncheckedIcon'),
            ' prop. Size and color will be manually set by developer.',
          ),
          Object(esm.mdx)(
            blocks.Preview,
            {mdxType: 'Preview'},
            Object(esm.mdx)(
              blocks.Story,
              {name: 'icons', mdxType: 'Story'},
              Object(esm.mdx)(
                Stack.a,
                {mdxType: 'Stack'},
                Object(esm.mdx)(
                  RadioButton.b,
                  {
                    activeId: 'a',
                    selectItem: Object(addon_actions_dist.action)('pressed'),
                    checkedIcon: Object(esm.mdx)(AntDesign_default.a, {
                      name: 'checkcircle',
                      size: 20,
                      color: '#1e88e5',
                      mdxType: 'AntDesign',
                    }),
                    uncheckedIcon: Object(esm.mdx)(AntDesign_default.a, {
                      name: 'checkcircleo',
                      size: 20,
                      color: '#1e88e5',
                      mdxType: 'AntDesign',
                    }),
                    mdxType: 'RadioButton',
                  },
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'a', mdxType: 'RadioItem'},
                    'Option A',
                  ),
                  Object(esm.mdx)(
                    RadioButton.a,
                    {id: 'b', mdxType: 'RadioItem'},
                    'Option B',
                  ),
                ),
              ),
            ),
          ),
          Object(esm.mdx)('h1', {id: 'playground'}, 'Playground'),
          Object(esm.mdx)('p', null, 'Play with RadioButton in Canvas mode.'),
          Object(esm.mdx)(
            blocks.Story,
            {
              name: 'playground',
              parameters: {decorators: [dist.withKnobs]},
              mdxType: 'Story',
            },
            Object(esm.mdx)(ExampleRadioButton, {
              mdxType: 'ExampleRadioButton',
            }),
          ),
        );
      }
      MDXContent.isMDXComponent = !0;
      const usage = () =>
        Object(esm.mdx)(
          RadioButton.b,
          {activeId: 'a'},
          Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          Object(esm.mdx)(RadioButton.a, {id: 'b'}, 'Option B'),
          Object(esm.mdx)(RadioButton.a, {id: 'c'}, 'Option C'),
        );
      (usage.storyName = 'usage'),
        (usage.parameters = {
          storySource: {
            source:
              '<RadioButton activeId="a">\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n        <RadioItem id="b">\n          Option B\n        </RadioItem>\n        <RadioItem id="c">\n          Option C\n        </RadioItem>\n    </RadioButton>',
          },
        });
      const size = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'xxsmall',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'xsmall',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'small',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'medium',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'large',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'xlarge',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              size: 'xxlarge',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
        );
      (size.storyName = 'size'),
        (size.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" size="xxsmall" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="xsmall" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="small" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="medium" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="large" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="xlarge" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" size="xxlarge" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const iconRight = () =>
        Object(esm.mdx)(
          RadioButton.b,
          {
            activeId: 'a',
            iconRight: !0,
            selectItem: Object(addon_actions_dist.action)('pressed'),
          },
          Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
        );
      (iconRight.storyName = 'iconRight'),
        (iconRight.parameters = {
          storySource: {
            source:
              '<RadioButton activeId="a" iconRight selectItem={action("pressed")}>\n      <RadioItem id="a">\n        Option A\n      </RadioItem>\n    </RadioButton>',
          },
        });
      const RadioButton_stories_activeId = () =>
        Object(esm.mdx)(
          RadioButton.b,
          {activeId: 'b', selectItem: id => (void 0).seState({activeId: id})},
          Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          Object(esm.mdx)(RadioButton.a, {id: 'b'}, 'Option B'),
          Object(esm.mdx)(RadioButton.a, {id: 'c'}, 'Option C'),
        );
      (RadioButton_stories_activeId.storyName = 'activeId'),
        (RadioButton_stories_activeId.parameters = {
          storySource: {
            source:
              '<RadioButton activeId="b" selectItem={id => this.seState({\n  activeId: id\n})}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n        <RadioItem id="b">\n          Option B\n        </RadioItem>\n        <RadioItem id="c">\n          Option C\n        </RadioItem>\n    </RadioButton>',
          },
        });
      const color = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              color: 'primary',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              color: 'secondary',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              color: 'tertiary',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
        );
      (color.storyName = 'color'),
        (color.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" color="primary" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" color="secondary" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" color="tertiary" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const textColor = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'heading',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'para',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'subtle',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              textColor: 'gray',
              selectItem: Object(addon_actions_dist.action)('pressed'),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
          ),
        );
      (textColor.storyName = 'textColor'),
        (textColor.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" textColor="heading" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" textColor="default" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" textColor="subtle" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n      <RadioButton activeId="a" textColor="gray" selectItem={action("pressed")}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const icons = () =>
        Object(esm.mdx)(
          Stack.a,
          null,
          Object(esm.mdx)(
            RadioButton.b,
            {
              activeId: 'a',
              selectItem: Object(addon_actions_dist.action)('pressed'),
              checkedIcon: Object(esm.mdx)(AntDesign_default.a, {
                name: 'checkcircle',
                size: 20,
                color: '#1e88e5',
              }),
              uncheckedIcon: Object(esm.mdx)(AntDesign_default.a, {
                name: 'checkcircleo',
                size: 20,
                color: '#1e88e5',
              }),
            },
            Object(esm.mdx)(RadioButton.a, {id: 'a'}, 'Option A'),
            Object(esm.mdx)(RadioButton.a, {id: 'b'}, 'Option B'),
          ),
        );
      (icons.storyName = 'icons'),
        (icons.parameters = {
          storySource: {
            source:
              '<Stack>\n      <RadioButton activeId="a" selectItem={action("pressed")} checkedIcon={<AntDesign name="checkcircle" size={20} color="#1e88e5" />} uncheckedIcon={<AntDesign name="checkcircleo" size={20} color="#1e88e5" />}>\n        <RadioItem id="a">\n          Option A\n        </RadioItem>\n        <RadioItem id="b">\n          Option B\n        </RadioItem>\n      </RadioButton>\n    </Stack>',
          },
        });
      const playground = () => Object(esm.mdx)(ExampleRadioButton, null);
      (playground.storyName = 'playground'),
        (playground.parameters = {
          storySource: {source: '<ExampleRadioButton />'},
          decorators: [dist.withKnobs],
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
            Object(esm.mdx)(
              blocks.AddContext,
              {
                mdxStoryNameToKey: mdxStoryNameToKey,
                mdxComponentMeta: componentMeta,
              },
              Object(esm.mdx)(MDXContent, null),
            ),
        });
      __webpack_exports__.default = componentMeta;
    },
    190: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          33,
        ),
        getContainerStyle = function getContainerStyle(_ref) {
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
        getOverlayStyle = function getOverlayStyle(_ref2) {
          var theme = _ref2.theme,
            overlayBackground = _ref2.overlayBackground,
            overlayStyle = _ref2.overlayStyle,
            borderRadius = _ref2.borderRadius,
            width = _ref2.width,
            height = _ref2.height,
            contentStyle = [
              {
                elevation: 1,
                backgroundColor: theme.colors[overlayBackground],
                borderRadius: borderRadius,
                width: width,
                height: height,
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
          )();
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.Modal,
            props,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_2__.View,
              {
                style: getContainerStyle(
                  Object.assign({}, props, {theme: theme}),
                ),
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                {
                  style: getOverlayStyle(
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
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
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
          height: '70%',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
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
          height: {
            defaultValue: {value: "'70%'", computed: !1},
            type: {name: 'union', value: [{name: 'number'}, {name: 'string'}]},
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          overlayStyle: {type: {name: 'object'}, required: !1, description: ''},
          children: {type: {name: 'element'}, required: !0, description: ''},
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
    29: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _Input_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14),
        prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_5__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          33,
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
        var scale = {
          transform: [{scale: props.theme.indicatorSize[props.size]}],
        };
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          react_native__WEBPACK_IMPORTED_MODULE_2__.View,
          {style: styles.rightIcons},
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.View,
            {style: [styles.indicator, scale]},
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
                leftIcon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
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
          iconColor: 'outline',
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
            defaultValue: {value: "'outline'", computed: !1},
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
    291: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _Avatar__WEBPACK_IMPORTED_MODULE_0__.a;
      });
    },
    292: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _CheckBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _CheckBox__WEBPACK_IMPORTED_MODULE_0__.a;
      });
    },
    293: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _FullScreenLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        152,
      );
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return _FullScreenLoader__WEBPACK_IMPORTED_MODULE_0__.a;
      });
    },
    33: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return useThemeContext;
      });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(),
        useThemeContext = function useThemeContext() {
          var themeContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(
            Context,
          );
          if (void 0 === themeContext) {
            throw new Error(
              'useThemeContext must be used within a ThemeProvider',
            );
          }
          return themeContext;
        },
        ThemeProvider = function ThemeProvider(props) {
          if (void 0 === props.value) {
            throw new Error(
              'theme value must be provided within a ThemeProvider',
            );
          }
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Context.Provider,
            {value: props.value},
            props.children,
          );
        };
      (ThemeProvider.displayName = 'ThemeProvider'),
        (ThemeProvider.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'ThemeProvider',
        }),
        (__webpack_exports__.a = ThemeProvider),
        typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
          (STORYBOOK_REACT_CLASSES['src/util/ThemeProvider.js'] = {
            name: 'ThemeProvider',
            docgenInfo: ThemeProvider.__docgenInfo,
            path: 'src/util/ThemeProvider.js',
          });
    },
    34: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          191,
        ),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          33,
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
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          children:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
          checked: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          iconRight: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          textColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
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
          textColor: 'para',
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
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
            defaultValue: {value: "'default'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
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
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          33,
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
          var row = _ref.row,
            horizontal = _ref.horizontal,
            align = _ref.align,
            vertical = _ref.vertical,
            theme = _ref.theme,
            space = _ref.space,
            shadow = _ref.shadow,
            outline = _ref.outline,
            wrap = _ref.wrap,
            cardStyle = [styles.container, {padding: theme.layoutSpace[space]}];
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
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'none',
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
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
        }),
        (Card.defaultProps = {space: 'medium', shadow: !1, outline: !1});
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
        container: {
          width: '100%',
          alignItems: 'stretch',
          backgroundColor: '#fff',
          justifyContent: 'center',
          borderRadius: 3,
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'none'", computed: !1},
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
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
          row: {type: {name: 'bool'}, required: !1, description: ''},
          wrap: {type: {name: 'bool'}, required: !1, description: ''},
          style: {type: {name: 'object'}, required: !1, description: ''},
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
    40: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_4__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          33,
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
            source = _ref.source,
            square = _ref.square,
            rounded = _ref.rounded,
            size = _ref.size,
            avatarStyle = [styles.container];
          return (
            avatarStyle.push({
              backgroundColor: '#f4f4f4',
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
              backgroundColor: theme.colors.disabled,
            },
          ];
        },
        getTitleStyle = function getTitleStyle(_ref3) {
          var theme = _ref3.theme,
            size = _ref3.size;
          return {
            fontWeight: '600',
            fontSize: theme.avatarSize[size] / 4,
            color: theme.colors.disabled,
          };
        },
        Avatar = function Avatar(props) {
          var theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.b,
            )(),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_2__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_2__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_2__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_2__.View,
            {
              style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                [styles.propView, {width: theme.avatarSize[props.size]}],
              ),
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              TouchableElement,
              _extends({disabled: !props.editable}, props),
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
                props.source
                  ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_2__.Image,
                      {
                        source: props.source,
                        resizeMode: 'cover',
                        style: styles.image,
                      },
                    )
                  : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_2__.Text,
                      {
                        numberOfLines: 1,
                        style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
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
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                    [
                      getEditIconStyle(
                        Object.assign({}, props, {theme: theme}),
                      ),
                      props.editIconStyle,
                    ],
                  ),
                },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_4___default.a,
                  {
                    name: 'edit-2',
                    size: theme.avatarSize[props.size] / 8,
                    color: props.editIconColor || theme.colors.disabled,
                  },
                ),
              ),
          );
        };
      (Avatar.displayName = 'Avatar'),
        (Avatar.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          source: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          editable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          onPress: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
          size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          square: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          rounded: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          editIconStyle:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          editIconColor:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
        }),
        (Avatar.defaultProps = {title: 'MD', editable: !1, size: 'medium'});
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
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
    43: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          191,
        ),
        react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react_native_vector_icons_MaterialIcons__WEBPACK_IMPORTED_MODULE_6__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(61),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          33,
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
            buttonStyle = [styles.container];
          return (
            buttonStyle.push({
              width: theme.buttonWidth[size],
              height: theme.buttonWidth[size] / 3,
              flexDirection: 'row',
              justifyContent: 'center',
            }),
            count < 1 &&
              buttonStyle.push({
                backgroundColor:
                  _util_colors__WEBPACK_IMPORTED_MODULE_8__.a.bluegray[200],
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
              {
                fontSize: theme.fontSize[size],
                color: theme.colors.default,
              },
            ];
          return (
            disabled && textStyle.push({color: theme.colors.disabled}),
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
                        Object.assign({}, props, {theme: theme}),
                      ),
                      style,
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
                          color: props.iconColor,
                          size: theme.iconSize[props.size],
                        },
                      ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                  {style: styles.countView},
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                    {
                      style: [
                        getTextStyle(Object.assign({}, props, {theme: theme})),
                        props.textStyle,
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
                          color: props.iconColor,
                          size: theme.iconSize[props.size],
                        },
                      ),
                  ),
                ),
              );
        };
      (MenuAddButton.displayName = 'MenuAddButton'),
        (MenuAddButton.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object,
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
          size: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
        }),
        (MenuAddButton.defaultProps = {
          iconColor: '#333',
          count: 0,
          size: 'medium',
        });
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
            _util_colors__WEBPACK_IMPORTED_MODULE_8__.a.bluegray[200],
        },
      });
      (MenuAddButton.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'MenuAddButton',
        props: {
          iconColor: {
            defaultValue: {value: "'#333'", computed: !1},
            type: {name: 'string'},
            required: !1,
            description: '',
          },
          count: {
            defaultValue: {value: '0', computed: !1},
            type: {name: 'number'},
            required: !1,
            description: '',
          },
          size: {
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
          onIncrement: {type: {name: 'func'}, required: !0, description: ''},
          onDecrement: {type: {name: 'func'}, required: !0, description: ''},
          plusIcon: {type: {name: 'element'}, required: !1, description: ''},
          minusIcon: {type: {name: 'element'}, required: !1, description: ''},
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
    45: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
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
    49: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          48,
        ),
        react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          react_native_vector_icons_Feather__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          33,
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
          size: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          onPress:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
          iconColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
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
          style: {type: {name: 'object'}, required: !1, description: ''},
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
    50: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react = __webpack_require__(1),
        react_default = __webpack_require__.n(react),
        cjs = __webpack_require__(5),
        prop_types = __webpack_require__(3),
        prop_types_default = __webpack_require__.n(prop_types),
        ThemeProvider = __webpack_require__(33),
        width = cjs.Dimensions.get('window').width,
        resizeFont_resizeFont = function resizeFont(fontSize) {
          return width > 550
            ? (2 * fontSize) / cjs.PixelRatio.getFontScale()
            : fontSize / cjs.PixelRatio.getFontScale();
        };
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
      var Text_getTextStyle = function getTextStyle(_ref) {
          var theme = _ref.theme,
            color = _ref.color,
            size = _ref.size,
            scale = _ref.scale,
            fontWeight = _ref.fontWeight;
          return {
            color: theme.colors[color],
            fontSize: scale
              ? theme.fontSize[size]
              : resizeFont_resizeFont(theme.fontSize[size]),
            includeFontPadding: !1,
            textAlignVertical: 'center',
            fontWeight: fontWeight,
          };
        },
        Text_TextElement = function TextElement(_ref2) {
          var style = _ref2.style,
            props = _objectWithoutProperties(_ref2, ['style']),
            theme = Object(ThemeProvider.b)();
          return react_default.a.createElement(
            cjs.Text,
            _extends({}, props, {
              style: cjs.StyleSheet.flatten([
                Text_getTextStyle(Object.assign({}, props, {theme: theme})),
                style,
              ]),
            }),
            props.children,
          );
        };
      (Text_TextElement.displayName = 'TextElement'),
        (Text_TextElement.propTypes = {
          style: prop_types_default.a.object,
          children: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.array,
          ]).isRequired,
          size: prop_types_default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          color: prop_types_default.a.string,
          scale: prop_types_default.a.bool,
          fontWeight: prop_types_default.a.string,
        }),
        (Text_TextElement.defaultProps = {
          color: 'default',
          size: 'medium',
          scale: !0,
          fontWeight: '500',
        }),
        (Text_TextElement.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TextElement',
          props: {
            color: {
              defaultValue: {value: "'default'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            size: {
              defaultValue: {value: "'medium'", computed: !1},
              type: {
                name: 'enum',
                value: [
                  {value: "'xxsmall'", computed: !1},
                  {value: "'xsmall'", computed: !1},
                  {value: "'small'", computed: !1},
                  {value: "'medium'", computed: !1},
                  {value: "'large'", computed: !1},
                  {value: "'xlarge'", computed: !1},
                  {value: "'xxlarge'", computed: !1},
                ],
              },
              required: !1,
              description: '',
            },
            scale: {
              defaultValue: {value: 'true', computed: !1},
              type: {name: 'bool'},
              required: !1,
              description: '',
            },
            fontWeight: {
              defaultValue: {value: "'500'", computed: !1},
              type: {name: 'string'},
              required: !1,
              description: '',
            },
            style: {type: {name: 'object'}, required: !1, description: ''},
            children: {
              type: {name: 'union', value: [{name: 'string'}, {name: 'array'}]},
              required: !0,
              description: '',
            },
          },
        });
      __webpack_exports__.a = Text_TextElement;
      typeof STORYBOOK_REACT_CLASSES !== 'undefined' &&
        (STORYBOOK_REACT_CLASSES['src/Text/Text.js'] = {
          name: 'TextElement',
          docgenInfo: Text_TextElement.__docgenInfo,
          path: 'src/Text/Text.js',
        });
    },
    51: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(10),
        __webpack_require__(22),
        __webpack_require__(8),
        __webpack_require__(13);
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_4__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          33,
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
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.b,
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
                [
                  getContainerStyle(Object.assign({}, props, {theme: theme})),
                  style,
                ],
              ),
            },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_5__.StatusBar,
              {
                barStyle: props.barStyle,
                backgroundColor: theme.colors[props.barColor],
              },
            ),
            props.leftIcon &&
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                TouchableElement,
                _extends({}, props, {onPress: props.onLeftIconPress}),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                  {
                    style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                      [styles.iconStyle, props.iconStyle],
                    ),
                  },
                  props.leftIcon,
                ),
              ),
            !!props.children &&
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_5__.Text,
                {
                  style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                    [
                      getTextStyle(Object.assign({}, props, {theme: theme})),
                      textStyle,
                    ],
                  ),
                },
                props.children,
              ),
            props.rightIcon &&
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                TouchableElement,
                _extends({}, props, {onPress: props.onRightIconPress}),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react_native__WEBPACK_IMPORTED_MODULE_5__.View,
                  {
                    style: react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.flatten(
                      [styles.iconStyle, props.iconStyle],
                    ),
                  },
                  props.rightIcon,
                ),
              ),
          );
        };
      (Header.displayName = 'Header'),
        (Header.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          textAlign: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'auto',
            'left',
            'center',
            'right',
            'justify',
          ]),
          fontSize: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          onLeftIconPress:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.element,
          onRightIconPress:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
          iconStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
          barColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          barStyle: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf([
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
      var styles = react_native__WEBPACK_IMPORTED_MODULE_5__.StyleSheet.create({
        container: Object.assign(
          {
            width: '100%',
            height: react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.select({
              android: 56,
              ios: 64,
              web: 64,
            }),
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          },
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
                '0 5px 5px rgba(0,0,0,0.10), 1px 5px 5px rgba(0,0,0,0.10)',
            },
          }),
          {zIndex: 10},
        ),
        text: {
          flex: 1,
          fontWeight: react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.select(
            {android: 'bold', ios: '500'},
          ),
          textAlign: react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.select({
            android: 'left',
            ios: 'center',
            web: 'center',
          }),
          color: '#fff',
          paddingHorizontal: 10,
          marginTop:
            react_native__WEBPACK_IMPORTED_MODULE_5__.Platform.OS === 'ios'
              ? 8
              : 0,
        },
        iconStyle: {padding: 5},
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          style: {type: {name: 'object'}, required: !1, description: ''},
          textStyle: {type: {name: 'object'}, required: !1, description: ''},
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
    61: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_exports__.a = {
        red: {
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
          A700: '#d50000',
        },
        pink: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
          A100: '#ff80ab',
          A200: '#ff4081',
          A400: '#f50057',
          A700: '#c51162',
        },
        purple: {
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
          A700: '#aa00ff',
        },
        deeppurple: {
          50: '#ede7f6',
          100: '#d1c4e9',
          200: '#b39ddb',
          300: '#9575cd',
          400: '#7e57c2',
          500: '#673ab7',
          600: '#5e35b1',
          700: '#512da8',
          800: '#4527a0',
          900: '#311b92',
          A100: '#b388ff',
          A200: '#7c4dff',
          A400: '#651fff',
          A700: '#6200ea',
        },
        indigo: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#3f51b5',
          600: '#3949ab',
          700: '#303f9f',
          800: '#283593',
          900: '#1a237e',
          A100: '#8c9eff',
          A200: '#536dfe',
          A400: '#3d5afe',
          A700: '#304ffe',
        },
        blue: {
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
          A700: '#2962ff',
        },
        lightblue: {
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
          A700: '#0091ea',
        },
        cyan: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00bcd4',
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
          A100: '#84ffff',
          A200: '#18ffff',
          A400: '#00e5ff',
          A700: '#00b8d4',
        },
        teal: {
          50: '#e0f2f1',
          100: '#b2dfdb',
          200: '#80cbc4',
          300: '#4db6ac',
          400: '#26a69a',
          500: '#009688',
          600: '#00897b',
          700: '#00796b',
          800: '#00695c',
          900: '#004d40',
          A100: '#a7ffeb',
          A200: '#64ffda',
          A400: '#1de9b6',
          A700: '#00bfa5',
        },
        green: {
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
          A700: '#00c853',
        },
        lightgreen: {
          50: '#f1f8e9',
          100: '#dcedc8',
          200: '#c5e1a5',
          300: '#aed581',
          400: '#9ccc65',
          500: '#8bc34a',
          600: '#7cb342',
          700: '#689f38',
          800: '#558b2f',
          900: '#33691e',
          A100: '#ccff90',
          A200: '#b2ff59',
          A400: '#76ff03',
          A700: '#64dd17',
        },
        lime: {
          50: '#f9fbe7',
          100: '#f0f4c3',
          200: '#e6ee9c',
          300: '#dce775',
          400: '#d4e157',
          500: '#cddc39',
          600: '#c0ca33',
          700: '#afb42b',
          800: '#9e9d24',
          900: '#827717',
          A100: '#f4ff81',
          A200: '#eeff41',
          A400: '#c6ff00',
          A700: '#aeea00',
        },
        yellow: {
          50: '#fffde7',
          100: '#fff9c4',
          200: '#fff59d',
          300: '#fff176',
          400: '#ffee58',
          500: '#ffeb3b',
          600: '#fdd835',
          700: '#fbc02d',
          800: '#f9a825',
          900: '#f57f17',
          A100: '#ffff8d',
          A200: '#ffff00',
          A400: '#ffea00',
          A700: '#ffd600',
        },
        amber: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
          A100: '#ffe57f',
          A200: '#ffd740',
          A400: '#ffc400',
          A700: '#ffab00',
        },
        orange: {
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
          A700: '#ff6d00',
        },
        deeporange: {
          50: '#fbe9e7',
          100: '#ffccbc',
          200: '#ffab91',
          300: '#ff8a65',
          400: '#ff7043',
          500: '#ff5722',
          600: '#f4511e',
          700: '#e64a19',
          800: '#d84315',
          900: '#bf360c',
          A100: '#ff9e80',
          A200: '#ff6e40',
          A400: '#ff3d00',
          A700: '#dd2c00',
        },
        brown: {
          50: '#efebe9',
          100: '#d7ccc8',
          200: '#bcaaa4',
          300: '#a1887f',
          400: '#8d6e63',
          500: '#795548',
          600: '#6d4c41',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#a9a9a9',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        bluegray: {
          50: '#eceff1',
          100: '#cfd8dc',
          200: '#b0bec5',
          300: '#90a4ae',
          400: '#78909c',
          500: '#607d8b',
          600: '#546e7a',
          700: '#455a64',
          800: '#37474f',
          900: '#263238',
        },
        black: {
          50: '#4c4c4c',
          100: '#444',
          200: '#3b3b3b',
          300: '#333',
          400: '#2a2a2a',
          500: '#222',
          600: '#191919',
          700: '#111',
          800: '#080808',
          900: '#000000',
        },
      };
    },
    662: function(module, exports, __webpack_require__) {
      __webpack_require__(663),
        __webpack_require__(809),
        __webpack_require__(810),
        __webpack_require__(958),
        __webpack_require__(1561),
        __webpack_require__(1592),
        __webpack_require__(1599),
        (module.exports = __webpack_require__(1792));
    },
    7: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          33,
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
                fontWeight:
                  react_native__WEBPACK_IMPORTED_MODULE_2__.Platform.OS ===
                  'android'
                    ? 'bold'
                    : '400',
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
            disabled && textStyle.push({color: theme.colors.disabled}),
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
            buttonStyles = [styles.container];
          return (
            buttonStyles.push({
              backgroundColor: theme.colors[color],
              borderWidth: 1,
              borderColor: theme.colors[color],
            }),
            length === 'short' &&
              buttonStyles.push({width: theme.buttonWidth[width]}),
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
                  react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet
                    .hairlineWidth,
                borderColor: theme.colors[color] + '30',
              }),
            disabled &&
              buttonStyles.push({
                backgroundColor: theme.colors.disabled,
                borderColor: theme.colors.disabled,
              }),
            buttonStyles
          );
        },
        Button = function Button(props) {
          var theme = Object(
              _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.b,
            )(),
            TouchableElement =
              react_native__WEBPACK_IMPORTED_MODULE_2__.Platform.OS ===
              'android'
                ? react_native__WEBPACK_IMPORTED_MODULE_2__.TouchableNativeFeedback
                : react_native__WEBPACK_IMPORTED_MODULE_2__.TouchableOpacity;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            TouchableElement,
            _extends({}, props, {
              onPress: props.onPress,
              disabled: props.disabled || props.loading,
            }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_native__WEBPACK_IMPORTED_MODULE_2__.View,
              {
                style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                  [
                    getContainerStyle(Object.assign({}, props, {theme: theme})),
                    props.style,
                  ],
                ),
              },
              (function renderChildren(props) {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
                  null,
                  props.loading &&
                    !props.disabled &&
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_2__.ActivityIndicator,
                      {
                        style: styles.iconStyle,
                        color:
                          props.indicatorColor ||
                          props.theme.colors[props.color],
                      },
                    ),
                  props.leftIcon ||
                    (props.icon &&
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                        {style: styles.iconStyle},
                        props.leftIcon || props.icon,
                      )),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react_native__WEBPACK_IMPORTED_MODULE_2__.Text,
                    {
                      style: react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.flatten(
                        [getTextStyle(props), props.textStyle],
                      ),
                    },
                    props.children,
                  ),
                  props.rightIcon &&
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      react_native__WEBPACK_IMPORTED_MODULE_2__.View,
                      {style: styles.iconStyle},
                      props.rightIcon,
                    ),
                );
              })(Object.assign({}, props, {theme: theme})),
            ),
          );
        };
      (Button.displayName = 'Button'),
        (Button.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          textStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
          children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          indicatorColor:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          onPress:
            prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
          color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
          round: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          outline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          transparent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
          icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
          leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
          rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
          length: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf([
            'long',
            'short',
          ]),
          tint: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
        }),
        (Button.defaultProps = {
          children: 'Submit',
          size: 'medium',
          length: 'long',
          width: 'medium',
          color: 'primary',
          tint: !0,
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_2__.StyleSheet.create({
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
            type: {name: 'string'},
            required: !1,
            description: 'Pass button text as children as children',
          },
          size: {
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
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
            defaultValue: {value: 'true', computed: !1},
            type: {name: 'bool'},
            required: !1,
            description: 'To enable outline button tint',
          },
          style: {
            type: {name: 'object'},
            required: !1,
            description: 'To override default style',
          },
          textStyle: {
            type: {name: 'object'},
            required: !1,
            description: 'To override default text style',
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
    727: function(module, exports) {},
    810: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__(480);
    },
    9: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(35), __webpack_require__(8);
      var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
        react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_2__,
        ),
        react_native__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
        prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3),
        prop_types__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_4__,
        ),
        _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          33,
        ),
        getChildrenStyle = function getChildrenStyle(_ref, index) {
          var direction = _ref.direction,
            theme = _ref.theme,
            space = _ref.space,
            verticalSpace = _ref.verticalSpace,
            horizontalSpace = _ref.horizontalSpace,
            cropEndSpace = _ref.cropEndSpace,
            children = _ref.children;
          if (direction === 'vertical') {
            var childStyle = [{marginBottom: theme.layoutSpace[space]}];
            return (
              index === 0 &&
                childStyle.push({marginTop: theme.layoutSpace[space]}),
              horizontalSpace &&
                childStyle.push({
                  marginHorizontal: theme.layoutSpace[horizontalSpace],
                }),
              cropEndSpace &&
                (index === 0 && childStyle.push({marginTop: 0}),
                index ===
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(
                    children,
                  ) -
                    1 && childStyle.push({marginBottom: 0})),
              childStyle
            );
          }
          var _childStyle = [{marginRight: theme.layoutSpace[space]}];
          return (
            index === 0 &&
              _childStyle.push({marginLeft: theme.layoutSpace[space]}),
            verticalSpace &&
              _childStyle.push({
                marginVertical: theme.layoutSpace[verticalSpace],
              }),
            cropEndSpace &&
              (index === 0 && _childStyle.push({marginLeft: 0}),
              index ===
                react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(
                  children,
                ) -
                  1 && _childStyle.push({marginRight: 0})),
            _childStyle
          );
        },
        Stack = function Stack(props) {
          var theme = Object(
            _util_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__.b,
          )();
          return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
            react_native__WEBPACK_IMPORTED_MODULE_3__.View,
            {
              style: [
                props.direction === 'horizontal' ? styles.container : {},
                props.style,
              ],
            },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.toArray(
              props.children,
            ).map(function(item, index) {
              return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                react_native__WEBPACK_IMPORTED_MODULE_3__.View,
                {
                  style: getChildrenStyle(
                    Object.assign({}, props, {theme: theme}),
                    index,
                  ),
                  key: index,
                },
                item,
              );
            }),
          );
        };
      (Stack.displayName = 'Stack'),
        (Stack.propTypes = {
          style: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
          space: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([
            'none',
            'xxsmall',
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
            'xxlarge',
          ]),
          horizontalSpace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(
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
          ),
          verticalSpace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(
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
          ),
          children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
              prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element,
            ],
          ).isRequired,
          direction: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf([
            'vertical',
            'horizontal',
          ]).isRequired,
          cropEndSpace: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
        }),
        (Stack.defaultProps = {
          space: 'medium',
          horizontalSpace: 'none',
          verticalSpace: 'none',
          cropEndSpace: !1,
          direction: 'vertical',
        });
      var styles = react_native__WEBPACK_IMPORTED_MODULE_3__.StyleSheet.create({
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
            defaultValue: {value: "'medium'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'none'", computed: !1},
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          horizontalSpace: {
            defaultValue: {value: "'none'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'none'", computed: !1},
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
            required: !1,
            description: '',
          },
          verticalSpace: {
            defaultValue: {value: "'none'", computed: !1},
            type: {
              name: 'enum',
              value: [
                {value: "'none'", computed: !1},
                {value: "'xxsmall'", computed: !1},
                {value: "'xsmall'", computed: !1},
                {value: "'small'", computed: !1},
                {value: "'medium'", computed: !1},
                {value: "'large'", computed: !1},
                {value: "'xlarge'", computed: !1},
                {value: "'xxlarge'", computed: !1},
              ],
            },
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
          style: {type: {name: 'object'}, required: !1, description: ''},
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
  },
  [[662, 1, 2]],
]);
//# sourceMappingURL=main.990fb21c95ec663fe6ef.bundle.js.map
