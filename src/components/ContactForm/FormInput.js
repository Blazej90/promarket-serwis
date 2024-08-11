import PropTypes from "prop-types";
import styles from "../../styles/Contact.module.css";

export default function FormInput({ type, id, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
