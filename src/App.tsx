import React, {FC, useState} from 'react';
import { Layout, Breadcrumb } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom'
import './App.css';

const { Content, Footer } = Layout;


const App:FC<{}> = ()=>{
    const [collapsed,setCollapsed] = useState<boolean>(false)
    
    function toggle(){
        setCollapsed(!collapsed)
    }
    return (
        <Layout>
            <SiderCustom>sidebar</SiderCustom>
            <Layout>
                <HeaderCustom toggle={toggle} collapsed={collapsed}></HeaderCustom>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default App;
