import React, {FC, useEffect, useState} from 'react';
import { Layout, Breadcrumb } from 'antd';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom'
import Routes from './routes'
import { useAlita } from 'redux-alita';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/operating/user/UserList';
import RecyclingMachine from './pages/maintenance/equipment/RecyclingMachine';
import { json } from 'stream/consumers';
const { Content, Footer } = Layout;


const App:FC = (props: any):JSX.Element=>{
    const [collapsed,setCollapsed] = useState<boolean>(false)
    console.log('app :>> ', props);

    function toggle(){
        setCollapsed(!collapsed)
    }

    const auth = JSON.parse(localStorage.getItem('auth') || '{}')

    const [count, name, setAlita] = useAlita({ count: 0 }, "name", {
        light: true
    });

    React.useEffect(() => {
        setAlita({ stateName: "name", data: "yezihaohao" });
        console.log("effct", setAlita);
    });
    // light设置true表示直接获取state的值，不设置的话获取的值将被{isFetching: xxx, data: xxx}包裹）
    // const [auth,setAlita] = useAlita( 
    //     { auth: {} },
    //     { light: true} )

    // useEffect(()=>{
    //     console.log(111)
    //     let auth = JSON.parse(localStorage.getItem('auth') || '{}')
    //     console.log('auth',auth)
    //     auth && setAlita('auth', auth);
    // },[])


    return (
        <Layout>
            <SiderCustom collapsed={collapsed} auth={auth} {...props}/>
            <Layout>
                <HeaderCustom toggle={toggle} collapsed={collapsed} />
                <Content>
                    <Routes auth={auth}/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default App;
