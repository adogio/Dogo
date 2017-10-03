# Dogo

[![npm version](https://badge.fury.io/js/dogo.svg)](https://badge.fury.io/js/dogo)
[![downloads](https://img.shields.io/npm/dm/dogo.svg)](https://badge.fury.io/js/dogo)

:small_red_triangle: Logo of adogio

> Dogo is a component of React, you may need webpack/ babel to use it.

## Usage

### Install

```bash
npm install dogo --save
yarn add dogo
```

### Import 

```js
import Dogo from 'dogo'
```

### Insert

```jsx
<Dogo 
    text="logoName"
    sub="subName"
    size="large/medium(default if not assign size)/small"
    num="mainLogo(logoId use to trigger animate)(leave empty to use single way trigger)"
    onClick="function on click"
    center="center color"
    width="logo width(number)"// use like width={15}
    height="logoHeight"
/>
```

### Active!!

#### with num assigned

```js
window.adog.logo[num].load();
window.adog.logo[num].unload();
window.adog.logo[num].success();
window.adog.logo[num].failed();
```

```js
window.adog.logo.*num*.load();
window.adog.logo.*num*.unload();
window.adog.logo.*num*.success();
window.adog.logo.*num*.failed();
```

#### without num assigned

```js
window.adog.logo.load();
window.adog.logo.unload();
window.adog.logo.success();
window.adog.logo.failed();
```

## License

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.