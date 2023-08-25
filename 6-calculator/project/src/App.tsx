import { FormEventHandler, MouseEventHandler, useState } from 'react';
import { calculateExpressionUsePostfix } from '@/calculator';

const btnClass =
  'my-0 mx-auto w-[50px] h-[50px] text-xl flex justify-center items-center';

type TInputBtnHandler = (str?: string) => MouseEventHandler<HTMLButtonElement>;

function App() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<number>(null);

  const operators = ['+', '-', '*', '/'];
  const numbers = Array.from({ length: 10 }, (_, idx) => idx);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    const result = calculateExpressionUsePostfix(input);
    setResult(result);
  };

  const handleClickInputBtn: TInputBtnHandler = str => () => {
    // input 유효성 검사 필요함.
    setInput(input + str);
  };

  const handleClickClearBtn: MouseEventHandler<HTMLButtonElement> = () => {
    if (!input.length) return;
    setInput(prev => prev.slice(0, -1));
  };

  const handleClickAllClearBtn: MouseEventHandler<HTMLButtonElement> = () => {
    setInput('');
  };

  return (
    <div className={'container flex flex-col justify-center items-center'}>
      <h1 className="text-3xl font-bold m-2">Calculator</h1>
      <form
        className={
          'w-[500px] flex flex-col items-center border-solid border border-black p-2'
        }
        onSubmit={handleSubmit}
      >
        <input
          type={'text'}
          value={input}
          className={
            'w-[100%] h-[50px] text-3xl text-right border-solid border border-black border-b-0 pr-[20px]'
          }
          onChange={({ target }) => setInput(target.value)}
        />
        <span
          className={
            'w-[100%] h-[50px] text-3xl text-right border-solid border border-black border-t-0 pr-[20px]'
          }
        >
          {result === null ? '' : `= ${result}`}
        </span>
        <div className={'w-[100%] grid grid-cols-btn gap-10 m-2'}>
          <button
            type={'button'}
            className={btnClass}
            onClick={handleClickClearBtn}
          >
            C
          </button>
          <button
            type={'button'}
            className={btnClass}
            onClick={handleClickAllClearBtn}
          >
            A.C
          </button>
          {operators.map(str => (
            <button
              type={'button'}
              key={str}
              className={btnClass}
              onClick={handleClickInputBtn(str)}
            >
              {str}
            </button>
          ))}
          <button
            type={'button'}
            className={btnClass}
            onClick={handleClickInputBtn(String(result))}
          >
            ANS
          </button>
          <button type={'submit'} className={btnClass}>
            =
          </button>
        </div>
        <div className={'w-[100%] grid grid-cols-btn gap-10 m-2'}>
          {numbers.map(num => (
            <button
              type={'button'}
              key={num}
              className={btnClass}
              onClick={handleClickInputBtn(String(num))}
            >
              {num}
            </button>
          ))}
          <button
            type={'button'}
            className={btnClass}
            onClick={handleClickInputBtn('.')}
          >
            •
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;