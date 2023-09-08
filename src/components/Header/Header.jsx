import { Link } from 'react-router-dom'
import cls from './styles.module.scss'
import Logo from '../assets/images/Logo.svg'


export const Header = () => {
  return (
    <header className={cls.header}>
    <div className={cls.container}>
        {/* <nav>
            <ul>
              <li>
          <Link to="/todos">Todos</Link>
             </li>
            </ul>
        </nav> */}
        <img src={Logo} alt='Logo' />
        <ul className={cls.contentList}>
          <li>Все потоки</li>
          <li>Разработка</li>
          <li>Администрирование</li>
          <li>Дизайн</li>
          <li>Маркетинг</li>
          <li>Все потоки</li>
          <li>Научпоп</li>
        </ul>
                <div className={cls.wrapper}>
                <button className={cls.btn}>Войти</button>
                </div>
            </div>


  </header>
  )

}
