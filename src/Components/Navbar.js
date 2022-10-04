import './Navbar.css';
import logo from '../Asset/logo.png';

const Navbar = () => {
  return (<>
  <section className='navbar'>
    <div className='navbarLogo'>
        <img 
        className='navbarLogo' 
        src={logo}
        alt="logo of bnb"
        />  
    </div>
    <div className='navbarSearch'>
        <form className='navbarForm'>
            <input type="text" placeholder="AnyWhere" />|
            <input type="text" placeholder="Any Week" />|
            <input type="number" placeholder="Add Guest" />
            <i class="fa-solid fa-magnifying-glass"></i>
            
        </form>
    </div>
    <div className='navbarLogindetails'>
        <span>Become a Host</span>
        <i className="  fa-solid fa-globe"></i>
        <div>
        <i className=" fa-solid fa-bars"></i>
        <i className=" fa-solid fa-circle-user"></i>
        </div>
    </div> 
  </section>
  </>)
}

export default Navbar