import styl from "./modal.module.styl";
import img1 from "assets/img/nat-8.jpg";
import img2 from "assets/img/nat-9.jpg";

export function Modal() {
    return (
        <div className={styl.modal_bg} id="popup">
            <div className={styl.modal}>
                <div className={styl.left}>
                    <img className={styl.img} src={img1} alt="tour" />
                    <img className={styl.img} src={img2} alt="tour" />
                </div>

                <div className={styl.right}>
                    <a href="#tours" className={styl.close}>&times;</a>
                    <h2 className={styl.title}>Start booking now</h2>
                    <h3 className={styl.sub_title}>Important &ndash; Please read these terms before booking</h3>
                    <p className={styl.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quasi minus in incidunt deleniti quam exercitationem temporibus laborum sed consectetur reiciendis pariatur dolor. Commodi sed minima nemo eaque ipsa ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla doloremque corrupti veniam nisi error sit illo quisquam nemo saepe, accusamus assumenda a omnis voluptas ex, quibusdam fuga incidunt? Voluptatem.</p>
                    <a className={`${styl.bt} b b-dark`} href="#">Book now</a>
                </div>
            </div>
        </div>
    );
}