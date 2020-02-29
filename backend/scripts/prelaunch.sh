sudo $1 install -y nginx uwsgi build-essential python3 python3-dev uwsgi-plugin-python3 postgresql libpq-dev

sudo cp nginx-daysave.conf /etc/nginx/sites-available/nginx-daysave.conf
sudo ln -sf /etc/nginx/sites-available/nginx-daysave.conf /etc/nginx/sites-enabled/nginx-daysave.conf
sudo mkdir -p /run/uwsgi

# psql -U postgres -h localhost -d postgres -f db-prepare-script.sql

# cd ../haboard
# python3 -m venv venv
# source venv/bin/activate

# pip install wheel
# pip install -r requirements.txt

# touch localsettings.txt
# echo -e "USER admin\nPASSWORD qwert9102" > localsettings.txt

# python manage.py makemigrations authorization
# python manage.py makemigrations accounts
# python manage.py makemigrations tasks
# python manage.py makemigrations achievements
# python manage.py migrate
