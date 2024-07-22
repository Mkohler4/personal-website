const path = require("path");

module.exports = {
  async redirects() {
    return [
      {
        source: "/ibte-soha-redirect",
        destination: "https://png.pngtree.com/png-vector/20211022/ourmid/pngtree-coming-soon-banner-design-with-speaker-png-image_3999559.png",
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
