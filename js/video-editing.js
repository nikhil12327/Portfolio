/**
 * ============================================================================
 * VIDEO EDITING PORTFOLIO DATA
 * ============================================================================
 * To add new video editing projects in the future, simply add a new object to
 * the `items` array below.
 * 
 * Fields for each project:
 * - id:           Unique identifier (e.g. 'commercial-reel-2026')
 * - title:        Project title
 * - category:     Type of edit (e.g. 'Commercial Showreel', 'YouTube Post-Production', 'Promo Cut')
 * - year:         Year produced (e.g. '2026')
 * - featured:     true = displayed on website homepage | false = saved in Drive archive only
 * - thumbnail:    Preview image path (e.g. 'assets/images/video1.jpg')
 * - driveLink:    Direct Google Drive link to watch or download high-res master file
 * - videoUrl:     (Optional) Direct MP4 stream, YouTube, or Vimeo embed link
 * - software:     Tools used (e.g. ['DaVinci Resolve', 'Premiere Pro', 'After Effects'])
 * - description:  Brief explanation of pacing, color grading, and sound design
 * ============================================================================
 */

window.videoEditingData = {
  // Master Google Drive folder containing all video editing projects:
  driveVaultUrl: "https://drive.google.com/drive/folders/1BbJHT-jM3Sx0__mJdwkVqPcj6suqmjXg?usp=sharing",

  // Master list of your video editing works:
  items: [
    /* Example Template - Uncomment and update with your real video details:
    {
      id: "brand-commercial-reel",
      title: "Cinematic Brand Commercial",
      category: "Commercial Showreel",
      year: "2026",
      featured: true,
      thumbnail: "assets/images/video_placeholder.jpg",
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      videoUrl: "",
      software: ["DaVinci Resolve Studio", "Premiere Pro"],
      description: "High-energy commercial cut featuring rhythmic beat-matching, custom sound design, and color grading in ACES color space."
    }
    */
  ]
};
