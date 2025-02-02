import img1 from "assets/img/nat-1-large.jpg";
import img2 from "assets/img/nat-2-large.jpg";
import img3 from "assets/img/nat-3-large.jpg";
import styl from "./about.module.styl";
import cn from "classnames"

const About = () => (
    <section className={styl.about}>
        <div className={styl.title_box}>
            <h2 className={styl.title}>Exciting tours for adventurous people</h2>
        </div>

        <article className={styl.c}>
            <div className={styl.box}>
                <h3 className={styl.box_title}>You're going to fall in love with nature</h3>
                <p className={styl.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro debitis mollitia illum. Minus architecto sed voluptatibus qui inventore impedit culpa veritatis doloribus quisquam nesciunt, deleniti obcaecati quidem maxime ratione?</p>


                <h3 className={styl.box_title}>Live adventures like you never have before</h3>
                <p className={styl.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam quo eos vel esse excepturi nemo libero nostrum, consectetur dolorem incidunt doloremque amet neque, recusandae odit. Harum laudantium excepturi molestiae? Quaerat.</p>

                <a href="#" className={styl.bt}>Learn more &rarr;</a>
            </div>

            <div className={styl.composition}>
                <img src={img1} alt="img 1" className={cn(styl.img, styl.img1)} />
                <img src={img2} alt="img 2" className={cn(styl.img, styl.img2)} />
                <img src={img3} alt="img 3" className={cn(styl.img, styl.img3)} />
            </div>
        </article>

        
    </section>
);

export default About;