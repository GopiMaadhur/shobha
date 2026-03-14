import Footer from "@/components/Footer"
import { PageWrapper, Section } from "@/components/ui/PageWrapper"

export default function PrivacyPolicy() {
  return (
    <PageWrapper title="Privacy Policy">
      <Section title="Information We Collect">
        We collect personal information you provide when booking appointments or contacting us,
        including your name, email address, phone number, and service preferences. We may also
        collect information about your visits to our website through cookies and analytics tools.
      </Section>

      <Section title="How We Use Your Information">
        Your information is used solely to manage your appointments, send booking confirmations,
        respond to your enquiries, and improve our services. We do not sell, rent, or trade your
        personal information to third parties under any circumstances.
      </Section>

      <Section title="Cookies">
        Our website uses cookies to enhance your browsing experience. Cookies help us understand
        how you interact with our site so we can improve it. You may disable cookies through your
        browser settings, though some features may not function as intended.
      </Section>

      <Section title="Data Security">
        We take reasonable precautions to protect your personal information from unauthorized
        access, misuse, or disclosure. All data is stored securely and access is restricted to
        authorized personnel only.
      </Section>

      <Section title="Third-Party Services">
        We may use trusted third-party services such as EmailJS for form submissions. These
        services have their own privacy policies and we encourage you to review them. We are
        not responsible for the privacy practices of external websites.
      </Section>

      <Section title="Your Rights">
        You have the right to request access to, correction of, or deletion of your personal
        data at any time. To exercise these rights, please contact us directly through our
        contact page.
      </Section>

      <Section title="Changes to This Policy">
        We may update this Privacy Policy from time to time. Any changes will be posted on
        this page with a revised effective date. Continued use of our website after changes
        constitutes acceptance of the updated policy.
      </Section>

      <Section title="Contact Us">
        If you have any questions about this Privacy Policy, please reach out to us via our
        Contact page or email us directly at shobhaparlour2110@gmail.com.
      </Section>
    </PageWrapper>
  )
}