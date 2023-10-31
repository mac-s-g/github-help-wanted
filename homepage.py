import requests

# Set your GitHub username and repository name
username = "your_username"
repository = "your_repository"

# Define the API endpoint for creating issues
url = f"https://api.github.com/repos/{username}/{repository}/issues"

# Define the issue details
issue_title = "Website Bug: Clicking on logo should navigate to homepage"
issue_body = """
describe how to replicate the issue:

1. Open http://github-help-wanted.com/?languages=&labels=help+wanted&page=2&sort=created&order=desc
2. Click on logo "Github Help wanted"
3. It goes nowhere.

Expected Behaviour:
It should navigate to http://github-help-wanted.com/

File to Fix:
github-help-wanted/src/js/components/layout/Navbar.js
Line 14 in e6243b0

<Menu.Item as="a" header href="/">
"""

# Define the issue labels (optional)
issue_labels = ["bug"]

# Define the issue payload
payload = {
    "title": issue_title,
    "body": issue_body,
    "labels": issue_labels
}

# Provide your personal access token
token = "your_personal_access_token"

# Create the issue
response = requests.post(url, json=payload, headers={"Authorization": f"token {token}"})

# Check if the request was successful (status code 201)
if response.status_code == 201:
    print("Issue created successfully!")
else:
    print(f"Error creating issue. Status code: {response.status_code}")
    print(response.text)
