import { CheckIcon } from "@radix-ui/react-icons";
import { Col, Row } from "react-bootstrap";
import styles from "@/app/ui/main.module.css";

const Features = () => {
    return (
        <Row className="pt-4 pb-5">
            <Col>
                <div style={{width: "var(--component-highlights-item-width)", maxWidth: "300px"}} className="rt-Box lg:rt-r-position-absolute">
                    <div className="rt-Flex rt-r-ai-start rt-r-gap-2 rt-r-mb-1">
                        <CheckIcon className={styles.checkFeature} />
                        <h3 className="rt-Heading rt-r-size-3">Full history search</h3>
                    </div>
                    <p data-accent-color="gray" className="rt-Text rt-r-size-3 rt-r-ml-6">Search within 3.4 billion transactions created since XRPL genesis ledger.</p>
                </div>
            </Col>
            <Col>
                <div style={{width: "var(--component-highlights-item-width)", maxWidth: "300px"}} className="rt-Box lg:rt-r-position-absolute">
                    <div className="rt-Flex rt-r-ai-start rt-r-gap-2 rt-r-mb-1">
                        <CheckIcon className={styles.checkFeature} />
                        <h3 className="rt-Heading rt-r-size-3">AML / Compliance</h3>
                    </div>
                    <p data-accent-color="gray" className="rt-Text rt-r-size-3 rt-r-ml-6">Stay compliant, protect customers and mitigate risk. Discover new insights and find patterns.</p>
                </div>
            </Col>
            <Col>
                <div style={{width: "var(--component-highlights-item-width)", maxWidth: "300px"}} className="rt-Box lg:rt-r-position-absolute">
                    <div className="rt-Flex rt-r-ai-start rt-r-gap-2 rt-r-mb-1">
                        <CheckIcon className={styles.checkFeature} />
                        <h3 className="rt-Heading rt-r-size-3">Flexible queries</h3>
                    </div>
                    <p data-accent-color="gray" className="rt-Text rt-r-size-3 rt-r-ml-6">Add search filter using 100+ fields across all supported transaction types.</p>
                </div>
            </Col>
            <Col>
                <div style={{width: "var(--component-highlights-item-width)", maxWidth: "300px"}} className="rt-Box lg:rt-r-position-absolute">
                    <div className="rt-Flex rt-r-ai-start rt-r-gap-2 rt-r-mb-1">
                        <CheckIcon className={styles.checkFeature} />
                        <h3 className="rt-Heading rt-r-size-3">Instant results</h3>
                    </div>
                    <p data-accent-color="gray" className="rt-Text rt-r-size-3 rt-r-ml-6">Blazing fast results, linked to our explorer for quick review.</p>
                </div>
            </Col>
        </Row>
    )
}
export default Features;