import { Container, Row } from "react-bootstrap";
import ContactCard from "./ContactCard/ContactCard";
import contacts from "./contacts.json";

function Contact() {
  return (
    <div>
      <Container>
        <Row>
          {contacts.map((contact) => (
            <ContactCard contact={contact} key={contact.contact}></ContactCard>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
