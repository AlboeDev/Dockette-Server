# Install CURL
echo "installing curl"
apt-get install curl
echo "successfully installed curl"

# Add NodeJS Repository
echo "adding node repository to package manager"
curl -sL https://deb.nodesource.com/setup_lts.x | bash -
echo "successfully added node repository to package manager"

# Install NodeJS
echo "installing lts node"
apt-get install -y nodejs
echo "successfully installed lts node"

# Install GIT
echo "installing git"
apt-get install git
echo "successfully installed git"

# Make the working directory
echo "making working directory"
mkdir -m 777 /temp
echo "successfully made the working directory"

# Make the running directory
echo "making the running directory"
mkdir -m 777 /data
echo "successfully made the running directory"

# Move to working directory
echo "moving to working working directory"
cd /temp
echo "successfully moved to working directory"

# Clone repository
echo "cloning the git repository"
git clone https://github.com/AlboeDev/mms.git
echo "successfully cloned the git repository"

echo "running initialization script"
npm start
echo "successfully ran initialization script"

echo "setting permissions of server"
chmod 777 /data/start.sh
chmod 777 /data/server.jar
echo "successfully set permissions of server"

