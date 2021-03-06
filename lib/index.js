'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initializeApollo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('@apollo/client');

var _apolloStorybookCore = require('apollo3-storybook-core');

var _apolloStorybookCore2 = _interopRequireDefault(_apolloStorybookCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function initializeApollo(_ref) {
  var typeDefs = _ref.typeDefs,
      mocks = _ref.mocks,
      _ref$Provider = _ref.Provider,
      Provider = _ref$Provider === undefined ? _reactApollo.ApolloProvider : _ref$Provider,
      _ref$apolloLinkOption = _ref.apolloLinkOptions,
      apolloLinkOptions = _ref$apolloLinkOption === undefined ? {} : _ref$apolloLinkOption,
      _ref$apolloClientOpti = _ref.apolloClientOptions,
      apolloClientOptions = _ref$apolloClientOpti === undefined ? {} : _ref$apolloClientOpti,
      links = _ref.links,
      typeResolvers = _ref.typeResolvers,
      _ref$context = _ref.context,
      context = _ref$context === undefined ? {} : _ref$context,
      _ref$rootValue = _ref.rootValue,
      rootValue = _ref$rootValue === undefined ? {} : _ref$rootValue,
      _ref$cacheOptions = _ref.cacheOptions,
      cacheOptions = _ref$cacheOptions === undefined ? {} : _ref$cacheOptions,
      resolverValidationOptions = _ref.resolverValidationOptions;

  var graphqlClient = (0, _apolloStorybookCore2.default)({
    mocks: mocks,
    apolloLinkOptions: apolloLinkOptions,
    apolloClientOptions: apolloClientOptions,
    typeResolvers: typeResolvers,
    typeDefs: typeDefs,
    rootValue: rootValue,
    context: context,
    links: links,
    cacheOptions: cacheOptions,
    resolverValidationOptions: resolverValidationOptions
  });

  function StorybookProvider(_ref2) {
    var children = _ref2.children;

    return _react2.default.createElement(
      Provider,
      { client: graphqlClient },
      _react2.default.createElement(
        _react.Fragment,
        null,
        children
      )
    );
  }

  return function (story) {
    return _react2.default.createElement(
      StorybookProvider,
      null,
      story()
    );
  };
}
