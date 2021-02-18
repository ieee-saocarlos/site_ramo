import { Card, Badge } from 'react-bootstrap';
import logo from '../../logo.svg';

/**
 * individual Card for each Chapter, to be used in the "Capítulos" Section
 * on the "About" Screen.
 */
function Chapter({ chapter }) {
    return (
        <Card border="primary" bg="light">
            <Card.Header className="d-flex justify-content-end align-items-end">
                <Badge variant="primary">{chapter.members} membros ativos</Badge>
            </Card.Header>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
                <Card.Title className="font-italic">
                    {chapter.name}
                </Card.Title>
                <Card.Text>
                    {chapter.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">         
                <a href={chapter.url} className="text-reset">Saiba mais</a>
            </Card.Footer>
        </Card>
    );
}

export default Chapter;