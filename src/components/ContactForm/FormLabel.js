import PropTypes from "prop-types";
import styles from "../../styles/Contact.module.css";

export default function FormLabel({ htmlFor, children }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

FormLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
