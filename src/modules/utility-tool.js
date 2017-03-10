// package to bring in color
const chalk = require('chalk');
// will be used to save logs to file
const fs = require('fs');

// setup output for tool
const debug = (title, object, status) => {
  // if DEBUG=true is set when the server is started
  if(process.env.DEBUG === 'true'){
  const sep = '\n*********DEBUG*********\n';
  const out = sep + title + sep;
  // logs date
  const date = new Date().toLocaleString();

  // set colors to be used
  const success = chalk.bold.white.bgGreen;
  const error = chalk.bold.white.bgRed;
  const warn = chalk.bold.white.bgYellow;

  // store content
  const body = object;
  status = status.toLowerCase();

  // if there is no title
  if(!title){
    title = 'There is no title.'
  }
  // if there is no body
  if(!body) {
    title = 'There is no message.'
  }
  // setup format for the message
  const msgFormat = `${out} Object: "${body}" \n\nTIME: ${date}`;

  // if the status is any of these...
  // console log the error message
  switch(status) {
    case 'error!':
    case 'error':
    case 'err':

    console.error(error('\n' + status + ' ' + msgFormat + '\n'));
    break;
    case 'success!':
    case 'success':

    //messageStatus = 'success';
    console.log(success('\n'+ status + ' ' + msgFormat + '\n'));
    break;

    case 'warn':
    case 'warning!':
    case 'warning':
    //status is warning
    console.warn(warn('\n'+ status + ' ' + msgFormat + '\n'));
    break;

    }
  };
};
exports.debug = debug;
