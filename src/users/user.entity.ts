import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
 
@Entity()
class UserEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  birthDate: string

  @Column()
  email: string

  @Column()
  password: string
}
 
export default UserEntity;