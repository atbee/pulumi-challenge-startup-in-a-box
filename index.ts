// Deploy Website to S3 with CloudFront
// Also shows the challenger how to build a ComponentResource
import { CdnWebsite } from "./cdn-website";

const website = new CdnWebsite("your-startup", {});

export const websiteUrl = website.url;

// Monitoring with Checkly
// Demonstrates Standard Package usage
import * as checkly from "@checkly/pulumi";
import * as fs from "fs";

new checkly.Check("index-page", {
    activated: true,
    frequency: 10,
    type: "BROWSER",
    locations: ["ap-southeast-1"],
    script: websiteUrl.apply((url) =>
        fs
            .readFileSync("checkly-embed.js")
            .toString("utf8")
            .replace("{{websiteUrl}}", url)
    ),
});
