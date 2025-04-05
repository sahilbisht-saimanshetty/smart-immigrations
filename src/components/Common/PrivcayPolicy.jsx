import React from "react";

const PrivacyPolicy = () => {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto px-4 flex flex-col justify-start py-10 text-gray-800 text-left">
      <h1 className="text-3xl font-bold mb-6 text-center font-jakarta-sans">Privacy Policy</h1>
      <p className="text-sm mb-8 text-gray-500 text-left font-dm-sans">Effective Date: 5 April , 2025</p>

      <div className="space-y-6 text-left">
        <div>
          <p className="font-dm-sans text-justify">
            At <strong>SmartImmigrant.com</strong>, your privacy and trust are paramount. We're dedicated to
            safeguarding your personal information and maintaining transparency about how your data is collected,
            used, and protected. This Privacy Policy outlines our practices clearly, ensuring you can make informed
            decisions about your privacy.
          </p>
          <p className="text-left font-dm-sans">By accessing or using our website and services, you acknowledge and agree to this Privacy Policy.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">1. Information We Collect</h2>
          <p className="text-left font-dm-sans">We collect information to effectively provide our services and continuously enhance your user experience. The types of information collected include:</p>
          <p className="text-left font-dm-sans font-semibold mt-2">Personal Information:</p>
          <ul className="list-disc ml-6 space-y-1 text-left font-dm-sans">
            <li>Full name</li>
            <li>Email address</li>
            <li>Telephone number</li>
            <li>Postal address (if provided)</li>
            <li>Account credentials (username/password)</li>
            <li>Profile details (e.g., nationality, immigration status, employment history)</li>
            <li>Uploaded identification and legal documents</li>
            <li>Payment details, if applicable (securely handled through third-party payment processors)</li>
          </ul>
          <p className="text-left font-dm-sans font-semibold mt-2">Usage Data:</p>
          <ul className="list-disc ml-6 space-y-1 text-left font-dm-sans">
            <li>IP addresses and approximate geographic location</li>
            <li>Device information (device type, operating system, unique device identifiers)</li>
            <li>Browser type and version</li>
            <li>Time and duration of visits</li>
            <li>Pages viewed and interactions within the website</li>
            <li>Referral sources (how you found us)</li>
          </ul>
          <p className="text-left font-dm-sans font-semibold mt-2">Cookies and Tracking Technologies:</p>
          <p className="text-left font-dm-sans">Cookies, web beacons, and similar technologies are used to improve your browsing experience, remember your preferences, measure site performance, and provide tailored content.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">2. How We Use Your Information</h2>
          <p className="text-left font-dm-sans">We use your personal and usage information responsibly to:</p>
          <ul className="list-disc ml-6 space-y-1 text-left font-dm-sans">
            <li><strong>Deliver and Enhance Services:</strong> Fulfill requests, process registrations, verify your identity, and offer personalized support.</li>
            <li><strong>Improve User Experience:</strong> Analyze interactions, identify user trends, improve site performance, and enhance features based on your feedback.</li>
            <li><strong>Communicate Effectively:</strong> Send important notices, updates, newsletters (with your consent), technical support messages, and respond promptly to inquiries.</li>
            <li><strong>Secure Our Platform:</strong> Prevent fraud, unauthorized access, and misuse; enforce our terms; and maintain the integrity and security of our services.</li>
            <li><strong>Comply with Laws:</strong> Meet our legal obligations, regulatory requirements, or respond to legal requests as needed.</li>
          </ul>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">3. Information Sharing and Disclosure</h2>
          <p className="text-left font-dm-sans">We prioritize your privacy and never sell your personal information. Information sharing is limited to:</p>
          <ul className="list-disc ml-6 space-y-1 text-left font-dm-sans">
            <li><strong>Trusted Service Providers:</strong> Third parties who support operations, including secure cloud storage, analytics providers, identity verification services, and technical support providers. All third parties are vetted and bound by confidentiality agreements.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if legally required, such as responding to court orders, legal claims, or lawful requests by public authorities.</li>
            <li><strong>Protecting Rights:</strong> To enforce agreements, investigate violations, protect the rights, safety, or property of SmartImmigrant.com, our users, or others.</li>
            <li><strong>Consent-based Disclosure:</strong> Sharing your information in circumstances where you explicitly consent, such as providing details to a third-party advisor or service provider upon your direct request.</li>
          </ul>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">4. Data Security</h2>
          <p className="text-left font-dm-sans">SmartImmigrant.com employs robust security practices to protect your personal information against unauthorized access, misuse, alteration, or destruction. Our measures include:</p>
          <ul className="list-disc ml-6 space-y-1 text-left font-dm-sans">
            <li>Encryption of sensitive information during transmission (SSL/TLS)</li>
            <li>Secure storage with restricted access</li>
            <li>Regular security assessments and audits</li>
            <li>Employee training on data protection best practices</li>
          </ul>
          <p className="text-left font-dm-sans mt-2">Despite rigorous measures, no digital platform is entirely free from risk. You play a role in protecting your information by using strong, unique passwords and maintaining vigilance regarding your account activities.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">5. Your Privacy Rights</h2>
          <p className="text-left font-dm-sans">You have control over your personal data. Depending on applicable laws (e.g., GDPR, CCPA), your rights may include:</p>
          <ul className="list-disc ml-6 space-y-1 text-left font-dm-sans">
            <li><strong>Access:</strong> Obtain details about the information we hold about you.</li>
            <li><strong>Correction:</strong> Request corrections or updates to inaccurate or outdated information.</li>
            <li><strong>Deletion:</strong> Request removal of your personal data, subject to legal or legitimate business needs.</li>
            <li><strong>Data Portability:</strong> Request a copy of your data in a commonly used format.</li>
            <li><strong>Withdrawal of Consent:</strong> Revoke consent for processing your data at any time.</li>
            <li><strong>Restriction and Objection:</strong> Limit or object to specific data uses, including direct marketing.</li>
          </ul>
          <p className="text-left font-dm-sans mt-2">To exercise these rights, contact us at <a href="mailto:privacy@smartimmigrant.com" className="text-blue-600 underline">privacy@smartimmigrant.com</a>. We respond promptly and in compliance with applicable regulations.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">6. Data Retention</h2>
          <p className="text-left font-dm-sans">We retain your information only as long as necessary to fulfill the purposes outlined in this policy or as required by law. Specific retention periods depend on:</p>
          <ul className="list-disc ml-6 space-y-1 text-left font-dm-sans">
            <li>Duration of your account's activity</li>
            <li>Necessity for service provision or support</li>
            <li>Legal obligations or compliance needs</li>
          </ul>
          <p className="text-left font-dm-sans mt-2">Upon request for account deletion, we remove your personal information promptly, unless legally required otherwise.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">7. Third-Party Websites and Services</h2>
          <p className="text-left font-dm-sans">Our website may link to third-party platforms, such as immigration agencies, financial institutions, or other resources. We neither control nor assume responsibility for the privacy practices, security, or content of external sites. Always review third-party privacy policies before engaging with their platforms.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">8. Children's Privacy</h2>
          <p className="text-left font-dm-sans ">Our services are intended for users aged <strong>16 and above</strong>. We do <strong>not knowingly collect or process personal information from minors under 16</strong> . If we discover we've unintentionally collected such data, we will swiftly delete it. If you believe we may have information from a minor, please contact us immediately at <strong>privacy@smartimmigrant.com</strong>.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">9. Changes to This Privacy Policy</h2>
          <p className="text-left font-dm-sans">We periodically review and update this Privacy Policy to reflect changes in law, services, or user feedback. We will inform you of any substantial changes through notifications on our website or by direct communication (email).</p>
          <p className="text-left font-dm-sans">We recommend reviewing this policy periodically to stay informed.</p>
          <p className="text-left font-dm-sans"><strong>Last updated: 5 April , 2025</strong></p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mt-6 mb-2 text-left font-jakarta-sans">10. Contact Information</h2>
          <p className="text-left font-dm-sans">
            Your questions, feedback, and concerns are important. For any inquiries regarding your privacy or this Privacy Policy, please contact us at:
          </p>
          <p className="text-left font-dm-sans mt-2">
            <strong>SmartImmigrant.com</strong><br />
            Email: <a href="mailto:privacy@smartimmigrant.com" className="text-blue-600 underline">privacy@smartimmigrant.com</a><br />
            Website: <a href="https://www.smartimmigrant.com/uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.smartimmigrant.com/uk</a><br />
            Address: <span className="font-semibold">Chapman Road 254 ,Newark , Delaware , USA 19702</span> 
          </p>
          <p className="text-left font-dm-sans mt-4">Thank you for trusting SmartImmigrant.com. We're committed to upholding the highest standards for your privacy and data security.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;