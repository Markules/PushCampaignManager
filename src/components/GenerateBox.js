import React from 'react';
import ComputerScreen from './ComputerScreen';
import MobileScreen from './MobileScreen';



class GenerateBox extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        title: "",
        text: "",
        selectedIcon: null,
        selectedImage: null,
        Vertical: ' ', 
        imageFile: '',
        iconFile: '',
        imagePreviewUrl: '',
        iconPreviewUrl: '',
  
      };
  
    }

  
    render() {
  
      return (
  
       <div style={styles.container}>
  
        <div style={styles.formComponent}>
  
          <form
            onSubmit = {this.handleSubmit}
            style={styles.form}>
  
            <label style={styles.formVertical}>
              Select Vertical:
              <select 
              value={this.state.Vertical}
              onChange={(e)=>this.verticalDropdownChanged(e)}
              style={styles.formSelect}  
              >
                <option value="Sweepstakes">Sweepstakes</option>
                <option value="Casino">Casino</option>
                <option value="Dating">Dating</option>
                <option value="Crypto">Crypto</option>
                <option value="Loan">Loan</option>
                <option value="Finance">Finance</option>
  
              </select>
            </label>
            <button
              type="submit"
              value="Submit"
              style={styles.button}>
                Generate
              </button>
          </form>
     
        <span>
          <ComputerScreen 
           title={this.state.title}
           text={this.state.text} 
           image={this.state.imagePreviewUrl}
           icon ={this.state.iconPreviewUrl}
           handleImageChange={this._handleImageChange}
           handleIconChange={this._handleIconChange}>
             </ComputerScreen> 
        </span>
        
        <span>
        <MobileScreen
         title={this.state.title}
          text={this.state.text}
           image={this.state.imagePreviewUrl}
           icon={this.state.iconPreviewUrl}>
           </MobileScreen>
        </span>
        </div>
  
        </div>
  
      );
    };
  }
  
  const styles = {
    
    container: {
      width: '100%',
      position:'relative',
     
    },
  
    headline: {
      marginLeft: '42%',
      marginTop: 30,
      fontSize: 31,
    },
  
  
    formComponent: {
      
      height:'100%',
      width: '90%',
      display:'flex',
  
    },
  
    form: {
      
      boxSizing: "border-box",
      display: 'inline-grid',
      backgroundColor: '#f6f5f5',
      width: 410,
      height: 700,
      borderRadius: 10,
      border: '1px gray solid'
  
    },
  
    titleFormInput:{
  
      marginTop: 40,
      marginLeft: '5%',
      width: '85%',
      height: 40,
      borderRadius: 7,
      fontSize: 21,
      padding: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'gray'
    },
  
    formInput: {
     
      marginTop: 10,
      marginLeft: '5%',
      width: '85%',
      height: 40,
      borderRadius: 7,
      fontSize: 21,
      padding: 10,
      borderStyle: 'solid',
      borderWidth: 1,
      color: 'gray'
    },
  
    formUpload: {
      marginLeft: '5%',
  
    },
  
    formUploadText: {
      marginLeft: '5%',
    },
  
    formSelect: {
      marginTop: 20,
      marginLeft: '5%',
      borderRadius: 4,
      width: '85%',
      height: 30,
      textAlign: 'center',
  
  
    },
  
    formVertical: {
      marginLeft: '5%',
    },
  
    button: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: '5%',
      width: '85%',
      height: 50,
      textAlign: 'center',
      borderRadius: 10,
      backgroundColor: '#ffc785',
      borderStyle: 'solid',
      borderWidth: 2,
      fontSize: 21,
      border: '1px gray solid'
  
    }
  
  }
  
  
  export default GenerateBox;