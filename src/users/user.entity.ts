import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import PublicationEntity from '../publications/publication.entity';
 
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

  @OneToMany(() => PublicationEntity, publication => publication.user)
  publications: PublicationEntity[];
}
 
export default UserEntity;