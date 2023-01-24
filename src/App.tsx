import { useEffect } from "react";
import "./App.css";
import InfiniteScroll from "./components/InfiniteScroll/InfiniteScroll";
import useWidthDetector from "./components/ValueDifferenceDetect/useWidthDetector";
import GlobalStyle from "./globalStyle.style";
import AsyncTestPage from "./pages/AsyncTestPage";
import InfiniteScrollPage from "./pages/InfiniteScrollPage";
import StarReviewUIPage from "./pages/StarReviewUIPage";

function App() {
  return (
    <>
      <GlobalStyle />

      <StarReviewUIPage />
    </>
  );
}

export default App;
