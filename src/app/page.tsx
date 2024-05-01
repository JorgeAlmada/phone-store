import Image from "next/image";
import HeaderComponent from "../components/header";
import BannerComponent from "@/components/banner";
import ProductCarouselComponent from "@/components/product-carousel";
import FooterComponent from "@/components/footer";

export default function Home() {
  return (
    <main className="">
      <HeaderComponent/>
      <BannerComponent/>
      <ProductCarouselComponent/>
      <FooterComponent/>
    </main>
  );
}
