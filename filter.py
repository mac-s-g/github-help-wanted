// Set your GitHub username and repository name
const username = "your_username";
const repository = "your_repository";

// Define the API endpoint for listing issues
const url = `https://api.github.com/repos/${username}/${repository}/issues`;

// Define the query parameters for labels "OR" vs "AND"
const params = {
  state: "open",
  labels: "OR,label1,label2" // Replace label1 and label2 with your labels
};

// Provide your personal access token
const token = "your_personal_access_token";

// Make the request to get the filtered issues
fetch(url + "?" + new URLSearchParams(params), {
  method: "GET",
  headers: {
    Authorization: `token ${token}`,
    Accept: "application/vnd.github.v3+json"
  }
})
  .then(response => response.json())
  .then(data => {
    // Print the titles of the filtered issues
    data.forEach(issue => {
      console.log(issue.title);
    });
  })
  .catch(error => console.error("Error:", error));
