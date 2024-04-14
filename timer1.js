const args = process.argv.slice(2);    //Accepting command line arguments - Removed unwanted system (first 2) arguments
if (args.length > 0) {
  const ms = 1000;
  let delay = 0;
  
  for (let arg of args) {
    if (arg > 0 && Number(arg)) {
      delay = arg * ms;
      setTimeout(() => {
        process.stdout.write(`Alarm at: ${arg} seconds`);         //System Sound - Beep
        process.stdout.write("\x07 .");         //System Sound - Beep
      }, delay);
    
      setTimeout(() => {
        process.stdout.write("\n");
      }, delay);
    }
  }
}