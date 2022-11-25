import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from "./navigation.styles";
import { useContext } from "react";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
        <div className="navigation">
          <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className="logo"/>
            </LogoContainer>
            <NavLinksContainer>
              <NavLink to='/shop'>
                SHOP
              </NavLink>{
                currentUser? (
                  <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>): (<Link className="nav-link" to='/auth'>SIGN IN</Link>)
                }
              <CartIcon/>
            </NavLinksContainer>
          {isCartOpen && <CartDropdown/>}
          </NavigationContainer>
        </div>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation;