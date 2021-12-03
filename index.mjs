#!/usr/bin/env zx

console.log("删除中...");
cd(process.cwd())
await $ `rd/s/q node_modules`

console.log("删除成功");