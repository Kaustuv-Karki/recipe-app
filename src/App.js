import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import image from "./assets/clipart1129793.png";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav>
                    <Link to="/">
                        <img src={image} alt="" />
                    </Link>
                </Nav>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

const Nav = styled.div`
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        height: 5rem;
        width: 5rem;
    }
`;

export default App;
