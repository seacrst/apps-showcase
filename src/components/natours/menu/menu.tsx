import styl from "./menu.module.styl";

export function Menu() {
    return (
        <div className={styl.menu}>
            <input type="checkbox" className={styl.checkbox} id="menu" />
            <label htmlFor="menu" className={styl.bt}>
                <span className={styl.nav_icon}>&nbsp;</span>
            </label>
            <div className={styl.bg}>&nbsp;</div>

            <nav className={styl.menu_nav}>
                <ul className={styl.menu_list}>
                    <li className={styl.menu_item}>
                        <a className={styl.menu_link} href="#"><span>01</span>About Natours</a>
                    </li>
                    <li className={styl.menu_item}>
                        <a className={styl.menu_link} href="#"><span>02</span>Your benefits</a>
                    </li>
                    <li className={styl.menu_item}>
                        <a className={styl.menu_link} href="#"><span>03</span>Popular tours</a>
                    </li>
                    <li className={styl.menu_item}>
                        <a className={styl.menu_link} href="#"><span>04</span>Stories</a>
                    </li>
                    <li className={styl.menu_item}>
                        <a className={styl.menu_link} href="#"><span>05</span>Book now</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}