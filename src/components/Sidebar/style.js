import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  border: 1px solid red;
  padding: 30px 0;
`;
export const Header = styled.div`
  display: flex;
  padding: 0 24px;
  height: 100px;
  align-items: center;
  margin-bottom: 64px;
`;
Header.Logo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 20px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrapper.Title = styled.div`
  font-family: "SFProDisplay" bold;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
`;
Wrapper.Desc = styled.div`
  font-family: "SFProDisplay";
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Items = styled(Link)`
  text-decoration: none;
  font-family: "SFProDisplay";
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
`;
