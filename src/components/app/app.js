import {Component} from "react";
import CoffeeHouse from "../coffee-house/coffee-house";
import ForYourPleasure from "../for-your-pleasure/for-your-pleasure";
import OurCoffee from "../our-coffee/our-coffee";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                headerData: [
                    {
                        title: 'Coffee house',
                        component: CoffeeHouse
                    },
                    {
                        title: 'Our coffee',
                        component: OurCoffee
                    },
                    {
                        title: 'For your pleasure',
                        component: ForYourPleasure
                    }

                ],
                productsData: [
                    {
                        id: 1,
                        title: "Solimo Coffee Beans 2 kg",
                        img: "img/first-item.jpg",
                        price: 10.73,
                        country: "brazil"
                    },
                    {
                        id: 2,
                        title: "Presto Coffee Beans 1 kg",
                        img: "img/second-item.jpg",
                        price: 15.99,
                        country: "kenya"
                    },
                    {
                        id: 3,
                        title: "AROMISTICO Coffee 1 kg",
                        img: "img/third-item.jpg",
                        price: 7,
                        country: "columbia"
                    },
                    {
                        id: 4,
                        title: "AROMISTICO Coffee 2 kg",
                        img: "img/third-item.jpg",
                        price: 14,
                        country: "columbia"
                    },
                    {
                        id: 5,
                        title: "AROMISTICO Coffee 3 kg",
                        img: "img/third-item.jpg",
                        price: 21,
                        country: "columbia"
                    },
                    {
                        id: 6,
                        title: "AROMISTICO Coffee 4 kg",
                        img: "img/third-item.jpg",
                        price: 28,
                        country: "columbia"
                    }
                ],
                bestSellersData: [1, 2, 3],
                forYourPleasureProductsData: [1, 2, 3, 4, 5, 6],
                ourCoffeeData: {
                    img: {
                        img: "img/picture.jpg",
                        desc: "Woman is drinking the coffee"
                    },
                    heading: "About out beans",
                    desc: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n" +
                        "Afraid at highly months do things on at. Situation recommend objection do intention so questions.\n" +
                        "As greatly removed calling pleased improve an.\n" +
                        " Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went" +
                        "is song that held help face."
                },
                forYourPleasureData: {
                    img: {
                        img: "img/picture1.jpg",
                        desc: "The cup of coffee"
                    },
                    heading: "About our goods",
                    desc: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention so questions. 
                            As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. 
                            Children me laughing we prospect answered followed. At it went is song that held help face.`
                },
                filters: [
                    {
                        id: 1,
                        name: 'all',
                        title: 'All'
                    },
                    {
                        id: 2,
                        name: 'brazil',
                        title: 'Brazil'
                    },
                    {
                        id: 3,
                        name: 'kenya',
                        title: 'Kenya'
                    },
                    {
                        id: 4,
                        name: 'columbia',
                        title: 'Columbia'
                    }
                ]
            },
            searchString: '',
            currentFilter: 'all',
            currentPage: 'Coffee house'
        }
    }
    getItemsByCategory = (data, categoryData) => {
        return data.filter((item, index) => item.id = categoryData[index]);
    }

    searchEmp = (items, searchString) => {
        if (searchString.length === 0) {
            return items;
        }
        return items.filter(item => item.title.toLowerCase().indexOf(searchString.toLowerCase()) > -1);
    }
    filterEmp = (items, currentFilter) => {
        if (currentFilter === 'all') return items;
        return items.filter(item => item.country === currentFilter);
    }
    onUpdateSearch = (searchString) => {
        this.setState({searchString});
    }
    onUpdateFilter = (currentFilter) => {
        this.setState({currentFilter});
    }
    onChangePage = (currentPage) => {
        this.setState({currentPage: currentPage});
    }

    render() {
        const {data, currentFilter, searchString} = this.state;
        const filteredData = this.filterEmp(data.productsData, currentFilter),
            visibleData = this.searchEmp(filteredData, searchString);
        return (
            <div>
                <CoffeeHouse
                    componentName="Coffee house"
                    currentPage={this.state.currentPage}
                    headerData={this.state.data.headerData}
                    bestSellersData={
                        this.getItemsByCategory
                        (this.state.data.productsData, this.state.data.bestSellersData)
                    }
                    onChangePage={this.onChangePage}
                />
                <OurCoffee
                    componentName="Our coffee"
                    currentPage={this.state.currentPage}
                    productData={visibleData}
                    headerData={this.state.data.headerData}
                    aboutOutCoffee={this.state.data.ourCoffeeData}
                    filters={this.state.data.filters}
                    currentFilter={this.state.currentFilter}
                    onUpdateFilter={this.onUpdateFilter}
                    onUpdateSearch={this.onUpdateSearch}
                    onChangePage={this.onChangePage}
                />
                <ForYourPleasure
                    componentName="For your pleasure"
                    currentPage={this.state.currentPage}
                    productData={
                        this.getItemsByCategory
                        (this.state.data.productsData, this.state.data.forYourPleasureProductsData)
                    }
                    headerData={this.state.data.headerData}
                    forYourPleasure={this.state.data.forYourPleasureData}
                    onChangePage={this.onChangePage}
                />
            </div>
        );
    }


}

export default App;