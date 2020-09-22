import React from 'react';

class Home extends React.Component{
  render(){
        const {activeList} =this.props;
        return(
            <div className='home-screen'>
            <div className='screen-left'>
              <h2>iPod</h2>
              <div className={activeList==='Settings'?'active-state':'screen-left-item'}>Settings</div>
              <div className={activeList==='Cover'?'active-state':'screen-left-item'}>Coverflow </div>
              <div className={activeList==='Music'?'active-state':'screen-left-item'}>Music </div>
              <div className={activeList==='Game'?'active-state':'screen-left-item'}>Game </div>
            </div>
            <div className='screen-right'>
              
            </div>
            
        </div>
        );
    }
}

export default Home;