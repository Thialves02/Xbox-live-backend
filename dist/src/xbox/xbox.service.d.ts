import { CreateXboxDto } from './dto/create-xbox.dto';
import { UpdateXboxDto } from './dto/update-xbox.dto';
export declare class XboxService {
    create(createXboxDto: CreateXboxDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateXboxDto: UpdateXboxDto): string;
    remove(id: number): string;
}
