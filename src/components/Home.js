import React from 'react';

const Home = (props) =>{
        const {activeList} =props;
        return(
            <div>
            <div className='screen-left'>
              <h2>iPod</h2>
              <div className={activeList==='Settngs'?'active-state':'screen-left-item'}>Settings</div>
              <div className={activeList==='Cover'?'active-state':'screen-left-item'}>Coverflow </div>
              <div className={activeList==='Music'?'active-state':'screen-left-item'}>Music </div>
              <div className={activeList==='Game'?'active-state':'screen-left-item'}>Game </div>
            </div>
            <div className='screen-right'>
              
            </div>
            
        </div>
        );
}

export default Home;