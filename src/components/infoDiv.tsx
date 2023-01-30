interface InfoDivProps {
    value: number,
    keydataSuffix: string,
    text: string,
    icon: string,
    backgroundColor: string
}

export const InfoDiv = (props: InfoDivProps) => {
    return (
        <div style={{display: 'flex', marginBottom: 20, justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, alignItems: 'center', backgroundColor: '#FBFBFB', borderRadius: 10, width: 200, height: 90}}>
            <div style={{height: 50, cursor: 'pointer', width: 50, borderRadius: 10, backgroundColor: props.backgroundColor}}>
                <img alt={props.icon} src={props.icon} height={20} width={20} style={{paddingTop: 15}} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: 50}}>
                <p style={{color: 'black', fontWeight: 'bold', lineHeight: '0%', textAlign: 'left'}}>{props.value}{props.keydataSuffix}</p>
                <p style={{lineHeight: '0%', fontSize: 12, color: '#74798C', textAlign: 'left'}}>{props.text}</p>
            </div>
            <div />
        </div>
    )
}