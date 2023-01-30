interface LogoButtonProps {
    icon: string
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const LogoButton = (props: LogoButtonProps) => {
    return (
        <div onClick={props.onClick} style={{height: 60, cursor: 'pointer', width: 60, borderRadius: 15, backgroundColor: 'white', marginBottom: 20}}>
            <img src={props.icon} height={28} width={32} style={{paddingTop: 15}} />
        </div>
    )
}