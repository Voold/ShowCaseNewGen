import styles from './FreeCompetencies.module.css'
import { CheckIcon, FeedBackIcon, LikeButton } from "@/shared/ui";
import { InfoTooltip } from '../../info-tooltip/InfoTooltip.tsx';
import { useState } from "react";

interface FreeCompetenciesProps {
  roles: {
    roleId: string,
    placesCount: number,
    minPlacesCount: number,
    places: number,
    skills:
    {
      skillId: string,
      skillName: string,
      requireSkill?: boolean
    }[],
    meta: {
      name: string,
      description: string
    }
  }[]
}

export const FreeCompetencies = ({ roles }: FreeCompetenciesProps) => {

  const [selectedCometencies, setSelectedCometencies] = useState<string[]>([])

  const [isLiked, setIsLiked] = useState(false)

  const [isActiveFeedBack, setIsActiveFeedBack] = useState<boolean>(false)

  const toggleLike = () => {
    return setIsLiked(!isLiked)
  }

  const toggleFeedBack = () => {
    return setIsActiveFeedBack(!isActiveFeedBack)
  }

  const toggleCometencySelect = (roleId: string) => {
    setSelectedCometencies(prevState => {
      let nextState;
      if (prevState.includes(roleId)) {
        nextState = prevState.filter(id => id != roleId)
      } else if (prevState.length >= 2) {
        nextState = prevState
      } else {
        nextState = [...prevState, roleId]
      }

      if (nextState.length === 0) {
        setIsActiveFeedBack(false)
      }
      return nextState
    })
  }


  return (
    <div className={styles.freeCompetencies}>

      <div className={styles.header}>
        <h3 className={styles.title}>Свободные компетенции</h3>
        <p className={styles.description}>
          Что-то из карточки проекта
        </p>
      </div>

      <div className={styles.competenciesList}>
        {
          roles.map((role) => {

            const isSelected = selectedCometencies.includes(role.roleId)

            return (
              <div
                key={role.roleId}
                className={`${styles.competency} ${isSelected ? styles.selected : ''} `}
                onClick={() => toggleCometencySelect(role.roleId)}
              >
                <div className={styles.leftHalfRole}>
                  <p className={styles.role}>
                    {role.meta.name}
                  </p>
                  <ul className={styles.skillsList}>
                    {
                      role.skills.map((skill) => (
                        <li className={`${styles.skill} ${skill.requireSkill ? styles.required : ''}`}
                          key={skill.skillName}>
                          {skill.skillName}
                          {skill.requireSkill && (
                            <span className={styles.tooltip}>
                              менеджер проекта считает этот навык приоритетным
                            </span>
                          )}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={styles.response}>
                  <p className={styles.countRes}>
                    {8}
                  </p>
                  <FeedBackIcon />
                  <span className={styles.tooltip}>
                    столько откликов на эту компетенцию
                  </span>
                </div>
                {isSelected && (
                  <CheckIcon className={`${styles.checkIcon} ${styles.hide}`} pathClassName={styles.pathCheck} />
                )}

              </div>
            )

          })
        }
      </div>

      <div className={styles.footer}>

        <LikeButton
          isLiked={isLiked}
          onClick={toggleLike}
          className={styles.like}
        />
        <button
          className={`${styles.button} ${isActiveFeedBack ? styles.activeButton : ''}`}
          onClick={toggleFeedBack}
          disabled={selectedCometencies.length === 0}
        >
          {isActiveFeedBack ? 'Отменить отклик' : 'Откликнуться'}
        </button>

      </div>

      <InfoTooltip
        text="Свободные компетенции - это те, которые еще не заняты другими участниками команды"
        className={styles.questionIcon}
      />
    </div>
  )
}