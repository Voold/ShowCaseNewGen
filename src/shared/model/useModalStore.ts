import {create} from "zustand";

export type ModalType = 'COMPETENCY_CHOICE' | null
//'CONFIRM_DELETE'

interface ModalData {
  itemId?: string | number;
  title?: string;
  onConfirm?: () => void | Promise<void>;
}

interface ModalStore {
  activeModal: ModalType,
  modalData: ModalData,
  openModal: (type: ModalType, data?: ModalData) => void,
  closeModal: () => void,
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: null,
  modalData: {},
  openModal: (type, data) => set({ activeModal: type, modalData: data }),
  closeModal: () => set({ activeModal: null, modalData: {} }),
}))