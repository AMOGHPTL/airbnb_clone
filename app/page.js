import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SmallCard from "./components/SmallCard";

export default async function Home() {
  let exploreData = [];

  try {
    const response = await fetch("https://www.jsonkeeper.com/b/4G1G");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    exploreData = await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    // Optionally, you can set exploreData to an empty array or a default value
  }

  return (
    <div>
      {/**header */}
      <Header />
      {/**banner */}
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 md:px:32">
        <section className="pt-6 ml-20">
          <h2 className="text-4xl font-semibold pb-5">Explore nearby</h2>
          {/**pull some data from API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
          {exploreData.length > 0 ? (
            exploreData.map((item) => (
              <SmallCard img={item.img} loc={item.location} dist={item.distance}/>
            ))
          ) : (
            <p>No data available</p>
          )}
          </div>
        </section>
      </main>
    </div>
  );
}
