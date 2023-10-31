import requests

# Set the owner, repository, and issue number
owner = "mccue"
repository = "http-github-help-wanted"
issue_number = 24

# Define the API endpoint for the specific issue
url = f"https://api.github.com/repos/{owner}/{repository}/issues/{issue_number}"

# Make the request to get the issue information
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    issue_data = response.json()
    title = issue_data["title"]
    created_at = issue_data["created_at"]
    body = issue_data["body"]

    print(f"Title: {title}")
    print(f"Created At: {created_at}")
    print(f"Body:\n{body}")
else:
    print(f"Error: Unable to fetch issue data. Status code {response.status_code}")
