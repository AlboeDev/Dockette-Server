echo "copying running files"
cp -r /working/temp/* /data/
chmod -R 777 /data
echo "completed copying running files"

echo "starting application"
cd /data
ls -l
./start.sh
echo "completed starting application"