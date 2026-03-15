import styles from "./SearchField.module.css"

export default function SearchField () {
    return (
        <input className={styles.body} type="text" placeholder="Вводите инфо о проекте"/>
    );
};
