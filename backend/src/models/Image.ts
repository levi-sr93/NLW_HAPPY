import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';

import Orphanage from './Orphanage';

@Entity('images') //Com esse decorator o typeorm vai entender que essa classe está relacionada com a tabela orphanages
export default class Image {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.image)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanage;
}
