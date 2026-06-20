import { useNavigate } from 'react-router-dom';
import CreateProjectForm from '@/features/create-project/ui/CreateProjectForm';

export default function CreateProjectPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ marginBottom: '20px', cursor: 'pointer', padding: '8px 12px' }}
      >
        ← Назад
      </button>
      
      <h1>Добавление нового проекта</h1>
      <p style={{ marginBottom: '30px', color: '#666' }}>
        Заполните базовую информацию о проекте.
      </p>

      <CreateProjectForm onSuccess={() => navigate('/catalog/projects')} />
    </div>
  );
}