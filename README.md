# Next.js & Django JWT Auth with httpOnly Cookies

This is a project that demonstrates how you could implement json web token authentication where you store your json web tokens in an httpOnly cookie to prevent JavaScript from having access to your credentials.

In order to test out this project, follow these steps:

-   clone the repository
-   in the frontend folder, run: npm install, this will install the required frontend packages
-   in the frontend folder, run: npm run dev, this will run your Next.js frontend
-   in the backend folder, run: python3 -m venv venv
-   then activate the virtual environment: source venv/bin/activate (MacOS) or venv\Scripts\activate (Windows)
-   in the backend folder, run: pip install -r requirements.txt
-   in the backend folder, run: python manage.py migrate
-   in the backend folder, run: python manage.py runserver

Then under backend/auth_system/settings.py:

-   under DATABASES, set the PASSWORD field to your database password
