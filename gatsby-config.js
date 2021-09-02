module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "portfolio",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
  ],
  module: {
    rules: {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }
  }
};
