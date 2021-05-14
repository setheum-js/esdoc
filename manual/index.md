esdocs is a good documentation generator for JavaScript.

<img class="screen-shot no-border" src="./manual/asset/image/top.png" width="400px">

# Features
- Generates good documentation.
- Measures documentation coverage.
- Integrate test codes into documentation.
- Integrate manual into documentation.
- Parse ECMAScript proposals.
- Add custom features by [plugin architecture](https://github.com/esdocs/esdocs-plugins)
- [esdocs Hosting Service](https://doc.esdocs.org)

# Users
- [esdocs](https://doc.esdocs.org/github.com/esdocs/esdocs/) (self-hosting &#x1F604;)
- [RxJS](http://reactivex.io/rxjs/)
- [Sketch API](http://developer.sketchapp.com/reference/api/)

And [more](https://github.com/search?o=desc&q=esdocs+filename%3Apackage.json+-user%3Ah13i32maru+-user%3Aesdocs+-user%3Aes-doc&ref=searchresults&s=indexed&type=Code&utf8=%E2%9C%93).

# Quick Start
```sh
# move to a your project directory
cd your-project/

# install esdocs and standard plugin
npm install esdocs esdocs-standard-plugin

# write a configuration file.
echo '{
  "source": "./src",
  "destination": "./docs",
  "plugins": [{"name": "esdocs-standard-plugin"}]
}' > .esdocs.json

# run esdocs
./node_modules/.bin/esdocs

# see a documentation
open ./docs/index.html
```

# License
MIT

# Author
[Ryo Maruyama@h13i32maru](https://twitter.com/h13i32maru)

