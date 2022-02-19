import Styled from "styled-components";
import { MdOutlineArrowDropDown, MdOutlineExitToApp } from "react-icons/md";
import { BiWallet, BiLinkExternal } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

export default function Right() {
  return (
    <Container>
      <Header>
        <div>
          <img src="assets/images/profile.png" alt="profile" />
          <h4>Avalanche</h4>
          <MdOutlineArrowDropDown size={20} color="#ffffff" />
        </div>
        <div>
          <BiWallet />
          <h4>0XFA...1353</h4>
        </div>
      </Header>
      <Body>
        <h4><BsArrowLeft /> Custom link</h4>
        <p>http://testnet.xyz.xyz/trade?ref=</p>
        <input placeholder="Enter" />
      </Body>
      <Footer>
        <LinkBtn><BiLinkExternal size={20} /> Custom Link</LinkBtn>
        <CancelBtn><MdOutlineExitToApp size={20} /> Cancel</CancelBtn>
      </Footer>
    </Container>
  );
}
const Container = Styled.div`
    padding: 10px 20px;
    background-color: #000000;
`;
const Header = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div:first-child{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #353945;
    padding: 4px 7px;
    border-radius: 10px;
    color: #ffffff;
    line-height: 2;
    img{
      width: 25px;
      margin-right: 10px;
    }
  }
  div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #3772FF;
    padding: 4px 7px;
    border-radius: 10px;
    line-height:1.72;
    color: #ffffff;
    h4{
      margin-left: 5px;
    }
  }
`;
const Body = Styled.div`
  h4, p{
    color: #ffffff;
    line-height: 3;
  }
  input{
    background-color: #242731;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 10px;
  }
`;
const Footer = Styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;
const LinkBtn = Styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3772FF;
  font-weight: 700;
  color: #ffffff;
  border: none;
  padding: 7px;
  border-radius: 10px;
`;
const CancelBtn = Styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: #ffffff;
  border: none;
  padding: 7px;
  border-radius: 10px;
  border: 2px solid #242731;
  background: transparent;
`;
