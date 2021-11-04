import { Specification } from "../../model/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    const all = this.specificationsRepository.list();

    return all;
  }
}

export { ListSpecificationsUseCase };
