import { Injectable } from '@nestjs/common';
import { CreateInvestmentActiveDto } from './dto/create-investment-active.dto';
import { UpdateInvestmentActiveDto } from './dto/update-investment-active.dto';

@Injectable()
export class InvestmentActivesService {
  create(createInvestmentActiveDto: CreateInvestmentActiveDto) {
    return 'This action adds a new investmentActive';
  }

  findAll() {
    return `This action returns all investmentActives`;
  }

  findOne(id: number) {
    return `This action returns a #${id} investmentActive`;
  }

  update(id: number, updateInvestmentActiveDto: UpdateInvestmentActiveDto) {
    return `This action updates a #${id} investmentActive`;
  }

  remove(id: number) {
    return `This action removes a #${id} investmentActive`;
  }
}
