import styles from "./Pagination.module.css"

export default function Pagination () {
    return (
        <ul className = {styles.body}>
            <li className={styles.selected}>1</li>
            <li>2</li>
            <li>3</li>
            <li className={styles.dotted}>...</li>
            <li>12</li>
        </ul>
    );
};
