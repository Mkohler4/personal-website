const path = require("path");

module.exports = {
  async redirects() {
    return [
      {
        source: "/ibte-soha-redirect",
        destination: "https://photos.app.goo.gl/wBNtirYFrCqJRCJR7",
        permanent: true,
        basePath: false,
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["www.pubnub.com"],
  },
};
