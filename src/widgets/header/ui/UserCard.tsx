import { useMe, useAuthStore, placeholderUser } from "@/entities/user";
import EnterButton from "./EnterButton/EnterButton.tsx";
import styles from './UserCard.module.css'
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/index.ts";

export function UserCard() {
  const status = useAuthStore((s) => s.status);
  const navigate = useNavigate()
  const { data: user = placeholderUser } = useMe(status === "authenticated");

  // if (status !== "authenticated" && status !== "loading") {
  //   return <EnterButton />;
  // }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.avatarContainer} onClick={() => navigate(ROUTES.MY_PROFILE)}>
        {/* <p style={{ color: "white", fontSize: "16px" }} title={user.meta.name}>
        {user.meta.name}
      </p>
      <p style={{ color: "white", fontSize: "12px" }}>{user.id}</p> */}
        {user.profilePicture ? <img className={styles.avatar} src={user.profilePicture} /> : <p className={styles.symbol}>{user.meta.name.slice(0, 1)}</p>}
      </div>
    </div>

  );
}
