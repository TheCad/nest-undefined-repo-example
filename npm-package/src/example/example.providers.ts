import { Provider } from '@nestjs/common';
import { getDataSourceToken, getRepositoryToken } from '@nestjs/typeorm';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { DataSource, DataSourceOptions, getMetadataArgsStorage } from 'typeorm';

export function createExampleProviders(
  entities?: EntityClassOrSchema[],
  dataSource?: DataSource | DataSourceOptions | string,
): Provider[] {
  return (entities || []).map((entity) => ({
    provide: getRepositoryToken(entity, dataSource),
    useFactory: (dataSource: DataSource) => {
      const entityMetadata = dataSource.entityMetadatas.find(
        (meta) => meta.target === entity,
      );
      const isTreeEntity = typeof entityMetadata?.treeType !== 'undefined';
      return isTreeEntity
        ? dataSource.getTreeRepository(entity)
        : dataSource.getRepository(entity);
    },
    inject: [getDataSourceToken(dataSource)],
    targetEntitySchema: getMetadataArgsStorage().tables.find(
      (item) => item.target === entity,
    ),
  }));
}
