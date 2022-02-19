import Styled from "styled-components";
import { BiWallet } from "react-icons/bi";
import { Popup, Card, DataTable } from './index'

export default function Middle() {
    return (
        <Container>
            <Header>
                <h2>Section</h2>
                <div>
                    <div>
                        <BiWallet size={20} color="#3772FF" />
                        <h5>0.2 $XYZ</h5>
                    </div>
                    <button>Tier 1</button>
                </div>
            </Header>
            <Body>
                <Popup />
                <Rewards>
                    <h4>Your rewards</h4>
                    <div>
                        <h3>$ 0.26231428</h3>
                        <button>Custom link</button>
                    </div>
                    <Types>
                        <button>$40 AVAX</button>
                        <button>$10 BNB</button>
                        <button>$210 BTC</button>
                    </Types>
                </Rewards>
                <Cards>
                    <Card />
                    <Card />
                </Cards>
                <DataTable />
            </Body>
        </Container>
    );
}
const Container = Styled.div`
    padding: 10px 20px;
    background-color: #000000;
    border-right: 2px solid #353945;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;
const Header = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        border-bottom: 2px solid #3772FF;
        color: #ffffff;
    }
    div:nth-child(2){
        background-color: #353945;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        div:first-child{
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 0;
            h5{
                color: #ffffff;
                margin-left: 10px
            }  
        }
        button{
            background-color: #A3E3FF;
            border: none;
            padding: 4px 7px;
            border-radius: 5px;
            margin-left: 10px
        }
    }
`;
const Body = Styled.div``;
const Rewards = Styled.div`
    background-color: #191B20;
    padding: 10px;
    border-radius: 15px;
    line-height: 2;
    color: #ffffff;
    margin-top: 10px;
    div:nth-child(2){
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            background-color: #3772FF;
            color: #ffffff;
            border: none;
            padding: 4px 7px;
            font-weight: 700;
            border-radius: 7px;
        }
    }
`;
const Types = Styled.div`
    button{
        background-color: #353945;
        color: #ffffff;
        border: none;
        padding: 4px 7px;
        font-weight: 700;
        border-radius: 7px;
        margin-right: 10px;
    }
`;
const Cards = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
`;