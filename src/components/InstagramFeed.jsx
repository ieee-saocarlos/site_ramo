import {Container} from 'react-bootstrap';
import {useEffect} from 'react';
import $ from 'jquery';


function InstagramFeed(props) {

    return (
        <Container className="shadow pt-2" style={{height: "290px"}}>
            <div style={{position: "absolute"}}>
                <div style={{
                    position: "relative", 
                    width:'90%', 
                    padding: 0, 
                    margin: 0,
                    height: '100%'
                }}
                >
                    <h5 style={{color: 'black'}}>Conheça o nosso instagram @ieeeuspsc</h5>
                    <div className="border rounded bg-light p-2">
                        <script src="https://snapwidget.com/js/snapwidget.js"></script>
                            <iframe src="https://snapwidget.com/embed/916363"  style={{zIndex: 3}}
                                tytle="instaFeed"
                                className="snapwidget-widget" 
                                allowtransparency="true" 
                                frameBorder="0" 
                                scrolling="no" 
                                style={{border:'none', overflow:'hidden',  width:'100%', height:'100%'}}
                            >
                            </iframe>
                    </div>
                </div>
                {/* Essa div com link existe para que não seja redirecionado para o site do iframe utilizado para obter as imagens */}
                <a target='_blank' href="https://www.instagram.com/ieeeuspsc/"
                        style={{width: '100%', height: '100%'}}>
                    <div style={{
                        position: "absolute", 
                        height: '100%',
                        width:'90%', 
                        padding: 0, 
                        margin: 0,
                        top: 0,
                        }}
                    >
                        
                    </div>
                </a>
            </div>
        </Container>
    )
}

export default InstagramFeed;