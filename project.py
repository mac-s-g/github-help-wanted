import requests

# Set your GitHub username and personal access token
username = "YourUsername"
token = "YourPersonalAccessToken"

# Set the owner and repository where you want to post the project idea
owner = "RepositoryOwner"
repository = "RepositoryName"

# Define the API endpoint for creating an issue
url = f"https://api.github.com/repos/{owner}/{repository}/issues"

# Set up authentication using your personal access token
headers = {
    "Authorization": f"token {token}"
}

# Define the issue payload (title and body)
issue_data = {
    "title": "New Project Idea",
    "body": "Description of your project idea goes here.\n\nYou can provide more details about the project, its goals, and any specific technologies you plan to use."
}

# Make the POST request to create the new issue
response = requests.post(url, json=issue_data, headers=headers)

# Check if the request was successful (status code 201 indicates successful creation)
if response.status_code == 201:
    print(f"Successfully created a new project idea issue.")
else:
    print(f"Error: Unable to create the issue. Status code {response.status_code}")
