export class Exercise {
    constructor(
        public name: string,
        public title: string,
        public description: string,
        public image: string,
        public nameSound?: string,
        public procedure?: string,
        public videos?: string[]

    ) { }
}

export class WorkoutPlan {
    constructor(
        public name: string,
        public title: string,
        public restBetweenExercise: number,
        public exercises: ExercisePlan[],
        public description?: string

    ) { }

    totalWorkoutDuration(): number { return; }
}

export class ExercisePlan {
    constructor(
        public exercise: Exercise,
        public duration: number
    ) { }
}