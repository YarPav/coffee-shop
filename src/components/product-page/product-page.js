import Greeting from "../greeting/greeting";
import bg from "../our-coffee/bg.jpg";
import Header from "../header/header";
import PageContainer from "../page-container/page-container";
import Footer from "../footer/footer";
import styled from "styled-components";
import Heading from "../heading/heading";
import PageMaster from "../page-master/page-master";

const ProductEl = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 55px;
  color: #000;
  padding-bottom: 34px;
  .product-img {
    max-width: 392px;
    min-width: 310px;
    width: 100%;
    img {
      width: 100%;
      box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.25);
    }
  }
  span {
    font-weight: 700;
    font-size: 14px;
  }
  .country {
    text-transform: capitalize;
  }
  .price {
    font-size: 24px;
  }
  .text {
    max-width: 408px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 15px;
    row-gap: 16px;
    div:first-child {
      align-self: center;
    }
    .desc {
      line-height: 20px;
    }
  }
`;

class ProductPage extends PageMaster {
    render(data) {
        if (!this.props.productData) {
            return null;
        }
        data =
            <>
                <Greeting bg={bg} headerData={this.props.headerData}>
                    <Header data={this.props.headerData} onChangePage={this.props.onChangePage}/>
                    <h1>Our coffee</h1>
                </Greeting>
                <PageContainer>
                    <ProductEl>
                        <div className="product-img">
                            <img src={this.props.productData.img} alt={this.props.productData.title}/>
                        </div>
                        <div className="text">
                            <Heading isImg={true} heading="About it"/>
                            <p className="country"><span>Country: </span>{this.props.productData.country}</p>
                            <p className="desc"><span>Description: </span>{this.props.productData.desc}</p>
                            <p className="price"><span>Price: </span>{this.props.productData.price}$</p>
                        </div>
                    </ProductEl>
                </PageContainer>
                <Footer headerData={this.props.headerData} onChangePage={this.props.onChangePage}/>
            </>
        return super.render(data);
    }
}

export default ProductPage;