// import blob from '../images/blob.svg'
// import fadedblob from '../images/fadedblob.svg'
import blobs from '../images/blobs.svg'
import fullDesign from '../images/fullDesign.svg'

export default function Hero() {
  return <section id="hero">
    <div id="designsContainer">
      {/* <img id="blob" src={blob}></img> */}
      {/* <img id="fadedblob" src={fadedblob}></img> */}
      {/* <img id="blobs" src={blobs}></img> */}
      <img id="fullDesign" src={fullDesign}></img>
    </div>
    <div>
      <h1 className="heroTitle">Simple UK budget tracker.</h1>
      <h2 className="heroSubTitle">Understand how to make your money work for you.</h2>
      <a id="getStarted" href="#form">GET STARTED</a>
    </div>
  </section>
}