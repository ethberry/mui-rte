#!/usr/bin/env bash
set -e
if ! [ -d $1 ];
then
    echo "The Directory is not present";
    exit 0;
else
    echo "ERROR!!! The suspicious node_modules Directory Exists in path: !!!"
    find $1 -type d;
    exit 1;
fi
