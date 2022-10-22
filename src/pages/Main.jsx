import main from './main.module.sass'
import Header from './../components/Header/Header';
import Section from '../components/Section/Section';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className={main.container}>
            <Header />
            <Section />
            <Footer />
        </div>
    );
};

export default Main;