import React, { Component } from 'react';
import axios from 'axios'
import validator from 'validator';

import './App.scss';

export default class App extends Component {
  state={
    url:'',
    link:''
  };

  handleChange=(e)=>{
    console.log(e.target.value);
    this.setState({url:e.target.value})
  }


  handleSubmit=(e)=>{
      e.preventDefault();
      const validURL=validator.isURL(this.state.url,{
        require_protocol:true,
      })
      if(!validURL)
      {
        alert('Please ensure that url is correct');
      }
      axios.post('http://localhost:5000/api/sorten',{
        url:this.state.url,
      }).then(res=>{
        
        console.log(res.data.data.hash);
        this.setState({
          link:`http://localhost:5000/${res.data.data.hash}`,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <h1 className="heading--main">URL Sorten</h1>
          <p className="heading--sub">Always free to use</p>
            <input
             type="text"
              name="url" 
              className="input"
              placeholder="Enter url include HTTP"
              onChange={this.handleChange}/>
            <input type="submit" className="btn" value="sorten"/>
              <p className="output" id="result">{this.state.link}</p>
        </form>
      </div>
    )
  }
}
