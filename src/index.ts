import express from 'npm:express'
import tasksRoutes from './routes/tasks.routes.ts'
import './db.ts'

const app = express()

app.use(express.json())
app.use(tasksRoutes)

app.listen(8080, () => {
    console.log('Server listening on port 8080');
})