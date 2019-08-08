import React from 'react';

class UpperMenu extends React.Component {

    render() {
        return(
          
            <div style={styles.menuContainer}>
                <ul style={styles.menuUl}>
                    <li style={styles.menuIlLeft}><a style={styles.menuLink} href={'#'}>Campaigns</a></li>
                    <li style={styles.menuIlCenter}><a href={'#'}>Create Campaign</a></li>
                    <li style={styles.menuIlRight}><a href={'#'}>Generate Campaign</a></li>
                </ul>
            </div>
     
        )

    }

}

const styles = {
    menuContainer: {
        
        border:'1px gray solid',
        height: '10%',
        width: '21.5%',
        borderRadius: 7,

    },

    menuUl: {
        paddingLeft: '5%',
        display: 'flex',
        listStyle: 'none',
    },

    menuIlLeft: {
        borderRight: '1px gray solid',
        paddingRight: '2%',
        paddingTop: '1%',
        
    },

    menuIlCenter: {
        marginLeft: '1%',
        borderLeft: '1px gray solid',
        borderRight: '1px gray solid',
        paddingRight: '2%',
        paddingTop: '1%',
        paddingLeft: '2%',
    },

    menuIlRight: {
        marginLeft: '1%',
        borderLeft: '1px gray solid',
        paddingLeft: '2%',
        paddingTop: '1%',
    },
    
 }

export default UpperMenu;