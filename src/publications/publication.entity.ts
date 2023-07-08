import { Column, Entity, PrimaryGeneratedColumn, ManyToOne  } from 'typeorm';
import UserEntity from '../users/user.entity';
 
@Entity()
class PublicationEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  publicationDate: string

  @Column({ type: 'text', transformer: {
    to: (value: string[]) => JSON.stringify(value),
    from: (value: string) => JSON.parse(value),
  } })
  images: string[];

  @ManyToOne(() => UserEntity, user => user.publications)
  user: UserEntity;
}
 
export default PublicationEntity;