[![NPM](https://nodei.co/npm/jdf-jpg.png?downloads=true)](https://nodei.co/npm/jdf-jpg/)

[![NPM version](https://badge.fury.io/js/jdf-jpg.png)](http://badge.fury.io/js/jdf-jpg) [![Build Status](https://travis-ci.org/jdf2e/jdf-jpg.svg?branch=master)](https://travis-ci.org/jdf2e/jdf-jpg)

# jdf-jpg

> A mozjpeg wrapper for JDF  see __https://github.com/mozilla/mozjpeg/__

## Install

```
$ npm install --save jdf-jpg
```


## Usage

```js
const {execFile} = require('child_process');
const mozjpeg = require('jdf-jpg');

execFile(mozjpeg, ['-outfile', 'output.jpg', 'input.jpg'], err => {
	console.log('Image minified!');
});
```

## CLI

```
$ npm install --global jdf-jpg
```

```
$ jdf-jpg --help
```
 
