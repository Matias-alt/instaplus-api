import { MigrationInterface, QueryRunner } from "typeorm";

export class  CreatePublicationTable1687103150684 implements MigrationInterface {
    name = ' CreatePublicationTable1687103150684'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "publication_entity" ("id" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "publicationDate" character varying NOT NULL, "images" text NOT NULL, "userId" integer, CONSTRAINT "PK_7ef04f09e1731ecc29db19764e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "publication_entity" ADD CONSTRAINT "FK_a3e42c7dc2e3e2daf07d8191bb8" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication_entity" DROP CONSTRAINT "FK_a3e42c7dc2e3e2daf07d8191bb8"`);
        await queryRunner.query(`DROP TABLE "publication_entity"`);
    }

}
