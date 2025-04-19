import React from "react";
import { PrivacyTable } from "./PrivacyTable";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const PrivacyPolicy = () => {
  const EffectiveDates = ({ effectiveDate, lastReviewed }) => (
    <div className="title text-[#323232] text-left font-medium text-[20px] leading-[150%]">
      <p>Effective Date: {effectiveDate}</p>
      <p>Last Reviewed: {lastReviewed}</p>
    </div>
  );

  const SectionHeading = ({ children }) => (
    <div className="font-jakarta-sans font-medium text-[20px] leading-[150%] text-[#323232] mt-10 mb-2">
      {children}
    </div>
  );

  const Paragraph = ({ children }) => <p className="mb-4">{children}</p>;

  const ListItem = ({ children }) => <p className="mb-2">{children}</p>;

  const BulletList = ({ items }) => (
    <ul className="list-disc pl-6 space-y-2 my-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const baseStying =
    "font-dm-sans font-normal text-[18px] leading-[150%] text-[#434343]";

  return (
    <>
      <div className="container  w-[88%] md:w-[65%] mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center font-jakarta-sans">
          Privacy Policy
        </h1>
        <div className="text-justify">
          <EffectiveDates
            effectiveDate="April 1, 2024"
            lastReviewed="April 1, 2024"
          />
          <SectionHeading>1. Introduction.</SectionHeading>
          <div className={`${baseStying} `}>
            <Paragraph>
              Cache Labs LLC (“Company,&quot; &quot;we,&quot; &quot;our,”
              or “us”) respects your privacy and is committed to protecting it
              through our compliance with this policy. This policy may be
              updated from time to time in our sole discretion.
            </Paragraph>
            <Paragraph>
              This policy describes the types of information we may collect from
              you or that you may provide when you visit the website
              smartimmigrant.com (our “Website”) and our practices for
              collecting,using, maintaining, protecting, and disclosing that
              information. This policy applies to information we collect from
              the functionalities and in the manner(s) described in the bullet
              points immediately following this sentence.
            </Paragraph>
            <Paragraph>
              Our services leverage advanced Artificial Intelligence (AI) models
              to deliver personalized experiences, optimize platform
              functionality, and provide intelligent recommendations and
              support. This Privacy Policy outlines how data is collected and
              used in relation to our AI systems.
            </Paragraph>
            <BulletList
              items={[
                "On this Website.",
                "In email, text, and other electronic messages between you and this Website.",
                "Through mobile and desktop applications you download from this Website, which provide dedicated non-browser-based interaction between you and this Website.",
                "When you interact with our advertising and applications on third-party websites and services, if those applications or advertising include links to this policy.",
                "Any other sources.",
              ]}
            />

            <Paragraph>
              It does not apply to information collected by:
            </Paragraph>

            <BulletList
              items={[
                "Us offline or through any other means, including on any other website operated by Company or any third party (including our affiliates and subsidiaries); or",
                "Any third party (including our affiliates and subsidiaries), including through any application or content (including advertising) that may link to or be accessible from or on the Website.",
              ]}
            />

            <Paragraph>
              Please read this document carefully to understand our policies and
              practices regarding your information and how we will treat it. If
              you do not agree with our policies and practices, your choice is
              not to use our Website. By accessing or using this Website, you
              expressly agree to this privacy policy and all of its terms. This
              policy may change from time to time in our sole discretion, with
              or without prior notice to you. Your continued use of this Website
              after we make changes constitutes your binding acceptance of those
              changes. You are responsible for periodically checking this policy
              for updates.
            </Paragraph>
          </div>
          <SectionHeading>2. Children Under the Age of 18.</SectionHeading>
          <div className={`${baseStying}`}>
            <Paragraph>
              Our Website is not intended for children under 18 years of age. No
              one under age 18 may provide any personal information to or on the
              Website. We do not knowingly collect personal information from
              children under 18. If you are under 18, do not use or provide any
              information on this Website or through any of its features,
              register on the Website, make any purchases through the Website,
              use any of the interactive or public comment features of this
              Website, or provide any information about yourself to us,
              including your name, address, telephone number, email address, or
              any screen name or user name you may use.
            </Paragraph>

            <Paragraph>
              If we learn we have collected or received personal information
              from a child under 18 without verification of parental consent, we
              will delete that information. If you believe we might have any
              information from or about a child under 18, please contact us at
              our Website.
            </Paragraph>

            <Paragraph>
              California residents under 16 years of age may have additional
              rights regarding the collection and sale of their personal
              information. Please see “Your California Privacy Rights” for more
              information.
            </Paragraph>

            <SectionHeading>
              3. Information We Collect About You and How We Collect It.
            </SectionHeading>

            <Paragraph>
              We collect several types of information from and about users of
              our Website, including information:
            </Paragraph>

            <BulletList
              items={[
                "By which you may be personally identified, such as name, postal address, e-mail address, telephone number, social security number or other similar information (“personal information”);",
                "That is about you but individually does not identify you; and",
                "About your internet connection, the equipment you use to access our Website, and usage details.",
              ]}
            />
            <Paragraph>We collect this information:</Paragraph>

            <BulletList
              items={[
                "Directly from you when you provide it to us;",
                "Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons, and other tracking technologies; and",
                "From third parties, for example, our business partners.",
              ]}
            />
            <Paragraph>
              Some of the information we collect may be processed by AI
              technologies to help provide personalized recommendations,
              automate user workflows, enhance security monitoring, and support
              decision-making features on the platform.
            </Paragraph>

            <SectionHeading>4. Information You Provide to Us.</SectionHeading>

            <Paragraph>
              The information we collect on or through our Website may include
              the information enumerated in the bullet points immediately
              following this sentence.
            </Paragraph>

            <BulletList
              items={[
                "Information that you provide by filling in forms on our Website. This includes information provided at the time of registering to use our Website, subscribing to our service, posting material, or requesting further services. We may also ask you for information when you enter a contest or promotion sponsored by us, and when you report a problem with our Website.",
                "Records and copies of your correspondence (including email addresses), if you contact us.",
                "Your responses to surveys that we might ask you to complete for research purposes.",
                "Details of transactions you carry out through our Website and of the fulfillment of your orders. You may be required to provide financial information before placing an order through our Website.",
                "Your search queries on the Website.",
              ]}
            />

            <Paragraph>
              You also may provide information to be published or displayed
              (hereinafter, “posted”) on public areas of the Website, or
              transmitted to other users of the Website or third parties
              (collectively, “User Contributions”). Your User Contributions are
              posted on and transmitted to others at your own risk. Although we
              limit access to certain pages, please be aware that no security
              measures are perfect or impenetrable. Additionally, we cannot
              control the actions of other users of the Website with whom you
              may choose to share your User Contributions. Therefore, we cannot
              and do not guarantee that your User Contributions will not be
              viewed by unauthorized persons.
            </Paragraph>

            <Paragraph>
              Additionally, by using our Website and posting or transmitting any
              User Contributions, you expressly agree that you will not enter
              User Contributions containing information that reveals personally
              identifying, financial, medical or other confidential information
              about any person other than yourself, nor will you create any User
              Contributions containing any image or likeness of any person other
              than yourself (such prohibited User Contributions, collectively,
              “Prohibited 3rd Party UC”). You represent and warrant to us that
              none of your User Contributions is, contains or embodies
              Prohibited 3rd Party UC and you further agree that we may, in our
              sole subjective discretion, remove any of your User Contributions
              from our site if we believe or have been advised that any
              Prohibited 3rd Party UC is contained in such User Contributions
              without investigation on our part and without notice to you of any
              sort. The foregoing restrictions are intended to help us ensure
              that our Website does not inadvertently collect any information
              related to persons other than you.
            </Paragraph>

            <SectionHeading>
              5. Information We Collect Through Automatic Data Collection
              Technologies.
            </SectionHeading>

            <Paragraph>
              As you navigate through and interact with our Website, we may use
              automatic data collection technologies to collect certain
              information about your equipment, browsing actions, and patterns,
              including:
            </Paragraph>

            <BulletList
              items={[
                "Details of your visits to our Website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the Website; and",
                "Information about your computer and internet connection, including your IP address, operating system, and browser type.",
              ]}
            />

            <Paragraph>
              We also may use these technologies to collect information about
              your online activities over time and across third-party websites
              or other online services (behavioral tracking). Please see our
              Website for information on how you can opt-out of behavioral
              tracking on this website and how we respond to web browser signals
              and other mechanisms that enable consumers to exercise choice
              about behavioral tracking.
            </Paragraph>

            <Paragraph>
              The information we collect automatically includes personal
              information; we may maintain it or associate it with personal
              information we collect in other ways or receive from third
              parties. It helps us to improve our Website and to deliver better
              and more personalized service, including by enabling us to:
            </Paragraph>

            <BulletList
              items={[
                "Estimate our audience size and usage patterns;",
                "Store information about your preferences, allowing us to customize our Website according to your individual interests;",
                "Speed up your searches;",
                "Recognize you when you return to our Website.",
              ]}
            />

            <Paragraph>
              The technologies we use for this automatic data collection, from
              time to time, may include those technologies enumerated in the
              bullet points immediately following this sentence.
            </Paragraph>

            <BulletList
              items={[
                "Cookies (or browser cookies). A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website.",
                "Flash Cookies. Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from, and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies. For information about managing your privacy and security settings for Flash cookies, see Choices About How We Use and Disclose Your Information.",
                "Web Beacons. Pages of our Website may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).",
                "Google Analytics. Our website uses a tool called Google Analytics, which collects user information regarding the activities that users engage in while on the website. Google Analytics collects information such as how often users visit this site, what pages they visit when they do so, and what other sites they used prior to coming to this site. We use the information we get from Google Analytics to improve this site and our outreach efforts. Google Analytics collects only the IP address assigned to you on the date you visit this site, rather than your name or other identifying information. Although Google Analytics plants a permanent cookie on your web browser to identify you as a unique user the next time you visit this site, the cookie cannot be used by anyone but Google. Google’s ability to use and share information collected by Google Analytics about your visits to this site is restricted by the Google Analytics Terms of Use and the Google Privacy Policy. You can prevent Google Analytics from recognizing you on return visits to this site by disabling cookies on your browser.",
                "Google Ads & Remarketing. We use Google Ads to serve you more relevant advertisements based on your past visits to this site. You may opt-out of Google’s use of cookies by visiting Google’s Ads Settings page.",
                "Facebook Tracking Pixel. This tool allows us to gather information about your activity after you are redirected to the website after clicking on an advertisement on Facebook.",
                "Embedded Scripts. An embedded script is programming code designed to collect information about your interactions with the website, such as the links you click on.",
              ]}
            />

            <Paragraph>
              We do not collect personal information automatically, but we may
              tie this information to personal information about you that we
              collect from other sources or that you provide to us.
            </Paragraph>

            <SectionHeading>
              6. Third-Party Use of Cookies and Other Tracking Technologies.
            </SectionHeading>

            <Paragraph>
              Some content or applications, including advertisements, on the
              Website are served by third-parties, including advertisers, ad
              networks and servers, content providers, and application
              providers. These third parties may use cookies alone or in
              conjunction with web beacons or other tracking technologies to
              collect information about you when you use our website. The
              information they collect may be associated with your personal
              information or they may collect information, including personal
              information, about your online activities over time and across
              different websites and other online services. They may use this
              information to provide you with interest-based (behavioral)
              advertising or other targeted content
            </Paragraph>

            <Paragraph>
              We do not control these third parties’ tracking technologies or
              how they may be used. If you have any questions about an
              advertisement or other targeted content, you should contact the
              responsible provider directly.For information about how you can
              opt-out of receiving targeted advertising from many providers, see
              “Choices About How We Use and Disclose Your Information”.
            </Paragraph>

            <SectionHeading>7. How We Use Your Information.</SectionHeading>
            <Paragraph>
              We use information that we collect about you or that you provide
              to us, including any personal information:
            </Paragraph>

            <BulletList
              items={[
                "to present our Website and its contents to you;",
                "to provide you with information, products, or services that you request from us;",
                "to fulfill any other purpose for which you provide it;",
                "to communicate with you about your order, purchase, account, or subscription;",
                "to carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection;",
                "to notify you about important changes to our Website or any products or services we offer or provide through it;",
                "to operate, maintain, improve, personalize, and analyze the products or services we offer or provide;",
                "to monitor and analyze trends, usage, and activities for marketing or advertising purposes;",
                "to detect, prevent, or investigate security breaches, fraud, and other unauthorized or illegal activity;",
                "to allow you to participate in interactive features on our Website;",
                "to send promotional communications, such as information about features, newsletters, offers, promotions, contests, and events;",
                "to share information across the Company’s products and devices to provide a more tailored and consistent experience on all Company products you use;",
                "to develop, test and improve new products or services, including by conducting surveys and research, and testing and troubleshooting new products and features;",
                "to train, improve, and refine our AI models and algorithms, while maintaining compliance with data privacy laws and applying de-identification or aggregation techniques where appropriate.",
                "in any other way, we may describe when you provide the information;",
                "for any other purpose with your consent.",
              ]}
            />

            <Paragraph>
              We may also use your information to contact you about our own and
              third-parties’ goods and services that may be of interest to you.
              For more information, see Choices About How We Use and Disclose
              Your Information.
            </Paragraph>

            <Paragraph>
              We may use the information we have collected from you to enable us
              to display advertisements to our advertisers’ target audiences.
              Even though we do not disclose your personal information for these
              purposes without your consent, if you click on or otherwise
              interact with an advertisement, the advertiser may assume that you
              meet its target criteria.
            </Paragraph>

            <Paragraph>
              While we do not currently sell, rent or lease our customer lists
              to third parties, we reserve the right to do so in the future upon
              notice to you through an update to this policy.
            </Paragraph>

            <SectionHeading>8. Disclosure of Your Information.</SectionHeading>

            <Paragraph>
              We may disclose aggregated or anonymized information about our
              users without any restrictions. We will not share your personal
              information that we collect, or that you provide as described in
              this Policy, except in the circumstances specified in the bullet
              points immediately following this sentence.
            </Paragraph>

            <BulletList
              items={[
                "With subsidiaries and affiliates for business purposes. To our subsidiaries and affiliated companies for purposes of management and analysis, decision-making, and other business purposes.",
                "When we work with service providers. To service providers, contractors, and other third parties that provide us with support services, such as credit card processing, website hosting, email and postal delivery, location mapping, product and service delivery, or analytics services, and who are bound by contractual obligations to keep personal information confidential and use it only for the purposes for which we disclose it to them.",
                "When we become involved in a sale or transfer of the Company. If we become involved with a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company’s assets (whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding), to business entities or people involved in the negotiation or transfer.",
                "When we are required by law. To comply with any court order, law, or legal process, including to respond to any government or regulatory request.",
                "When we enforce our rights. To enforce or apply this Policy, our Terms of Use, and other agreements, including for billing and collection purposes.",
                "To help protect lawful interests. If we believe disclosure will help us protect the rights, property, or safety of the Company, our users, partners, agents, and others. This includes exchanging information with other companies and organizations for fraud protection, and spam and malware prevention.",
                "To fulfill the purpose for that information or with your consent. To fulfill the purpose for which you provide the information, for any other purpose disclosed by us when you provide the information, or with your consent.",
                "When we work with marketing service providers. To marketing service providers to assess, develop, and provide you with promotions and special offers that may interest you, administer contests, sweepstakes, and events, or for other promotional purposes.",
                "When we work with business partners. To third parties whom we have strategic marketing alliances or partnerships with for the purpose of providing you information regarding products and services that we think will be of interest to you.",
                "Any other types of third-party disclosures.",
              ]}
            />

            <Paragraph>
              Information, including without limitation User Contributions, that
              you post on or through the public areas of the Services (e.g.,
              chat rooms, bulletin boards, and discussion groups) are generally
              accessible to, and may be collected and used by, others and may
              result in unsolicited messages or other contact from others. Users
              of the Services are encouraged to exercise caution when providing
              personal information about themselves in public or interactive
              areas.
            </Paragraph>

            {/* form 9th point 2nd heading ------------------ */}

            <SectionHeading>
              9. Choices About How We Use and Disclose Your Information.
            </SectionHeading>
            <Paragraph>
              We strive to provide you with choices regarding the personal
              information you provide to us. We have created mechanisms to
              provide you with control over your information as detailed in the
              bullet points immediately following this sentence.
            </Paragraph>

            <BulletList
              items={[
                "Cookies & Other Tracking Technologies. You may be able to set your browser to reject cookies and certain other technologies by adjusting the appropriate settings in your browser. Each browser is different, but many common browsers have preferences that may be adjusted to allow you to either accept or reject cookies and certain other technologies before they are set or installed, or that allow you to remove or reject the use or installation of certain technologies altogether. We recommend that you refer to the “Help” menu in your browser to learn how to modify your browser settings. Please note that you cannot remove Flash cookies simply by changing your browser settings. To learn how you can manage your Flash cookie settings, visit the Flash player settings page on Adobe’s website. If you disable or refuse cookies, please note that some parts of the Services may become inaccessible or may not function properly.",

                "Promotional Communications from the Company. If you do not wish to have your contact information used by the Company to promote our own or third-party products or services, you can opt-out by: (i) informing us of your preference at the time you register for an account; complete an order form, sign up for our newsletter, or complete any other form on or through the Services which we collect your data; (ii) modifying your user preferences in your account profile by checking or unchecking the relevant boxes; (iii) following the opt-out instructions in the promotional emails we send you; or (iv) sending us an email stating your request. Please note that if you opt-out of receiving promotional communications from us, we may still send you transactional communications, including emails about your account or purchases.",

                "Disclosure of Your Information for Third-Party Advertising. If you do not want us to share your personal information with unaffiliated or non-agent third parties for promotional purposes, you can opt-out by: (i) informing us of your preference at the time you register for an account, complete an order form, sign up for our newsletter, or complete any other form on or through the Services which we collect your data; (ii) modifying your user preferences in your account profile by checking or unchecking the relevant boxes; (iii) following the opt-out instructions in the promotional emails we send you; or (iv) sending us an email stating your request.",

                "Targeted Advertising. If you do not want us to use information that we collect or that you provide to us to deliver advertisements according to our advertisers’ target-audience preferences, you can opt-out by modifying your user preferences in your account profile by checking or unchecking the relevant boxes or sending us an email stating your request. We do not control third parties’ collection or use of your information to serve interest-based advertising. However, these third parties may provide you with ways to choose not to have your information collected or used in this way. Many advertising companies that collect information for interest-based advertising are members of the Digital Advertising Alliance or the Network Advertising Initiative, both of which maintain websites where people can opt-out of interest-based advertising from their members. To opt-out on these pages, visit www.AboutAds.info and www.networkadvertising.org.",

                "Location Information. You may be able to adjust the settings of your device so that information about your physical location is not sent to us or third parties by: (a) disabling location services within the device settings; or (b) denying certain websites or mobile applications permission to access location information by changing the relevant preferences and permissions in your mobile device or browser settings. Please note that your location may be derived from your WiFi, Bluetooth, and other device settings. If you have questions about how to disable your device’s location services, we recommend you contact your mobile service carrier or your device manufacturer.",

                "Voice Transmissions. You may be able to adjust the settings of your device so that your voice transmissions cannot be sent to us or third parties by: (a) disabling microphone and speech recognition services within the device settings; or (b) denying certain websites or mobile applications permission to access microphone and speech recognition services by changing the relevant preferences and permissions in your mobile device or browser settings.",
              ]}
            />

            <Paragraph>
              We do not control third parties’ collection or use of your
              information to serve interest-based advertising. However, these
              third parties may provide you with ways to choose not to have your
              information collected or used in this way. You can opt-out of
              receiving targeted ads from members of the Network Advertising
              Initiative (“NAI”) on the NAI’s website.
            </Paragraph>

            <Paragraph>
              California residents may have additional personal information
              rights and choices. Please see “Your California Privacy Rights”
              for more information.
            </Paragraph>

            <Paragraph>10. Your California Privacy Rights.</Paragraph>
            <Paragraph>
              Under California Civil Code sections 1798.83-1798.84, California
              residents are entitled to ask us for a notice identifying the
              categories of personal customer information which we share with
              our affiliates and third parties for marketing purposes and
              providing contact information for such affiliates and third
              parties. If you are a California resident and would like a copy of
              this notice, please submit a written request to the following
              address: Cache Labs LLC, 254 Chapman Rd, STE 208 #13876, Newark,
              Delaware 19702, United States of America. We will make every
              effort to promptly respond to your request. If you are a
              California resident, California law may provide you with
              additional rights regarding our use of your personal information.
              To learn more about your California privacy rights, please review
              our “CCPA Privacy Notice for California Residents”.
            </Paragraph>

            <SectionHeading>
              11. Transfer of Information to the United States.
            </SectionHeading>
            <Paragraph>
              Our site is operated in the United States and intended for users
              located in the United States. If you are located outside of the
              United States, please be aware that information we collect,
              including Personal Information, will be transferred to, processed,
              stored and used in the United States. The data protection laws in
              the United States may differ from, and may be less protective of
              your Personal Information than, those of your country of
              residence. Your Personal Information may be subject to access
              requests from governments, courts, or law enforcement in the
              United States according to applicable laws. We will only share
              your Personal Information with third parties as described in this
              Privacy Policy and in accordance with applicable data protection
              laws. By using our site or providing us with any information, you
              consent to the transfer to, and processing, usage, sharing and
              storage of your information, including Personal Information, in
              the United States as set forth in this Privacy Policy.
            </Paragraph>

            <SectionHeading>12. Data Security.</SectionHeading>
            <Paragraph>
              We take industry-standard technical, administrative, and physical
              security measures to protect your personal information. These
              measures include encryption, firewalls, secure storage, access
              controls, and regular security assessments to secure your personal
              information from accidental loss and from unauthorized access,
              use, alteration, and disclosure. The safety and security of your
              information also depend on you. Where we have given you (or where
              you have chosen) a password for access to certain parts of our
              Website, you are responsible for keeping this password
              confidential. We ask you not to share your password with anyone.
              We urge you to be careful about giving out information in User
              Contributions and in public areas of the Website like message
              boards. The information you share in public areas may be viewed by
              any user of the Website. Unfortunately, the transmission of
              information via the internet is not completely secure. Although we
              do our best to protect your personal information, we cannot
              guarantee the security of your personal information transmitted to
              our Website. Any transmission of personal information is at your
              own risk. We are not responsible for circumvention of any privacy
              settings or security measures contained on the Website.
            </Paragraph>

            <SectionHeading>13. Changes to Our Privacy Policy.</SectionHeading>
            <Paragraph>
              It is our policy to post any changes we make to our privacy policy
              on this page with a notice that the privacy policy has been
              updated on the Website home page. If we make material changes to
              how we treat our users’ personal information, we will notify you
              by email to the primary email address specified in your account or
              through a notice on the Website home page. The date the privacy
              policy was last revised is identified at the top of the page. You
              are responsible for ensuring we have an up-to-date active and
              deliverable email address for you, and for periodically visiting
              our Website and this privacy policy to check for any changes.
            </Paragraph>

            <SectionHeading>14. Terms of Use.</SectionHeading>
            <Paragraph>
              If you choose to visit the Services, your visit and any dispute
              over privacy is subject to this Policy and our Terms of Use,
              including limitations on damages, resolution of disputes, and
              application of the governing law.
            </Paragraph>

            <SectionHeading>
              15. Automated Decision Making and AI Profiling.
            </SectionHeading>
            <Paragraph>
              We use AI technologies, including automated decision-making
              systems, to improve our services and enhance user experience. This
              may include:
            </Paragraph>
            <BulletList
              items={[
                "Content and recommendation personalization.",
                "Risk assessment for account security.",
                "Natural language processing for support interactions.",
                "Automated categorization or scoring of data inputs.",
              ]}
            />

            <SectionHeading>16. Contact Information.</SectionHeading>
            <Paragraph>
              To ask questions or comment about this privacy policy and our
              privacy practices, contact us at
            </Paragraph>
            <ListItem>Email: Connectuk@smartimmigrant.com</ListItem>
            <ListItem>
              Address: Cache Labs LLC, 254 Chapman Rd, STE 208 #13876, Newark,
              Delaware 19702, United States of America.{" "}
            </ListItem>
            <ListItem>Phone: +1 (408) 430-2007.</ListItem>
          </div>

          <div className="w-full text-center">
            <SectionHeading>
              CCPA Privacy Notice for California Residents
            </SectionHeading>
          </div>
          <div className="my-6">
            <EffectiveDates
              effectiveDate="January 1, 2025"
              lastReviewed="January 1, 2025"
            />
          </div>

          <div className={`${baseStying}`}>
            <Paragraph>
              This Privacy Notice for California Residents supplements the
              information contained in Cache Labs LLC’s Privacy Policy (see
              above) and applies solely to all visitors, users, and others who
              reside in the State of California (“consumers” or “you”). We adopt
              this notice to comply with the California Consumer Privacy Act of
              2018 (CCPA), as amended, and any terms defined in the CCPA have
              the same meaning when used in this Notice. Where noted in this
              Notice, the CCPA temporarily exempts personal information
              reflecting a written or verbal business-to-business communication
              (“B2B personal information”) from some of its requirements.
            </Paragraph>

            <Paragraph>
              1. Information We Collect. Our Website collects information that
              identifies, relates to, describes, references is reasonably
              capable of being associated with, or could reasonably be linked,
              directly or indirectly, with a particular consumer, household, or
              device (“personal information”). Personal information does not
              include:
            </Paragraph>

            <BulletList
              items={[
                "publicly available information from government records;",
                "deidentified or aggregated consumer information;",
                "information excluded from the CCPA’s scope, like:",
                "health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;",
                "personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FCRA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver’s Privacy Protection Act of 1994.",
              ]}
            />

            <Paragraph>
              In particular, our Website has collected the following categories
              of personal information from its consumers within the last twelve
              (12) months:
            </Paragraph>

            {/* space for Table component -------------------------------------------------------- */}

            <div className="w-full h-fit my-[30px] md:my-[50px] lg:my-[80px] ">
              <PrivacyTable />
            </div>

            {/* ----------------------------------------------------------------------------------- */}

            <Paragraph>
              Our Website obtains the categories of personal information listed
              above from the following categories of sources:
            </Paragraph>

            <BulletList
              items={[
                "directly from you--for example, from forms you complete or products and services you purchase;",
                "indirectly from you--for example, from observing your actions on our Website.",
              ]}
            />

            <Paragraph>
              2. Use of Personal Information. We may use or disclose the
              personal information we collect for one or more of the purposes
              enumerated in bullet points immediately following this sentence.
            </Paragraph>

            <BulletList
              items={[
                "To fulfill or meet the reason for which you provided the information. For example, if you share your name and contact information to request a price quote or ask a question about our products or services, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we will use that information to process your payment and facilitate delivery. We may also save your information to facilitate new product orders or process returns.",
                "To provide, support, personalize, and develop our Website, products, and services.",
                "To create, maintain, customize, and secure your account with us.",
                "To process your requests, purchases, transactions, and payments and prevent transactional fraud.",
                "To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses.",
                "To personalize your Website experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Website, third-party sites, and via email or text message (with your consent, where required by law).",
                "To help maintain the safety, security, and integrity of our Website, products and services, databases and other technology assets, and business.",
                "For testing, research, analysis, and product development, including to develop and improve our Website, products, and services.",
                "To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.",
                "As described to you when collecting your personal information or as otherwise set forth in the CCPA.",
                "To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by us about our Website users is among the assets transferred.",
              ]}
            />

            <Paragraph>
              We will not collect additional categories of personal information
              or use the personal information we collected for materially
              different, unrelated, or incompatible purposes without providing
              you notice.
            </Paragraph>

            <Paragraph>
              3. Sharing Personal Information. We may disclose your personal
              information to a third party for a business purpose. When we
              disclose personal information for a business purpose, we enter a
              contract that describes the purpose and requires the recipient to
              both keep that personal information confidential and not use it
              for any purpose except performing the contract. The CCPA prohibits
              third parties who purchase the personal information we hold from
              reselling it unless you have received explicit notice and an
              opportunity to opt-out of further sales.
            </Paragraph>

            <Paragraph>
              We share your personal information with the following categories
              of third parties:
            </Paragraph>

            <BulletList
              items={[
                "service providers;",
                "marketing agencies;",
                "data aggregators.",
              ]}
            />

            <Paragraph>
              4. Disclosures of Personal Information for a Business Purpose. In
              the preceding twelve (12) months, Company has disclosed personal
              information for business purposes as described in Section 3 of
              this Privacy Notice to the categories of third parties listed
              above.
            </Paragraph>

            <Paragraph>
              5. Sales of Personal Information. In the preceding twelve (12)
              months, Company had not sold personal information.
            </Paragraph>

            <Paragraph>
              6. Your Rights and Choices. The CCPA provides consumers
              (California residents) with specific rights regarding their
              personal information. This section describes your CCPA rights and
              explains how to exercise those rights.
            </Paragraph>

            <Paragraph>
              6.1 Access to Specific Information and Data Portability Rights.
              You have the right to request that we disclose certain information
              to you about our collection and use of your personal information
              over the past 12 months. Once we receive and confirm your
              verifiable consumer request, we will disclose to you the
              information specified in the bullet points immediately following
              this sentence.
            </Paragraph>

            <BulletList
              items={[
                "The categories of personal information we collected about you.",
                "The categories of sources for the personal information we collected about you.",
                "Our business or commercial purpose for collecting or selling that personal information.",
                "The categories of third parties with whom we share that personal information.",
                "The specific pieces of personal information we collected about you (also called a data portability request).",
                "If we sold or disclosed your personal information for a business purpose, we will provide two separate lists disclosing:",
                "sales, identifying the personal information categories that each category of recipient purchased;",
                "disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.",
              ]}
            />

            <Paragraph>
              We do not provide these access and data portability rights for B2B
              personal information.
            </Paragraph>

            <Paragraph>
              6.2 Deletion Request Rights. You have the right to request that we
              delete any of your personal information that we collected from you
              and retained, subject to certain exceptions. Once we receive and
              confirm your verifiable consumer request, we will delete (and
              direct our service providers to delete) your personal information
              from our records, unless an exception applies.
            </Paragraph>

            <Paragraph>
              We may deny your deletion request if retaining the information is
              necessary for us or our service provider(s) to do any of the
              things enumerated in the bullet points immediately following this
              sentence.
            </Paragraph>

            <BulletList
              items={[
                "Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, or otherwise perform our contract with you.",
                "Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.",
                "Debug products to identify and repair errors that impair existing intended functionality.",
                "Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.",
                "Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.), as amended.",
                "Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information’s deletion may likely render impossible or seriously impair the research’s achievement, if you previously provided informed consent.",
                "Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.",
                "Comply with a legal obligation.",
                "Make other internal and lawful uses of that information that are compatible with the context in which you provided it.",
              ]}
            />

            <Paragraph>
              We do not provide these deletion rights for B2B personal
              information.
            </Paragraph>

            <Paragraph>
              6.3 Exercising Access, Data Portability, and Deletion Rights. To
              exercise the access, data portability, and deletion rights
              described above, please submit a verifiable consumer request to us
              by either:
            </Paragraph>

            <BulletList
              items={[
                "Emailing us at Connectuk@smartimmigrant.com",
                "Visiting smartimmigrant.com.",
              ]}
            />

            <Paragraph>
              Only you, or someone legally authorized to act on your behalf, may
              make a verifiable consumer request related to your personal
              information. You may also make a verifiable consumer request on
              behalf of your minor child.
            </Paragraph>

            <Paragraph>
              You may only make a verifiable consumer request for access or data
              portability twice within a 12-month period. The verifiable
              consumer request must:
            </Paragraph>

            <BulletList
              items={[
                "Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative, which may include:",
                "name, contact information, and information related to your transaction or relationship with the Company, but the specific information requested may differ depending on the circumstances of your request for your security and to protect privacy rights;",
                "Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.",
              ]}
            />

            <Paragraph>
              We cannot respond to your request or provide you with personal
              information if we cannot verify your identity or authority to make
              the request and confirm the personal information relates to you.
            </Paragraph>

            <Paragraph>
              Making a verifiable consumer request does not require you to
              create an account with us. However, we do consider requests made
              through your password-protected account sufficiently verified when
              the request relates to personal information associated with that
              specific account.
            </Paragraph>

            <Paragraph>
              We will only use the personal information provided in a verifiable
              consumer request to verify the requestor’s identity or authority
              to make the request.
            </Paragraph>

            <Paragraph>
              6.4 Response Timing and Format. We endeavor to respond to a
              verifiable consumer request within forty-five (45) days of its
              receipt. If we require more time (up to 45 days), we will inform
              you of the reason and extension period in writing.
            </Paragraph>

            <Paragraph>
              If you have an account with us, we will deliver our written
              response to that account. If you do not have an account with us,
              we will deliver our written response by mail or electronically, at
              your option.
            </Paragraph>

            <Paragraph>
              Any disclosures we provide will only cover the 12-month period
              preceding the verifiable consumer request’s receipt. The response
              we provide will also explain the reasons we cannot comply with a
              request, if applicable. For data portability requests, we will
              select a format to provide your personal information that is
              readily useable and should allow you to transmit the information
              from one entity to another entity without hindrance.
            </Paragraph>

            <Paragraph>
              We do not charge a fee to process or respond to your verifiable
              consumer request unless it is excessive, repetitive, or manifestly
              unfounded. If we determine that the request warrants a fee, we
              will tell you why we made that decision and provide you with a
              cost estimate before completing your request.
            </Paragraph>

            <Paragraph>
              6.5 Personal Information Sales Opt-out and Opt-In Rights. If you
              are 16 years of age or older, you have the right to direct us to
              not sell your personal information at any time (the “right to
              opt-out”). We do not sell the personal information of consumers
              whom we actually know are less than 16 years of age, unless we
              receive affirmative authorization (the “right to opt-in”) from
              either the consumer who is at least 13 but not yet 16 years of
              age, or the parent or guardian of a consumer less than 13 years of
              age. Consumers who opt-in to personal information sales may
              opt-out of future sales at any time.
            </Paragraph>

            <Paragraph>
              7. Non-Discrimination. We will not discriminate against you for
              exercising any of your CCPA rights. Unless permitted by the CCPA,
              we will not:
            </Paragraph>

            <BulletList
              items={[
                "deny you goods or services;",
                "charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties;",
                "provide you a different level or quality of goods or services;",
                "suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.",
              ]}
            />

            <Paragraph>
              However, we may offer you certain financial incentives permitted
              by the CCPA that can result in different prices, rates, or quality
              levels. Any CCPA-permitted financial incentive we offer will
              reasonably relate to your personal information’s value and contain
              written terms that describe the program’s material aspects.
              Participation in a financial incentive program requires your prior
              opt-in consent, which you may revoke at any time.
            </Paragraph>

            <Paragraph>
              8. Other California Privacy Rights. California’s “Shine the Light”
              law (Civil Code Section § 1798.83) permits users of our Website
              that are California residents to request certain information
              regarding our disclosure of personal information to third parties
              for their direct marketing purposes. To make such a request,
              please send an email to Connectuk@smartimmigrant.com or write to
              us at: Cache Labs LLC, 254 Chapman Rd, STE 208 #13876, Newark,
              Delaware 19702, United States of America. We will respond to your
              request within 30 days.
            </Paragraph>

            <Paragraph>
              9. Changes to Our Privacy Notice. We reserve the right to amend
              this CCPA Privacy Notice at our discretion and at any time. When
              we make changes to this CCPA Privacy Notice, we will post the
              updated notice on the Website and update the notice’s effective
              date. Your continued use of our Website following the posting of
              changes constitutes your acceptance of such changes.
            </Paragraph>

            <Paragraph>
              10. Contact Information. If you have any questions or comments
              about this notice, the ways in which Company collects and uses
              your information described here and in the Privacy Policy (see
              above), your choices and rights regarding such use, or wish to
              exercise your rights under California law, please do not hesitate
              to contact us at:
            </Paragraph>

            <BulletList
              items={[
                "Website: smartimmigrant.com.",
                "Email: Connectuk@smartimmigrant.com",
                "Postal Address: 254 Chapman Rd, STE 208 #13876, Newark, Delaware 19702, United States of America.",
                "Phone: (408) 430-2007.",
              ]}
            />
          </div>

          <div className="w-full text-center">
            <SectionHeading>GDPR Privacy Notice</SectionHeading>
          </div>
          <EffectiveDates
            effectiveDate="April 3, 2025"
            lastReviewed="April 3, 2025"
          />
          <div className={`${baseStying}`}>
            <Paragraph>
              The protection of private information is fundamental to the trust
              Cache Labs LLC users who have given us when choosing our service.
              This Privacy Notice supplements the information contained in Cache
              Labs LLC’s Privacy Policy (see above) and applies solely to all
              visitors, users, and others who reside in the European Economic
              Area (“EEA”) (“consumers” or “you”). We adopt this notice to
              comply with the General Data Protection Regulation (the “GDPR”),
              which applies from May 25, 2018, and any terms defined in the GDPR
              have the same meaning when used in this Notice.
            </Paragraph>
            <SectionHeading>
              1. Cache Labs LLC as a Controller under the GDPR.
            </SectionHeading>
            <Paragraph>
              When you use the Cache Labs LLC website or other related services,
              Cache Labs LLC may collect personal information and, in such case,
              acts as the Data Controller (as defined under GDPR). The Cache
              Labs LLC website automatically collects IP address information
              using third-party providers described in Privacy Policy (see
              above). If you do not want us to collect this information, you may
              opt-out by contacting us at Connectuk@smartimmigrant.com. For our
              contact information, see the section in our general Privacy Policy
              headed “Contact Information”.
            </Paragraph>
            <SectionHeading>
              2. Cache Labs LLC as a Processor under the GDPR.
            </SectionHeading>
            <Paragraph>
              In the provision of the Service, we act as a Data Processor (as
              defined under GDPR). We may use aggregated and anonymized
              information to help improve and market our services and may
              disclose personal information in response to lawful requests by
              public authorities, including to meet national security or law
              enforcement requirements.
            </Paragraph>
            <Paragraph>
              We may also disclose and transfer any information to a third party
              who acquires any or all of our assets and business units, whether
              such acquisition is by merger, consolidation, or purchase of all
              or a substantial portion of our assets. In addition, in the event
              we become the subject of an insolvency proceeding, whether
              voluntary or involuntary, the Company or its liquidator,
              administrator, receiver or administrative receiver may dispose of
              such information in a transaction approved by the court.
            </Paragraph>
            <SectionHeading>3. Lawful Basis for the Processing.</SectionHeading>
            <Paragraph>
              Generally, we process personal information provided by users
              through our service on the basis of consent. We may also process
              personal information on other bases permitted by the GDPR and
              applicable laws, such as when the processing is necessary for us
              to comply with our legal obligations.
            </Paragraph>
            <SectionHeading>
              4. Categories of Personal Information.
            </SectionHeading>
            <Paragraph>
              Please refer to the Privacy Policy (see above) to see what
              categories of personal information we collected from you.
            </Paragraph>
            <SectionHeading>
              5. Recipients of Your Personal Information.
            </SectionHeading>
            <Paragraph>
              We use various service providers to manage our website and provide
              services such as event registration or managing e-mail
              communications. Our service providers change from time to time.
              Note that our service providers have entered into contracts with
              us that restrict what they can do with your personal information.
              If you would like specific information about our service providers
              who have received your information, please contact us at
              Connectuk@smartimmigrant.com and we will provide that information
              to you.
            </Paragraph>
            <SectionHeading>
              6. Information regarding the transfers of personal data outside of
              the European Economic Area (EEA).
            </SectionHeading>
            <Paragraph>
              Our main administrative offices are based in the USA and that’s
              where we process personal information collected through our
              website. When you provide personal information to us, we request
              your consent to transfer that personal information to the USA. The
              USA does not have an adequacy decision from the European
              Commission, which means that the Commission has not determined
              that the laws of the USA provide adequate protection for personal
              information.
            </Paragraph>
            <Paragraph>
              Although the laws of the USA do not provide legal protection that
              is equivalent to EU data protection laws, we safeguard your
              personal information by implementing appropriate technical and
              organizational measures, including standard contractual clauses
              approved by the European Commission, and by treating it in
              accordance with this GDPR Privacy Notice. We take appropriate
              steps to protect your privacy and implement reasonable security
              measures to protect your personal information in storage. We use
              secure transmission methods to collect personal data through our
              website. We also enter into contracts with our data processors
              that require them to treat personal information in a manner that
              is consistent with this Notice.
            </Paragraph>
            <SectionHeading>
              7. Retention Period for Personal Information.
            </SectionHeading>
            <Paragraph>
              How long we retain personal information varies according to the
              type of information in question and the purpose for which it is
              used. Generally, we retain personal information for as long as
              necessary to fulfill the purposes for which it was collected,
              typically for the duration of any contractual relationship and for
              any period thereafter as legally required or permitted by
              applicable law. We delete personal information within a reasonable
              period after we no longer need to use it for the purpose for which
              it was collected (or for any subsequent purpose that is compatible
              with the original purpose). This does not affect your right to
              request that we delete your personal data (as defined under GDPR)
              before the end of its retention period. We may archive personal
              data (which means storing it in inactive files) for a certain
              period prior to its final deletion, as part of our ordinary
              business continuity procedures.
            </Paragraph>
            <SectionHeading>8. Data Subject Rights.</SectionHeading>
            <Paragraph>
              GDPR empowers data subjects (as defined under GDPR) (aka our
              users) with certain rights to help assure the privacy and
              protection of their personal data. To exercise these rights:
            </Paragraph>
            <Paragraph>
              a. Right of access. You can request more information about the
              personal data we hold about you.
            </Paragraph>
            <BulletList
              items={[
                "Customer-based accounts: The administrator of your account as the controller of your data is responsible for providing you with the information requested through a valid data subject access request. Please contact your account administrator to complete your request.",
                "Individual-based accounts: To view the personal data that we collect about you, please visit your user account profile. For meeting content, including information shared during meetings, information about participants in meetings and any recordings of meetings, the host is responsible to provide access to such data.",
              ]}
            />
            <Paragraph>b. Right of rectification.</Paragraph>{" "}
            <Paragraph>
              If you believe that any personal data we are holding about you is
              incorrect or incomplete:
            </Paragraph>
            <BulletList
              items={[
                "Customer-based accounts: Please contact your account administrator if you believe your personal data is inaccurate and requires correction.",
                "Individual-based accounts: You can directly correct (rectify) your personal data by logging into your account and modifying your personal data in your user profile settings.",
              ]}
            />
            <Paragraph>c. Right to object/restrict processing.</Paragraph>{" "}
            <Paragraph>
              You may have the right to object or restrict your data processing
              for certain purposes.
            </Paragraph>
            <BulletList
              items={[
                "Customer-based accounts: Contact your account administrator who will evaluate the right to object or restrict your data processing.",
                "Individual-based accounts: Users can email Connectuk@smartimmigrant.com to unsubscribe.",
              ]}
            />
            <Paragraph>d. Right to erasure.</Paragraph>
            <BulletList
              items={[
                "Customer-based accounts: Your account administrator is responsible for carrying out data deletion requests using the in-product tools. Further information on how to delete a user can be found at our site. Deleting a user permanently removes them and their data from us. When deleting a user, associated meetings, webinars, and cloud recordings can be deleted with or without transfer of this data to another licensed Cache Labs LLC user, depending on your account administrator’s privacy and security policies.",
                "Individual-based accounts: Individual users can find instructions on how to terminate your subscription, if applicable, and delete your account at the above CCPA section.",
              ]}
            />
            <Paragraph>
              e. Right to portability: Our account administrators can download
              or export cloud recordings and chat logs as a self-service.
            </Paragraph>
            <Paragraph>
              f. Withdrawal of Consent: If we are processing your data based on
              your consent (as indicated at the time of collection of such
              data), you may have the right to withdraw your consent at any
              time. Please email us at Connectuk@smartimmigrant.com.
            </Paragraph>
            <Paragraph>
              The right to lodge a complaint with a supervisory authority.
            </Paragraph>{" "}
            <Paragraph>
              You have the right to file a complaint concerning our processing
              of your personal data with your national (or in some countries,
              regional) data protection authority. The EU Commission has a list
              here:
              http://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm
            </Paragraph>
            <Paragraph>
              9. Absence of statutory or contractual requirement or other
              obligation to provide any personal data.
            </Paragraph>
            <Paragraph>
              Users of our website are under no statutory or contractual
              requirement or other obligation to provide personal information to
              us via our website.
            </Paragraph>
          </div>

          {/* Disclaimer */}
          <div className="flex md:flex flex-col mb-10 md:mb-20">
            <div className="w-full mx-auto rounded-lg py-1 md:py-6 mt-20 md:mt-20">
              <div className="">
                <h2 className="hidden font-dm-sans text-[24px] md:block text-[#0A142F] mb-4 font-poppins font-bold  leading-[150%] tracking-[0%]">
                  Disclaimer
                </h2>
                {/* dash for phone view */}
                <div className="md:hidden h-[1px] w-full bg-[#2B3D51] mb-2 lg:mb-6 md:my-[22px] lg:my-[32px] "></div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="max-w-[1200px">
                    <p className="text-[#0A142F] text-justify font-dm-sans font-normal text-[8px] md:text-[16px] leading-[140%]">
                      Smart Immigrant UK provides informational and educational
                      services, including AI-powered tools, to assist
                      individuals in understanding the UK immigration process.
                      We are not attorneys, do not provide legal representation,
                      and do not act on behalf of any government agency,
                      including UK immigration authorities. The information
                      shared on our platform should not be considered legal
                      advice.
                      <br />
                      While we strive to ensure the accuracy and relevance of
                      our content, we make no guarantees regarding its
                      completeness or reliability. Any reliance on AI-generated
                      responses or other materials is at your own discretion.
                      <br />
                      For personalized legal advice tailored to your situation,
                      we strongly recommend consulting a licensed UK immigration
                      solicitor. By proceeding, you acknowledge and accept this
                      disclaimer.
                    </p>
                  </div>

                  <div></div>
                </div>
              </div>
            </div>
            <div className="bottom mt-10 gap-2 md:gap-4 lg:gap-10 flex flex-col md:flex-row items-center justify-center w-full  text-[#0A142F] font-normal text-[10px] md:text-[12px] lg:text-[16px] leading-[24px] ">
              <div className="right flex items-center justify-center gap-1">
                {" "}
                <IoLogoWhatsapp /> +1 (650)-404–6152
              </div>
              <div className="right flex items-center justify-center gap-1">
                {" "}
                <MdEmail /> Connectuk@smartimmigrant.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
