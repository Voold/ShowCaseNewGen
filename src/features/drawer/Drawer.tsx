import styles from './Drawer.module.css'
import {type ReactNode, type TouchEvent, useEffect, useRef, useState} from "react";
import clsx from "clsx";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Drawer = ({isOpen, onClose, children}: DrawerProps) => {

  const [dragY, setDragY] = useState(0)
  const startY = useRef(0)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => setDragY(0), 350)
      return () => clearTimeout(timer)
    }
  }, [isOpen]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const currentY = e.touches[0].clientY
    const diff = currentY - startY.current

    if (diff > 0) {
      setDragY(diff)
    }
  }

  const handleTouchEnd = () => {
    if (dragY > 120) {
      onClose()
    } else {
      setDragY(0)
    }
  }

  return (
    <div className={clsx(styles.overlay, (isOpen ? styles.open : ''))}>
      <div className={styles.backdrop} onClick={onClose}/>

      <div
        className={styles.sheet}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: isOpen ? `translateY(${dragY}px)` : 'translateY(100%)',
          transition: dragY > 0 ? 'none' : 'transform 0.35s ease-out',
        }}
      >
        <div className={styles.dragHandle}/>
        {children}
      </div>

    </div>
  )
}