import Styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { BsFilterSquare, BsFillCircleFill } from "react-icons/bs";
import { RiMoonClearFill } from "react-icons/ri";
import { AiOutlineMenuFold, AiOutlineGlobal } from "react-icons/ai";
import { useState } from "react";

// menu items
const menuItems = [
    {
        id: 1,
        title: "Home",
        icon: <AiOutlineHome />,
    },
    {
        id: 2,
        title: "Section 1",
        icon: <BsFilterSquare />,
    },
    {
        id: 3,
        title: "Section 2",
        icon: <BsFilterSquare />,
    },
    {
        id: 4,
        title: "Section 3",
        icon: <BsFilterSquare />,
    },
    {
        id: 5,
        title: "Section 4",
        icon: <BsFilterSquare />,
    },
    {
        id: 6,
        title: "Section 5",
        icon: <BsFilterSquare />,
    },
    {
        id: 7,
        title: "Section 6",
        icon: <BsFilterSquare />,
    },
    {
        id: 8,
        title: "Section 7",
        icon: <BsFilterSquare />,
    },
    {
        id: 9,
        title: "Section 8",
        icon: <BsFilterSquare />,
    },
    {
        id: 10,
        title: "Documentation",
        icon: <BsFilterSquare />,
    },
];

export default function SideMenu() {
    const [active, setActive] = useState(1);
    return (
        <Container>
            <Header>
                <div>
                    <img src="assets/images/profile.png" alt="profile" />
                    <h2>Name</h2>
                </div>
                <AiOutlineMenuFold size={25} color="#ffffff" />
            </Header>
            <Body>
                {menuItems.map((ele, key) => (
                    <Item
                        onClick={() => {
                            setActive(ele.id);
                        }}
                        key={ele.id}
                        style={{
                            backgroundColor: active === ele.id && "#353945",
                        }}
                    >
                        <div style={{ color: active === ele.id && "#ffffff" }}>
                            {ele.icon}
                        </div>
                        <h4 style={{ color: active === ele.id && "#ffffff" }}>
                            {ele.title}
                        </h4>
                    </Item>
                ))}
            </Body>
            <Footer>
                <div>
                    <div>
                        <img src="assets/images/profile.png" alt="profile" />
                        <h5>$0.90</h5>
                    </div>
                    <div>
                        <h5>Buy $XYZ</h5>
                    </div>
                </div>
                <div>
                    <AiOutlineGlobal size={25} color="#808191" />
                    <span>
                        <RiMoonClearFill style={{ marginRight: "10px" }} />
                        <BsFillCircleFill color="#3772FF" />
                    </span>
                </div>
            </Footer>
        </Container>
    );
}
const Container = Styled.div`
    background-color: #000000;
    padding: 10px;
    border-right: 2px solid #353945;
`;
const Header = Styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    div:first-child{
        display: flex;
        align-items: center;
        img{
            width: 40px;
            margin-right: 10px;
        }
        h2{
            display: inline;
            color: #ffffff;
        }
    }
`;
const Body = Styled.div`
    margin-top: 20px
`;
const Item = Styled.div`
    display: flex;
    line-height: 2.9;
    cursor: pointer;
    cursor: pointer;
    padding: 0 10px;
    border-radius: 15px;
    align-items: center;
    div:first-child{
        color: #808191;
        font-size: 20px;
        line-height: 0;
    }
    h4{
        margin-left: 10px;
        color: #808191;
    }
`;
const Footer = Styled.div`
    margin-top: 20px;
    div:first-child{
        display: flex;
        justify-content: space-between;
        align-items: center;
        div:first-child{
            background-color: #353945;
            display: flex;
            align-items: center;
            padding: 7px 10px;
            border-radius: 15px;
            img{
                width: 22px;
                margin-right: 10px;
            }
            h5{
                color: #ffffff;
            }
        }
        div:nth-child(2){
            margin-top: 0;
            background-color: #A3E3FF;
            padding: 10px;
            border-radius: 15px;
            h5{
                color: #3772FF;
            }
        }
    }
    div:nth-child(2){
        margin-top: 20px;
        display: flex;
        align-items: center;
        span{
        color: #ffffff;
        background-color: #353945;
        border-radius: 15px;
        padding: 5px;
        margin-left: 20px;
        display: flex;
        align-items: center;
        cursor: pointer;
        }
    }
`;
