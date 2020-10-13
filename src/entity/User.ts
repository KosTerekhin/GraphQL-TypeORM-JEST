import { Entity, PrimaryColumn, Column, BeforeInsert, BaseEntity } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity('users')
export class User extends BaseEntity {

    @PrimaryColumn("uuid")
    id: string;

    @Column("varchar", { length: 255 })
    email: string;

    @Column("varchar", { length: 255 })
    password: string;

    @BeforeInsert()
    addId() {
        this.id = uuid()
    }

}
