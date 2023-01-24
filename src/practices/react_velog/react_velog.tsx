import React from 'react';

type HelloProps = {
  color: string;
  name: string;
  isSpecial: boolean;
};

function Hello({ color, name, isSpecial }: HelloProps) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;
