echo "Deploying changes..."
# Pull changes from the live branch
git pull

# Build the image with the new changes
docker build -t nodeapp -f /home/farhanali/docker-basic/Dockerfile .

# Shut down the existing containers
docker-compose down

# Start the new containers
docker-compose up -d
echo "Deployed!"

