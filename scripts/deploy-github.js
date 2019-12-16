const ghPages = require("gh-pages");
const date = new Date();
const formattedDate = date.toLocaleDateString("fi-FI");
const formattedTime = date.toLocaleTimeString("fi-FI");

ghPages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "git@github.com:0is1/puttmaister-com.git",
    message: `New site deploy (${formattedDate} ${formattedTime})`
    // tag: `deploy-${formattedDate}-${formattedTime}`,
  },
  () => {
    console.log("Deploy Complete!");
  }
);
