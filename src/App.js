import React from 'react';

class App extends React.Component{
  constructor () {
    super();
    this.state={
      menu:{
        settings:'',
        coverflow:'',
        games:'',
        music:'',
        show:false,
      }
    };
  }
  handleMenu = () =>{
    console.log('menu clicked');
    console.log('prev state',this.state);
    this.setState({
      show:true,
      settings:'settings',
      coverflow:'coverflow',
      music:'music',
      games:'games'
    })
    console.log('new state',this.state);

  }
  render(){
    const {show,settings,coverflow,games,music}=this.state;
    return (
      <div className="App">
        <div className='screen'>
          {
            show && 
            <div>
                <div className='screen-left'>
                  {settings}<br/>
                  {coverflow} <br/>
                  {games} <br />
                  {music} <br />
                </div>
                <div className='screen-right'>
                  <img src='https://image.flaticon.com/icons/svg/3352/3352491.svg' alt='ipod' />
                </div>
                
            </div>
          }
        </div>
        <div className='buttons'>
          <div className='menu' onClick={this.handleMenu}>Menu</div>
        </div>
      </div>
    );
  }
  
}

export default App;
