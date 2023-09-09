import { Cairo } from "next/font/google";
import { NextSeo } from "next-seo";
import Header from "components/Header";
import Loader from "components/Loader";
import Footer from "components/Footer";

const cairo = Cairo({ subsets: ["latin"] });

export default function Blog({ theme, setTheme }) {
  return (
    <>
      <NextSeo title="Blog - Marwan Zayed | Back End Dev" />
      <main className="font-mono">
        <Loader path={"blog"} />
        <Header theme={theme} setTheme={setTheme} />
        <div>
          <div className="container text-4xl text-center h-[calc(100vh-285px)] flex items-center justify-center">
            Soon
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
