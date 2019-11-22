import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RequirementsData {
  Weight = 0;
  Height = 0;
  Sex = 0;
  Age = 0;
  LifeStyle = 0;
  Metabolism = 0;

  tdee = 0;
  public wiek = 29;
  time = 0;
  intensity = 0;
  workouttype = 0;
  goal = 0;

  private BMR = 0;
  private TEF = 0;
  private TEA = 0;
  private NEAT = 0;
  private EPOC = 0;

  ProteinsRequired = 0;
  CarbohydratessRequired = 0;
  FatsRequired = 0;
}

export class RequirementsdataService {
  private BMR = 0;
  private TEF = 0;
  private TEA = 0;
  private NEAT = 0;
  private EPOC = 0;

  constructor() {
    this.InitEmptyRequirements();
  }

  Requirements: RequirementsData = null;

  public InitEmptyRequirements() {
    this.Requirements = new RequirementsData();
  }

  public SetRequirements(ProtsRequired: number, CarbsRequired: number, FtsReqiured: number) {
    // this.Requirements = new RequirementsData();
    this.Requirements.ProteinsRequired = parseFloat(ProtsRequired.toPrecision(5));
    this.Requirements.CarbohydratessRequired = parseFloat(CarbsRequired.toPrecision(5));
    this.Requirements.FatsRequired = parseFloat(FtsReqiured.toPrecision(5));
  }

  ObliczZapotrzebowanie(): number {
    this.Requirements.tdee = this.GetTEF(
      this.GetBMR(this.Requirements.Weight, this.Requirements.Height, this.Requirements.wiek, this.Requirements.Sex)
      + this.GetTEA(this.Requirements.time, this.Requirements.intensity, this.Requirements.workouttype)
      + this.GetEPOC(this.Requirements.time, this.Requirements.intensity, this.Requirements.workouttype)
      + this.GetNEAT(this.Requirements.LifeStyle, this.Requirements.Metabolism)
    );
    if (this.Requirements.tdee.toString().indexOf('.') !== -1) {
      this.Requirements.tdee = parseFloat(this.Requirements.tdee.toString().substr(0, this.Requirements.tdee.toString().indexOf('.')));
    }
    if (this.Requirements.goal === 1) {
      this.Requirements.tdee = this.Requirements.tdee - 300;
    } else if (this.Requirements.goal === 3) {
      this.Requirements.tdee = this.Requirements.tdee + 300;
    }
    this.SetRequirements((this.Requirements.tdee * 0.15) / 4, (this.Requirements.tdee * 0.55) / 4, (this.Requirements.tdee * 0.3) / 9);
    return this.Requirements.tdee;
  }

  private GetTEF(BMR: number): number {
    this.TEF = 0;
    this.TEF = (BMR * (107 / 100));
    return this.TEF;
  }

  private GetNEAT(Lifestyle: number, BodyType: number): number {
    if (Lifestyle === 1) {
      if (BodyType === 1) {
        this.NEAT = 900;
      } else if (BodyType === 2) {
        this.NEAT = 800;
      } else if (BodyType === 3) {
        this.NEAT = 700;
      }
    }
    if (Lifestyle === 2) {
      if (BodyType === 1) {
        this.NEAT = 500;
      } else if (BodyType === 2) {
        this.NEAT = 450;
      } else if (BodyType === 3) {
        this.NEAT = 400;
      }
    }
    if (Lifestyle === 3) {
      if (BodyType === 1) {
        this.NEAT = 400;
      } else if (BodyType === 2) {
        this.NEAT = 300;
      } else if (BodyType === 3) {
        this.NEAT = 200;
      }
    }
    return this.NEAT;
  }

  private GetEPOC(Time: number, Intensity: number, WorkoutType: number): number {
    if (Time > 0) {
      if (Intensity === 1) {
        this.EPOC = 0.04 * this.BMR;
      } else if (Intensity === 2) {
        this.EPOC = 0.045 * this.BMR;
      } else if (Intensity === 3) {
        this.EPOC = 0.05 * this.BMR;
      } else if (Intensity === 4) {
        this.EPOC = 0.055 * this.BMR;
      } else if (Intensity === 5) {
        this.EPOC = 0.06 * this.BMR;
      } else if (Intensity === 6) {
        this.EPOC = 0.065 * this.BMR;
      }
    }
    console.log('epoc' + this.EPOC);
    return this.EPOC;
  }

  private GetBMR(Weight: number = 0, Height: number = 0, Age: number = 0, Sex: number = 0): number {

    if (Weight !== 0 && Height !== 0 && Age !== 0 && Sex !== 0) {
      if (Sex === 1) {
        this.BMR = (10 * Weight) + (6.25 * Height) - (5 * Age) + 5;
      } else {
        this.BMR = (10 * Weight) + (6.25 * Height) - (5 * Age) - 161;
      }
    } else {
      this.BMR = 0;
    }
    return this.BMR;
  }

  public GetTEA(Time: number, Intensity: number, WorkoutType: number): number {
    if (WorkoutType === 1) {
      if (Intensity === 1) {
        this.TEA = 5 * Time;
      } else if (Intensity === 2) {
        this.TEA = 6 * Time;
      } else if (Intensity === 3) {
        this.TEA = 7 * Time;
      } else if (Intensity === 4) {
        this.TEA = 8 * Time;
      } else if (Intensity === 5) {
        this.TEA = 9 * Time;
      } else if (Intensity === 6) {
        this.TEA = 10 * Time;
      }
    }
    if (WorkoutType === 2) {
      if (Intensity === 1) {
        this.TEA = 7.00 * Time;
      } else if (Intensity === 2) {
        this.TEA = 7.40 * Time;
      } else if (Intensity === 3) {
        this.TEA = 7.80 * Time;
      } else if (Intensity === 4) {
        this.TEA = 8.20 * Time;
      } else if (Intensity === 5) {
        this.TEA = 8.60 * Time;
      } else if (Intensity === 6) {
        this.TEA = 9.00 * Time;
      }
    }
    return this.TEA;
  }

  setWeight(Weight: number) {
    this.Requirements.Weight = Weight;
  }
  setHeight(Height: number) {
    this.Requirements.Height = Height;
  }
  setAge(Age: number) {
    this.Requirements.Age = Age;
  }
  setSex(Sex: number) {
    this.Requirements.Sex = Sex;
  }
  setLifeStyle(LifeStyle: number) {
    this.Requirements.LifeStyle = LifeStyle;
  }
  setMetabolism(Metabolism: number) {
    this.Requirements.Metabolism = Metabolism;
  }
  setGoal(Goal: number) {
    this.Requirements.goal = Goal;
  }

  GetRequirements() {
    return this.Requirements;
  }
}
