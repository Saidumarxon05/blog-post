import cls from './styles.module.scss'
import Logo from '../assets/images/Logo.svg'


export const Footer = () => {
  return (
    <footer className={cls.footer}>
            <div className={cls.container}>
                <div className={cls.logoWrap}>
                <img width='103.5px' height='34.5px'  className={cls.footerLogo} src={Logo} alt='FooterLogo' />
            <p className={cls.footerContent}>Помощник в публикации статей, журналов.<br/> 
               Список популярных международных конференций.<br/>
                Всё для студентов и преподавателей.
                    </p>
                    <p className={cls.copyright}>Copyright © 2020. LogoIpsum. All rights reserved.</p>
                </div>
   
            <ul className={cls.recourses}>
                    <li>Ресурсы</li>
                    <li>Статьи</li>
                    <li>Журналы</li>
                    <li>Газеты</li>
                    <li>Диплом</li>
                </ul>

            <ul className={cls.about}>
                <li>О нас</li>
                <li>Контакты</li>
                <li>Помощь</li>
                <li>Заявки</li>
                <li>Политика</li>
            </ul>

            <ul className={cls.help}>
                <li>Помощь</li>
                <li>Часто задаваемые вопросы</li>
            </ul>
            </div>
    </footer>
  )

}
