const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Ciao, Thanks for using me!')
    process.exit();
  }
  if (key === 'b') {
    console.log("\x07");
  }
  if (key >= 1 || key <= 9) {
    beep(key);
  }
});

const beep = (seconds) => {
  console.log(`setting timer for ${seconds} seconds...`);
  setTimeout(() => {
    console.log("\x07");
  }, (1000 * seconds));
}

console.log('after callback');
