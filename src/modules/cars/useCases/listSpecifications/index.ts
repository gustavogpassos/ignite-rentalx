import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationsRepository.getInstance();
const listSpecificartionsUseCase = new ListSpecificationsUseCase(
  specificationsRepository
);
const listSpecificationsController = new ListSpecificationsController(
  listSpecificartionsUseCase
);

export { listSpecificationsController };
