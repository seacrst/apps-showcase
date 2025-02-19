import About from "src/components/natours/about/about";
import Booking from "src/components/natours/booking/booking";
import Features from "src/components/natours/features/features";
import { Footer } from "src/components/natours/footer/footer";
import Header from "src/components/natours/header/header";
import { Menu } from "src/components/natours/menu/menu";
import Stories from "src/components/natours/stories/stories";
import Tools from "src/components/natours/tools/tools";

const Natours = () => (
    <>
        <Menu/>
        <Header/>
        <main>
            <About/>
            <Features/>
            <Tools/>
            <Stories/>
            <Booking/>
        </main>
        <Footer/>
    </>
);


export default Natours;