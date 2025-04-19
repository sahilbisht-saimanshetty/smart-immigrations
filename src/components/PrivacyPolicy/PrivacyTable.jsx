import React from 'react'
const tableData = [
    {
        category: "A. Identifiers.",
        examples:
            "A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver’s license number, passport number, or other similar identifiers.",
        collected: "YES",
    },
    {
        category: "B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).",
        examples:
            "A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver’s license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.",
        collected: "YES",
    },
    {
        category: "C. Protected classification characteristics under California or federal law.",
        examples: "Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).",
        collected: "YES",
    },
    {
        category: "D. Commercial information.",
        examples: "Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.",
        collected: "NOT SURE",
    },
    {
        category: "E. Biometric information.",
        examples: "Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.",
        collected: "NOT SURE",
    },
    {
        category: "F. Internet or other similar network activity.",
        examples: "Browsing history, search history, information on a consumer’s interaction with a website, application, or advertisement.",
        collected: "NOT SURE",
    },
    {
        category: "G. Geolocation data.",
        examples: "Physical location or movements.",
        collected: "NOT SURE",
    },
    {
        category: "H. Sensory data.",
        examples: "Audio, electronic, visual, thermal, olfactory, or similar information.",
        collected: "NOT SURE",
    },
    {
        category: "I. Professional or employment-related information.",
        examples: "Current or past job history or performance evaluations.",
        collected: "YES",
    },
    {
        category: "J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)), as amended.",
        examples: "Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.",
        collected: "YES",
    },
    {
        category: "K. Inferences drawn from other personal information.",
        examples: "Profile reflecting a person’s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.",
        collected: "NOT SURE",
    },
    // Add more objects as needed
];

export const PrivacyTable = () => {
    return (
        <div className='w-[100%] md:w-[100%] mx-auto'>
            <table className="table-auto w-full border border-gray-300 text-sm">
                <thead>
                    <tr className="bg-gray-100 text-[#434343] text-[10px] md:text-[12px] lg:text-[18px] font-dm-sans ">
                        <th className="border border-gray-300 px-4 py-2 text-left">Category</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Collected</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td className="border border-gray-300 px-4 py-2 align-top text-[#434343] font-dm-sans text-[10px] md:text-[12px] lg:text-[18px]">
                                {row.category}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-[#434343] text-[10px] font-dm-sans md:text-[12px] lg:text-[18px]">{row.examples}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center align-top text-[#434343] font-dm-sans text-[10px] md:text-[12px] lg:text-[18px]">
                                {row.collected}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}
