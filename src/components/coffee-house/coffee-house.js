import Greeting from "../greeting/greeting";
import About from "./about/about";
import Wrapper from "../wrapper/wrapper";
import OurBest from "./out-best/our-best";
import Footer from "../footer/footer";
import Header from "../header/header";
import Promo from "./promo/promo";
import bg from "./bg.jpg";

const CoffeeHouse = (props) => {
    return (
        <>
            <Greeting bg={bg}>
                <Header data={props.headerData}/>
                <Promo/>
            </Greeting>
            <main>
                <Wrapper>
                    <About/>
                </Wrapper>
                <OurBest bestSellersData={props.bestSellersData}/>
            </main>
            <Footer headerData={props.headerData}/>
        </>
    );
}

export default CoffeeHouse;