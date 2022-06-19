Dokumentacja użytkownika
========================


Podręcznik instalacji
---------------------
Platforma została testowana i przygotwana na systemie Linux.

Wymagania
~~~~~~~~~
#. Python=3.10.4 wraz z pakietami:
    * asgiref==3.5.0
    * Babel==2.10.3
    * certifi==2022.6.15
    * charset-normalizer==2.0.12
    * Django==4.0.4
    * django-cors-headers==3.12.0
    * django-extensions==3.1.5
    * djangorestframework==3.13.1
    * djangorestframework-simplejwt==5.2.0
    * docutils==0.17.1
    * idna==3.3
    * imagesize==1.3.0
    * Jinja2==3.1.2
    * MarkupSafe==2.1.1
    * packaging==21.3
    * pydotplus==2.0.2
    * Pygments==2.12.0
    * PyJWT==2.4.0
    * pyparsing==3.0.9
    * pytz==2022.1
    * requests==2.28.0
    * simplejson==3.17.6
    * snowballstemmer==2.2.0
    * Sphinx==5.0.2
    * sphinx-rtd-theme==1.0.0
    * sphinxcontrib-applehelp==1.0.2
    * sphinxcontrib-devhelp==1.0.2
    * sphinxcontrib-htmlhelp==2.0.0
    * sphinxcontrib-jsmath==1.0.1
    * sphinxcontrib-qthelp==1.0.3
    * sphinxcontrib-serializinghtml==1.1.5
    * sqlparse==0.4.2
    * tzdata==2022.1
    * urllib3==1.26.9

    
#. React.js

Pakiety do pythona można zainstalować z pliku requirements.txt:

.. highlight:: python
   :linenothreshold: 5

.. code-block:: python

   pip install -r requirements.txt

Uruchomienie Serwera Django
~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   cd backend
   python manage.py runserver

Serwer będzie dostępny lokalnie pod linkiem: http://127.0.0.1:8000

Uruchomienie klienta React
~~~~~~~~~~~~~~~~~~~~~~~~~~

Wymagania:
   * npm 8.5.5
   * node v16.15.0

W przypadku innych wersji nie jest gwarantowane poprawne działanie aplikacji

.. code-block:: python

   cd frontend/client
   npm install
   npm run start

Klient będzie dostępny lokalnie pod linkiem: http://127.0.0.1:3000

Dostęp do panelu admina Django
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Utworzenie konta admina:

.. code-block:: python

   cd backend
   python manage.py createsuperuser

Panel admina znajduje się pod linkiem: http://127.0.0.1:8000/admin

Generowanie dokumentacji
~~~~~~~~~~~~~~~~~~~~~~~~

.. code-block:: python

   cd doc
   make html

Otwieramy plik _build/doc/html/index.html w przeglądarce