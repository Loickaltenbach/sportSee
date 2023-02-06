interface InfoDivProps {
    value: number,
    keydataSuffix: string,
    text: string,
    icon: string,
    backgroundColor: string
}

export const InfoDiv = (props: InfoDivProps) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, alignItems: 'center', backgroundColor: '#FBFBFB', borderRadius: 10, width: 150, height: 80}}>
            <div style={{height: 60, cursor: 'pointer', width: 60, borderRadius: 10, backgroundColor: props.backgroundColor}}>
                <img alt={props.icon} src={props.icon} height={20} width={20} style={{paddingTop: 20}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 60}}>
                <p style={{color: 'black', fontWeight: 'bold', lineHeight: '0%', textAlign: 'left', fontSize: 12}}>{props.value}{props.keydataSuffix}</p>
                <p style={{lineHeight: '0%', fontSize: 12, color: '#74798C', textAlign: 'left'}}>{props.text}</p>
            </div>
            <div />
        </div>
    )
}