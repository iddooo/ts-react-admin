/**
 * File:hooks.ts
 * Des:自定义hooks
 */
 import { useState } from "react";

interface Iturn {
    turnOn:()=>void;
    turnOff:()=>void;
    setSwitcher:React.Dispatch<React.SetStateAction<boolean>>
}
 /**
  * 布尔开关
  * @param initState
  */
 export function useSwitch(initState:boolean = false):[boolean,Iturn]{
    const [switcher, setSwitcher] = useState(initState)
    const turnOn = ()=> setSwitcher(true)
    const turnOff = ()=> setSwitcher(false)
    return [switcher,{turnOn,turnOff,setSwitcher}]
 }