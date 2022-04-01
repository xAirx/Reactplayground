

# CONTEXT

# Either a path to a directory containing a Dockerfile, or a url to a git repository.

# When the value supplied is a relative path, it is interpreted as relative to the location of the Compose file. This directory is also the build context that is sent to the Docker daemon.

# Compose builds and tags it with a generated name, and uses that image thereafter.

# build:
#   context: ./dir

# That mean, its a path to the directory that contains Dockerfile file. It purposes to build a new image for the service.

# Reference: https://docs.docker.com/compose/compose-file/compose-file-v3/

# In your case:

#    context: .

# Dockerfile file should be existing in the current directory (in the same folder of the docker-compose.yml file).
