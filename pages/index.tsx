import Head from "next/head";
import { Header } from "@/components";
import TypeHomeHero from "@/components/TypeHomeHero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Liên Minh Huyền Thoại (doxuanloc2016@gmail.com)</title>
        <meta
          name="description"
          content="Generated by doxuanloc2016@gmail.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ height: "100vh" }}>
        <TypeHomeHero />
      </main>
    </>
  );
}
