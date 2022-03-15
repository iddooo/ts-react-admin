import React from "react";
import {Layout } from "antd";
import routes, { IFMenu, IFMenuBase } from "../routes/config";
import icon from '../images/icon.png'
import SiderMenu from "./SiderMenu";
import { useAlita } from "redux-alita";
import { RouteComponentProps } from "react-router-dom";

const { Sider } = Layout

type siderCustomProps = {
    collapsed?:boolean;
    auth:any
} & RouteComponentProps

const SiderCustom = (props:siderCustomProps)=>{  
    const { history } = props;
    const {permissions = [] } = props.auth
    // console.log('SiderCustom',props)

    const customMenu = (menus:IFMenu[]) => {
        // console.log('permissions',permissions)
        // if(!p){
        //     history.push('/login')
        // }
        console.log(menus.map( r=> {
            return r.subs ? filterSubMenu(r.subs) : filterMenu(r)
        }))
        return menus.map( r=> {
            return r.subs ? filterSubMenu(r.subs) : filterMenu(r)
        })
    }

    const filterSubMenu = (r:IFMenu[]):any => {
        // return r.map( (subR: IFMenu)=> subR.subs ? filterSubMenu(subR.subs) : filterMenu(subR))
        return r.filter(subR=>{
            if(subR.subs){
                filterSubMenu(subR.subs)
            }

            if(filterMenu(subR)){
                let obj = {
                }
            }
        })
    }

    const filterMenu = (r:IFMenuBase)=>{
        if(r.roles && rolesInPermits(r.roles)){
            console.log(r)
            return r
        }
    }

    const rolesInPermits = (roles: any[])=>{
            return roles.some(role=> {
                if(permissions.includes(role)){
                    return true
                }
            })
    }

    console.log('menus',customMenu(routes.menus))

    return (
        <Sider 
            trigger={null} 
            collapsible
            width={188}
            collapsed={props.collapsed}
            className="sider-custom" >
            <div className="logo center">
                <img src={icon} alt="" />
                {!props.collapsed ? (<span>小红心</span>): null}
            </div>
            <SiderMenu 
                menus={[...customMenu(routes.menus)]}
                mode="inline"/>
        </Sider>
    )
}

// withRouter（component）路由相关的方法通过props传给它包裹的组件的props上
export default SiderCustom;
