import Header from "../Components/Common/Header/Header";
import TopBar from "../Components/Common/TopBar/topbar";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <section className="h-[400px] bg-[image:var(--gradient-hero)]">
        <div className="container flex py-6 px-8">
        <h1 className="text-white text-[56px] font-bold ">Buy Tyres Online. Fit Locally. Drive Happy.</h1>

        </div>
      </section>
    </>
  );
};
export default Home;
