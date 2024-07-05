import Image from "next/image";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return(
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <Image src="/xrpscan-logo.png" width={32} height={32} alt="XRPSCAN Logo" className="me-2"/>
                    <span className="fs-4">XRPSCAN Dashboard</span>
                </Link>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link href="https://xrpscan.com/amms" className="me-3 py-2 link-body-emphasis text-decoration-none" target="_blank">AMMs</Link>
                    <Link href="https://xrpscan.com/metrics" className="me-3 py-2 link-body-emphasis text-decoration-none" target="_blank">Metrics</Link>
                    <Link href="https://xrpscan.com/validators" className="me-3 py-2 link-body-emphasis text-decoration-none" target="_blank">Validators</Link>
                    <Link href="https://xrpscan.com/amendments" className="me-3 py-2 link-body-emphasis text-decoration-none" target="_blank">Amendments</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header;