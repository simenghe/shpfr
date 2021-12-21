import { PostsProvider } from "../context/PostsContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <Component {...pageProps} />
    </PostsProvider>
  );
}

export default MyApp;
