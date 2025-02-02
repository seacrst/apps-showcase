import About from "src/components/natours/about/about";
import Booking from "src/components/natours/booking/booking";
import Features from "src/components/natours/features/features";
import Header from "src/components/natours/header/header";
import Stories from "src/components/natours/stories/stories";
import Tools from "src/components/natours/tools/tools";

const Natours = () => (
    <>
        <Header/>
        <main>
            <About/>
            <Features/>
            <Tools/>
            <Stories/>
            <Booking/>
        </main>
    </>
);


export default Natours;