import { dedent } from 'ts-dedent';
import prettier from 'prettier';

import { prettierConfig } from '@prettier/index.js';

const config = {
  ...prettierConfig,
  parser: 'babel'
};

test('validate semicolon', async () => {
  const source = `const foo = 'bar';\n`;

  expect(await prettier.format(source, config)).toEqual(source);
});

test('validate trailing commas in array', async () => {
  const source = dedent`
    const foo = ['milk', 'eggs', 'butter', 'Pepsi', 'cinnamon bears'];\n
  `;
  expect(await prettier.format(source, config)).toEqual(source);
});

test('validate function parameter commas', async () => {
  const source = dedent`
    function foo(parameter1, parameter2, parameter3) {}\n
  `;

  expect(await prettier.format(source, config)).toEqual(source);
});
