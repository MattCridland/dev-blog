var metalsmith = require('metalsmith');

metalsmith(__dirname)
  .metadata({
	  site: {
		  name: 'Dev Blog',
		  description: "Matt codes and now he wants to write about it."
	  }
  })
.source('./src')
.destination('./pubic')
.build(function (err) {
	if(err) {
		console.log(err);
	}
	else {
		console.log('Blog built!');
	}
});
