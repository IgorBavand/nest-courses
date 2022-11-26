import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CoursesTestMigration1669497429351 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("course");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'course',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name:'name',
                    type: 'text',
                    isNullable: false
                }
            ]
        }))

    }
}
