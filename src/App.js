import React, { Component } from 'react';
import './App.css';
const image = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg']

class App extends Component {
  constructor(){
    super();
    this.state = {
      image: image[2],
      showPopup: false
    }
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        showPopup: true
      })
    }, 4000);
    setInterval(()=>{
      this.setState({
        image: image[Math.floor(Math.random() * (+4 - +0)) + +0]
      })
    }, 3000);
  }
  handleClose = ()=> {
    this.setState({
      showPopup: !this.state.showPopup,
    });
  }

  getPopup = () => {
    if (this.state.showPopup) {
      return (
        <div id="myModal" class="modal" style={{display:this.state.showPopup? 'display':'none'}}>
          <div class="modal-content">
            <span class="close" onClick={this.handleClose}>&times;</span>
            <p>Namaskaar Samadhan Bhau..</p>
          </div>

        </div>
      );
    }
  }

  render() {
    return (
      <div className="app-container">
        <div
          className='image-container'>
          {this.getPopup()}
            <img
              src = {this.state.image}/>
          </div>
      </div>
    );
  }
}

export default App;
