import * as React from 'react'

import SearchForm from '../molecules/SearchForm'
import GeocodeResult from '../organisms/GeocodeResult'

const GoogleMapPage = ({
  query,
  mapData,
  handleInput,
  handleSubmit
}: {
  query: string
  mapData: {
    address: string
    lat: number
    lng: number
  }
  handleInput: () => Object
  handleSubmit: any
}) => (
  <div>
    <SearchForm
      query={query}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
    />
    <GeocodeResult mapData={mapData} />
  </div>
)

export default GoogleMapPage
