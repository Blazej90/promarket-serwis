// import PropTypes from "prop-types";
// import styles from "../../styles/Contact.module.css";

// export default function FormInput({ type, id, value, onChange }) {
//   return (
//     <input
//       type={type}
//       id={id}
//       value={value}
//       onChange={onChange}
//       className={styles.input}
//     />
//   );
// }

// FormInput.propTypes = {
//   type: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

import PropTypes from "prop-types";
import styles from "../../styles/Contact.module.css";

export default function FormInput({ type, id, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      value={type !== "file" ? value : undefined} // Jeśli to input file, nie ustawiaj value
      onChange={onChange}
      className={styles.input}
    />
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string, // Dla input file, value nie jest wymagane
  onChange: PropTypes.func.isRequired,
};
