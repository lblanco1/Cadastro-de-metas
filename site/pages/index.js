import React from 'react';

import { Jumbotron, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import Menu from '../components/Menu';

function Home({ data }) {
    return (
        <>
            <Menu />

            <Jumbotron fluid className="list">
                <style>
                    {`.list{
                        background-color: white;
                        padding-top: 30px;
                        padding-bottom: 150px;
                        margin-bottom: 0rem !important;
                    }.title-top{
                        color: #000000;
                    }.list-meta{
                        background-color: #5791ce !important;
                        border-color: white !important;
                        color: #fff;
                    }`}
                </style>
                <Container>
                    <h1 className="display-4 text-center title-top">Minha Metas!</h1><hr />
                    <ListGroup>
                        {data.metas.map(meta => (
                            <div key={meta._id}>
                                <ListGroupItem className="list-meta">
                                    <ListGroupItemHeading>{meta.name}</ListGroupItemHeading>
                                    <ListGroupItemText>{meta.description}</ListGroupItemText>
                                    <ListGroupItemText>{meta.status}</ListGroupItemText>
                                </ListGroupItem>
                            </div>
                        ))}
                    </ListGroup>
                </Container>
            </Jumbotron>
        </>
    );
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8080/metas`);
    const data = await response.json();
    //console.log(data);
    return { props: { data } };
}

export default Home;