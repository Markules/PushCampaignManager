import React from 'react';
import axios from 'axios';
import ComputerScreen from './ComputerScreen';
import MobileScreen from './MobileScreen';

class TextInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: "",
      text: "",
      selectedIcon: null,
      selectedImage: null,
      Vertical: null, 
      imageFile: '',
      iconFile: '',
      imagePreviewUrl: '',
      iconPreviewUrl: '',

    };

    this.titleHandleChange = this.titleHandleChange.bind(this);
    this.textHandleChange = this.textHandleChange.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleIconChange = this._handleIconChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleIconChange(e) {
    e.preventDefault();

    let iconReader = new FileReader();
    let iconFile = e.target.files[0];

    iconReader.onloadend = () => {
      this.setState({
        iconFile: iconFile,
        iconPreviewUrl: iconReader.result
      });
    }

    iconReader.readAsDataURL(iconFile)
  }


  _handleImageChange(e) {
    e.preventDefault();

    let imageReader = new FileReader();
    let imageFile = e.target.files[0];

    imageReader.onloadend = () => {
      this.setState({
        imageFile: imageFile,
        imagePreviewUrl: imageReader.result
      });
    }

    imageReader.readAsDataURL(imageFile)
  }



  titleHandleChange = (event) =>{
    this.setState({ title: event.target.value });
  }

  textHandleChange(event){
    this.setState({ text: event.target.value});
  }

  imageHandleChange = event => {
    this.setState({
    selectedImage: event.target.files[0]
  })
}

  iconHandleChange = event => {
    this.setState({
      selectedIcon: event.target.files[0]
    })
  }

  verticalDropdownChanged(e){
    this.setState({vertical: e.target.value});
  }

  iconUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedIcon, this.state.selectedIcon.name);
    axios.post('http://localhost:8080/pushmanager/campaigns', fd, {onUploadProgress: progressEvent => {
      console.log("Upload Progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
    }
    }) 
  
    .then(res => {
      console.log(res);
    });
  }

  imageUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', this.state.selectedImage, this.state.selectedImage.name);
    axios.post('http://localhost:8080/pushmanager/campaigns', fd, {onUploadProgress: progressEvent => {
      console.log("Upload Progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
  }
    })
  
    .then(res => {
      console.log(res);
    });
  }


  render() {
   
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<span className="previewText"></span>);
    }

    return (

     <div style={styles.container}>
      
      <h3 style={styles.headline}>Create Campaign</h3>

      <div style={styles.formComponent}>

        <form
          style={styles.form}>

          <input
            style={styles.formInput}
            placeholder="Title"
            id="new-title"
            onChange={this.titleHandleChange}
          />

          <input
            placeholder="Text"
            style={styles.formInput}
            id="new-text"
            onChange={this.textHandleChange}

          />

          <label style={styles.formUploadText}>
            Upload Icon:
          <input
              style={styles.formUpload}
              type="file"
              name="icon"
              onChange={(e)=>this._handleIconChange(e)}
            />
          </label>

          <label style={styles.formUploadText}>
            Upload Image:
          <input
              style={styles.formUpload}
              type="file"
              name="image"
              onChange={(e)=>this._handleImageChange(e)}/>
          </label>

          <label>
            <select 
            value="vertical"
            onChange={this.verticalDropdownChanged.bind(this)}
            style={styles.formSelect}  
            >
              <option value="defaultValue">Campaign Vertical</option>
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
            style={styles.button}
            >
              Submit
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
    
    marginTop: 50,
    marginLeft:50,
    width: '90%',
    display:'flex'

  },

  form: {
    
    boxSizing: "border-box",
    display: 'inline-grid',
    backgroundColor: '#aee7e8',
    width: 410,
    height: 450,
    borderRadius: 10,
    border: '1px black solid'
    
    


  },

  formInput: {
    marginTop: 10,
    marginLeft: '5%',
    width: '85%',
    height: 40,
    borderRadius: 7,
    fontSize: 21,
    padding: 5,
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
    marginTop: 15,
    marginLeft: '5%',
    borderRadius: 4,
    width: '85%',
    height: 30,
    textAlign: 'center',


  },

  button: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '5%',
    width: '85%',
    height: 50,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#fabc74',
    borderStyle: 'solid',
    borderWidth: 2,
    fontSize: 21,
    border: '1px gray solid'

  }

}




export default TextInput;