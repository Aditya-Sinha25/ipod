import React from 'react';

class Music extends React.Component{
    render(){
        const {musicList}=this.props;
        return(
            <div className='home-screen'>
            <div className='screen-left-music'>
              <h2>Music</h2>
              <div className={musicList==='All Songs'?'active-state':''}>All Songs</div>
              <div className={musicList==='Albums'?'active-state':''}>Albums</div>
              <div className={musicList==='Artists'?'active-state':''}>Artists</div>
              <div className={musicList==='Ghazals'?'active-state':''}>Ghazals</div>
            </div>
            <div className='screen-right-music'>
              
            </div>
          
            
        </div>
        )
    }
}

export default Music;