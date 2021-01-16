export class Workout {
    totalDistance: Number = 0;
    avgSpeed: Number = 0;
    totalTime: number = 0;
    workoutName: String = '';
    maxSpeed: number = 0;

    movingTime: any = 0;
    avgMovingSpeed: any = 0;
    lowestElevation: any = 0;
    highestElevation: any = 0;
    elevationGain: any = 0;
    elevationLoss: any = 0;
    avgHr: any = 0;
    avgCadence: any = 0;
    avgTemp: any = 0;
    displayTotalTime: any;

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
        avgCadence: any,
        avgTemp: any) {
        this.totalDistance = totalDistance;
        this.avgSpeed = avgSpeed;
        this.totalTime = totalTime;
        this.workoutName = workoutName;
        this.maxSpeed = maxSpeed;
        this.movingTime = movingTime;
        this.avgMovingSpeed = avgMovingSpeed;
        this.lowestElevation = lowestElevation;
        this.highestElevation = highestElevation;
        this.elevationGain = elevationGain;
        this.elevationLoss = elevationLoss;
        this.avgHr = avgHr;
        this.avgCadence = avgCadence;
        this.avgTemp = avgTemp;
    }
}
