import { Container } from '../components/container';
import getInstance from '../services/services';
import energy from '../assets/energy.png'
import chicken from '../assets/chicken.png'
import apple from '../assets/apple.png'
import cheeseburger from '../assets/cheeseburger.png'
import { InfoDiv } from '../components/infoDiv';

const HomeScreen = () => {
    
    const user = getInstance.GetUserDataById(18)?.data;

    return (
        <div style={{display: 'flex'}}>
            <Container 
                routes={['Accueil', 'Profil', 'Reglage', 'Communaute']} 
                content={
                    <div key={user?.id}>
                        <div style={{display: 'flex'}}>
                            <h1 style={{fontSize: 36}}>Bonjour </h1>
                            <h1 style={{color: 'red', fontSize: 36, marginLeft: 10}}>{user?.userInfos.firstName}</h1>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <div>
                                
                            </div>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                                <InfoDiv backgroundColor='rgba(255,0,0,.07)' value={user?.keyData.calorieCount??0} keydataSuffix={'kCal'} icon={energy} text={'Calories'} />
                                <InfoDiv backgroundColor='rgba(74,184,255,.07)' value={user?.keyData.proteinCount??0} keydataSuffix={'g'} icon={chicken} text={'Proteines'} />
                                <InfoDiv backgroundColor='rgba(249,206,35,.07)' value={user?.keyData.carbohydrateCount??0} keydataSuffix={'g'} icon={apple} text={'Glucides'} />
                                <InfoDiv backgroundColor='rgba(253,81,129,.07)' value={user?.keyData.lipidCount??0} keydataSuffix={'g'} icon={cheeseburger} text={'Lipides'} />
                            </div>
                        </div>
                    </div>
                } 
            />
        </div>
    );
}

export default HomeScreen;