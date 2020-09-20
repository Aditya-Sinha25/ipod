import React from 'react';
import MusicComp from './MusicComp';

class Music extends React.Component{
    render(){
        const {musicList}=this.props;
        return(
            <div className='home-screen'>
            <div className='screen-left'>
              <h2>Music</h2>
              <div className={musicList==='All Songs'?'active-state':'screen-left-item'}>All Songs</div>
              <div className={musicList==='Albums'?'active-state':'screen-left-item'}>Albums</div>
              <div className={musicList==='Artists'?'active-state':'screen-left-item'}>Artists</div>
              <div className={musicList==='Ghazals'?'active-state':'screen-left-item'}>Ghazals</div>
            </div>
          
            
        </div>
        )
    }
}

export default Music;