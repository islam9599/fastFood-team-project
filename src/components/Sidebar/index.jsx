import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Items, Wrapper, H1 } from "./style";
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
      <Wrapper>
        {sidebar.map(({ title, Icon, path }) => (
          <Link to={path}>{title}</Link>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
