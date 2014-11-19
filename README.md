simpleLiveReload
================

<h3> Overview </h3>
<p>Simple app using NodeJS + Grunt + Express to play around with css/js/html files.</p>
<h3>Prerequisites</h3>
<p>To run this project you will need to have installed:</p>
<ol>
<li><a href="//nodejs.org/download">NodeJs</a> &amp; npm --node package manager-- (comes with NodeJs);</li>
<li>Grunt &amp; <a href="//gruntjs.com/getting-started">Grunt CLI</a>(Grunt command line interface) <br>Both installed via npm</li>
<li>&amp; Express (Also a module from NodeJs)</li>
</ol>
<p>To check that NodeJS & GruntCli are installed correctly type on you command line: 
<pre>node --version && npm --version && grunt --version</pre> 
<p>this command will show you the version of node, npm, grunt cli and grunt in my case something like this:
<pre>
v0.10.26
1.4.3
grunt-cli v0.1.13
grunt v0.4.5

</pre>
</p>

<h3>Startup</h3>
<p>Once having NodeJs &amp npm installed, you'll have to:</p>
<ol>
<li>Clone this project to your local machine</li>
<li>From command line type <pre>npm install</pre> to download modules required</li>
<li>Type <pre>grunt</pre> <br> This command will start the server and start watching for changes inside your project folders (as stated inside Gruntfile.js)</li>
<li>To stop the process type <pre>Ctrl + C</pre> and you'll be prompted to finish batch job, type 'y' and hit 'enter'</li>
</ol>

