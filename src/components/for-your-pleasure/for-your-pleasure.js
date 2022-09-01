import Greeting from "../greeting/greeting";
import bg from "./bg.jpg";
import Header from "../header/header";
import PageContainer from "../page-container/page-container";
import PictureText from "../picture-text/picture-text";
import Divide from "../divide/divide";
import CardsList from "../cardsList/cards-list";
import Footer from "../footer/footer";
import PageMaster from "../page-master/page-master";

class ForYourPleasure extends PageMaster {
    render(data) {
        data = <>
            <Greeting bg={bg} headerData={this.props.headerData}>
                <Header data={this.props.headerData} onChangePage={this.props.onChangePage}/>
                <h1>For your pleasure</h1>
            </Greeting>
            <PageContainer>
                <PictureText data={this.props.forYourPleasure}/>
                <Divide/>
                <CardsList isDetailed={true} data={this.props.productData}/>
                <Footer headerData={this.props.headerData} onChangePage={this.props.onChangePage}/>
            </PageContainer>
        </>
        return super.render(data);
    }

    // return (
    //     <>
    //         <Greeting bg={bg} headerData={props.headerData}>
    //             <Header data={props.headerData} onChangePage={props.onChangePage}/>
    //             <h1>For your pleasure</h1>
    //         </Greeting>
    //         <PageContainer>
    //             <PictureText data={props.forYourPleasure}/>
    //             <Divide/>
    //             <CardsList isDetailed={true} data={props.productData}/>
    //             <Footer headerData={props.headerData} onChangePage={props.onChangePage}/>
    //         </PageContainer>
    //     </>
    // );
}

export default ForYourPleasure;