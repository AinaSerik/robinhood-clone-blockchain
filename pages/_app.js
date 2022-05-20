import '../styles/globals.css'
import { RobinhoodProvider } from '../context/RobinhoodContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider
      serverUrl='https://tgbhjbka5x8j.usemoralis.com:2053/server'
      appId='KL3QsDK4aUUdvEpKsbuzXCw8lvU7EYeuUeSi7BtY'
  >
  <RobinhoodProvider>
      <Component {...pageProps} />
  </RobinhoodProvider>
  </MoralisProvider>
  )
}

export default MyApp
