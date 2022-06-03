import { ApisController } from "./Controllers/ApisController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { TimeController } from "./Controllers/TimeController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";

class App {
  // valuesController = new ValuesController();

  apisController = new ApisController()
  tasksController = new TasksController()
  imagesController = new ImagesController()
  weatherController = new WeatherController()
  timeController = new TimeController()
}

window["app"] = new App();
