// Includes
// --------------------
const path = require("path");
const webpack = require("webpack");

// Plugin/Option Includes
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const autoprefixer = require("autoprefixer");
var ManifestPlugin = require('webpack-manifest-plugin');

// Configuration
// --------------------
const projectRoot = path.resolve(__dirname, "../");
const devServerPort = 8080;
const isProduction = process.env.NODE_ENV === "production";

// Filename is always hashed, but can be branched here if need
const baseFileName = "[name]-[hash]";
process.traceDeprecation = true;

// Plugins
// --------------------
// Declared before rules so they can be used inside rules
const plugins = [];

const extractSass = new ExtractTextPlugin({
  filename: baseFileName + ".css",
  disable: false
});

console.log("✨ Linting Styles...");
const styleLint = new StyleLintPlugin({
  configFile: path.resolve(projectRoot, ".stylelintrc.js"),
  syntax: "scss"
});

const uglifyJs = new webpack.optimize.UglifyJsPlugin({
  compress: { warnings: false },
  sourceMap: true
});


let assetManifestConfig;
if (isProduction) {
  assetManifestConfig = {
    writeToFileEmit: true,
    publicPath: "/docs-assets/"
  }
} else {
  assetManifestConfig = {
    writeToFileEmit: true,
    publicPath: "http://127.0.0.1:8080/docs-assets/"
  }
}
const assetManifest = new ManifestPlugin(assetManifestConfig);

plugins.push(extractSass);
plugins.push(styleLint);
plugins.push(assetManifest);

if (isProduction) {
  plugins.push(uglifyJs);
}

// Rules
// --------------------
const rules = [];

const ruleJavascript = {
  test: /\.js$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: ["es2015", "stage-2"]
      }
    },
    {
      loader: "eslint-loader"
    }
  ],
  exclude: [
    path.resolve(projectRoot, "./node_modules"),
    path.resolve(projectRoot, "./_assets/js/lib")
  ]
};

const ruleScss = {
  test: /\.scss$/,
  use: extractSass.extract({
    use: [
      {
        loader: "css-loader"
      },
      {
        loader: "postcss-loader",
        options: {
          syntax: "postcss-scss",
          plugins: [autoprefixer()]
        }
      },
      {
        loader: "sass-loader"
      }
    ],
    // use style-loader in development
    fallback: "style-loader"
  })
};

const ruleJSON = {
  test: /\.json$/,
  use: ["json-loader"]
};

const generateFileRule = ext => {
  return {
    test: new RegExp(`\\.${ext}$`),
    loader: "file-loader"
  };
};

const fileRuleTypes = [
  "jpg",
  "gif",
  "png",
  "eot",
  "ttf",
  "woff",
  "woff2",
  "svg"
];

rules.push(ruleJavascript);
rules.push(ruleScss);
rules.push(ruleJSON);
fileRuleTypes.forEach(type => {
  rules.push(generateFileRule(type));
});

// Output
// ---------------------
module.exports = {
  entry: {
    ['manifold-docs']: [
      path.resolve(projectRoot, '_assets/manifest.js')
    ]
  },
  // Depnding on process.env, this should be either a hash or a name
  output: {
    path: path.resolve(projectRoot, "docs-assets"),
    filename: baseFileName + ".js"
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: devServerPort,
    contentBase: "www",
    publicPath: "/docs-assets/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization"
    }
  },
  module: { rules },
  stats: {
    all: undefined,
    assets: true
  },
  plugins
};
