import * as React from 'react'

const GeocodeResult = ({
  mapData: { address, lat, lng }
}: {
  mapData: {
    address: string
    lat: number
    lng: number
  }
}) => (
  <div>
    <div>住所： {address}</div>
    <div>緯度： {lat}</div>
    <div>経度： {lng}</div>
  </div>
)

export default GeocodeResult
