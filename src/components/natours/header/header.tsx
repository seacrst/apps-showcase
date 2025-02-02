import cn from "classnames";
import logo from "assets/img/logo-white.png";
import styl from "./header.module.styl";

const Header = () => (
    <header className={styl.h}>
        <div className={styl["logo-box"]}>
            <img src={logo} alt="Logo" className={styl.logo} />
        </div>

        <div className={styl["text-box"]}>
            <h1 className={styl["heading-primary"]}>
                <span className={styl["heading-primary-main"]}>Outdoors</span>
                <span className={styl["heading-primary-sub"]}>is where life happens</span>
            </h1>

            <a href="#tours" className={cn(styl.b, styl["b-white"])}>Discover out tours</a>
        </div>
    </header>
);

export default Header;