#!/usr/bin/env node

var fs=require('fs')

//var cmd = fs.open('./终端')
//var cmd = from('./loadpoker/终端')

const program = require('commander');
program
  .version('0.0.1', '-v, --version')
  .option('-s, --start', 'start')
  .parse(process.argv);
 
 if(program.start){ 
  console.log(' hi ')
  var server = require("./server/server.js")
  
  // var cmd = new ActiveXObject("WScript.Shell")
  // cmd.Run("npm i goukou_loadpoker");
  
}