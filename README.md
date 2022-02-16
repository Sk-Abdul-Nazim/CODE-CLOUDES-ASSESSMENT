# Setup Assessment Project

 1. Firstly download the project zip file from GitHub.

 2. Then extract the zip file.

 3. `npm install` command fire in root project directory for server's package.json.

 4. And `npm install` command fire in client directory for client's package.json.


# Project Directory

 1. Project root directory example: `E:\MERN_PROJECT\CODE_CLOUDES_PROJECT_NAZIM>`

 2. Project client directory example: `E:\MERN_PROJECT\CODE_CLOUDES_PROJECT_NAZIM\client>`


# Getting Started Assessment Project

 1. In Project root directory first run the server using `npm start` then

 2. client directory run the client using `npm start` and Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

 3. In both client and server running together using `npm run dev` command fire from project root directory and I'm used concurrently dependency in package.json of server for `npm run dev`.


# Described Assessment Project
 
 1. After client and server running then open landing page in browser.

 2. Click Login Button to show Login Details page.

 3. Firstly login by admin because first set the default city. Admin can login using 
    `Email: admin@test.com and password: Admin@123`. 
    When admin set invalid city then show `Invalid Place` message.

 4. After successfully set the city then click `User Login` button to show the login page again.

 5. And User can login using  `Email: test@test.com and password: Test@123`, after successfully login then show `user city` page.

 6. If not set the default city by admin and when user enter any city name then show `Please Set Default City In Admin` message.

 7. If set the default city by admin and user enter the invalid city then show `Invalid Place` message.

 8. If admin city and user enter city are same then show `Both are same city` message.

 9. If admin city and user city are valid and user city is within a radius of 100km from the default city then show `Yes`
    message and show the distance between admin city to user city.

10. If admin city and user city are valid and user city is outside a radius of 100km from the default city then show `No`
    message and show the distance between admin city to user city.
    

# Unit Testing

 1. Check First Unit test whether distance between to latitute longitute which is > 100 km 

 2. Check Second Unit test whether distance between to latitute longitute which is < 100 km 

 3. Check unit testing Using `npm test` command .