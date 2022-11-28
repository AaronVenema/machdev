import Header from "../header/header";
import Footer from "../footer/footer";
import CiGrid from "./ciGrid";
import { Container } from "semantic-ui-react";


function CompanyInfo (){
    return (
        <Container>
            <Header/>
            <CiGrid/>
            <Footer/>
        </Container>
    )
}

export default CompanyInfo