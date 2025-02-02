import styl from "./booking.module.styl";

const Booking = () => (
    <section className={styl.booking}>
        <div className={styl.box}>
            <div className={styl.book}>
                <div className={styl.book_form}>
                    <header className={styl.header}>
                        <h2 className={styl.title}>Start booking now</h2>
                    </header>
                    <form action="#" className={styl.form}>
                        <div className={styl.field}>
                            <input type="text" id="fullname" required placeholder="Full Name" className={styl.input}/>
                            <label htmlFor="fullname" className={styl.label}>Full Name</label>
                        </div>

                        <div className={styl.field}>
                            <input type="email" id="email" required placeholder="Email" className={styl.input}/>
                            <label htmlFor="email" className={styl.label}>Email</label>
                        </div>

                        <div className={styl.radio_field}>
                            <div className={styl.radio}>
                                <input type="radio" className={styl.radio_input} id="small" name="size"/>
                                <label htmlFor="small" className={styl.radio_label}>
                                    <span className={styl.radio_button}></span>
                                    Small tour group
                                </label>
                            </div>
                        {/* </div>

                        <div className={styl.radio_field}> */}
                            <div className={styl.radio}>
                                <input type="radio" className={styl.radio_input} id="large" name="size" />
                                <label htmlFor="large" className={styl.radio_label}>
                                    <span className={styl.radio_button}></span>
                                    Large tour group
                                </label>
                            </div>
                        </div>

                        <div>
                            <button type="submit" className={`${styl.submit} b b-dark`}>Next step &rarr;</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
);

export default Booking;