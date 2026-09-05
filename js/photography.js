/**
 * ============================================================================
 * PHOTOGRAPHY & EXIF LIGHT STUDIES PORTFOLIO DATA
 * ============================================================================
 * To add new photography works in the future, simply add a new object to
 * the `items` array below.
 * 
 * Fields for each photo:
 * - id:           Unique identifier (e.g. 'goa-coastline-dawn')
 * - title:        Photo title
 * - category:     Category (e.g. 'Portraiture', 'Street & Urban', 'Landscape & Travel', 'Automotive')
 * - year:         Year captured (e.g. '2026')
 * - location:     Location (e.g. 'Goa, India')
 * - featured:     true = displayed on website homepage | false = saved in Drive archive only
 * - image:        Path to web-optimized photo or cloud URL (e.g. 'assets/images/photo1.jpg')
 * - driveLink:    Direct Google Drive link to download original uncompressed RAW / 4K file
 * - exif:         Camera settings object: { camera, lens, aperture, shutter, iso }
 * - story:        Behind-the-lens story, lighting setup, or artistic vision
 * ============================================================================
 */

window.photographyData = {
  // Master Google Drive folder containing all RAW photography:
  driveVaultUrl: "https://drive.google.com/drive/folders/1c3sktEeaajSztp4E67vUM2kLrUi8SbbY?usp=sharing",

  // Master list of your photography works:
  items: [
    /* Example Template - Uncomment and update with your real photo details:
    {
      id: "portrait-golden-hour",
      title: "Atmospheric Golden Hour Portrait",
      category: "Portraiture",
      year: "2026",
      location: "Goa, India",
      featured: true,
      image: "assets/images/photo_placeholder.jpg",
      driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing",
      exif: {
        camera: "Sony Alpha Full-Frame",
        lens: "85mm f/1.4 GM",
        aperture: "f/1.8",
        shutter: "1/500s",
        iso: "100"
      },
      story: "Natural backlight composition using subtle silver bounce reflector to preserve subject eye catchlights."
    }
    */
  ]
};
