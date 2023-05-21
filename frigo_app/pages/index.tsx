import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import UploadForm from "../components/uploadForm/UploadForm";

function HomePage() {
  return (
    <>
      <Header />
      <h1>Welcome to Frigo!</h1>
      <UploadForm />
      <Footer />
    </>
  );
}

export default HomePage;
