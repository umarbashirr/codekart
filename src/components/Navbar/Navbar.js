import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../UI/UI';
import { Pages, siteTitle } from '../../data/data';

const Navbar = () => {
	return (
		<Nav primary>
			<NavContainer>
				<BrandLogo to='/'>{siteTitle}</BrandLogo>
				<NavLinks>
					{Pages.map((page) => (
						<NavLink to={page.path} key={page.id}>
							{page.label}
						</NavLink>
					))}
				</NavLinks>
			</NavContainer>
		</Nav>
	);
};

export default Navbar;

const Nav = styled.nav`
	position: sticky;
	top: 0;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => (props.primary ? '#072f5f' : '#fff')};
	color: ${(props) => (props.primary ? '#fff' : '#444')};

	a {
		color: ${(props) => (props.primary ? '#fff' : '#444')};
	}
`;

const NavContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const BrandLogo = styled(Link)`
	font-weight: 600;
	font-size: 22px;
`;

const NavLinks = styled.div`
	display: flex;
	gap: 1rem;
`;

const NavLink = styled(Link)`
	text-decoration: none;
	font-weight: 500;
`;
