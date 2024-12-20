import BottomFooter from "@/components/BottomFooter";
import Breadcrumb from "@/components/Breadcrumb";
import BreadcrumbImage from "@/components/BreadcrumbImage";
import CounterSection from "@/components/CounterSection";
import FooterTwo from "@/components/FooterTwo";
import HeaderTwo from "@/components/HeaderTwo";
import ShippingOne from "@/components/ShippingOne";
import StepsSection from "@/components/StepsSection";
import TestimonialOne from "@/components/TestimonialOne";
import WhyBecomeSeller from "@/components/WhyBecomeSeller";
import ColorInit from "@/helper/ColorInit";
import Preloader from "@/helper/Preloader";
import ScrollToTopInit from "@/helper/ScrollToTopInit";

export const metadata = {
  title: "MarketPro - E-commerce Next JS Template",
  description:
    "MarketPro is a comprehensive and versatile Next JS template designed for e-commerce platforms, specifically tailored for multi vendor marketplaces. With its modern design and extensive feature set, MarketPro provides everything you need to create a robust and user-friendly online marketplace..",
};

const page = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTopInit color='#FA6400' />

      {/* Preloader */}
      <Preloader />

      {/* HeaderTwo */}
      <HeaderTwo category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"Become Seller"} />

      {/* BreadcrumbImage */}
      <BreadcrumbImage />

      {/* WhyBecomeSeller */}
      <WhyBecomeSeller />

      {/* CounterSection */}
      <CounterSection />

      {/* StepsSection */}
      <StepsSection />

      {/* TestimonialOne */}
      <section className='pb-120'>
        <TestimonialOne />
      </section>

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterTwo */}
      <FooterTwo />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default page;
