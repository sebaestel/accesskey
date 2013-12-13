# Acesskey

Adds a hint to the title attribute of elements that support accesskey shortcuts.

**Example**

```
// This
<a href="#foo" title="Example" accesskey="1">Lorem Ipsum</a>

// Will become this
<a href="#foo" title="Example [alt+1]" accesskey="1">Lorem Ipsum</a>
```

### How to use

Copy `jquery.accesskey.js` to your scripts folder and then add it to your project. Done!

#### To-do
- Remove dependency on `$.browser`;
- Add Linux support;

## License

Copyright (c) 2012 [Gabriel Izaias](gabrielizaias.com)<br />
Dual licensed under the MIT and GPL licenses:<br />
http://www.opensource.org/licenses/mit-license.php<br />
http://www.gnu.org/licenses/gpl.html