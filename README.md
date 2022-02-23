# Aviar
Aviár


A v i á r
here your dream come true

Detailed Design & Implementation Plan 


Authors:
	Hassan Khan - 30056680
	Adeshpal Virk - 30087952
	Jacob Nguyen - 30087465
	Sebastian Contreras - 30062418
	Ivan Suyat - 30089089
	Chace Nielson - 30045674
	Cole Pawliw - 30088796 

Contributors: Dr. Tim Reimer 
Last updated: Feb 10th 2022
Status: Final 


Purpose 

In today's digital world artists need a way to showcase their work to viewers in an engaging manner. That is where Aviár comes in to deliver a groundbreaking, avant-garde gallery-like experience for viewers to view and engage with the artist's work. 
Background Reading 
https://www.artbusiness.com/weberrors.html
https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
https://www.mongodb.com/languages/mern-stack-tutorial

Context 

Normal art websites focus on the content and disregard the context in which the material is presented. This dismisses the opportunities to use the power of the web to make a truly surreal experience. Using next-generation HTML, CSS and JavaScript animations to push previously perceived limitations aside, Aviár aims to redefine what a web-based art gallery can be. 
Bland Art Websites:
https://colorlib.com/wp/art-gallery-websites/
https://www.azuki.com/gallery
https://www.freshkillsnft.com
Websites with Interesting UX but Pointless:
https://sophiehustin.com/actualites
https://www.thibaudallie.com
A website with Fluid UX but Misplaced:
https://unitlondon.com

Overall we can see that the above websites have certain aspects that are interesting but lack the overall vision and readability, to truly create a captivating experience. We aspire to take inspiration from these websites while also making our website user-friendly. 


Detailed Design 

The overall system architecture 
MVC [See Appendix A]
Pub/Sub 
How users interact with the system
Mouse/Keyboard
Clicking, scrolling, swiping.
Through a web user interface, users will be able to scroll through a dynamic art gallery to browse images, search for art by specific users and collections, comment and rate images, save images to their personal collection, and post their own art to the gallery.

How software components interact

MVC will connect the sections of the system with its distinct three layer design and with the control layer mediating between the other two layers [See Appendix A]

How data flows through the system [See Appendix B
Users create posts that get sent to the main server and stored in the database
Other users request to view an art piece, which then gets pulled from the database and sent to their device
A search gets sent to the server which will query the database for the associated images, the results get returned to the user


Implementation Plan 

Technologies you intend to use 
MERN Stack - MongoDB, Express.JS, React.js, Node.js 
How you will manage source code 
Github- a shared codebase
https://github.com/orgs/A-v-i-a-r/dashboard
MongoDB - a shared database

How you will integrate components 
Express.JS will connect the front end with the back end

How you intend to test the system 
Exploratory testing will suffice as agreed upon by Dr. Reimer

How you will deploy the system
Dr Reimer in lectures advised us to always follow the terrain instead of the map when it comes to executing the design. Therefore after some consultation we have come up with three deployment strategies, with the first two being the most plausible. However actual execution may differ as stated previously. 
Option 1: Cloud DB + Localhost was the original proposition [See Appendix C]
Option 2: Dr Reimer advises on full cloud deployment on azure with at least 2 virtual machines. One virtual machine for the mongoDB and another for the business + application player. [See Appendix C]
Option 3: Dr Reimer, for max performance but also more complexity also gave an option for full cloud separation with Application Tier and Business Layer running on separate VM’s along with the DB VM. [See Appendix C]


Project Planning

Team organization 
Who does what? 
Frontend 
Hassan
Chace Nielson
Backend
Jacob Nguyen
Cole Pawliw
Sebastian Contreras
Database
Adesh
Ivan

How work is coordinated 
Each week a Scrum Master Scrub Hamster takes charge of the tasks for the week and distributes work according to the state of the project
Week 1 - Hassan
Week 2 - Ivan
Week 3 - Sebastian Contreras
Week 4 - Cole Pawliw
Week 5 - Chace Nielson
Week 6 - Jacob
Week 7 - Adesh

Schedule 
Timing for major development tasks
Feb 11th - Proposal published
March 29th - Push to production 
April 5-12th - Demo/pitch final product to investors
Development milestones 7 Weeks from Feb 11 - March 29
	Week 1 Database setup (Mongo Cloud DB)
	Week 2 Home Screen (Menus, Logo)
	Week 3 Login (Accounts, Authentication)
	Week 4 Image Upload (Collections, Themes)
	Week 5 Animations (Parallax, Flow, Dynamic)
	Week 6 Engagement (Comments, Likes)
	Week 7 Testing and Deployment (Exploratory Testing)


Appendix 
Appendix A: MERN Stack by Dr. Tim Reimer for Aviár


Appendix B: Sequence Diagram by Dr. Tim Reimer for Aviár

Appendix C: Deployment Options:
Option 1: Minimum Cloud:

Option 2: Well Balanced Cloud:

Option 3: Maximum Cloud Separation:
