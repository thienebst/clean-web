import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import SiderBarApp from "../components/Layout/SiderBarApp";

export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <SiderBarApp/>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
