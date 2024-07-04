import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ToursService } from './tours.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Controller('tours')
export class ToursController {
  constructor(private readonly toursService: ToursService) {}

  @Post()
  create(@Body() createTourDto: CreateTourDto) {
    return this.toursService.createTour(createTourDto);
  }

  @Get()
  findAll() {
    return this.toursService.findAllTour();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.toursService.findOneTour(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return this.toursService.updateTour(+id, updateTourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.toursService.removeTour(+id);
  }
}
