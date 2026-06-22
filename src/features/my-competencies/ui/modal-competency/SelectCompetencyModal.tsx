import { Modal } from '@/shared/ui/modal/Modal.tsx';
import { useState } from "react";
import { useSkillsStore } from "@/features/my-competencies/model/store/useSkillsStore.ts";
import { useRoleTypes } from "@/entities/user/api/queries.ts";
import { Radio } from "@/shared/ui/fields/radio/Radio.tsx";
import { ModalFooter } from "@/shared/ui/modal-footer/ModalFooter.tsx";

interface SelectCompetencyModalProps {
  isOpen: boolean,
  onClose: () => void
}

export const SelectCompetencyModal = ({ isOpen, onClose }: SelectCompetencyModalProps) => {
  const { addCompetency, draftData } = useSkillsStore();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const { data: roleTypes = [], isLoading } = useRoleTypes();

  const availableCompetencies = roleTypes.filter(
    competency => !draftData.some(existing => existing.roleTypeId === competency.id)
  );

  const handleSubmit = () => {
    if (!selectedValue) return;

    const selectedRole = availableCompetencies.find(c => c.id === selectedValue);

    if (selectedRole) {
      addCompetency(selectedRole.id, selectedRole.name);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header
        title={'Выберите новую компетенцию'}
        subtitle={'После этого сможете наполнить её нужными навыками'}
      />

      <Modal.Body>
        {isLoading ? (
          <p style={{ color: 'var(--color-gray-500)', textAlign: 'center', padding: '20px 0' }}>
            Загрузка компетенций...
          </p>
        ) : availableCompetencies.length > 0 ? (
          availableCompetencies.map(competencyRadio => (
            <Radio
              key={competencyRadio.id}
              name="competence"
              label={competencyRadio.name}
              onChange={() => setSelectedValue(competencyRadio.id)}
              checked={selectedValue === competencyRadio.id}
            />
          ))
        ) : (
          <p style={{ color: 'var(--color-gray-500)', textAlign: 'center', padding: '20px 0' }}>
            Все доступные компетенции уже добавлены
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <ModalFooter
          onClose={onClose}
          handleSubmit={handleSubmit}
          selectedValue={selectedValue}
        />
      </Modal.Footer>
    </Modal>
  );
};