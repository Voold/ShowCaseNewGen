export interface Activity {
    // Тип активности - ключевая точка или этап
    type?: 'keyPoint' | 'currentStage' | 'upcomingStage' | 'completedStage';  // Для этапов - текущий, будущий или уже пройденный

    // Если не выполнено, то вопросик или ссылка на все
    extra?: 'tooltip' | 'all'
    title?: string; 
    status?: 'completed'; // Выполнено или нет, для ключевых точек. Для этапов статус будет вычислятся по дедлайну
    deadline?: string; // Статус будет вычислятся по дедлайну

    // Для ключевых точек
    number?: number; // Какая это ключевая точка, для отображения в виде "1 из 3" и т.п.

    // Для этапов
    progressSteps?: number; // Сколько всего шагов в этапе
    progressCurrentStep?: number; // На каком шаге сейчас находится пользователь
    unitType?: 'percent' | 'none' | 'points'; // В процентах, ничего или баллы
}
