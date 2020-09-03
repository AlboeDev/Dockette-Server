echo "installing container dependencies"
apt-get update
apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
echo "completed installing container dependencies"

echo "creating directories"
# chmod -R 777 /working
mkdir -m 777 /data
echo "completed creating directories"

echo "building project files"
cd /working
npm install
npm run build
npm start
# chmod -R 777 /working/temp
echo "completed building project files"