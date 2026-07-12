import styles from './SegmentedSwitch.module.css';

interface TabOption<T extends string> {
  value: T;
  label: string;
}

interface UniversalSwitchProps<T extends string> {
  options: readonly TabOption<T>[];
  activeTab: T;
  onChange: (value: T) => void;
  maxWidth?: string;
}

export const SegmentedSwitch = <T extends string>({ options, activeTab, onChange} : UniversalSwitchProps<T>) => {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`${styles.button} ${activeTab === option.value ? styles.active : ''}`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};