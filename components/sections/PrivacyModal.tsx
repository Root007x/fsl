"use client";

import { Modal, ModalProps } from "@/components/ui/Modal";

type PrivacyModalProps = Omit<ModalProps, "title" | "children">;

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <div className="max-w-none space-y-8 text-muted-foreground pb-4">
        <p className="font-medium mb-8">Last Updated: March 7, 2026</p>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
          <p>
            Welcome to Falahsys. We respect your privacy and are committed to protecting the personal and business information of our clients, website visitors, and partners. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
          <p>By accessing our website or using our services, you agree to the practices described in this Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Company Name</li>
            <li>Project Requirements</li>
            <li>Billing or Payment Information</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Technical Information</h3>
          <p>When you visit our website, we may automatically collect certain technical information such as:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>IP Address</li>
            <li>Browser Type</li>
            <li>Device Information</li>
            <li>Operating System</li>
            <li>Website usage data (pages visited, time spent)</li>
          </ul>

          <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Business Information</h3>
          <p>When working with clients, we may also receive information related to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Business processes</li>
            <li>Website or application content</li>
            <li>Marketing materials</li>
            <li>System requirements for ERP or custom software development</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
          <p>Falahsys may use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>To provide software development and IT services</li>
            <li>To develop ERP systems, websites, and mobile applications</li>
            <li>To provide digital marketing, SEO, and content services</li>
            <li>To communicate with clients and respond to inquiries</li>
            <li>To manage projects and deliver services</li>
            <li>To improve our website, services, and customer experience</li>
            <li>To process payments and maintain business records</li>
            <li>To comply with legal requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Security</h2>
          <p>
            We take reasonable technical and organizational measures to protect your personal and business information against unauthorized access, alteration, disclosure, or destruction. However, no online data transmission or storage system can be guaranteed to be 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">5. Sharing of Information</h2>
          <p>
            Falahsys does not sell, trade, or rent personal information to third parties. We may share information only when necessary:
          </p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>With trusted service providers who assist in operating our business</li>
            <li>To comply with legal obligations or government requests</li>
            <li>To protect the rights, safety, or property of our company and clients</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">6. Cookies and Tracking Technologies</h2>
          <p>Our website may use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Improve website performance</li>
            <li>Understand visitor behavior</li>
            <li>Enhance user experience</li>
          </ul>
          <p className="mt-2">You may disable cookies through your browser settings if you prefer.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">7. Third-Party Services</h2>
          <p>
            Our services may involve third-party tools or platforms such as hosting providers, analytics tools, payment processors, or marketing platforms. These third parties have their own privacy policies, and we are not responsible for their practices.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">8. Data Retention</h2>
          <p>
            We retain personal and business information only as long as necessary to fulfill service obligations, maintain records, resolve disputes, and comply with legal requirements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">9. Your Rights</h2>
          <p>You may request to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data where applicable</li>
            <li>Withdraw consent for data processing</li>
          </ul>
          <p className="mt-2">Requests can be made using the contact details below.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">10. Updates to This Privacy Policy</h2>
          <p>
            Falahsys may update this Privacy Policy periodically. Any updates will be posted on this page with a revised date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Information</h2>
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <p className="mt-2 font-medium text-foreground">Falahsys</p>
          <p>Email: <a href="mailto:falahsystemsltd@gmail.com" className="text-accent underline hover:text-accent/80 transition-colors">falahsystemsltd@gmail.com</a></p>
          <p>Phone: +880 1339-904830</p>
          <p>Address: Ka/4, Mamata Complex, Basundhara R/A, Dhaka - 1229, Bangladesh</p>
        </section>
      </div>
    </Modal>
  );
}
