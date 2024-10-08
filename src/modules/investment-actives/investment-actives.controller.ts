import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvestmentActivesService } from './investment-actives.service';
import { CreateInvestmentActiveDto } from './dto/create-investment-active.dto';
import { UpdateInvestmentActiveDto } from './dto/update-investment-active.dto';

@Controller('investment-actives')
export class InvestmentActivesController {
  constructor(private readonly investmentActivesService: InvestmentActivesService) {}

  @Post()
  create(@Body() createInvestmentActiveDto: CreateInvestmentActiveDto) {
    return this.investmentActivesService.create(createInvestmentActiveDto);
  }

  @Get()
  findAll() {
    return this.investmentActivesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investmentActivesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvestmentActiveDto: UpdateInvestmentActiveDto) {
    return this.investmentActivesService.update(+id, updateInvestmentActiveDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investmentActivesService.remove(+id);
  }
}
