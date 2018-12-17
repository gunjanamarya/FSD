### E-STATIONARY MART

Please follow the below steps to run the application locally.

#### Backend setup -

1. Change to `Backend` directory 
    ```
    cd Backend
    ```

2. Install all the backend dependencies 
    ```
    npm install
    ```

3. The backend server uses mysql as database. Please update the password (or any other config) according to your local mysql setup

    In `db-initial-data.js` script, update password at line 6 and line 19.

    In `dbconnection.js` script, update password at line 5.

4. Create db and initial tables and populate some sample data 
    ```
    node db-initial-data.js
    ```

5. Start the backend server 
    ```
    node index.js
    ```

#### Frontend setup -

1. Change to `Frontend` directory 
    ```
    cd Frontend
    ```

2. Install all the frontend dependencies 
    ```
    npm install
    ```

3. Start the frontend 
    ```
    npm start
    ```

4. You can access the application at http://localhost:4200

5. Below are the two default username/password combination for logging into the application
   
    `test1/happy`

    `test2/happy`

6. Sneak peek into the application 
   
   - On successful authentication, you will be redirected to the dashboard page. Here you can view all the available items.
   -  The `ADD` button on the cards will allow you to add items to your cart. The cart can be viewed by clicking the `View Cart` button at the top (which is visible on adding atleast one item). 
   -  Clicking the `View Cart` button navigates you to other screen where you can review and place the order. When the order is placed successfully, you can view all your orders from the `View Active Order(s)` button. 
   -  You can also view all your past orders from the `History` link provided in the top right dropdown menu. The `History` screen provides options to edit/cancel active orders (not approved by admin). 
   -  For logging out of the application, you can make use of the `Logout` link in the top right dropdown menu.
