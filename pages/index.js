import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export default function Home({ data }) {
  const [posts, setPosts] = useContext(PostsContext);
  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts.length == 0) {
      return;
    }
    const storedObject = JSON.parse(storedPosts);
    setPosts(storedObject);
  }, []);
  return (
    <div className="text-center justify-center w-full">
      <Head>
        <title>Shopify frontend challenge : Spacetagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-6xl font-bold my-10 text-center ">Spacestagram.</h1>

      {/* Display image items. */}
      <div className="justify-center items-center flex flex-col-reverse overflow-y-auto">
        {Array.isArray(data) &&
          data.map((x, i) => {
            console.log(x.title, x.url);
            return (
              <Card
                key={i}
                index={i}
                url={x.url}
                title={x.title}
                description={x.explanation}
                date={x.date}
              />
            );
          })}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const offsetDays = 50;
    const start = new Date();
    start.setDate(start.getDate() - offsetDays);
    const end = new Date();

    const pattern = "yyyy-MM-dd";
    const startDate = format(start, pattern);
    const endDate = format(end, pattern);
    console.log(`start = ${start.toDateString()} end = ${end.toDateString()}`);
    console.log(startDate, endDate);
    // const uri = ` https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${key}`
    const uri = ` https://api.nasa.gov/planetary/apod?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.KEY}`;
    const resp = await axios.get(uri);
    return {
      props: { data: resp.data },
    };
  } catch (err) {
    console.error(err);
  }
  // We can fetch our pictures.
  return {
    props: { id: "Cane" },
  };
}
