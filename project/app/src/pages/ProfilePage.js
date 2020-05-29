import React from "react"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


//**Here is the inline styling for text and background
//style={{ backgroundColor: 'rgb(255, 137, 6)' }} This is the navbar and footer
//style={{ backgroundColor: 'rgb(15, 14, 23)' }} This is for the body
//style={{ color: 'rgb(167, 169, 190)'}} This is for the text

export function ProfilePage () {

	return (

	<>

{/*here are the button colors*/}
		<style type ='text/css'>
			{`
			.btn-flat {
			background-color: rgb(255, 137, 6);
			color: black;
			}
		
			.btn-rigid {
			background-color: rgb(15, 14, 23);
			color: white;
			}
		
			`}
		</style>

{/*This is the navbar*/}
	<Container fluid className="px-0" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
		<Navbar collapseOnSelect expand="lg">
			<Navbar.Brand>
				<span style={{fontSize: 37}}>That's What Cheese Said</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					{/*<Nav.Link href="#">Restaurants</Nav.Link>*/}
					{/*<Nav.Link href="#Pictures">Pictures</Nav.Link>*/}
					{/*<Nav.Link href="#Log In">Log In</Nav.Link>*/}
					{/*<Nav.Link href="#About Us">About Us</Nav.Link>*/}
					<Button className="m-2" ><Nav.Link href="#">Restaurants</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="#Pictures">Pictures</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="#Log In">Log In</Nav.Link></Button>
					<Button className="m-2"><Nav.Link href="#About Us">About Us</Nav.Link></Button>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Container>

{/*This is the Body*/}
<main style={{ backgroundColor: 'rgb(15, 14, 23)' }}>

{/*This is the jumbotron*/}
	<Container fluid>
		<h1 className="py-3 display-1" style={{ color: 'rgb(167, 169, 190)'}}>Profile</h1>
			<Button variant="flat" className="mx-2">Upload your photo</Button>
			<Button variant="flat" className="mx-2">Reset Password</Button>
	</Container>


{/*This is the title*/}
	<Container fluid>
		<h1 className="display-3" style={{ color: 'rgb(167, 169, 190)'}}>Your Mac and Cheese Pictures</h1>
	</Container>
{/*This is where the pictures live*/}
	<Container fluid className="py-5">

		<Row className="d-flex justify-content-around">
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese" width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="kevin-picture.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="matt-pic.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="carl-pic.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="kevin-picture.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="matt-pic.png" alt="this is a box of mac and cheese"width={200}/>
			</Col>
			{/*<Image src="carl-pic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="kevin-picture.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="matt-pic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="carl-pic.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="kevin-picture.png" alt="this is a box of mac and cheese"/>*/}
			{/*<Image src="matt-pic.png" alt="this is a box of mac and cheese"/>*/}
		</Row>

		<Row className="d-flex justify-content-around pt-5" >
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
				<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
			<Col xs={6} md={4} lg={2}>
			<Image fluid src="blue-box-300px.jpg" alt="this is a box of mac and cheese"/>
			</Col>
		</Row>

	</Container>

</main>

{/*This is the footer*/}
	<Container fluid className= "py-3" style={{ backgroundColor: 'rgb(255, 137, 6)' }}>
		<Row>
			<Col>
				<p className="text-center">Copyright info</p>
			</Col>
		</Row>
	</Container>

	</>
)}