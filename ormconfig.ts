import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import UserEntity from './src/users/user.entity';
import PublicationEntity from './src/publications/publication.entity';

import { CreateUserTable1685154334781 } from './src/database/migrations/1685154334781-create_user_table';
import { CreatePublicationTable1687103150684 } from './src/database/migrations/1687103150684-create_publication_table';
 
config();
 
const configService = new ConfigService();
 
export default new DataSource({
  type: 'postgres',
  host: configService.get('POSTGRES_HOST'),
  port: configService.get('POSTGRES_PORT'),
  username: configService.get('POSTGRES_USER'),
  password: configService.get('POSTGRES_PASSWORD'),
  database: configService.get('POSTGRES_DB'),
  entities: [UserEntity, PublicationEntity],
  migrations: [CreateUserTable1685154334781, CreatePublicationTable1687103150684]
});