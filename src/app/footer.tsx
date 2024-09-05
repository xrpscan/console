const Footer = () => {
    return(
        <footer className="ml-2 pt-4 my-md-5 pt-md-5 border-top">
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
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://xrpscan.com/metrics" target="_blank" rel="nofollow noopener">XRPL Metrics</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://xrpscan.com/amendments" target="_blank" rel="nofollow noopener">Amendments</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://xrpscan.com/validators" target="_blank" rel="nofollow noopener">Validator registry</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://xrpscan.com/balances" target="_blank" rel="nofollow noopener">XRP Rich List</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://xrpscan.com/amms" target="_blank" rel="nofollow noopener">AMM Pools</a></li>
                    </ul>
                </div>
                <div className="col-6 col-md">
                    <h6>Support</h6>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="mailto:support@xrpscan.com">support@xrpscan.com</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://docs.xrpscan.com/" target="_blank" rel="nofollow noopener">API Documentation</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://docs.xrpscan.com/help/integration-guide" target="_blank" rel="nofollow noopener">Integration guide</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://docs.xrpscan.com/help/contact-us" target="_blank" rel="nofollow noopener">Contact us</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="https://x.com/xrpscan" target="_blank" rel="nofollow noopener">Follow us on X</a></li>
                    </ul>
                </div>
                {/* <div className="col-6 col-md">
                    <h6>Social</h6>
                    <ul className="list-unstyled text-small">
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">X</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">GitHub</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Reddit</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Instagram</a></li>
                        <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Threads</a></li>
                    </ul>
                </div> */}
            </div>
        </footer>
    )
}
export default Footer;