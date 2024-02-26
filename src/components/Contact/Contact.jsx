import css from './Contact.module.css';
import { ImUser } from 'react-icons/im';
import { ImPhone } from 'react-icons/im';

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardBox}>
        <div className={css.iconBox}>
          <ImUser className={css.icon} />
          <p className={css.nameClient}>{name}</p>
        </div>
        <div className={css.iconBox}>
          <ImPhone className={css.icon} />
          <p className={css.namberClient}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
