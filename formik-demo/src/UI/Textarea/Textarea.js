import styles from "./Textarea.module.css";

const Textarea = ({ isValid, field }) => {
  const classNames = `
    ${styles.textarea}
    ${isValid ? "" : styles.invalid}`;

  return (
    <textarea
      className={classNames}
      rows="5"
      {...field}
    />
  );
};

export default Textarea;
