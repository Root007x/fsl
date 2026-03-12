import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Falahsys Terms and Conditions - Service scope, payment terms, and client responsibilities.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-bold text-foreground mb-2">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-12">Last Updated: March 7, 2026</p>

        <div className="max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>
              Welcome to Falahsys. These Terms and Conditions govern the use of our services including website development, ERP systems, mobile application development, digital marketing, and other IT services. By engaging our services, you agree to comply with these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Service Scope</h2>
            <p>Falahsys provides the following services:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Custom Website Design and Development</li>
              <li>E-Commerce Website Development</li>
              <li>ERP Software Development</li>
              <li>Mobile Application Development</li>
              <li>Digital Marketing and SEO</li>
              <li>Content Creation and Multimedia Services</li>
              <li>Technical Consulting and IT Solutions</li>
            </ul>
            <p className="mt-2">All project requirements must be clearly defined and agreed upon before the project begins.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Payment Terms for Software Development Projects</h2>
            <p>For Website, ERP, and Mobile Application Development, payments will be completed in three development phases.</p>
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Phase 1 – UI/UX Design</h3>
            <p>The project begins with UI/UX design and project planning. After the UI/UX design is completed and approved by the client, the first phase payment must be completed before moving to the next stage.</p>
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Phase 2 – Frontend Development</h3>
            <p>After receiving the first payment, the development team will begin Frontend Development. Once the frontend system is completed and demonstrated to the client, the second phase payment must be completed.</p>
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Phase 3 – Backend Development and Final Delivery</h3>
            <p>After receiving the second payment, the Backend Development and system integration will be completed. The system will then be prepared for final delivery and deployment.</p>
            <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Final Payment</h3>
            <p>Full payment must be completed before final deployment, project handover, and access to the complete system.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Project Approval Process</h2>
            <p>At each stage of the project (UI/UX, Frontend, Backend), the client must review and approve the work before moving to the next phase. Delays in approval may affect the overall project timeline.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Software Support and Maintenance</h2>
            <p>Falahsys provides one (1) year of free technical software support after the final project delivery.</p>
            <p className="mt-2 font-medium text-foreground">Free support includes:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Bug fixes</li>
              <li>Minor technical assistance</li>
              <li>System guidance</li>
            </ul>
            <p className="mt-2 font-medium text-foreground">Free support does not include:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>New features</li>
              <li>Major system changes</li>
              <li>New module development</li>
              <li>Third-party integration not included in the original project</li>
            </ul>
            <p className="mt-2">Additional development after delivery may require a separate agreement and cost.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Digital Marketing and Social Media Services</h2>
            <p>For Digital Marketing, SEO, Social Media Marketing, and Content Services, payment terms will depend on the project workflow and scope of work. Pricing may be structured as:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Monthly service plans</li>
              <li>Campaign-based payments</li>
              <li>Milestone-based payments</li>
            </ul>
            <p className="mt-2">The payment structure will be mutually agreed upon before the start of the marketing campaign.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Client Responsibilities</h2>
            <p>Clients must:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Provide accurate project requirements</li>
              <li>Deliver necessary materials such as logos, content, and images</li>
              <li>Approve project stages on time</li>
              <li>Complete payments according to the agreed schedule</li>
            </ul>
            <p className="mt-2">Failure to provide required information may delay the project timeline.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Project Delays</h2>
            <p>If a project is delayed due to lack of communication, missing materials, or delayed approval from the client, Falahsys reserves the right to adjust the delivery timeline.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Intellectual Property</h2>
            <p>After the full and final payment is completed, the client will receive the rights to use the developed system or website. However, Falahsys may retain the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Use the project in its portfolio</li>
              <li>Showcase the work for marketing purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Termination</h2>
            <p>Either party may terminate the project under reasonable circumstances. Payments made for completed work phases are non-refundable.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Changes to Terms</h2>
            <p>Falahsys may update these Terms and Conditions from time to time. Updates will be posted on our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">12. Contact Information</h2>
            <p className="font-medium text-foreground">Falahsys</p>
            <p>Email: info@falahsys.com</p>
            <p>Phone: +880 1339-904830</p>
            <p>Address: Ka/4, Mamata Complex, Basundhara R/A, Dhaka - 1229, Bangladesh</p>
          </section>
        </div>

        <div className="mt-12">
          <Button href="/" variant="ghost">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
