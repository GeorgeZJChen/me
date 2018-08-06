import React, { Component } from 'react'
import axios from 'axios'
import '../css/header.css'

class Introduction extends Component {
  constructor(props){
    super(props)
    this.blockShows = 0
    this.state = {
      renderFlag: 1
    }
    this.demos = []
  }
  componentDidMount(){
    this.loadData()
  }
  loadData(){
    const url = 'data/intro.json'
      axios({
        method: 'get',
        url: url,
        responseType: 'json'
      }).then((res)=>{
        try {
          this.intro = res.data.intro
          this.setState((prevState)=>{
            return {
              renderFlag: ~prevState.renderFlag
            }
          })
        } catch (e) {
          console.warn(e);
          console.error('Data format error');
        }
      }).catch((err)=>{
        console.warn(err);
      })
  }
  render(){
    return (
      <div className='introduction'>
        {
          this.intro?
          <div className='content'>
            <p>{this.intro.desc}</p>
          </div>
          : null
        }
      </div>
    )
  }
}
export default Introduction
