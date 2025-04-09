const fs = require("fs");
const path = require("path");

const cname = "divergence.live";
const dist = path.join(__dirname, "dist");
const file = path.join(dist, "CNAME");

fs.writeFileSync(file, cname, {
  encoding: "utf8",
});

console.log(`Created ${file} with content ${cname}`);

const notFound = path.join(__dirname, "404.html");
const notFoundDist = path.join(dist, "404.html");

fs.copyFileSync(notFound, notFoundDist);
