import React from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const Home = ({ user, setUser }) => {
  return (
    <>
      <Navbar setUser={setUser} />
      {/* Table */}
      <Table user={user} setUser={setUser} />
    </>
  );
};

export default Home;
