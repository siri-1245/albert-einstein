let currentSlide = 0;
const slides = document.querySelectorAll('.paper');

function showSlide(slideIndex) {
    if (slideIndex < 0) {
        currentSlide = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        currentSlide = 0;
    }
    
    // Hide all slides initially
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Display the current slide
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

showSlide(currentSlide); // Show the first slide initially
 // Show the first slide initially

// Function to fetch book data and create book elements
function fetchBooksAndCreateList() {
    const booksList = document.getElementById('books-list');
    const image = 'images/ic1';
    const api = 'https://siri-1245.github.io/albert-einstein/ai.json'; // Update with the actual API URL
    const bookname = 'booktitle';
    const imagePathPrefix = 'images/ic1/'; // Add your image path prefix here

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            const books = data.books.filter((book) => book.published);
            books.forEach((book) => {
                const bookElement = document.createElement('div');
                bookElement.classList.add('book');
                const pic = document.createElement('img');
                pic.src = 'images/ic2.jpg'; // Concatenate the prefix with the book's image
                bookElement.appendChild(pic);
                const booktitle = document.createElement('div');
                booktitle.classList.add(bookname);
                booktitle.textContent = book.title;
                bookElement.appendChild(booktitle);
                booksList.appendChild(bookElement);
            });
        })
        .catch((error) => console.error(error));
}

// Fetch books and create the list when the page loads
fetchBooksAndCreateList();
