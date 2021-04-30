import Footer from "./Footer"
import Navbar from "./Navbar"

/*
Tips: instead of creating Navbar and Footer obj in every file, 
create Layout component, and put it in _app.js where every page will be rendered.
children props is anything inside Layout obj in app.js
 */
const Layout = ({ children }) => {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
      );
}
 
export default Layout;