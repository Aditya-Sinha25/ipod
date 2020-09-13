import React from 'react';

class Home extends React.Component{
    render(){
        const {forwardPress} =this.props;
        return(
            <div>
            <div className='screen-left'>
              <h2>IPod</h2>
              <div className="screen-left-item">Settings</div>
              <div className="screen-left-item">Coverflow </div>
              <div className="screen-left-item">Music </div>
              <div className="screen-left-item">Game </div>
            </div>
            <div className='screen-right'>
              
            </div>
            
        </div>
        );
    }
}

export default Home;