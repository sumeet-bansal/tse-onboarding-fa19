## quick-repo &nbsp; [![CircleCI](https://circleci.com/gh/sumeet-bansal/quick-repo/tree/master.svg?style=svg)](https://circleci.com/gh/sumeet-bansal/quick-repo/tree/master)



## REST API

* __GET__ /api/channels?limit={LIMIT}: This will fetch a list of the most popular channel objects, limited
  by the provided limit argument in the query string. The channel objects are sorted in decreasing order
  by the number of messages in each, which determines their popularity (i.e. a channel with more messages
  is more popular than a channel with fewer). The limit argument is technically optional and does not have
  to be provided. 

  Returns `{ success: true, data: [...] }` on success.

  Returns `{ error: true, message: '...' }` on error.

* __GET__ /api/channels/{NAME}: This will fetch a single channel object, which contains the channel name
  (redundant, of course) and the number of messages that the channel owns. Will return a 404 if no channel
  matches the name that was provided.

  Returns `{ success: true, data: {...} }` on success.

  Returns `{ error: true, message: '...' }` on error.

* __POST__ /api/channels: Using the arguments provided in `req.body`, this will create a channel. The
  only argument required is `req.body.name`, which defines the name of the channel to be created. Will return
  a 409 if a channel already exists with the given name. 

  Returns `{ success: true }` on success.

  Returns `{ error: true, message: '...' }` on error.

* __GET__ /api/messages?limit={LIMIT}&channel={NAME}&after={DATE}: The channel argument is required in the 
  query string; the after and limit arguments are optional. This will return a list of the most recent
  messages belonging to the given channel. The limit parameter limits the number of messages that are returned.
  The after parameter sets a minimum date for messages; all returned messages must have a creation date
  occurring AFTER the given date. Will return a 404 if no channel matches the name that was provided.

  Returns `{ success: true, data: [...] }` on success.

  Returns `{ error: true, message: '...' }` on error.

* __POST__ /api/messages: Using the arguments provided in `req.body`, this will create a message to be added
  to a channel. The arguments provided must be `req.body.channel` (the channel name), `req.body.sender`
  (the sender name), and `req.body.content` (the content of the message).  

  Returns `{ success: true }` on success.

  Returns `{ error: true, message: '...' }` on error.

## Useful Commands
+ `docker-compose up -d` to configure and run any required services
+ `npm install` to install the necessary dependencies
+ `npm run dev` to run the Node app with [Nodemon](https://nodemon.io/)
+ `npm run lint` to lint the Node app with [ESLint](https://eslint.org/) (without `--fix`)
+ `npm run test` to run the test suite with [Jest](https://jestjs.io/)
+ `docker exec -it mongo.tse.local mongo` to access MongoDB

Take a look at [`package.json`](https://github.com/sumeet-bansal/quick-repo/blob/master/package.json) for the actual commands.