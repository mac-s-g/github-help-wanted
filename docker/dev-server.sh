#!/bin/bash
# runs webpack in react container

NODE_ENV=${1:-dev_server}
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
    -v $(pwd)/example:/react/example \
    -v $(pwd)/entrypoints:/react/entrypoints \
    -v $(pwd)/webpack.config.js:/react/webpack.config.js \
    --name=github-help-wanted \
    -e NODE_ENV=$NODE_ENV \
    --publish 5000:5000 \
    --entrypoint=/react/entrypoints/dev-server.sh \
    -t github-help-wanted