// Get the movie tiles
const movieTiles = document.querySelectorAll('.movie-tile');

// Set the transition duration and threshold
const transitionDuration = 300; // milliseconds
const transitionThreshold = 100; // pixels

// Add event listeners to each movie tile
movieTiles.forEach((tile) => {
    let startX;
    let currentX;
    let isDragging = false;

    // Handle the start of the drag
    const handleDragStart = (event) => {
        startX = event.clientX || event.touches[0].clientX;
        currentX = startX;
        isDragging = true;
        tile.style.transition = 'none';
    };

    // Handle the drag movement
    const handleDragMove = (event) => {
        if (!isDragging) return;

        const x = event.clientX || event.touches[0].clientX;
        const deltaX = x - currentX;
        currentX = x;

        // Move the tile
        tile.style.transform = `translateX(${deltaX}px)`;
    };

    // Handle the end of the drag
    const handleDragEnd = () => {
        isDragging = false;

        // Calculate the distance moved
        const distanceMoved = currentX - startX;

        // Determine if the threshold is reached
        if (Math.abs(distanceMoved) >= transitionThreshold) {
            // Snap the tile into view
            const direction = distanceMoved > 0 ? 1 : -1;
            tile.style.transform = `translateX(${direction * transitionThreshold}px)`;
        } else {
            // Reset the tile position
            tile.style.transform = 'translateX(0)';
        }

        // Apply the transition
        tile.style.transition = `transform ${transitionDuration}ms ease-out`;
    };

    // Handle the scroll event
    const handleScroll = () => {
        // Calculate the distance scrolled
        const distanceScrolled = window.scrollY;

        // Determine if the threshold is reached
        if (distanceScrolled >= transitionThreshold) {
            // Snap the tile into view
            tile.style.transform = `translateX(${transitionThreshold}px)`;
        } else {
            // Reset the tile position
            tile.style.transform = 'translateX(0)';
        }

        // Apply the transition
        tile.style.transition = `transform ${transitionDuration}ms ease-out`;
    };

    // Add event listeners for mouse and touch events
    tile.addEventListener('mousedown', handleDragStart);
    tile.addEventListener('touchstart', handleDragStart);
    tile.addEventListener('mousemove', handleDragMove);
    tile.addEventListener('touchmove', handleDragMove);
    tile.addEventListener('mouseup', handleDragEnd);
    tile.addEventListener('touchend', handleDragEnd);
    tile.addEventListener('mouseleave', handleDragEnd);

    // Add event listener for scroll event
    window.addEventListener('scroll', handleScroll);
});

