import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | BioRegenEx",
  description: "How BioRegenEx collects, uses, and protects the information you share.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 29, 2026">
      <p>
        This Privacy Policy explains how {site.name} (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;) collects, uses, and shares information when you visit this
        website or submit our consultation request form. By using this site or
        submitting the form, you agree to the practices described here.
      </p>

      <h2>Information we collect</h2>
      <p>When you submit the consultation form, we collect the details you provide:</p>
      <ul>
        <li>Your name</li>
        <li>Your phone number</li>
        <li>Your email address (optional)</li>
        <li>Your state of residence</li>
        <li>The health interest or concern you select</li>
      </ul>
      <p>
        We also automatically collect standard technical information such as your IP
        address, browser type, device information, referring page, and how you
        interact with the site, through cookies and similar technologies.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To contact you about the free consultation you requested</li>
        <li>To connect you with a licensed provider</li>
        <li>To respond to your questions and follow up with you</li>
        <li>To measure and improve our website and advertising</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Cookies and advertising technologies</h2>
      <p>
        We use analytics and advertising tools — which may include Google Analytics,
        Google Tag Manager, and the Meta (Facebook) Pixel — to understand site
        traffic and measure the performance of our advertising. These tools may set
        cookies and collect usage data. You can control cookies through your browser
        settings. This site is intended for a general audience and is not directed to
        children under 13.
      </p>

      <h2>How we share your information</h2>
      <p>We do not sell your personal information. We share it only:</p>
      <ul>
        <li>
          With licensed providers and our customer-relationship / scheduling service
          providers so they can contact you about your request
        </li>
        <li>
          With service vendors who help us operate the site, hosting, analytics, and
          advertising (acting on our behalf)
        </li>
        <li>When required by law, or to protect our legal rights</li>
      </ul>

      <h2>Text messaging and calls</h2>
      <p>
        By submitting the form, you consent to be contacted by phone, text message,
        and/or email at the number and address you provide, including through
        automated technology, regarding your consultation request. Consent is not a
        condition of any purchase. Message and data rates may apply, and you can opt
        out at any time by replying STOP to a text or asking us to remove you.
      </p>

      <h2>Data retention and security</h2>
      <p>
        We keep your information only as long as needed for the purposes described
        above or as required by law, and we use reasonable safeguards to protect it.
        No method of transmission or storage is completely secure, however, and we
        cannot guarantee absolute security.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        Depending on where you live, you may have the right to access, correct, or
        delete your personal information, or to opt out of certain uses. To make a
        request, contact us using the information below.
      </p>

      <h2>Medical disclaimer</h2>
      <p>
        This website is for informational and educational purposes only and does not
        provide medical advice. MSC-derived exosomes are investigational and not
        FDA-approved to diagnose, treat, cure, or prevent any disease. Treatment
        decisions are made solely in consultation with a qualified, licensed
        healthcare provider.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes take effect when
        posted on this page, and the &quot;Last updated&quot; date above will reflect
        the most recent revision.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about this policy? Call us at{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a> or visit{" "}
        <a href={site.links.home} target="_blank" rel="noopener">
          {site.domain}
        </a>
        .
      </p>
    </LegalPage>
  );
}
