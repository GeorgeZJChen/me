import React, { Component } from 'react'
import axios from 'axios'
import '../css/header.css'

class Header extends Component {
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
    const url = 'data/info.json'
      axios({
        method: 'get',
        url: url,
        responseType: 'json'
      }).then((res)=>{
        try {
          this.info = res.data.info
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
      <header className='header'>
        <div className='header-content'>
          <div className='profile'>
            <img className='profile-img' src='img/PROFILE.png' alt=''/>
          </div>
          <div className='header-info'>
          {
            this.info?
            (
              <React.Fragment>
                <div className='info-line name'>{this.info.name}</div>
                <div className='info-line lighter'>{this.info.status}</div>
                <div className='info-line lighter'>
                  <span className='info-th'>Preferred name: </span>{this.info.preferredName}</div>
                <div className='info-line lighter'>
                  <span className='info-th'>Interests: </span>{this.info.interests}</div>
                <div className='info-line lighter'>
                  <span className='info-th'>Contact: </span>
                  <span className='contact-group'>
                    <a href="mailto:georgechenzj@outlook.com" className='contact-a'><img className='info-sm-logo' src='img/email.png' alt=''/>
                        georgechenzj@outlook.com</a>
                        <div></div>
                    <a target="_blank" href="https://www.linkedin.com/in/zhuojun-chen-a67067166/" rel="noopener noreferrer" className='contact-a'><img className='info-sm-logo' src='img/linkedIn.png' alt=''/>
                        LinkedIn</a>
                  </span>
                </div>
              </React.Fragment>
            ):null

          }
          </div>
        </div>
      </header>
    )
  }
}
export default Header
