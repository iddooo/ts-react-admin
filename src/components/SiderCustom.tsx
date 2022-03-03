import React, { FC } from "react";
import {Layout, Menu } from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import routes from "../routes/config";
import { useSwitch } from "../utils/hooks";
const { Sider } = Layout
const { SubMenu } = Menu;

const SiderCustom:FC<{}> = ()=>{
    const [collapsed,tCollapsed] = useSwitch()
    return (
        <Sider 
            trigger={null} 
            collapsible
            collapsed={collapsed} >
            <div className="logo" />
        </Sider>
    )
}


export default SiderCustom;
