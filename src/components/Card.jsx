import Styled from "styled-components";
import { FaCircle } from "react-icons/fa";
import { IoCopySharp } from "react-icons/io5";

export default function Card() {
    return (
        <Container>
            <div>
                <FaCircle />
                <h4>12.5% of free</h4>
            </div>
            <p>Your Referral Link for xyz</p>
            <Url>
                <p>https://unityexchange.design</p>
                <IoCopySharp color="#ffffff" />
            </Url>
        </Container>
    );
}
const Container = Styled.div`
    background-color: #191B20;
    padding: 10px;
    border-radius: 15px;
    margin-top: 10px;
    line-height: 1.8;
    div:first-child{
        display: flex;
        color: #ffffff;
        align-items: center;
        h4{
            margin-left: 10px;
        }
    }
    p{
        color: #808191;
    }
`;
const Url = Styled.div`
   background-color: #242731;
   padding: 4px 7px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-radius: 10px;
`;
