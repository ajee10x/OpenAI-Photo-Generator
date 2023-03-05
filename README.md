# OpenAI-Photo-Generator
This is a simple React app that generates a photo based on text input using the OpenAI API.

## Installation
1. First, let's create a new React project using create-react-app by running the following command in your terminal:
- `npx create-react-app my-app`
- *This will create a new React project called react-dalle in your current directory.*
2. Next, let's install the axios library by running the following command in your terminal inside the **my-app** directory:
- `npm install axios`
3. Now, let's create a new component called **src/PhotoGenerator.js** that will be responsible for generating photos based on user input.
4. Create an account on the OpenAI website and obtain an API key.
https://platform.openai.com/account/api-keys
5. Finally, let's update our App component to render our PhotoGenerator component by editing **src/App.js** insdie the dictionary.
6. Replace the placeholder API key in **src/App.js** with your own API key.
- `const apiKey = 'YOUR_API_KEY_HERE';`
7. Start the app using: 
- `npm start`

## Usage
1. Enter a prompt in the input field.
2. Click the "Generate Photo" button.
3. Wait for the photo to be generated and displayed.

## Technologies Used
- React
- OpenAI API
License
This project is licensed under the MIT License. See the LICENSE file for more details.

## Screenshot
![This is an image](https://github.com/ajee10x/OpenAI-Photo-Generator/blob/main/Screenshot.png)



## License
Apache-2.0 license.
