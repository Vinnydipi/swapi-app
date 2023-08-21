import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { appDispatch } from '../../store/reduxStore';
import { logout } from '../../store/authSlice';
import styles from './MainNavigation.module.css';

interface NavigationItem {
  label: string;
  path: string;
}

function MainNavigation() {
  const [activeNavItem, setActiveNavItem] = useState<string>('home');
  const dispatch = useDispatch<appDispatch>();
  const navigate = useNavigate();
  
  const navigationItems: NavigationItem [] = [
    { label: 'HOME', path: 'home' },
    { label: 'PLANETS', path: 'planets' },
    { label: 'STARSHIPS', path: 'starships' },
  ]

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  }

  const handleNavClick = (path: string) => {
    setActiveNavItem(path);
    navigate(path);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            {navigationItems.map((item) => (
              <li key={item.path}>
                <button 
                  className={activeNavItem === item.path ? styles.activeButton : styles.button}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button className={styles.button} onClick={logoutHandler}>LOGOUT</button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
    
  );
}

export default MainNavigation;
