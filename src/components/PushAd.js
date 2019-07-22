import React from 'react';


class PushAd extends React.Component {

    render() {
        return(
          
            <div style={styles.pushComputerAd}>
            <div className="imgPreview"
                style={styles.pushAdImage}>
                <img src={this.props.image} style={styles.image}></img> 
                </div>
                <div style={styles.pushComputerAdText}>
                <span style={styles.titleSpan}>

               <p style={styles.pushTitle}>{this.props.title}</p>
               <br></br>
               </span>
                
               <p style={styles.pushText}>{this.props.text}</p>
               
               </div>
               <span style={styles.pushAdIcon}>
               <img src={this.props.icon} style={styles.iconImage}></img>
                   </span> 
                   
               </div>
        )

    }

}

const styles = {

    pushComputerAd: {
        backgroundColor: '#393e46',
        width: '40%',
        height: '40%',
        position:'absolute',
        lineHeight:1,
        display: 'flex',
        left: '56%',
        top: '34%',

    },

    pushAdIcon: {
        position: 'absolute',
        width: '20%',
        height: '22%',
        display: 'flex',
        left: '1%',
        top: '70%',
    },

    pushAdImage: {
        position: 'absolute',
        width: '100%',
        height: '60%',
        display: 'flex',
        bottom: '39%'

    },

    pushComputerAdText: {
        position: 'relative',
        left: '25%',
        top: '66%',
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
        
    },

    iconImage: {
        position: 'absolute',
        width:'100%',
        height:'100%'
    },

    image: {
        position: 'absolute',
        width:'100%',
        height:'100%'
    },
    
}


export default PushAd;