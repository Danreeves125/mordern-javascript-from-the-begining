// Look at MDN documentation for more info.

let val;

const today = new Date();

let birthday = new Date('05/10/1994 12:00:00');
birthday = new Date('October 05 1994');

val = today.getMonth(); // month starts from 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3);
birthday.setMinutes(30);
birthday.setSeconds(30);


console.log(birthday);