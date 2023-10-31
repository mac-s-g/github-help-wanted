import requests

# Set your GitHub username and repository name
username = "your_username"
repository = "your_repository"

# Define the API endpoint for issues
url = f"https://api.github.com/repos/{username}/{repository}/issues"

# Define the parameters to filter "help wanted" issues
params = {
    "labels": "help wanted",
    "state": "open"
}

# Make the API request
response = requests.get(url, params=params)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    issues = response.json()

    # Print the titles of the "help wanted" issues
    for issue in issues:
        print(issue["title"])
else:
    print(f"Error fetching issues. Status code: {response.status_code}")
