import React from 'react';

class PushMobileAd extends React.Component {

    render() {
        return(
          
            <div style={styles.pushComputerAd}>
            <div className="imgPreview"
                style={styles.pushAdImage}>
                {this.props.$imagePreviewUrl}
                </div>
                <div style={styles.pushComputerAdText}>
                <span style={styles.titleSpan}>

               <p style={styles.pushTitle}>{this.props.title}</p>
               <br></br>
               </span>
               
               
               <p style={styles.pushText}>{this.props.text}</p>
               
               </div>
               <span style={styles.pushAdIcon}></span> 
               </div>
        )

    }

}

const styles = {

    pushComputerAd: {
        backgroundColor: '#393e46',
        width: '50%',
        height: '15%',
        position:'absolute',
        lineHeight:1,
        display: 'flex',
        left: '37%',
        top: '20%',

    },

    pushAdIcon: {
        position: 'absolute',
        width: '24%',
        height: '49%',
        border: '1px solid red',
        display: 'flex',
        left: '75%',
        top: '31%',
    },


    pushComputerAdText: {
        position: 'relative',
        left: '0%',
        top: '30%',
        border: '1px solid blue',
        width: '73%',
        height: '50%',
        display: 'flex',
        overflow: 'hidden'


    },

    titleSpan: {
        textOverflow: 'ellipsis',
        width: '100%',
        
    },

    textSpan: {
        textOverflow: 'ellipsis',
        width: '100%',
        
    },

    pushTitle: {
        color: 'white',
        display: 'flex',
        position: 'absolute',
        bottom: '45%',
        textOverflow: 'ellipsis'

    },

    pushText: {
        color:'gray',
        display: 'flex',
        position: 'absolute',
        top: '5%',
        
       
        
      
    }
    
}


export default PushMobileAd;