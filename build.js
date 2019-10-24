var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var collections = require('metalsmith-collections');
var permalinks = require('metalsmith-permalinks');

metalsmith(__dirname)
  .metadata({
	  site: {
		  name: 'Dev Blog',
		  description: "Matt codes and now he wants to write about it."
	  }
  })
.source('./src')
.destination('./public')
.use(collections({
	articles: 'articles/*.md'
}))
.use(markdown())
.use(permalinks({
	duplicatesFail: true,
	linksets: [
		{
			match: { collection: 'articles' },
			pattern: 'blog/:title',
			date: 'YYYY/MM'
		}
        ]
}))
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
