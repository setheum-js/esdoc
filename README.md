<!--![Owner Status](https://img.shields.io/badge/owner-busy-red.svg)-->
[![Build Status](https://travis-ci.org/esdocs/esdocs.svg?branch=master)](https://travis-ci.org/JBA-Khalifa/esdocs)
[![Document](https://doc.esdocs.org/github.com/esdocs/esdocs/badge.svg?t=0)](https://doc.esdocs.org/github.com/esdocs/esdocs)

# esdocs

esdocs is a documentation generator for JavaScript.<br/>
Please <a href="https://try.esdocs.org">try it out</a>!

<img class="screen-shot" src="https://raw.githubusercontent.com/esdocs/esdocs/master/manual/asset/image/top.png" width="500px" style="max-width: 500px; border: 1px solid rgba(0,0,0,0.1); box-shadow: 1px 1px 1px rgba(0,0,0,0.5);">

# Features
- Generates good documentation.
- Measures documentation coverage.
- Integrate test codes into documentation.
- Integrate manual into documentation.
- Parse ECMAScript proposals.
- [esdocs Hosting Service](https://doc.esdocs.org)

# Users
- [esdocs](https://doc.esdocs.org/github.com/esdocs/esdocs/) (self-hosting &#x1F604;)
- [RxJS](http://reactivex.io/rxjs/)
- [Sketch API](http://developer.sketchapp.com/reference/api/)

And [more](https://github.com/search?o=desc&q=esdocs+filename%3Apackage.json+-user%3Ah13i32maru+-user%3Aesdocs+-user%3Aes-doc&ref=searchresults&s=indexed&type=Code&utf8=%E2%9C%93).

# Quick Start
```sh
# Move to a your project directory.
cd your-project/

# Install esdocs and standard plugin.
npm install --save-dev esdocs esdocs-standard-plugin

# Create a configuration file.
echo '{
  "source": "./src",
  "destination": "./docs",
  "plugins": [{"name": "esdocs-standard-plugin"}]
}' > .esdocs.json

# Run esdocs.
./node_modules/.bin/esdocs

# View a documentation
open ./docs/index.html
```

# Document
please visit [esdocs.org](https://esdocs.org) to see more documentation.

# License
MIT

## Authors

[Muhammad-Jibril B.A. @JBA-Khalifa](https://github.com/JBA-Khalifa)
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)
