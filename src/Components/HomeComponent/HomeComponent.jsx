import './HomeComponent.css'
import LeftHomeComponent from './LeftHomeComponent';
import NavbarComponent from './NavbarComponent';
import RightHomeComponent from './RightHomeComponent';
const HomeComponent = () => {
    return (
        <div className="home">
            <NavbarComponent/>
            <br></br>
            <div className='row'>
                <div className='col-6'>
                    <LeftHomeComponent/>
                </div>
                <div className='col-6'>
                  <RightHomeComponent/>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;