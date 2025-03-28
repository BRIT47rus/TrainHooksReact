import { ThemeProvider } from "../ThemeContex";
import { User, UserObj } from "./ui/User/User";
import { UserButton } from "./ui/UserButton/UserButton";
import { UserTitle } from "./ui/UserTitle/UserTitle";

const user: UserObj = {
  name: "vova",
  age: 35,
  avatar: "https://cataas.com/cat",
};

export const UserBar = () => {
  return (
    <div>
      <ThemeProvider>
        <UserTitle label="Тест юзер титле" />
        <User user={user} />
        <UserButton />
      </ThemeProvider>
    </div>
  );
};
