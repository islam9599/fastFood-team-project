import React from "react";
import { NavLink as Link } from "react-router-dom";
import { Container, Header, Items, Wrapper } from "./style";
import logo from "../../assets/imgs/logo.png";
import { sidebar } from "../../utils/sidebar";

const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Header.Logo src={logo} alt="logo" />
        <Wrapper>
          <Wrapper.Title>Fast Food</Wrapper.Title>
          <Wrapper.Desc>Online mahsulot sotuvi </Wrapper.Desc>
        </Wrapper>
      </Header>
      <>
        {sidebar.map(({ title, Icon, path }) => (
          <Items to={path}>{title}</Items>
        ))}
      </>
    </Container>
  );
};

export default Sidebar;
