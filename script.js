// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Select all social sharing buttons
    var shareButtons = document.querySelectorAll(".share-buttons button");

    // Add event listeners to each social sharing button
    shareButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get the URL of the current page
            var url = window.location.href;

            // Get the title of the current page
            var title = document.title;

            // Check which social media platform was clicked and open the share URL accordingly
            if (button.classList.contains("share-facebook")) {
                window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
            } else if (button.classList.contains("share-twitter")) {
                window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(title), "_blank");
            } else if (button.classList.contains("share-instagram")) {
                // Replace 'YOUR_INSTAGRAM_URL' with your Instagram URL
                window.open("YOUR_INSTAGRAM_URL", "_blank");
            }
        });
    });
});


//for search 

// script.js

document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the search query
    var searchQuery = document.getElementById("searchInput").value.trim();

    // Redirect to search results page with query parameter
    window.location.href = "search-results.html?q=" + encodeURIComponent(searchQuery);
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    var reviewForm = document.getElementById("reviewForm");
    var reviewsContainer = document.getElementById("reviewsContainer");

    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        var reviewText = document.getElementById("reviewText").value;
        var rating = document.getElementById("rating").value;

        var reviewElement = document.createElement("div");
        reviewElement.classList.add("review");

        var reviewTextElement = document.createElement("p");
        reviewTextElement.classList.add("review-text");
        reviewTextElement.textContent = reviewText;
        reviewElement.appendChild(reviewTextElement);

        var ratingElement = document.createElement("p");
        ratingElement.classList.add("review-rating");
        ratingElement.textContent = "Rating: " + rating;
        reviewElement.appendChild(ratingElement);

        reviewsContainer.appendChild(reviewElement);

        document.getElementById("reviewText").value = "";
        document.getElementById("rating").value = "";
    });
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    


    // Sample data for news and articles (you can replace it with your own data)
    var newsData = [
        { title: "New Album Release", content: "Check out the latest album from your favorite artist!" },
        { title: "Music Festival Announcement", content: "Exciting news! A new music festival is coming to town." },
        { title: "Interview with a Musician", content: "Read our exclusive interview with a talented musician." }
    ];

    var newsContainer = document.getElementById("newsContainer");

    // Display news and articles
    newsData.forEach(function(item) {
        var newsItem = document.createElement("div");
        newsItem.classList.add("news-item");

        var newsTitle = document.createElement("h3");
        newsTitle.classList.add("news-title");
        newsTitle.textContent = item.title;

        var newsContent = document.createElement("p");
        newsContent.classList.add("news-content");
        newsContent.textContent = item.content;

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsContent);

        newsContainer.appendChild(newsItem);
    });
});


// for side bar

document.addEventListener("DOMContentLoaded", function() {
    // Select sidebar and button to toggle its visibility
    var sidebar = document.getElementById("sidebar");
    var toggleButton = document.getElementById("toggleButton");

    // Add event listener to the toggle button
    toggleButton.addEventListener("click", function() {
        // Toggle the 'active' class on the sidebar to show/hide it
        sidebar.classList.toggle("active");
    });
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    var recommendationList = document.getElementById("recommendationList");

    // Sample data for recommended songs
    var recommendedSongs = [
        "Song 1",
        "Song 2",
        "Song 3",
        "Song 4",
        "Song 5"
    ];

    // Display recommended songs
    recommendedSongs.forEach(function(song) {
        var recommendationItem = document.createElement("div");
        recommendationItem.classList.add("recommendation-item");
        recommendationItem.textContent = song;
        recommendationList.appendChild(recommendationItem);

        // Add click event listener to play the song (just for demonstration)
        recommendationItem.addEventListener("click", function() {
            alert("Now playing: " + song);
            // You can add actual music playback functionality here
        });
    });
});
// You can add JavaScript functionality here, such as handling click events on albums, creating playlists, etc.

