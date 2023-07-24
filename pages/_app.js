import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Organized Web | Personal Porfolio HTML Template</title>
        <meta
          name="description"
          content="Discover the Organized Web Personal Portfolio HTML Template - Your Gateway to a Stunning Online Portfolio! Ideal for Showcasing Your Creativity."
        />
        <meta
          name="keywords"
          content="Organized Web, Personal Portfolio, HTML Template, Web Design, Responsive, Creative Showcase, Portfolio Website, Professional, Clean Design, Modern, Minimalist, CSS3, jQuery, Bootstrap, Mobile-friendly, Cross-browser Compatibility, One Page Template, Multi-page, Freelancer, Web Developer, Graphic Designer, UX/UI Designer, Digital Artist, Online Resume, Creative Portfolio,"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="App">
        <Component {...pageProps} />
      </div>
    </>
  );
}
