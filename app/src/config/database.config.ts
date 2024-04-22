import { registerAs } from '@nestjs/config';
import { DataSourceOptions } from 'typeorm';

export default registerAs('database', () => {
  return {
    type: 'mariadb',
    schema: 'example',
    autoLoadEntities: true,
    url: process.env.DB_URL,
    migrations: [__dirname + '/../migrations/*.{ts,js}'],
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  } as DataSourceOptions;
});
