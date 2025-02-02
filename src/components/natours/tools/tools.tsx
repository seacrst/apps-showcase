import cn from "classnames"
import styl from "./tools.module.styl";

const Tools = () => (
    <section className={styl.tools}>
        <div className={styl.title_box}>
            <h2 className={styl.title}>Most popular tours</h2>
        </div>

        <div className={styl.cardrow}>
            <div className={styl.card}>
                <article className={cn(styl.side, styl.side_front, styl.side_front_1)}>
                    <div className={cn(styl.picture, styl.picture_1)}></div>

                    <h4 className={styl.heading}>
                        <span className={cn(styl.heading_span, styl.heading_span_1)}>The Sea Explorer</span>
                    </h4>

                    <div className={styl.details}>
                        <ul>
                            <li>3 day tour</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy hotels</li>
                            <li>Difficulty: easy</li>
                        </ul>
                    </div>
                </article>

                <article className={cn(styl.side, styl.side_back, styl.side_back_1)}>
                    <div className={styl.price}>
                        <div className={styl.price_box}>
                            <p className={styl.price_only}>Only</p>
                            <p className={styl.price_value}>$298</p>
                            <a href="#" className={`${styl.book_button} b b-white`}>Book now</a>
                        </div>
                    </div>
                </article>
            </div>

            <div className={styl.card}>
                <article className={cn(styl.side, styl.side_front, styl.side_front_2)}>
                    <div className={cn(styl.picture, styl.picture_2)}></div>

                    <h4 className={styl.heading}>
                        <span className={cn(styl.heading_span, styl.heading_span_2)}>The Forest Hiker</span>
                    </h4>

                    <div className={styl.details}>
                        <ul>
                            <li>7 day tour</li>
                            <li>Up to 40 people</li>
                            <li>6 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: medium</li>
                        </ul>
                    </div>
                </article>

                <article className={cn(styl.side, styl.side_back, styl.side_back_2)}>
                    <div className={styl.price}>
                        <div className={styl.price_box}>
                            <p className={styl.price_only}>Only</p>
                            <p className={styl.price_value}>$498</p>
                            <a href="#" className={`${styl.book_button} b b-white`}>Book now</a>
                        </div>
                    </div>
                </article>
            </div>

            <div className={styl.card}>
            <article className={cn(styl.side, styl.side_front, styl.side_front_3)}>
                    <div className={cn(styl.picture, styl.picture_3)}></div>

                    <h4 className={styl.heading}>
                        <span className={cn(styl.heading_span, styl.heading_span_3)}>The Snow Adventurer</span>
                    </h4>

                    <div className={styl.details}>
                        <ul>
                            <li>5 day tour</li>
                            <li>Up to 15 people</li>
                            <li>3 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: hard</li>
                        </ul>
                    </div>
                </article>

                <article className={cn(styl.side, styl.side_back, styl.side_back_3)}>
                    <div className={styl.price}>
                        <div className={styl.price_box}>
                            <p className={styl.price_only}>Only</p>
                            <p className={styl.price_value}>$898</p>
                            <a href="#" className={`${styl.book_button} b b-white`}>Book now</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div className={styl.bottom_box}>
            <a href="#" className={`${styl.bottom_button} b b-dark`}>Discover all tours</a>
        </div>
    </section>
);

export default Tools;