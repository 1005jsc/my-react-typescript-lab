import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// const variants = {
//   open: { opacity: 1, x: 0 },
//   // closed: { opacity: 0, x: '-100%' },
// };

const Animationyo = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

  const [isOpen, setIsOpen] = useState(false);

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  const yes: React.MouseEventHandler<HTMLUListElement> = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  // const container = {
  //   hidden: { opacity: 1 },
  //   show: {
  //     opacity: 0,
  //     transition: {
  //       delayChildren: 0.5,
  //       staggerDirection: -1,
  //     },
  //   },
  // };

  // const item = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 },
  // };

  return (
    <>
      <AnimationDiv
        initial={false}
        animate={{ x: 100 }}
        // variants={variants}
      />
      {/* <AnimationDiv
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      />
      <AnimationDiv
        drag='x'
        dragConstraints={{ left: -100, right: 50 }}
        // whileHover={{ scale: 2 }}
        whileTap={{ scale: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      />
      <AnimationDiv drag='x' style={{ x, opacity }} />

      <AnimationDiv
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></AnimationDiv>
      <button onClick={() => setIsOpen(!isOpen)}>button</button>

      <SimpleAnimationButton>Button</SimpleAnimationButton>
      <SimpleAnimationButton2>Button2</SimpleAnimationButton2> */}
      <motion.ul
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        // animate='visible'
        variants={list}
        onClick={yes}
      >
        <motion.li variants={item} />
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul>

      {/* <motion.ul variants={container} initial='hidden' animate='show'>
        <motion.li variants={item} />
        <motion.li variants={item} />
      </motion.ul> */}
    </>
  );
};

const AnimationDiv = styled(motion.div)`
  width: 10rem;
  height: 10rem;
  background-color: skyblue;
`;

const SimpleAnimationButton = styled.button`
  padding: 1rem;
  color: white;
  font-size: 3rem;
  background-color: green;
  transition: padding 0.5s;

  &:hover {
    padding: 2rem;
  }
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
    width: 13rem;
  }
  50% {
    /* opacity: 0; */
    width: 24rem;
    }
  100% {
    opacity: 1;
    width: 13rem;

  }
`;

const SimpleAnimationButton2 = styled.button`
  padding: 1rem;
  color: white;
  font-size: 3rem;
  background-color: skyblue;
  width: 13rem;

  &:hover {
    animation: ${boxFade} 1s;
  }
`;

export default Animationyo;
