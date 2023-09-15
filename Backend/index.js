const connectToMongo = require('./db');
const express = require('express')
const cors = require('cors'); // Import the cors middleware
connectToMongo();
const app = express()
const port = 5000
app.use(express.json())


// routes means endpoints. we can create endpoints using routes.here we have two endpoints one is /api/auth and another is /api/notes. we can create more endpoints if we want.required routes are /api/auth/login, /api/auth/createuser, /api/notes/fetchallnotes, /api/notes/addnote, /api/notes/updatenote, /api/notes/deletenote.

//./routes/auth means we are importing the auth.js file from routes folder. we are importing the auth.js file because we need to create a user and save it in the database. we need to create a user because we need to register a user.
app.use(cors());
//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/chart', require('./routes/dietchart'))
app.use('/api/dailyeat', require('./routes/dailyeat'))

// app.use:
// The app.use function in Express is used to set up middleware for the application. Middleware functions are functions that have access to the request (req) and response (res) objects and can perform actions on them or modify them before passing the control to the next middleware or the route handler.
// Middleware functions are executed sequentially, and they are commonly used for tasks such as logging, authentication, handling errors, parsing incoming data, etc.

//Mounting the Router:

// The './routes/auth' router is a separate instance of express.Router(). It contains route handlers and middleware specific to user-related functionality.
// Mounting Path:

// The path /api/auth specifies where this router should be mounted. This means that all routes defined in the ./routes/auth router will be accessed under the /api/auth URL path.
// Handling Routes:

// Any route defined in the ./routes/notes router will be prefixed with /api/auth. For example, if you have a route in userRoutes like /createuser, the complete route accessed by a client will be /api/auth/createuser


//-----------------------------------------------------------------------------------------
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/ansh', (req, res) => {
//     res.send('Hello Worldss!')
//   })-----------------------------------------------------------------------------------------
app.listen(port, () => {
  console.log(`Diet backend listening at http://localhost:${port}`)
})

// In summary, app.use sets up middleware for the application, app.get defines route handlers for HTTP GET requests, and app.listen starts the server and makes it listen for incoming requests on the specified port. These are the foundational functions in Express.js that allow you to build web applications and handle different types of HTTP requests.