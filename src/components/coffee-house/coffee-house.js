import Greeting from "../greeting/greeting";
import About from "./about/about";
import Wrapper from "../wrapper/wrapper";
import OurBest from "./out-best/our-best";
import Footer from "../footer/footer";
import Header from "../header/header";
import Promo from "./promo/promo";
import bg from "./bg.jpg";
import PageMaster from "../page-master/page-master";

class CoffeeHouse extends PageMaster {
    render(data) {
        data = <>
                    <Greeting bg={bg}>
                        <Header data={this.props.headerData} onChangePage={this.props.onChangePage}/>
                        <Promo/>
                    </Greeting>
                    <main>
                        <Wrapper>
                            <About/>
                        </Wrapper>
                        <OurBest bestSellersData={this.props.bestSellersData}/>
                    </main>
                    <Footer headerData={this.props.headerData} onChangePage={this.props.onChangePage}/>
                </>
        return super.render(data);
    }

    // render() {
    //     return (
    //         <>
    //             <Greeting bg={bg}>
    //                 <Header data={this.props.headerData} onChangePage={this.props.onChangePage}/>
    //                 <Promo/>
    //             </Greeting>
    //             <main>
    //                 <Wrapper>
    //                     <About/>
    //                 </Wrapper>
    //                 <OurBest bestSellersData={this.props.bestSellersData}/>
    //             </main>
    //             <Footer headerData={this.props.headerData} onChangePage={this.props.onChangePage}/>
    //         </>
    //     );
    // }
}

export default CoffeeHouse;