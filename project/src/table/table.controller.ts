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
  async findAll(@Query('name') name: string, @Query('sort') sort: string): Promise<Table[]> {
    let sortQuery = {};

    if (sort === 'desc') {
      sortQuery = {name: -1};
    } else {
      sortQuery = {name: 1};
    }

    return this.tableService.findAll(name, sortQuery);
  }


  @Post()
  create(@Body() createTableDto: CreateTableDto): Promise<Table> {
    return this.tableService.create(createTableDto);
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
