#!/bin/bash
# runs shell in react container

NODE_ENV=${1:-local}
echo "Running with NODE_ENV=$NODE_ENV"

# run the github-help-wanted container
docker run \
    --rm \
    -v $(pwd)/src:/react/src \
    -v $(pwd)/wepback:/react/wepback \
    -v $(pwd)/dist:/react/dist \
    -v $(pwd)/dev-server:/react/dev-server \
    -v $(pwd)/docker:/react/docker \
    -v $(pwd)/test:/react/test \
    -e NODE_ENV=$NODE_ENV \
    --entrypoint=/bin/bash \
    -ti github-help-wanted
