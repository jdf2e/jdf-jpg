'use strict';
var mozjpeg = require("../");
var fs = require("fs");
var execFile = require('child_process').execFile;
var path = require("path");

execFile(mozjpeg, ['-version'], function(error, stdout, stderr) {
    if (error) {
    	console.log(stdout);
    	console.log(stderr);
        throw error;
    }
});

var testPath = path.join(__dirname, "1_mini.jpg");
if (fs.existsSync(testPath)) {
    fs.unlinkSync(testPath)
}

execFile(mozjpeg, ['-outfile', testPath, path.join(__dirname, "1.jpg")], error => {
    if (error) {
        throw error;
    }
});