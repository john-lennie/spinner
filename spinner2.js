let spinnerIcons = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let time = 100;
let totalTime = 100 + (200 * spinnerIcons.length);

spinnerIcons.forEach((item) => {
  setTimeout(() => {
    process.stdout.write(`\r${item}    `);
  }, time);
  time += 200;
});
setTimeout(() => {
  process.stdout.write(`\n`);
}, totalTime);
