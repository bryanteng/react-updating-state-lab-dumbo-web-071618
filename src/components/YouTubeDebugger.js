// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{

  constructor(){
    super()
    this.state ={
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  increment = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  decrement = () => {
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
          ...this.state.settings.video,
          resolution: '720p'
        }
      }
    })
  }


  render(){

    return(
      <div>
        <button className ='bitrate' onClick={this.increment}>{this.state.settings.bitrate}</button>
        <button className = 'resolution' onClick={this.decrement}>{this.state.settings.video.resolution}</button>
      </div>
    )
  }
}
