grunt-french-html
=================

Grunt task to replace french special characters by their html code in a given file

### Grunt Installation

1. Install node.js: [http://nodejs.org/] (the npm module is needed by Grunt)
2. Install the Grunt Command Line tools

```
$ npm install -g grunt-cli
```

### Grunt-french-html setup
1. Download the code to your local environment: <grunt-french-html-path>
2. Go to the folder that you just downloaded `$ cd <grunt-french-html-path>`
3. Run the following command `$ npm install`. This will install grunt and the required plugins. 


### Replacing characters in a file
Once you have completed the set up of Grunt-french-html go to the installation path and just run the following command: 

```
$ grunt replace:dist --file=<file-path>
```

Replacing `<file-path>` with the path of the file that you want to process. The file will be overwritten with the special characters replaced by their html code equivalent. 
