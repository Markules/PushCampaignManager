import React from 'react';
import backgroundMobilePhone from '../images/backgroundMobilePhone.png';
import PushMobileAd from './PushMobileAd';

class MobileScreen extends React.Component {

    constructor(props) {
        super(props);  

    }

    render() {
        return(
 
          <div style={styles.pushScreen}>
            <PushMobileAd
            style={styles.pushAdScreen}
            title={this.props.title} 
            text={this.props.text} 
            icon={this.props.icon}/>
           
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
