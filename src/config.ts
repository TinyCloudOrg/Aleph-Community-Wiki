import dotenv from "dotenv";
dotenv.config();

const config = {
  contentPath: process.env.CONTENT_PATH || "./documents",
  outputPath: process.env.OUTPUT_PATH || "./public",
  subdomain: process.env.SUBDOMAIN || "aleph",
  cfSuffix: "-wiki",
};

export default config;
