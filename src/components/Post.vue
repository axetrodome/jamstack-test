<template>
	<a-list-item>
		<a-list-item-meta
		  :description="post.body"
		>
		  <a slot="title" href="https://vue.ant.design/">{{post.title}}</a>
		  <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
		</a-list-item-meta>
	</a-list-item>
</template>
<script>
	export default {
		props: ['post']
	}
</script>