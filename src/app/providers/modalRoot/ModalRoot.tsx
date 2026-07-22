import {useModalStore} from "@/shared/model";
import { SelectCompetencyModal } from '@/features/my-competencies/ui/modal-competency/SelectCompetencyModal.tsx'
import type {ModalType} from "@/shared/model/useModalStore.ts";
import React from "react";
import {LinkModal} from "@/features/link-modal/LinkModal.tsx";

const MODAL_COMPONENTS : Record<NonNullable<ModalType>, React.ElementType> = {
  COMPETENCY_CHOICE: SelectCompetencyModal,
  LINK_UPDATE: LinkModal,
}

export function ModalRoot() {

  const { activeModal, closeModal, modalProps } = useModalStore()

  if (!activeModal) return null;

  const SpecificModal = MODAL_COMPONENTS[activeModal]

  return <SpecificModal isOpen={true} onClose={closeModal} {...modalProps} />
}