import { XboxService } from './xbox.service';
import { CreateXboxDto } from './dto/create-xbox.dto';
import { UpdateXboxDto } from './dto/update-xbox.dto';
export declare class XboxController {
    private readonly xboxService;
    constructor(xboxService: XboxService);
    create(createXboxDto: CreateXboxDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateXboxDto: UpdateXboxDto): string;
    remove(id: string): string;
}
