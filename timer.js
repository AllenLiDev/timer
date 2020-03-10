const args = process.argv.splice(2);

const timer = () => {
  if (!checkInput()) {
    return;
  }
  for (const num of args) {
    setTimeout(() => {
      console.log("\x07" + num);
    }, (1000 * num));
  }
}

const checkInput = () => {
  if (args.length === 0) {
    console.log("\x07");
    console.log("Exiting program, no input provided.")
    return false;
  }
  for (let i = 0; i < args.length; i++) {
    if (isNaN(args[i])) {
      console.log("Invalid input, not a number");
      return false;
    }
    if ((args[i]) < 0) {
      args.splice(i, 1);
      console.log(args)
    }
  }
  return true;
}

timer();
