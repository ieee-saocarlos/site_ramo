import {Container} from 'react-bootstrap';

function InstagramFeed(props) {

    return (
        <Container className="shadow pt-2" style={{height: "290px"}}>
            <a href="https://www.instagram.com/ieeeuspsc/" style={{zIndex: 0}}>
                <h5 style={{color: 'black'}}>Conheça o nosso instagram @ieeeuspsc</h5>
                <div className="border rounded bg-light p-2" style={{height: "75%"}}>
                    <script src="https://snapwidget.com/js/snapwidget.js"></script>
                    <iframe src="https://snapwidget.com/embed/916363"
                        title="instaFeed"
                        className="snapwidget-widget" 
                        allowtransparency="true" 
                        frameBorder="0" 
                        scrolling="no" 
                        style={{border:'none', overflow:'hidden',  width:'100%', height:'100%', zIndex: 3}}
                    >
                    </iframe>
                </div>
            </a>
        </Container>
    )
}

export default InstagramFeed;