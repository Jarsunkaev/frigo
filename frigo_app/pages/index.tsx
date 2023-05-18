import React from "react";
import Header from "../components/header/Header";
import UploadForm from "../components/uploadForm/UploadForm";

function HomePage() {
  return (
    <>
      <Header />
      <h1>Welcome to Frigo!</h1>
      <UploadForm />
    </>
  );
}

export default HomePage;
