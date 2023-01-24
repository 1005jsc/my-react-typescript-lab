import React, { useState } from 'react';

type UseStateInitialTestProps = {
  propFromTop: string | undefined;
};

const UseStateInitialTest = ({ propFromTop }: UseStateInitialTestProps) => {
  const initialState = 'yes2';

  const [input, setInput] = useState(propFromTop ? propFromTop : initialState);

  const handleSingleImageChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    e.preventDefault();
    const { name } = e.target;

    if (e.target.files?.length) {
      if (e.target.files?.length > 0) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
          // setSingleImagePreviewUrl(reader.result as string);
        };

        //   setInput({...input, [name]: e.target.files[0]});
        console.log(e.target.files[0]);
        console.log(typeof e.target.files[0]);
      }
    }
  };

  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />

      <div> UseStateInitialTest</div>

      <input
        type='file'
        name='thumbnail'
        accept='image/*'
        onChange={handleSingleImageChange}
      />
    </>
  );
};
export default UseStateInitialTest;
