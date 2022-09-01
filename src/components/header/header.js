import Navigation from "../navigation/navigation";
const Header = (props) => {
    return (
        <header>
            <Navigation data={props.data} isDark={false} onChangePage={props.onChangePage}/>
        </header>
    );
}

export default Header;
