// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import Post from '~/components/Post.vue';
import Posts from '~/components/Posts.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
export default function (Vue, { router, head, isClient }) {
	Vue.use(Antd)
	Vue.component('Layout', DefaultLayout)
	Vue.component('Posts', Posts)
	Vue.component('Post', Post)
}
