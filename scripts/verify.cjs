const fs=require('node:fs');
const assert=require('node:assert/strict');
const path=require('node:path');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const paths=['src/App.tsx','src/PortalModules.tsx','src/main.tsx'];
for(const relative of paths){
  const filename=path.join(root,relative);
  const code=fs.readFileSync(filename,'utf8');
  const result=ts.transpileModule(code,{fileName:filename,reportDiagnostics:true,compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,jsx:ts.JsxEmit.ReactJSX}});
  const errors=(result.diagnostics||[]).filter(d=>d.category===ts.DiagnosticCategory.Error);
  assert.equal(errors.length,0,`${relative} has parser errors: ${errors.map(e=>ts.flattenDiagnosticMessageText(e.messageText,' '))}`);
  console.log('✓ React/TS syntax:',relative);
}
const app=fs.readFileSync(path.join(root,'src/App.tsx'),'utf8');
const modules=fs.readFileSync(path.join(root,'src/PortalModules.tsx'),'utf8');
const styles=fs.readFileSync(path.join(root,'src/styles.css'),'utf8');
const core=[...app.matchAll(/const coreRoutes:Route\[\]=\[([^\]]+)\]/g)].flatMap(m=>[...m[1].matchAll(/'([^']+)'/g)].map(x=>x[1]));
const additional=modules.match(/export const MODULE_ROUTES = \[([\s\S]+?)\] as const/);
assert.ok(additional,'module route registry found');
const more=[...additional[1].matchAll(/'([^']+)'/g)].map(x=>x[1]);
const all=new Set([...core,...more]);
for(const [kind,source] of [['App',app],['PortalModules',modules]]){
  const uses=[...source.matchAll(/(?:navigate|onNavigate)\('([^']+)'\)|navTo\(navigate,'([^']+)'|route:'([^']+)'/g)].map(m=>m[1]||m[2]||m[3]);
  const missing=uses.filter(v=>!all.has(v));
  assert.deepEqual([...new Set(missing)],[],`Unregistered navigation destinations in ${kind}`);
  console.log(`✓ ${kind}: ${uses.length} internal navigation references verified`);
}
for(const color of ['#890c25','#351321','#faf7f2','#e9be72'])assert.ok(styles.toLowerCase().includes(color),`Missing design token ${color}`);
console.log(`✓ ${all.size} routes registered, expected Prathyusha design tokens found`);
console.log('✓ Syntax and structure complete (runtime build requires npm install)');
