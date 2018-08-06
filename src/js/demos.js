import React, { Component } from 'react'
import axios from 'axios'
import '../css/demos.css'

class Demos extends Component {
  constructor(props){
    super(props)
    this.blockShows = 0
    this.state = {
      renderFlag: 1
    }
    this.demos = []
  }
  componentDidMount(){
    this.loadDemos()
  }
  loadDemos(){
    const url = 'https://georgechenzj.github.io/static/demos.json'
    axios({
      method: 'get',
      url: url,
      responseType: 'json'
    }).then((res)=>{
      try {
        this.demos = res.data.demos
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
    return(
      <div className='demos'>
        <div className='demos-content'>
        {
          this.demos.map((item, index)=>{
            if(item.title)
              return(
                <Demo title={item.title} desc={item.desc} source={item.preview} link={item.link} key={index}/>
              )
            return null
          })
        }
        </div>
      </div>
    )
  }
}
class Demo extends Component{
  constructor(props){
    super(props)
    this.state = {
      ready: 0,
      error: 0
    }
  }
  visit(){
    if(this.props.link){
      window.open(this.props.link)
    }
  }
  render(){
    return (
      <div className='demo' onClick={()=>this.visit()}>
        {
          this.props.source?
          (
            <div className='demo-img-frame'>

              <img src={this.props.source} className='demo-img' alt='' title={this.props.title}
              style={{visibility: this.state.ready&&!this.state.error?'visible':'hidden'}}
              onLoad={()=>this.setState({ready:1})} onError={()=>this.setState({error:1})}
              />
              {
                this.state.ready&&!this.state.error?
                ''
                :
                <img src='img/loading.gif' className="demo-img-loading" alt="loading" onClick={()=>this.visit()}/>
              }
            </div>
          ):(
            <div className='demo-img-frame'>
              <div className='demo-plaintext' onClick={()=>this.visit()} title={this.props.title}>
                <img className='demo-texticon' src='img/texticon.png' alt=''/>
              </div>
            </div>
          )
        }
        <div className='demo-right'>
          <div className='demo-title'>{this.props.title}</div>
          <div className='demo-desc'>{this.props.desc}</div>
        </div>
      </div>
    )
  }
}

export default Demos
