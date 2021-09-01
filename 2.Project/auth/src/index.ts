import express from "express";

import { currentUserRoute,signInRoute,signUpRoute,signOutRoute } from './routes/_index'

const app = express();

app.use('/',currentUserRoute)
app.use('/',signInRoute)
app.use('/',signUpRoute)
app.use('/',signOutRoute)


app.listen(6001,() => console.log('Auth: Listen on port 6001 🚀'));
