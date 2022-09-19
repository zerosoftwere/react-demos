import { forwardRef, useImperativeHandle, useMemo} from "react";
import { createPortal } from "react-dom";

import styles from './Popup.module.css';

const Popup = forwardRef(({onWinClose, children}, ref) => {
  const win = useMemo(() => {
    const win = window.open("", "Portal", "width=300,height=400");
    win.onbeforeunload = () => onWinClose();
    win.document.title = "The Portal";
    return win;
  }, [onWinClose]);

  useImperativeHandle(ref, () => ({
    close: () => win.close()
  }));
 
  return createPortal(<div className={styles.counter}>{ children }</div>, win.document.body);
});

export default Popup;
