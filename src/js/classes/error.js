export default class ErrorRepository {
  constructor() {
    this.error = new Map([[404, 'Запрошенный ресурс не найден'], [400, 'некорректный запрос']]);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}
