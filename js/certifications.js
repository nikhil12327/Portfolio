/**
 * ============================================================================
 * CERTIFICATIONS & VERIFIED CREDENTIALS DATA
 * ============================================================================
 * To add new certifications, diplomas, or course credentials in the future,
 * simply add a new object to the `items` array below.
 * 
 * Fields for each certification:
 * - id:              Unique identifier (e.g. 'aws-certified-developer')
 * - title:           Official certification or course title
 * - issuer:          Issuing organization (e.g. 'Deloitte Australia', 'Google Cloud', 'IBM', 'Stanford')
 * - year:            Year credential was issued (e.g. '2026')
 * - featured:        true = displayed on website homepage | false = saved in Drive folder only
 * - credentialCode:  (Optional) Verification ID, license number, or code
 * - previewImage:    (Optional) Certificate preview image or badge
 * - driveLink:       Direct Google Drive link to view or download full PDF credential
 * - verificationUrl: (Optional) Direct link to official issuer verification page
 * - skills:          List of validated competencies (e.g. ['Cloud Architecture', 'Python', 'System Design'])
 * - description:     Brief overview of coursework, project simulation, or exam
 * ============================================================================
 */

window.certificationsData = {
  // Master Google Drive folder containing all certificate PDFs:
  driveVaultUrl: "https://drive.google.com/drive/folders/19Z57wI-3_tjh9XMHvsQKQ9yaf5Urk5_L?usp=sharing",

  // Master list of your certifications:
  items: [
    /* Example Templates - Uncomment and fill in when you want to display your certificates:
    {
      id: "deloitte-tech-consulting",
      title: "Technology Consulting Virtual Internship",
      issuer: "Deloitte Australia",
      year: "2024",
      featured: true,
      credentialCode: "bYyffj7y2Fq77vF2i",
      previewImage: "assets/images/certs/deloitte_technology.png",
      driveLink: "https://drive.google.com/file/d/YOUR_PDF_FILE_ID/view?usp=sharing",
      verificationUrl: "https://www.theforage.com/simulations/deloitte-au/technology-7h6e",
      skills: ["Cloud Architecture", "Enterprise Tech Strategy", "System Design"],
      description: "Deloitte virtual internship simulation completing real-world enterprise cloud architecture, client requirements analysis, and system implementation planning."
    },
    {
      id: "deloitte-data-analytics",
      title: "Data Analytics Virtual Internship",
      issuer: "Deloitte Australia",
      year: "2024",
      featured: true,
      credentialCode: "Deloitte-DA-2024",
      previewImage: "assets/images/certs/deloitte_data_analytics.png",
      driveLink: "https://drive.google.com/file/d/YOUR_PDF_FILE_ID/view?usp=sharing",
      verificationUrl: "https://www.theforage.com/simulations/deloitte-au/data-analytics-ey2w",
      skills: ["Data Pipeline Engineering", "Business Intelligence", "Quantitative Analysis"],
      description: "Deloitte virtual internship simulation focusing on exploratory data analysis, pattern identification, and strategic dashboard modeling."
    }
    */
  ]
};
