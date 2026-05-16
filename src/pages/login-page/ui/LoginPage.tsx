import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store/useAuthStore';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <main className={styles.wrap}>
      <h1>Вход</h1>
      <button onClick={handleLogin}>Войти</button>
    </main>
  );
};