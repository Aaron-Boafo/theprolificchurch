import Citation from "../components/Home/Citation";
import Feature from "../components/Home/feature";
import Footer from "../components/Home/footer";
import GroupPic from "../components/Home/group";
import Header from "../components/Home/header";
import Hero from "../components/Home/hero";
import Schedule from "../components/Home/schedule";

const Home = () => {
  return (
    <div class="bg-white font-display text-zinc-900 min-h-screen">
      <div class="relative flex w-full flex-col  overflow-x-hidden">
        <Header />

        <main class="flex-grow">
          <Hero />
          <Feature />
          <GroupPic />
          <Schedule />
          <Citation />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Home;
