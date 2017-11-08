const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children: [
            {
                path: '/form-control',
                meta: {},
                component: (resolve) => require(['./views/pages/form-control/index.ts'], resolve)
            }
        ]
    }
];
export default routers;