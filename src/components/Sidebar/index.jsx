import React from "react";
import { Container, Header, Wrapper, Link, SidebarItem } from "./style";
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
        {sidebar.map(({ title, Icon }) => (
          <>{title} </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
