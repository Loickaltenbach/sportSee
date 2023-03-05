import { ReactNode } from "react";
import logo from "../assets/logo.png"
import { LogoButton } from "./logoButton";
import zen from '../assets/zen.png'
import swim from '../assets/swim.png'
import cycle from '../assets/cycle.png'
import fitness from '../assets/fitness.png'
import { NavLink } from "react-router-dom";

interface ContainerProps {
    content: ReactNode,
    routes: string[]
}

export const Container = (props: ContainerProps) => {
    const link = (route: string) => "/" + `${route.replace(" ", "").toString().trim().toLowerCase()}`;

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', width: '100%', height: 50, padding: 20, boxShadow: "1px 5px 5px #9E9E9E"}}>
                <img src={logo} alt={'logo'} width={110} height={40} />
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%'}}>
                    {props.routes?.map((route) => {
                        return(
                            <NavLink key={route} style={{textDecoration: "none", listStyle: 'none', color: "white", fontSize: 16}} to={link(route)}>
                                <li>{route}</li>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
            <div style={{marginLeft: 150}}>
                {props.content}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: '100%', width: 125, backgroundColor: 'black', position: 'absolute', left: 0, top: 70}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                    <LogoButton onClick={() => {}} icon={zen} />
                    <LogoButton onClick={() => {}} icon={swim} />
                    <LogoButton onClick={() => {}} icon={cycle} />
                    <LogoButton onClick={() => {}} icon={fitness} />
                </div>
                <div>
                    <p style={{color: 'white', transform: "rotate(-90deg)", fontSize: 10}}>Copiryght, SportSee 2020</p>
                </div>
            </div>
        </div>
    )
}