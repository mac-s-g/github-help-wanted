import requests

# Set your GitHub username and personal access token
username = "YourUsername"
token = "YourPersonalAccessToken"

# Set the owner and repository
owner = "RepositoryOwner"
repository = "RepositoryName"

# Define the API endpoint for fetching issues
url = f"https://api.github.com/repos/{owner}/{repository}/issues"

# Define the parameters to filter by user
params = {
    "creator": "UsernameToFilter",
    "state": "open",  # You can change this to "closed" if you want closed issues
}

# Set up authentication using your personal access token
headers = {
    "Authorization": f"token {token}"
}

# Make the GET request to fetch the filtered issues
response = requests.get(url, params=params, headers=headers)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    issues = response.json()
    for issue in issues:
        print(f"Issue #{issue['number']}: {issue['title']}")
else:
    print(f"Error: Unable to fetch issues. Status code {response.status_code}")
