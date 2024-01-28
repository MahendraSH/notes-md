- [JavaScript Date Objects](#javascript-date-objects)
- [JavaScript Date Formats](#javascript-date-formats)
- [JavaScript Get Date Methods](#javascript-get-date-methods)
- [JavaScript Set Date Methods](#javascript-set-date-methods)

## imp topics 🚀

- [The Date.now() Method](#the-datenow-method)
- [The getTimezoneOffset() Method](#the-gettimezoneoffset-method)
- [Date Input - Parsing Dates](#date-input---parsing-dates)

## JavaScript Date Objects

```js
const d = new Date();
console.log(d);
// 2024-01-27T07:43:59.145Z
```

```js
const d = new Date("2022-03-25");
console.log(d);
// 2022-03-25T00:00:00.000Z
```

```js
const d = new Date("October 13, 2014 11:13:00");
console.log(d);
// 2014-10-13T05:43:00.000Z
```

### Creating Date Objects

```js
new Date()
new Date(date string)

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)
```

### Previous Century

- One and two digit years will be interpreted as 19xx:

```js
const d = new Date(99, 11, 24);
console.log(d);
// 1999-12-23T18:30:00.000Z
```

```js
const d = new Date(9, 11, 24);
console.log(d);
// 1909-12-23T18:30:00.000Z
```

### new Date(milliseconds) `js stores in milliseconds  0 -> 01 January 1970 `

```js
const d = new Date(0);
console.log(d.toUTCString());
// Thu, 01 Jan 1970 00:00:00 GMT
```

```js
const d = new Date(100000000000);
console.log(d.toUTCString());
// Sat, 03 Mar 1973 09:46:40 GMT
```

```js
const d = new Date(-100000000000);
console.log(d.toUTCString());
// Mon, 31 Oct 1966 14:13:20 GMT
```

- `+ 24 hours`

```js
const d = new Date(24 * 60 * 60 * 1000);
console.log(d.toUTCString());
// Fri, 02 Jan 1970 00:00:00 GMT
```

### Displaying Dates

```js
const d = new Date(0);
console.log(d.toUTCString());
// Thu, 01 Jan 1970 00:00:00 GMT
```

```js
const d = new Date(0);
console.log(d.toISOString());
// 1970-01-01T00:00:00.000Z
```

```js
const d = new Date();
console.log(d.toString());
// Sat Jan 27 2024 16:00:19 GMT+0530 (India Standard Time)
```

```js
const d = new Date();
console.log(d.toDateString());

// Sat Jan 27 2024
```

## JavaScript Date Formats

### Date Input

| **Type**   | **Example**                               |
| ---------- | ----------------------------------------- |
| ISO Date   | "2015-03-25" (The International Standard) |
| Short Date | "03/25/2015"                              |
| Long Date  | "Mar 25 2015" or "25 Mar 2015"            |

# Note

```md
- ISO format follows a strict standard in JavaScript.

- The other formats are not so well defined and might be browser specific.
```

```js
## By defalut ISO output
const d = new Date();
console.log(d.toString());
// Sat Jan 27 2024 16:11:07 GMT+0530 (India Standard Time)
```

```md
- (YYYY-MM-DD)
- (YYYY-MM)
- (YYYY)
- (Date-Time): (YYYY-MM-DDTHH:MM:SSZ)/ (2015-03-25T12:00:00Z):
- Date and time is separated with a capital T.

- UTC time is defined with a capital letter Z.

- If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead
  `("2015-03-25T12:00:00-06:30")`

- UTC (Universal Time Coordinated) is the same as GMT (Greenwich Mean Time).
```

# Note :

```md
# In may browsers

- do not Ommit `zeros` in eg (2001-09) (YYYY-MM)
- (yyyy/mm/dd): NAN / undefined
- (yyyy-mm-dd): NAN / undefined
```

# JavaScript Long Dates

- "MMM DD YYYY"

```js
const d = new Date("Mar 25 2015");
const d = new Date("25 Mar 2015");
const d = new Date("25 January 2015"); // or jan / JAN
```

# Date Input - Parsing Dates

- If you have a valid date string, you can use the Date.parse() method to convert it to milliseconds.

- Date.parse() returns the number of milliseconds between the date and January 1, 1970:

```js
let msec = Date.parse("March 21, 2012");
console.log(msec);
// 1332268200000

let d = new Date(1332268200000);
console.log(d.toString());
console.log(d.toLocaleString());
// Wed Mar 21 2012 00:00:00 GMT+0530 (India Standard Time)
// 21/3/2012, 12:00:00 am
```

## JavaScript Get Date Methods

| Method            | Description                                       |
| ----------------- | ------------------------------------------------- |
| getFullYear()     | Get **year** as a four digit number (yyyy)        |
| getMonth()        | Get **month** as a number (0-11)                  |
| getDate()         | Get **day** as a number (1-31)                    |
| getDay()          | Get **weekday** as a number (0-6)                 |
| getHours()        | Get **hour** (0-23)                               |
| getMinutes()      | Get **minute** (0-59)                             |
| getSeconds()      | Get **second** (0-59)                             |
| getMilliseconds() | Get **millisecond** (0-999)                       |
| getTime()         | Get **time** (milliseconds since January 1, 1970) |

## The Date.now() Method

- static function to get now time in milliseonds since Jan 1 ,1970

```js
let ms = Date.now();
// Return the current date/time in milliseconds since January 1, 1970:

// 1706354010267
```

## The getTimezoneOffset() Method

- The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

```js
const d = new Date();
console.log(d.getTimezoneOffset()); // -330 ( 5 hrs : 30min   in India )
```

### UTC Date Get Methods

| Method               | Same As           | Description                  |
| -------------------- | ----------------- | ---------------------------- |
| getUTCDate()         | getDate()         | Returns the UTC date         |
| getUTCFullYear()     | getFullYear()     | Returns the UTC year         |
| getUTCMonth()        | getMonth()        | Returns the UTC month        |
| getUTCDay()          | getDay()          | Returns the UTC day          |
| getUTCHours()        | getHours()        | Returns the UTC hour         |
| getUTCMinutes()      | getMinutes()      | Returns the UTC minutes      |
| getUTCSeconds()      | getSeconds()      | Returns the UTC seconds      |
| getUTCMilliseconds() | getMilliseconds() | Returns the UTC milliseconds |

## JavaScript Set Date Methods

| Method            | Description                                       |
| ----------------- | ------------------------------------------------- |
| setDate()         | Set the day as a number (1-31)                    |
| setFullYear()     | Set the year (optionally month and day)           |
| setHours()        | Set the hour (0-23)                               |
| setMilliseconds() | Set the milliseconds (0-999)                      |
| setMinutes()      | Set the minutes (0-59)                            |
| setMonth()        | Set the month (0-11)                              |
| setSeconds()      | Set the seconds (0-59)                            |
| setTime()         | Set the time (milliseconds since January 1, 1970) |
