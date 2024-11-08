import Navbar from '../Navbar'
import Footer from '../Footer'

interface DefaultLayoutProps {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <div className='flex flex-col min-h-screen bg-gray-100 font-sans'>
    <Navbar />
    <main className='justify-center mx-auto w-full max-w-7xl flex-1'>
      {children}
    </main>
    <Footer />
  </div>
)

export default DefaultLayout
