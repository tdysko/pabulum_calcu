export class Workout {
    TotalDistance: Number = 0;
    AvgSpeed: Number = 0;
    TotalTime: Number = 0;
    WorkoutName: String = '';
    MaxSpeed: Number = 0;
    File: any;

    MovingTime: Number = 0;
    AvgMovingSpeed: Number = 0;
    LowestElevation: Number = 0;
    HighestElevation: Number = 0;
    ElevationGain: any = 0;
    ElevationDrop: any = 0;
    AvgHeartRate: Number = 0;
    WorkoutType: String;

    Date: Date;

    constructor(totalDistance: Number,
        avgSpeed: Number,
        totalTime: number,
        workoutName: String,
        maxSpeed: number,
        movingTime: any,
        avgMovingSpeed: any,
        lowestElevation: any,
        highestElevation: any,
        elevationGain: any,
        elevationLoss: any,
        avgHr: any,
        date: Date,
        file: any) {
        this.TotalDistance = totalDistance;
        this.AvgSpeed = avgSpeed;
        this.TotalTime = totalTime;
        this.WorkoutName = workoutName;
        this.MaxSpeed = maxSpeed;
        this.MovingTime = movingTime;
        this.AvgMovingSpeed = avgMovingSpeed;
        this.LowestElevation = lowestElevation;
        this.HighestElevation = highestElevation;
        this.ElevationGain = elevationGain;
        this.ElevationDrop = elevationLoss;
        this.AvgHeartRate = avgHr;
        this.Date = date;
        this.File = file;
    }
}
