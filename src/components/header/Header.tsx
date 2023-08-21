import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reduxStore";
import './Header.css';

const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.name);
  
  if (username) {
    return <h1 className="starWarsHeader">Welcome to my SWAPI APP, {username}</h1>
  } else {
    return <h1 className="starWarsHeader">Hello!</h1>
  }
}

export default Header;