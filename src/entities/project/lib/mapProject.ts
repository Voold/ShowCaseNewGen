import type {ProjectDto, ProjectCardData} from '../model/types';

export const mapProjectDtoToEntity = (dto: ProjectDto): ProjectCardData => {
  const checkpointsSummary = dto.checkpoints?.checkpoints
    ?.map(cp => `${cp.title} (${cp.deadline})`)
    .join(', ') || 'Нет чекпоинтов';

  return {
    id: dto.id,
    type: dto.type || 'Case',

    tags: dto.tags ?? [],
    primaryTag: dto.primaryTag,
    
    // tags: (dto.tags || []).map((t) => ({
    //   key: t.tagId as ProjectDirection,
    //   label: t.tagName,
    // })),
    
    ownerId: dto.ownerId,
    partnerId: {
      value: dto.partnerId?.value || '',
      verbose: dto.partnerId?.verbose || 'Не указан',
    },
    status: dto.status,
    meta: {
      title: dto.meta?.title || '',
      description: dto.meta?.description || '',
    },
    
    checkpoints: checkpointsSummary,

    roles: (dto.roles || []).map((r) => ({
      roleId: r.roleId,
      placesCount: r.placesCount,
      minPlacesCount: r.minPlacesCount,
      places: r.places?.length || 0,
      meta: {
        name: r.roleType?.name || 'Без названия',
        description: r.meta?.description || '',
      },
      skills: (r.skills || []).map((s) => ({
        skillId: s.skillId,
        skillName: s.skillName,
      })),
    })),
    
    // prdMeta: {
    //   problem: dto.prdMeta?.problemStatement || '',
    //   context: dto.prdMeta?.prerequisites || '',
    //   audience: dto.prdMeta?.audience?.map(a => a.title).join(', ') || '',
    //   requirements: dto.prdMeta?.functional || [],
    //   mvp: [],
    // },

    prdMeta: dto.prdMeta,
    
    extended: dto.tags?.some(t => t.tagId === 'ml' || t.tagId === 'fintech'), 
    brandColor: dto.id === '8201' ? '28be46' : undefined,
  };
};