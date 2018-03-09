node ./API_REST/app.js &
cd ./Front_end
ng serve --host 192.168.43.159 --port 4200 &
cd ..
systemctl stop firewalld.service
