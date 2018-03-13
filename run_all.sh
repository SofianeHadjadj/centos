node ./API_REST/app.js $1 $2 &
cd ./Front_end
ng serve --host $1 --port $3 &
cd ..
systemctl stop firewalld.service
