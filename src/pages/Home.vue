<template>
	<Layout>
		<posts :posts="$page.posts.edges"></posts>
	</Layout>	
</template>
<page-query>
query Posts {
  posts: allBlogPosts {
    edges {
      node { 
        id
        title
        body
      }
    }
  }
}
</page-query>
<script>
	export default {
		metaInfo: {
		  title: 'Home'
		}
	}
</script>