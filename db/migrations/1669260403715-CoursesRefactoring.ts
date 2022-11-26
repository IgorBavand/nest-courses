import { MigrationInterface, QueryRunner } from "typeorm"

export class CoursesRefactoring1669260403715 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `alter table "courses" rename column "name" to "course"`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `alter table "courses" rename column "course" to "name"`
        );
    }

}
