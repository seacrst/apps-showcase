import styl from "./stories.module.styl";
import img1 from "assets/img/nat-8.jpg";
import img2 from "assets/img/nat-9.jpg";
import vidmp4 from "assets/img/video.mp4";
import vidWebp from "assets/img/video.webm";

const Stories = () => (
    <section className={styl.stories}>
        <header className={styl.header}>
            <h2 className={styl.title}>We make people genuinely happy</h2>
        </header>

        <div className={styl.bg_video}>
            <video className={styl.video} muted autoPlay loop>
                <source  src={vidmp4} type="video/mp4"/>
                <source  src={vidWebp} type="video/webp"/>
            </video>
        </div>

        <div className={styl.box}>
            <article className={styl.story}>
                <figure className={styl.shape}>
                    <img src={img1} alt="img 1" className={styl.img} />
                    <figcaption className={styl.caption}>
                        Mary Smith
                    </figcaption>
                </figure>
                <div className={styl.story_text}>
                    <h3 className={styl.story_heading}>I had the best week ever with my family</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                        repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus enim mollitia perferendis.
                    </p>
                </div>
            </article>

            <article className={styl.story}>

                <figure className={styl.shape}>
                    <img src={img2} alt="img 2" className={styl.img} />
                    <figcaption className={styl.caption}>
                        Jack Wilson
                    </figcaption>
                </figure>
                <div className={styl.story_text}>
                    <h3 className={styl.story_heading}>My life is differnt now</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                        repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus enim mollitia perferendis.
                    </p>
                </div>
            </article>

            <div className={styl.link_button}>
                <a href="#" className="link">Read all stories &rarr;</a>
            </div>
        </div>
    </section>
);

export default Stories;