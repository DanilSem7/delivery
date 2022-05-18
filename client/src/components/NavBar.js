import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTE}>Доставка продуктов</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            //onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ
                        </Button>
                        <Button
                            variant={"outline-light"}
                            //onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() =>user.setIsAuth(true)}//onClick={() => history.push(LOGIN_ROUTE)}
                        >Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;