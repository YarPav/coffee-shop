import Greeting from "../greeting/greeting";
import bg from "./bg.jpg";
import Header from "../header/header";
import PictureText from "../picture-text/picture-text";
import PageContainer from "../page-container/page-container";
import SearchPanel from "./search-panel/search-panel";
import CardsList from "../cardsList/cards-list";
import Footer from "../footer/footer";
import Divide from "../divide/divide";
import PageMaster from "../page-master/page-master";


class OurCoffee extends PageMaster {
    render(data) {
        data = <>
            <Greeting bg={bg} headerData={this.props.headerData}>
                <Header data={this.props.headerData} onChangePage={this.props.onChangePage}/>
                <h1>Our coffee</h1>
            </Greeting>
            <PageContainer>
                <PictureText data={this.props.aboutOutCoffee}/>
                <Divide/>
                <SearchPanel
                    filters={this.props.filters}
                    currentFilter={this.props.currentFilter}
                    onUpdateFilter={this.props.onUpdateFilter}
                    onUpdateSearch={this.props.onUpdateSearch}
                />
                <CardsList isDetailed={true} data={this.props.productData} onOpenProduct={this.props.onOpenProduct}/>
            </PageContainer>
            <Footer headerData={this.props.headerData} onChangePage={this.props.onChangePage}/>
        </>
        return super.render(data);
    }
}

export default OurCoffee;