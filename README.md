[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/besrourms/ZodiacSigns/blob/main/LICENSE)
[![](https://data.jsdelivr.com/v1/package/gh/besrourms/cal-format-js/badge)](https://www.jsdelivr.com/package/gh/besrourms/cal-format-js)

# cal-format-js
cal-format-js is a JavaScript library that simplifies the formatting of dates in multiple calendars. It provides an easy-to-use interface for formatting dates in various calendar systems, including Gregorian, Islamic, and others.

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/besrourms/cal-format-js@latest/index.min.js"></script>
```
## Examples

```js
console.log(new Calendars())
// Return
{
    "gregory": "Monday, March 11, 2024"
}
```
```js
console.log(new Calendars('fr', 'TN'))
// Return
{
    "gregory": "lundi 11 mars 2024",
    "islamic": "lundi 1 ramadan 1445 AH",
    "islamic-civil": "lundi 1 ramadan 1445 AH",
    "islamic-tbla": "lundi 2 ramadan 1445 AH"
}
```
```js
console.log(new Calendars('ar', 'TN', '1991-11-30'))
// Return
{
    "gregory": "السبت، 30 نوفمبر 1991",
    "islamic": "السبت، 24 جمادى الأولى 1412 هـ",
    "islamic-civil": "السبت، 23 جمادى الأولى 1412 هـ",
    "islamic-tbla": "السبت، 24 جمادى الأولى 1412 هـ"
}
```
