import classes from './HeaderNavButton.module.css';

const HeaderNavButton = (props) => {
  return (
    <button className={classes.button} onClick={props.openDrawer}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default HeaderNavButton;
