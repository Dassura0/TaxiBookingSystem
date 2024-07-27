import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

let x = localStorage.getItem('latitude');
let y = localStorage.getItem('longitude');

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDHkfxmHjJeuhS55oLcrlmaPUtdPgBVszM&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `550px`, width: '70%', marginLeft:'30%', position:'fixed' }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 17.6868, lng:83.2185}}
  >
    {props.isMarkerShown && <Marker position={{ lat: 28.644800, lng: 77.216721 }} onClick={props.onMarkerClick} />}
    <Marker
    position={{ lat:17.6858, lng:83.2150 }}
    />
    <Marker
    position={{ lat:18.6858, lng:86.2150}}
    />
    <Marker
    position={{ lat:15.6858, lng:85.2150 }}
    />
    <Marker
    position={{ lat:12.6858, lng:84.2150 }}
    />
    <Marker
    position={{ lat:14.6858, lng:75.2150 }}
    />
    <Marker
    position={{lat:16.6858, lng:81.2150 }}
    />
    </GoogleMap>
)

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }

export default MyMapComponent;