import {useModalStore} from "@/shared/model";
import { SelectCompetencyModal } from '@/features/my-competencies/ui/modal-competency/SelectCompetencyModal.tsx'
import type {ModalType} from "@/shared/model/useModalStore.ts";
import React from "react";

const MODAL_COMPONENTS : Record<NonNullable<ModalType>, React.ElementType> = {
  COMPETENCY_CHOICE: SelectCompetencyModal,
}

export function ModalRoot() {

  const { activeModal, closeModal } = useModalStore()

  if (!activeModal) return null;

  const SpecificModal = MODAL_COMPONENTS[activeModal]

  return <SpecificModal isOpen={true} onClose={closeModal} />
}
