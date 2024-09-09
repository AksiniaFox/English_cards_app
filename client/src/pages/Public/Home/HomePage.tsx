import { Link } from "@mui/material";

export default function Home() {
  return (
    <>
    <p style={{display:'flex', justifyContent:'center', fontSize:'30px'}}>Добро пожаловать в English Cards - ваш помощник в изучении английского языка!</p>
    <p style={{display:'flex', justifyContent:'center', marginTop:'20px', fontSize:'20px'}}> В приложении пристутствуют страницы:</p>
    <div style={{marginTop:'20px', display:'flex',flexDirection: 'column',alignItems: 'center', fontSize: '20px'}}>
      <Link href="/" underline="hover" sx={{padding:'10px'}}>
        {'Главная (доступна всем)'}
      </Link>
      <Link href="/login" underline="hover" sx={{padding:'10px'}}>
        {'Авторизация (для неавторизованных)'}
      </Link>
      <Link href="/profile" underline="hover" sx={{padding:'10px'}}>
        {'Профиль (только для авторизованных)'}
      </Link>
      <Link href="/cards" underline="hover" sx={{padding:'10px'}}>
        {'Карточки (только для авторизованных)'}
      </Link>
    </div>
    <p style={{display:'flex', justifyContent:'center', marginTop:'60px', fontSize:'13px'}}> Разработчик: Молчанова Ксения</p>
    </>
  );
}
