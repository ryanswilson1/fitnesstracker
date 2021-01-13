require('../db/mongoose');
const Workout = require('../models/workoutSchema');

module.exports = function (app) {

    app.get('/api/workouts', async (req, res) => {
        const workout = await Workout.find({});
        res.json(workout);
    });

    app.post('/api/workouts', (req, res) => {
        const data = req.body;
        data.day = new Date().setDate(new Date().getDate());
        const workout = new Workout(data);
        workout
            .save()
            .then(() => {
                res.json(workout);
            })
            .catch(error => {
                console.log(error);
            });
    });

    app.put('/api/workouts/:id', async (req, res) => {
        try {
            const newWorkout = await Workout.findById(req.params.id);
            newWorkout.exercises.push(req.body);
            newWorkout.totalDuration = newWorkout.totalDuration + req.body.duration;
            newWorkout
                .save()
                .then(() => {
                    res.json(newWorkout);
                })
                .catch(error => {
                    console.log(error);
                    res.status(500).send(error);
                });
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });

    app.get(`/api/workouts/range`, async (req, res) => {
        try {
            const data = await Workout.find({});
            console.log(data);
            res.json(data);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    });
};