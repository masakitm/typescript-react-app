import { withStateHandlers, compose } from 'recompose'
import GoogleMapPage from '../components/pages/GoogleMapPage'

// e.target.value用型指定
interface TextInputEvent extends React.FormEvent<HTMLInputElement> {
  target: HTMLInputElement
}

// e.preventDefault用型指定
interface SubmitEvent extends React.FormEvent<HTMLFormElement> {
  preventDefault: () => void
}

// 非同期通信
const getGoogleMapData = async (text: string) => {
  const res = await fetch(`${process.env.NODE_URL}?address=${text}`)
  const resBody = await res.json()
  const results = resBody.results[0]

  return {
    address: results.formatted_address,
    lat: results.geometry.location.lat,
    lng: results.geometry.location.lng
  }
}

const Enhance = compose(
  withStateHandlers(
    {
      query: '東京タワー',
      mapData: { address: '', lat: 0, lng: 0 }
    },
    {
      handleInput: () => (e: TextInputEvent) => ({ query: e.target.value }),
      handleSubmit: ({ query }) => (e: SubmitEvent) => {
        e.preventDefault()
        const data = await getGoogleMapData(query)
        return { mapData: { address: 'asdf', lat: 1, lng: 2 } }
      }
    }
  )
)

export default Enhance(GoogleMapPage)
