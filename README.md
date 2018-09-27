# Dialogflow-Firebase Restaurant Bot

Customizable Restaurant Bot using Google's Dialogflow and Firebase functions.

# Dialogflow-Firebase Restaurant Bot

Configure Dialogflow

Go to www.dialogflow.com log in with your GMail and create an agent<br />
Create the following intents:
![alt text](https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Intents.png)
<br />
Go all the way to the bottom part of an Intent's page and you will see Fulfillment.<br />
Click on: "Enable webhook call for this intent".<br />
Enable this option on ALL of the intents (don't forget the Default Welcome Intent as well).<br />
![alt text](https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Fulfillment.png)
<br />
Always SAVE your changes on the intent's after modifying something.<br />
<br />
Configure Firebase<br />
<br />
Go to https://firebase.google.com/ an you should be login automatically to the same GMail account.<br />
On the top-right click on "GO TO CONSOLE", an voila your Dialogflow project should be there already.<br />
![alt text](https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Firebase_project.png)
<br />
Do the following:

- Click on your project.<br />
- On the next page click on "Choose data sharing settings".<br />
- Check both boxes on the pop-up window that will open and click on "Finish".<br />
  <br />
  Install Firebase functions<br />
  <br />
  Run: npm install -g firebase-tools<br />
  Cd into the functions folder and run npm install<br />
  <br />
  Watch the following tutorial: https://www.youtube.com/watch?v=DYfP-UIKxH0<br />
  (you will not need to NPM install anything because everything is already in the package.json of the repo).<br />

  On the same functions folder run "firebase deploy" to deploy your functions to handle the intents on the back-end.<br />

  Copy the Function URL
  ![alt text](https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/FunctionURL.png)

  Go to your Dialogflow agent page, click on "Fulfillment" on the left menu.<br />
  Then enable Webhook and past the link of the functions.<br />
  Save the changes.
  ![alt text](https://github.com/ferdelamad/DialogflowFirebaseRestaurantBot/blob/master/imgs/tutorial/Webhook.png)
