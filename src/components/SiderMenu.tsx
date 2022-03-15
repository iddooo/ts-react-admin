import React from "react";
import { MenuProps } from "antd/lib/menu";
import { Menu } from "antd";
import { IFMenu } from "../routes/config";
import Icon , { DesktopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { Item, SubMenu, ItemGroup } = Menu;
/**
 * sideMenuProps 同时具备 MenuProps类型 和 {...}
 */
type SiderMenuProps = MenuProps & {
    menus?:IFMenu[]
}

const renderMenu = (item:IFMenu) => {
    return (
        <Item 
            key={item.key}>
                <Link to={(item.key || item.route) + (item.query || '')}>
                    <span className="nav-text">{item.title}</span>
                </Link>
        </Item>
    )
}

const renderSubMenu = (item:IFMenu)=>{
    return (
        <SubMenu
            key={item.key}
            title={
                <span>
                    { item.icon ? <Icon type={item.icon} /> : <DesktopOutlined /> }
                    <span className="nav-text">{item.title}</span>
                </span>
            }>
               {
                    item.subs!.map((sub)=>{ 
                        return sub.subs? renderSubMenu(sub) : renderMenu(sub) 
                    })
                }
        </SubMenu>
    )
}

const SiderMenu = ({menus, ...props}: SiderMenuProps)=>{

    return (
        <Menu {...props}>
            {menus?.map( m=>{
                return m.subs ? (
                        <ItemGroup
                            key={m.key}
                            title={m.title}>
                                { 
                                    m.subs!.map( subm => { 
                                        return subm.subs ? renderSubMenu(subm) : renderMenu(subm)
                                    })
                                }
                        </ItemGroup>
                        ) : renderMenu(m)
                
            })}
        </Menu>
        // <Menu mode="inline">
        //     <ItemGroup key='/app/operating' title="运营中心">
        //         <SubMenu key='/app/operating/user' title="用户管理">
        //             <Item>子菜单项</Item>
        //             <Item>子菜单项</Item>
        //         </SubMenu>
        //         <SubMenu key='/app/operating/user2' title="用户管理2">
        //             <Item>子菜单项</Item>
        //             <Item>子菜单项</Item>
        //         </SubMenu>
        //     </ItemGroup>
        //     <ItemGroup key='/app/maintenance' title="运维中心">
        //         <SubMenu key='/app/maintenance/equipment' title="设备管理">
        //             <Item>子菜单项</Item>
        //             <Item>子菜单项</Item>
        //         </SubMenu>
        //     </ItemGroup>
        // </Menu>
    )
}

export default SiderMenu
