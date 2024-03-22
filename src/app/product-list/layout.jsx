import Footer from '../components/Footer'
import Header from '../components/Header'

const layout = ({children}) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}

export default layout