const minimap = document.getElementById('minimap');
const minimapContent = document.getElementById('minimap-content');

function updateMinimap() {
  const contentHeight = document.body.scrollHeight;
  const viewportHeight = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;

  const minimapScale = viewportHeight / contentHeight;
  const scrollPosition = scrollTop * minimapScale;

  minimapContent.style.height = `${contentHeight * minimapScale}px`;
  minimapContent.style.transform = `translateY(-${scrollPosition}px)`;
}

window.addEventListener('scroll', updateMinimap);

// Create simplified elements for headings and paragraphs
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach(heading => {
  const minimapHeading = document.createElement('div');
  minimapHeading.classList.add('minimap-heading');
  minimapContent.appendChild(minimapHeading);
});

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
  const minimapParagraph = document.createElement('div');
  minimapParagraph.classList.add('minimap-paragraph');
  minimapContent.appendChild(minimapParagraph);
});

updateMinimap();
