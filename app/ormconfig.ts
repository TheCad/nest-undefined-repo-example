import { ConfigModule } from '@nestjs/config';
import { DataSource } from 'typeorm';
import dbConfiguration from 'src/config/database.config';

ConfigModule.forRoot({
  isGlobal: true,
  load: [dbConfiguration],
});
export default new DataSource(dbConfiguration());
