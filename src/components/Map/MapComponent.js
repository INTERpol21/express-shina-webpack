import React from 'react'
import  './../../scss/MapComponent.scss'
import { Map, Placemark, YMaps, FullscreenControl, ZoomControl } from '@pbe/react-yandex-maps'

const MapComponent = ({ coordinate, zoom }) => {
  return (
    <YMaps>
      <Map
        className="map"
        state={{
          center: coordinate || [54.708415, 55.975993],
          zoom: zoom,
        }}
        options={{
          suppressMapOpenBlock: true,
        }}>
        <ZoomControl />
        <FullscreenControl />
        <Placemark geometry={coordinate || []} />
      </Map>
    </YMaps>
  )
}
export default MapComponent
