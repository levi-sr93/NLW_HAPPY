import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orphanages') //Com esse decorator o typeorm vai entender que essa classe está relacionada com a tabela orphanages
export default class Orphanages {
  @PrimaryGeneratedColumn('incremet')
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  opening_on_weekends: boolean;
}
