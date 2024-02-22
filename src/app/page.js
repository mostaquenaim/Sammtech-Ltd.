import About from "@/components/About/page";
import Banner from "@/components/Banner";
import FAQ from "@/components/FAQ/page";
import Services from "@/components/Services/page";

export default function Home() {
  return (
    <>
      <Banner />
      <Services />
      <About />
      <FAQ />
    </>
  );
}
