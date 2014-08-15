#!/bin/sh

for i in `node get_data.node.js`; do
  if [[ ! -e `echo "$i" | sed 's/.*\.net\///'` ]]; then
    wget -x "$i"
  fi
done

if [[ -d 'projecteuler.net' ]]; then
  cp -r projecteuler.net/* site/ && rm -r projecteuler.net
fi
