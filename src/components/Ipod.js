import React from  'react';
import Settings from './Settings';
import Music from './Music';
import Cover from './CoverFlow';
import Game from './Game';
class Ipod extends React.Component{
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
      handleClickSettings = () =>{
        this.setState({
          show:true,
          settings:<Settings />,
          coverflow:'',
          music:'',
          games:''
        })
      }
      handleClickCover = () =>{
        this.setState({
          show:true,
          settings:'',
          coverflow:<Cover />,
          music:'',
          games:''
        })
      }
      handleClickMusic = () =>{
        this.setState({
          show:true,
          settings:'',
          coverflow:'',
          music:<Music />,
          games:''
        })
      }
      handleClickGames = () =>{
        this.setState({
          show:true,
          settings:'',
          coverflow:'',
          music:'',
          games:<Game />
        })
      }
    render(){
        const {show,settings,coverflow,games,music}=this.state;
        return(
            <div className="App">
            <div className='screen'>
            {
              show && 
              <div>
                  <div className='screen-left'>
                    <div><h2>IPod</h2></div>
                    <div onClick={this.handleClickSettings}>{settings}</div>
                    <div onClick={this.handleClickCover}>{coverflow} </div>
                    <div onClick={this.handleClickMusic}>{music} </div>
                    <div onClick={this.handleClickGames}>{games} </div>
                  </div>
                  <div className='screen-right'>
                    
                  </div>
                  
              </div>
            }
          </div>
          <div className='buttons'>
            <div className='menu' onClick={this.handleMenu}>Menu</div>
          </div>
          </div>
        )
    }

}

export default Ipod;