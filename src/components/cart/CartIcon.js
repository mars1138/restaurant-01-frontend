import icon from '../../assets/icons8-shopping-cart-96.png';
import classes from './CartIcon.module.css';

const CartIcon = () => {
  return <img className={classes.icon} src={icon} alt="cart" />;
};

export default CartIcon;
