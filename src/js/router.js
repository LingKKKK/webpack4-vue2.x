export default {
	routes: [
		{
			path: '/',
			name: 'HelloWorld',
			component: resolve => require(['@/js/page/demo'], resolve),
			meta: {
				auth: true
			}
		}, {
			path: '/demo1',
			name: 'demo1',
			component: resolve => require(['@/js/page/demo1'], resolve),
			meta: {
				auth: true
			}
		}, {
			path: '/demo2',
			name: 'demo2',
			component: resolve => require(['@/js/page/demo2'], resolve),
			meta: {
				auth: true
			}
		}
	]
}
