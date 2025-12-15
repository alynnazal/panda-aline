import { AboutOne } from "@/components/about/AboutOne";
import { BannerOne } from "@/components/banner/BannerOne";
import { MarqueeOne } from "@/components/marquee/MarqueeOne";
import { TeamOne } from "@/components/teams/TeamOne";
import { WhyWeAreOne } from "@/components/why_we_are/WhyWeAreOne";
import { Layout } from "@/layouts/Layout";

export default function Home() {
  return (
    <Layout header={1} footer={1}>
      {/* banner one */}
      <BannerOne />

      {/* team */}
      <TeamOne />

      {/* marquee one */}
      <MarqueeOne />

      {/* about one */}
      <AboutOne />

      {/* marquee one */}
      <MarqueeOne />

      {/* why we are */}
      <WhyWeAreOne />

      {/* service one */}
      {/* <ServiceOne /> */}

      {/* counter */}

      {/* brand */}

      {/* testimonial */}
      {/* <TestimonialOne /> */}

      {/* registration */}

      {/* blog */}

      {/* insta */}
    </Layout>
  );
}
