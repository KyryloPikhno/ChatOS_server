import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { UpdateTableDto } from './dto/update.table.dto';
import { CreateTableDto } from './dto/create.table.dto';
import { TableService } from './table.service';
import { Table } from './schemas/table.schema';

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @Get()
  async findAll(@Query('company') company: string): Promise<Table[]> {
    return this.tableService.findAll({
      companyName: new RegExp(company),
    });
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return this.tableService.create(createTableDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Table> {
    return this.tableService.findById(id);
  }

  @Put(':id')
  async updateById(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<Table> {
    return this.tableService.updateById(id, updateTableDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string): Promise<Table> {
    return this.tableService.deleteById(id);
  }
}
