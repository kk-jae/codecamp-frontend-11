import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //아래의 코드가 테이블이라고 지정
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // number 는 PrimaryGeneratedColumn입니다. increment는 증가하는 숫자, uuid는 유효 id를 뜻 합니다.
  number!: number; // 반드시 필요하다는 ! 추가

  @Column({ type: "text" }) // DB에서 타입 string은 text 입니다.
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;
}
