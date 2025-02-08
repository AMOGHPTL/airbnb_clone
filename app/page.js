import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";

export default function Home() {
  return (
  <div>
    {/**header */}
    <Header/>
    {/**banner */}
    <Banner/>
  </div>
  );
}
