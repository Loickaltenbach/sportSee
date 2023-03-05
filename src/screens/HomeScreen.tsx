import { Container } from '../components/container';
import getInstance from '../services/services';
import energy from '../assets/energy.png'
import chicken from '../assets/chicken.png'
import apple from '../assets/apple.png'
import cheeseburger from '../assets/cheeseburger.png'
import { InfoDiv } from '../components/infoDiv';
import { BarChart, LineChart, RadarChart, PieChart } from '../components/charts';

const HomeScreen = () => {
    const user = getInstance.UserDataById(18);
    const activity = getInstance.UserActivityById(18)?.data?.sessions;
    const performance = getInstance.UserPerformanceById(18)?.data?.data;
    const session = getInstance.UserSessionById(18)?.data.sessions;

    if(!user || !user.data) return null

    const score = [
        {name: 'score', value: user.data.score, fill: 'red', stroke: 'transparent'},
        {name: 'score', value: 1, stroke: 'transparent'},
    ]

    return (
        <Container 
            routes={['Accueil', 'Profil', 'Reglage', 'Communaute']} 
            content={
                <div key={user.data.id}>
                    <div style={{display: 'flex', lineHeight: '75%'}}>
                        <h1 style={{fontSize: 30}}>Bonjour </h1>
                        <h1 style={{color: 'red', fontSize: 30, marginLeft: 10}}>{user.data.userInfos.firstName}</h1>
                    </div>
                    <div style={{display: 'flex'}}>
                        <p style={{fontSize: 14}}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <div style={{marginRight: 20}}>
                            <BarChart data={activity} />
                            <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
                                <LineChart data={session} />
                                <RadarChart data={performance} />
                                <PieChart data={score} />   
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                            <InfoDiv backgroundColor='rgba(255,0,0,.07)' value={user.data.keyData.calorieCount} keydataSuffix={'kCal'} icon={energy} text={'Calories'} />
                            <InfoDiv backgroundColor='rgba(74,184,255,.07)' value={user.data.keyData.proteinCount} keydataSuffix={'g'} icon={chicken} text={'Proteines'} />
                            <InfoDiv backgroundColor='rgba(249,206,35,.07)' value={user.data.keyData.carbohydrateCount} keydataSuffix={'g'} icon={apple} text={'Glucides'} />
                            <InfoDiv backgroundColor='rgba(253,81,129,.07)' value={user.data.keyData.lipidCount} keydataSuffix={'g'} icon={cheeseburger} text={'Lipides'} />
                        </div>
                    </div>
                </div>
            } 
        />
    );
}

export default HomeScreen;