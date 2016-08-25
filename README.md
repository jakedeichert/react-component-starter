# My Component



### Setting Up the Environment

#### Docker

I use Docker for my development environment.

~~~sh
# Build the docker container
docker build -t img_react_component_starter .

# Run the docker container (auto destroys after exit)
docker run -it --rm \
    --name react_component_starter \
    -v /path/to/react-component-starter:/root/project \
    img_react_component_starter

~~~



#### Building & Testing

~~~sh
# Connect a terminal to the docker container
docker exec -it react_component_starter bash

# Install and then watch for builds with webpack
npm install
npm run dev

# Run the tests
npm test
~~~
