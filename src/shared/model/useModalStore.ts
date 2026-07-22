import {create} from "zustand";

export type ModalType = 'COMPETENCY_CHOICE' | 'LINK_UPDATE' |null
//'CONFIRM_DELETE'

interface ModalStore {
  activeModal: ModalType,
  modalProps: any,
  openModal: (type: ModalType, props?: any) => void,
  closeModal: () => void,
}

export const useModalStore = create<ModalStore>((set) => ({
  activeModal: null,
  modalProps: {},
  openModal: (type, props) => set({ activeModal: type, modalProps: props }),
  closeModal: () => set({ activeModal: null, modalProps: {} }),
}))