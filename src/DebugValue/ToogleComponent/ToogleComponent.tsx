import { ButtonToogle } from "../ButonToggle/ButtonToogle";

export const ToogleComponent = () => {
  return (
    <div>
      <ButtonToogle label="Звук" valBoolean={true} />
      <ButtonToogle label="Клавиатура" valBoolean={false} />
      <ButtonToogle label="Видео" valBoolean={true} />
    </div>
  );
};
