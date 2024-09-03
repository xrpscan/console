import { Code } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return(
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                <Link href="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
                    <Image src="/xrpscan-logo.svg" width={36} height={36} alt="XRPSCAN Logo" priority={true} className="me-2"/>
                    <Code size="6" variant="ghost">Console</Code>
                    <Code size="5" variant="soft" className="mx-2">&beta;ETA</Code>
                </Link>
                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    {/* <Button variant="soft" className="me-3 py-2 link-body-emphasis">Login</Button> */}
                </nav>
            </div>
        </header>
    )
}
export default Header;