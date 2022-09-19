import { createPortal } from 'react-dom';
import Alert from '../UI/Alert';

export const showAlert = (message, onClose) => {
  return createPortal(<Alert message={message} onClose={onClose}/>, document.getElementById('alert'));
}