#!/bin/bash
# runs webpack dev server /react directory


export NODE_ENV=${NODE_ENV:-development}

echo Running Dev Server...

cd /react
exec npm run dev:hot
