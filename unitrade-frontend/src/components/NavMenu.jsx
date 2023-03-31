import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/unitrade-nav.png';
import styled from "styled-components";
import { LOGOUT } from "../utils/client";
import { useAuth } from "./AuthProvider";
import personIcon from "../assets/person-icon.svg"
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const NavMenuStyle = styled.div`
    .bg-white{
        background-color: white;
    }

    .nav-link {
        color: var(--black);
        font-size: 1rem;
    }

    .get-started-link {
        padding: 10px;
        background-color: var(--secondary);
        transition: background-color .2s linear;
        box-shadow: 0 2px 10px 0 rgb(55 51 115 / 30%);
        border-radius: 4px;
        font-weight: 550;
        color: white;
    }

    .logout-link {
        padding: 10px;
        background-color: var(--red);
        transition: background-color .2s linear;
        box-shadow: 0 2px 10px 0 rgb(55 51 115 / 30%);
        border-radius: 4px;
        font-weight: 550;
        color: white;
    }

    .profile-btn {
        width: 30px;
        height: 30px;
    }
`;

export function NavMenu() {
    const { auth, setAuth } = useAuth();

    function handleOnLogout(e) {
        e.preventDefault();
        LOGOUT();
        setAuth(false);
        window.location.reload(false);
    }

    const profileTooltip = (
        <Tooltip id="profile-tooltip">
          My Profile
        </Tooltip>
    );

    return (
        <>
            <NavMenuStyle>
                <Navbar bg="white" variant="light" sticky="top">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                alt=""
                                src={logo}
                                width="125"
                                height="50"
                                className="d-inline-block align-top"
                            />{' '}
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/browse/item">Browse</Nav.Link>
                            {/* <Nav.Link href="/">About</Nav.Link> */}
                        </Nav>
                        
                        {auth &&
                        <OverlayTrigger placement="bottom" overlay={profileTooltip}>
                            <Nav.Link href="/profile" className="ms-auto p-3"><img src={personIcon} className="profile-btn"></img></Nav.Link>
                        </OverlayTrigger>
                        }
                        {auth ? 
                        <Nav.Link className="logout-link" onClick={handleOnLogout}>Log Out</Nav.Link>
                        :
                        <Nav.Link className="get-started-link" href="/login">Get Started</Nav.Link>
                        }
                    </Container>
                </Navbar>
            </NavMenuStyle>
        </>
    );
}