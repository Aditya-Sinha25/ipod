import React from 'react';
import Song from '../assets/EkTarfa.mp3';

class MusicComp extends React.Component{

    componentDidMount = () =>{
        const audio=document.getElementsByClassName('audio-element')[0];
        audio.play();
    }

    render(){
        const {music}=this.props;
        return(
            <div>
                {music==='All Songs'&& 
                    <div>
                        <p>Ek Tarfa</p>
                        <audio className='audio-element'>
                            <source src={Song} />
                        </audio>
                    </div>
                }
                {music==='Albums'&& 
                    <div></div>
                }
                {music==='Artists'&& 
                    <div className='artists' />
                }
                {music==='Ghazals'&& 
                    <div></div>
                }
            </div>
        )
    }
}

export default MusicComp;