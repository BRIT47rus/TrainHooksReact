import { memo, useState, ChangeEvent } from "react";
import { useRenderChanges } from "./useWhatCausedRender";

interface TestChangesPropsProps {
  initcount: number;
  inittext: string;
}

export const TestChangesProps = memo((props: TestChangesPropsProps) => {
  const { initcount, inittext } = props;
  const [count, setCount] = useState(initcount);
  const [text, setText] = useState(inittext);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const resetValues = () => {
    setCount(initcount);
    setText('');
  };

  useRenderChanges("test changes", props);

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>add</button>
      </div>
      <div>
        <p>{text}</p>
        <input onChange={onChangeText} value={text}/>
      </div>
      <p>
        <button onClick={resetValues}>reset</button>
      </p>
    </div>
  );
});
