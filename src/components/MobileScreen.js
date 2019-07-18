import React from 'react';
import backgroundMobilePhone from '../images/backgroundMobilePhone.png';
import PushAd from './PushAd';

class MobileScreen extends React.Component {

    constructor(props) {
        super(props);  

    }

    render() {
        return(
 
          <div style={styles.pushScreen}>
            <PushAd 
            style={styles.pushAdScreen}
            title={this.props.title} text={this.props.text} image={this.props.$imagePreviewUrl}/>
           
          </div>  
        )

    }

}

const styles = {

    pushScreen: {

        width: 600,
        height: 750,
        marginLeft: '5%',
        backgroundImage: `url(${backgroundMobilePhone})`,
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        display: 'flex',
        bottom: '7%',
        left: '5%'
        
    },
    
 }


export default MobileScreen;
