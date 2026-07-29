import type { Metadata } from "next";
import LegalPage from "@/components/site/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | BioRegenEx",
  description: "The terms that govern your use of the BioRegenEx website.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="July 29, 2026">
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your use of this website
        operated by {site.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        By accessing this site or submitting the consultation form, you agree to
        these Terms. If you do not agree, please do not use the site.
      </p>

      <h2>No medical advice</h2>
      <p>
        The content on this website is provided for informational and educational
        purposes only and is <strong>not medical advice</strong>. Nothing here is
        intended to diagnose, treat, cure, or prevent any disease. MSC-derived
        exosomes are investigational and not FDA-approved for medical treatment.
        Always seek the advice of a qualified, licensed healthcare provider with any
        questions about a medical condition. Never disregard professional medical
        advice or delay seeking it because of something you read here.
      </p>

      <h2>The consultation</h2>
      <p>
        Submitting the form requests a free, no-obligation consultation. It does not
        create a provider-patient relationship, guarantee that any treatment is
        appropriate for you, or guarantee any particular outcome. All treatment
        decisions are made solely by licensed providers. Any results discussed are
        individual experiences and are not typical or guaranteed.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old and able to enter into a binding agreement
        to use this site and submit the form. By submitting, you confirm the
        information you provide is accurate and belongs to you.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Submit false, misleading, or another person&apos;s information</li>
        <li>Use the site for any unlawful or fraudulent purpose</li>
        <li>
          Attempt to disrupt, damage, or gain unauthorized access to the site or its
          systems
        </li>
        <li>Copy, scrape, or reproduce site content without permission</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        All content on this site — including text, graphics, logos, images, and video
        — is owned by or licensed to {site.name} and is protected by applicable laws.
        You may not use it without our prior written permission.
      </p>

      <h2>Third-party links and services</h2>
      <p>
        The site may link to or rely on third-party websites and services. We are not
        responsible for the content, policies, or practices of any third party.
      </p>

      <h2>Disclaimers and limitation of liability</h2>
      <p>
        The site is provided &quot;as is&quot; and &quot;as available&quot; without
        warranties of any kind, express or implied. To the fullest extent permitted
        by law, {site.name} is not liable for any indirect, incidental, or
        consequential damages arising from your use of the site or reliance on its
        content.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Changes take effect when posted
        on this page, and the &quot;Last updated&quot; date above will reflect the
        most recent revision. Your continued use of the site means you accept the
        updated Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms? Call us at{" "}
        <a href={site.phoneHref}>{site.phoneDisplay}</a> or visit{" "}
        <a href={site.links.home} target="_blank" rel="noopener">
          {site.domain}
        </a>
        .
      </p>
    </LegalPage>
  );
}
