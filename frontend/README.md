# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Steps to Start Our Program

    - Run 'npm i' in the frontend folder and also in the backend folder.
    - Replace the .env.example file with a .env file and update the file with your own data. For sending emails, you will need an SMTP service. We recommend using Brevo, which is free and usually trouble-free.
    - Execute 'npm run initDb' in the backend folder.
    - Take the files from the dataBaseAwaitQ folder and execute them into the workbench in the following order:
    1 -> valoracionesempresas_users.sql
    2 -> valoracionesempresas_companies.sql
    3 -> valoracionesempresas_employees.sql
    4 -> valoracionesempresas_ratingcompanies.sql
    After doing this, you will have a small database to test how our website works.
    - To launch the web application, run 'npm run dev' in both the frontend and backend folders.
    - After completing all the previous steps, you may notice that the images haven't loaded. This is because the uploads folder is too large. If you want to see images on the website, you will need to upload them yourself and change their names to match the ones in the database we provided.
    - If something isn't working, try refreshing the page.
    - Thank you, and we hope you enjoy using our website.

## Pasos a seguir para iniciar nuestros programa

    - Hacer 'npm i' dentro de la carpeta frontend y dentro de la carpeta backend.
    - Sustituye el archivo .env.example por un .env y cambia los datos del archivo por los que vayas a usar tu, para el envio de emails necesitaras un servicio smtp, nosotros te recomendamos brevo que es gratuito y no suele dar problemas
    - Hacer un 'npm run initDb' en la carpeta backend.
    - Coger los archivos de la carpeta de dataBaseAwaitQ y ejecutalas en el workbench en el siguiente orden
        1 -> valoracionesempresas_users.sqlgit
        2 -> valoracionesempresas_companies.sql
        3 -> valoracionesempresas_employees.sql
        4 -> valoracionesempresas_ratingcompanies.sql
        Tras hacer esto tendrás una pequeña base de datos con la que comprobar como funciona nuestra página
    - Para arrancar la web haz 'npm run dev' tanto en la carpeta del frontend como la del backend
    - Después de realizar todos los pasos anteriores verás que las fotos no se han cargado, esto se debe a que la carpeta uploads pesa demasiado por lo que si quieres ver imágenes en la web deberás insertarlas tu mism@ y cambiar su nombre por el que está en la base de datos que te hemos proporcionado.
    - Si algo no funciona prueba a refrescar la página.
    - Gracias, esperamos que disfrutéis de nuestra web.
