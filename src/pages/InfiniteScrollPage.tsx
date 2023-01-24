import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from '../components/InfiniteScroll/InfiniteScroll';

type InfiniteScrollPageProps = {};

const InfiniteScrollPage = ({}: InfiniteScrollPageProps) => {
  return (
    <>
      <Layout>
        <InfiniteScroll />
      </Layout>
    </>
  );
};
export default InfiniteScrollPage;

const Layout = styled.div`
  height: 20rem;
  overflow: auto;
  border: 1px solid black;
`;
