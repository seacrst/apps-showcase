import { FC } from "react";
import { Link } from "react-router";

const App: FC = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/natours">Natours</Link>
                </li>
            </ul>
        </nav>
    );
};
export default App;