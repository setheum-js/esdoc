# Features

esdocs provides a lot of features.

**Core Features (via body)**
- [Doc Comment and Tag](#doc-comment-and-tag)
- [ES Class](#es-class)
- [ES Module](#es-module)
- [Plugin Architecture](#plugin-architecture)

**Standard Features (via [esdocs-standard-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-standard-plugin))**
- [Publish HTML]()
- [Documentation Coverage](#documentation-coverage)
- [Documentation Lint](#documentation-lint)
- [Integration Test Codes](#integration-test-codes)
- [Integration Manual](#integration-manual)
- [Search Documentation](#search-documentation)
- [Type Inference](#type-inference)
- [and more](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-standard-plugin)

**Other Features (via [various plugins](https://github.com/esdocs/esdocs-plugins))**
- [Inject Style](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-inject-style-plugin)
- [Inject Script](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-inject-script-plugin)
- [ECMAScript Proposal](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-ecmascript-proposal-plugin)
- [Flow](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-flow-type-plugin) [PoC]
- [TypeScript](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-typescript-plugin) [PoC]
- [JSX](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-jsx-plugin)
- [React](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-react-plugin) [PoC]
- [Publish Markdown](https://github.com/esdocs/esdocs-plugins/blob/master/esdocs-publish-markdown-plugin) [PoC]
- [and more](https://github.com/esdocs/esdocs-plugins)

## Doc Comment and Tag
esdocs obtains a comment called `doc comment` from a source code. <br/>
Then esdocs generates a document from a `tag` in a `doc comment`.

A `doc comment` is block comment beginning with `*`. A `tag` is a text of the form `@tagName`.

```javascript
/**
 * This is Foo.
 */
export default class Foo {
  /**
   * @param {number} p - this is p.
   */
  method(p){}
}
```

## ES Class
esdocs supports ES class syntax and targets codes that are written by it.

ES class syntax makes the clear relation of class, method, member, constructor and inheritance.<br/>
This means that esdocs can generate a document without using a tag for these. In other words, you don't need to write tags for classes.

esdocs automatically generates the under contents by class syntax.

- Super classes
- Direct Subclasses and Indirect Subclasses.
- Inherited methods and members from super class.
- Override methods and members from super class.

<img src="./asset/image/feature/class1.png" class="screen-shot" width="500px">

<img src="./asset/image/feature/class2.png" class="screen-shot" width="500px">

Note: esdocs doesn't support prototype base codes and function base codes.

## ES Module
esdocs supports ES modules syntax and targets codes that are written by it.<br/>
ES modules syntax is file base. So esdocs treats as one file = one module.

esdocs displays a import style in accordance with the export style.

- If `export default class Foo{}`, displays `import Foo from './Foo.js'` in `Foo` class documentation.
- If `export class Foo{}`, displays ``import {Foo} from './Foo.js'``in `Foo` class documentation.

This is useful because you not need to see export style in source code.

<img src="./asset/image/feature/module1.png" class="screen-shot" width="500px">

And you may as well as use [esdocs-importpath-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-importpath-plugin) to transform path.

Note: esdocs doesn't support commonjs.

## Plugin Architecture
esdocs adopts plugin architecture. So, almost all features are provided as plugins.

Especially [esdocs-standard-plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-standard-plugin) is a packaging plugin with major plugins.<br/>
Normally we recommend using this plugin. There are various plugins in [esdocs/esdocs-plugins](https://github.com/esdocs/esdocs-plugins).

You can easily make plugins, and there are many [third party plugins](https://www.npmjs.com/search?q=esdocs%20plugin&page=1&ranking=optimal).<br/>
Please click [here](./api.html) for how to make plugins.

## Publish HTML
esdocs generates HTML documents that are easy to see and plain looks.

<img class="screen-shot no-border" src="./asset/image/top.png" width="500px">

## Documentation Coverage
esdocs inspects a documentation coverage. This is useful information for the following.

- This leads the motivation of documentation.
- This inspects a missing of documentation.

esdocs processes only top-level class, function and variable.<br/>
This is based on, esdocs measures coverage by how much the document is being written out of all the processing target.<br/>
And, esdocs is also to measure coverage of each module, you will have become easier to also find a missing of the document.

For example, [this](https://doc.esdocs.org/github.com/esdocs/esdocs/source.html) is coverage of esdocs itself.

<img src="./asset/image/feature/coverage1.png" class="screen-shot" width="500px">

## Documentation Lint
If documentation is invalid, esdocs shows warning log.

```javascript
export default class Foo {
  /**
   * @param {number} x
   */
  method(p){}
}
```

<img src="./asset/image/feature/lint.png" class="screen-shot" width="500px">

Note: For now, esdocs lints only method/function signature.

## Integration Test Codes
Test codes are important information.<br/>
So, esdocs generates a cross reference of test codes and document.

```javascript
/** @test {MyClass} */
describe('MyClass is super useful class.', ()=>{

  /** @test {MyClass#sayMyName} */
  it('say my name', ()=>{
    let foo = new MyClass('Alice');
    assert.equal(foo.sayMyName(), 'My name is Alice');
  })
});
```

<img src="./asset/image/feature/test1.png" class="screen-shot" width="500px">

<img src="./asset/image/feature/test2.png" class="screen-shot" width="500px">

## Integration Manual
You can integrate a manual of a your project into documentation.

```
# Overview
This is my project overview.
...
```

<img src="./asset/image/feature/manual1.png" class="screen-shot" width="500px">

<img src="./asset/image/feature/manual2.png" class="screen-shot" width="500px">

## Search Documentation
esdocs supports built-in searching in document with only JavaScript(without server implementation).

The implementation of searching:

- esdocs made the index(JSON) at the time of document generation.
- The user search from the index.

<img src="./asset/image/feature/search1.png" class="screen-shot" width="500px">

Note: This implementation is very naive. There might be a problem in search performance. For now, no problem in 500 indexes.

## Type Inference
esdocs infers type of variables using codes if those have no `@param`.

The following variables are supported.
- A class type using class syntax.
- A method/function arguments type using default argument syntax.
- A property type using assignment value.
- A return type using return value.

Note: This implementation is very simple. So esdocs infers only primitive values(number, boolean, string).
