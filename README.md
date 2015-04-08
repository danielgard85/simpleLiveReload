# Simple Live Reload
================

## Overview
Simple app using NodeJS + Grunt + Express to play around with css/js/html files.

### Prerequisites

To run this project you will need to have installed:
 
[NodeJs]("//nodejs.org/download") & npm (_node package manager_ that comes with NodeJs)
[Grunt]("//gruntjs.com/getting-started") & Grunt CLI (_Grunt command line interface_)  Both installed via npm

To check that NodeJS & GruntCli are installed correctly type on you command line: 

	node --version && npm --version && grunt --version 

this command will show you the version of node, npm, grunt cli and grunt such as:

	v0.10.26
	1.4.3
	grunt-cli v0.1.13
	grunt v0.4.5

##Startup

Once you have NodeJs & npm installed, you'll have to:
 
1. Clone this project to your local machine

		git clone "https://github.com/danielgard85/simpleLiveReload.git"

2. Install modules and dependencies using

		npm install

3. Run Grunt to start the process

		grunt

  This command will start the server and start watching for changes inside your project folders (as stated inside Gruntfile.js)

To stop the process type  `Ctrl + C` and you'll be prompted to finish batch job, type 'y' and hit 'enter'