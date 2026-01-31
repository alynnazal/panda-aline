import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/flaticon_pet_care.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/default.css";
import "../assets/css/animate.min.css";
import "../assets/css/responsive.css";
import "../assets/css/main.css";

import { ProviderComponent } from "@/components/provider/Provider";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Fahrdienst Panda",
    template: "%s | Fahrdienst Panda",
  },
  description:
    "Fahrdienst Panda bietet sichere, zuverlässige und barrierefreie Personenbeförderung für Menschen mit Behinderung in Berlin und Brandenburg.",
};

export default function RootLayout({ children }) {
  const fontVariables = `
    :root {
      --tg-body-font-family: ${montserrat.style.fontFamily};
      --tg-heading-font-family: ${montserrat.style.fontFamily};
    }
  `;

  return (
    <html lang="de" suppressHydrationWarning={true}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontVariables }} />
      </head>
      <body className={montserrat.className}>
        <ProviderComponent>{children}</ProviderComponent>
      </body>
    </html>
  );
}
