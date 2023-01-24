import { useEffect, useState } from 'react';

import styled from 'styled-components';

type VariousTestProps = {
  hi: boolean;
};

const VariousTest = ({ hi }: VariousTestProps) => {
  // let koko;
  // if (hi) {
  //   koko = true;
  // } else {
  //   koko = false;
  // }

  const [koko, setKoko] = useState<boolean>(false);

  useEffect(() => {
    if (hi) {
      setKoko(true);
    } else {
      setKoko(false);
    }
    console.log('4' + koko);
  }, [hi]);
  console.log('3' + koko);

  return (
    <>
      <YesSpan yoho={koko}>{`${hi}`}</YesSpan>
    </>
  );
};
export default VariousTest;

const YesSpan = styled.span<{ yoho: boolean }>`
  color: ${({ yoho }) => {
    if (yoho) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
