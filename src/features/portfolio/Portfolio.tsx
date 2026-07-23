import styles from './Portfolio.module.css'
import BackIcon from '@/shared/ui/icons/back.svg?react';
import {useState} from "react";

type PortfolioProps = {
  firsValue: string,
  readonly?: boolean
}

export function Portfolio({readonly, firsValue}: PortfolioProps) {
  const [value, setValue] = useState<string>(firsValue)

  return (
    <div className={styles.container}>
      <h3>
        Портфолио
      </h3>
      <div className={styles.body}>
        {!readonly && <p>
          Формат работы на платформе не требует обязательного портфолио, но в борьбе за топовые, реальные и оплачиваемые
          проекты важна каждая деталь. Дополнительное портфолио станет весомым плюсом при рассмотрении вашей кандидатуры
          менеджером проекта и выделит вас на фоне других студентов.
        </p>}
        <label>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={readonly}
            className={styles.input}
            placeholder={"Вставьте ссылку на портфолио"}
          />
          {!readonly ?
            <button>
              Сохранить
            </button> :
            <button>
              Посмотреть
              <BackIcon className={styles.backIcon}/>
            </button>
          }
        </label>

      </div>
    </div>
  )
}
