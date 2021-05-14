# FAQ
- [Goal](#goal)
- [Difference between esdocs and JSDoc](#difference-between-esdocs-and-jsdoc)
- [Supported Environment](#supported-environment)
- [Import Path In Documentation](#import-path-in-documentation)
- [Who's Using esdocs](#who-s-using-esdocs)
- [Articles](#articles)

## Goal
esdocs has two goals.

- To make documentation maintenance comfortable and pleasant
- To create easy-to-understand documentation.

In order to achieve this two goals, esdocs produces a practical document, measures the coverage, integrates the test code and more.

## Difference between esdocs and JSDoc
JSDoc is most popular JavaScript API Documentation tool.
esdocs is inspired by JSDoc.

- esdocs
  - supports ES2015 and later
  - targets at ES2015 ``class`` and ``import/export`` style
  - easy to use with fewer tags, because understand information from ES syntax.
  - generates detailed document
  - measures document coverage
  - integrates test codes
  - integrates manual
- JSDoc
  - supports ES3/ES5 and ES2015
  - targets Class-base OOP and Prototype-base OOP
  - has many flexible document tags

## Supported Environment
esdocs supports Node.js(v6 or later)

## Import Path In Documentation
esdocs displays the import path of class/function into the document.<br/>
However, the import path may be different from real import path because usually ES modules is transpiled to use it.

So, [esdocs Import Path Plugin](https://github.com/esdocs/esdocs-plugins/tree/master/esdocs-importpath-plugin) converts import path to real import path.

## Who's Using esdocs
- [RxJS](http://reactivex.io/rxjs/)
- [Sketch API](http://developer.sketchapp.com/reference/api/)
- [Netflix/unleash](https://github.com/Netflix/unleash)
- [lonelyplanet/rizzo-next](https://github.com/lonelyplanet/rizzo-next)
- [linkedin/hopscotch](https://github.com/linkedin/hopscotch/tree/gh72)
- [electron/electron-compile](https://github.com/electron/electron-compile)

And [more](https://github.com/search?o=desc&q=esdocs+filename%3Apackage.json+-user%3Ah13i32maru+-user%3Aesdocs+-user%3Aes-doc&ref=searchresults&s=indexed&type=Code&utf8=%E2%9C%93).

## Articles
- English
  - [Write a documentation React and ES6 project by esdocs | en.blog.koba04](http://en.blog.koba04.com/2015/06/28/esdocs-documentation-for-react-and-es6/)
  - [ECMAScript 6 documentation generators | stackoverflow](http://stackoverflow.com/questions/27334309/ecmascript-6-documentation-generators)
  - [esdocs – A Documentation Generator for JavaScript(ES6) | Hacker News](https://news.ycombinator.com/item?id=10002867)
  - [Document ES6 with esdocs](http://jonathancreamer.com/document-es6-with-esdocs/)
  - [ES2015 | Web | Google Developers](https://developers.google.com/web/shows/ttt/series-2/es2015)
- Japanese
  - [esdocsというJavaScript向けのAPIドキュメントツールを作りました | maru source](http://blog.h13i32maru.jp/entry/2015/05/06/221041)
  - <a href="http://jser.info/2015/05/06/iojs2.0.0-msedge-isomorphic/#esdocs---an-api-document-generator-for-javascript(es6)">esdocs - An API Document Generator For JavaScript(ES6) | JSer.info</a>
  - [esdocs - ES6時代のドキュメンテーションツール | Speacker Deck](https://speakerdeck.com/h13i32maru/esdocs-es6shi-dai-falsedokiyumentesiyonturu)
  - [esdocs を試す | アカベコマイリ](http://akabeko.me/blog/2015/07/esdocs/)
