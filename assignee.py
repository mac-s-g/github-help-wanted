import requests

# Set your GitHub username and repository name
username = "your_username"
repository = "your_repository"

# Define the API endpoint for listing issues
url = f"https://api.github.com/repos/{username}/{repository}/issues"

# Define the query parameters to filter by no assignee
params = {"state": "open", "assignee": "none"}

# Provide your personal access token
token = "your_personal_access_token"

# Make the request to get the filtered issues
response = requests.get(url, params=params, headers={"Authorization": f"token {token}"})

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    issues = response.json()
    
    # Print the titles of the filtered issues
    for issue in issues:
        print(issue["title"])
else:
    print(f"Error fetching issues. Status code: {response.status_code}")
    print(response.text)
