import { InjectModel } from '@nestjs/mongoose';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { Table, TableDocument } from './schemas/table.schema';
import { CreateTableDto } from './dto/create.table.dto';
import { UpdateTableDto } from './dto/update.table.dto';

@Injectable()
export class TableService {
  constructor(
    @InjectModel(Table.name)
    private readonly tableModel: Model<TableDocument>,
  ) {}

  async findAll(company): Promise<Table[]> {
    return await this.tableModel.find(company).exec();
  }

  async create(createTableDto: CreateTableDto): Promise<Table> {
    return await this.tableModel.create(createTableDto);
  }

  async findById(id: string) {
    const isValidId = mongoose.isValidObjectId(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter correct id.');
    }

    const table = await this.tableModel.findById({ _id: id });

    if (table) {
      return table;
    } else {
      throw new NotFoundException('Table not found.');
    }
  }

  async updateById(id: string, updateTableDto: UpdateTableDto): Promise<Table> {
    const updatedTable = this.tableModel.findByIdAndUpdate(
      { _id: id },
      updateTableDto,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedTable) {
      throw new BadRequestException('Please enter correct id.');
    }
    return updatedTable;
  }

  async deleteById(id: string): Promise<Table> {
    return this.tableModel.findByIdAndDelete({ _id: id });
  }
}
