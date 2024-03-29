const Task = require('../models/taskModel');
const asyncHandler = require('./../middleware/asyncHandler');
const { createCustomError } = require('./../utils/customError');

exports.getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({
    success: true,
    totalData: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.createTask = asyncHandler(async (req, res, next) => {
  console.log('hee');
  const { title } = req.body;

  if (!title) {
    return next(createCustomError('Title is required', 400));
  }

  const task = await Task.create({ title });

  res.status(201).json({
    success: true,
    message: 'Task created successfully',
    data: {
      task,
    },
  });
});

exports.getTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findById({ _id: id });

  if (!task) {
    return next(createCustomError('Task not found!', 404));
  }

  res.status(200).json({
    success: true,
    data: {
      task,
    },
  });
});

exports.updateTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  if (!title) {
    return next(createCustomError('Title is required', 400));
  }

  const task = await Task.findByIdAndUpdate(
    { _id: id },
    { title, completed },
    { new: true, runValidators: true },
  );

  if (!task) {
    return next(createCustomError('Task not found!', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Task updated successfully',
    data: {
      task,
    },
  });
});

exports.deleteTask = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const task = await Task.findByIdAndDelete({ _id: id });

  if (!task) {
    return next(createCustomError('Task not found!', 404));
  }

  res.status(200).json({
    success: true,
    message: 'Task deleted successfully',
    data: null,
  });
});

exports.deleteAllTasks = asyncHandler(async (req, res) => {
  await Task.deleteMany();

  res.status(200).json({
    success: true,
    message: 'All tasks deleted successfully',
    data: null,
  });
});
