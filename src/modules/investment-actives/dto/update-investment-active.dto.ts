import { PartialType } from '@nestjs/mapped-types';
import { CreateInvestmentActiveDto } from './create-investment-active.dto';

export class UpdateInvestmentActiveDto extends PartialType(CreateInvestmentActiveDto) {}
