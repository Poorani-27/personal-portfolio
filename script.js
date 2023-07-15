// Get the theme button element
const themeButton = document.getElementById("themeButton");

// Add event listener to the theme button
themeButton.addEventListener("click", () => {
  // Get the body element
  const body = document.body;

  // Toggle the 'dark_theme' class on the body element
  body.classList.toggle("dark_theme");
});


// Get the toggle buttons
const toggleButtons = document.querySelectorAll('[data-toggle-btn]');

// Get the skills and tools containers
const skillsBox = document.querySelector('[data-skills-box]');
const skillsList = skillsBox.querySelector('.skills-list');
const toolsList = skillsBox.querySelector('.tools-list');

// Add event listeners to the toggle buttons
toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle active class on the buttons
    toggleButtons.forEach((btn) => btn.classList.toggle('active'));

    // Toggle display of skills and tools containers
    skillsList.classList.toggle('hidden');
    toolsList.classList.toggle('hidden');
  });
});
s
// Function to handle the button click event
function handleDownload() {
  // Create a file URL or fetch the file from a server
  const fileURL = 'Resume-POORANI-TAMILVASAN.pdf';

  // Create a download link element
  const link = document.createElement('a');
  link.href = fileURL;

  // Set the download attribute with the desired file name
  link.download = 'myfile.pdf';

  // Append the link to the document body
  document.body.appendChild(link);

  // Programmatically click the link to trigger the download
  link.click();

  // Remove the link from the document body (optional)
  document.body.removeChild(link);
}

// Add event listener to the button
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', handleDownload);