JSLoader
====

A very simple (and limited) Javascript loader

Usage
-----

Include JSLoader in your page and use it (yep, it's very simple).

	JSLoader(scripts[, callback])

### Arguments:

1. scripts - (array) An array of scripts to load
2. callback - (function) A function to execute when all the scripts of the array are loaded

Load a script
-------------

	JSLoader(['myscript.js']);
	
Load a script and execute a callback
------------------------------------

	JSLoader(['myscript.js'], function(){
		// myscript is loaded
	});
	
Load many scripts (queue) and execute a callback
-------------------------

	JSLoader(['myscript1.js', 'myscript2.js'], function(){
		// myscript1 and myscript2 are loaded
	});

myscript2.js will load after myscript1.js completes and the callback will be executed after loading all scripts.

Load many scripts (parallel)
----------------------------

	JSLoader(['myscript1.js]);
	JSLoader(['myscript2.js]);
	
This will load all two scripts in parallel.