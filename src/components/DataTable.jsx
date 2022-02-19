import { useEffect, useState } from "react";
import Styled from "styled-components";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { BiLinkExternal } from "react-icons/bi";

export default function DataTable() {

    const [tableData, setTableData] = useState(null);
    console.log(tableData) // for debugging

    useEffect(() => {
        const getData = async () => {
            const URL = "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
            const request = await fetch(URL, {
                method: "GET",
            });
            request.json().then(data => {
                setTableData(data.data);
            })
        }
        getData();
    }, [])

    return (
        <Container>
            <Header>
                <h3>First Tab</h3>
                <h3>Second Tab</h3>
            </Header>
            <Body>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ASSET</TableCell>
                            <TableCell>AMOUNT</TableCell>
                            <TableCell>USER</TableCell>
                            <TableCell>REFERAL EARNING</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData && (
                            <>
                                {tableData.map((ele) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                <div>
                                                    <img src={ele.img} alt="coin" />
                                                    <div>
                                                        <h4>{ele.asset}</h4>
                                                        <div>
                                                            <p>{ele.type}</p>
                                                            <button>
                                                                <img src={ele.chain.img} alt="coin" />
                                                                {ele.chain.name}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell><h4>{ele.amount}</h4><p>{ele.state}</p></TableCell>
                                            <TableCell>{ele.user}</TableCell>
                                            <TableCell>
                                                <h4>{ele.referral_earnings}</h4>
                                                <p>View on BSC Scan</p>
                                                <BiLinkExternal color="gray" />
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </>
                        )}
                    </TableBody>
                </Table>
            </Body>
        </Container>
    );
}
const Container = Styled.div`
    margin-top: 20px;
    color: #ffffff;
`;
const Header = Styled.div`
    display: flex;
    h3{
        margin-right: 20px;
    }
`;
const Body = Styled.div`
    .MuiTable-root {
        border-spacing: 0px 7px;
        border-collapse: separate;
    }
    .MuiTableRow-root{
        /* background-color: #; */
    }
    .MuiTableCell-head{
        background-color: #353945;
        padding: 5px;
        border: none;
        color: gray;
        &:first-child{
            border-radius: 10px 0 0 10px;
        }
        &:nth-child(4){
            border-radius: 0 10px 10px 0;
        }
    }
    
    .MuiTableCell-body{
        background-color: #191B20;
        color: white;
        padding: 5px;
        border: none;
        p{
            color: gray;
        }
        &:first-child{
            border-radius: 10px 0 0 10px;
            div:first-child{
                display: flex;
                align-items: center;
                img{
                    margin-right: 10px;
                }
                div:nth-child(2){
                    h4{
                        color: #ffffff;
                    }
                    div:nth-child(2){
                        display: flex;
                        align-items: center;
                        p{
                            margin-right: 10px;
                        }
                        button{
                            border: none;
                            padding: 2px;
                            border-radius: 5px;
                            background-color: #353945;
                            color: #ffffff;
                            width: 55px;
                            font-size: 10px;
                        }
                    }
                }
            }
        }
        &:nth-child(2){
            h4{
                color: #ffffff
            }
        }
        &:nth-child(4){
            border-radius: 0 10px 10px 0;
            h4{
                color: #ffffff;
            }
        }
    }
`;