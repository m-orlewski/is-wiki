Django server:
python -m venv env
source env/bin/activate (env/Scripts/activate)
pip install -r requirements.txt
cd backend
python manage.py runserver
python manage.py createsuperuser

React frontend:
cd frontend/client
npm install
npm run start