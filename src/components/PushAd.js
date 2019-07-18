import React from 'react';

class PushAd extends React.Component {

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
        width: '35%',
        height: '35%',
        position:'absolute',
        lineHeight:1,
        display: 'flex',
        left: '61%',
        top: '38%',

    },

    pushAdIcon: {
        position: 'absolute',
        width: '18%',
        height: '22%',
        border: '1px solid red',
        display: 'flex',
        left: '1%',
        top: '61%',
    },

    pushAdImage: {
        position: 'absolute',
        width: '100%',
        height: '60%',
        border: '1px solid grey',
        display: 'flex',
        bottom: '39%'

    },

    pushComputerAdText: {
        position: 'relative',
        left: '20%',
        top: '61%',
        border: '1px solid blue',
        width: '79%',
        height: '38%',
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


export default PushAd;