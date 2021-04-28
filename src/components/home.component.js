import React from 'react';
import ChampionList from './champion-list.component';
import ChampionPage from './championpage.component';
import MyNav from './navbar.component';

class Home extends React.Component {
    render() {
        return (
            <div>
                <ChampionList />
            </div>
            
        )
    }
}

export default Home;