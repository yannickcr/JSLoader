/*
---
script: JSLoader.js

description: a very simple (and limited) Javascript loader

license: MIT-style license.

authors:
- Yannick Croissant

provides: [JSLoader]

...
*/

document.JSLoader = function(j, c){
	var s = document.createElement('script');
	s.async = true;
	s.src = j.shift();
	if (j.length || typeof c == 'function'){
		s.onload = s.onreadystatechange = function(){
			if (this.readyState && this.readyState != 'loaded' && this.readyState != 'complete') return;
			if (j.length) JSLoader(j, c);
			else c();
		};
	}
	var t = document.getElementsByTagName('script')[0];
	t.parentNode.insertBefore(s, t);
}