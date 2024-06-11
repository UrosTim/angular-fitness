import { Exercise } from "./exercise.model"

export class TrainingService {
    private excercises: Exercise [] = [
        {
            id: 'running',
            name: 'Morning run',
            duration: 60,
            calories: 420,
            date: new Date(),
            status: 'canceled'
        },
        {
            id: 'running',
            name: 'Evening run',
            duration: 30,
            calories: 220,
            date: new Date(),
            status: 'canceled'
        },
        {
            id: 'walking',
            name: 'Hill hike',
            duration: 180,
            calories: 320,
            date: new Date(),
            status: 'done'
        },
        {
            id: 'running',
            name: 'Sprints',
            duration: 20,
            calories: 690,
            date: new Date(),
            status: 'done'
        },
        {
            id: 'squats',
            name: 'Regular squats',
            duration: 40,
            calories: 200,
            date: new Date(),
            status: 'done'
        },
        {
            id: 'squats',
            name: 'Romanian squats',
            duration: 30,
            calories: 240,
            date: new Date(),
            status: 'canceled'
        },
        {
            id: 'squats',
            name: 'Bulgarian squats',
            duration: 20,
            calories: 230,
            date: new Date(),
            status: 'done'
        }
    ]

    getExercises() {
        return this.excercises
    }
}