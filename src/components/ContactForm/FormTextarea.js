import PropTypes from "prop-types";
import styles from "../../styles/Contact.module.css";

export default function FormTextarea({ id, value, onChange }) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className={styles.textarea}
    ></textarea>
  );
}

FormTextarea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
