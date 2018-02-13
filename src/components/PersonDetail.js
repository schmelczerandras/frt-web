import React from "react";
import styled from "styled-components";

import Portrait from "../../images/portrait.png";

const PersonContainer = styled.div`
	background: linear-gradient(to bottom, rgba(200, 16, 46, 1.0), rgba(200, 16, 46, 0.2));
	display: flex;
	width: 25%;
	border-radius: 5px;
`

const PersonDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	justify-content: space-around;
	flex: 1;
`

const ContactContainer = styled.div`
	* {
		margin: 0px 5px;
	}
`

const Img = styled.img`
	border-radius: 5px 0px 0px 5px;
	flex: 1;
`

const PersonDetail = ({first, last, title, school, email}) => (
	<PersonContainer>
		<Img src={Portrait} />
		<PersonDetailContainer>
			<ContactContainer>
				<h2>{last}</h2>
				<h2>{first}</h2>
				<p>{title}</p>
			</ContactContainer>
			<p>{school}</p>
			<a href={"mailto:"+email}>{email}</a>
		</PersonDetailContainer>
	</PersonContainer>
	);

export default PersonDetail;