import React from  'react';
import Settings from './Settings';
import Music from './Music';
import Cover from './CoverFlow';
import Game from './Game';
import Home from './Home';

class Ipod extends React.Component{
 constructor(){
   super();
   this.state={
     activeState:'',
     activeList:'',
     prevSelected:'',
     currentSelected:''
   }
 };

 //rotation = () =>{
 // var containerElement=document.getElementsByClassName('div1');
 // var activeRegion=ZingTouch.Region(containerElement);
 // activeRegion.bind(containerElement,'rotate',function(e){
 //   console.log('inside container');
 // })
  

 //}

 componentDidUpdate = (prevProps,prevState) =>{
  const {currentSelected}=this.state;
  if(currentSelected!==prevState.currentSelected){
    this.setState({
      activeState:<Home activeList={currentSelected} />
    })
  }
}

 handleClickMenu = () =>{
   const {currentSelected}=this.state;
   this.setState({
     activeState:<Home activeList={currentSelected}/>
   });

 }

 handleClickForward = () =>{
   const {currentSelected}=this.state;
   if(currentSelected===''){
     this.setState({
       currentSelected:'Settings',
       prevSelected:'Game',
       activeList:<Settings />
     })
   }
   else if(currentSelected==='Settings'){
    this.setState({
      activeList:<Cover />,
      currentSelected:'Cover',
      prevSelected:'Settings'
    })
  }
  else if(currentSelected==='Cover'){
    this.setState({
      activeList:<Music />,
      currentSelected:'Music',
      prevSelected:'Cover'
    })
  }
  else if(currentSelected==='Music'){
    this.setState({
      activeList:<Game />,
      currentSelected:'Game',
      prevSelected:'Music'

    })
  }
  else if(currentSelected==='Game'){
    this.setState({
      activeList:<Settings />,
      currentSelected:'Settings',
      prevSelected:'Game'

    })
  }
 }

 handleClickBackward = () =>{
  const {prevSelected}=this.state;
  if(prevSelected===''|| prevSelected==='Settings'){
    this.setState({
      currentSelected:'Settings',
      activeList:<Settings />,
      prevSelected:'Game'
    })
  }
  else if(prevSelected==='Music'){
      this.setState({
        currentSelected:'Music',
        activeList:<Music />,
        prevSelected:'Cover'
    })
  }
  else if(prevSelected==='Cover'){
    this.setState({
      currentSelected:'Cover',
      activeList:<Cover />,
      prevSelected:'Settings'
    })
  }
  else if(prevSelected==='Game'){
    this.setState({
      currentSelected:'Game',
      activeList:<Game />,
      prevSelected:'Music'
    })
  }
 }

 handleClickMain = () =>{
   var {activeList} =this.state;
   console.log("Main circle clicked");
   this.setState({
     activeState:activeList
   });

 }

 componentDidUpdate(prevProps,prevState){
   console.log('component did update');
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
        	  <div className="div1" >

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