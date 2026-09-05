/**
 * ============================================================================
 * CINEMATOGRAPHY & CAMERA WORK PORTFOLIO DATA
 * ============================================================================
 * To add new cinematography works in the future, simply add a new object to
 * the `items` array below.
 * 
 * Fields for each project:
 * - id:           Unique identifier (e.g. 'moody-portrait-study')
 * - title:        Project title
 * - category:     Category (e.g. 'Narrative Short', 'Lighting Study', 'Aerial & Drone', 'Music Visuals')
 * - year:         Year filmed (e.g. '2026')
 * - featured:     true = displayed on website homepage | false = saved in Drive archive only
 * - thumbnail:    Preview still frame or poster image
 * - driveLink:    Direct Google Drive link to 4K / Pro-Res master video render
 * - cameraGear:   Equipment used (e.g. ['Sony FX3', 'Sigma 24-70mm f/2.8', 'Aputure 300d'])
 * - description:  Lighting design, composition rationale, lens selection, and mood
 * ============================================================================
 */

window.cinematographyData = {
  // Master Google Drive folder containing all cinematography projects:
  driveVaultUrl: "https://drive.google.com/drive/folders/1N7f6kYx9rj0oGCz4GyEMhPvXvw36yxY7?usp=sharing",

  // Master list of your cinematography works:
  items: [
    /* Example Template - Uncomment and update with your real cinematography details:
    {
      id: "nocturnal-light-study",
      title: "Nocturnal City Cinematic Study",
      category: "Lighting & Camera Study",
      year: "2026",
      featured: true,
      thumbnail: "assets/images/cinema_placeholder.jpg",
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      cameraGear: ["Sony A7 Series", "35mm f/1.4 GM", "Gimbal Stabilizer"],
      description: "Atmospheric low-light study exploring neon diffusion, anamorphic flare simulation, and motivated practical lighting."
    }
    */
  ]
};
