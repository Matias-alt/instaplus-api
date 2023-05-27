import { MigrationInterface, QueryRunner } from "typeorm";

export class  CreateUserTable1685154334781 implements MigrationInterface {
    name = 'CreateUserTable1685154334781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "birthDate" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
