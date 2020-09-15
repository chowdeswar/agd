import { Component, OnInit } from "@angular/core";
import { Exercise, ExercisePlan, WorkoutPlan } from './Exercise';

@Component({
    selector: 'workout-runner',
    templateUrl: './workout-runner.component.html',
    styles: [''],
})

export class WorkoutRunnerComponent implements OnInit {

    workoutPlan: WorkoutPlan;
    restExercise: ExercisePlan;

    constructor() {
        this.workoutPlan = this.buildWorkout();
        this.restExercise = new ExercisePlan(new Exercise("Rest", "Relax", "Realx a Bit", "Rest.png"),this.workoutPlan.restBetweenExercise);
        this.workoutPlan.title = "Daily Workout Plan";
        console.log(this.workoutPlan);
     }

    ngOnInit() {
        console.log('workout runner component is initialized');
    }

    buildWorkout() {
        let workout: WorkoutPlan = new WorkoutPlan("7MinWorkout", "7 Minute Workout", 10, []);
        workout.exercises.push(new ExercisePlan(new Exercise("jumpingJacks", "jumping Jacks", "A jumping jacks or star jump, also called side-straddle", "jumpingjacks.png", ""), 30));
        return workout;
    }
}