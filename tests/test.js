// test/test.js

import { happyNewYear } from '../lib/index.js';

const countdown = happyNewYear();

console.log(countdown);
console.log(`Time left until New Year: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, and ${countdown.seconds} seconds.`);
