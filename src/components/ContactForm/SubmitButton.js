import PropTypes from "prop-types";
import styles from "../../styles/Contact.module.css";

export default function SubmitButton({ children, onClick = undefined }) {
  return (
    <button type="submit" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
