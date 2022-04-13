// import logo from './logo.svg';	
// import './App.css';	
// import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';	
// import Shoes1 from './api/shoes1.json';	
// import { useState } from 'react';	
// import axios from 'axios';	
	
// function ViewMore() {	
	
//   let [ shoes, setShoes ] = useState(Shoes1);	
//   let [ pageIdx, setPageIdx ]= useState(2);	
  	
//   return (	
//     <div className="App">	
//       {/* NavBar */}	
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">	
//         <Container>	
//           <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>	
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />	
//           <Navbar.Collapse id="responsive-navbar-nav">	
//             <Nav className="me-auto">	
//               <Nav.Link href="/">Home</Nav.Link>	
//               <Nav.Link href="#pricing">Pricing</Nav.Link>	
//               <NavDropdown title="Dropdown" id="collasible-nav-dropdown">	
//                 <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>	
//                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>	
//                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>	
//                 <NavDropdown.Divider />	
//                 <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>	
//               </NavDropdown>	
//             </Nav>	
//             <Nav>	
//               <Nav.Link href="#login">로그인</Nav.Link>	
//               <Nav.Link eventKey={2} href="#join">	
//                 회원가입	
//               </Nav.Link>	
//             </Nav>	
//           </Navbar.Collapse>	
//         </Container>	
//       </Navbar>	
//       {/* jumbotron */}	
//       <div class="bg-light p-5 rounded-lg">	
//         <h1 class="display-4">Hello, world!</h1>	
//         <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>	
//         <hr class="my-4" />	
//         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>	
//         <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>	
//       </div>	
//       {/* card contents */}	
//       <div className='container'>	
//         <div className='row'>	
//           {	
//             shoes.map((obj, i) => {	
//               return <Card key={i} i={i} shoes={shoes} />	
//             })	
//           }	
//         </div>
//       </div>
//       {/* more button */}
//       <a class="btn btn-secondary btn" role="button" onClick={() => {
//         axios.get('https://ksky216.github.io/json/data' + pageIdx + '.json').then((resp) => {
//           setShoes([
//             ...shoes,
//             ...resp.data
//           ]);
//           setPageIdx(pageIdx + 1);
//         }).catch((e) => {
//           console.log(e);
//         });
//       }}>더보기</a>
//     </div>	
//   );	
// }	
	
// function Card(props) {	
//   return (	
//     <>	
//       <div className='col-md-4'>	
//         <img src={ props.shoes[props.i].image } alt="신발" width="100%" />	
//         <h3>{ props.shoes[props.i].title }</h3>	
//         <p>{ props.shoes[props.i].content } & { props.shoes[props.i].price }</p>	
//       </div>	
//     </>	
//   )	
// }	
	
// export default ViewMore;