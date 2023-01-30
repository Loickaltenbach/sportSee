import { ReactNode } from "react";
import logo from "../assets/logo.png"
import useWindowDimensions from "../services/utils"
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
    const width = useWindowDimensions().width;
    const height = useWindowDimensions().height;
    const link = (route: string) => "/" + `${route.replace(" ", "").toString().trim().toLowerCase()}`

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: width, height: height}}>
            <div style={{display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', width: width - 40, height: 60, padding: 20}}>
                <img src={logo} alt={'logo'} />
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: width}}>
                    {props.routes?.map((route) => {
                        return(
                            <NavLink key={route} style={{textDecoration: "none", listStyle: 'none', color: "white", fontSize: 24}} to={link(route)}>
                                <li>{route}</li>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
            <div style={{marginLeft: 200}}>
                {props.content}
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', height: height - 101, width: 125, backgroundColor: 'black', position: 'absolute', left: 0, top: 100}}>
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