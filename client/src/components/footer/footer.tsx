import './footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';




export default function Footer() {

    return (
      <footer>
        <ul className="social">
            <li><a href="#"><InstagramIcon/></a></li>
            <li><a href="#"><GoogleIcon/></a></li>
            <li><a href="#"><GitHubIcon/></a></li>
            <li><a href="#"><XIcon/></a></li>
         </ul>
        <ul className="menu">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Команда</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
        <ul className="contacts">
            <p> + 7 (920) 88-92-777</p>
            <p>aksinia.fox@gmail.com</p>
        </ul>
      </footer>
    )
  }
  