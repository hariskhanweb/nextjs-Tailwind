import Layout from '../src/components/layout';
import './../styles/global.scss'

function MyApp({ Component, pageProps }) {
  return (
  	<Layout>
  		<Component {...pageProps} />
  	</Layout>
  	)
}

export default MyApp
