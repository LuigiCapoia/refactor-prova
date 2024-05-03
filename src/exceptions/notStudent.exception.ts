import { BadRequestException } from "@nestjs/common";

export class NotFindedStudentsExceptions extends BadRequestException {
    constructor() {
        super('No students found in this course');
      }
}

export class StudentNotExists extends BadRequestException {
    constructor () {
        super('Nao existe estudantes nesse curso')
    }
}