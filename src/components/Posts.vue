<template>
	<a-list>
		<post v-for="post in posts" :key="post.node.id" :post="post.node"></post>
	</a-list>		
</template>
<script>
	export default {
		props: ['posts'],
	}
</script>