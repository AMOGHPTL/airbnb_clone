import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";


export default function Home({exploreData,cardsData}) {
  return (
    <div className="bg-white text-black">
      <head>
       <meta name="google-site-verification" content="c9HzA7mKIjbSD0IF90rnyqMz5rke0bbxNi6b9j21Cuk" />
      </head>
      {/**header */}
      <Header />
      {/**banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 md:px:32">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          {/**pull some data from API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {exploreData.length > 0 ? (
            exploreData.map((item) => (
              <SmallCard key={item.img} img={item.img} loc={item.location} dist={item.distance}/>
            ))
          ) : (
            <p>No data available</p>
          )}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          {/**pull out some data from API endpoints for medium size cards */}
          <div className="flex overflow-scroll scrollbar-hide space-x-4 p-3 -ml-3">
            {cardsData?.map(items=>(
              <MediumCard key={items.img} img={items.img} title={items.title}/>
            ))}
          </div>
        </section>

        <LargeCard img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg" 
         title="The Greatest Outdoors"
          description="Whislists curated by airbnb"
          buttonText="Get Inspired"/>
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps(){
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(res => res.json());
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(res => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}
