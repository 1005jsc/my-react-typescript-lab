import axios from 'axios';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';

type InfiniteScrollDataType = {
  content: string;
};

const InfiniteScroll = () => {
  const [dataArray, setDataArray] = useState<InfiniteScrollDataType[]>([]);

  const bottomObserver = useRef<HTMLDivElement | null>(null);

  const { data: infiniteScrollData, refetch: refetchInfiniteScrollData } =
    useQuery<InfiniteScrollDataType[]>(
      'getInfiniteScrollData',
      async () => {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/infinite_scroll`
        );
        return response.data;
      },
      {
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
          console.log('success');
          setDataArray([...dataArray, ...data]);
        },
      }
    );

  const Observer = useMemo(() => {
    return new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log('hi I am intersecting');
          refetchInfiniteScrollData();
          // 새 항목 불러옴
        }
      },
      { threshold: 0.25, rootMargin: '80px' }
    );
  }, []);

  useEffect(() => {
    if (bottomObserver) {
      Observer.observe(bottomObserver.current!);
    }
    return () => {
      if (bottomObserver.current) {
        console.log('disconnected');
        Observer.unobserve(bottomObserver.current!);
      }
    };
  }, [bottomObserver]);

  return (
    <>
      {dataArray &&
        dataArray.map((data, index) => {
          return (
            <Div key={index}>
              {' '}
              <span>{data.content}</span>
            </Div>
          );
        })}
      <div ref={bottomObserver} />
    </>
  );
};

export default InfiniteScroll;

const Div = styled.div`
  height: 4rem;
`;
