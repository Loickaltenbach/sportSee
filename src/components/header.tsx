import logo from "../assets/logo.png"

export const Header = () => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>

            </div>
            <div style={{display: 'flex'}}>
                <img src={logo} />
            </div>
        </div>
    )
}