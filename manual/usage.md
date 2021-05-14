# Usage
- [Installation](#installation)
- [Configuration](#configuration)
- [Writing Tags](#writing-tags)

## Installation
Install esdocs and standard-plugin from npm.

```sh
cd your-project/
npm install --save-dev esdocs esdocs-standard-plugin
./node_modules/.bin/esdocs -h
```

## Configuration
The minimum configuration is the following JSON. All configurations are [here](./config.html).

<p class="file-path">.esdocs.json</p>
```json
{
  "source": "./src",
  "destination": "./docs",
  "plugins": [
    {"name": "esdocs-standard-plugin"}
  ]
}
```

esdocs automatically finds the configuration file path by the order, if you don't specify `-c esdocs.json`.

1. `.esdocs.json` in the current directory
2. `.esdocs.js` in the current directory
3. `esdocs` property in `package.json`

## Writing Tags
esdocs supports some documentation tags(aka. jsdoc tags). All tags are [here](./tags.html).

```javascript
/**
 * this is MyClass.
 */
export default class MyClass {
  /**
   * @param {number} a - this is a value.
   * @param {number} b - this is a value.
   * @return {number} result of the sum value.
   */
  sum(a, b){
    return a + b;
  }
}
```

And run esdocs.
```
./node_modules/.bin/esdocs
open ./docs/index.html
```

