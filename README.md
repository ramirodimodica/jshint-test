#jshint-test

##installation
1. Install [NodeJS](http://nodejs.org/download/ "Nodejs downloads") in your system, then run the node console
2. Install [Grunt CLI](http://gruntjs.com/getting-started "Getting started with grunt") (npm install -g grunt-cli)
3. Make sure that git is added to your system environment variables (usually you have to add "C:\Program Files (x86)\Git" and "C:\Program Files (x86)\Git\bin" without quotes), also if variables were added remember to close and reopen your node console.
4. Run a npm install (this will read the package.json and install all the grunt required tasks in node_modules folder)

## Folder Structure: (TODO: update this)
-------------------------
  .
  ├── result
  │   ├──css
  │   │   └── style.css
  │   ├──js
  │   │   └── result.js
  │   └── index.html
  │
  ├── test
  │   ├── css
  │   │   └── style.css
  │   ├── js
  │   │   └── something.js
  │   ├── all.css
  │   ├── all.less
  │   ├── index.html
  │   ├── main.js
  │   └── test.png
  │
  ├── README.md
  ├── Gruntfile.js
  └── packgage.json