import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';


const envDir = './src/environments';
const targetPath = join(envDir, 'environment.ts');


if (!existsSync(envDir)) {
  mkdirSync(envDir, { recursive: true });
}

const adminKey = process.env['ADMIN_KEY'] || 'dev-key';

const envConfigFile = `export const environment = {
  production: true,
  adminKey: '${adminKey}'
};
`;

try {
  writeFileSync(targetPath, envConfigFile);
  console.log(`✅ environment.ts generado con éxito en ${targetPath}`);
} catch (err) {
  console.error('❌ Error al generar el archivo:', err);
  process.exit(1);
}
