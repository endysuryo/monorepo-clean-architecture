import type { AppProps } from 'next/app'
import '../../styles/globals.css'
import { wrapper } from '../application/store'
import { AuthProvider } from '../infrastructure/authProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default wrapper.withRedux(MyApp)
