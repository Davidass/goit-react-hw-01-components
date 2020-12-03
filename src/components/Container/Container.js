import s from './Container.module.css';

function Container({ children }) {
  return <div className={s.cotainer}>{children}</div>;
}

export default Container;
