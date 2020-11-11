import React, { Component } from 'react'
// import { Button } from '@material-ui/core'
// import ParticleBackground from "../components/landing-components"
import '/ReactTrianglifyTemplate.css'
import Triangles from "./landing-components/Triangles"


class TrianglifyTemplate extends Component {
  // console.log(children)
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="landingPage">
        <TrianglifyTemplate />
      </div>
    )
  }

}

export default TrianglifyTemplate