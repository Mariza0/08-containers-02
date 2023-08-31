import ErrorRepository from '../classes/error';

test.each([
  [
    404, 'Запрошенный ресурс не найден',
  ],
  [
    400, 'некорректный запрос',
  ],
  [
    300, 'Unknown error',
  ],
  [
    null, 'Unknown error',
  ],
])('проверка кода ошибки', (code, expectation) => {
  const map = new ErrorRepository();
  const res = map.translate(code);
  expect(res).toBe(expectation);
});
