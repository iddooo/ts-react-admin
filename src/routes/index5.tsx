import { FC } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import routesConfig, { IFMenuBase, IFMenu }  from "./config";
import AllComponents from '../pages/index'

interface CRouterProps {
    auth:any;
}
console.log('AllComponents',AllComponents)
const Home = AllComponents['Home']
const UserList = AllComponents['UserList']
const RecyclingMachine = AllComponents['RecyclingMachine']



const CRoutes:FC<CRouterProps> = (props: CRouterProps):JSX.Element => {
// const CRoutes = (props: CRouterProps) => {

    const createRoute = (key:string) => {
        console.log(routesConfig[key].map((r: IFMenu) =>createMenu(r)))
        return routesConfig[key].map((r: IFMenu) => createMenu(r))
    }

    const createMenu = (r:IFMenu) =>{
        const route = (r:IFMenuBase) =>{
            const rComponent = r.component && AllComponents[r.component] 
            return (
                <Route
                    path={r.key || r.route}
                    component={rComponent}></Route>
            )
        }

        const subRoute = (r:IFMenu):any => r.subs && r.subs.map((subR:IFMenu)=>subR.subs ? subRoute(subR) : route(subR))

        return r.component ? route(r) : subRoute(r)
    }

    return (
        
        /** router v5 */
        <Switch>
            {/* <Route path='/home' component={Home}></Route>
            <Route path="/operating/user/userList" component={UserList}></Route>
            <Route path="/maintenance/equipment/recyclingMachine" component={RecyclingMachine}></Route> */}
            { Object.keys(routesConfig).map((key) =>createRoute(key))}
        </Switch>
    )
}

export default CRoutes