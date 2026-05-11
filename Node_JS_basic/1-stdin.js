process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.once('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  process.stdin.destroy();
});

process.stdin.on('close', () => {
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});