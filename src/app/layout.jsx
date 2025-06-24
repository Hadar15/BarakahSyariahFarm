import "./index.css";

const RootLayout = ({ children }) => (
  <html lang="id">
    <head>
      <title>Barakah Syariah Farm - Daging Sapi Halal Terjangkau</title>
      <meta
        name="description"
        content="Barakah Syariah Farm menyediakan daging sapi halal berkualitas tinggi dengan harga terjangkau. Dipotong sesuai syariat Islam dengan sertifikat halal."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>{children}</body>
  </html>
);

export const metadata = {
  generator: 'v0.dev'
};

export default RootLayout;
