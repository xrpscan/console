import { Container } from "react-bootstrap";

const Footer = () => {
    return(
        <Container>
        <footer className="pt-4 my-md-5 pt-md-5 border-top">
            <div className="row">
                <div className="col-12 col-md">
                    <h6>XRPSCAN</h6>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><small className="d-block mb-3 text-body-secondary">&copy; 2017-2024 Scrambled Egg Technologies, LLC. All rights reserved.</small></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h6>Explore</h6>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">XRPL Metrics</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Amendments</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Validator registry</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">XRP Rich List</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">AMM Pools</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h6>Support</h6>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">support@xrpscan.com</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">API Documentation</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Integration guide</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Contact us</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h6>Social</h6>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">X</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">GitHub</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Reddit</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Instagram</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Threads</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        </Container>
    )
}
export default Footer;