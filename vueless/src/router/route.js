// 懒加载适配器
let _import;
if(process.env.NODE_ENV == 'development') {
    _import = file => require('@/views/' + file + '.vue').default
} else {
    _import = file => () => import('@/views/' + file + '.vue')
}
// 基础路由映射
export const commonRoute = [
    {
        path: '/',
        component: _import('index'),
        redirect: 'home',
        children: [{
            path: '/home',
            component: _import('dashboard/index'),
            name: 'home',
            meta: { icon: 'dashboard', noCache: true }
        }, {
        	path: '/icon',
          	component: _import('svg'),
          	name: 'icons',
          	meta: { icon: 'icon', noCache: true, code: 10010 }
        }, {
        	path: '/keyboard', 
        	component: _import('charts/keyboard'), 
        	name: 'keyboardChart', 
        	meta: { noCache: true, code: 10041, tree: 'charts' }
        }, {
        	path: '/line', 
        	component: _import('charts/line'), 
        	name: 'lineChart', 
        	meta: { noCache: true, code: 10042, tree: 'charts' }
        }, {
        	path: '/mixchart', 
        	component: _import('charts/mixChart'), 
        	name: 'mixChart', 
        	meta: { noCache: true, code: 10043, tree: 'charts' }
        }, {
        	path: '/dynamic-table', 
        	component: _import('example/table/dynamicTable/index'), 
        	name: 'dynamicTable', 
        	meta: { code: 10051, tree: 'example' }
        }, {
        	path: '/drag-table', 
        	component: _import('example/table/dragTable'),
        	name: 'dragTable',
        	meta: { code: 10052, tree: 'example' }
        }, {
        	path: '/inline-edit-table', 
        	component: _import('example/table/inlineEditTable'), 
        	name: 'inlineEditTable', 
        	meta: { code: 10053, tree: 'example' }
        }, {
        	path: '/tree-table', 
        	component: _import('example/table/treeTable/treeTable'), 
        	name: 'treeTableDemo', 
        	meta: { code: 10054, tree: 'example' }
        }, {
        	path: '/custom-tree-table', 
        	component: _import('example/table/treeTable/customTreeTable'), 
        	name: 'customTreeTable', 
        	meta: { code: 10055, tree: 'example' }
        }, {
        	path: '/complex-table', 
        	component: _import('example/table/complexTable'), 
        	name: 'complexTable', 
        	meta: { code: 10056, tree: 'example' }
        }, {
        	path: '/tab', 
        	component: _import('example/tab/index'), 
        	name: 'tab', 
        	meta: { code: 10057, tree: 'example' }
        }, {
        	path: '/export-excel', 
        	component: _import('excel/exportExcel'), 
        	name: 'exportExcel', 
        	meta: { code: 10058, tree: 'example' }
        }, {
        	path: '/download', 
        	component: _import('zip'), 
        	name: 'zip', 
        	meta: { }
        }]
    },
    { path: '/login', component: _import('login')},
    { path: '/404', component: _import('404')},
    { path: '/401', component: _import('401')},
    { path: '*', redirect: '/404' }
]

export default commonRoute