var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');

metalsmith(__dirname)
  .metadata({
	  site: {
		  name: 'Dev Blog',
		  description: "Matt codes and now he wants to write about it."
	  }
  })
.source('./src')
.destination('./public')
.use(markdown())
.use(layouts({
	engine: 'handlebars',
	directory: 'layouts',
	default: 'default.hbs'
}))
.build(function (err) {
	if(err) {
		console.log(err);
	}
	else {
		console.log('Blog built!');
	}
});
