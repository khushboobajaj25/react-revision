import React from "react";
import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import SearchComponent from "./SearchComponent";

const Home = () => {
  const { isAuthenticated } = useAuth();
  const { data, loading, error } = useFetch(
    "https://api.example.com/user-details"
  );

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
  

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Home Authenticated</h1>
          <div>User Details: {JSON.stringify(data)}</div>
          <SearchComponent />
        </div>
      ) : (
        <div>Chal nikal</div>
      )}
    </div>
  );
};

export default Home;
