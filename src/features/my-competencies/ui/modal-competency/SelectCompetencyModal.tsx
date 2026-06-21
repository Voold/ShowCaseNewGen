import { Modal } from '@/shared/ui/modal/Modal.tsx';
import { useState } from "react";
import { useSkillsStore } from "@/features/my-competencies/model/store/useSkillsStore.ts";
import { ALL_COMPETENCIES } from "@/features/my-competencies/model/store/mock.ts";
import { Radio } from "@/shared/ui/radio/Radio.tsx";
import { ModalFooter } from "@/shared/ui/modal-footer/ModalFooter.tsx";

interface SelectCompetencyModalProps {
  isOpen: boolean,
  onClose: () => void
}

export const SelectCompetencyModal = ({ isOpen, onClose }: SelectCompetencyModalProps) => {
  const { addCompetency, draftData } = useSkillsStore();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const availableCompetencies = ALL_COMPETENCIES.filter(
    competency => !draftData.some(existing => existing.roleTypeId === competency.roleTypeId)
  );

  const handleSubmit = () => {
    addCompetency(selectedValue!)
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header
        title={'Выберите новую компетенцию'}
        subtitle={'После этого сможете наполнить её нужными навыками'}
      />

      <Modal.Body>
        {availableCompetencies.length > 0 ? (
          availableCompetencies.map(competencyRadio => (
            <Radio
              key={competencyRadio.roleTypeId}
              name="competence"
              label={competencyRadio.roleTypeName}
              onChange={() => setSelectedValue(competencyRadio.roleTypeId)}
              checked={selectedValue === competencyRadio.roleTypeId}
            />
          ))
        ) : (
          // TODO
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
