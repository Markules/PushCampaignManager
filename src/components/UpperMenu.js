import React from 'react';

class UpperMenu extends React.Component {

    render() {
        return(
          
            <div style={styles.menuContainer}>
                <ul style={styles.menuUl}>
                    <li style={styles.menuIl}><a href={'#'}>Home</a></li>
                    <li style={styles.menuIl}><a href={'#'}>Create Campaign</a></li>
                    <li style={styles.menuIl}><a href={'#'}>Generate Campaign</a></li>
                </ul>
            </div>
     
        )

    }

}

const styles = {

 

    menuContainer: {
        
        border:'1px black solid',
        height: '10%',

    },

    menuUl: {
        paddingLeft: '66%',
        display: 'flex',
        listStyle: 'none',
       
    },

    menuIl: {
        
        marginLeft: '5%',
    },
    
 }

export default UpperMenu;