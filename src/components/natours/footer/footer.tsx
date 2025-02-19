import styl from "./footer.module.styl";
import logo from "assets/img/logo-green-2x.png";

export function Footer() {
    return (
        <footer className={styl.footer}>
            <div className={styl.logo_box}>
                <img className={styl.logo_img} src={logo} alt="logo" />
            </div>

            <div className={styl.row}>
                <nav className={styl.nav}>
                    <ul className={styl.list}>
                        <li className={styl.item}><a className={styl.link} href="#">Company</a></li>
                        <li className={styl.item}><a className={styl.link} href="#">Contact us</a></li>
                        <li className={styl.item}><a className={styl.link} href="#">Careers</a></li>
                        <li className={styl.item}><a className={styl.link} href="#">Policy</a></li>
                        <li className={styl.item}><a className={styl.link} href="#">Terms</a></li>
                    </ul>
                </nav>
                
                <div className={styl.copyright}>
                    <p>Built by Seacrest &copy;</p>
                </div>
            </div>
        </footer>
    );
}