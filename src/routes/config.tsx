
export interface IFMenuBase {
    key:string;
    title:string;
    icon?:string;
    component?:string;
    route?:string;
    query?:string;
    requireAuth?:string;
    // 是否游客登录 
    login?:boolean;
    roles?:number[]
}

export interface IFMenu extends IFMenuBase {
    subs?:IFMenu[];
}

const routes:{
    menus:IFMenu[];
    others:IFMenu[] | [];
    [key: string]: any;
} = {
    menus:[
        {
            key:'/home',
            title:'首页', 
            component:'Home',
            roles:[1]
        },
        {
            key:'/operating',
            title:'运营中心',
            subs:[
                { 
                    key:"/operating/user",
                    title:'用户管理',
                    subs:[
                        { key:'/operating/user/userList', title:'用户列表', component:"UserList",roles:[1]}
                    ]
                },
                { 
                    key:"/operating/user1",
                    title:'用户管理1',
                    subs:[
                        { key:'/operating/user/userList1', title:'用户列表1', component:"UserList",roles:[]}
                    ]
                }
            ]

        },
        {
            key:'/maintenance',
            title:'运维中心',
            subs:[
                {
                    key:'/maintenance/equipment',
                    title:'设备管理',
                    subs:[
                        { key:"/maintenance/equipment/recyclingMachine", title:"可回收设备列表", component:"RecyclingMachine",roles:[2]}
                    ]
                }
            ]
        }
    ],
    others:[
        
    ]
}

export default routes