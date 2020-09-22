import React from 'react';
import Tarfa from '../assets/music/EkTarfa.mp3';
import Goat from '../assets/music/Goat.mp3';
import Ghazal from '../assets/music/Ghazal.mp3';

class MusicComp extends React.Component{

    componentDidMount = () =>{
        const {music}=this.props;
        if(music==='All Songs'){
            const audio=document.getElementsByClassName('audio-element')[0];
            audio.play();
        }
        else if(music==='Albums'){
            const audio=document.getElementsByClassName('audio-element')[0];
            audio.play();
        }
        else if(music==='Ghazals'){
            const audio=document.getElementsByClassName('audio-element')[0];
            audio.play();

        }
        
    }

    render(){
        const {music}=this.props;
        return(
            <div>
                {music==='All Songs'&& 
                    <div>
                        <div className='cover-all-songs'/>
                        <audio className='audio-element'>
                            <source src={Tarfa} />
                        </audio>
                    </div>
                }
                {music==='Albums'&& 
                    <div>
                        <div className='cover-albums'/>
                        <audio className='audio-element'>
                            <source src={Goat} />
                        </audio>
                    </div>
                }
                {music==='Artists'&& 
                    <div className='artists' />
                }
                {music==='Ghazals'&& 
                    <div>
                        <div className='cover-ghazal'/>
                        <audio className='audio-element'>
                            <source src={Ghazal} />
                        </audio>
                    </div>
                }
            </div>
        )
    }
}

export default MusicComp;