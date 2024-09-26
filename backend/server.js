// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://deshan_taskfy:deshan1234@taskfy.zb5mo.mongodb.net/?retryWrites=true&w=majority&appName=taskfy', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dateGiven: String,
  deadline: String,
  assignedTo: String,
  priorityHigh: Boolean,
  category: { type: String, default: 'To Do' } // New category field with default value
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.post('/api/tasks', async (req, res) => {
  try {
    const taskData = {
      ...req.body,
      category: req.body.category || 'To Do' // Use provided category or default to 'To Do'
    };

    const task = new Task(taskData);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: 'Error saving task', error });
  }
});

app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
