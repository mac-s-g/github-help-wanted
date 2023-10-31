import requests

# Set your GitHub username and personal access token
username = "YourUsername"
token = "YourPersonalAccessToken"

# Set the owner and repository
owner = "RepositoryOwner"
repository = "RepositoryName"

# Define the API endpoint for creating an issue
url = f"https://api.github.com/repos/{owner}/{repository}/issues"

# Define the issue payload
issue_data = {
    "title": "[Request] Add ability to search by topics",
    "body": "Please add the ability to search by topics in the application.",
    "labels": ["enhancement"]
}

# Set up authentication using your personal access token
headers = {
    "Authorization": f"token {token}"
}

# Make the POST request to create the issue
response = requests.post(url, json=issue_data, headers=headers)

# Check if the request was successful (status code 201)
if response.status_code == 201:
    print("Issue created successfully!")
else:
    print(f"Error: Unable to create issue. Status code {response.status_code}")
