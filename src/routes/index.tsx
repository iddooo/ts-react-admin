import React, { FC } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routesConfig, { IFMenuBase, IFMenu }  from "./config";
import AllComponents from '../pages/index'

// const Home = AllComponents['Home']
// const UserList = AllComponents['UserList']
// const RecyclingMachine = AllComponents['RecyclingMachine']

interface CRouterProps {
    auth:any;
}

const CRoutes:FC<CRouterProps> = (props: CRouterProps):JSX.Element => {
    const createRoute = (key:string) => {
        return routesConfig[key].map((r: IFMenu) => createMenu(r))
    }

    const createMenu = (r:IFMenu) =>{
        const route = (r:IFMenuBase) =>{
            const rComponent = r.component && AllComponents[r.component] 
            return (
                <Route
                    key={r.key || r.route}
                    exact
                    path={r.key || r.route}
                    component={rComponent}/>
            )
        }

        const subRoute = (r:IFMenu):any => r.subs && r.subs.map((subR:IFMenu)=>subR.subs ? subRoute(subR) : route(subR))

        return r.component ? route(r) : subRoute(r)
    }

    return (
        /** router v5 */
        <Switch>
            {/* 
            <Route path='/home' component={Home}></Route>
            <Route path="/operating/user/userList" component={UserList}></Route>
            <Route path="/maintenance/equipment/recyclingMachine" component={RecyclingMachine}></Route> 
            */}

            { Object.keys(routesConfig).map((key) =>createRoute(key))}
        </Switch>
    )
}

export default CRoutes