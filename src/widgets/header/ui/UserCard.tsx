import { useMe, useAuthStore, placeholderUser } from "@/entities/user";
import EnterButton from "./EnterButton/EnterButton.tsx";

export function UserCard() {
  const status = useAuthStore((s) => s.status);
  const { data: user = placeholderUser } = useMe(status === "authenticated");

  if (status !== "authenticated" && status !== "loading") {
    return <EnterButton />;
  }

  return (
    <div>
      <p style={{ color: "white", fontSize: "16px" }} title={user.meta.name}>
        {user.meta.name}
      </p>
      <p style={{ color: "white", fontSize: "12px" }}>{user.id}</p>
    </div>
  );
}
