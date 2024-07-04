import { Injectable } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class ToursService {
  constructor(
    @InjectRepository(Tour) private readonly tourRepository: Repository<Tour>,
  ) {}

  createTour(createTourDto: CreateTourDto): Promise<Tour> {
    const tour: Tour = new Tour();
    tour.id = createTourDto.id;
    tour.name = createTourDto.name;
    tour.price = createTourDto.price;
    tour.image = createTourDto.category;
    tour.category = createTourDto.category;
    tour.description = createTourDto.description;
    tour.rate = createTourDto.rate;
    tour.amountoftime = createTourDto.amountoftime;
    return this.tourRepository.save(tour);
  }

  findAllTour(): Promise<Tour[]> {
    return this.tourRepository.find();
  }

  findOneTour(id: number) {
    return this.tourRepository.findOneBy({ id });
  }

  updateTour(id: number, updateTourDto: UpdateTourDto): Promise<Tour> {
    const tour: Tour = new Tour();
    tour.name = updateTourDto.name;
    tour.price = updateTourDto.price;
    tour.image = updateTourDto.image;
    tour.category = updateTourDto.category;
    tour.description = updateTourDto.description;
    tour.rate = updateTourDto.rate;
    tour.amountoftime = updateTourDto.amountoftime;
    tour.id = id;
    return this.tourRepository.save(tour);
  }

  removeTour(id: number) {
    return this.tourRepository.delete(id);
  }
}
