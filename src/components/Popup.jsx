import Styled from "styled-components";
import { useState } from 'react'

export default function Popup() {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        (open) ? setOpen(false) : setOpen(true);
    }

    return (
        <Container style={{
            display: !open && "none",
        }}>
            <div>
                <p>Lorem ipsum dolor lit. Eligendi, Lorem ipsum dolor lit. Eligendi, perspiciatis.</p>
                <button>Tutorial</button>
            </div>
            <img src="assets/icons/coin-stack.svg" alt="coin stack" />
            <img id="cross" src="assets/icons/cross-icon.svg" alt="cross icon" onClick={handleClick} />
        </Container>
    );
}
const Container = Styled.div`
    display: flex;
    background-color: #ABE8FF;
    padding: 5px 10px;
    line-height: 1.5;
    border-radius: 15px;
    justify-content: space-between;
    position: relative;
    margin-top: 30px;
    div:first-child{
        flex-shrink: 1;
        p{
            color: #2B2557;
        }
        button{
            border: none;
            padding: 3px 7px;
            background-color: #ffffff;
            margin-top: 15px;
            border-radius: 5px;
            font-weight: 600;
            color: #2B2557;
        }
    }
    img{
        width: 100px;
    }
    #cross{
        width: 25px;
        position: absolute;
        right: -10px;
        top: -10px;
        cursor: pointer;
    }
`;
