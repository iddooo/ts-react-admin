import React, {FC} from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
const { Header } = Layout

interface HeaderCustomProps {
    collapsed:boolean;
    toggle: ()=>void
}

const HeaderCustom:FC<HeaderCustomProps> = (props:HeaderCustomProps):JSX.Element =>{
    return (
        <Header className="header" style={{ padding: 0 }}>
            { React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,{
                className:'trigger',
                onClick: props.toggle,
            })}
        </Header>
    )
}

export default HeaderCustom