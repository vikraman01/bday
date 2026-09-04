const { cpSync, mkdirSync, rmSync } = require("node:fs");
const { join } = require("node:path");

const root = join(__dirname, "..");
const output = join(root, "dist");
const assets = ["index.html", "customize.json", "img", "script", "style"];

rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

assets.forEach(asset => cpSync(join(root, asset), join(output, asset), { recursive: true }));

console.log("Static site built in dist/");
