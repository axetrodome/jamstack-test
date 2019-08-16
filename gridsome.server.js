// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function (api) {
	api.loadSource(async store => {
		// refactor add users and comments
		// study: https://gridsome.org/docs/data-store-api/
		const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
		const posts = store.addContentType({
			typeName: 'BlogPosts'
		});
		
		for (const post of data) {
			posts.addNode({
				id: post.id,
				title: post.title,
				body: post.body,
			})
		}
	})
	api.loadSource(({ addContentType }) => {
	// Use the Data Store API here: https://gridsome.org/docs/data-store-api
	})

	api.createPages(({ createPage }) => {
	// Use the Pages API here: https://gridsome.org/docs/pages-api
	})
}
