#!/bin/bash
# runs webpack in react container

NODE_ENV=${1:-production}
echo "Running with NODE_ENV=$NODE_ENV"

# stop and remove the containers if they are running
stop_and_remove_container()
{
    docker stop github-help-wanted
    docker rm github-help-wanted
}
stop_and_remove_container || true

# run the github-help-wanted container
docker run \
    -v $(pwd)/src:/react/src \
    -v $(pwd)/dist:/react/dist \
    -v $(pwd)/docker:/react/docker \
    -v $(pwd)/webpack:/react/webpack \
    --name=github-help-wanted \
    -e NODE_ENV=$NODE_ENV \
    --publish 3100:3100 \
    --entrypoint=/react/docker/entrypoints/build.sh \
    -t github-help-wanted