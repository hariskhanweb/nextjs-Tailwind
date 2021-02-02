import Header from '../header/';
import Footer from '../footer/';

function Layout({children}) {
  return (
    <>
      <Header />
      <main className="content min-h-60vh">
        {children}
      </main>
      <Footer />
    </>
  )
}
export default Layout