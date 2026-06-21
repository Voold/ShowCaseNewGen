import { useState } from 'react';
import { useCreateProject } from '@/entities/project/api/queries';
import type { CreateProjectRequestType, CreateProjectDto } from '@/entities/project/model/types';

export interface CreateProjectFormProps {
  onSuccess?: () => void;
}

export default function CreateProjectForm({ onSuccess }: CreateProjectFormProps) {
  const { mutate: createProject, isPending, error } = useCreateProject();

  const [title, setTitle] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore x.');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mag.');
  const [type, setType] = useState<CreateProjectRequestType>('Study');

  const [ownerId, setOwnerId] = useState<number>(1);
  const [partnerId, setPartnerId] = useState('rUw2qyQh');
  const [checkpoints, setCheckpoints] = useState('Iz_FtszccHrjmwmI');
  const [tagId, setTagId] = useState('La2E8cIutktxPjHw');

  const [roleTypeId, setRoleTypeId] = useState('BbgNvfk_l-nIhaeO');
  const [placesCount, setPlacesCount] = useState<number>(3);
  const [minPlacesCount, setMinPlacesCount] = useState<number>(1);
  const [roleName, setRoleName] = useState('Lorem Ipsum');
  const [roleDescription, setRoleDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit se.');

  const [prerequisites, setPrerequisites] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendu.');
  const [projectGoal, setProjectGoal] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec x.');
  const [keyFunctionality, setKeyFunctionality] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing x., Lorem ipsum dolor sit amet, consectetur adipiscing elit vero., Lorem ipsum dolor sit amet, conse c.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const basePayload = {
      ownerId,
      partnerId,
      checkpoints,
      meta: {
        title,
        description
      },
      roles: [
        {
          roleTypeId,
          placesCount,
          minPlacesCount,
          meta: {
            name: roleName,
            description: roleDescription
          },
          skills: []
        }
      ],
      tagIds: [
        tagId
      ]
    };

    let finalPayload: CreateProjectDto;

    if (type === 'Study') {
      finalPayload = {
        ...basePayload,
        type: 'Study',
        prdMeta: {
          prerequisites,
          projectGoal,
          keyFunctionality: keyFunctionality.split(',').map(item => item.trim())
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
          <option value="Study">Учебный проект</option>
          <option value="Case">Кейс-проект</option>
          <option value="Real">Реальный проект</option>
        </select>
      </div>

      <hr style={{ width: '100%', border: '0.5px solid #ccc' }} />

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Owner ID</label>
        <input type="number" value={ownerId} onChange={e => setOwnerId(Number(e.target.value))} required />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Partner ID</label>
        <input value={partnerId} onChange={e => setPartnerId(e.target.value)} required />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Checkpoints</label>
        <input value={checkpoints} onChange={e => setCheckpoints(e.target.value)} required />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Tag ID</label>
        <input value={tagId} onChange={e => setTagId(e.target.value)} required />
      </div>

      <hr style={{ width: '100%', border: '0.5px solid #ccc' }} />
      <h4>Настройки роли</h4>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Role Type ID</label>
        <input value={roleTypeId} onChange={e => setRoleTypeId(e.target.value)} required />
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <label>Мин. мест</label>
          <input type="number" value={minPlacesCount} onChange={e => setMinPlacesCount(Number(e.target.value))} required />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <label>Макс. мест</label>
          <input type="number" value={placesCount} onChange={e => setPlacesCount(Number(e.target.value))} required />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Название роли</label>
        <input value={roleName} onChange={e => setRoleName(e.target.value)} required />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Описание роли</label>
        <textarea value={roleDescription} onChange={e => setRoleDescription(e.target.value)} required rows={2} />
      </div>

      {type === 'Study' && (
        <>
          <hr style={{ width: '100%', border: '0.5px solid #ccc' }} />
          <h4>Детали учебного проекта</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Предпосылки (Prerequisites)</label>
            <textarea value={prerequisites} onChange={e => setPrerequisites(e.target.value)} required rows={4} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Цель проекта</label>
            <textarea value={projectGoal} onChange={e => setProjectGoal(e.target.value)} required rows={4} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Ключевой функционал (через запятую)</label>
            <textarea value={keyFunctionality} onChange={e => setKeyFunctionality(e.target.value)} required rows={3} />
          </div>
        </>
      )}

      {error && (
        <div style={{ color: 'red', fontSize: '14px', marginTop: '10px' }}>
          <b>Ошибка:</b> {error.message}
          {/* @ts-expect-error */}
          {error.response?.data?.msg && <p style={{ margin: '4px 0 0' }}>{error.response.data.msg}</p>}
        </div>
      )}
      
      <button type="submit" disabled={isPending} style={{ padding: '8px', cursor: 'pointer', marginTop: '10px' }}>
        {isPending ? 'Создание...' : 'Создать проект'}
      </button>
    </form>
  );
}