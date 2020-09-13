import React from  'react';
import Settings from './Settings';
import Music from './Music';
import Cover from './CoverFlow';
import Game from './Game';
import Home from './Home';
import ZingTouch from 'zingtouch';
class Ipod extends React.Component{
 constructor(){
   super();
   this.state={
     activeState:'',
     activeList:'',
     prevList:''
   }
 };

 //rotation = () =>{
 // var containerElement=document.getElementsByClassName('div1');
 // var activeRegion=ZingTouch.Region(containerElement);
 // activeRegion.bind(containerElement,'rotate',function(e){
 //   console.log('inside container');
 // })
  

 //}

 handleClickMenu = () =>{
   this.setState({
     activeState:<Home />
   });

 }

 handleClickForward = () =>{
   const {activeList,prevList}=this.state;
   console.log('Forward Clicked');
   if(prevList===''){
     this.setState({
       prevList:'Settings',
       activeList:<Settings />
     })
   }
   else if(prevList==='Settings'){
    this.setState({
      activeList:<Cover />,
      prevList:'Cover',
    })
  }
  else if(prevList==='Cover'){
    this.setState({
      activeList:<Music />,
      prevList:'Music',
    })
 }
 console.log(activeList);
 }

 handleClickMain = () =>{
   var {activeList,activeState} =this.state;
   console.log("Main circle clicked");
   this.setState({
     activeState:activeList
   });
   console.log(activeState);
   console.log(activeList);

 }
 

    render(){
      const {activeState} =this.state;
      console.log('render');
        return(
            <div className="Ipod-container">
            <div className='screen'>
             {activeState }
          </div>
          <div className="wheel">
        	  <div className="div1" >

        	    <div className="div2" onClick={this.handleClickMain}></div>
        	    <div className="div3" onClick={this.handleClickMenu}>Menu</div>
        	    <div className="div4" onClick={this.handleClickForward}><img src="https://image.flaticon.com/icons/svg/860/860754.svg" /></div>
        	    <div className="div5"><img src="https://image.flaticon.com/icons/svg/149/149126.svg" /></div>
        	    <div className="div6"><img src="https://image.flaticon.com/icons/svg/39/39712.svg" /></div>

        	  </div>

          </div>
          </div>
        );
    }

}

export default Ipod;