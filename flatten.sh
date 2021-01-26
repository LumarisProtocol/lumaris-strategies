#!/usr/bin/env bash

mkdir -p flats
rm -rf flats/*
./node_modules/.bin/truffle-flattener contracts/CakePool.sol > flats/CakePool.sol

