const shareButton = document.querySelector('.share-btn');
const bottomSheet = document.querySelector('.bottom-sheet');

// Toggle the visibility of the bottom sheet when the share button is clicked
shareButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the click from bubbling to the document
    bottomSheet.classList.toggle('hidden');
    bottomSheet.classList.toggle('visible');
});

// Hide the bottom sheet when clicking outside
document.addEventListener('click', (e) => {
    if (!bottomSheet.contains(e.target) && !shareButton.contains(e.target)) {
        bottomSheet.classList.add('hidden');
        bottomSheet.classList.remove('visible');
    }
});

