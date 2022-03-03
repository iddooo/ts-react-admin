export interface IFMenuBase {
    key:string;
    title:string;
    icon?:string;
    component:string;
    route?:string;
    query?:string;
    requireAuth?:string;
    // 是否游客登录 
    login?:boolean;
}

export interface IFMenu extends IFMenuBase {
    subs?:IFMenu[];
}

const routes:{
    menus:IFMenu[];
    others:IFMenu[] | [];
} = {
    menus:[
        { key: '/app/home', title: '首页', icon: 'mobile', component: 'Home' }
    ],
    others:[
        
    ]
}

export default routes