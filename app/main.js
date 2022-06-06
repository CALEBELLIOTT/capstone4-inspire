import { ApisController } from "./Controllers/ApisController.js";
import { ImagesController } from "./Controllers/ImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
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

  quotesController = new QuotesController()
}

window["app"] = new App();
