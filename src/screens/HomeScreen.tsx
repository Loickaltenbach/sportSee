import React from 'react';
import { Container } from '../components/container';
import getInstance from '../services/services';

const HomeScreen = () => {
    
    const user = getInstance.GetUserDataById(18);

    return (
        <div style={{display: 'flex'}}>
            <Container 
                routes={['Accueil', 'Profil', 'Reglage', 'Communaute']} 
                content={[
                    <div key={user?.id}>
                        <div style={{display: 'flex'}}>
                            <h1 style={{fontSize: 48}}>Bonjour </h1>
                            <h1 style={{color: 'red', fontSize: 48, marginLeft: 10}}>{user?.userInfos?.firstName}</h1>
                        </div>
                        <div style={{display: 'flex'}}>
                            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>
                    </div>
                ]} 
            />
        </div>
    );
}

export default HomeScreen;