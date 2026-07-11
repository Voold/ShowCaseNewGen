import styles from './InfoTooltip.module.css'
import QuestionIcon from '@/shared/ui/icons/question.svg?react';
import HelpIcon from '@/shared/ui/icons/help_icons.svg?react';
import React from "react";

interface InfoTooltipProps {
  className?: string;
  iconClassName?: string;
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
  text?: string;
  footer?: string;
  link?: string;
  type?: 'question' | 'help';
}

const getIconByType = (type: string, classNames: string) => {
  switch (type) {
    case 'question':
      return <QuestionIcon className={classNames} />;
    case 'help':
      return <HelpIcon className={classNames}/>;
  }
}

export const InfoTooltip = ({children, className, iconClassName, title, subTitle, text, footer, link, type }: InfoTooltipProps) => {
  return (
    <div className={[styles.tooltipBody, className].filter(Boolean).join(' ')}>
      {
        type ? getIconByType(type, iconClassName || '') : children
      }
      <div className={styles.tooltip}>
        <p className={styles.title}>
          {title}
        </p>
        <p className={styles.subTitle}>
          {subTitle}
        </p>
        <p className={styles.text}>
          {text}
        </p>
        <a className={styles.footer} href={link}>
          {footer}
        </a>
      </div>
    </div>
  )
}