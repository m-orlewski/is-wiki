Dokumentacja użytkownika
========================


Podręcznik instalacji
---------------------
Platforma została testowana i przygotwana na systemie Linux.

Wymagania
~~~~~~~~~
#. Python=3.7 wraz z pakietami:
    * asgiref==3.5.0
    * dj-database-url==0.5.0
    * Django==4.0.4
    * django-cors-headers==3.12.0
    * django-extensions==3.1.5
    * django-on-heroku==1.1.2
    * djangorestframework==3.13.1
    * djangorestframework-simplejwt==5.2.0
    * gunicorn==20.1.0
    * psycopg2-binary==2.9.3
    * pydotplus==2.0.2
    * PyJWT==2.4.0
    * pyparsing==3.0.9
    * python-dotenv==0.20.0
    * pytz==2022.1
    * simplejson==3.17.6
    * sqlparse==0.4.2
    * tzdata==2022.1
    * whitenoise==6.2.0
    * sphinx
    
#. React.js

Pakiety do pythona można zainstalować z pliku requirements.txt:

.. highlight:: python
   :linenothreshold: 5

.. code-block:: python

   pip install -r requirements.txt

Uruchomienie Serwera Django
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   python manage.py runserver

Uruchomienie Serwera React
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   npm install
   npm run start
