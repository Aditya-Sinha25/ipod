import React from  'react';
import Settings from './Settings';
import Music from './Music';
import Cover from './CoverFlow';
import Game from './Game';
import Home from './Home';
import MusicComp from './MusicComp';
import ZingTouch from 'zingtouch';


class Ipod extends React.Component{
 constructor(){
   super();
   this.state={
     activeState:'',
     activeList:'',
     currentSelected:'',
     activeScreen:'',
     musicList:'',
     musicSelected:''
   }
 };

componentDidUpdate = (prevProps,prevState) =>{
  const {currentSelected,activeScreen,musicList}=this.state;
  if(activeScreen==='Home'){
    if(currentSelected!==prevState.currentSelected){
      this.setState({
        activeState:<Home activeList={currentSelected} />
      })
    }
  }
  if(activeScreen==='Music'){
    if(musicList!==prevState.musicList){
      this.setState({
        activeState:<Music musicList={musicList} />
      })
    }
  }

}

 //handle the click on the menu
 handleClickMenu = () =>{
   const {currentSelected}=this.state;
   this.setState({
     activeScreen:'Home',
     activeState:<Home activeList={currentSelected}/>
   });

 }


 //applying the rotation
 wheelClick = () =>{
   var container=document.getElementById('div1');
   const ipod=this;
   const {activeScreen,musicList}=this.state;
   var region =new ZingTouch.Region(container);
   region.bind(container,'rotate',function(event){
     console.log('Rotation is occuring',event);
     var newAngle=event.detail.distanceFromOrigin;
     console.log(newAngle);
     var i=0;
     if(newAngle>60){
       i=Math.floor(newAngle/60); 
     }
     if(activeScreen==='Home'){
      if(i*newAngle>0+60*i&&i*newAngle<=15+60*i){
        ipod.setState({
            currentSelected:'Settings',
            activeList:<Settings />
          })
       }
       else if(i*newAngle>15+60*i&&i*newAngle<=30+60*i){
        ipod.setState({
           activeList:<Cover />,
           currentSelected:'Cover',
         })
  
       }
       else if(i*newAngle>30+60*i&&i*newAngle<=45+60*i){
        ipod.setState({
           activeList:<Music activeList={musicList}/>,
           currentSelected:'Music',
         })
  
       }
       else if(i*newAngle>45+60*i&&i*newAngle<=60+60*i){
        ipod.setState({
           activeList:<Game />,
           currentSelected:'Game',
         })
  
       }
  
       if(i*newAngle>0-60*i&&i*newAngle<=-15-60*i){
        ipod.setState({
            currentSelected:'Settings',
            activeList:<Settings />
          })
       }
       else if(i*newAngle>-15-60*i&&i*newAngle<=-30-60*i){
        ipod.setState({
           activeList:<Cover />,
           currentSelected:'Cover',
         })
  
       }
       else if(i*newAngle>-30-60*i&&i*newAngle<=-45-60*i){
        ipod.setState({
           activeList:<Music activeList={musicList}/>,
           currentSelected:'Music',
         })
  
       }
       else if(i*newAngle>-45-60*i&&i*newAngle<=-60-60*i){
        ipod.setState({
           activeList:<Game />,
           currentSelected:'Game',
         })
  
       }
     }

     else if(activeScreen==='Music'){
      if(i*newAngle>0+60*i&&i*newAngle<=15+60*i){
        ipod.setState({
            musicList:'All Songs'
          })
       }
       else if(i*newAngle>15+60*i&&i*newAngle<=30+60*i){
        ipod.setState({
          musicList:'Albums'
         })
  
       }
       else if(i*newAngle>30+60*i&&i*newAngle<=45+60*i){
        ipod.setState({
           musicList:'Artists'
         })
  
       }
       else if(i*newAngle>45+60*i&&i*newAngle<=60+60*i){
        ipod.setState({
           musicList:'Ghazals'
         })
  
       }
  
       if(i*newAngle>0-60*i&&i*newAngle<=-15-60*i){
        ipod.setState({
            musicList:'All Songs'
          })
       }
       else if(i*newAngle>-15-60*i&&i*newAngle<=-30-60*i){
        ipod.setState({
           musicList:'Albums'
         })
  
       }
       else if(i*newAngle>-30-60*i&&i*newAngle<=-45-60*i){
        ipod.setState({
           musicList:'Artists'
         })
  
       }
       else if(i*newAngle>-45-60*i&&i*newAngle<=-60-60*i){
        ipod.setState({
           musicList:'Ghazals'
         })
  
       }
     }
    

   });
 }

 //handle the click on the inner-most circle
 handleClickMain = () =>{
   var {activeList,currentSelected,musicList,activeScreen} =this.state;
   console.log("Main circle clicked");
   if(currentSelected==='Music'){
     this.setState({
       activeScreen:'Music',
       activeState:<Music musicList={musicList}/>,
     })
   }
   else{
    this.setState({
      activeState:activeList
    });
   }

   if(activeScreen==='Music'){
     this.setState({
       activeState:<MusicComp music={musicList}/>
     })
   }
   

 }
 
    render(){
      const {activeState} =this.state;
      console.log('render');
        return(
            <div className="Ipod-container">
            <div className='screen'>
             {activeState}
          </div>
          <div className="wheel">
        	  <div id="div1" onMouseOver={this.wheelClick}>

        	    <div className="div2" onClick={this.handleClickMain}></div>
        	    <div className="div3" onClick={this.handleClickMenu}>Menu</div>
        	    <div className="div4" onClick={this.handleClickForward}><img src="https://image.flaticon.com/icons/svg/860/860754.svg" alt='forward' /></div>
        	    <div className="div5"><img src="https://image.flaticon.com/icons/svg/149/149126.svg" alt='stop'/></div>
        	    <div className="div6" onClick={this.handleClickBackward}><img src="https://image.flaticon.com/icons/svg/39/39712.svg"  alt='Backward'/></div>

        	  </div>

          </div>
          </div>
        );
    }

}

export default Ipod;