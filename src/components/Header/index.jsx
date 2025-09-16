import { Container, Link, LinkContainer, LoginButton, Title } from "./styles";

export function Header() {
	return (
		<Container>
			<Title>ROTAPADEL</Title>
			<LinkContainer>
				<Link>AGENDE UM HORÁRIO</Link>
				<LoginButton>LOGIN</LoginButton>
			</LinkContainer>
		</Container>
	);
}
