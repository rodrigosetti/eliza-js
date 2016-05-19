/* jshint node:true */
"use strict";

var fs = require('fs');
var readline = require('readline');
var Eliza = require('./lib/eliza/eliza');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl._prompt = '> ';

var client = {
  say: function(phrase) {
      console.log('ELIZA: ' + phrase);
      process.stdout.write(rl._prompt);
  },
  quit: function(phrase) { console.log("QUIT"); }
};

var script = JSON.parse(fs.readFileSync('script.json'));

var eliza = new Eliza(client, script);

rl.on('line', function (line) {
  line = line.trim();
  if (!line) return;
  eliza.say(line);
});

