const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  deleteAllTasks,
} = require('../controllers/tasksController');

router.get('/', getAllTasks);
router.post('/', createTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.route('/delete-all').delete(deleteAllTasks);
router.delete('/:id', deleteTask);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Tasks management.
 */

/**
 * @swagger
 * /tasks:
 *    get:
 *      summary: Get all tasks.
 *      description: Returns a list of tasks.
 *      tags: [Tasks]
 *      responses:
 *        200:
 *          description: All tasks returned successfully.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                  totalData:
 *                    type: number
 *                    example: 1
 *                  data:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Tasks'
 *    post:
 *      summary: Create a new task.
 *      description: Create a new task.
 *      tags: [Tasks]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - title
 *              properties:
 *                title:
 *                  type: string
 *            example:
 *              title: Task 1
 *      responses:
 *        201:
 *          description: Task created successfully.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  success:
 *                    type: boolean
 *                  message:
 *                    type: string
 *                    example: Task created successfully
 *                  data:
 *                    $ref: '#/components/schemas/Tasks'
 */

/**
 * @swagger
 * /tasks/{id}:
 *  get:
 *    summary: Get task
 *    description: Get task by id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Task id
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Task returned successfully.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tasks'
 *  patch:
 *    summary: Update task
 *    description: Update task by id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: Task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Tasks'
 *          example:
 *            title: Task 1
 *            completed: true
 *    responses:
 *      200:
 *        description: Task updated successfully.
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tasks'
 *  delete:
 *    summary: Delete task
 *    description: Delete task by id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: Task id
 *    responses:
 *      200:
 *        description: Task deleted successfully.
 */

/**
 * @swagger
 * /tasks/delete-all:
 *    delete:
 *      summary: Delete all tasks
 *      description: Delete all tasks
 *      tags: [Tasks]
 *      responses:
 *        200:
 *          description: All tasks deleted successfully.
 */
