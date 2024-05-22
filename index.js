const express = require('express');
const cors = require('cors');
const pool = require('./db/index');
const todosRouter = require('./routes/todos');

const app = express();
const PORT = 5000;
app.use(cors({origin: "*"}));
app.use(express.json());

app.use('/todos', todosRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});