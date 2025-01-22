# Responsive Webpage with Collapsible Menu

This project is a **responsive webpage** that features a fixed navbar, a collapsible left menu, a main content area, a right-side panel, and a footer. The layout is designed to adapt based on screen sizes, making the webpage fully responsive.

### Features:
- **Fixed Navbar**: The navbar remains at the top while scrolling.
- **Collapsible Left Menu**: The left menu can be toggled on smaller screens (below 992px).
- **Responsive Layout**: The layout adjusts to different screen sizes using Flexbox.
- **Page Scaling**: The page automatically shrinks based on screen width:
  - **90% scale** for screens between 992px and 1600px.
  - **80% scale** for screens between 700px and 767px.
  - **75% scale** for screens between 600px and 700px.
  - **50% scale** for screens smaller than or equal to 600px.

### Technologies Used:
- HTML5
- CSS3 (Flexbox, Media Queries)
- JavaScript (Event Listeners, Page Scaling)

### Files:
- `index.html`: The HTML structure of the page.
- `styles.css`: The CSS styles that define the layout, responsiveness, and aesthetics.
- `script.js`: JavaScript that handles page scaling based on window size and the collapsible menu functionality.

### Installation & Running the Project:
To run this project locally on your machine, follow these steps:

1. **Clone the repository**:
   If you haven't already, clone this repository to your local machine by running the following command in your terminal (make sure you have Git installed):
   
   ```bash
   git clone https://github.com/your-username/responsive-webpage.git


Replace your-username with your GitHub username.

Navigate to the project folder: Change to the directory where you cloned the repository:


cd responsive-webpage

Open the index.html file in a browser: Open the project folder in your file explorer and double-click on index.html. This will open the webpage in your default browser.

Alternatively, you can open the index.html file directly from the terminal:

On Windows:

start index.html

On macOS:

open index.html
On Linux:

xdg-open index.html

View and Test:

Resize your browser window to observe how the page layout responds to different screen sizes.
On smaller screens, the left menu can be toggled by clicking the ☰ icon in the navbar.

Usage:
The webpage automatically adjusts its layout and scaling based on the screen width.
On screen sizes less than 992px, the left menu becomes collapsible.
The content will shrink according to the specified scaling criteria:
Between 992px and 1600px, the page is scaled to 90%.
Between 700px and 767px, the page is scaled to 80%.
Between 600px and 700px, the page is scaled to 75%.
For screens smaller than or equal to 600px, the page is scaled to 50%.
