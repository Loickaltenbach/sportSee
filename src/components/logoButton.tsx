interface LogoButtonProps {
    icon: string
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined
}

export const LogoButton = (props: LogoButtonProps) => {
    return (
        <div onClick={props.onClick} style={{height: 40, cursor: 'pointer', width: 40, borderRadius: 5, backgroundColor: 'white', marginBottom: 20}}>
            <img alt={props.icon} src={props.icon} height={20} width={24} style={{paddingTop: 10}} />
        </div>
    )
}