import { useState } from 'react';
import { useCreateProject } from '@/entities/project/api/queries';
import type { CreateProjectRequestType, CreateProjectDto } from '@/entities/project/model/types';

export interface CreateProjectFormProps {
  onSuccess?: () => void;
}

export default function CreateProjectForm({ onSuccess }: CreateProjectFormProps) {
  const { mutate: createProject, isPending, error } = useCreateProject();
  
  const [title, setTitle] = useState('Проект блинннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннн');
  const [description, setDescription] = useState('Разработка Проекта блинннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннннн');
  const [type, setType] = useState<CreateProjectRequestType>('CreateStudyProjectRequest');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const basePayload = {
      ownerId: 1,
      partnerId: "rUw2qyQh",
      checkpoints: "Iz_FtszccHrjmwmI",
      meta: {
        title,
        description
      },
      roles: [
        {
          roleTypeId: "BbgNvfk_l-nIhaeO",
          placesCount: 3,
          minPlacesCount: 1,
          meta: {
            name: "Backend Dev",
            description: "Писать на Scala, любить фронтендеровввввввввввввввввввввввв"
          },
          skills: []
        }
      ],
      tagIds: [
        "La2E8cIutktxPjHw"
      ]
    };

    let finalPayload: CreateProjectDto;

    if (type === 'CreateStudyProjectRequest') {
      finalPayload = {
        ...basePayload,
        type: 'Study',
        prdMeta: {
          prerequisites: "Студентам сложно искать проектыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыыы",
          projectGoal: "Сделать удобный порталлллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллллл",
          keyFunctionality: ["REST APIиииииииииииииииииииииииииииииииииииииииииииии", "База данныххххххххххххххххххххххххххххххххххххххххххххххххххх", "Фронтенддддддддддддддддддддддддддддд"]
        }
      };
    } else {
      finalPayload = {
        ...basePayload,
        type,
        prdMeta: {
          prerequisites: "...",
          projectGoal: "...",
          keyFunctionality: []
        }
      };
    }


    createProject(finalPayload, {
      onSuccess: () => {
        alert('Проект успешно создан');
        setTitle('');
        setDescription('');
        onSuccess?.();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '400px' }}>
      <h3>Создание нового проекта</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Название проекта</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Описание</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} required rows={4} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Формат</label>
        <select value={type} onChange={e => setType(e.target.value as CreateProjectRequestType)}>
          <option value="CreateStudyProjectRequest">Учебный проект</option>
          <option value="CreateCaseProjectRequest">Кейс-проект</option>
          <option value="CreateRealProjectRequest">Реальный проект</option>
        </select>
      </div>
      
      {error && (
        <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
          <b>Ошибка:</b> {error.message}
          {/* @ts-ignore */}
          {error.response?.data?.msg && <p style={{ margin: '4px 0 0' }}>{error.response.data.msg}</p>}
        </div>
      )}
      
      <button type="submit" disabled={isPending} style={{ padding: '8px', cursor: 'pointer', marginTop: '10px' }}>
        {isPending ? 'Создание...' : 'Создать проект'}
      </button>
    </form>
  );
}