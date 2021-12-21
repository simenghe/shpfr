import Image from "next/image";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export default function Card({ index, url, title, description, date }) {
  const [posts, setPosts] = useContext(PostsContext);
  async function handleClick(e) {
    setPosts((p) => {
      const oldValue = p[index];
      const newValue = { ...p };
      newValue[index] = !oldValue;
      localStorage.setItem("posts", JSON.stringify(newValue));
      return newValue;
    });
    console.log(posts);
  }
  console.log(posts);
  console.log(posts[1], !posts[1]);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg py-4">
      {/* <img className="w-full h-auto" src="https://picsum.photos/200" alt="Sunset in the mountains" /> */}
      <a href={url} target="_blank" rel="noreferrer">
        {url && url.includes("www.youtube.com") ? (
          <iframe className="w-full h-full" src={url}></iframe>
        ) : (
          <img className="w-full h-auto" src={url} alt={title} />
          //   <Image
          //     className="w-full h-auto"
          //     src={url}
          //     alt={title}
          //     width={1000}
          //     height={1000}
          //     layout="responsive"
          //   />
        )}
      </a>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <span>{date}</span>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex">
        {!posts[index] ? (
          <button
            onClick={handleClick}
            className="inline-block bg-gray-200 hover:bg-blue-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Like
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="inline-block bg-blue-400 hover:bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            Unlike
          </button>
        )}
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span> */}
      </div>
    </div>
  );
}
