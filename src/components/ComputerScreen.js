import React from 'react';
import backgroundComputer from '../images/backgroundComputer.png';
import PushAd from './PushAd';

class ComputerScreen extends React.Component {

    constructor(props) {
        super(props);  
        
        this.state = {     

        };
    }

    render() {

        return(
            
          <div style={styles.pushScreen}>
            <PushAd 
            title={this.props.title} 
            text={this.props.text} 
            image={this.props.imagePreviewUrl}/>
              <div style={styles.preview}>
              {this.props.imagePreviewUrl}
              </div>
          </div>  
          
        )
        

    }

}

const styles = {

    pushScreen: {

        width: 600,
        height: 455,
        marginLeft: '30%',
        marginBottom: '10%',
        backgroundImage: `url(${backgroundComputer})`, 
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        
    },
    
 }


export default ComputerScreen;
