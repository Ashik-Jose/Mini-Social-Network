# Mini-Social-Network

I have developed a mini social network web application with all the required features mentioned in the task.  
I used React JS for the frontend and Node JS in the backend to develop this application. All the data is stored in the MongoDB database. This is completely a **MERN** stack project 

The landing page is the **sign in** page. An option for **sign Up** has been given right below it where, a new user could sign up by entering his name, a username (which must be unique),email and setting a password for him. The username must be unique since, username is used to identify everyone using this social-network.  

After registering, the user could enter his credentials to move into his **profile**. Here, he could see his details as well as an option to set a profile picture and a status and he could **search** his friends,relatives or anyone registered in this social network by their username. On the right side, he could see a **list of all his friends**. At the bottom right, posts can be created with an image and a comment. These posts can be liked by anyone who visits his profile. These posts can be deleted as well by its owner. A **list of mutual friends** can be seen at this position while browsing through the friends profile.Anyone could visit anybody's profile and **make them friends or unfriend them**.  

All the data has been fetched and posted to/from the MongoDB database using suitable api.  

This is the link to a working demo video of my work  
  https://drive.google.com/file/d/1_ojw4osNvbQTPivGD0P1Mm28iqC_NgFH/view?usp=sharing
  
 To run the code:
 
 1) Use the deployed link  
 I have deployed the appication on vercel and thus the following link can be used to access this
      https://mini-social-network-frontend.vercel.app/
      
   This works fine but with a single exception. The deployed link could not upload the profile picture and the image for the post in the appication since I have used multer to convert the images into binary array and store it in the database and it requires a local file system if no other cloud storage systems are available. All the required features work perfectly fine with this deployement. This can be resolved by running the application locally (by the localhost)
   
2) Run as local host

To run as local host, first clone the repositoy to store it as a local repository. Ensure that npm is installed in the system.  
To run as local host change the base url for api in client/src/api/iindex.js to http://localhost:2000/api/  
Open the server folder of the repository in the terminal and type "npm install" and hit Enter.Then again type "npm start" and hit Enter. The server will start running with message - "Connected"
Similarly, while running the server, open the client folder in another termianl and type "npm install" and hit Enter.Then run "npm start".  
The broswer opens up with the landing page of the application.
