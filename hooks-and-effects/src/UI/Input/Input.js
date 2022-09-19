import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import style from "./Input.module.css";

const Input = forwardRef(({ onChange, type, name, label }, ref) => {
  const [value, setValue] = useState();
  const inputRef = useRef();

  const handleChange = useCallback((event) => {
    onChange(event.target.value);
  }, []);

  useImperativeHandle(ref, () => ({
    get value() {
      return inputRef.current.value;
    },
  }));

  return (
    <div className={style.formGroup}>
      <label htmlFor={name} className={style.formLabel}>
        {label}
      </label>
      <input
        type={type || "text"}
        id={name}
        className={style.formControl}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
