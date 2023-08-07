#!/bin/bash
npm run build
npm run export
aws s3 sync out/ s3://formatmaker.com
