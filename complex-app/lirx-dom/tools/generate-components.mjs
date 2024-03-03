import { mkdir, rm, readFile, writeFile, cp } from 'node:fs/promises';
import { join, dirname, relative } from 'node:path';

const angular = true;

const ROOT_PATH = join(dirname(new URL(import.meta.url).pathname), '..');
const SRC_PATH = angular
  ? join(ROOT_PATH, '../angular/src')
  : join(ROOT_PATH, 'src');

// const TEMPLATES_PATH = join(ROOT_PATH, 'tools', 'lirx-dom');
// const TEMPLATES_PATH = join(ROOT_PATH, 'tools', 'angular/default');
const TEMPLATES_PATH = join(ROOT_PATH, 'tools', 'angular/onpush');


function replaceVariables(template, variables) {
  Object.entries(variables).forEach(([key, value]) => {
    template = template.replaceAll(`[{${key}}]`, value);
  });
  return template;
}

function dashCaseToPascalCase(input) {
  return input.replace(/(?:^|-)([a-z0-9])/g, (_, character) => {
    return character.toUpperCase();
  });
}

/* TEMPLATE 1 */

const TEMPLATE_1_PATH = join(TEMPLATES_PATH, 'template-1');
const TEMPLATE_1_HTML_PATH = join(TEMPLATE_1_PATH, 'template-1.component.html');
const TEMPLATE_1_SCSS_PATH = join(TEMPLATE_1_PATH, 'template-1.component.scss');
const TEMPLATE_1_TS_PATH = join(TEMPLATE_1_PATH, 'template-1.component.ts');
const TEMPLATE_1_HTML = await readFile(TEMPLATE_1_HTML_PATH, { encoding: 'utf8' });
const TEMPLATE_1_SCSS = await readFile(TEMPLATE_1_SCSS_PATH, { encoding: 'utf8' });
const TEMPLATE_1_TS = await readFile(TEMPLATE_1_TS_PATH, { encoding: 'utf8' });

async function createTemplate1(
  destinationPath,
  {
    name,
    template,
    imports,
    components,
  },
) {

  const variables = {
    name,
    namePascalCase: dashCaseToPascalCase(name),
    template,
    imports,
    components,
  };

  const html = replaceVariables(TEMPLATE_1_HTML, variables);
  const scss = replaceVariables(TEMPLATE_1_SCSS, variables);
  const ts = replaceVariables(TEMPLATE_1_TS, variables);

  await mkdir(destinationPath, { recursive: true });
  await writeFile(join(destinationPath, `${name}.component.html`), html);
  await writeFile(join(destinationPath, `${name}.component.scss`), scss);
  await writeFile(join(destinationPath, `${name}.component.ts`), ts);
}

/* TEMPLATE 2 */

const TEMPLATE_2_PATH = join(TEMPLATES_PATH, 'template-2');
const TEMPLATE_2_HTML_PATH = join(TEMPLATE_2_PATH, 'template-2.component.html');
const TEMPLATE_2_SCSS_PATH = join(TEMPLATE_2_PATH, 'template-2.component.scss');
const TEMPLATE_2_TS_PATH = join(TEMPLATE_2_PATH, 'template-2.component.ts');
const TEMPLATE_2_HTML = await readFile(TEMPLATE_2_HTML_PATH, { encoding: 'utf8' });
const TEMPLATE_2_SCSS = await readFile(TEMPLATE_2_SCSS_PATH, { encoding: 'utf8' });
const TEMPLATE_2_TS = await readFile(TEMPLATE_2_TS_PATH, { encoding: 'utf8' });


async function createTemplate2(
  destinationPath,
  {
    name,
  },
) {

  const variables = {
    name,
    namePascalCase: dashCaseToPascalCase(name),
  };

  const html = replaceVariables(TEMPLATE_2_HTML, variables);
  const scss = replaceVariables(TEMPLATE_2_SCSS, variables);
  const ts = replaceVariables(TEMPLATE_2_TS, variables);

  await mkdir(destinationPath, { recursive: true });
  await writeFile(join(destinationPath, `${name}.component.html`), html);
  await writeFile(join(destinationPath, `${name}.component.scss`), scss);
  await writeFile(join(destinationPath, `${name}.component.ts`), ts);
}


/* TEMPLATE 3 */

const TEMPLATE_3_PATH = join(TEMPLATES_PATH, 'template-3');
const TEMPLATE_3_TS_PATH = join(TEMPLATE_3_PATH, 'template-3.ts');
const TEMPLATE_3_TS = await readFile(TEMPLATE_3_TS_PATH, { encoding: 'utf8' });


async function createTemplate3(
  destinationPath,
  {
    imports,
    bootstrapComponent,
  },
) {

  const variables = {
    imports,
    bootstrapComponent,
  };

  const ts = replaceVariables(TEMPLATE_3_TS, variables);

  await mkdir(destinationPath, { recursive: true });
  await writeFile(join(destinationPath, `index.ts`), ts);
}


/* CREATE COMPONENTS */


async function createComponentsTree(
  destinationPath,
  width,
  depth,
) {
  const name = 'app-' + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const path = join(destinationPath, name);

  if (depth <= 0) {
    await createTemplate2(path, { name });
  } else {
    const subComponents = await Promise.all(
      Array.from({ length: width }, () => {
        return createComponentsTree(join(path, 'components'), width, depth - 1);
      }),
    );

    const template = subComponents.map(([name]) => {
      return `<${name}></${name}>`;
    }).join('\n');

    const imports = subComponents.map(([name, childPath]) => {
      const absoluteTsPath = join(childPath, `${name}.component`);
      const relativeTsPath = './' + relative(path, absoluteTsPath);
      return `import { ${dashCaseToPascalCase(name)}Component } from ${JSON.stringify(relativeTsPath)};`;
    }).join('\n');

    const components = subComponents.map(([name]) => {
      return `${dashCaseToPascalCase(name)}Component,`;
    }).join('\n');

    await createTemplate1(path, {
      name,
      template,
      imports,
      components,
    });
  }

  return [name, path];
}

async function createApp(
  width,
  depth,
) {
  const path = SRC_PATH;

  await rm(path, { recursive: true, force: true });

  const [name, childPath] = await createComponentsTree(path, width, depth);

  const absoluteTsPath = join(childPath, `${name}.component`);
  const relativeTsPath = './' + relative(path, absoluteTsPath);

  const imports = `import { ${dashCaseToPascalCase(name)}Component } from ${JSON.stringify(relativeTsPath)};`;
  const bootstrapComponent = `${dashCaseToPascalCase(name)}Component`;

  await createTemplate3(path, {
    imports,
    bootstrapComponent,
  });

  if (angular) {
    await cp(join(TEMPLATES_PATH, 'src'), SRC_PATH, { recursive: true });
    const indexPath = join(SRC_PATH, 'index.html');
    const indexContent = await readFile(indexPath, { encoding: 'utf8' });
    const newIndexContent = indexContent.replaceAll('app-root', name);
    await writeFile(indexPath, newIndexContent);
  }
}

async function run() {
  await createApp(5, 5);
  // await createApp(1, 1);

}

run();

