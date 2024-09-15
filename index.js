import { getCurrentDate } from './getDate.js';
import { getCurrentTime } from './getTime.js';

const date = getCurrentDate();
const time = getCurrentTime();

console.log(`Поточна дата та час: ${date} ${time}`);
