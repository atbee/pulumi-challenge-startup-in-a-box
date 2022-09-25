// Deploy Website to S3 with CloudFront
// Also shows the challenger how to build a ComponentResource
import { CdnWebsite } from "./cdn-website";

const website = new CdnWebsite("your-startup", {});

export const url = website.url;
