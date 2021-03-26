# Review work for Web Developer
## James Mulroy

## Build instructions

# For the server App
The server side is node with express running apollo server as middleware, somewhat overkill for the job at hand but seemed the best choice. I was going to run the whole application from one node instance but found separating the functions as server/client to make more sense in my head.

We are accessing a REST API from RapidAPI called "TestAndCode". It's a free service within RapidAPI for exercises like this. I have add and will be passing my credentials (its a token and can't be used for anything but this so is safe).

We wrap REST API calls with apollo server graphQL and serve requests from [http://localhost:3025/api] accessing this url directly via a browser will allow you to see the Apollo schema documentation and example calls for this schema. All other paths on this instance will 404.

To build,
Inside the api-review directory
### `npm install`

To run
Inside the api-review directory 
### `npm start`
or
### `nodemon`

# For the client App
The client side is based upon a create-react-app [https://create-react-app.dev/] cookie cutter with Semantic UI React and Apollo Client. We are also using tailwindCSS.

We have a very basic table located at, [http://localhost:3000], I was in the process of adding sorting to the table but there was a unforeseen issue with getting the REST API JSON to sort correctly so it's been commented out, will no doubt look at this at a later point. 

To build
From the api-review\client directory
### `npm install`

To Run
### `npm start`

As this is just a review, I've not included front-end production build instructions.

There is no additional functionality however in the apllo server we also have the option to call individual records.

