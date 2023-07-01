import './NavbarComponent.css';
const NavbarComponent = () => {
  return <div className="nav-main">
    <div className="container">
        <div className="row">
            <div className="col-6 nav-pills" style={{textAlign:"start"}}>
                <a href='#'>SK</a>
            </div>
            <div className="col-2 nav-pills cursor-scale">
            <a href='#'> ABOUT ME</a>
            </div>
            <div className="col-2 nav-pills cursor-scale">
            <a href='#'>WORK</a>
            </div>
            <div className="col-2 nav-pills cursor-scale">
            <a href='#'>RESUME</a>
            </div>
        </div>
    </div>
  </div>;
};

export default NavbarComponent;
