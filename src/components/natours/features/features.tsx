import styl from "./features.module.styl";

const Features = () => (
    <section className={styl.features}>
        <div className={styl.c}>
            <article className={styl.card}>
                <i className="icon icon-basic-world"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, provident perferendis distinctio dolor veritatis harum architecto expedita autem quibusdam ducimus? Ratione dolorum culpa amet maxime quis ut natus nihil reprehenderit.</p>
            </article>

            <article className={styl.card}>
                <i className="icon icon-basic-compass"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, provident perferendis distinctio dolor veritatis harum architecto expedita autem quibusdam ducimus? Ratione dolorum culpa amet maxime quis ut natus nihil reprehenderit.</p>
            </article>

            <article className={styl.card}>
                <i className="icon icon-basic-map"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, provident perferendis distinctio dolor veritatis harum architecto expedita autem quibusdam ducimus? Ratione dolorum culpa amet maxime quis ut natus nihil reprehenderit.</p>
            </article>

            <article className={styl.card}>
                <i className="icon icon-basic-heart"></i>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, provident perferendis distinctio dolor veritatis harum architecto expedita autem quibusdam ducimus? Ratione dolorum culpa amet maxime quis ut natus nihil reprehenderit.</p>
            </article>
        </div>
    </section>
);

export default Features;