// Horizontal scrolling
function scroll(event) {
  const movieTiles = document.querySelectorAll('.movie-tile');
  // Check if the scroll direction is left or right
  if (event.deltaY > 0) {
    // Scroll the page to the right


    window.scrollBy({
      left: window.innerWidth *2, // window.innerWidth
      behavior: 'smooth' // Add smooth scrolling effect
    });
  } else if (event.deltaY < 0) {
    // Scroll the page to the left
    window.scrollBy({
      left: -window.innerWidth/2,
      behavior: 'smooth' // Add smooth scrolling effect
    });
  }
  const rect = movieTiles[0].getBoundingClientRect();
  if (window.scrollX > rect.right - window.innerWidth*0.75) {
    window.scrollTo(0,0);
  }  
}

function snap_horizontal() {
  // Get all movie tiles
  const movieTiles = document.querySelectorAll('.movie-tile');
  // Iterate over the tiles to find the one closest to the center
  for (let i = 0; i < movieTiles.length; i++) {
    var pageX = window.scrollX + window.innerWidth/2;
    var tileX = window.innerWidth * (i + 0.5);
    var distanceX = tileX - pageX;
    if (Math.abs(distanceX) < window.innerWidth/2) {
      const rect = movieTiles[i].getBoundingClientRect();
      break
    }

    // // Get the position and size of the tile
    // var rect = movieTiles[i].getBoundingClientRect();
    // if (window.scrollX > rect.right) {
    //   break
    // }
    // var distance = Math.abs(rect.left - pageX);
    // if (distance < window_width/2) {
    //   return window_width/2 - distance
    // }
    // else {
    //   return window_width/2
    // }
  }
}

function snap_vertical() {
  // Get all movie tiles
  const movieTiles = document.querySelectorAll('.movie-tile');
  // Calculate the center of the page
  const pageCenterY = window.scrollY + window.innerHeight / 2;
  // Calculate the width and height of the tile
  const tile_height = movieTiles[0].offsetHeight;
  // Iterate over the tiles
  for (let i = 0; i < movieTiles.length; i++) {
    // Get the position and size of the tile
    const rect = movieTiles[i].getBoundingClientRect();
    // Calculate the center position of the tile
    const tileCenterY = rect.top + tile_height / 2;
    if (Math.abs(tileCenterY - pageCenterY) < tile_height / 2){
      return Math.abs(tileCenterY - pageCenterY)
    }
  }
}

// Check if the viewport is in landscape mode
if (window.innerWidth > window.innerHeight) {
  window.addEventListener('wheel', scroll);
}

// if (window.innerWidth > window.innerHeight) {
//   // Add an event listener to the window for the scroll event
//   window.addEventListener('wheel', function(event) {
//     // Get all movie tiles
//     const movieTiles = document.querySelectorAll('.movie-tile');
//     // Calculate the center of the page
//     const pageCenterX = window.innerWidth / 2;
//     const pageCenterY = window.innerHeight / 2;
//     // Iterate over the tiles
//     for (let i = 0; i < movieTiles.length; i++) {
//       // Get the position and size of the tile
//       const rect = movieTiles[i].getBoundingClientRect();
//       // Check if the top and bottom of the tile are within the viewport
//       if (rect.left >= 0 && rect.right <= window.innerWidth) {
//         // This tile is in view
//         const tileInView = movieTiles[i];
//         break;
//       }
//     }
//     const rectInView = tileInView.getBoundingClientRect();
//     // Calculate the center position of the tile
//     const tileCenterX = rectInView.left + rect.width / 2;
//     const tileCenterY = rectInView.top + rect.height / 2;

//     // Calculate the distance between the page center and the tile center
//     const distanceX = pageCenterX - tileCenterX;
//     const distanceY = pageCenterY - tileCenterY;

//     // Check if the scroll direction is left or right
//     if (event.deltaY > 0) {
//       // Scroll the page to the right
//       window.scrollBy({
//         left: distanceX,
//         // left: window.innerWidth, // Adjust the scroll distance as needed
//         behavior: 'smooth' // Add smooth scrolling effect
//       });
//     } else if (event.deltaY < 0) {
//       // Scroll the page to the left
//       window.scrollBy({
//         left: -distanceX,
//         // left: -(window.innerWidth), // Adjust the scroll distance as needed
//         behavior: 'smooth' // Add smooth scrolling effect
//       });
//     }
//   });
// }

// // set