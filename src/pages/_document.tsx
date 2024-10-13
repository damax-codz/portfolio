import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />

        <meta
          name="google-site-verification"
          content="T5b_RbFRj5LFknvnYu_F5bFsZD3KgZaW4XfFweFw0E0"
        />
        {/* SEO Meta Tags */}
        <title>Damilola Bhadmus - Artisan of the Digital Realm</title>
        <meta
          name="description"
          content="Damilola Bhadmus | Frontend Web and mobile app developer, specializing in crafting beautiful and functional digital experiences."
        />
        <meta
          name="keywords"
          content="Damilola Bhadmus, Frontend Developer, Mobile App Developer, Web Development, Digital Design, React, Next.js, JavaScript, Lagos Developer"
        />
        <meta name="author" content="Damilola Bhadmus" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Damilola Bhadmus - Artisan of the Digital Realm"
        />
        <meta
          property="og:description"
          content="Frontend Web and mobile app developer, specializing in crafting beautiful and functional digital experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhadmus.site/" />
        <meta
          property="og:image"
          content="https://bhadmus.site//og-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Damilola Bhadmus - Artisan of the Digital Realm"
        />
        <meta
          name="twitter:description"
          content="Frontend Web and mobile app developer, specializing in crafting beautiful and functional digital experiences."
        />
        <meta
          name="twitter:image"
          content="https://bhadmus.site//twitter-image.png"
        />

        {/* Favicon and Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
